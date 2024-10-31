const ball = document.getElementById('ball');
const attackers = document.querySelectorAll('.attacker');
const defenders = document.querySelectorAll('.defender');



function scenario(attackerX,attackerY,currentX,currentY){
  var result = new Map()
  // перемещение  3->4 и 4->3
  if (attackerX == 1200 && attackerY == 425 && currentX == 710 && currentY == 670) {result.set("def1X",760).set("def1Y",505).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 1200 && currentY == 425) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140);}
  // перемещение 4->5 и 5->4
  else if (attackerX == 1370 && attackerY == 75 && currentX == 1200 && currentY == 425) {result.set("def1X",800).set("def1Y",285).set("def2X",1145).set("def2Y",275).set("def3X",1205).set("def3Y",70).set("def4X",585).set("def4Y",45).set("def5X",840).set("def5Y",40);}
  else if (attackerX == 1200 && attackerY == 425 && currentX == 1370 && currentY == 75) {result.set("def1X",760).set("def1Y",505).set("def2X",1105).set("def2Y",360).set("def3X",1095).set("def3Y",110).set("def4X",565).set("def4Y",135).set("def5X",815).set("def5Y",125);}
  // перемещение 3->2 и 2->3
  else if (attackerX == 210 && attackerY == 425 && currentX == 710 && currentY == 670) {result.set("def1X",350).set("def1Y",355).set("def2X",685).set("def2Y",515).set("def3X",875).set("def3Y",140).set("def4X",305).set("def4Y",130).set("def5X",600).set("def5Y",130);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 210 && currentY == 425) {result.set("def1X",520).set("def1Y",475).set("def2X",905).set("def2Y",475).set("def3X",975).set("def3Y",140).set("def4X",450).set("def4Y",140).set("def5X",710).set("def5Y",140);}
  // перемещение 2->1 и 1->2
  else if (attackerX == 45 && attackerY == 75 && currentX == 210 && currentY == 425) {result.set("def1X",300).set("def1Y",275).set("def2X",645).set("def2Y",335).set("def3X",825).set("def3Y",40).set("def4X",185).set("def4Y",80).set("def5X",580).set("def5Y",45);}
  else if (attackerX == 210 && attackerY == 425 && currentX == 45 && currentY == 75) {result.set("def1X",350).set("def1Y",355).set("def2X",685).set("def2Y",515).set("def3X",875).set("def3Y",140).set("def4X",305).set("def4Y",130).set("def5X",600).set("def5Y",130);}
  // перемещение 3->5 и 5->3
  else if (attackerX == 1370 && attackerY == 75 && currentX == 710 && currentY == 670) {result.set("def1X",745).set("def1Y",375).set("def2X",1135).set("def2Y",335).set("def3X",1235).set("def3Y",65).set("def4X",605).set("def4Y",40).set("def5X",845).set("def5Y",35);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 1370 && currentY == 75) {result.set("def1X",685).set("def1Y",575).set("def1_postX",635).set("def1_postY",495).set("def2X",795).set("def2Y",605).set("def2_postX",830).set("def2_postY",505).set("def3X",985).set("def3Y",125).set("def4X",485).set("def4Y",105).set("def5X",720).set("def5Y",115);}
  // перемещение 3->1 и 1->3
  else if (attackerX == 45 && attackerY == 75 && currentX == 710 && currentY == 670) {result.set("def1X",320).set("def1Y",330).set("def2X",710).set("def2Y",325).set("def3X",825).set("def3Y",40).set("def4X",185).set("def4Y",60).set("def5X",600).set("def5Y",35);}
  else if (attackerX == 710 && attackerY == 670 && currentX == 45 && currentY == 75) {result.set("def1X",635).set("def1Y",605).set("def1_postX",630).set("def1_postY",485).set("def2X",780).set("def2Y",575).set("def2_postX",850).set("def2_postY",475).set("def3X",945).set("def3Y",125).set("def4X",430).set("def4Y",120).set("def5X",730).set("def5Y",115);}
  // перемещение 4->1 и 1->4
  else if (attackerX == 45 && attackerY == 75 && currentX == 1200 && currentY == 425) {result.set("def1X",355).set("def1Y",335).set("def2X",695).set("def2Y",515).set("def3X",805).set("def3Y",130).set("def4X",175).set("def4Y",70).set("def5X",610).set("def5Y",125);}
  else if (attackerX == 1200 && attackerY == 425 && currentX == 45 && currentY == 75) {result.set("def1X",760).set("def1Y",525).set("def2X",1105).set("def2Y",360).set("def3X",1135).set("def3Y",340).set("def3_postX",1125).set("def3_postY",120).set("def4X",600).set("def4Y",155).set("def5X",805).set("def5Y",135);}
  // перемещение 4->2 и 2->4
  else if (attackerX == 210 && attackerY == 425 && currentX == 1200 && currentY == 425) {result.set("def1X",320).set("def1Y",350).set("def2X",695).set("def2Y",520).set("def3X",905).set("def3Y",130).set("def4X",330).set("def4Y",300).set("def4_postX",300).set("def4_postY",120).set("def5X",610).set("def5Y",130);}
  else if (attackerX == 1200 && attackerY == 425 && currentX == 210 && currentY == 425) {result.set("def1X",760).set("def1Y",525).set("def2X",1105).set("def2Y",360).set("def3X",1135).set("def3Y",340).set("def3_postX",1125).set("def3_postY",120).set("def4X",600).set("def4Y",155).set("def5X",805).set("def5Y",135);}

  // перемещение 5->2 и 2->5
  else if (attackerX == 210 && attackerY == 425 && currentX == 1370 && currentY == 75) {result.set("def1X",320).set("def1Y",350).set("def2X",695).set("def2Y",520).set("def3X",905).set("def3Y",130).set("def4X",330).set("def4Y",300).set("def4_postX",300).set("def4_postY",120).set("def5X",610).set("def5Y",130);}
  else if (attackerX == 1370 && attackerY == 75 && currentX == 210 && currentY == 425) {result.set("def1X",740).set("def1Y",505).set("def2X",1085).set("def2Y",385).set("def3X",1270).set("def3Y",75).set("def4X",600).set("def4Y",145).set("def5X",830).set("def5Y",140);}
  // перемещение 5->1 и 1->5
  else if (attackerX == 45 && attackerY == 75 && currentX == 1370 && currentY == 75) {result.set("def1X",315).set("def1Y",225).set("def2X",605).set("def2Y",340).set("def3X",835).set("def3Y",40).set("def4X",205).set("def4Y",70).set("def5X",580).set("def5Y",40);}
  else if (attackerX == 1370 && attackerY == 75 && currentX == 45 && currentY == 75) {result.set("def1X",800).set("def1Y",285).set("def2X",1145).set("def2Y",275).set("def3X",1205).set("def3Y",70).set("def4X",585).set("def4Y",45).set("def5X",840).set("def5Y",40);}

  
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
            const postX = direction.get(`def${index+1}_postX`);
            const postY = direction.get(`def${index+1}_postY`);
            if (direction.get(`def${index+1}_postX`) !== void 0){
            console.log(`$def${index+1} ${direction.get(`def${index+1}_postX`)} ${direction.get(`def${index+1}_postY`)}`);
              defender.style.transition = "transform 0.6s ease";
            }
            defender.style.transform = `translate(${newX - defender.offsetLeft}px, ${newY - defender.offsetTop}px)`;
                  setTimeout(() => {
                  defender.style.transition = "transform 1s ease";
                  defender.style.transform = `translate(${postX - defender.offsetLeft}px, ${postY - defender.offsetTop}px)`;
                    
              }, 600);
            
        });

        // Сброс анимации мяча после завершения
        ball.addEventListener('animationend', () => {
            ball.style.animation = '';
            ball.style.left = `${attackerX}px`;
            ball.style.top = `${attackerY}px`;
        }, { once: true });
    });
});