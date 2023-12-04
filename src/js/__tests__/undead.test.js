import { Undead } from '../classes/undead';

const person5 = new Undead('Nundead');

test('Проверка создания Type с правильными параметрами', () => {
    const person = {
        name: 'Nundead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };    
    expect(person5).toEqual(person);
});
