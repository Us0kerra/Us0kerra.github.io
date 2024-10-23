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
  // перемещение  3->4 и 4->3
  if (attackerX == 1200 && attackerY == 425 && currentX == 710 && currentY == 670) {result.set("def1X",760).set("def1Y",465).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 1200 && currentY == 425) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140);}
  // перемещение 4->5 и 5->4
  else if (attackerX == 1370 && attackerY == 75 && currentX == 1200 && currentY == 425) {result.set("def1X",800).set("def1Y",285).set("def2X",1145).set("def2Y",275).set("def3X",1205).set("def3Y",70).set("def4X",585).set("def4Y",45).set("def5X",840).set("def5Y",40);}
  else if (attackerX == 1200 && attackerY == 425 && currentX == 1370 && currentY == 75) {result.set("def1X",760).set("def1Y",465).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}
  // перемещение 3->2 и 2->3
  else if (attackerX == 210 && attackerY == 425 && currentX == 710 && currentY == 670) {result.set("def1X",350).set("def1Y",355).set("def2X",685).set("def2Y",515).set("def3X",875).set("def3Y",140).set("def4X",305).set("def4Y",130).set("def5X",600).set("def5Y",130);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 210 && currentY == 425) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140);}
  // перемещение 2->1 и 1->2
  else if (attackerX == 45 && attackerY == 75 && currentX == 210 && currentY == 425) {result.set("def1X",300).set("def1Y",275).set("def2X",645).set("def2Y",335).set("def3X",825).set("def3Y",40).set("def4X",185).set("def4Y",80).set("def5X",580).set("def5Y",45);}
  else if (attackerX == 210 && attackerY == 425 && currentX == 45 && currentY == 75) {result.set("def1X",350).set("def1Y",355).set("def2X",685).set("def2Y",515).set("def3X",875).set("def3Y",140).set("def4X",305).set("def4Y",130).set("def5X",600).set("def5Y",130);}
  // перемещение 3->5 и 5->3
  else if (attackerX == 1370 && attackerY == 75 && currentX == 710 && currentY == 670) {result.set("def1X",745).set("def1Y",375).set("def2X",1135).set("def2Y",335).set("def3X",1235).set("def3Y",65).set("def4X",605).set("def4Y",40).set("def5X",845).set("def5Y",35);}
  //else if (attackerX == 710 && attackerY == 670 && currentX == 1370 && currentY == 75) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140);}
  // перемещение 3->1 и 1->3
  else if (attackerX == 45 && attackerY == 75 && currentX == 710 && currentY == 670) {result.set("def1X",320).set("def1Y",330).set("def2X",710).set("def2Y",325).set("def3X",825).set("def3Y",40).set("def4X",185).set("def4Y",60).set("def5X",600).set("def5Y",35);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 45 && currentY == 75) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140);}
  // перемещение 4->1 и 1->4
  else if (attackerX == 1200 && attackerY == 425 && currentX == 1370 && currentY == 75) {result.set("def1X",760).set("def1Y",465).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}
  else if (attackerX == 1200 && attackerY == 425 && currentX == 1370 && currentY == 75) {result.set("def1X",760).set("def1Y",465).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}
  // перемещение 4->2
  //
  // перемещение 5->2
  //
  // перемещение 5->1 и 1->5
  else if (attackerX == 45 && attackerY == 75 && currentX == 1370 && currentY == 75) {result.set("def1X",315).set("def1Y",225).set("def2X",605).set("def2Y",340).set("def3X",835).set("def3Y",40).set("def4X",205).set("def4Y",70).set("def5X",580).set("def5Y",40);}
  //else if (attackerX == 1200 && attackerY == 425 && currentX == 1370 && currentY == 75) {result.set("def1X",760).set("def1Y",465).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}

  
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