
export default function ColorsInfo() {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      { /* Asiento Disponible */}
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-gray rounded-[3px]"></div>
        <p className="text-[12px] font-bold">Asiento Disponible</p>
      </div>
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
      { /* Asiento Seleccionado */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-dark-green rounded-[3px]"></div>
        <p className="text-[12px] font-bold">Asiento de tu Propiedad</p>
      </div>
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
      { /* Asiento Ocupado */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-dark-red rounded-[3px]"></div>
        <p className="text-[12px] font-bold">Asiento Reservado</p>
      </div>
      <div className="h-14 w-1 rounded-[3px] bg-gray"></div>
    </div>
  )
}