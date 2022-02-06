const imgs = document.querySelectorAll('.img');
const userAnsImg = document.querySelector('.ansUser');
const computerAnsImg = document.querySelector('.ansComputer');
const modal = document.getElementById('modal');
const result = document.getElementById('result');
const userChoiceModal = document.getElementById('user-choice-modal');
const computerChoiceModal = document.getElementById('comp-choice-modal');
const restartBtn = document.querySelector('.restart-btn');

let options = [];
let userChoice;
let computerChoice;


for(let i=0; i<imgs.length; i++){
    options[i] = {
        name: imgs[i].dataset.name,
        winsOver: imgs[i].dataset.defeats
    }
}




function randomSelect(value) {
    let random = Math.floor(Math.random()*value.length);
    let randomEle = value[random];
    return randomEle;
}


imgs.forEach((img) => {
    img.addEventListener('click', () => {
        let currentSelect = img.dataset.name;
        userChoice = currentSelect;
        let userSelect = options.find(select => select.name == currentSelect);
        let computerSelect = randomSelect(options);
        computerChoice = computerSelect.name;
        let finalResult = checkResult(userSelect, computerSelect);
        declareWinner(finalResult);
    });
});

function checkResult(user, computer){
    if(user.winsOver == computer.name){
        return "user"
    } else if (computer.winsOver == user.name){
        return "computer"
    }else {
        return 0;
    }
}

function declareWinner(winner){
    if(winner){
        if(winner == "user"){
            showResult(winner);
            setTimeout(() => {
                showModal(winner);
            }, 800);
        }else {
            showResult(winner);
            setTimeout(() => {
                showModal(winner);
            }, 800);
        }
    }else {
        showResult(winner);
    }
}

function showResult(result){
    if(result == 0){
        userAnsImg.innerHTML = `<img src="./resources/img/loader.gif" class="loader hidden">`;
        computerAnsImg.innerHTML = `<img src="./resources/img/loader.gif" class="loader hidden">`;

        setTimeout(() => {
            userAnsImg.innerHTML = `<p class="tie">Tie</p>`;
            computerAnsImg.innerHTML = `<p class="tie">Tie</p>`;
        }, 500);
    }else {
        userAnsImg.innerHTML = `<img src="./resources/img/loader.gif" class="loader hidden">`;
        computerAnsImg.innerHTML = `<img src="./resources/img/loader.gif" class="loader hidden">`;

        setTimeout(() => {
            userAnsImg.innerHTML = `<img src="./resources/img/${userChoice}.png" alt="Answer Image">`;
            computerAnsImg.innerHTML = `<img src="./resources/img/${computerChoice}.png" alt="Answer Image" class="rotate">`;
        }, 500);
    }
}

function showModal(value){
    if(value == "user"){
        result.textContent = `- You Won -`;
    }else {
        result.textContent = `- Computer Won -`;
    }
    userChoiceModal.textContent = userChoice;
    computerChoiceModal.textContent = computerChoice;
    modal.classList.remove('hidden');

    restartBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}