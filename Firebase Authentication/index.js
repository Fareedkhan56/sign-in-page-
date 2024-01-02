let email = document.getElementById('email')
let password = document.getElementById('password')

console.log(firebase.auth)

async function createAccount(e){
    console.log(email.value,password.value)
    event.preventDefault()
    await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((data)=> {
        console.log(data)
    })
    .catch((e)=> {
        console.log(e)
    })
}