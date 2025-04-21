import CheckBoxGroup from "@/components/ui/inputs/CheckBoxGroup";
import TextField from "@/components/ui/inputs/TextField";
import { genderCheckBoxData } from "@/constants/form";


export default function ContactDetailsSection({handleChange} : {handleChange: (id: string, value: string)=>void}) {
    return (
        <div className="flex flex-col items-start">
            <h2 className="text-white font-bold">VOS COORDONÉES</h2>
            <div className="h-full w-full grid grid-cols-4 grid-rows-4 gap-4">
                <div className="row-start-1 col-span-4 flex flex-row items-end">
                <CheckBoxGroup id="gender" checkBoxData={genderCheckBoxData} callback={handleChange}/>
                </div>
                <div className="row-start-2 col-span-2">
                <TextField id="name" label="Nom" callback={handleChange}/>
                </div>
                <div className="row-start-2 col-span-2">
                <TextField id="lastName" label="Prénom" callback={handleChange}/>
                </div>
                <div className="row-start-3 col-span-full">
                <TextField id="email" label="Adresse mail" type="email" callback={handleChange}/>
                </div>
                <div className="row-start-4 col-span-full">
                <TextField id="phone" label="Téléphone" type="phone" callback={handleChange}/>
                </div>
            </div>
        </div>
    );
}