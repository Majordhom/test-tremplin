import CheckBoxGroup from "@/components/ui/inputs/CheckBoxGroup";
import TextArea from "@/components/ui/inputs/TextArea";
import { reasonCheckBoxData } from "@/constants/form";


export default function YourMessageSection({handleChange} : {handleChange: (id: string, value: string)=>void}) {
    return (
        <div className="flex flex-col items-start">
            <h2 className="text-white font-bold">VOTRE MESSAGE</h2>
            <div className="h-full w-full grid grid-cols-3 grid-rows-4 gap-4">
              <div className="row-start-1 col-span-3 flex flex-row items-end">
                <CheckBoxGroup id="reason" checkBoxData={reasonCheckBoxData} callback={handleChange}/>
              </div>
              <div className="col-span-3 row-span-3">
                <TextArea id="message" label="Votre message" callback={handleChange}/>
              </div>
            </div>
        </div>
    );
}