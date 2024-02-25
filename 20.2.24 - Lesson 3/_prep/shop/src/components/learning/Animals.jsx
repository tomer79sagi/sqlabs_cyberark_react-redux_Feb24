import React, { Component } from 'react';

class Animal {
    id;
    name;
    age;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            animals: [
                new Animal(1, 'Fido', 3),
                new Animal(2, 'Rex', 5),
                new Animal(3, 'Spike', 7)
            ]
         }
    }

    displayAnimal = (id) => {
        alert(id);
    }

    render() { 
        return (
            <div>
                { this.state.animals.map(animal => (
                    <div key={animal.id} onClick={this.displayAnimal.bind(this, animal.id)}>
                        <div>Name: {animal.name}</div>
                        <div>Age: {animal.age}</div>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Animals;