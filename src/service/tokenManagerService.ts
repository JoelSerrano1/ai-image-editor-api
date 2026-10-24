import jwt from "jsonwebtoken"

 
 type TokenData = {
    sub: string
 }

 // biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
 export class TokenManager {

    static async generate (data: TokenData): Promise<string> {
        return await jwt.sign(data, "private", {
            algorithm: "HS256"
        })
    }

    static async verify (token: string): Promise<TokenData> {
        return await jwt.verify(token, "private", {
            algorithms: ["HS256"]
        }) as TokenData
    }

 }