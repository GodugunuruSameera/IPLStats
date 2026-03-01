const matchList = document.getElementById("matchList");

function renderMatches(dataToRender) {
  if (!matchList) return;
  matchList.innerHTML = "";

  if (dataToRender.length === 0) {
    matchList.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>No matches found.</p>";
    return;
  }

  dataToRender.forEach(m => {
    let statusStyle = m.status === "Completed" ? "color: green;" : "color: var(--ipl-accent);";
    
    matchList.innerHTML += `
      <div class="card" style="border-left: 5px solid ${m.status === 'Completed' ? '#10b981' : 'var(--ipl-accent)'}">
        <h3>${m.team1} vs ${m.team2}</h3>
        <p><strong>Date:</strong> ${m.date}</p>
        <p><strong>Venue:</strong> ${m.venue}</p>
        <p style="${statusStyle} font-weight:bold;">${m.status}</p>
        <p style="margin-top:10px; font-size:0.9rem; background:#f3f4f6; padding:5px;">${m.result}</p>
      </div>
    `;
  });
}

function filterMatches() {
  const filterVal = document.getElementById("filterMatch").value.toLowerCase();
  
  const filtered = matches.filter(m => 
    m.team1.toLowerCase().includes(filterVal) ||
    m.team2.toLowerCase().includes(filterVal) ||
    m.status.toLowerCase().includes(filterVal)
  );

  renderMatches(filtered);
}

if(matchList) renderMatches(matches);
