/* eslint-disable linebreak-style */
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express, { Application, Request, Response } from 'express'

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

		this.app.get(
			'/',
			(req: Request, res: Response) => {
				res.send('Bienvenidos a typescript')
			}
		)
		this.app.get(
			'/paciente',
			(req: Request, res: Response) => {
				res.send('Bienvenidos a typescript')
			}
		)
	}
	public start(): void {

		this.server=this.app.listen(
			3000,
			() => { console.log('El servidor está escuchando en el puerto 3000') }
		)
	}
	public close(): void {
		this.server.close()
	}
}

export default App