window.addEventListener("load", function () {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    focus.addEventListener('mousemove', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })


//根据图片的数量 创建小圆圈的数量
    var foucs_ul_li = focus.querySelector('ul').querySelectorAll('li');
    var foucs_ol = focus.querySelector('ol');
    for (var i = 0; i < foucs_ul_li.length; i++) {
        var li = document.createElement('li');
        foucs_ol.appendChild(li);
    }

//点击哪个小圆圈 给哪个小圆圈上色 排他思想
    var foucs_ol_li = focus.querySelector('ol').querySelectorAll('li');
    for (var i = 0; i < foucs_ol_li.length; i++) {
        foucs_ol_li[i].addEventListener('click', function () {
            for (var i = 0; i < foucs_ol_li.length; i++) {
                foucs_ol_li[i].className = '';
            }
            this.className = 'current';
        })
    }
    foucs_ol_li[0].className = 'current';

//克隆一张图片 点击右侧按钮实现图片像右滑动
    var focus_ul = focus.querySelector('ul');
    var new_ul = foucs_ul_li[0].cloneNode(true);
    focus_ul.appendChild(new_ul);
    var num = 0;
    var cirle = 0;
    arrow_r.addEventListener('click', function () {
//点击右侧按钮小圆圈自动跟着变化
        cirle++;
        if (cirle == foucs_ol.children.length) {
            cirle = 0;
        }
        for (var i = 0; i < foucs_ol.children.length; i++) {
            foucs_ol.children[i].className = '';
        }
        foucs_ol.children[cirle].className = 'current';

// 点击右侧按钮实现图片像右滑动
        if (num == focus_ul.children.length - 1) {
            focus_ul.style.left = 0 + 'px';
            num = 0;
        }
        num++;
        animate(focus_ul, -focus_Width * num);
        // focus_ul.style.left = -focus_Width * num + 'px';
    })

//点击小圆圈实现图片向右滑动
    var focus_Width = focus.offsetWidth;
    for (var i = 0; i < foucs_ol_li.length; i++) {
        foucs_ol_li[i].setAttribute('data-index', i);
        foucs_ol_li[i].addEventListener('click', function (e) {
            //在这个函数体内 i已经变成了4 所以必须要用设置新索引的办法记录每个ol中li的索引位置
            var index = this.getAttribute('data-index');
            num = index;
            cirle = index;

            function animal(obj, target) {
                clearInterval(obj.timer);
                obj.timer = setInterval(function () {
                    var step = (target - obj.offsetLeft) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style.left = obj.offsetLeft + step + 'px';
                    if (obj.offsetLeft == target) {
                        clearInterval(obj.timer);
                    }
                }, 30)
            }

            animal(focus_ul, -focus_Width * index);
            // animate(focus_ul, -focus_Width * index);
            // focus_ul.style.left = -focus_Width * index + 'px';
        })
    }

//左侧按钮修改参数即可

    arrow_l.addEventListener('click', function () {
//点击右侧按钮小圆圈自动跟着变化
//         cirle--;
//         if (cirle == foucs_ol.children.length) {
//             cirle = 0;
//         }
//         for (var i = 0; i < foucs_ol.children.length; i++) {
//             foucs_ol.children[i].className = '';
//         }
//         foucs_ol.children[cirle].className = 'current';

// 点击右侧按钮实现图片像右滑动
        if (num == 0) {
            focus_ul.style.left = -(ul.children.length - 1) * focus_Width + 'px';
            num = ul.children.length - 1;
        }
        num--;
        animate(focus_ul, focus_Width * -num);
        // focus_ul.style.left = -focus_Width * num + 'px';
    })
})








