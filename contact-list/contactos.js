let contactos ={Mercedes,Luis,Deiby};

let directorio={
nombre_contacto:"Mercedes",
apellidos_contato: "valencia arana",
celular:3113716697,
}
function añadir(){
    alert('1. Agregar un nuevo contacto.');
    alert('2. Borrar un contacto.');
    alert('3.  Completar  todo.' )
    alert('4. Mostrar tu listado de contactos');
  
    let opcion = prompt('Escoge una opción');
    // opcion = parseInt(opcion)
    if(opcion === '1' || opcion === '2' || opcion === '3' || opcion === '4') {
        console.log( `haz escogido la opción ${opcion}`);
        if (opcion === '1'){
            agregar(contactos)
        } else if ( opcion === '2') {
            preborrar(contactos)
        } else if (opcion === '3'){
           completar (contactos)
        } else {
            mostrar_contactos(contactos)
        }
    } else {
        console.log('haz escogido una opción inválida, comienza de nuevo.');
    }
}
function agregar(directorio,nombre_contacto){
    alert('NOTA: Debes escribir exactamente los datos (Nombres, Apellidos, celular ) del contacto que quieres agregar.')
    let nombre_del_contacto = prompt('Escribe el nombre del contacto: ')
        nombre_del_contacto = nombre_del_contacto.toUpperCase()
        directorio.nombre_contacto.push(nombre_del_contacto)
    let apellido_del_contacto = prompt('Escribe el apellido del contacto: ')
        apellido_del_contacto = apellido_del_contacto.toUpperCase()
        directorio.apellidos_contacto.push(apellido_del_contacto)
    let celular_del_contacto = prompt('Escribe el teléfono del contacto: ')
        directorio.celular.push(celular_del_contacto)
  
    alert(`El contacto ${nombre_del_contacto} ${apellido_del_contacto} ha sido agregado con elelular ${celular_del_contacto}`)
}
function mostrar_contactos(directorio){
    alert('lista de los contactos que tienes registrados: ')
    console.log(directorio)
}


function preborrar(contactos){
    alert ('Para borrar un contacto debes escribir su nombre')
    let eleccion = prompt('1. SÍ - 2. NO')
    if (eleccion === '1') {
        console.log(contactos)
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    } else if (eleccion === '2') {
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    } else {
        console.log('Escogiste una opción inválida.')
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    }
    nombre_a_borrar = nombre_a_borrar.toUpperCase()


    for (var i = 0; i< contactos.length; i++){
        if(contactos[i] === nombre_a_borrar){
            var existe = true
            break
        } else {
            var existe = false
        }
    }

    if (existe===true){
        contactos = contactos.filter((item) => item !== nombre_a_borrar)
        console.log(`Tu nueva lista de contactos es: ${contactos}`)
    } else {
        console.log('El nombre escogido no existe. busca de nuevo')
    }

}


saludar()


