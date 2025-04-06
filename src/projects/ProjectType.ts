export type ProjectLink = {
    href: string | undefined
    text: string
    color?: string
}

export type Project = {
    name: string
    date: string
    place?: string
    description?: string[]
    tags?: string[]
    image?: string
    href?: ProjectLink
};