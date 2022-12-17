import { CategoryDTO } from "../models/Category/category";

export function getAll() {
    return categories;
}

let categories: CategoryDTO[] = [
    {
        "id": 1,
        "name": "Computadores"
    },
    {
        "id": 2,
        "name": "Eletrônicos"
    },
    {
        "id": 3,
        "name": "Livros"
    }
]