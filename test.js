const StateMachine = require('javascript-state-machine')


class Person {
  constructor(name) {
    this.name = name;
    this._fsm()
  }

  speak() {
    console.log('my name is ' + this.name + ' and I am ' + this.state)
  }
}

StateMachine.factory(Person, {
  init: 'idle',
  transitions: [
    { name: 'sleep', from: 'idle',     to: 'sleeping' },
    { name: 'wake',  from: 'sleeping', to: 'idle'     }
  ]
});

let amy = new Person('amy'),
bob = new Person('bob');

bob.sleep();

console.log(amy.state);   // 'idle'
console.log(bob.state)   // 'sleeping'

amy.speak(); // 'my name is amy and I am idle'
bob.speak(); // 'my name is bob and I am sleeping'