
    //  đặt cho buyBtns 1 cái biến cha thì phải thêm s vì là số nhiều
    const buyBtns = document.querySelectorAll('.js-buy-ticket')

    // đặt biến modal để gán vào hàm xong đưa vào cái hành động click chuột để mở buytciket lên
    const modal = document.querySelector('.js-modal')

    // đặt biến modalcontainer để dùng tính chất nổi bọt tại đó
    const modalcontainer = document.querySelector('.js-modal-container')

    // đặt biến modalclose  để gán vào hàm ong đưua vào cái hành đồn click chuột để đóng buyticket
    const modalclose = document.querySelector('.js-modal-close')

    // hàm hiển thị btn-buyticket trên màn hình
    function showBuyTickets() {
        modal.classList.add('open')
    }

    // hàm ẩn btn-buyticket trên màn hình
    function closeBuyTickets() {
        modal.classList.remove('open')
    }

    // dùng vòng lặp for để lặp qua từng thẻ botton(có 3 thẻ),là dạng danh sách nên phải dùng vòng for
    // và tạo 1 biến con(vì lặp từng cái 1) cho từng btn-buyticket của cái biến cha kia
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showBuyTickets)
    }

    // không cần dùng vòng for vì chỉ có 1 nút close-buyticket
    modalclose.addEventListener('click', closeBuyTickets)

    // click vào vùng modal sẽ ẩn cái modalcontainer đi nhưng vẫn bị tính chất nổi bọt nên khi click vào modalcontainer vần bị ẩn đi
    modal.addEventListener('click', closeBuyTickets)
 
    // dùng stopPropagation để cho tính chất nổi bọt dừng ngay tại modalcontainer để khi click vào nó sẽ không bị ẩn đi
    modalcontainer.addEventListener('click', function (event) {
        event.stopPropagation();
        // stopPropagation(  ) dừng tính chất sủi bọt   
    })

    // <!-- alert("SHOW") (để trong hàm) dùng để thông báo trên màn hình web -->





    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu');
    var heightHeader = header.clientHeight;
    // console.log(header.clientHeight); in ra xem div header bên console cao bao nhiêu

    // Đóng/mở mobile menu
    mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === heightHeader;
         if (isClosed) {
            header.style.height = ('auto');
         } else {
            header.style.height = null;
         }
    }

    // Khai báo biến header/ mobile/ headerHeight
    // Đóng/ Mở mobile menu
    // Khi click vào mobileMenu thì sẽ chạy hàm như sau: 
    // Khai báo biến isclosed = header.clientHeight bằng với headerHeight (biến True False);
    // Nếu biến isClosed đúng thì header.style.height ='auto' --> sổ ra 
    // Nếu biến isClosed sai thì header.style.height = null --> đóng vào 


    // Tự động đóng khi chọn menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    // console.log(menuItems)  in thử ra page console có chưa
    for (var i = 0; i < menuItems.length ; i++ ) {
        var menuItem = menuItems[i];
        menuItem.onclick = function (event) {           
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (isParentMenu) {
                event.preventDefault();
            }else {
               header.style.height = null;
            }
          
        }
    }
    //Khai báo biến menuItems là các thẻ nav li a có chứa dấu #
    // Chạy vòng lặp for (khai báo biến i=0; nếu i nhỏ hơn số lượng MenuItems; tăng i lên 1) Nếu i thỏa mãn chạy: 
    // Khai báo biến tạm menuItem = truyền giá trị của menuItems vị trí i vào;
    // Khi click vào menuItem chạy hàm 
    //header.style.height =null; --> giấu thanh đi 