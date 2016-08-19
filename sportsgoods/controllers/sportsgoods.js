/**
 * Created by hxsd on 2016/7/28.
 */

//--------------------------
angular.module("myapp")
    .constant("categoryUrl","json/categories.json")
    .constant("productUrl","json/products.json")
    .constant("orderUrl","json/order.json")
    .controller("sportStoreController",function($scope,$http,$location,categoryUrl,productUrl,shopCart,orderUrl){
    $scope.data={};
        //-------------------------------------
        $http.get(categoryUrl).success(function(data){
            $scope.data.categories =data;
        });
        $http.get(productUrl).success(function(data){
            $scope.data.products =data;
        });
    ///----------------------------------
        $scope.data.shipping={};//用户信息
        //发送的订单的方法
        $scope.sendOrder=function(){

            //需要发送两部分内容：购物车中的购物信息。以及用户的收货信息
            var order =angular.copy($scope.data.shipping);//拷贝一份信息，不破坏原始数据
            order.products=shopCart.findAll();
            //发送给服务器：$http post方法；
            $http.post(orderUrl,order)
                .success(function(data,status){
                    //保存服务器端返回的订单号
                    $scope.data.shipping.orderId=data.orderId;
                    //清空购物车
                })
                .error(function(data,status){
                    //保存错误代码
                    $scope.data.shipping.errorStatus=status;
                })
                .finally(function(){
                    //跳转到thankYou.html页面
                    $location.path("complete");
                });
        };



});