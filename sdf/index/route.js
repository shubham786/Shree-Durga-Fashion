rootModule.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./sdf/pages/landing/landing.php",//contains header and login form
            //controller: "c_landing"
        })
        .when("/detailed-product/:param1", {
            templateUrl: "./sdf/pages/detailed-product/detailed-product.php",
            //controller: 'c_detailed_product'
        })
        .when("/cart-door", {
            templateUrl: "./sdf/pages/cart-door/cart-door.php",
            //controller: 'c_cart_door'
        })
        .when("/checkout", {
            templateUrl: "./sdf/pages/checkout/checkout.php",
           // controller: "c_checkout"
        })
        .when("/user-profile/change-password",{
            templateUrl: "./sdf/pages/user-profile/change-password/change-password.php",
            //controller: "c_user_profile"
        })
        
        .when("/user-profile/user-orders",{
            templateUrl: "./sdf/pages/user-profile/user-orders/user-orders.php",
            //controller: "c_user_profile"
        })
        .when("/categories",{
            templateUrl: "./sdf/pages/categories/categories.php",
            //controller: "c_user_profile"
        })
              
        //Handles forgot pass request.
        .otherwise({
            templateUrl: "./sdf/pages/url/url.php",
         //   controller: "c_url"
        });
});