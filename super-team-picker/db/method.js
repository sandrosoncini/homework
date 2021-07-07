module.exports = (cohort, method, quantity) => {
    teams = {}
    console.log(cohort.content.split(","))
    console.log(method)
    console.log(quantity)
    if (method === "teamCount") {
        let teamMix = cohort.content.split(",").filter(Boolean);
        for (let i = 1; i <= quantity; i++) {
            teams[i] = [];
        }
        while (teamMix.length !== 0) {
            for (let team in teams) {
                teams[team].push(teamMix.splice(Math.floor(Math.random() * teamMix.length), 1)[0]);
                if (teamMix.length === 0) break;
            }
        }
       
        return teams;
        
    }
    
    if (method === "numberPerTeam") {
        
        let teamMix = cohort.content.split(",").filter(Boolean);
        
        for (let i = 1; i <= Math.ceil(teamMix.length / quantity); i++) {
            teams[i] = [];
        }
        while (teamMix.length !== 0) {
            for (let team in teams) {
                teams[team].push(teamMix.splice(Math.floor(Math.random() * teamMix.length), 1)[0]);
                if (teamMix.length === 0) break;
            }
        }
        return teams;
    }


}