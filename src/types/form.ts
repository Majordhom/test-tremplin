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
    familyName: string,
    email: string,
    phone: string,
    availability: AvailabilityVisitType[],
    reason: string,
    message: string    
}