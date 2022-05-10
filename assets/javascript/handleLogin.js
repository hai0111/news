import handleUser from "./handleUser.js"

export default () => {
    const btnShow = document.querySelector(".btn__login")
    const modal = document.querySelector(".modal")
    const registerBtn = document.querySelector(".register__btn")
    const login = document.querySelector("#login")
    btnShow.addEventListener("click", () => { modal.classList.toggle("active") })
    registerBtn.addEventListener("click", () => { login.classList.add("hidden") })
    modal.addEventListener("mousedown", e => {
        if (e.target.closest(".modal__inner")) {
            e.stopPropagation()
        } else if (e.button === 0) {
            modal.classList.toggle("active")
            login.classList.remove("hidden")
        }
    })
    const checkInput = (input, text) => {
        let txtMess = text === "" ? "*Không được để trống"
            : /\s+/g.test(text)
                ? "*Không được chứa khoảng cách"
                : !/[\w]{6,}/.test(text)
                    ? "*Phải trên 6 ký tự"
                    : ""
        const mess = input.parentElement.querySelector(".input__mess")
        mess.innerHTML = txtMess
        return txtMess === ""
    }
    const checkLogin = async dataInput => {
        const users = await fetch("http://localhost:3001/users")
            .then(json => json.json())
            .then(data => data)
        const dataUser = users.find(a =>
            a.user === dataInput.user
            && a.pass === dataInput.pass)
        const messLogin = document.querySelector(".check__login")
        if (dataUser) {
            messLogin.classList.remove("active")
            localStorage.setItem("user", JSON.stringify(dataUser))
            modal.classList.toggle("active")
            handleUser()
        } else {
            messLogin.classList.add("active")
        }
    }
    const handleLogin = (inputs) => {
        const dataInput = {}
        let check = true
        inputs.forEach(input => {
            if (!checkInput(input, input.value)) {
                check = false
            }
            dataInput[input.id] = input.value
        })
        return {
            check,
            inputs,
            dataInput
        }
    }
    const loginInputs = document.querySelectorAll(".login__input--login")
    const btnLogin = document.querySelector(".login__submit.login")
    btnLogin.addEventListener("click", e => {
        e.preventDefault()
        const { check, inputs, dataInput } = handleLogin(loginInputs)
        if (check) {
            checkLogin(dataInput)
            inputs.forEach(input => input.value = "")
        }
    })
    const btnRegister = document.querySelector(".login__submit.register")
    const loginRegister = document.querySelectorAll(".login__input--register")
    const handlePostUser = async dataInput => {
        await fetch("http://localhost:3001/users"
            , {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataInput)
            })
        modal.classList.toggle("active")
        login.classList.remove("hidden")
    }
    btnRegister.addEventListener("click", e => {
        e.preventDefault()
        const { check, dataInput } = handleLogin(loginRegister)
        if (check) {
            handlePostUser(dataInput)
        }
    })
}