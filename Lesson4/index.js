function Animal (name, species, color, handler) {
    this.name = name,
    this.species = species,
    this.color = color,
    this.handler = handler,
    this.isHealthy = true,
    this.isIll = false
};

const handlers = [
    {
        name: 'Jeff',
        yearsOfExp: 3
    },
    {
        name: 'Beth',
        yearsOfExp: 7
    },
    {
        name: 'Leor',
        yearsOfExp: 11
    },
    {
        name: 'Suzy',
        yearsOfExp: 14
    }
];

const myAnimals = [
    new Animal ("Spot", "Leopard", "yellow", handlers[0]),
    new Animal ("Spike", "Porcupine", "dark-gray", handlers[1]),
    new Animal ("Trunk", "Elephant", "light-gray", handlers[2]),
    new Animal ("Grimm", "Hyena", "dark-Brown", handlers[3])
]

const lion = {
    name: "Alex",
    species: "Lion",
    color: "tan",
    handler: handlers[1],
    isHealthy: true,
    isIll: false
}

function zoo () {
    return {

        buyAnimal (animal, animals) {
            animals.push(animal);
            const {name, species, color, handler: { name:handlerName , yearsOfExp:handlerExp }} = animal;
            console.log(`${name} the ${color} ${species} is now a part of your zoo under the caring watch of ${handlerName} who has ${handlerExp} years of experience`);
        },

        sellAnimal (name, animals) {
            let saleMade = false;
            for (let specimen of animals) {
                if (name == specimen.name) {
                    animals.splice(animals.indexOf(specimen), 1);
                    const {name: animalName, species, color} = specimen;
                    console.log(`${animalName} the ${color} ${species} was sold off, hope you said your goodbyes`);
                    saleMade = true;
                    break;
                }
            }
            if (saleMade == false) {
                console.log(`you don't have a ${name} in your zoo`)
            }
        },

        reassignHandler (name, handler, animals) {
            for (let specimen of animals) {
                if (name == specimen.name) {
                    specimen.handler = handler;
                    const {name: animalName, color, species, handler: { name:handlerName , yearsOfExp:handlerExp }} = specimen;
                    console.log(`${animalName} the ${color} ${species} is now handled by ${handlerName}, who has ${handlerExp} years of experience`);
                }
            }
        },

        getIll (name, animals) {
            for (let specimen of animals) {
                if (name == specimen.name) {
                    specimen.isHealthy = false;
                    specimen.isIll = true;
                    const {name: animalName, color, species} = specimen;
                    console.log(`${animalName} the ${color} ${species} got ill, you should treat it`);
                }
            }
        },

        treatAnimal (name, animals) {
            for (let specimen of animals) {
                if (name == specimen.name) {
                    specimen.isHealthy = true;
                    specimen.isIll = false;
                    const {name: animalName, color, species} = specimen;
                    console.log(`${animalName} the ${color} ${species} is healthy once again`);
                }
            }
        }
    }
}

let manageZoo = zoo();
manageZoo.buyAnimal(lion, myAnimals);
manageZoo.sellAnimal("Grimm", myAnimals);
manageZoo.reassignHandler("Spot", handlers[1], myAnimals);
manageZoo.getIll("Trunk", myAnimals);
manageZoo.treatAnimal("Trunk", myAnimals);