window.onload = document.querySelector(".result").classList.remove('result');
let generateBtn = document.querySelector(".button");
generateBtn.addEventListener("click",()=>{
    
    document.querySelector(".hide").classList.remove('hide')
    setTimeout(()=>{
        document.querySelector("#loader").classList.add('hide');
        generate()
    },3000)
})
let generate = ()=>{
    let noOfTeams = parseInt(document.querySelector('#teamNos').value);
let playerNames = document.querySelector('#Names').value;
let playerNamesArray = playerNames.split(",");
if (isNaN(noOfTeams) || noOfTeams <= 0) {
    alert("Please enter a valid number of teams.");
    return;
};
if(noOfTeams > playerNamesArray.length){
    alert("number of teams can not be greater than number of players");
    return;
};
if(playerNames.charAt(playerNames.length - 1) == ","){
    alert("kindly remove comma from the end")
    return;
}
    
   if(playerNames == ""){
    alert("please enter at least 1 player name")
    return;
   }
   if(playerNames.includes(" ")){
    alert("kindly remove all space charcaters");
    return;
   }
    
    
    for(let i = playerNamesArray.length - 1;i>0;i--){
        let randomPlayerIndex = Math.floor(Math.random()*(i+1));
        [playerNamesArray[i],playerNamesArray[randomPlayerIndex]] = [playerNamesArray[randomPlayerIndex],playerNamesArray[i]]
    };
 
    let teams =[];
    for(let i = 0;i<noOfTeams;i++){
        teams.push([])
    };
    for(let i = 0;i<playerNamesArray.length;i++){
       
        teams[i%noOfTeams].push(playerNamesArray[i])
    };
for(let i = teams.length - 1;i>0;i--){
    let randomTeamIndex = Math.floor(Math.random()*(i+1));
    [teams[i],teams[randomTeamIndex]] = [teams[randomTeamIndex],teams[i]]
}
displayResult(teams)
};
let displayResult = (teams)=>{
    let resultDiv = document.querySelector("#resultId");
    resultDiv.classList.add('result');
    resultDiv.innerHTML = "";
    teams.forEach((team, index) => {
        let teamDiv = document.createElement('div');
        teamDiv.innerHTML = `<h3>Team ${index + 1}:</h3> <strong>${team.join(", ")}</strong> 
`;
        resultDiv.appendChild(teamDiv);
    });
    

}