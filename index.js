const counter = document.querySelector('#counter')
const btnincrease= document.querySelector('.btnincrease')
const btnreset = document.querySelector('.btnreset')

let count=0
btnincrease .addEventListener('click',() =>{
    count++
counter.textContent=count
})
btnreset.addEventListener('click',() =>{
    count =0
    counter.textContent=count
})













    