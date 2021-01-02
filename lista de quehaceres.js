//Selection items from the DOM
//Add items container
let agregarElementos = document.querySelector('.addItems-action');
let entrada = document.querySelector('.addItems-input');
let enviar = document.querySelector('.addItems-submit');

//Display items container
let list = document.querySelector('.grocery-list');
let accionElementoVisualizacion = document.querySelector('.displayItems-action');
let eliminar = document.querySelector('.displayItems-clear');

//Add event listeners
//Submit listener
enviar.addEventListener('click', enviarARticulo);
//Check for local storage
document.addEventListener('DOMContentLoaded', almacenamientoPantalla);
//eliminar list
eliminar.addEventListener('click', eliminarArticulos);
//Listen to list to delete individual items
list.addEventListener('click', articuloAgg);


//functions
function enviarARticulo(event){
    event.preventDefault();
    let value = entrada.value;
    if (value === ''){
        mostrarAccion(agregarElementos, 'agrega un articulo maje...😒', false);
    } else {
        mostrarAccion(agregarElementos, `${value} agregado a la lista🛒`, true);
        crearArticulo(value);
        actualizarAlmacenamiento(value);
    }
}

function mostrarAccion(element, text, value){
    if (value === true){
        element.classList.add('success');
        element.innerText = text;
        entrada.value = '';
        setTimeout(function(){
            element.classList.remove('success');
        }, 2000)
    } else {
        element.classList.add('alert');
        element.innerText = text;
        entrada.value = '';
        setTimeout(function(){
            element.classList.remove('alert');
        }, 2000)
    }
}

// create item
function crearArticulo(value){
    let parent = document.createElement('div');
        parent.classList.add('grocery-item');
    // let title = document.createElement('h4');
    //     title.classList.add('grocery-item__title');
    parent.innerHTML = `<h2 class="grocery-item__title">${value}</h2>
    <a href="#" class="grocery-item__link">
    <i class='bx bxs-trash-alt'></i>
    </a>`

    list.appendChild(parent);
}

//update storage
function actualizarAlmacenamiento(value){
    let groceryList;
    
    groceryList = localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem('groceryList')) : [];

    groceryList.push(value);
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

//display items in local storage
function almacenamientoPantalla(){
    let exists = localStorage.getItem('groceryList');
    
    if(exists){
        let storageItems = JSON.parse(localStorage.getItem('groceryList'));
        storageItems.forEach(function(element){
            crearArticulo(element);
        })
    }
}

//remove all items
function eliminarArticulos(){
    //delete from local storage
    localStorage.removeItem('groceryList');
    let items = document.querySelectorAll('.grocery-item');
    
    if(items.length > 0){
        //remove each item from the list
        mostrarAccion(accionElementoVisualizacion, 'elementos eliminados🤗', false);
        items.forEach(function(element){
            list.removeChild(element);
        })
    } else {
        mostrarAccion(accionElementoVisualizacion, 'no hay elementos que eliminar😏', false);
    }
}

//remove single item

function articuloAgg(event){
    event.preventDefault();
    
    let link = event.target.parentElement;
    if(link.classList.contains('grocery-item__link')){
        let text = link.previousElementSibling.innerHTML;
        let groceryItem = event.target.parentElement.parentElement;
        //remove from list

        list.removeChild(groceryItem);
        mostrarAccion(accionElementoVisualizacion,`${text} eliminado de la lista..🥱`, true);

        //remove from local storage
        editStorage(text);

    }
}

function editStorage(item){
    let groceryItems = JSON.parse(localStorage.getItem('groceryList'));
    let index = groceryItems.indexOf(item);
    
    groceryItems.splice(index, 1);
    //first delete existing list
    localStorage.removeItem('groceryList');
    //add new updated/edited list
    localStorage.setItem('groceryList', JSON.stringify(groceryItems));

}