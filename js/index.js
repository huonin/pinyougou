alert("Ahonen的个人网站正在搭建中。嘿嘿")
addEventListener("load", function () {
    const btnLift = document.querySelector('.arrow_l');
    const btnRight = document.querySelector('.arrow_r');
    const focus = document.querySelector('.focus');

    focus.addEventListener('mouseenter',function(){
        btnLift.style.display = 'block';
        btnRight.style.display = 'block';
    })
    focus.addEventListener('mouseleave',function(){
        btnLift.style.display = 'none';
        btnRight.style.display = 'none';
    })
    
})



