const once = (f, g) => {
  let done = false
  return (...args) => {
    if(!done) {
      done = true
      return f(...args)
    }
    return g(...args)
  }
}

const hello = (name, gender = '') => `Hello ${gender + name}`
const goodbye = (name, gender = '') => `Goodbye ${gender + name}`

const greetingMimOnce = once(hello, goodbye)
const greetingSolOnce = once(hello, goodbye)

// console.log(greetingOnce('MootyMim'))
// console.log(greetingOnce('MootyMim'))
// console.log(greetingOnce('MootyMim'))

exports.greeting = { greetingMimOnce, greetingSolOnce }
