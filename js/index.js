// alert("Ahonen的个人网站正在搭建中。嘿嘿")
addEventListener("load", function () {
    const btnLift = document.querySelector('.arrow_l');
    const btnRight = document.querySelector('.arrow_r')
    for (let i = 1; i <4; i++) {
        btnRight.addEventListener('click',function(){
            var ul1 = document.querySelector('.ul1');
            var ulLift = ul1.style.left;
           
                if (i==1&ul1.style.left==0) {
                    ul1.style.left =- i * 100 +'%';
                    return
                }else if(i==2&ul1.style.left=='-100%'){
                    ul1.style.left =- i * 100 +'%';
                    return
                }else if(i==3&ul1.style.left=='-200%'){
                    ul1.style.left =- i * 100 +'%';
                    return
                }
              
                console.log(i);
                // return
        })
        console.log(i);
    }
function picture() {
    var ul = document.querySelector('.ul1 ')
    ul.style.display = 'black';
    var number = 100;
    console.log(ul.style.left);
    ul.style.left = '-200%';
    console.log(1);
    
}

this.setInterval(function () {
    // picture();
}, 1000)
})



