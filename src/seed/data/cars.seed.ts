import {v4 as uuid} from 'uuid'
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'TLX'
    },
    {
        id: uuid(),
        brand: 'Mercedes Benz',
        model: 'A200'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Onix Turbo'
    }
]