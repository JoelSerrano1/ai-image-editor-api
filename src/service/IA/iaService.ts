import { tipoIA } from "../../entities/IA";
import { ImageResizerStrategy } from "./estrategias/image_resized";
import { MagicEraserStrategy } from "./estrategias/Magic_eraser";
import { SketchToImageStrategy } from "./estrategias/sketch_to_image";
import { TextToImageStrategy } from "./estrategias/textToImage";
import { iaInterface } from "./iaInterface";
import { iaHelper } from "../../helpers/iaHelper";

export class IAService {

    private tiposIA: Map<tipoIA, iaInterface>

    constructor(private readonly iaHelper: iaHelper) {
        this.tiposIA = new Map<tipoIA, iaInterface>([
            [tipoIA.TEXT_TO_IMAGE, new TextToImageStrategy()],
            [tipoIA.IMAGE_RESIZER, new ImageResizerStrategy()],
            [tipoIA.SKETCH_TO_IMAGE, new SketchToImageStrategy()],
            [tipoIA.MAGIC_ERASER, new MagicEraserStrategy()],
        ])
    }

    async generate(tipo: tipoIA, body: any): Promise<Buffer> {
        const ia = await this.iaHelper.findIaByTipo(tipo)
        const IA = this.tiposIA.get(ia.tipo)

        if (IA) {
            return IA.generate(body)
        } else {
            throw new Error("IA Strategy not found")
        }
    }

    async findIas() {
        return this.iaHelper.findIas()
    }

}