interface Project {
    name: string;
    images: string[];
}

export type Member = {
    id: string;
    name: string;
    position: string;
    image: string;
    projects?: Project[]
}