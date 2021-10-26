

import { Product } from "./Product";

export class Ticket extends Product {
    constructor (
        id: string,
        name: string,
        description: string,
        price: number,
        readonly origin: string,
        readonly destination: string  
    ) {
        super (id, name, description, price)    

        if(typeof origin !== "string") throw new Error("Type of 'origin' must be a string")
        if(typeof destination !== "string") throw new Error("Type of 'destination' must be a string")
    }
}