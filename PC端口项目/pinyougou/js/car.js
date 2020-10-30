$(function () {

    //全选按钮点击以后单选按钮跟着变化
    $(".check_all").change(function () {
        $(this).prop("checked");
        $(".j-checkbox,.check_all").prop("checked", $(this).prop("checked"));
        accountAll();
    })


    //单选按钮点击以后全选按钮跟着变化
    $(".j-checkbox").change(function () {
        //$(".j-checkbox:checked").length;判断有几个复选框被选中
        var num = $(".j-checkbox:checked").length;
        if (num != $(".j-checkbox").length) {
            $(".check_all").prop("checked", false);
        } else {
            $(".check_all").prop("checked", true);
        }
        accountAll();
    });

    //件数数量增加减少模块
    $(".increment").click(function () {
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        //小计跟随数量增变化模块
        var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var sum_price = (price * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html('¥' + sum_price);
        accountAll();
    });

    $(".decrement").click(function () {
        var num = $(this).siblings(".itxt").val();
        console.log(num)
        if (num > 1) {
            num--;
            console.log(num);
            $(this).siblings(".itxt").val(num);
        } else {
            num = 1;
        }
        //小计跟随数量减变化模块
        var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var sum_price = (price * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html('¥' + sum_price);
        accountAll();
    });

    //输入框输入值，使得总金额跟随变化
    $(".itxt").change(function () {
        var num = $(this).val();
        var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var sum_price = (price * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html('¥' + sum_price);
        accountAll();
    });

    //计算所有选中商品的总件数
    accountAll();
    function accountAll() {
        var accountAll = 0;
        var priceAll = 0;
        $(".j-checkbox").each(function (index, elem) {
            if ($(elem).prop("checked")) {
                account = $(this).parents(".p-checkbox").siblings(".p-num").find(".itxt").val();
                accountAll = accountAll + parseInt(account);

                //计算所有选中商品的总件数的总金额
                var price = $(this).parents(".p-checkbox").siblings(".p-sum").text().substr(1);
                priceAll = priceAll + parseFloat(price);

                //选中了哪个单选框，哪个单选框的底色变色
                $(this).parents(".cart-item").addClass("check-cart-item");

            } else {
                $(this).parents(".cart-item").removeClass("check-cart-item");
            }
        })
        $(".amount-sum em").text(accountAll);
        $(".price-sum em").text('¥' + priceAll.toFixed(2));
    }


    //删除选中的商品
    $(".remove-batch").click(function () {
        $(".j-checkbox").each(function (index, elem) {
            if ($(elem).prop("checked")) {
                $(this).parents(".cart-item").remove();
            }
        })
        accountAll();
    });

    //清除购物车
    $(".clear-all").click(function () {
        $(".j-checkbox").parents(".cart-item").remove();
        accountAll();
    });

    //删除指定的商品
    $(".p-action").click(function () {
        $(this).parents(".cart-item").remove();
        accountAll();
    });
})