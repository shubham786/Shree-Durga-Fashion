rootModule.controller('c_categories', function ($scope, $location, s_http, $http, $window, s_local_storage, $rootScope) {
    //Reshow the cart icon.
    $rootScope.cart_icon_flag = true;
    $scope.kurti_display;
    $scope.initLoad = 8;
    $scope.data;
    $scope.allSelVals = '';
    $scope.sortBy = '0';
    var kdOriginal = [];
    login_dtl = { "operation": "kurti_display" };
    var user_lgn_in_dtl_obj = JSON.stringify(login_dtl);

    var priceArrs = [];
    var sizeArrs = [];
    var ppArr = [];
    var pArr = [];
    var sleeveArr = [];
    var neckArr = []
    var fabricArr = [];
    var occArr = [];
    console.log('-->>',mp_printPattern);
    $scope.usr_mp_printPattern = mp_printPattern;


    $scope.optionsValue;

    $(window).resize(function() {
        var wWidth =  $(window).width();
        if(wWidth <768){
            console.log('hi');  
            document.getElementById('strech').style.width='100%';
        }else{
            document.getElementById('strech').style.width='';
        }
      });

    s_http.s_http_fun(user_lgn_in_dtl_obj, function (resp) {
        console.log('resp.data.data', resp.data.data);
//        $rootScope.kurti_display = resp.data.data;
        $scope.rootBasket = resp.data.data;
        $scope.kurti_display = $scope.rootBasket;//.slice(0, $scope.initLoad);
        angular.copy($scope.kurti_display, kdOriginal);
        execute();
    });

    function execute() {
        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            ppRange().
            pRange().
            sleeveRange().
            neckRange().
            fabricRange().
            occRange().
            returnVal();
    }

    function updateArrs() {
        priceArrs = $scope.data._selPrices;
        sizeArrs = $scope.data._selSizes;
        ppArr = $scope.data._selPP;
        pArr = $scope.data._selP;
        neckArr = $scope.data._selNeck;
        sleeveArr = $scope.data._selSleeve;
        fabricArr = $scope.data._selFabric;
        occArr = $scope.data._selOcc;

        /* console.log('priceArrs--', priceArrs);
        console.log('sizeArrs--', sizeArrs);
        console.log('ppArr--', ppArr);
        console.log('pArr--', pArr);
        console.log('neckArr--', neckArr);
        console.log('sleeveArr--', sleeveArr); */
        $scope.allSelVals = '';
        for(var i in priceArrs){
            $scope.allSelVals += (priceArrs[i] +'  ');
        }
        for(var i in sizeArrs){
            $scope.allSelVals += (sizeArrs[i] +'  ');
        }
        for(var i in ppArr){
            $scope.allSelVals += (ppArr[i] +'  ');
        }
        for(var i in pArr){
            $scope.allSelVals += (pArr[i] +'  ');
        }
        for(var i in neckArr){
            $scope.allSelVals += (neckArr[i] +'  ');
        }
        for(var i in fabricArr){
            $scope.allSelVals += (fabricArr[i] +'  ');
        }
        for(var i in sleeveArr){
            $scope.allSelVals += (sleeveArr[i] +'  ');
        }
        for(var i in occArr){
            $scope.allSelVals += (occArr[i] +'  ');
        }

    }


    $scope.priceChng = function (isChk, lwrLimit) {
        if (isChk) {
            priceArrs.push(lwrLimit);
        }
        else if (!isChk) {
            for (var i in priceArrs) {
                if (priceArrs[i] == lwrLimit) {
                    priceArrs.splice(i, 1);
                    break;
                }
            }
        }
        if (priceArrs.length != 0) {
            priceArrs.sort();
        }

        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            sizeRange().
            ppRange().
            pRange().
            sleeveRange().
            neckRange().
            fabricRange().
            occRange().
            updateArrays().
            returnVal();

        updateArrs();
    }

    $scope.sizeChng = function (isChk, size) {
        if (isChk) {
            sizeArrs.push(size);
        }
        else if (!isChk) {
            for (var i in sizeArrs) {
                if (sizeArrs[i] == size) {
                    sizeArrs.splice(i, 1);
                    break;
                }
            }
        }

        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            ppRange().
            pRange().
            sleeveRange().
            neckRange().
            fabricRange().
            occRange().
           // sizeRange().
            updateArrays().
            returnVal();

        updateArrs();
    }
    $scope.ppChng = function (isChk, value) {
        if (isChk) {
            ppArr.push(value);
        }
        else if (!isChk) {
            for (var i in ppArr) {
                if (ppArr[i] == value) {
                    ppArr.splice(i, 1);
                    break;
                }
            }
        }
        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            pRange().
            sleeveRange().
            neckRange().
            fabricRange().
           // ppRange().
            occRange().
            updateArrays().
            returnVal();

        updateArrs();

    }

    $scope.pChng = function (isChk, value) {
        //console.log('isChkNvalue',isChk,value);

        if (isChk) {
            pArr.push(value);
        }
        else if (!isChk) {
            for (var i in pArr) {
                if (pArr[i] == value) {
                    pArr.splice(i, 1);
                    break;
                }
            }
        }
        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            ppRange().
            sleeveRange().
            neckRange().
            fabricRange().
            occRange().
           // pRange().
            updateArrays().
            returnVal();

        updateArrs();

    }

    $scope.sleeveChng = function (isChk, value) {
        if (isChk) {
            sleeveArr.push(value);
        }
        else if (!isChk) {
            for (var i in sleeveArr) {
                if (sleeveArr[i] == value) {
                    sleeveArr.splice(i, 1);
                    break;
                }
            }
        }
        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            ppRange().
            pRange().
            neckRange().
            fabricRange().
           // sleeveRange().
            occRange().
            updateArrays().
            returnVal();

        updateArrs();

    }

    $scope.neckChng = function (isChk, value) {
        if (isChk) {
            neckArr.push(value);
        }
        else if (!isChk) {
            for (var i in neckArr) {
                if (neckArr[i] == value) {
                    neckArr.splice(i, 1);
                    break;
                }
            }
        }
        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            ppRange().
            pRange().
            sleeveRange().
            fabricRange().
            occRange().
           // neckRange().
            updateArrays().
            returnVal();

        updateArrs();

    }

    $scope.fabricChng = function (isChk, value) {
        if (isChk) {
            fabricArr.push(value);
        }
        else if (!isChk) {
            for (var i in fabricArr) {
                if (fabricArr[i] == value) {
                    fabricArr.splice(i, 1);
                    break;
                }
            }
        }

        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            ppRange().
            pRange().
            sleeveRange().
            neckRange().
            //fabricRange().
            occRange().
            updateArrays().
            returnVal();

        updateArrs();

    }

    $scope.occChng = function (isChk, value) {
        if (isChk) {
            occArr.push(value);
        }
        else if (!isChk) {
            for (var i in occArr) {
                if (occArr[i] == value) {
                    occArr.splice(i, 1);
                    break;
                }
            }
        }

        $scope.data = landingFilter.register($scope.kurti_display).parentFilter(priceArrs, sizeArrs, ppArr, pArr, sleeveArr, neckArr, fabricArr, occArr).
            priceRange().
            sizeRange().
            ppRange().
            pRange().
            sleeveRange().
            neckRange().
           // occRange().
            fabricRange().
            updateArrays().
            returnVal();

        updateArrs();

    }
    

    $scope.namePPfn = function () {
        //function for print pattern
        if ($scope.optionsValue == 0) {
            $scope.optionsValue = undefined;
        }
        else {
            $scope.optionsValue = 0;
        }
    }

    $scope.namePrintFn = function () {
        if ($scope.optionsValue == 1) {
            $scope.optionsValue = undefined;
        }
        else {
            $scope.optionsValue = 1;
        }
    }

    $scope.nameSlvLen = function () {
        if ($scope.optionsValue == 2) {
            $scope.optionsValue = undefined;
        } else {
            $scope.optionsValue = 2;
        }
    }

    $scope.nameNeck = function () {
        if ($scope.optionsValue == 3) {
            $scope.optionsValue = undefined;
        }
        else {
            $scope.optionsValue = 3;
        }
    }

    $scope.nameFabric = function () {
        if ($scope.optionsValue == 4) {
            $scope.optionsValue = undefined;
        }
        else {
            $scope.optionsValue = 4;
        }
    }

    $scope.nameOcc = function () {
        if ($scope.optionsValue == 5) {
            $scope.optionsValue = undefined;
        } else {
            $scope.optionsValue = 5;
        }
    }

    $scope.sortByFn = function(value){
        
        if(value == '1'){
            $scope.data.kurti_display.sort(function(a,b) {
                return a.prices[0] - b.prices[0];
            });
        }

        else if(value == '2'){
            $scope.data.kurti_display.sort(function(a,b) {
                return b.prices[0] - a.prices[0];
            });
        }

        else if(value == '3'){
            $scope.data.kurti_display.sort(function(a,b) {
                return ( new Date(b.entry_date) - new Date(a.entry_date) );
            });
        }

    }
   

    $scope.convertPP = function(id){
        for(var i in mp_printPattern){
            if(mp_printPattern[i].id == id){
                return mp_printPattern[i].value;
                break;
            }
        }
    }

    $scope.convertP = function(id){
        for(var i in mp_pattern){
            if(mp_pattern[i].id == id){
                return mp_pattern[i].value;
                break;
            }
        }
    }

    $scope.convertSleeve = function(id){
        for(var i in mp_sleeve){
            if(mp_sleeve[i].id == id){
                return mp_sleeve[i].value;
                break;
            }
        }
    }

    $scope.convertNeck = function(id){
        for(var i in mp_neck){
            if(mp_neck[i].id == id){
                return mp_neck[i].value;
                break;
            }
        }
    }

    $scope.convertFabric = function(id){
        for(var i in mp_fabric){
            if(mp_fabric[i].id == id){
                return mp_fabric[i].value;
                break;
            }
        }
    }

    $scope.convertOcc = function(id){
        for(var i in mp_occasion){
            if(mp_occasion[i].id == id){
                return mp_occasion[i].value;
                break;
            }
        }
    }






    //------old fns-------
    $scope.loadMore = function () {
        $scope.initLoad += 2;
        $scope.kurti_display = $scope.rootBasket.slice(0, $scope.initLoad);
    }


    $scope.detailed_prod = function (kd) {
        $('html,body').scrollTop(0);
        $location.url('detailed-product/' + kd);
        //$window.open('/index.php#!/detailed-product/' + kd);
    }

    //scroll-to-top functionality.    
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            $("#scrollTop").css("display", "block");
        } else {
            $("#scrollTop").css("display", "none");
        }
    }

    $('#scrollTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 14000);
        return false;
    });
    //***scroll-to-top functionality.    
});