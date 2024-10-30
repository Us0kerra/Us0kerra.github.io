const ball = document.getElementById('ball');
const attackers = document.querySelectorAll('.attacker');
const defenders = document.querySelectorAll('.defender');
const atk1 = document.getElementById("atk_1");
const atk5 = document.getElementById("atk_5");


{/* <img src="images/models/defender.png" class="defender" id="def_1" data-x="520" data-y="475">
        <img src="images/models/defender.png" class="defender" id="def_2" data-x="905" data-y="475">
        <img src="images/models/defender.png" class="defender" id="def_3" data-x="975" data-y="140">
        <img src="images/models/defender.png" class="defender" id="def_4" data-x="450" data-y="140">
        <img src="images/models/defender.png" class="defender" id="def_5" data-x="710" data-y = "140"></img> */}

{/* <img src="images/models/attack.png" class="attacker" id="atk_1" data-x="525" data-y="90">
        <img src="images/models/attack.png" class="attacker" id="atk_2" data-x="210" data-y="425">
        <img src="images/models/attack.png" class="attacker" id="atk_3" data-x="710" data-y="670">
        <img src="images/models/attack.png" class="attacker" id="atk_4" data-x="1200" data-y="425">
        <img src="images/models/attack.png" class="attacker" id="atk_5" data-x="710" data-y="420">
         */}
function scenario(attackerX,attackerY,currentX,currentY){
    var result = new Map()
    //перемещение 3->5 и 5->3
    if (attackerX == 710 && attackerY == 420 && currentX == 710 && currentY == 670) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",825).set("def3Y",140).set("def4X",615).set("def4Y",140).set("def5X",710).set("def5Y",335).set("atk1X",525).set("atk1Y",90).set("atk5X",710,).set("atk5Y",420);}
    else if (attackerX == 710 && attackerY == 670 && currentX == 710 && currentY == 420) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140).set("atk1X",525).set("atk1Y",90).set("atk5X",710).set("atk5Y",420);}
    // перемещение 3->4 и 4->3
    else if (attackerX == 1200 && attackerY == 425 && currentX == 710 && currentY == 670) {result.set("def1X",760).set("def1Y",515).set("def2X",1105).set("def2Y",360).set("def3X",1105).set("def3Y",115).set("def4X",555).set("def4Y",140).set("def5X",815).set("def5Y",120).set("atk1X",915).set("atk1Y",90).set("atk5X",880).set("atk5Y",385);}
    else if (attackerX == 710 && attackerY == 670 && currentX == 1200 && currentY == 425) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140).set("atk1X",525).set("atk1Y",90).set("atk5X",710,).set("atk5Y",420);}
    // перемещение 4->5 и 5->4
    else if (attackerX == 880 && attackerY == 385 && currentX == 1200 && currentY == 425) {result.set("def1X",820).set("def1Y",480).set("def2X",1105).set("def2Y",360).set("def3X",975).set("def3Y",140).set("def4X",650).set("def4Y",140).set("def5X",870).set("def5Y",300).set("atk1X",915).set("atk1Y",90).set("atk5X",880,).set("atk5Y",385);}
    else if (attackerX == 1200 && attackerY == 425 && currentX == 880 && currentY == 385) {result.set("def1X",760).set("def1Y",515).set("def2X",1105).set("def2Y",360).set("def3X",1105).set("def3Y",115).set("def4X",555).set("def4Y",140).set("def5X",815).set("def5Y",120).set("atk1X",915).set("atk1Y",90).set("atk5X",880).set("atk5Y",420);}
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

        //перемещение первого нападающего
        const atk1X = direction.get("atk1X");
        const atk1Y = direction.get("atk1Y");
        atk1.style.setProperty('--end-x',`${atk1X - atk1.offsetLeft}px`)
        atk1.style.setProperty('--end-y',`${atk1Y - atk1.offsetTop}px`)
        atk1.style.animation = 'moveObject 1s forwards';
        atk1.setAttribute('data-x', `${atk1X}`);
        atk1.setAttribute('data-y', `${atk1Y}`);
        
        atk1.addEventListener('animationend',() => {
            atk1.style.left = `${atk1X}px`;
            atk1.style.top = `${atk1Y}px`;
            atk1.style.animation = '';
          }, {once: true});

        //перемещение второго нападающего
        const atk5X = direction.get("atk5X");
        const atk5Y = direction.get("atk5Y");
        atk5.style.setProperty('--end-x',`${atk5X - atk5.offsetLeft}px`)
        atk5.style.setProperty('--end-y',`${atk5Y - atk5.offsetTop}px`)
        atk5.style.animation = 'moveObject 1s forwards';
        atk5.setAttribute('data-x', `${atk5X}`);
        atk5.setAttribute('data-y', `${atk5Y}`);
        
        atk5.addEventListener('animationend',() => {
            atk5.style.left = `${atk5X}px`;
            atk5.style.top = `${atk5Y}px`;
            atk5.style.animation = '';
          }, {once: true});

        // Сброс анимации мяча после завершения
        ball.addEventListener('animationend', () => {
            ball.style.animation = '';
            // ball.style.transform = '';
            ball.style.left = `${attackerX}px`;
            ball.style.top = `${attackerY}px`;
        }, { once: true });
    });
});