const options = [
    {
        id: 0,
        name:'rock'
    },
    {
        id: 1,
        name:'paper'
    },
    {
        id: 2, 
        name:'scissors'
    }
];
let score = {
    player:{
        label: 'Player',
        score: 0
    },
    computer:{
        label: 'Computer',
        score: 0
    }
}

document.querySelectorAll('.option').forEach(btn => btn.addEventListener('click',(event)=>{
    roll(event.target.id);
}));
const generateRoll = () => Math.floor(Math.random()* 3);

const roll = (optionName) => {
    let num = generateRoll();
    const computerRoll = options.find(x => x.id === num);
    const playerRoll = options.find(x => x.name === optionName);

    const isPlayerWinner = playerRoll.name === 'rock' && computerRoll.name === 'scissors' || playerRoll.name === 'paper' && computerRoll.name === 'rock' || playerRoll.name === 'scissors' && computerRoll.name === 'paper';
    const isComputerWinner = playerRoll.name === 'scissors' && computerRoll.name === 'rock' || playerRoll.name === 'rock' && computerRoll.name === 'paper' || playerRoll.name === 'paper' && computerRoll.name === 'scissors';
    if(isPlayerWinner){
        score.player.score++;
    }
    else if(isComputerWinner){
        score.computer.score++;
    }
    document.querySelector('#score').innerHTML = `${score.player.label} ${score.player.score} - ${score.computer.score} ${score.computer.label}`;
}