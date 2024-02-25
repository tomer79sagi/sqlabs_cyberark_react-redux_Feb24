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

    displayAnimal = (e, id) => {
        alert(id);
    }

    render() { 
        return (
            <table>
                <tbody>
                    { this.state.animals.map(animal => (
                        <tr key={animal.id}>
                            {/* <td onClick={this.displayAnimal.bind(this, animal.id)}>Name: {animal.name}</td> */}
                            <td onClick={(e) => this.displayAnimal(e, animal.id)}>Name: {animal.name}</td>
                            <td>Age: {animal.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Animals;