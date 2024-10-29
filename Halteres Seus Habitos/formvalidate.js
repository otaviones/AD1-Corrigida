function validarTelefone(id, qtdDigitos) {
    const telefone = document.getElementById(id).value;
    const regex = /^\d+$/;

    if (telefone === "") {
        document.getElementById(id).style.borderColor = "initial";
        return;
    }

    if (telefone.length !== qtdDigitos) {
        alert(`O número deve ter exatamente ${qtdDigitos} dígitos.`);
        document.getElementById(id).style.borderColor = "red";
    }

    else if (!regex.test(telefone)) {
        alert("O número deve conter apenas dígitos.");
        document.getElementById(id).style.borderColor = "red";
    } else {
        document.getElementById(id).style.borderColor = "initial";
    }
}

function calcularValor() {
   
    console.log("Função calcularValor foi chamada");

    const atividade = document.getElementById("atividadeSelect").value.toLowerCase();
    const plano = document.getElementById("planoSelect").value.toLowerCase();
    const matriculado = document.getElementById("chkMatric").checked;
    const numeroMatricula = document.getElementById("mat").value;

    const valores = {
        academia: { mensal: 180, semestral: 180 * 6, anual: 180 * 12 },
        natacao: { mensal: 160, semestral: 160 * 6, anual: 160 * 12 },
        combo: { mensal: 440, semestral: 440 * 6, anual: 440 * 12 }
    };


    if (!atividade || !plano) {
        alert("Por favor, selecione uma atividade e um plano.");
        return; 
    }

 
    console.log(`Atividade: ${atividade}, Plano: ${plano}, Matriculado: ${matriculado}, Número de Matrícula: ${numeroMatricula}`);

    let valor = valores[atividade][plano];
    
    
    if (!matriculado || !numeroMatricula) {
        valor += 80; 
    }


    document.getElementById("TxtTotal").value = `${valor.toFixed(2)}`;
}



