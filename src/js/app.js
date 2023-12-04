// TODO: write your code here
import { Character } from './classes/character';
import { Bowman } from './classes/bowman';
import { Daemon } from './classes/daemon';
import { Magician } from './classes/magician';
import { Swordsman } from './classes/swordsman';
import { Undead } from './classes/undead';
import { Zombie } from './classes/zombie';

console.log('worked');

const person = new Character('Nchar', 'Bowman');
const person1 = new Bowman('Nbowman');
const person2 = new Daemon('Ndaemon');
const person3 = new Magician('Nmag');
const person4 = new Swordsman('Nsword');
const person5 = new Undead('Nundead');
const person6 = new Zombie('Nzomb');

console.log(person);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);

person.damage(50);
console.log(person);
person.levelUp();
console.log(person);
person6.levelUp();
console.log(person6);