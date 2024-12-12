function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="assets/times/icon-${player1}.png" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="assets/times/icon-${player2}.png" alt="Bandeira do ${player2}">
    </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
    </div>
    `
}

document.getElementById("app").innerHTML = `
<main id="cards">
${createCard("11/12", "Quarta-Feira",
createGame("atletico", "19:00", "bota"))}

${createCard("15/12", "Segunda-Feira",
    createGame("corinthians", "21:00", "palmeiras"))}

${createCard("10/12", "Terça-Feira",
    createGame("vasco", "19:00", "bahia"))}

${createCard("14/12", "Quinta-Feira",
    createGame("flamengo", "17:30", "cruzeiro"))}

${createCard("11/12", "Sexta-Feira",
    createGame("gremio", "20:00", "santos"))}

${createCard("11/12", "Quarta-Feira",
    createGame("sp", "21:30", "inter"))}

</main>
`;