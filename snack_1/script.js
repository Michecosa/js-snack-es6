/* 
* Creare un array di oggetti *
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore.
*/

const bici = [
  {
    'nome' : 'un nome bellissimo',
    'peso' : 912
  },
  {
    'nome' : 'un nome bellissimo',
    'peso' : 90
  },
  {
    'nome' : 'un nome bellissimo',
    'peso' : 122
  },
  {
    'nome' : 'un nome bellissimo',
    'peso' : 132
  },
  {
    'nome' : 'un nome ancora più bello',
    'peso' : 293
  }
];

function getLighterWeight(arrayObj) {
  let lighterPosition = 0;
  for (let element in arrayObj) {
    const weight = arrayObj[element]['peso'];
    console.log(weight)
  }


}

getLighterWeight(bici)