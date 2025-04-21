export interface dateDataType {
    day: string,
    hour: string,
    minutes: string
}

export interface AvailabilityVisitType {
    day: string,
    time: string
}


export interface ContactFormValues {
    gender: string,
    name: string,
    lastName: string,
    email: string,
    phone: string,
    availabilities: AvailabilityVisitType[],
    reason: string,
    message: string    
}

export interface FormDisplayUiStates {
    errorText: boolean,
    disableButton: boolean,
    msgBox: boolean
}