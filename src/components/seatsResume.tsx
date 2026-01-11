"use client"

import SeatTypes from "../types/seat";

import ResumeSeat from "./ui/resumeSeat";
import Button from "./ui/button";

import { useState, useEffect } from "react";

interface SeatsResumeTypes {
    status: boolean,
    setStatus: (status: boolean) => void
    seats: any[]
    setSelectedSeats: (seats: any[]) => void
    show: any
}

export default function SeatsResume({ status, setStatus, seats, setSelectedSeats, show }: SeatsResumeTypes) {
    const [total, setTotal] = useState(0);
    const seatPrice = 5990;
    const iva = 0.19;

    const calculateTotal = () => {
        setTotal(Math.round(seats.length * seatPrice));
    }

    useEffect(() => {
        calculateTotal();
    }, [seats]);

    const handleDeleteSeat = (id: number) => {
        const newSeats = seats.filter((seat: SeatTypes) => seat.seatid !== id);
        setSelectedSeats(newSeats);
    }

    return (
        status ? (
            <div className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-black/50">
                <div className="grid lg:grid-cols-[70%_30%] items-center gap-2 px-2 md:px-4 py-2 md:py-4 bg-darkest-gray rounded-[5px] md:text-base text-sm w-[95%] min-h-[50%] max-h-[90vh] overflow-y-auto">

                    {/* 1. ASIENTOS: Forzamos Fila 1 / Columna 1 */}
                    <div className="flex items-center flex-col bg-gray p-3 rounded-[5px] h-full w-full lg:col-start-1 lg:row-start-1">
                        <h1 className="text-center bg-darkest-gray p-4 lg:w-[40%] md:w-[60%] w-[80%] rounded-[5px] font-bold">Asientos Seleccionados</h1>
                        <div className="grid  grid-cols-3 md:grid-cols-4 mt-4 w-[100%] gap-2">
                            {
                                seats?.map((seat: SeatTypes) => {
                                    return (
                                        <div key={seat.seatid} className="flex items-center justify-center">
                                            <ResumeSeat seat={seat} selectedSeats={seats} setSelectedSeats={setSelectedSeats} deleteSeat={handleDeleteSeat} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* 2. INFORMACION: Forzamos Fila 2 / Columna 1 */}
                    <div className="bg-gray p-3 rounded-[5px] h-full w-full lg:col-start-1 lg:row-start-2 flex flex-col">
                        <div className="flex items-center mt-2">
                            <hr className="flex-1 border-2 rounded-[3px]" />
                            <h1 className="ml-3 mr-3 font-bold text-md w-fit">Información de la Función</h1>
                            <hr className="flex-1 border-2 rounded-[3px]" />
                        </div>
                        <div className="mt-2 flex flex-col h-full gap-3 justify-center">
                            <h1 className="mt-2">Función: {show.title}</h1>
                            <h1>Sala: {show.saloon.saloonname}</h1>
                            <h1>Hora de Inicio: {show.schedulebegin}</h1>
                            <h1>Hora de Fin: {show.scheduleend}</h1>
                        </div>
                    </div>

                    {/* 3. PAGO: Forzamos Columna 2 / Fila 1 / Y que ocupe 2 Filas de alto */}
                    <div className="flex flex-col items-center bg-gray p-3 rounded-[5px] h-full w-full lg:col-start-2 lg:row-start-1 lg:row-span-2">
                        <h1 className="text-center bg-darkest-gray p-4 rounded-[5px] lg:w-[65%] md:w-[75%] w-[80%] lg:mb-0 mb-6 font-bold">Resumen de Pago</h1>
                        <div className="flex flex-col h-[100%] items-center justify-center gap-4 lg:gap-8">
                            <h1 className="text-center">Precio Asiento: ${seatPrice}CLP</h1>
                            <h1 className="text-center">{seats.length} Asientos: ${seatPrice * seats.length}CLP</h1>
                            <h1 className="text-center">IVA (19%): ${Math.round(total * iva)}CLP</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-auto">
                            <hr className="w-[85%] border-2 rounded-[3px] lg:mt-0 mt-6" />
                            <h1 className="mt-6 mb-6 font-bold">Total: ${Math.round(total + total * iva)}CLP</h1>
                            <div className="flex items-center justify-center gap-2">
                                <Button func={() => { }} text="PAGAR" bg_color="bg-electric-blue" text_color="text-white" width="w-[50%]" height="40px" font_size="text-sm" />
                                <Button func={() => setStatus(false)} text="CANCELAR" bg_color="bg-darkest-gray" text_color="text-white" width="w-[50%]" height="40px" font_size="text-sm" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        ) : null
    );
}