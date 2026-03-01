const pointsTableBody = document.getElementById("pointsTableBody");

// Calculate points (2 for win, 0 for loss/no result simplified)
function calculatePoints(team) {
  return team.wins * 2;
}

function renderPointsTable(dataToRender) {
  if (!pointsTableBody) return;
  pointsTableBody.innerHTML = "";

  dataToRender.forEach((team, index) => {
    // Top 2 teams get highlighted for playoffs
    let rowClass = index < 2 ? "top-team" : "";
    
    pointsTableBody.innerHTML += `
      <tr class="${rowClass}">
        <td style="font-weight:bold; color:var(--ipl-blue);">${team.name} (${team.shortName})</td>
        <td>${team.matches}</td>
        <td>${team.wins}</td>
        <td>${team.losses}</td>
        <td>${team.nrr.toFixed(2)}</td>
        <td style="font-weight:bold; font-size:1.2rem;">${calculatePoints(team)}</td>
      </tr>
    `;
  });
}

function sortPointsTable() {
  // Create a copy so we don't mutate original array constantly if not needed, though here we can
  let sortedTeams = [...teams];
  
  sortedTeams.sort((a, b) => {
    let pointsA = calculatePoints(a);
    let pointsB = calculatePoints(b);
    
    // Primary sort by points
    if (pointsB !== pointsA) {
      return pointsB - pointsA;
    }
    // Secondary sort by NRR if points are tied
    return b.nrr - a.nrr;
  });

  renderPointsTable(sortedTeams);
}

// Initial render (unsorted or default order)
if(pointsTableBody) renderPointsTable(teams);
