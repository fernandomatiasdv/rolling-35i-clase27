let doc = document

const titulo = doc.querySelector("h1")
titulo.textContent = "Texto cambiado"

console.log(titulo.textContent)

const parrafo = doc.querySelector("p")
parrafo.textContent = parrafo.textContent.toUpperCase()

console.log(parrafo.textContent)

const parrafo2 = doc.querySelector("#parrafo2")

console.log(parrafo2.textContent)

const parrafo3 = doc.querySelector(".parrafo3")
/*
{ 
 .textContent => me mostraba el contenido del tag
}
*/
console.log(parrafo3.textContent)

const parrafos = doc.querySelectorAll("p")
/*
{
    [
        0: .textContent =>  me mostraba el contenido del tag
        1:
        n:
    ] 
 .textContent => me mostraba el contenido del tag
}
*/
console.log(parrafos[3].textContent)

const items = doc.querySelectorAll("li")
console.log(items) // []


const span = doc.querySelector("span")
console.log(span) // null


const parrafoById = doc.getElementById("parrafo2")
console.log(parrafoById.textContent)

const parrafoByClass = doc.getElementsByClassName("parrafo3")
console.log(parrafoByClass[1].textContent)

const parrafosByTagnames = doc.getElementsByTagName("p")
console.log(parrafosByTagnames[1].textContent)




titulo.classList.add("verde")
titulo.classList.toggle("bg-rojo")
titulo.classList.toggle("bg-rojo")  

//titulo.classList.add("verde", "bg-rojo")
//titulo.classList.remove("bg-rojo")




titulo.innerHTML = "<i>Segundo cambio </i>"

titulo.innerHTML += " <strong> Un <sub>cambio </sub>mas </strong>"

const listaOrdenada = doc.querySelector("ol")
/*
const item = doc.createElement("li")
item.textContent="Sandia"
listaOrdenada.appendChild(item)
const item2 = doc.createElement("li")
item2.textContent="Banana"
listaOrdenada.appendChild(item2)
*/

const frutas = ["Naranja", "Frambuesa"]
let item
for(let i=0 ; i< frutas.length; i++){
    item = doc.createElement("li")
    item.textContent = frutas[i]
    listaOrdenada.appendChild(item)
}


const oculto = doc.querySelector(".oculto")
//oculto[0].classList.toggle("oculto")


const boton = doc.querySelector("button")
boton.addEventListener("click",  ()=>{
    oculto.classList.toggle("oculto")
})


let contador = 0
const sumar = doc.getElementById("sumar")
const resultado = doc.getElementById("resultado")

resultado.textContent = 0

sumar.addEventListener("click", () => {
    contador++
    resultado.textContent = contador
})

