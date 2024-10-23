const ball = document.getElementById('ball');
const attackers = document.querySelectorAll('.attacker');
const defenders = document.querySelectorAll('.defender');

{/* <img src="images/models/defender.png" class="defender" id="def_1" data-x="520" data-y="475">
        <img src="images/models/defender.png" class="defender" id="def_2" data-x="905" data-y="475">
        <img src="images/models/defender.png" class="defender" id="def_3" data-x="975" data-y="140">
        <img src="images/models/defender.png" class="defender" id="def_4" data-x="450" data-y="140">
        <img src="images/models/defender.png" class="defender" id="def_5" data-x="710" data-y = "140"></img> */}


//   <img src="images/models/attack.png" class="attacker" id="atk_1" data-x="45" data-y="75">
//         <img src="images/models/attack.png" class="attacker" id="atk_2" data-x="210" data-y="425">
//         <img src="images/models/attack.png" class="attacker" id="atk_3" data-x="710" data-y="670">
//         <img src="images/models/attack.png" class="attacker" id="atk_4" data-x="1200" data-y="425">
//         <img src="images/models/attack.png" class="attacker" id="atk_5" data-x="1370" data-y="75"></img>

function scenario(attackerX,attackerY,currentX,currentY){
    var result = new Map()
    
    return result;
  }

attackers.forEach(attacker => {
    attacker.addEventListener('click', () => {
        const attackerX = attacker.getAttribute('data-x');
        const attackerY = attacker.getAttribute('data-y');
        var direction = scenario(attacker.getAttribute('data-x'),attacker.getAttribute('data-y'),ball.getAttribute("data-x"),ball.getAttribute("data-y"));
        // Перемещение мяча к выбранному игроку
        ball.style.setProperty('--end-x', `${attackerX - ball.offsetLeft}px`);
        ball.style.setProperty('--end-y', `${attackerY - ball.offsetTop}px`);
        ball.setAttribute('data-x', `${attackerX}`);
        ball.setAttribute('data-y', `${attackerY}`);
        ball.style.animation = 'moveObject 1s forwards';

        // Перемещение защитников
        defenders.forEach((defender, index) => {
            const newX = direction.get(`def${index+1}X`);
            const newY = direction.get(`def${index+1}Y`);
            defender.style.setProperty('--end-x', `${newX - defender.offsetLeft}px`);
            defender.style.setProperty('--end-y', `${newY - defender.offsetTop}px`);
            defender.style.animation = 'moveObject 1s forwards';

            defender.addEventListener('animationend',() => {
              defender.style.left = `${newX}px`;
              defender.style.top = `${newY}px`;
              defender.style.animation = '';
            }, {once: true});
        });
        

        // Сброс анимации мяча после завершения
        ball.addEventListener('animationend', () => {
            ball.style.animation = '';
            // ball.style.transform = '';
            ball.style.left = `${attackerX}px`;
            ball.style.top = `${attackerY}px`;
        }, { once: true });
    });
});