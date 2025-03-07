// import util.js after
// DEF_URL
// 

let dataCommon = null;

function fetchData(url) {    
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            dataCommon = result;            
        })
        .then(() => {        
            renderHeaderCategory(dataCommon.home.headerCategory);           
        })
        .catch((error) => console.error("Error fetching data:", error));
}
fetchData(DEF_URL.page + '/data/data.json');

function renderHeaderCategory(listData) {
    let stringHtml = '';
    for (const item of listData) {
            if (item.active) {
                stringHtml +=
                `<li class="py-3 sm:py-4 px-3.5 relative underline-active"> <a class="inline-block h-6 text-base font-semibold" style="white-space: nowrap;color: rgba(46, 47, 51, 0.88);" href="${item.link}">${item.name}</a> </li>`;
                continue;
            }
            if (item.highlight) {
                stringHtml +=
                `<li class="py-3 sm:py-4 px-3.5 text-highlight text-highlight-dot"> <a class="inline-block h-6 text-base font-semibold" style="white-space: nowrap;color: rgba(46, 47, 51, 0.88);" href="./SP-1.html">${item.name}</a> </li>`;
                continue;
            }
            stringHtml +=
            `<li class="py-4 px-3.5"> <a class="inline-block h-6 text-base font-medium" style="white-space: nowrap;color: rgba(46, 47, 51, 0.88);" href="${item.link}">${item.name}</a> </li>`;
    }
    if (!document.querySelector('#header-list-category')) return

    document.querySelector('#header-list-category').innerHTML = stringHtml;
}

const btnToggleMenuL = document.querySelector('#btn-toggle-menu-l');
const btnToggleMenuM = document.querySelector('#btn-toggle-menu-m');
const toggleMenu = document.querySelector('#toggle-menu');
const contentToggleMenu = document.querySelector('#content-toggle-menu');
let isOpen = false;

btnToggleMenuL.addEventListener('click', (event) => {
    event.stopPropagation()
    btnToggleMenuL.src = isOpen ? "../assets/images/icon/header/home-hbg-menu.svg" : "../assets/images/icon/header/menu-x.svg"
    isOpen = !isOpen;
    toggleMenu.classList.toggle('hidden')
})
btnToggleMenuM.addEventListener('click', () => {
    event.stopPropagation()          
    isOpen = !isOpen;
    toggleMenu.classList.toggle('hidden')
})

document.addEventListener('click', (event) => {
    if (!contentToggleMenu.contains(event.target) && !toggleMenu.classList.contains('hidden')) {
        btnToggleMenuL.src = isOpen ? "../assets/images/icon/header/home-hbg-menu.svg" : "../assets/images/icon/header/menu-x.svg"
        isOpen = !isOpen;
        toggleMenu.classList.add('hidden');
    }
});