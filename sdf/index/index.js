var rootModule = angular.module('rootModule', ["ngRoute"]);

rootModule.controller('c_root', function (s_http, $scope, $http, $rootScope) {
    console.log('-=c_root=-');
    //particlesJS();
    $rootScope.cart_icon_flag = true;//1
    $rootScope.lgn_pg_flag = false;//2
    $rootScope.delivery_add_page_flag = false;//3
    $rootScope.header_flg = true;//4
    $rootScope.loader_flg = true;//5
    $rootScope.slider_flg = true;
    $rootScope.filter_flg = false;
    //to share b/w detailed product and categories.
    $rootScope.user_id;
    $rootScope.colors = ['as shown','mulitcolor','green', 'red', 'blue', 'orange','pink'];//6
    $rootScope.colorsMapping = {
        'as shown': 0,
        'mulitcolor': 1,
        'green': 2,
        'red': 3,
        'blue': 4,
        'orange': 5,
        'pink': 6
    };//7
    $rootScope.sizes = ['s', 'm', 'l', 'xl', 'xxl', 'xxxl', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54'];//8
    $rootScope.sizesMapping = {
        's': 0,
        'm': 1,
        'l': 2,
        'xl': 3,
        'xxl': 4,
        'xxxl': 5,
        '36': 6,
        '38': 7,
        '40': 8,
        '42': 9,
        '44': 10,
        '46': 11,
        '48': 12,
        '50': 13,
        '52': 14,
        '54': 15
    };//9
});

