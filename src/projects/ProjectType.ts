export type ProjectLink = {
    href: string | undefined
    text: string
    color?: string
}

export type DateContainer = {
    from: number
    to?: number
}

export type Project = {
    name: string
    date: DateContainer
    place?: string
    description?: string[]
    tags?: string[]
    image?: string
    href?: ProjectLink
};