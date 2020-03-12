
let api = new Api()

let dados = ""

let whatsappLink = "https://api.whatsapp.com/send?phone=5585992569169&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21"

function callPage(page){
    for(let i = 1; i <= 5; i++) {
        if( i === page ){
            document.getElementById(`button${i}`).classList.add("active")
        }else{
            document.getElementById(`button${i}`).classList.remove("active")
        }
    }
}

function prepareToSave() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value

    let isValid = api.Test(email)

    if(isValid){

        const form = document.querySelector("#form")

        let url = `http://localhost:3000/cad?name=${name}&email=${email}&telefone=${telefone}`

        form.action = url

        fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({ name, email, telefone })
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })

        alert("email cadastrado")

        let div = document.querySelector("#whatsapp")

        div.innerHTML = `<br><a href="${whatsappLink}">Para saber mais clique aqui e nos mande uma mensagem pelo whatsapp</a>`

    }else{
        alert("email invalido")
    }

}

function setData(data) {
    dados = data
    console.log(dados)
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'pt-br' }, 'google_translate_element');
}

setInterval(() => {
    for(let i = 1; i < 6; i++){
        if(document.getElementById(`button${i}`).classList == "active"){
            document.getElementById(`div${i}`).style.display = "block"
        }else{
            document.getElementById(`div${i}`).style.display = "none"
        }
    }
}, 50)

//alert(window.innerWidth)