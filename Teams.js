const teamList = document.getElementById("teamList");

function renderTeams(dataToRender) {
  if (!teamList) return;
  teamList.innerHTML = "";

  if (dataToRender.length === 0) {
    teamList.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>No teams found matching your criteria.</p>";
    return;
  }

  dataToRender.forEach(team => {
    teamList.innerHTML += `
      <div class="card">
        <img src="${team.logo}" alt="${team.name} Logo">
        <h3>${team.name}</h3>
        <p><strong>Captain:</strong> ${team.captain}</p>
        <p><strong>City:</strong> ${team.city}</p>
        <p><strong>Home Ground:</strong> ${team.homeGround}</p>
        <p class="stat-highlight">Win Record: ${team.wins} W / ${team.losses} L</p>
      </div>
    `;
  });
}

function filterTeams() {
  const searchVal = document.getElementById("searchTeam").value.toLowerCase();
  const cityVal = document.getElementById("filterCity").value.toLowerCase();

  const filtered = teams.filter(t => 
    t.name.toLowerCase().includes(searchVal) &&
    t.city.toLowerCase().includes(cityVal)
  );
  
  renderTeams(filtered);
}

if(teamList) renderTeams(teams);
