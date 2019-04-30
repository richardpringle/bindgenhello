const wasm = import('./bindgenhello')

console.log(wasm)

wasm.then(h => h.hello('world!')).catch(err => {
  console.log('poop')
  console.error(err)
})
