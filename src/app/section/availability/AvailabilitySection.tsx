import Button from "@/components/ui/buttons/Button";
import SelectField from "@/components/ui/inputs/SelectField";
import { selectOptionDayData, selectOptionHourData, selectOptionMinutesData } from "@/constants/form";
import { dateDataType, AvailabilityVisitType } from "@/types/form";
import { useState } from "react";
import AvailabilityItem from "./AvailabilityItem";


export default function AvailabilitySection({handleChange} : {handleChange: (id: string, value: AvailabilityVisitType[])=>void}) {
    const [dateData, setDateData] = useState<dateDataType>({
        day: "",
        hour: "",
        minutes: ""
    });
    const [availabilityList, setAvailabilityList] = useState<AvailabilityVisitType[]>([]);

    const handleDateDataChange = (id: string, value: string) => {
        const newDateData = {...dateData, [id]:value};
        setDateData(newDateData);
    }

    const addNewAvailability = () => {
        if (Object.values(dateData).every((value)=>value != "")) {
            const newAvailability = {
                day: dateData.day,
                time: dateData.hour + "h" + dateData.minutes
            }
            if (availabilityList.every((availability)=>JSON.stringify(availability) != JSON.stringify(newAvailability))) {
                const newAvailabilityList = [...availabilityList, newAvailability];
                setAvailabilityList(newAvailabilityList);
                handleChange("availabilities", newAvailabilityList);
            }
        }
    }

    const removeAvailability = (availableIndex: number) => {
        const newAvailabilityList = availabilityList.filter((available, index)=>availableIndex != index);
        setAvailabilityList(newAvailabilityList);
        handleChange("availabilities",newAvailabilityList);
    }

    return (
        <div className="flex flex-col items-start">
            <h2 className="text-white font-bold">DISPONIBILITÉS POUR UNE VISITE</h2>
            <div className="h-full w-full grid grid-cols-4 grid-rows-4 gap-4">
                <div className="row-start-1">
                    <SelectField id="day" label="--Jour--" selectContent={selectOptionDayData} value="" callback={handleDateDataChange}/>
                </div>
                <div className="row-start-1">
                    <SelectField id="hour" label="--Heure--" selectContent={selectOptionHourData} value="" callback={handleDateDataChange}/>
                </div>
                <div className="row-start-1">
                    <SelectField id="minutes" label="--Minutes--" selectContent={selectOptionMinutesData} value="" callback={handleDateDataChange}/>
                </div>
                <div className="row-start-1">
                    <Button id="Ajouter" bgColor="bg-violet-800" title="AJOUTER DISPO" onClick={addNewAvailability}/>
                </div>
                <div className="col-span-4 row-span-3 flex flex-col items-start overflow-y-auto max-h-3/4">
                    {
                        availabilityList.map((availability, index)=>
                            <AvailabilityItem key={availability.day + availability.time} index={index} {...availability} removeBack={removeAvailability}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}