import { Bowman } from '../classes/bowman';

const person1 = new Bowman('Nbowman');

test('Проверка создания Bowman с правильными параметрами', () => {
    const person = {
      name: 'Nbowman',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };    
    expect(person1).toEqual(person);
});
