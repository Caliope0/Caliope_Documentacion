
import { Router, Request, Response } from "express"
import MedicoController from "../controllers/Medicocontroller"

class MedicoRouter {

    router: Router
    medicoController: MedicoController

    constructor() {
        this.router = Router()
        this.medicoController = new MedicoController()
        this.routes()
    }

    private routes(): void {

        this.router.get(
            '/medico',
            (req: Request, res: Response) => {
                this.medicoController.obtenerMedico(req, res)

            }
        )

        this.router.post(
            '/crear_medico',
            (req: Request, res: Response) => {
                this.medicoController.crearMedico(req, res)
            }
        )
    }
}
export default new MedicoRouter().router