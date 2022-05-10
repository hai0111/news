import toSlug from "./toSlug.js"

export default data => {
    const input = document.querySelector("input.search__input")
    const boxSearch = document.querySelector(".search__list")
    const dataSearch = data
        .reduce((a, b) =>
            [...a,
            ...b.post.map((c, i) =>
                ({ cate: b.name, title: c.title, id: i }))]
            , [])
        .map(a => ({
            title: a.title,
            slug: toSlug(a.title),
            link: `#${toSlug(a.cate)}?${a.id}`
        }))
    const jsx = dataSearch.map(a => `<a href="${a.link}" class="search__link" data-search="${a.slug}">${a.title}</a>`).join("")
    boxSearch.innerHTML = jsx
    const items = document.querySelectorAll(".search__link")
    const handleSearch = () => {
        const key = toSlug(input.value)
        items.forEach(item => {
            const check = item.dataset.search.includes(key)
            if (key !== "") {
                item.classList.toggle("active", check)
            } else {
                item.classList.remove("active")
            }
        })
    }

    input.addEventListener("input", handleSearch)
    items.forEach(item => {
        item.addEventListener("click", () => {
            input.value = ""
            handleSearch()
        })
    })
}