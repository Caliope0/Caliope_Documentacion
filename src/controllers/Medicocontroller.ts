import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

class MedicoController {

    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient
    }

    async obtenerMedico(req: Request, res: Response) {
        const medicos = await this.prisma.medico.findMany()
        res.json(medicos)
    }
    async crearMedico(req: Request, res: Response) {
        try {
            const {
                tarjeta_profesional,
                nombre,
                apellido,
                consultorio,
                correo,
                id_Especialidad
            } = req.body

            const medico = await this.prisma.medico.create(
                {
                    data: {
                        tarjeta_profesional,
                        nombre,
                        apellido,
                        consultorio,
                        correo,
                        id_Especialidad
                    }
                }
            )

            res.json(medico)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            res.status(400)
            res.json({ error: e.message })
        }
    }



}

export default MedicoController