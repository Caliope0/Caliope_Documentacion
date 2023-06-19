import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'

class CitaController {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    obtenerCita = async (req: Request, res: Response) => {
        try {
            const cita = await this.prisma.cita.findMany()
            res.json(cita)
        } catch (e) {
            res.status(500).json({ error: 'Error al obtener las citas.' })
        }
    }

    crearCita = async (req: Request, res: Response) => {
        try {
            const {
                id_Cita,
                fechaCita,
                cedula_Paciente,
                tarjeta_Profesional
            } = req.body

            const fecha = new Date(fechaCita)
            const cita = await this.prisma.cita.create({
                data: {
                    id_Cita,
                    fecha,
                    cedula_Paciente,
                    tarjeta_Profesional
                }
            }
            )

            res.json(cita)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            res.status(400).json({ error: e.message })
        }
    }
}

export default CitaController
