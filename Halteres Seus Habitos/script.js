function abrirDetalhesPlano(Musculação) {
    const janelaMusc = window.open("", "Detalhes do Plano", "width=400,height=500");
    janelaMusc.document.write(`
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=360, initial-scale=1.0">
            <title>Academia</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="janelaAcademia">
                <div class="tituloAcademiaJanela">
                <h3>Academia</h3>
                <h4>(<span class="preco">Musculação</span>)</h4>
                </div>
                <div class="imgPlano">
                <img src="/Halteres Seus Habitos/assets/Academia.png" alt="">
                </div>
                <div>
                <ol class="listaacademiajanela">
                    <li>Anual: R$ <span class="preco">180,00</span></li>
                    <li>Semestral: R$ <span class="preco">220,00</span></li>
                    <li>Mensal: R$ <R1> <span class="preco">260,00</span></R1></li>
                </ol>
                </div>
                <button onclick="window.close()">Fechar</button>
            </div>
        </body>
        </html>
    `);
}

function abrirDetalhesPlanoNat(Natação) {
    const janelaNat = window.open("", "Detalhes do Plano", "width=400,height=500");
    janelaNat.document.write(`
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=360, initial-scale=1.0">
            <title>Academia</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="janelaAcademia">
                <div class="tituloAcademiaJanela">
                <h3>Natação</h3>
                <h4>(<span class="preco">3x Na semana</span>)</h4>
                </div>
                <div class="imgPlano">
                <img src="assets/Natacao.png" alt="">
                </div>
                <div>
                <ol class="listaacademiajanela">
                    <li>Anual (R$ <span class="preco"> 300,00</span>)</li>
                    <li>Semestral (R$ <span class="preco"> 340,00</span>)</li>
                    <li>Mensal (R$ <span class="preco"> 380,00</span>)</li>
                </ol>
                </div>
                <button onclick="window.close()">Fechar</button>
            </div>
        </body>
        </html>
          `);
      }

function abrirDetalhesPlanoComb(Combo) {
    const janelaComb = window.open("","Detalhes do Plano", "width=400, height=500");
    janelaComb.document.write(`
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=360, initial-scale=1.0">
    <title>Academia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="janelaAcademia">
        <div class="tituloAcademiaJanela">
          <h3>Combo</h3>
          <h4>(<span class="preco">Musculação + Natação</span>)</h4>
        </div>
        <div class="imgPlano">
            <img src="/Halteres Seus Habitos/assets/Combo.png" alt="">
        </div>
        <div>
          <ol class="listaacademiajanela">
            <li>Anual (R$ <span class="preco"> 330,00</span>)</li>
            <li>Semestral (R$ <span class="preco"> 390,00</span>)</li>
            <li>Mensal (R$ <span class="preco"> 440,00</span>)</li>
          </ol>
        </div>
          <button onclick="window.close()">Fechar</button>
      </div>
</body>
</html>
        `);
}




