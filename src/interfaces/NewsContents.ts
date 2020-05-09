import { Tag } from "./Tag";

export type NewsContents = {
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    body: string,
    tags: Tag[],
    thumbnail: {
        url: string
    }
}
