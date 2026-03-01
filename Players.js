const playerList = document.getElementById("playerList");

function renderPlayers(dataToRender) {
  if (!playerList) return;
  playerList.innerHTML = "";

  if (dataToRender.length === 0) {
    playerList.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>No players found.</p>";
    return;
  }

  dataToRender.forEach(p => {
    let mainStat = p.role.includes("Bowler") ? `Wickets: ${p.wickets}` : `Runs: ${p.runs}`;
    if(p.role === "All-Rounder") mainStat = `Runs: ${p.runs} | Wickets: ${p.wickets}`;

    playerList.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p><strong>Team:</strong> ${p.team}</p>
        <p><strong>Role:</strong> ${p.role}</p>
        <p><strong>Matches:</strong> ${p.matches}</p>
        <p class="stat-highlight">${mainStat}</p>
      </div>
    `;
  });
}

function filterPlayers() {
  const searchVal = document.getElementById("searchPlayer").value.toLowerCase();
  const roleVal = document.getElementById("filterRole").value;

  const filtered = players.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchVal) || p.team.toLowerCase().includes(searchVal);
    const matchesRole = roleVal === "" || p.role.includes(roleVal); // .includes handles "Wicketkeeper Batsman"
    return matchesSearch && matchesRole;
  });

  renderPlayers(filtered);
}

if(playerList) renderPlayers(players);
