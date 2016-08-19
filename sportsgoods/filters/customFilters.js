/**
 * Created by hxsd on 2016/7/28.
 */

//----------------------声明另一个模块，专门管理各种过滤器。------

var myFilter=angular.module("customFilter",[]);
//----------------------------------------------------------
//自定义分页过滤器
myFilter.filter("range",function(){
    //参数：products: 要被过滤的商品数组
    //      currentPage:要显示的页码
    //      pageSize:页面的大小
    return function(products,currentPage,pageSize){
        //对差传入的参数进行有效性验证
        if(angular.isArray(products) && angular.isNumber(currentPage) && angular.isNumber(pageSize)){
            //计算当前页面显示商品的起始索引值
            var startIndex =(currentPage-1) * currentPage;
            //如果 起始索引超过了商品数量。则返回空数组
            if(startIndex >= products.length){
                return [];
            }else{
                // 截取一夜的商品信息返回
                return products.splice(startIndex,pageSize);
            }
        }else {
            //如果传入的参数有误，则不对原数据做任何处理；
            return products;
        };
};
//------------------------------------------------------------------------

});

//----------------------------------------------
//自定义计算分页导航的过滤器=》起到转换的作用
myFilter.filter("navCount",function(){
    //alert(1);
    //参数1：商品数组    ；  参数2 ： 页面大小 数量
    return function(products,pageSize) {
        if (angular.isArray(products) && angular.isNumber(pageSize)) {
            var navArr = [];
            //计算导航按钮数组的大小
            var navTotal = Math.ceil(products.length / pageSize);
            for (var i = 0; i < navTotal; i++) {
                navArr.push(i + 1);
            }
            return navArr;//[1,2,3,4,5,6,,7,8,9.........]
        } else {
            return products;
            //};
        };

    };
});