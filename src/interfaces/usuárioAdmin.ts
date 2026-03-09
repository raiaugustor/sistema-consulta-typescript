export interface UsuarioAdmin {
    id: number;
    nome: string;
    nivelAcesso: "total" | "operacional" | "financeiro";
};