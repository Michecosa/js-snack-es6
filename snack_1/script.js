/* 
* Creare un array di oggetti *
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore.
*/

const bici = [
  {
    'nome' : 'un nome bellissimo',
    'peso' : 0
  },
  {
    'nome' : 'un nome ancora più bello',
    'peso' : 0
  }
];

function getElements(arrayObj) {
  for (let element in arrayObj) {
    console.log(arrayObj[element]);
  }
}

getElements(bici)