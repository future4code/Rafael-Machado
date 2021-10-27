import * as bcrypt from "bcryptjs"
import {config} from "dotenv"

config()

export const generateHash = (
    plainText: string
): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = bcrypt.genSaltSync(rounds)
    return bcrypt.hashSync(plainText, salt)
}

export const compareHash = (
    plainText: string,
    cypherText: string
): boolean => bcrypt.compareSync(plainText, cypherText)