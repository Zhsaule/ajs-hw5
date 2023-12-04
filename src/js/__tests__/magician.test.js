import { Magician } from '../classes/magician';

const person3 = new Magician('Nmag');

test('Проверка создания Magician с правильными параметрами', () => {
    const person = {
        name: 'Nmag',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };    
    expect(person3).toEqual(person);
});
