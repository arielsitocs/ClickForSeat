
export default function ColorsInfo() {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      { /* Asiento Disponible */}
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
      <div className="flex items-center gap-2">
        <div className="md:w-7 w-9 md:h-7 h-9 bg-gray rounded-[3px]"></div>
        <p className="md:text-[12px] text-[10px] font-bold">Asiento Disponible</p>
      </div>
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
      { /* Asiento Seleccionado */}
      <div className="flex items-center gap-2">
        <div className="md:w-7 md:h-7 h-9 w-9 bg-dark-green rounded-[3px]"></div>
        <p className="md:text-[12px] text-[10px] font-bold">Asiento de tu Propiedad</p>
      </div>
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
      { /* Asiento Ocupado */}
      <div className="flex items-center gap-2">
        <div className="md:w-7 md:h-7 h-9 w-9 bg-dark-red rounded-[3px]"></div>
        <p className="md:text-[12px] text-[10px] font-bold">Asiento Reservado</p>
      </div>
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
    </div>
  )
}