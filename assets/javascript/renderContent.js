export default (data, hash, search) => {
    const content = document.querySelector("#content")
    const newHash = hash.replace(/\?\w*/g, "")
    let id
    switch (newHash) {
        case "#bong-da":
            id = 0
            break
        case "#dua-xe":
            id = 1
            break
        case "#golf":
            id = 2
            break
        case "#cau-long":
            id = 3
            break
        default:
            id = 4
    }
    const renderCate = () => {
        const jsx = data[id].post.map((a, i) => `
        <div class="cate__item py2">
                    <a href="${newHash}?${+i}">
                        <h3 class="cate__title">
                            ${a.title}
                        </h3>
                    </a>
                    <p class="cate__subtitle">
                        ${a.subTitle}
                    </p>
                </div>
        `).join("")
        content.innerHTML = `<div class="py3">
        <div class="cate__list px2">
            ${jsx}
        </div>
        </div>`
    }
    const renderDetail = () => {
        const idDetail = search.replace(/\?/, "")
        const currData = data[id].post[idDetail]
        const jsx = `
        <div class="detail__section mt16">
        <div class="detail__banner">
            <img src="${currData.image}" alt="${currData.image}">
        </div>
        <div class="detail__main py3 px2">
            <p class="detail__tag my1">
                News
            </p>
            <h2 class="detail__title my1">
                ${currData.title}
            </h2>
            <p class="detail__subtitle my1">
               ${currData.subTitle}
            </p>
            <p class="detail__content">
                ${currData.content}
            </p>
            <a href="${newHash}" class="detail__back jcc aic">
                <img src="https://img.icons8.com/plumpy/24/000000/back--v1.png"/>
                Quay lại
            </a>
        </div>
    </div>
    `
        content.innerHTML = jsx
    }
    switch (search) {
        case "":
            renderCate()
            break
        default:
            renderDetail()
    }
}