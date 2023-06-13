-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cita" (
    "id_Cita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "cedula_Paciente" INTEGER NOT NULL,
    "tarjeta_Profesional" INTEGER NOT NULL,
    "pacienteCedula" INTEGER,
    "medicoTarjeta_profesional" INTEGER,
    CONSTRAINT "Cita_pacienteCedula_fkey" FOREIGN KEY ("pacienteCedula") REFERENCES "Paciente" ("cedula") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_medicoTarjeta_profesional_fkey" FOREIGN KEY ("medicoTarjeta_profesional") REFERENCES "Medico" ("tarjeta_profesional") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("cedula_Paciente", "fecha", "id_Cita", "tarjeta_Profesional") SELECT "cedula_Paciente", "fecha", "id_Cita", "tarjeta_Profesional" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
CREATE TABLE "new_Medico" (
    "tarjeta_profesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "id_Especialidad" INTEGER NOT NULL,
    "especialidadId_Especialidad" INTEGER,
    CONSTRAINT "Medico_especialidadId_Especialidad_fkey" FOREIGN KEY ("especialidadId_Especialidad") REFERENCES "Especialidad" ("id_Especialidad") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("apellido", "consultorio", "correo", "id_Especialidad", "nombre", "tarjeta_profesional") SELECT "apellido", "consultorio", "correo", "id_Especialidad", "nombre", "tarjeta_profesional" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
