import { Router, Response, Request } from 'express'
import CitaController from '../controllers/CitaController'

class CitaRouter {
    router: Router
    citaController: CitaController

    constructor() {
        this.router = Router()
        this.citaController = new CitaController
        this.router
    }

    private routes(): void {

        this.router.get(
            '/cita',
            (req: Request, res: Response) => {
                this.citaController.obtenerCita(req, res)
            }
        )

        this.router.post(
            '/crear_cita',
            (req: Request, res: Response) => {
                this.citaController.crearCita(req, res)
            }
        )
    }
}

export default new CitaRouter().router