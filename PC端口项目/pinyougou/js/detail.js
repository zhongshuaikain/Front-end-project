
//tab栏切换
window.addEventListener('load', function () {
    var tab_li = document.querySelector('.detail_tab_list').querySelectorAll('li');
    var li_div = document.querySelector('.aside_tab_con').querySelectorAll("div");
    for (var i = 0; i < tab_li.length; i++) {
        tab_li[i].setAttribute('index', i);
        tab_li[i].onclick = function () {
            for (var i = 0; i < tab_li.length; i++) {
                tab_li[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            console.log(index);
            for (var i = 0; i < li_div.length; i++) {
                li_div[i].style.display = 'none';
            }
            li_div[index].style.display = 'block';
        }
    }

    //放大镜效果
    var smallImg = document.querySelector('.small_img');
    var bigImg = document.querySelector('.bigImg');
    var bg = document.querySelector('.bg');
    var big = document.querySelector('.big');
    smallImg.addEventListener('mouseover', function () {
        big.style.display = 'block';
        bg.style.display = 'block';
    });
    smallImg.addEventListener('mouseout', function () {
        big.style.display = 'none';
        bg.style.display = 'none';
    });

    smallImg.addEventListener('mousemove', function (e) {
        var x = e.pageX - smallImg.offsetLeft;
        var y = e.pageY - smallImg.offsetTop;
        x = x - bg.offsetWidth / 2;
        y = y - bg.offsetHeight / 2;
        var xMax = smallImg.offsetWidth - bg.offsetWidth;
        var yMax = smallImg.offsetHeight - bg.offsetHeight;
        if (x <= 0) {
            x = 0;
        } else if (x >= (xMax)) {
            x = xMax;
        }
        if (y <= 0) {
            y = 0;
        } else if (y >= (yMax)) {
            y = yMax;
        }
        bg.style.left = x + 'px';
        bg.style.top = y + 'px';

        var bigImg = document.querySelector('.bigImg');
        var imgX_Max = bigImg.offsetWidth - big.offsetWidth;
        var imgY_Max = bigImg.offsetHeight - big.offsetHeight;
        var imgX = x * imgX_Max / xMax;
        var imgY = y * imgY_Max / yMax;
        bigImg.style.left = -imgX + 'px';
        bigImg.style.top = -imgY + 'px';

    });


});




