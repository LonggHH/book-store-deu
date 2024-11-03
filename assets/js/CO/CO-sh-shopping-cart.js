function renderListBook() {
    let stringHTMl = "";
    Array(2).fill(null).forEach(() => {
        stringHTMl +=
            `
            <div class="relative flex flex-col sm:flex-row items-stretch gap-3 sm:gap-5 w-full sm:w-auto">
                <div>
                    <input id="book-1" type="checkbox" checked hidden>
                    <label for="book-1" class="flex items-center gap-2 cursor-pointer">
                        <img class="w-6 h-6" src="../assets/images/icon/common/check-black.svg" alt="icon">
                        <h4 class="block sm:hidden text-base font-semibold">책 제목</h4>
                    </label>
                </div>

                <div class="flex-1 flex items-stretch gap-5">
                    <!-- Sách Hình ảnh -->
                    <div class="relative frame-size-70108-160150">
                        <div class="relative image-size-70108-102150 scope-imgage shadow-md border">
                            <img class="w-full h-full" src="../assets/images/image/books/book-error-small-x.png"
                                alt="img">
                            <div class="absolute bottom-1 right-1 z-20 w-9 h-9 rounded-full hidden sm:flex items-center justify-center cursor-pointer"
                                style="background-color: rgba(0, 0, 0, 0.16);">
                                <i class="fa-solid fa-heart text-white"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Thông tin Sách -->
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div class="flex flex-col gap-3">
                                <!-- Tiêu đề sách -->
                                <h4 class="hidden sm:block text-base font-semibold">책 제목</h4>
                                <!-- Giá và Giảm giá -->
                                <div class="flex items-baseline">
                                    <span class="inline-block text-sm font-semibold text-red-500">10%</span>
                                    <span class="ml-1">
                                        <span class="inline-block text-sm font-semibold">12,000</span><span
                                            class="inline-block text-sm font-normal">원</span>
                                    </span>
                                    <span
                                        class="inline-block text-sm line-through font-normal text-gray-400 ml-3">12,000원</span>
                                </div>
                            </div>

                            <!-- Bộ điều khiển số lượng và Giá tổng cộng -->
                            <div class="flex flex-col-reverse justify-start gap-3 sm:gap-0 sm:flex-row sm:items-center sm:space-x-4">
                                <!-- Điều khiển số lượng -->
                                <div class="flex items-center space-x-4 p-1 border rounded" style="width: fit-content;">
                                    <button
                                        class="xy-30-px flex items-center justify-center bg-gray-100 rounded">-</button>
                                    <input type="number" min="1" class="w-12 text-center outline-none" value="000" />
                                    <button
                                        class="xy-30-px flex items-center justify-center bg-gray-100 rounded">+</button>
                                </div>

                                <!-- Giá tổng cộng -->
                                <div class="flex items-center gap-0.5">
                                    <span class="text-1624-2230 font-semibold">12,000</span>
                                    <span class="text-sm font-normal">원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nút đóng -->
                <button class="absolute top-0 right-0 cursor-pointer">
                    <img class="w-6 h-6" src="../assets/images/icon/common/x.svg" alt="icon">
                </button>
            </div>
        `
    })
    document.querySelector('#list-book').innerHTML = stringHTMl;
}
renderListBook()

function toggleAccordion(thisEl,acId) {
    const radioAc = document.getElementById(`radio-${acId}`)
    const iconAc = document.getElementById(`icon-${acId}`)
    const ac = document.getElementById(acId)

    radioAc.checked = !radioAc.checked
    if (radioAc.checked) {
        iconAc.classList.add('fa-chevron-up')
        iconAc.classList.remove('fa-chevron-down')

        ac.classList.remove('hidden')
        thisEl.classList.add('border-b')
    } else {
        iconAc.classList.add('fa-chevron-down')
        iconAc.classList.remove('fa-chevron-up')

        ac.classList.add('hidden')
        thisEl.classList.remove('border-b')
    }    
}

function togglePopup() {
    document.getElementById('popup').classList.toggle('hidden');
}