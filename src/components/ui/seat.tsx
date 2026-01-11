"use client";

import Image from "next/image";

import SeatIcon from '@/public/seat-icon.svg';

import SeatTypes from '../../types/seat';

import { toast } from "sonner";

export default function Seat({ seat, selectedSeats, setSelectedSeats }: SeatTypes) {

  const handleSeatSelection = () => {
    if (seat.status === 'unavailable') {
      toast.warning('Asiento ya reservado')
    } else if (seat.selected === true) {
      const updatedSeats = selectedSeats?.filter((s) => s.seatid === seat.seatid) || []; // Encontramos asiento para eliminar ese objeto del array si selected es true //
      setSelectedSeats(updatedSeats);
      seat.selected = false;
    } else {
      // si ninguna de las condiciones anteriores se cumple, se anade el asiento al array //
      setSelectedSeats?.([...selectedSeats, seat])
      seat.selected = true;
    }
  }

  return (
    <div className={`flex items-center justify-center w-[90%] h-[55px] rounded-[5px] hover:bg-electric-blue hover:scale-105 ${seat.selected === true ? 'hover:scale-none' : ''} 
    transition-all  cursor-pointer ${seat.status === 'unavailable' ? 'hover:!bg-dark-red hover:scale-none' : ''} 
    ${seat.status === 'reserved' ? 'bg-dark-green' : seat.status === 'unavailable' ? 'bg-dark-red' : 'bg-gray'} ${seat.selected === true ? '!bg-electric-blue' : 'border-none'}`}
      onClick={handleSeatSelection}>
      <Image src={SeatIcon} alt="seat" width={36} height={36} />
      <p className="ml-1">{seat.seatnumber}</p>
    </div>
  )
}
