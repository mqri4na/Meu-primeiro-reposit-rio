let titulo = document.querySelector('h1')
let lastParagraph = document.querySelector('#p')

titulo.addEventListener('mouseover', ()=> {
    lastParagraph.innerHTML = '<button>Mude o título</button>'
})
lastParagraph.addEventListener('click', ()=>{

titulo.style.color = 'pink'
titulo.style.textAlign = 'center'
titulo.style.fontFamily = 'sans-serif'
titulo.style.fontSize = '480%'
titulo.style.border = '10px solid purple'
titulo.style.borderRadius = '16px'
titulo.style.backgroundImage = 'url(image1.jpg)'
titulo.style.padding = "100px"
titulo.style.boxShadow = '8px 8px 8px black'
titulo.style.backgroundSize = 'cover'
titulo.style.backgroundAttachment = 'fixed'
})