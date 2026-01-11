"use client";

import { useShow } from "../context/ShowContext";

import ActiveFunctions from '../components/activeFunctions';
import SelectedShow from '../components/selectedShow';

export default function Home() {
  const { selectedShow, setSelectedShow } = useShow();

  return (
    <div className="flex bg-black w-full flex-1 px-3 py-4 md:px-4 md:py-10 md:gap-6 gap-2">
      <ActiveFunctions setSelectedShow={setSelectedShow} selectedShow={selectedShow} />
      <div className="flex-1 bg-darkest-gray rounded-[5px] p-6 text-white h-fit w-full max-w-full overflow-hidden">
        {selectedShow ? (
          <SelectedShow show={selectedShow} />
        ) : (
          <div className="flex items-center justify-center h-fit text-gray-text">
            <p>Selecciona una función de la izquierda para comenzar la reservación.</p>
          </div>
        )}
      </div>
    </div>
  );
}
