$(function () {
    // 添加一个shop-account类名
    $('.shops-content .con-2>div').each(function (index) {
        let i = 4 * index + 2;
        $('.shops-content .con-2>div').eq(i).addClass('shop-account');
    })
    // 页面刚打开， 单品全不勾选， 总价为0，淘宝就是这么做的
    //如果要记忆用户勾选情况，需要存储
    // $('[type="checkbox"]').prop('checked', false);

    // 功能1：复选框 全选/单选商品
    // (1). 全选按钮 有上下2个
    $('.all-checked').change(function () {
        $('.j-checked').prop('checked', $(this).prop('checked'));
        $('.all-checked').prop('checked', $(this).prop('checked'));
        getSum();
        if ($(this).prop("checked")) {
            $('.j-checked,.all-checked').addClass('check_bgc');
            console.log('a');
        } else {
            $('.j-checked,.all-checked').removeClass('check_bgc');
        }
    })
    //(2).单选商品件数导致全选按钮
    // console.log($('.shop-content input').length); //商品件数 5
    $('.shops-content .con-1 input').change(function () {
        // console.log($('.shop-content input:checked').length);  //被勾选的商品件数
        if ($('.shops-content input:checked').length == $('.shops-content input').length) {
            $('.all-checked').prop('checked', true);
        } else {
            $('.all-checked').prop('checked', false);
        }
        getSum();
        if ($(this).prop('checked')) {
            $(this).parents('.shops-content').addClass('check_bgc');
        } else {
            $(this).parents('.shops-content').removeClass('check_bgc');
        }
    })
    //(3). 店铺全选 按钮
    $('.shop-tit input').change(function () {
        // 1. 店铺全选 导致全选
        if ($('.shop-tit input:checked').length == $('.shop-tit input').length) {
            $('.all-checked').prop('checked', true);
        } else {
            $('.all-checked').prop('checked', false);
        }
        // 2. 店铺勾选 导致内部商品勾选
        $(this).parents('.shops').find('.j-checked').prop('checked', $(this).prop('checked'));
        console.log($(this).parents('.shop').find('.j-checked'));
        getSum();
        if ($(this).prop('checked')) {
            $(this).parents('.shops').find('.shops-content').addClass('check_bgc');
        } else {
            $(this).parents('.shops').find('.shops-content').removeClass('check_bgc');
        }
    })
    //(4) 店铺商品勾选 导致店铺全选勾选
    $('.shops-content .j-checked').change(function () {
        // 如何找到同一个店铺的所有复选框 从this出发找到包裹整个店铺的box，再找到对应的 复选框
        // console.log($(this).parents('.shop').find('[type="checkbox"]'));
        let amount = $(this).parents('.shops').find('.j-checked').length - 1;
        var checked = $(this).parents('.shops').find('.shops-content input:checked').length;
        if (amount == checked) {
            $(this).parents('.shops').find('.shop-tit input').prop('checked', true);
        } else {
            $(this).parents('.shops').find('.shop-tit input').prop('checked', false);
        }
    });

    //功能2： 数量加减  并对应更改小计价格：shop-price单价  shop-account总价
    // console.log($('.btn-box')); //加减计数盒子
    // 点击 加号 
    $('.btn-box .add').click(function () {
        // (1) 数量增加
        var num = $(this).prev('.number').children().val();
        $(this).prev('.number').children().val(++num);
        // (2) 更改小计
        let unit_cost = $(this).parents('.shop-number').prev('.shop-price').html(); //单价
        let total_cost = (unit_cost.substr(1) * num + 0).toFixed(2); //总价 设定2位小数
        $(this).parents('.shop-number').next('.shop-account').html(total_cost);
        // (3) 如果勾选 更改总价
        if ($(this).parents('.shops-content').find('.con-1 input').prop('checked')) {
            getSum();
        }
    });
    // 点击 减号
    $('.btn-box .reduce').click(function () {
        var num = $(this).next('.number').children().val();
        if (num == 1) {
            return false;
        }
        $(this).next('.number').children().val(--num);
        //更改小计
        let unit_cost = $(this).parents('.shop-number').prev('.shop-price').html(); //单价
        let total_cost = (unit_cost.substr(1) * num + 0).toFixed(2); //总价 设定2位小数
        $(this).parents('.shop-number').next('.shop-account').html(total_cost);
        //(3)如果勾选更改总价
        if ($(this).parents('.shops-content').find('.con-1 input').prop('checked')) {
            getSum();
        }
    });

    //功能3：计算商品价格  
    // (1) 每个单品小计跟随输入数量变化 为什么不把数量变化一起写，因为change事件只有手动更改才会触发
    //和input事件不同 并不是每次元素的 value 改变时都会触发
    $('.btn-box .number input').change(function () {
        // console.log($(this).val());
        let unit_cost = $(this).parents('.shop-number').prev('.shop-price').html(); //单价
        // console.log(unit_cost);
        let total_cost = (unit_cost.substr(1) * $(this).val() + 0).toFixed(2); //总价 设定2位小数
        // console.log(total_cost);
        $(this).parents('.shop-number').next('.shop-account').html(total_cost);
    });

    //计算总价格 只有勾选商品才计入总额 
    //计算总件数  只有勾选商品才计入总数

    var getSum = function () {
        var sum_price = 0;
        var sum_amount = 0;
        // 1. 总价格
        $('.shops-content .shop-account').each(function (i, dom) {
            // console.log($(dom).html()); //获取单品总价
            let checked = $(this).parents('.con-2').prev('.con-1').find('input').prop('checked');
            if (checked) {
                sum_price += parseFloat($(dom).html());
            }
        });
        // console.log(sum_price);
        $('.account-price').html('￥' + sum_price.toFixed(2));

        // 2. 总件数
        $('.btn-box .number input').each(function (i, dom) {
            // console.log($(this).val());
            let checked = $(this).parents('.con-2').prev('.con-1').find('input').prop('checked');
            if (checked) {
                sum_amount += parseInt($(this).val());
            }
        });
        // console.log(sum_amount);
        $('.total-amount').html(sum_amount);
    }
    getSum();
    // 功能4：删除单品
    //(1) 对应商品栏消失 shop-content
    $('.shopDel a').click(function () {
        $(this).parents('.shops-content').remove();
        getSum();
    })
    //(2) 删除选择的商品
    $('.delChoose').click(function () {
        $('.shops-content').each(function (i, dom) {
            let checked = $(this).find('.con-1 input').prop('checked');
            if (checked) {
                $(this).remove();
            }
        })
        getSum();
    })
})