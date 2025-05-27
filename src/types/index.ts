export type Project = {
    name: string;
    images: string[];
}

export type Member = {
    id: string;
    name: string;
    position: string;
    bio: string;
    image: string;
    projects?: Project[]
}