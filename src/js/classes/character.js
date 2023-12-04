export class Character {
  constructor(name, type) {
    const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]
    if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (!types.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    } 
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
  
  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.health = 100;
    this.level += 1;
    this.attack += this.attack * 0.2; //isNaN(this.attack) ? 0 : this.attack
    this.defence += this.defence * 0.2; //isNaN(this.defence) ? 0 : this.defence
  }
  
  damage(points) {
    if (this.health === 0) {
      throw new Error('Персонаж уже мертв');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
