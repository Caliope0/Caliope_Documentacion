/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'

class EspecialidadController {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()

    }

    obtenerEspecialidad = async (req: Request, res: Response) => {
        try {
            const especialidades = [
                'Medicina general',
                'Cardiología',
                'Medicina interna',
                'Dermatología',
                'Rehabilitación física',
                'Psicología',
                'Odontología',
                'Radiología'
            ]

            res.json(especialidades)
        } catch (e) {
            res.status(500).json({
                error: 'Error al obtener las especialidades.'
            }
            )
        }
    }

    crearEspecialidad = async (req: Request, res: Response) => {
        try {
            const { id_Especialidad, nombre } = req.body

            const especialidad = await this.prisma.especialidad.create(
                {
                    data: {
                        id_Especialidad,
                        nombre
                    }
                }
            )

            res.json(especialidad)
        } catch (e: any) {
            res.status(400).json({ error: e.message }
            )
        }
    }

    editarEspecialidad = async (req: Request, res: Response) => {
        try {
            const { id_Especialidad } = req.params
            const { nombre } = req.body

            const especialidad = await this.prisma.especialidad.update({
                where: {
                    id_Especialidad: Number(id_Especialidad)
                },
                data: {
                    nombre: nombre
                }
            }
            )

            res.json(especialidad)
        } catch (e: any) {
            res.status(400).json({ error: e.message }
            )

        }
    }

    eliminarEspecialidad = async (req: Request, res: Response) => {
        try {
            const { id_Especialidad } = req.params

            const especialidad = await this.prisma.especialidad.delete({
                where: {
                    id_Especialidad: Number(id_Especialidad)
                }
            }
            )

            res.json(especialidad)
        } catch (e: any) {
            res.status(400).json({ error: e.message }
            )
        }
    }
}
export default EspecialidadController
