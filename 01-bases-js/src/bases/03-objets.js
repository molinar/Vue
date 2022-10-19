const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 523221,
        lat: 14.2556,
        lng: 34.256954
    }
}

console.log(persona)


const persona2 = persona

console.log(persona2)

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)

const persona3 = { ...persona }

persona3.nombre = 'Thor'

console.log(persona)
console.log(persona2)
console.log(persona3)