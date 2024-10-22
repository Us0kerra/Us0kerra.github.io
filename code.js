const ball = document.getElementById('ball');
const attackers = document.querySelectorAll('.attacker');
const defenders = document.querySelectorAll('.defender');

{/* <img src="images/models/defender.png" class="defender" id="def_1" data-x="520" data-y="475">
        <img src="images/models/defender.png" class="defender" id="def_2" data-x="905" data-y="475">
        <img src="images/models/defender.png" class="defender" id="def_3" data-x="975" data-y="140">
        <img src="images/models/defender.png" class="defender" id="def_4" data-x="450" data-y="140">
        <img src="images/models/defender.png" class="defender" id="def_5" data-x="710" data-y = "140"></img> */}

function scenario(attackerX,attackerY,currentX = 710,currentY = 670){
  switch(attackerX,attackerY,currentX,currentY){
    case 1200,425,710,670: return  new Map([["def1X",760],["def1Y",465],["def2X",1105],["def2Y",360],["def3X",1495],["def3Y",110],["def4X",565],["def4Y",135],["def5X",815],["def5Y",125]]);
  }
}
attackers.forEach(attacker => {
    attacker.addEventListener('click', () => {
        const attackerX = attacker.getAttribute('data-x');
        const attackerY = attacker.getAttribute('data-y');
        // var direction = scenario(attackerX,attackerY,ball.getAttribute("data-x"),ball.getAttribute("data-y"));
        // console.log(scenario(attackerX,attackerY,ball.getAttribute("data-x"),ball.getAttribute("data-y")));
        var test = new Map([["def1X",760],["def1Y",465],["def2X",1105],["def2Y",360],["def3X",1095],["def3Y",110],["def4X",565],["def4Y",135],["def5X",815],["def5Y",125]]);
        // Перемещение мяча к выбранному игроку
        ball.style.setProperty('--end-x', `${attackerX - ball.offsetLeft}px`);
        ball.style.setProperty('--end-y', `${attackerY - ball.offsetTop}px`);
        ball.style.animation = 'moveObject 1s forwards';

        // Перемещение защитников
        defenders.forEach((defender, index) => {
            const newX = test.get(`def${index+1}X`);
            const newY = test.get(`def${index+1}Y`);
            defender.style.setProperty('--end-x', `${newX - defender.offsetLeft}px`);
            defender.style.setProperty('--end-y', `${newY - defender.offsetTop}px`);
            defender.style.animation = 'moveObject 1s forwards';

            defender.addEventListener('animationend',() => {
              defender.style.left = newX;
              defender.style.top = newY;
              // defender.style.animation = '';
              defender.style.transform = '';
            }, {once: true});
        });

        // Сброс анимации мяча после завершения
        ball.addEventListener('animationend', () => {
            ball.style.animation = '';
            ball.style.transform = '';
            ball.style.left = `${attackerX}px`;
            ball.style.top = `${attackerY}px`;
        }, { once: true });
    });
});