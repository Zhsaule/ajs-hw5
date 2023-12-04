import { Zombie } from '../classes/zombie';

const person6 = new Zombie('Nzomb');
    
test('Проверка создания Zombie с правильными параметрами', () => {
    const person = {
        name: 'Nzomb',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };    
    expect(person6).toEqual(person);
});
