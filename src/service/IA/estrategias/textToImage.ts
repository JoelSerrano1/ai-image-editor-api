import { iaInterface } from "../iaInterface";

export class TextToImageStrategy implements iaInterface {

    async generate(body: any): Promise<Buffer> {

        const response = await fetch(`${process.env.IA_URL}/text-to-image`, {
            method: "POST",
            headers: {
                "X-Api-Key": `${process.env.IA_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        return Buffer.from(await response.arrayBuffer())
    }

}