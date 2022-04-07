// const { default: axios } = require("axios")

console.log('connected')

const sayHiButton = document.querySelector('#say-hi-button')

function sayHi(){
    console.log('sayHi function triggered')
    axios.get('/say-hi').then((res) => {
        console.log(res)
        let getText = document.createElement('p')
        getText.textContent = res.data
        document.body.appendChild(getText)
    })

}

sayHiButton.addEventListener("click", sayHi)

