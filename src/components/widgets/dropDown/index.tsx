
interface DropDownProps {
    selectedValue: string
    dayList: Array<string>
    onDropDownChangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
const DropDown = ({ selectedValue, dayList, onDropDownChangeValue }: DropDownProps) => {
    return (
        <div className='flex justify-end mr-10'>
            <div className="text-2xl font-bold text-gray-800 pr-8">
                Select Filter:
                <select value={selectedValue} onChange={onDropDownChangeValue} className="text-2xl font-bold text-gray-800 ml-4 px-8 text-center border-solid border-2 border-black rounded">
                    {dayList?.map((day: string) => (
                        <option className="text-2xl text-gray-800 text-left" key={day} value={day}>
                            {`${day} ${parseInt(day) > 1 ? 'days' : 'day'}`}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    )
};

export default DropDown;