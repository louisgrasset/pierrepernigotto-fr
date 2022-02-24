export interface Project {
    id: string,
    label: string,
    institution: string,
    details: {
        header?: string,
        items: string[]
    }[]
    class: string
}
