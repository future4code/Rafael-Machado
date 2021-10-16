import { Product } from "../../entities/Product";
import { BaseDatabase } from "../BaseDatabase";

export class ProductDatabase extends BaseDatabase {

    private static tableName = "labecommerce_products"

    createProduct = async (product: Product) => {
        await BaseDatabase
            .connection(ProductDatabase.tableName)
            .insert(product)
    }

}