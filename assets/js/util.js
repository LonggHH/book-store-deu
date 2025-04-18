const DEF_URL = {
    index: "./assets",
    page: "../assets",
};

function formatMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toggle(stringQuery) {
    document.querySelector(stringQuery).classList.toggle('hidden')
}

function throttle(func, delay) {
    let lastCall = 0; // Biến để lưu thời gian của lần gọi gần nhất
    return function (...args) {
        const now = Date.now(); // Lấy thời gian hiện tại
        if (now - lastCall >= delay) {
            lastCall = now; // Cập nhật thời gian gọi gần nhất
            return func.apply(this, args); // Gọi hàm với các đối số
        }
    };
}

// Hàm xử lý cho nút next
function handleNext(frameId) {
    let items = document.querySelectorAll(`#${frameId} .item`);
    document.querySelector('.slide').appendChild(items[0]);
}

// Hàm xử lý cho nút prev
function handlePrev(frameId) {
    let items = document.querySelectorAll(`#${frameId} .item`);
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

function renderIconAccLogin() {
    const isLogin = JSON.parse(localStorage.getItem('BS-login') || false)

    if (isLogin) {
        document.querySelector('#icon-acc-login').src = '../assets/images/icon/header/my-home-account.svg'

        document.querySelector('#toggle-menu-overview-no-login').classList.add('hidden')
        document.querySelector('#toggle-menu-overview-login').classList.remove('hidden')

        document.querySelector('#btn-logout').classList.remove('hidden')
        document.querySelector('#icon-acc-login').addEventListener('click', () => gotoPage('./MY-main.html'))
    } else {
        document.querySelector('#icon-acc-login').src = '../assets/images/icon/header/my-home-no-login.svg'

        document.querySelector('#toggle-menu-overview-no-login').classList.remove('hidden')
        document.querySelector('#toggle-menu-overview-login').classList.add('hidden')

        document.querySelector('#btn-logout').classList.add('hidden')
        document.querySelector('#icon-acc-login').addEventListener('click', () => gotoPage('./AU-login-login.html'))
    }
}
renderIconAccLogin()

function gotoPage(href) {
    window.location.href = href
}

function logout() {
    localStorage.setItem('BS-login', JSON.stringify(false))
    window.location.reload()
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleChangeTextSearch() {
    const frameHeaderSearch = document.querySelector('#frame-header-search')
    const headerSearchResult = document.querySelector('#header-search-result')
    const textSearch = document.querySelector('#header-input-search').value

    if (textSearch.trim().length !== 0) {
        frameHeaderSearch.style.background = "white"
        frameHeaderSearch.classList.add('border')
        frameHeaderSearch.classList.remove('rounded-full')
        frameHeaderSearch.classList.add('border-tl-tr-24-px')

        headerSearchResult.classList.remove('hidden')
    } else {
        frameHeaderSearch.style.background = 'linear-gradient(to right, #0C98E7, #B956EA, #F03964)'
        frameHeaderSearch.classList.remove('border')
        frameHeaderSearch.classList.add('rounded-full')
        frameHeaderSearch.classList.remove('border-tl-tr-24-px')

        headerSearchResult.classList.add('hidden')
    }
}

function closeHeaderSearchResult() {
    toggle('#header-search-result')
    document.querySelector('#header-input-search').value = ''
    handleChangeTextSearch()
}

document.querySelectorAll('.toggle-menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Ẩn tất cả menu con
        document.querySelectorAll('.toggle-menu-btn + ul').forEach(menu => {
            menu.classList.add('hidden');
            menu.classList.remove('visible');
        });

        // Hiện menu con của button được click
        const menu = button.nextElementSibling; // Lấy menu con ngay sau button
        if (menu) {
            menu.classList.toggle('hidden');
            menu.classList.toggle('visible');
        }
    });
});

document.querySelector('header img[src="../assets/images/icon/header/home-cart.svg"]').addEventListener('click', () => {
    gotoPage('./CO-sh-shopping-cart-empty.html')
})

function gotoOrder () {
    const isLogin = JSON.parse(localStorage.getItem('BS-login') || false)

    if (isLogin) {
        localStorage.setItem('BS-check-order-no-member', JSON.stringify(false))
        gotoPage('./CO-sh-shopping-cart.html')
    } else {
        localStorage.setItem('BS-check-order-no-member', JSON.stringify(true))
        gotoPage('./AU-login-login.html')
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Tìm thẻ <a> có href="./CO-sh-shopping-cart.html"
    let link = document.querySelector('a[href="./CO-sh-shopping-cart.html"]');

    if (link) {
      // Thay đổi href thành onclick
      link.removeAttribute("href");
      link.setAttribute("onclick", "gotoOrder()");
    }
})

function copyToClipboard(content) {
    navigator.clipboard.writeText(content).then(() => {
        alert("Copy: " + content);
    }).catch(err => {
        console.error("Lỗi sao chép: ", err);
    });
}

// page 8
const imgLogo = document.querySelector('img.header-logo')
function updateImageLogoSource() {
    let path = '.'
    if (!window.location.pathname.endsWith("index.html")) {
        path = '..'
    }

    if (window.innerWidth <= 640) {
        // Màn hình nhỏ (mobile, tablet)
        imgLogo.src = `${path}/assets/images/logo/mini_logo_top.png`;
    } else {
        // Màn hình lớn (desktop)
        imgLogo.src = `${path}/assets/images/logo/Logo.svg`;
    }
}
updateImageLogoSource();

// Lắng nghe sự kiện thay đổi kích thước màn hình
window.addEventListener('resize', updateImageLogoSource);