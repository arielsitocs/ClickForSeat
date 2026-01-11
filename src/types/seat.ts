interface SeatTypes {
  seatid?: number;
  seatnumber?: number;
  saloonid?: number;
  status?: 'avaliable' | 'reserved' | 'unavailable';
  selected?: boolean;
  selectedSeats: SeatTypes[];
  setSelectedSeats: (seats: SeatTypes[]) => void;
  deleteSeat: (id: number) => void;
  seat?: any;
  show?: any;
}

export default SeatTypes;