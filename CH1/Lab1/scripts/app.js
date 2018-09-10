const once = (f, g) => {
  let done = false
  return () => {
    if(!done) {
      f(...args)
      done = true
    } else {
      g(...args)
    }
  }
}