import handleUser from "./handleUser.js"
import toSlug from "./toSlug.js"

export default data => {
    const nav = document.querySelector(".header__nav")
    const jsx = data.map(a => `
    <li class="header__nav__item mx1">
        <a href="#${toSlug(a.name)}" class="header__nav__link" data-page="${toSlug(a.name)}">
            ${a.name !== "Các môn thể thao khác" ? a.name : "Khác"}
        </a>
    </li>
    `)
    nav.innerHTML += jsx
    handleUser()
    const userIcon = document.querySelector(".user__wrap i")
    const userControl = document.querySelector(".user__controls")
    const logout = document.querySelector(".user__logout")
    const modal = document.querySelector(".modal")
    userIcon.addEventListener("click", () => {
        userControl.classList.toggle("active")
    })
    logout.addEventListener("click", () => {
        userControl.classList.toggle("active")
        modal.classList.toggle("active")
        localStorage.removeItem("user")
        handleUser()
    })
}