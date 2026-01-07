"use client";

import Seat from "./ui/seat";
import Button from "./ui/button";
import SeatsResume from "./seatsResume";

import Seats from "../data/seats.json";

import SeatTypes from "../types/seat";

import { useState } from "react";

import { toast } from 'sonner';

export default function SeatsSelection({ show }: any) {
  const [selectedSeats, setSelectedSeats] = useState<SeatTypes[]>([]);
  const [status, setStatus] = useState(false);

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
          <div className="grid xl:grid-cols-10 lg:grid-cols-6 grid-cols-4 gap-4 min-w-[590px] justify-center mx-auto">
            {
              // si el ID de salon del asiento es igual al id de salon de la funcion, se muestra el asiento //
              Seats?.map((seat: any) => {
                if (seat.saloonId === show.saloon) {
                  return (
                    <Seat
                      key={seat.id}
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
          <Button func={() => setStatus(true)} text="CONFIRMAR" bg_color="bg-electric-blue" text_color="text-white" disabled={selectedSeats.length === 0 ? true : false} />
          <Button func={() => deleteSelectedSeats()} text="REINICIAR" bg_color="bg-gray" text_color="text-white" />
        </div>
        <div>
        </div>
      </div>
      <SeatsResume status={status} setStatus={setStatus} seats={selectedSeats} setSelectedSeats={setSelectedSeats} show={show} />
    </>
  )
}