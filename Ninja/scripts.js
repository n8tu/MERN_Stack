class Ninja {
    name;
    health;
    speed;
    strength;


    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats(){
        console.log(
            `
            Your Stats are:
            Name: ${this.name}
            Health: ${this.health}
            Speed: ${this.speed}
            Strength: ${this.strength}
            `
        )
    }

    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();