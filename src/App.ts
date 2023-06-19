/* eslint-disable linebreak-style */
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express, { Application, Request, Response, } from 'express'

import MedicoRouter from './routes/Medico.routes'
import PacienteRouter from './routes/Paciente.router'
import CitaRouter from './routes/Cita.Router'
import FormularioRouter from './routes/Formulario.router'
import EspecialidadRouter from './routes/Especialidad.Router'
/**
 * 
 * @autor John Alejandro Zúñiga
 * Clase principal de la API. Define la ruta y documentación
 */
class App {

	//Atributos
	public app: Application
	private server: any
	

	constructor() {
		
		this.app = express()

		this.app.use(express.json())
		this.app.use(
			'/api-doc',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		this.router()
	}
	/** 
	 * definir las rutas de la API con express
	 */
	private router(): void {

		this.app.use('/', PacienteRouter )
		this.app.use('/', MedicoRouter)
		this.app.use('/', CitaRouter)
		this.app.use('/', FormularioRouter)
		this.app.use('/', EspecialidadRouter)


	}
	public start(): void {

		this.server = this.app.listen(
			3000,
			() => { console.log('El servidor está escuchando en el puerto 3000') }
		)
	}
	public close(): void {
		this.server.close()
	}
}

export default App