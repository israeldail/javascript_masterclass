let ninjas = ['shaun', 'israel', 'chao']

console.log(ninjas[0].toLocaleUpperCase())

for (ninja of ninjas) {
    console.log(ninja)
}

console.log(ninjas.map((ninja) => ninja.toLocaleUpperCase()))