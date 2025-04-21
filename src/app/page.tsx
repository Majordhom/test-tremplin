'use client'
import { AvailabilityVisitType, ContactFormValues, FormDisplayUiStates } from "@/types/form";
import { useState } from "react";
import ContactDetailsSection from "./section/contact/ContactDetailsSection";
import AvailabilitySection from "./section/availability/AvailabilitySection";
import YourMessageSection from "./section/message/YourMessageSection";
import Button from "@/components/ui/buttons/Button";
import QuickMsgBox from "@/components/ui/modal/QuickMsgBox";


export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [form, setForm] = useState<ContactFormValues>({
    gender: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    availabilities: [],
    reason: "",
    message: ""
  });
  const [formUiStates, setFormUiStates] = useState<FormDisplayUiStates>({
    errorText: false,
    disableButton: false,
    msgBox: false
  });
  
  const handleChange = (id: string, value: string | AvailabilityVisitType[]) => {
    const newForm = {...form, [id]:value};
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

  const submitForm = async () => {
    if (verifyForm(form)) {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setFormUiStates({errorText: false, disableButton: true, msgBox: true});
      }
    }
    else {
      setFormUiStates({...formUiStates, errorText: true});
    }
  }

  const closeMessageBox = () => {
    setFormUiStates({...formUiStates, msgBox: false});
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
              <Button id="Envoyer" bgColor="bg-amber-500" title="ENVOYER" disabled={formUiStates.disableButton} onClick={submitForm}/>
              {
                formUiStates.msgBox &&
                <QuickMsgBox title="Nous avons bien reçu votre demande." subTitle="nous vous recontacterons dès que possible." textColor="text-amber-500" close={closeMessageBox}/>
              }
            </div>
            <div className="col-start-3 row-start-3 w-full h-full flex flex-row items-start justify-center">
              {
                formUiStates.errorText &&
                <p className="text-red-500 text-shadow-[0_0_6px_#FFFFFF] text-center text-md font-bold">Veillez remplir tous les champs du formulaire</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
