const teams = [
  { id: 1, name: "Mumbai Indians", shortName: "MI", captain: "Hardik Pandya", city: "Mumbai", homeGround: "Wankhede Stadium", matches: 14, wins: 8, losses: 6, nrr: 0.45, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.svg.png" },
  { id: 2, name: "Chennai Super Kings", shortName: "CSK", captain: "Ruturaj Gaikwad", city: "Chennai", homeGround: "M.A. Chidambaram Stadium", matches: 14, wins: 9, losses: 5, nrr: 0.65, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.svg.png" },
  { id: 3, name: "Royal Challengers Bengaluru", shortName: "RCB", captain: "Faf du Plessis", city: "Bengaluru", homeGround: "M. Chinnaswamy Stadium", matches: 14, wins: 7, losses: 7, nrr: 0.12, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/200px-Royal_Challengers_Bangalore_2020.svg.png" },
  { id: 4, name: "Kolkata Knight Riders", shortName: "KKR", captain: "Shreyas Iyer", city: "Kolkata", homeGround: "Eden Gardens", matches: 14, wins: 10, losses: 4, nrr: 0.85, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/200px-Kolkata_Knight_Riders_Logo.svg.png" }
];

const players = [
  { name: "Rohit Sharma", team: "Mumbai Indians", role: "Batsman", matches: 250, runs: 6500, wickets: 15 },
  { name: "Jasprit Bumrah", team: "Mumbai Indians", role: "Bowler", matches: 130, runs: 60, wickets: 150 },
  { name: "MS Dhoni", team: "Chennai Super Kings", role: "Wicketkeeper Batsman", matches: 260, runs: 5200, wickets: 0 },
  { name: "Ravindra Jadeja", team: "Chennai Super Kings", role: "All-Rounder", matches: 230, runs: 2800, wickets: 160 },
  { name: "Virat Kohli", team: "Royal Challengers Bengaluru", role: "Batsman", matches: 245, runs: 7800, wickets: 4 },
  { name: "Sunil Narine", team: "Kolkata Knight Riders", role: "All-Rounder", matches: 170, runs: 1400, wickets: 175 }
];

const matches = [
  { id: 101, date: "2026-03-22 19:30", team1: "CSK", team2: "RCB", venue: "M.A. Chidambaram Stadium", status: "Completed", result: "CSK won by 6 wickets" },
  { id: 102, date: "2026-03-24 15:30", team1: "MI", team2: "KKR", venue: "Wankhede Stadium", status: "Completed", result: "KKR won by 24 runs" },
  { id: 103, date: "2026-04-10 19:30", team1: "RCB", team2: "MI", venue: "M. Chinnaswamy Stadium", status: "Upcoming", result: "Match yet to begin" },
  { id: 104, date: "2026-04-12 19:30", team1: "KKR", team2: "CSK", venue: "Eden Gardens", status: "Upcoming", result: "Match yet to begin" }
];
