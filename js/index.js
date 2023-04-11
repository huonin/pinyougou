// alert("Ahonen的个人网站正在搭建中。嘿嘿")
addEventListener("load", function () {
    // 1.动态显示左右箭头
    const btnLift = document.querySelector('.arrow_l');
    const btnRight = document.querySelector('.arrow_r');
    const focus = document.querySelector('.focus');

    focus.addEventListener('mouseenter', function () {
        btnLift.style.display = 'block';
        btnRight.style.display = 'block';
    })
    focus.addEventListener('mouseleave', function () {
        btnLift.style.display = 'none';
        btnRight.style.display = 'none';
    })
    // 2.动态生成小圆圈，有几个图片就生成几个小圆圈。
    const ul = focus.querySelector('.ul1');
    const ul2 = focus.querySelector('.ul2');
    for (let index = 0; index < ul.children.length; index++) {
        // 创建一个小li
        const li = this.document.createElement('li');
        // 将小li添加的ul2后面
        ul2.appendChild(li);
        // 小圆圈的排他思想
        li.addEventListener('click', function () {
            for (let index = 0; index < ul2.children.length; index++) {
                ul2.children[index].className = '';
            }
            this.className = 'red';
        })
    }
    ul2.children[0].className = 'red';
    // 轮播图片
    const li1 = document.querySelectorAll('.ul1 li');
    const li2 = document.querySelectorAll('.ul2 li');
    //前进
    function btn() {
        var bigLeft = ul.offsetLeft - 721;
        console.log(ul.offsetLeft);
        if (bigLeft >= (-721) * (li1.length - 1)) {
            animate(ul, bigLeft);
        } else if (bigLeft < (-721) * (li1.length - 1)) {
            animate(ul, 0);
        }
        //圆点移动
        for (let i = 0; i < li2.length; i++) {
            let y = i + 1;
            if (bigLeft == (-721) * y) {
                li2[i].className = '';
                li2[y].className = 'red';
            } else if (bigLeft < (-721) * (li1.length - 1)) {
                li2[0].className = 'red';
            }
        }
    }
    btnRight.addEventListener('click',btn);

// 轮播效果
    setInterval(() => {
        btn();
        console.log(1);
    }, 2500);
    //后退
    btnLift.addEventListener('click', function () {
        var smallLeft = ul.offsetLeft + 721;
        if (smallLeft <= 0) {
            animate(ul, smallLeft)
        } else if (ul.offsetLeft == 0) {
            animate(ul, (-721) * (li1.length - 1))
        }
        //圆点移动
        for (let i = li2.length; i > 0; i--) {
            let y = i - 1;
            li2[y].className = '';
            if (smallLeft == (-721) * y) {
                li2[y].className = 'red';
            } else if (ul.offsetLeft == 0) {
                li2[li2.length - 1].className = 'red';
            }

        }
    })



})



