// Dados base
// Especialidades
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const ortopedia = {
    id: 2,
    nome: "Ortopedia",
};
const pediatria = {
    id: 3,
    nome: "Pediatria",
};
// Médicos
const medico1 = {
    id: 1,
    nome: "Dr. Claudio",
    crm: "CRM22342",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dra. Ana Paula Gandolfi",
    crm: "CRM99946",
    especialidade: ortopedia,
    ativo: true,
};
const medico3 = {
    id: 1,
    nome: "Dr. Auzio",
    crm: "CRM67936",
    especialidade: pediatria,
    ativo: true,
};
// Pacientes
const paciente1 = {
    id: 1,
    nome: "Carlos Drummond",
    cpf: "434.456.675-00",
    email: "cddeandrade@gmail.com",
};
const paciente2 = {
    id: 1,
    nome: "Manuel Bandeira",
    cpf: "758.764.545-01",
    email: "manuelflag@gmail.com",
    telefone: "(11) 39284-0000",
};
const paciente3 = {
    id: 1,
    nome: "Machado Assis",
    cpf: "676.767.670-67",
    email: "assis_axe@gmail.com",
};
// Criar consultas
function criarConsulta(id, medico, paciente, data, valor) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
    };
}
// Confirmar consultas
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
// Cancelar consulta
function cancelarConsulta(consulta) {
    if (consulta.status == "realizada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
// Exibir consulta 
function exibirConsulta(consulta) {
    const valorFormato = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    return `
    Consulta #${consulta.id}
    Médico: ${consulta.medico.nome}
    Paciente: ${consulta.paciente.nome}
    Especialidade: ${consulta.medico.especialidade.nome}
    Data: ${consulta.data.toLocaleDateString("pt-BR")}
    Valor: ${valorFormato}
    Status: ${consulta.status}
`;
}
//Execução inicial
const consulta1 = criarConsulta(1, medico1, paciente1, new Date(), 350);
const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));
export {};
