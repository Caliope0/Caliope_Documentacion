import { Router, Response, Request } from "express";
import FormularioController from "../controllers/formStructureController";

class FormularioRouter {
  router: Router;
  formularioController: FormularioController

  constructor() {
    this.router = Router()
    this.formularioController = new FormularioController()
    this.routes()
  }

  private routes(): void {
    this.router.get(
      '/formulario/:formulario',
      (req: Request, res: Response) => {
        this.formularioController.extractDefinition(req, res);
      }
    );
  }
}

export default new FormularioRouter().router;