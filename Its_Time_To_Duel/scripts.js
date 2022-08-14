class Card {
    name;
    cost;


    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card{

    power;
    resilience;

    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        if(target instanceof Unit){
            console.log(
                `
                ${this.name} attacked ${target.name} and reduced
                 power: by ${this.power}
                 resilience: by${this.resilience}
                `);
            target.power -= this.power;
            target.resilience -= this.resilience;
        }else{
            throw new Error("Card must be a Unit!")
        }
    }

    showStats(){
        console.log(`${this.name} has ${this.power} power and ${this.resilience} resilience`);
    }

}

class Effect extends Card{
    text;
    stat;
    magnitude;


    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    target(card){

        if(card instanceof Unit){
            (this.stat == "resilience")
            ? card.resilience += this.magnitude
            : card.power += this.magnitude;
            console.log(this.text);
            console.log(`Target: ${card.name}`);
        }else{
            throw new Error("Target must be a Unit!")
        }
    }
}

const unitCardOne = new Unit("Red Belt Ninja",3,3,4);
const unitCardTwo = new Unit("Black Belt Ninja",4,5,4);

const effectCardOne = new Effect("Hard Algorithm",2,
    "increase target's resilience by 3","resilience",3)
const effectCardTwo = new Effect("Unhandled Promise Rejection",1,
    "reduce target's resilience by 2","resilience",-2)
const effectCardThree = new Effect("Pair Programming",3,
    "increase target's power by 2","power",2)


unitCardOne.showStats();

effectCardOne.target(unitCardOne);
effectCardTwo.target(unitCardOne);
effectCardThree.target(unitCardOne);

unitCardOne.showStats();

unitCardTwo.showStats()
unitCardOne.attack(unitCardTwo);

unitCardTwo.showStats()



