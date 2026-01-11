"use client";

import Seat from "./ui/seat";
import Button from "./ui/button";
import SeatsResume from "./seatsResume";

import SeatTypes from "../types/seat";

import { useState, useEffect } from "react";

import { toast } from 'sonner';

export default function SeatsSelection({ show }: any) {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState<SeatTypes[]>([]);
  const [status, setStatus] = useState(false);

  const getSeats = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/api/seats/getAll`)
      if (response.ok) {
        const data = await response.json()
        setSeats(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSeats()
  }, [])

  // Reiniciamos los asientos seleccionados cada vez que se renderice el componente //
  const deleteSelectedSeats = () => {
    if (selectedSeats.length === 0) {
      toast.info('No hay asientos seleccionados');
    } else {
      // Cambiamos selected a false en todos los asientos del array de asientos seleccionados //
      selectedSeats.forEach((seat) => seat.selected = false);
      setSelectedSeats([])
      toast.success('Seleccion reiniciada!')
    }
  }

  return (
    <>
      <div className="mt-8">
        <div className="w-full overflow-x-auto pb-4">
          <div className="grid grid-cols-10 gap-3 min-w-[1140px] justify-center">
            {
              // si el ID de salon del asiento es igual al id de salon de la funcion, se muestra el asiento //
              seats?.map((seat: any) => {
                if (seat.saloonid === show.saloon.saloonid) {
                  return (
                    <Seat
                      key={seat.seatid}
                      seat={seat}
                      selectedSeats={selectedSeats}
                      setSelectedSeats={setSelectedSeats}
                      deleteSeat={() => { }}
                    />
                  );
                }
                return null;
              })
            }
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className=" w-[60%] h-[12px] bg-gray-text"></div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10">
          <Button func={() => setStatus(true)} text="CONFIRMAR" width="md:w-[25%] w-[45%]" bg_color="bg-electric-blue" text_color="text-white" disabled={selectedSeats.length === 0 ? true : false} />
          <Button func={() => deleteSelectedSeats()} text="REINICIAR" width="md:w-[25%] w-[45%]" bg_color="bg-gray" text_color="text-white" />
        </div>
        <div>
        </div>
      </div>
      <SeatsResume status={status} setStatus={setStatus} seats={selectedSeats} setSelectedSeats={setSelectedSeats} show={show} />
    </>
  )
}