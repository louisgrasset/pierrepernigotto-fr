import { Company } from "./Company";

export type Study = {
    company: Company,
    label: string,
    details: string[],
    tag: string,
    start: Date,
    end: Date,
}
