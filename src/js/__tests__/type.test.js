import { Bowman } from '../classes/bowman';
import { Daemon } from '../classes/daemon';
import { Magician } from '../classes/magician';
import { Swordsman } from '../classes/swordsman';
import { Undead } from '../classes/undead';
import { Zombie } from '../classes/zombie';


const person1 = new Bowman('Nbowman');
const person2 = new Daemon('Ndaemon');
const person3 = new Magician('Nmag');
const person4 = new Swordsman('Nsword');
const person5 = new Undead('Nundead');
const person6 = new Zombie('Nzomb');

test('Проверка создания Bowman с правильными параметрами', () => {
    const person = {
      name: 'Nbowman',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    };    
    expect(person1).toEqual(person);
});

test('Проверка создания Daemon с правильными параметрами', () => {
const person = {
    name: 'Ndaemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
};    
expect(person2).toEqual(person);
});

test('Проверка создания Magician с правильными параметрами', () => {
    const person = {
        name: 'Nmag',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };    
    expect(person3).toEqual(person);
});

test('Проверка создания Swordsman с правильными параметрами', () => {
    const person = {
        name: 'Nsword',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };    
    expect(person4).toEqual(person);
});
    

test('Проверка создания Type с правильными параметрами', () => {
    const person = {
        name: 'Nundead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };    
    expect(person5).toEqual(person);
});
    
test('Проверка создания Zombie с правильными параметрами', () => {
    const person = {
        name: 'Nzomb',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };    
    expect(person6).toEqual(person);
});

