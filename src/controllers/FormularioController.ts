
import { Request, Response } from 'express'
import * as jsonSchema from '../json-schema.json'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonSchema = Record<string, any>

class FormularioController {

    obtenerDefinicion(req: Request, res: Response) {
        const { formulario } = req.params

        const schema: JsonSchema = jsonSchema

        if (schema.definitions && schema.definitions[formulario]) {
            res.json(schema.definitions[formulario])
        } else {
            res.status(404).json({ error: `Definition ${formulario} not found in JSON schema.` })
        }
    }

}

export default FormularioController