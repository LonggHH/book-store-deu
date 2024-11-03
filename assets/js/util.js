const DEF_URL = {
    index: "./assets",
    page: "../assets",
};

function formatMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
