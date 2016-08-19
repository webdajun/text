/**
 * Created by hxsd on 2016/7/28.
 */


//-------------------------------------
    angular.module("myapp")
        .constant("activeClass","btn-primary")
        .controller("productListController",function($scope,activeClass,shopCart){
        //声明一个变量保存当前用户选择的商品类别
        $scope.selectedCategory =null;
        //用户danj8i商品类别的响应函数
        $scope.aaaa=function(category){
            //储存当前选中的类别、
            $scope.selectedCategory =category;
            //console.log($scope.selectedCategory);
        };
        //过滤函数
        $scope.showByCategory=function(product){
            //console.log($scope.selectedCategory,product.category,$scope.selectedCategory == product.category);
            return $scope.selectedCategory == null || $scope.selectedCategory == product.category;
        };
//------------------------按钮颜色-------------------------
        $scope.getActiveClass=function(category){
            return category == $scope.selectedCategory ? activeClass : "";
        };
 //---------------分页数据 -------------
            $scope.currentPage =1 ;//当前显示的页面
            $scope.pageSize =3; //页面大小；每页显示的数量；

 // --------------选择分页-------------------------------------
        $scope.selectPage = function(page){
            $scope.currentPage =page;
        };

//-------------高亮 分页按钮-------
        $scope.getActiceNavClass=function(page){
            return page == $scope.currentPage ? activeClass :"";
        };
//---------添加购物车响应函数-------------------------------
        $scope.addToCart =function(product){
            shopCart.add(product);//将商品加入购物车
        };
    });