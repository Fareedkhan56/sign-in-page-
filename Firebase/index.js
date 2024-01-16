// firebase.initializeApp(firebaseConfig);

let email = document.getElementById('email')
let password = document.getElementById('password')


// Signup Page
async function createAccount(e) {

    
    event.preventDefault()
    await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => {
            Toastify({
                text: "Email Has Been Verified",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "left", 
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();

            setTimeout(() => {
                window.location.href = 'CreateAcc.html'
            }, 2000)
        })
        .catch((e) => {
            Toastify({
                text: e,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        })
}

// Create Account
let img = document.getElementById('image')
let imageUrl = '';
let name = document.getElementById('name')

img.addEventListener('change', (e) => {
    create(e)
    console.log(e.target.files[0].name)
})

function create(e) {
    
    let imageRef = firebase.storage().ref();
    let imagePath = imageRef.child(`users/${e.target.files[0].name}`)
    imagePath.put(e.target.files[0]).then((uploaded)=>{
        Toastify({
            text: 'image uploaded',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    })
    
    // imagePath.snapshot.ref.getDownloadURL().then((data) => {
    //     imageUrl=data
    //     })
      console.log(e.file)  
}