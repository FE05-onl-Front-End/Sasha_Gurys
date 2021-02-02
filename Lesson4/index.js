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

function zoo () {
    return {

        buyAnimal (name, species, color, handler, animals) {
            animals.push(new Animal(name, species, color, handler));
            console.log(`${name} the ${color} ${species} is now a part of your zoo under the caring watch of ${handler.name} who has ${handler.yearsOfExp} years of experience`);
        },

        sellAnimal (name, animals) {
            let saleMade = false;
            for (let specimen of animals) {
                if (name == specimen.name) {
                    animals.splice(animals.indexOf(specimen), 1);
                    console.log(`${specimen.name} the ${color} ${specimen.species} was sold off, hope you said your goodbyes`);
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
                    console.log(`${specimen.name} the ${color} ${specimen.species} is now handled by ${handler.name}`);
                }
            }
        },

        getIll (name, animals) {
            for (let specimen of animals) {
                if (name == specimen.name) {
                    specimen.isHealthy = false;
                    specimen.isIll = true;
                    console.log(`${specimen.name} the ${color} ${specimen.species} got ill, you should treat it`);
                }
            }
        },

        treatAnimal (name, animals) {
            for (let specimen of animals) {
                if (name == specimen.name) {
                    specimen.isHealthy = true;
                    specimen.isIll = false;
                    console.log(`${specimen.name} the ${color} ${specimen.species} is healthy once again`);
                }
            }
        }
    }
}

let manageZoo = zoo();