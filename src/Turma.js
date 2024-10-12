function Turma(codigo, nota) {
    this.codigo = codigo;
    this.nota = nota;

    return {
        aprovado: () => {
            if (this.nota >= 6)
                return true;
            else
                return false;
        }
    }
}

export { Turma }