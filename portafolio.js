let puntodDelTema = document.getElementsByClassName('theme-dot');

//para guardar el tema la proxima vez que lo visitemos
let tema = localStorage.getItem('theme');
if(tema == null)  {
    establecerTema('light')
}
else  {
    establecerTema(tema)
}


for (let i = 0; puntodDelTema.length > i; i++)   {
    puntodDelTema[i].addEventListener('click', function()  {
        let modo = this.dataset.mode
        console.log('click el el modo', modo);

        establecerTema(modo)
    })
}

function establecerTema(modo)   {
        // si coincide con el boton ejecutara el boton que le pedimos
if(modo == 'light')   {
    document.getElementById('theme-style').href = 'portafolio.css'
}
if(modo == 'blue')   {
    document.getElementById('theme-style').href = 'portafolio1.css'
}
if(modo == 'green')   {
    document.getElementById('theme-style').href = 'portafolio2.css'
}
if(modo == 'purple')   {
    document.getElementById('theme-style').href = 'portafolio3.css'
}
if(modo == 'dark')   {
    document.getElementById('theme-style').href = 'portafolio4.css'
}

//para guardar el tema la proxima vez que lo visitemos
localStorage.setItem('theme', modo);
}