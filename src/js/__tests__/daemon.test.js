import { Daemon } from '../classes/daemon';

const person2 = new Daemon('Ndaemon');

test('Проверка создания Daemon с правильными параметрами', () => {
const person = {
    name: 'Ndaemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
};    
expect(person2).toEqual(person);
});
