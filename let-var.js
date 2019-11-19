let empleados = [{

    id: 1,
    nombre: 'Miguel'
}, {

    id: 2,
    nombre: 'David'
}, {

    id: 3,
    nombre: 'Melissa'

}];

let salarios = [{

    id: 1,
    salario: 1000

}, {
    id: 2,
    salario: 2000

}]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = salarios.find(salario => salario.id === empleado.id)
        if (!empleadoDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);

        } else {
            resolve(empleadoDB);

        }
    })
}

getEmpleado(3).then(empleado => {
    console.log('El empleado es: ', empleado.nombre);
    getSalario(empleado).then(salario => {
        console.log('El salario es: ', salario.salario);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err)
});