const assert = require('assert')
const {greeting} = require('../scripts/app.js')
const { greetingMimOnce, greetingSolOnce } = greeting

describe('app', () => {
  describe('#greeting', () => {
    it('Name Ms.Mooty should return greeting text', () => {
      assert.equal(greetingMimOnce('Mooty', 'Ms.'), 'Hello Ms.Mooty')
    })
    
    it('Name Ms.Mooty should return greeting text', () => {
      assert.equal(greetingSolOnce('Sol', 'Mr.'), 'Hello Mr.Sol')
    })
  })
})

