"use client";

import Image from "next/image";

import SeatIcon from '@/public/seat-icon.svg';

import SeatTypes from '../../types/seat';

import { toast } from "sonner";

export default function ResumeSeat({ seat, selectedSeats, setSelectedSeats, deleteSeat }: SeatTypes) {

  return (
    <div className="w-[95%] flex flex-col items-center justify-center">
      <p className="text-bright-red text-sm lg:text-base font-bold cursor-pointer hover:opacity-50 transition-all" onClick={() => deleteSeat(seat.seatid)}>x</p>
      <div className={`flex items-center justify-center w-[90%] h-[50px] rounded-[5px] bg-darkest-gray`}>
        <Image src={SeatIcon} alt="seat" width={36} height={36} />
        <p className="m1-2 text-white">{seat.seatnumber}</p>
      </div>
    </div>
  )
}
