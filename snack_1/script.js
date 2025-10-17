/* 
* Creare un array di oggetti *
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore.
*/

const bici = [
  {
    'nome': 'Bianchi Oltre XR4',
    'peso': 8200 // peso in grammi (8,2 kg)
  },
  {
    'nome': 'Cannondale Synapse',
    'peso': 9100
  },
  {
    'nome': 'Specialized Allez',
    'peso': 7800
  },
  {
    'nome': 'Trek Domane',
    'peso': 8500
  },
  {
    'nome': 'Giant Defy Advanced',
    'peso': 8300
  }
];

function printAll(arrayObj) {
  const print_all_bikes = document.getElementById('print-all-bikes');
  for (let i = 0; i < arrayObj.length; i++) {
    let li = document.createElement("li");
    li.innerText = arrayObj[i].nome + " - Peso: " + (arrayObj[i].peso / 1000).toFixed(2) +"kg";
    print_all_bikes.appendChild(li);
  }
}
printAll(bici);

function getLighterWeight(arrayObj) {
  let lighterBike = arrayObj[0];
  for (let element in arrayObj) {
    const bike = arrayObj[element];
    if(bike['peso'] <= lighterBike['peso']) {
      lighterBike = bike;
    }
  }
  return lighterBike;
}

const lighterBike = getLighterWeight(bici);

const print_bike = document.getElementById('print-bikes');

const lighterBikeWeightKg = lighterBike.peso / 1000;
print_bike.innerHTML = 
  `<h5>La bici con peso minore è la "<span class="text-primary">${lighterBike.nome}</span>" con un peso di <span class="text-primary">${lighterBikeWeightKg.toFixed(2)}</span>kg`;