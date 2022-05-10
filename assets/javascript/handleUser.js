export default name => {
    const btnLogin = document.querySelector(".btn__login")
    const userInfo = document.querySelector(".user__wrap")
    const userName = document.querySelector(".user__name")
    const user = JSON.parse(localStorage.getItem("user"))
    const handleLine = () => {
        const hash = window.location.hash === "" ? "#home" : window.location.hash
        const item = document.querySelector(`.header__nav__link[data-page="${hash.replace(/#|\?\w*/g, '')}"]`)
        const line = document.querySelector(".header__nav__line")
        const left = item.offsetLeft
        const width = item.offsetWidth
        line.style.left = left + "px"
        line.style.width = width + "px"
    }
    if (user) {
        btnLogin.classList.add("hidden")
        userName.textContent = user.user
        userInfo.classList.add("active")
        handleLine()
    } else {
        userInfo.classList.remove("active")
        btnLogin.classList.remove("hidden")
        handleLine()
    }
}   