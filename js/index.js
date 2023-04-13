// alert("Ahonen的个人网站正在搭建中。嘿嘿")
addEventListener("load", function () {
    // 1.动态显示左右箭头
    const btnLift = document.querySelector('.arrow_l');
    const btnRight = document.querySelector('.arrow_r');
    const focus = document.querySelector('.focus');

    focus.addEventListener('mouseenter', function () {
        btnLift.style.display = 'block';
        btnRight.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        btnLift.style.display = 'none';
        btnRight.style.display = 'none';
        // 轮播效果
        timer = setInterval(() => {
            btn();
            console.log(1);
        }, 2500);
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
    // 克隆第一张图片
    var first = li1[0].cloneNode(true);
    console.log(first);
    ul.appendChild(first);

    // 点击小圆点更换图片
    for (let index = 0; index < li2.length; index++) {
        li2[index].addEventListener('click', function () {
            animate(ul, index * -721)
        })

    }
    //前进
    
    var focusWidth = focus.style.width = 721;
    console.log(focusWidth);
    var num = 1;
    function btn() {
        if (num == ul.children.length-2) {
            ul.style.left = '-721px';
            console.log(8);
            num = 1;
        }
        num++;
        const bigLeft = -num * focusWidth;
        animate(ul, bigLeft);
        // else if (bigLeft < (-721) * (li1.length )) {
        //     animate(ul, 0);
        //     num = 0;
        // }
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
    btnRight.addEventListener('click', btn);

    // 轮播效果
    timer = setInterval(() => {
        btn();
        console.log(1);
    }, 2500);
    //后退
    // 克隆第五张图片
    // const fifth = li1[3].cloneNode(true);
    // console.log(fifth);
    // ul.prepend(fifth);
    btnLift.addEventListener('click', function () {
        if (num == 0) {
            ul.style.left = -3*focusWidth;
            console.log(8);
            num = 3;
        }
        num++;
        const smallLeft = num * focusWidth;
        animate(ul, smallLeft);
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
    for (let index = 0; index < li2.length; index++) {
        li2[index].addEventListener('click', function () {

        })

    }


})



