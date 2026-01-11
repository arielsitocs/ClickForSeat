import ShowTypes from "../types/show"

export default function Show({ show, index, setSelectedShow, isSelected }: ShowTypes) {

    const handleSelectShow = () => {
        setSelectedShow(show)
    }

    return (
        <div className={`flex items-center min-w-[100%] text-white font-bold text-[12px] mb-6 border-2 ${isSelected ? 'border-electric-blue' : 'border-transparent'} hover:border-electric-blue rounded-[5px] cursor-pointer transition-all`} onClick={handleSelectShow}>
            <div className="flex items-center px-3 py-2 bg-gray rounded-[5px]">
                <h2>{index})</h2>
            </div>
            <div className="ml-1 bg-gray px-3 py-2 rounded-[5px] w-full">
                {show.title} ({show.year}) - {show.saloon.saloonname}
            </div>
        </div>
    )
}