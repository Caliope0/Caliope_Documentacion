import { Router, Response, Request } from 'express'
import EspecialidadController from '../controllers/EspecialidadController'

class EspecialidadRouter {

    router: Router
    especialidadController: EspecialidadController

    constructor() {

        this.router = Router()
        this.especialidadController = new EspecialidadController
        this.router
    }

    private routes(): void {

        this.router.get(
            '/especialidad',
            (res: Response, req: Request) => {
                this.especialidadController.obtenerEspecialidad(req, res)
            }

        )

        this.router.post(
            '/crear_especialidad',
            (res: Response, req: Request) => {
                this.especialidadController.crearEspecialidad(req, res)
            }

        )

        this.router.put(
            '/editar_especialidad',
            (res: Response, req: Request) => {
                this.especialidadController.editarEspecialidad(req, res)
            }
        )

        this.router.put(
            '/eliminar_especialidad',
            (res: Response, req: Request) => {
                this.especialidadController.eliminarEspecialidad(req, res)
            }
        )

    }
}
export default new EspecialidadRouter().router

