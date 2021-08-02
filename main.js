const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field;
  }

  print(){
    this.field.forEach(arr => console.log(arr.join('')));
  }
  
}


 const f1 = new Field([['*', '░', 'O'],['░', 'O', '░'],['░', '^', '░']]);
f1.print();