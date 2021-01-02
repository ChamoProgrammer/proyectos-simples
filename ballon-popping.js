let estallo = 0;

document.addEventListener('mouseover', (e) =>   {
    if(e.target.className === 'balloon')   {

      e.target.style.backgrooundColor = '#ededed';
     e.target.textContent = 'EXPLOTO';
        estallo++;
        eliminarEvento(e);
        comprobarTodosReventados();
    }
})

function eliminarEvento(e)        {
    e.target.removeEventListener('mouseover', () =>  {
    })
};

function comprobarTodosReventados()   {
    if(estallo === 15 )   {
        console.log('todo exploto');
        let galeria = document.querySelector('#balloon-gallery');
        let mensaje = document.querySelector('#yay-no-balloons');
        galeria.innerHTML = '';
        mensaje.style.display = 'block';
    }
};