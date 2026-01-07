import ButtonTypes from "@/src/types/button";

export default function Button({ func, text, bg_color, text_color, width, height, font_size, disabled }: ButtonTypes) {

    const handleClick = () => {
        func();
    }

    return (
        <button
            disabled={disabled}
            className={`flex items-center justify-center ${bg_color} ${disabled === true ? 'opacity-80 hover:translate-none' : ''} px-12 py-2 rounded-[5px] hover:opacity-80 hover:translate-y-[-6px] cursor-pointer transition-all`}
            style={{ width: width, height: height }}
            onClick={handleClick}
        >
            <h1 className={`${text_color} ${font_size}`}>{text}</h1>
        </button>
    )
}