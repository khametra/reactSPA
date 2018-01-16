const PlayerAPI = {
  players: [
    { number: 1, name: "Murli Vijay", style: "Opening Batsman" },
    { number: 2, name: "K L Rahul", style: "Opening Batsman" },
    { number: 3, name: "Cheteshwar Pujara", style: "Batsman" },
    { number: 4, name: "Virat Kohli (C)", style: "Batsman" },
    { number: 5, name: "Rohit Sharma", style: "Batsman" },
    { number: 6, name: "Parthiv Patel (WK)", style: "Wicketkeeper/Batsman" },
    { number: 7, name: "Hardik Pandya", style: "AllRounder" },
    { number: 8, name: "Ravichandran Ashwin", style: "Off Spinner/Bowling AllRounder" },
    { number: 9, name: "Mohammad Shami", style: "Medium Pace Bowling" },
    { number: 10, name: "Ishant Sharma", style: "Medium Pace Bowling" },
    { number: 11, name: "Jasprit Bumrah", style: "Medium Pace Bowling" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
