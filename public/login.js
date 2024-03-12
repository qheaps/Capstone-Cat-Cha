const loginBtn = document.getElementById(`login-btn`)
const registerBtn = document.getElementById(`register-btn`)
const userInput = document.getElementById(`user-input`)
const passInput = document.getElementById(`pass-input`)
const loginForm = document.getElementById(`login-form`)


function registerUser(e) {
    e.preventDefault()

    const newUser = {
        username: userInput.value,
        password: passInput.value
    }

    axios.post("http://localhost:4000/api/register", newUser)
        .then(res => {
            console.log(res.data)
            alert(`Account Registered`)
        })
        .catch(theseHands => console.log(theseHands))
}

function loginUser(e) {
    e.preventDefault()

    const userInfo = {
        username: userInput.value,
        password: passInput.value
    }

    axios.post("http://localhost:4000/api/login", userInfo)
        .then(res => {
            // console.log(res.data)
            localStorage.setItem(`curUser`, res.data.user_id)
            alert(`Welcome back, ${userInfo.username}.`)
            window.location.replace(`./main.html`)
        })
        .catch(theseHands => console.log(theseHands))
    }
    
    registerBtn.addEventListener(`click`, registerUser)
    loginBtn.addEventListener(`click`, loginUser)
    