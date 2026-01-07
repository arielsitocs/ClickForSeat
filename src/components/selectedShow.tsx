
import ColorsInfo from "./ui/colorsInfo";
import SeatsSelection from "./seatsSelection";

export default function SelectedShow({ show }: any) {
  return (
    <div className="w-full mt-auto">
      <h1 className="text-white font-bold text-[18px] md:text-base text-sm">Reservación de Asientos para "{show.title}"</h1>
      <h2 className="text-gray-text mt-2">Horario: {show.scheduleBegin} - {show.scheduleEnd} | Sala {show.saloon}</h2>
      {/* Seccion de Seleccion de Asientos */}
      <SeatsSelection show={show} />
      {/* Seccion de Informacion de Colores */}
      <ColorsInfo />
    </div>
  )
}