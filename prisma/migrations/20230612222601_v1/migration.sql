-- CreateTable
CREATE TABLE "Paciente" (
    "cedula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fecha_nacimiento" DATETIME NOT NULL,
    "telefono" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Medico" (
    "tarjeta_profesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "id_Especialidad" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Cita" (
    "id_Cita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "cedula_Paciente" INTEGER NOT NULL,
    "tarjeta_Profesional" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id_Especialidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);
