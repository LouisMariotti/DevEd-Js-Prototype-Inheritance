// Copy over functionality methods and properties from an construcor function

function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked`);
};
Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked`);
};

function Dragon(life, name, level, color, spell) {
  // Keyword going to reference the Dragon object
  Enemy.call(this, life, name, level);
  //Define it as normal
  this.color = color;
  this.spell = spell;
}

// Inherit Prototype
Dragon.prototype.fireBreath = Object.create(Enemy.prototype);

Dragon.prototype.fireBreath = function () {
  console.log("FIIIIIIOIOIIOIRE");
};

const newDragon = new Dragon(100, "Drogon", 25, "green", "fire");

newDragon.getInfo();
