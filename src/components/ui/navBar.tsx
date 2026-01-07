"use client"

import Image from "next/image"

import Logo from '../../../public/Logo.png';
import MenuIcon from '../../../public/menu-icon.svg';

import ResponsiveActiveFunctions from "../respActiveFunctions";

import Shows from '../../data/shows.json';

import { useState } from "react";
import { useShow } from "../../context/ShowContext";

export default function NavBar() {
    const [menuState, setMenuState] = useState(false);
    const { selectedShow, setSelectedShow } = useShow();

    return (
        <div>
            <div className="flex items-center h-[50px] bg-darkest-gray">
                <Image src={Logo} width={120} height={120} alt="Logo" className="ml-[-20px]"></Image>
                <h1 className="text-white ml-[-30px]">ClickForSeat</h1>
                <Image src={MenuIcon} width={28} height={28} alt="Menu" className="ml-2 cursor-pointer hover:opacity-50 md:hidden block" onClick={() => setMenuState(!menuState)}></Image>
            </div>
            <ResponsiveActiveFunctions state={menuState} setState={setMenuState} shows={Shows} selectedShow={selectedShow} setSelectedShow={setSelectedShow} />
        </div>
    )
}