const equipamentos = {
    "Cadeira Extensora": {
        imagem: "assets/CadeiraExtensora.png",
        descricao: "<h3>Cadeira Extensora</h3> O principal movimento articular realizado na cadeira extensora é a extensão de joelho, portanto o quadrícepes  vasto alteral, vasto medial, vasto intermédio e reto femoral são os principais músculos trabalhados durante o exercício.",
        fonte: "https://treinomestre.com.br/cadeira-extensora"
    },
    "Supino Vertical": {
        imagem: "assets/SupinoVertical.png",
        descricao: "<h3>Supino Vertical</h3>  O supino vertical é um exercício popular e eficaz para desenvolver força, tamanho e definição nos músculos da parte superior do corpo. Ao usar uma máquina de peso guiada, este exercício oferece uma maneira acessível e controlada de direcionar os músculos do peito, ombros e tríceps.",
        fonte: "https://academiafitness.com.br/supino-vertical"
    },
    "Remada Baixa": {
        imagem: "assets/RemadaBaixa.png",
        descricao: "<h3>Remada Baixa</h3> A Remada Baixa é um exercício de máquina para costas feito setnado no banco usando a barra triângulo. A Remada trabalha inúmeros músculos como a lombar, latíssimo do dorso, trapézio, deltoide posterior e até mesmo o braquiorradial.",
        fonte: "https://hipertrofia.org/remada-baixa"
    }
};

function mostrarEquipamento(nome) {
    const equipamento = equipamentos[nome];
    document.getElementById("ImgDes").innerHTML = `<img src="${equipamento.imagem}" alt="${nome}" width="130">`;
    document.getElementById("DescExe").innerHTML = `${equipamento.descricao} <a href="${equipamento.fonte}" target="_blank">[fonte]</a>`;
}
