const StateMachine = require('javascript-state-machine')
const visualize = require('javascript-state-machine/lib/visualize')

let options1 = {
  init: 'solid',
  transitions: [
    {name: 'melt', from: 'solid', to: 'liquid'},
    {name: 'freeze', from: 'liquid', to: 'solid'},
    {name: 'vaporize', from: 'liquid', to: 'gas'},
    {name: 'condense', from: 'gas', to: 'liquid'},
  ],
  methods: {
    onMelt: () => console.log('i melted'),
    onFreeze: () => console.log('i froze'),
    onVaporize: () => console.log('i vaporized'),
    onCondense: () => console.log('i condensed')
  }
}

let options2 = {
  init: 'a',
  transitions: [
    {name: 'step', from: 'a', to: 'b'},
    {name: 'step', from: 'b', to: 'c'},
    {name: 'step', from: 'c', to: 'd'},
    {name: 'step', from: 'd', to: 'a'},
    {name: 'reset', from: ['*'], to: 'a'}
  ]
}

let fsm = new StateMachine(options2)

visualize(fsm)
