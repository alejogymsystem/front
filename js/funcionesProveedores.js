//const url = 'https://api-2670689.onrender.com/usuario'
const url = 'http://localhost:8081/proveedor'

const listarProveedores = async() => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido') 
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',       
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaProveedores = data.msg //msg es el nombre de la lista retorna con json
        console.log(listaProveedores)
        listaProveedores.map(function (proveedor) {
            //Configurar el objeto para enviarlo por url
            objetoProveedor = Object.keys(proveedor).map(key => key + '=' + 
            encodeURIComponent(proveedor[key])).join('&');
            console.log(proveedor)
            contenido = contenido + `<tr>`+
            `<td>`+proveedor.nombreProveedor+`</td>`+
            `<td>`+proveedor.Nombrecontactoproveedor+`</td>`+
            `<td>`+proveedor.Telefono+`</td>`+
            `<td>`+proveedor.Direccion+`</td>`+
            `<td>`+proveedor.Nit+`</td>`+
            `<td><button onclick="redireccionarEditar('${objetoProveedor}')">Editar</button></td>`+
            `</tr>`
        })
        objectId.innerHTML = contenido
    })

    /*for(i = 1; i<10; i++){
        contenido = contenido + '<tr>'+
        '<td>nombre</td>'+
        '<td>rol</td>'+
        '<td>estado</td>'
    }
    */

}

const registrarProveedor= () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const Nombrecontactoproveedor = document.getElementById('Nombrecontactoproveedor').value
    const Telefono = document.getElementById('Telefono').value
    const Direccion = document.getElementById('Direccion').value
    const Nit = document.getElementById('Nit').value

    if(nombreProveedor.length == 0){
        document.getElementById('nombreProveedorHelp').innerHTML = 'Dato requerido'

    }
    else if(Nombrecontactoproveedor.length == 0){
        document.getElementById('NombrecontactoproveedorHelp').innerHTML = 'Dato requerido'
    }                                                                   
    else if(Telefono.length == 0){
        document.getElementById('TelefonoHelp').innerHTML = 'Dato requerido'
    }
    else if(Direccion.length == 0){
        document.getElementById('DireccionHelp').innerHTML = 'Dato requerido'
    }
    else if(Nit.length == 0){
        document.getElementById('NitHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor = {
            nombreProveedor: nombreProveedor,
            Nombrecontactoproveedor: Nombrecontactoproveedor,
            Telefono: Telefono,
            Direccion: Direccion,
            Nit: Nit
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(proveedor),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg) //Imprimir el mensaje de la transacción
        })
        }
}

const actualizarProveedor= () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const Nombrecontactoproveedor = document.getElementById('Nombrecontactoproveedor').value
    const Telefono = document.getElementById('Telefono').value
    const Direccion = document.getElementById('Direccion').value
    const Nit = document.getElementById('Nit').value

    if(nombreProveedor.length == 0){
        document.getElementById('nombreProveedorHelp').innerHTML = 'Dato requerido'

    }
    else if(Nombrecontactoproveedor.length == 0){
        document.getElementById('NombrecontactoproveedorHelp').innerHTML = 'Dato requerido'
    }                                                                   
    else if(Telefono.length == 0){
        document.getElementById('TelefonoHelp').innerHTML = 'Dato requerido'
    }
    else if(Direccion.length == 0){
        document.getElementById('DireccionHelp').innerHTML = 'Dato requerido'
    }
    else if(Nit.length == 0){
        document.getElementById('NitHelp').innerHTML = 'Dato requerido'
    }
    else{
        let proveedor = {
            nombreProveedor: nombreProveedor,
            Nombrecontactoproveedor: Nombrecontactoproveedor,
            Telefono: Telefono,
            Direccion: Direccion,
            Nit: Nit
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(proveedor),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg) //Imprimir el mensaje de la transacción
        })
        }
}

const redireccionarEditar = (objetoProveedor) => {
    document.location.href='editarProveedores.html?proveedor='+objetoProveedor
}

const editarProveedor = () => {
    // Obtener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('nombreProveedor').value = urlParams.get('nombreProveedor')
    document.getElementById('Nombrecontactoproveedor').value = urlParams.get('Nombrecontactoproveedor')
    document.getElementById('Telefono').value = urlParams.get('Telefono')
    document.getElementById('Direccion').value = urlParams.get('Direccion')
    document.getElementById('Nit').value = urlParams.get('Nit')
}

if(document.querySelector('#btnRegistrar1')){ //Si objeto exitste
document.querySelector('#btnRegistrar1')
.addEventListener('click', registrarProveedor)
}

if(document.querySelector('#btnActualizar1')){//Si objeto existe
document.querySelector('#btnActualizar1')
.addEventListener('click', actualizarProveedor)
}