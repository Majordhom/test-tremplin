import { boxCheckedType, multipleCheckBoxType } from "@/types/inputs";
import { useState } from "react";
import CheckBox from "./CheckBox";


export default function CheckBoxGroup({id, checkBoxData, callback} : {id:string, checkBoxData: multipleCheckBoxType[], callback: (id:string, value:string) => void}) {
    const [checkedList, setCheckedList] = useState<boxCheckedType[]>(checkBoxData.map((checkbox)=> {return {id:checkbox.id, checked:false};}));

    const handleCheckBoxChange = (fieldId: string, value: string) => {
        const newCheckedList = checkedList.map((checkbox)=>{
            checkbox.checked = (fieldId == checkbox.id);
            return checkbox;
        });
        setCheckedList(newCheckedList);
        callback(id, value);
    }

    return (
        <div className="flex flex-row justify-start items-center">
            {
                checkBoxData.map((data, index)=>
                    <div key={data.id} className="mr-2">
                        <CheckBox {...data} checked={checkedList[index].checked} blocked={true} callback={handleCheckBoxChange}/>
                    </div>
                )
            }
        </div>
    );
}