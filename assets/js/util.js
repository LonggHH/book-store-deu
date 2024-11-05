const DEF_URL = {
    index: "./assets",
    page: "../assets",
};

function formatMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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