'use client'
import { AvailabilityVisitType, ContactFormValues } from "@/types/form";
import { useState } from "react";
import ContactDetailsSection from "./section/contact/ContactDetailsSection";
import AvailabilitySection from "./section/availability/AvailabilitySection";
import YourMessageSection from "./section/message/YourMessageSection";
import Button from "@/components/ui/buttons/Button";


export default function Home() {
  const [form, setForm] = useState<ContactFormValues>({
    gender: "",
    name: "",
    familyName: "",
    email: "",
    phone: "",
    availability: [],
    reason: "",
    message: ""
  }); 

  const handleChange = (id: string, value: string | AvailabilityVisitType[]) => {
    const newForm = {...form, [id]:value};
    console.log(newForm);
    setForm(newForm);
  }

  const verifyForm = (form: ContactFormValues) => {
    return Object.values(form).every((value)=>{
      if (typeof value === "string") {
        return value !== "";
      }
      if (Array.isArray(value)) {
        return value.length > 0;
      }
    });
  }

  const submitForm = () => {
    if (verifyForm(form)) {
      console.log("OK");
    }
    else {
      console.log("REMPLIS MIEUX STP ET VA DORMIR!")
    }
  }

  return (
    <div className="h-screen px-4 py-2 pb-20 sm:px-10 sm:py-5">
      <div className="h-full rounded-3xl bg-salon-pattern bg-cover flex flex-col justify-between px-10 py-6">
        <h1 className="h-1/10 text-left font-bold text-white text-3xl mb-8">CONTACTEZ L&apos;AGENCE</h1>
        <div className="h-9/10 grid grid-cols-2 grid-rows-2 grid-flow-col gap-12">
          <ContactDetailsSection handleChange={handleChange}/>
          <AvailabilitySection handleChange={handleChange}/>
          <YourMessageSection handleChange={handleChange}/>
          <div className="grid grid-cols-3 grid-rows-3">
            <div className="col-start-3 row-start-2 py-6">
              <Button id="Envoyer" bgColor=" bg-amber-500" title="ENVOYER" onClick={submitForm}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
