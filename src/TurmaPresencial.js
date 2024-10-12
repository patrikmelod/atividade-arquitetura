import { Turma } from "./Turma.js";

function TurmaPresencial(codigo, nota, frequencia) {
    Turma.call(this, codigo, nota);

    this.frequencia = frequencia;

    return {
        aprovado: () => {
            if (this.frequencia >= 80 && this.nota >= 6)
                return true;
            else if (this.frequencia >= 60 && this.nota >= 8)
                return true;
            else
                return false;
        }
    }
}

TurmaPresencial.prototype = Object.create(Turma.prototype);
TurmaPresencial.prototype.constructor = TurmaPresencial;

export { TurmaPresencial }