import { Character } from '../classes/character';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("Name", "Bowman");
  });

  test('Проверка создания Character с правильными параметрами', () => {
    const character1 = {
      name: 'Name',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined
    };    
    expect(character).toEqual(character1);
  });

  test('Проверка создания Character с правильными параметрами с не NaN', () => {
    const character1 = {
      name: 'Name',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined
    };    
    character = new Character("Name", "Bowman");
    expect(character).toEqual(character1);
  });


  test('Проверка создания Character на имя 1 символ', () => {
    const character_name = () => new Character('N', 'Bowman');
    expect(() => character_name()).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('Проверка создания Character на имя не стринг', () => {
    const character_name = () => new Character( 1, 'Bowman');
    expect(() => character_name()).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('Проверка создания Character на имя больше 10', () => {
    const character_name = () => new Character('01234567890', 'Bowman');
    expect(() => character_name()).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('Проверка создания Character на тип персонажа', () => {
    const character_type = () => new Character('Name', '1');
    expect(() => character_type()).toThrow('Некорректный тип персонажа');
  });

  test('Проверка levelUp', () => {
    const character1 = {
      name: 'Name',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 36,
      defence: 24,
    };
    character = new Character("Name", "Bowman");
    character.attack = 30;
    character.defence = 20;
    character.levelUp();
    expect(character).toEqual(character1);
  });

  test('Проверка levelUp для умершего', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
  });

  test('Проверка damage', () => {
    character.defence = 20;
    character.damage(50);
    expect(character.health).toBe(60);
  });

  test('Проверка damage для умершего', () => {
    character.health = 0;
    expect(() => character.damage(10)).toThrow('Персонаж уже мертв');
  });

});

