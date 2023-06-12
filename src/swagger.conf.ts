/* eslint-disable linebreak-style */
//1. Importar la bibioteca de trabajo

import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerOptions = {
	// Variables de configuración
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'API de la IPS ateneaIPS',
			version: '1.0.0',
			description: 'En esta API tenemos la funcionalidad que soporta la operación de la IPS AteneaIPS'
		},
		servers: [
			{
				url: 'http://localhost:3000',
				description: 'servidor local de documentación'
			}
		]
	},
	// Donde vamos a utilizar o encontrar swagger
	apis: ['src/index.ts', './swagger/*.swagger.ts'],
}

export const swaggerSpec = swaggerJSDoc(swaggerOptions)