import toSlug from "./toSlug.js";
export default data => {
    const content = document.querySelector("#content")
    const intro = `
        <div class="py2">
            <h2 class="home__section__title py2">
                Giới thiệu chung
            </h2>
            <p class="home__section__content mxa">
                Xin chào, chúng em là nhóm sinh viên đến từ lớp Ứng dụng phần mềm 1 trường Cao đẳng nghề Bách Khoa
                Hà Nội.
                Chào mừng đến với trang web tin tức về thể thao của chúng em. Đây là sản phẩm đầu tay của
                chúng
                em. Rất mong nhận được những đóng góp, phản hồi để chúng em có thể hoàn thiện hơn trong học tập và
                kinh
                nghiệm làm việc. Xin cảm ơn !
            </p>
        </div>
        <div class="py2">
            <h2 class="home__section__title py2">
                Thành viên nhóm
            </h2>
            <div class="d-f jcsb">
                <div class="col d-f column aic jcc">
                    <h3 class="home__member-title">
                        Trần Anh Tuấn
                    </h3>
                    <img src="./assets/images/members/tuan.jpg" alt="Tuan" class="home__member-img">
                </div>
                <div class="col d-f column aic jcc">
                    <h3 class="home__member-title">
                        Đỗ Việt Hùng
                    </h3>
                    <img src="./assets/images/members/hung.jpg" alt="Hung" class="home__member-img">
                </div>
                <div class="col d-f column aic jcc">
                    <h3 class="home__member-title">
                        Phạm Viết Long
                    </h3>
                    <img src="./assets/images/members/moc.jpg" alt="Long" class="home__member-img">
                </div>
            </div>
        </div>
        <div class="py2">
            <h2 class="home__section__title py2">
                Liên hệ
            </h2>
            <div class="contact">
                <div class="d-f wrap m-2r jcc aic">
                    <a class="home__cate-inner d-f aic px2 space2r radius10 fz10r"
                    style="height: 150px;"
                    href="https://www.messenger.com/t/100032971607900">
                        <i class='bx bxl-messenger mess-icon'></i>
                    </a>
                    <a class="home__cate-inner d-f aic px2 space2r radius10 fz10r"
                    style="height: 150px;"
                    href="tel:0326136857">
                    <i class='bx bxs-phone-call call-icon'></i>
                    </a>
                    <input type="email" class="col8 input__contact radius10 fz15 p-input mt16" 
                    placeholder="Email của bạn..."/>
                    <textarea 
                    class="col8 input__contact radius10 fz15 p-input mt8" 
                    style="height: 200px;"
                    placeholder="Nhập thông điệp..."></textarea>
                    <div class="col8 d-f jcc">
                        <button class="bg-main pointer fz16 radius10 eee px3 mt8 ml-auto py1">
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
    const renderCate = data.map((a, i, arr) => `<div class="home__cate ${i !== arr.length - 1 ? 'col6' : 'col12'} p2r">
            <div class="home__cate-inner">
                <img src="${a.banner}" alt="${a.banner}" class="home__cate-img"/>
                <a href="#${toSlug(a.name)}" class="home__cate-modal d-f jcc aic">
                    <h2 class="home__cate-title">
                        ${a.name}
                    </h2>
                </a>
            </div>
        </div>`).join("")
    content.innerHTML = `
        <div>
        <h2 class="home__section__title py2">
            Danh mục
        </h2>
        <div class="d-f jcc aic wrap m-2r">
            ${renderCate}
        </div>
        </div>
        ${intro}
        `
}