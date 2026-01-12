// archivo para llenar la bd //

import fs from 'fs';
import path from 'path';
import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../../.env') });

console.log("---------------- DIAGNÓSTICO ----------------");
if (!process.env.DIRECT_URL) {
  console.log("❌ ERROR CRÍTICO: DIRECT_URL no existe.");
} else {
  // Vamos a extraer la contraseña para verla (sin mostrar el resto de la URL)
  try {
    const password = process.env.DIRECT_URL.split(':')[2].split('@')[0];
    console.log("✅ URL cargada correctamente.");
    console.log("🔑 La contraseña que el script está intentando usar es:");
    console.log(`--> [ ${password} ] <---`);
    console.log("(Compara esto con lo que pusiste en Supabase)");
  } catch (e) {
    console.log("⚠️ No se pudo parsear la contraseña de la URL. ¿Formato incorrecto?");
    console.log("URL Cruda:", process.env.DIRECT_URL);
  }
}
console.log("---------------------------------------------");

const pool = new pg.Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function seed() {
  try {
    const sqlPath = path.join(__dirname, 'tables.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('🌱 Starting database seeding...');
    console.log(`📡 Connecting to: ${process.env.DIRECT_URL.split('@')[1]}`); // Log host to confirm environment

    await pool.query(sql);

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();
