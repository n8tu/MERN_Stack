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

class Sensei extends Ninja{

    wisdom;

    constructor(name, health = 200, speed = 10, strength = 10 , wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"