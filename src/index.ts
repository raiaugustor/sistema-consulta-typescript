// Importações
import { Especialidade } from "./types/especialidade";
import { Medico } from "./interfaces/médico";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Consulta } from "./interfaces/consulta";

// Dados base
// Especialidades
const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
};
const ortopedia: Especialidade = {
    id: 2,
    nome:  "Ortopedia",
};
const pediatria: Especialidade = {
    id: 3,
    nome: "Pediatria",
};

// Médicos
const medico1: Medico = {
    id: 1,
    nome: "Dr. Claudio",
    crm: "CRM22342",
    especialidade: cardiologia,
    ativo: true,
};
const medico2: Medico = {
    id: 2,
    nome: "Dra. Ana Paula Gandolfi",
    crm: "CRM99946",
    especialidade: ortopedia,
    ativo: true,
};
const medico3: Medico = {
    id: 1,
    nome: "Dr. Auzio",
    crm: "CRM67936",
    especialidade: pediatria,
    ativo: true,
};

// Pacientes
const paciente1: Paciente = {
    id: 1,
    nome: "Carlos Drummond",
    cpf: "434.456.675-00",
    email: "cddeandrade@gmail.com",
};
const paciente2: Paciente = {
    id: 1,
    nome: "Manuel Bandeira",
    cpf: "758.764.545-01",
    email: "manuelflag@gmail.com",
    telefone: "(11) 39284-0000",
};
const paciente3: Paciente = {
    id: 1,
    nome: "Machado Assis",
    cpf: "676.767.670-67",
    email: "assis_axe@gmail.com",
};

// Criar consultas
function criarConsulta(
    id: number,
    medico: Medico,
    paciente: Paciente,
    data: Date,
    valor: number
): Consulta {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agenda",
    };
}

// Confirmar consultas
function confirmarConsulta( consulta: Consulta): Consulta {
    return { 
        ...consulta,
        status: "confirmada",
    };
}

