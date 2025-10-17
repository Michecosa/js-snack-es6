/* 
* Creare un array di oggetti di squadre di calcio *
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const nomiSquadre = ["Napoli","Atlanta","Bologna","Cagliari","Corno","Cremonese","Fiorentina","Genoa","Inter","Juventus","Lazio","Lecce","Milan","Parma","Pisa","Roma","Sassuolo","Torino","Udinese","Verona"];

const squadre = [];

function getSquadre(nomi) {
  for(let i = 0; i < nomi.length; i++) {
    const squadra = {
      nome: nomi[i],
      'punti Fatti': 0,
      'falli Subiti': 0
    }
    squadre.push(squadra);
  }
}
getSquadre(nomiSquadre);

function giveRandomNumber(teams) {
  for (let team in teams) {
    teams[team]['falli Subiti'] = getRndInteger(0,114);
    teams[team]['punti Fatti'] = getRndInteger(0,760);
  }
}
giveRandomNumber(squadre);

const squadreFalli = [];
function getSquadreFalli(teams) {
  for (let team in teams ) {
    const saveValues = {
      nome: teams[team].nome,
      'falli Subiti': teams[team]['falli Subiti']
    }
    squadreFalli.push(saveValues);
  }
}
getSquadreFalli(squadre);
console.log(squadreFalli);



function printAll(arrayObj) {
  const squadre_falli = document.getElementById('squadre-falli');

  for (let i = 0; i < arrayObj.length; i++) {
    let li = document.createElement("li");
    li.innerText = arrayObj[i]['nome'] + " - Falli subiti: " + arrayObj[i]['falli Subiti'];
    squadre_falli.appendChild(li);
  }
}
printAll(squadreFalli);