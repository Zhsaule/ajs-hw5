import { Swordsman } from '../classes/swordsman';

const person4 = new Swordsman('Nsword');

test('Проверка создания Swordsman с правильными параметрами', () => {
    const person = {
        name: 'Nsword',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };    
    expect(person4).toEqual(person);
});
