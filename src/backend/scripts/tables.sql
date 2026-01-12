-- DROP TABLE IF EXISTS saloon;
-- DROP TABLE IF EXISTS show;
-- DROP TABLE IF EXISTS seat;

CREATE TABLE saloon (
	saloonId SERIAL PRIMARY KEY,
	saloonName VARCHAR NOT NULL,
	seatsNumber INT NOT NULL
);

SELECT * FROM saloon;

CREATE TABLE seat (
	seatId SERIAL PRIMARY KEY,
	seatNumber INT NOT NULL,
	seatPrice INT DEFAULT 5500 NOT NULL,
	status VARCHAR DEFAULT 'Available' NOT NULL,
	saloonId INT,
	FOREIGN KEY (saloonId) REFERENCES saloon(saloonId)
);

SELECT * FROM seat;

CREATE TABLE show (
	showId SERIAL PRIMARY KEY,
	title VARCHAR NOT NULL,
	year INT NOT NULL,
	scheduleBegin VARCHAR NOT NULL,
	scheduleEnd VARCHAR NOT NULL,
	saloonId INT,
	FOREIGN KEY (saloonId) REFERENCES  saloon(saloonId)
);

SELECT * FROM show;

INSERT INTO saloon (saloonName, seatsNumber) VALUES 
    ('Sala 1', 50),        -- ID 1
    ('Sala 2', 60),        -- ID 2
    ('Sala 3', 100),           -- ID 3
    ('Sala 4', 30),      -- ID 4
    ('Sala 5', 40);  -- ID 5

INSERT INTO show (title, year, scheduleBegin, scheduleEnd, saloonId) VALUES 
    ('Gladiador 2', 2023, '14:00', '16:30', 1),
    ('Wicked', 2021, '15:00', '17:45', 2),
    ('Mufasa: El Rey León', 2025, '17:00', '19:00', 1),
    ('Sonic 3: La Película', 2022, '12:00', '14:00', 2),
    ('Nosferatu', 2020, '21:00', '23:00', 4),
    ('El Señor de los Anillos: La Guerra de los Rohirrim', 2003, '18:00', '20:30', 3),
    ('Kraven el Cazador', 2019, '16:00', '18:00', 5),
    ('Moana 2', 2018, '11:00', '13:00', 1),
    ('Interstellar (Re-estreno)', 2014, '21:00', '00:00', 3);
	
-- Insercion masiva de los asientos dependiendo de la cantidad de asientos por sala --
INSERT INTO seat (seatNumber, saloonId)
SELECT 
    serie.numero,       -- El número del asiento (1, 2, 3... hasta el límite de la sala)
    sa.saloonId         -- El ID de la sala
FROM 
    saloon sa
CROSS JOIN LATERAL 
    generate_series(1, sa.seatsNumber) AS serie(numero);