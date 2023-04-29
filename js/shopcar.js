$(function () {
    // 添加一个shop-account类名
    $('.shops-content .con-2>div').each(function (index) {
        let i = 4 * index + 2;
        $('.shops-content .con-2>div').eq(i).addClass('shop-account');
    })
    // 全选框
    // $('.all-checked').prop('checked',true);
    $('.all-checked').change(function () {
        $('.j-checked').prop('checked', $(this).prop('checked'));
        $('.all-checked').prop('checked', $(this).prop('checked'));
         // 总计的函数
         getSum()
    });
    $('.j-checked').change(function () {
        console.log($('.j-checked:checked').length);
        console.log($('.j-checked').length);
        if ($('.j-checked:checked').length == $('.j-checked').length) {
            $('.all-checked').prop('checked', true);
        } else {
            $('.all-checked').prop('checked', false);
        }
        // 总计的函数
        getSum()
    });
    // 数量加减

    $('.add').click(function () {
         
        // console.log(i++);
        let i = $(this).siblings('.number').children('input').val();
        i++;
        $(this).siblings('.number').children('input').val(i);
        console.log($(this).siblings('.number').children('input').val());
        // 对应价格改变
        // console.log($('.shops-content .con-2>div').eq(2));
        // 具体改变
        // $('.shop-price').
        let price = $(this).parents('.shop-number').siblings('.shop-price').text();
        // let prices =price.replace(/[^0-9]/g, "");
        // let prices = price.match(/\d+/);
        let prices = price.substr(1);
        console.log(prices);
        let prices1 = (i * prices).toFixed(2);
        $(this).parents('.shop-number').siblings('.shop-account').text( prices1);
        // 总计的函数
        getSum()
    })
    $('.reduce').click(function () {
         
        let i = $(this).siblings('.number').children('input').val();
        if (i <= 1) {
            alert('已经是最小的数量了');
            return false;
        }
        i--;
        $(this).siblings('.number').children('input').val(i);
        console.log($(this).siblings('.number').children('input'));
        // 具体改变
        let price = $(this).parents('.shop-number').siblings('.shop-price').text();
        let prices = price.substr(1);
        console.log(prices);
        let prices1 = (i * prices).toFixed(2);
        $(this).parents('.shop-number').siblings('.shop-account').text( prices1);
        // 总计的函数
        getSum()
    })
    $('.con-2 .number input').change(function () {
       
        let i = $(this).val();
        if (i <= 1) {
            alert('已经是最小的数量了');
            return false;
        }
        let price = $(this).parents('.shop-number').siblings('.shop-price').text();
        let prices = price.substr(1);
        console.log(prices);
        let prices1 = (i * prices).toFixed(2);
        $(this).parents('.shop-number').siblings('.shop-account').text( prices1);
          // 总计的函数
          getSum()

    })


    
    // 计算总计和总额模块
    getSum();
    function getSum() {
        let count = 0; //计算总件数
        let money = 0; //计算总价钱
        // 1.总件数
        $.each($('.number input'), function (i, ele) {
            let checked = $(this).parents('.con-2').prev('.con-1').find('input').prop('checked');
            if (checked) {
                count += parseFloat($(ele).val());
            }
            console.log(count);
        })
        // 2.总价格
        $.each($('.shop-content .shop-account'), function (i, ele) {
            let checked = $(this).parents('.con-2').prev('.con-1').find('input').prop('checked');
            if (checked) {
                money += parseFloat($(ele).text());
            }
            console.log(money);
        })
        $('.total-amount').text(count);
        $('.account-price').text('￥'+ money.toFixed(2));

    }




})