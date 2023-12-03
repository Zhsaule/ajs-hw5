export class Character {
  constructor(name, type, attack, defence) {
    if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (!["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].includes(type)) {
      throw new Error('Некорректный тип персонажа');
    } 
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = isNaN(attack) ? 0 : attack;
    this.defence = isNaN(defence) ? 0 : defence;
  }
  
  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }
  
  damage(points) {
    if (this.health === 0) {
      throw new Error('Персонаж уже мертв');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
