import { HeaderTitle, DropDown } from "../../widgets";

type HeaderProps = {
    selectedValue: string
    dayList: Array<string>
    onDropDownChangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
};

const Header = ({ selectedValue, dayList, onDropDownChangeValue }: HeaderProps) => {
    return (
        <>
            <HeaderTitle />
            <DropDown selectedValue={selectedValue} dayList={dayList} onDropDownChangeValue={onDropDownChangeValue} />
        </>
    )
};

export default Header;
