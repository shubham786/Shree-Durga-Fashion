var landingFilter = {
    //registration of original kurti display array 
    'itemsArr': [],
    
    //holds updated kurtiDisplayArray
    'serviceKurtiDisplay': [],

    //holds ranges as per name
    'priceArr': [],
    'sizeArr': [],
    'ppArr': [],//print_pattern array holder
    'pArr': [],//print array holder
    'sleeveArr': [],
    'neckArr': [],
    'fabricArr': [],
    'occArr': [],
    //***holds ranges as per name

    //holds selItems values, used for pruning purpose
    '_selPrices': [],
    '_selSizes': [],
    '_selPP': [],
    '_selP': [],
    '_selSleeve': [],
    '_selNeck': [],
    '_selFabric': [],
    '_selOcc': [],
    //***holds selItems values, used for pruning purpose

    'returnVal': function () {
        var data = {
            'kurti_display': this.serviceKurtiDisplay,
            
            'priceArr': this.priceArr.sort(),
            'sizeArr': this.sizeArr.sort(),
            'ppArr': this.ppArr.sort(),
            'pArr': this.pArr,
            'sleeveArr': this.sleeveArr,
            'neckArr': this.neckArr,
            'fabricArr': this.fabricArr,
            'occArr': this.occArr,

            '_selPrices': this._selPrices,
            '_selSizes': this._selSizes,
            '_selPP': this._selPP,
            '_selP': this._selP,
            '_selSleeve': this._selSleeve,
            '_selNeck': this._selNeck,
            '_selFabric': this._selFabric,
            '_selOcc': this._selOcc

        };
        return data;

    },
    'register': function (itemsArr) {
        this.itemsArr = itemsArr;
        return landingFilter;
    },
    'priceRange': function () {
        //Calculates range of prices in intervales of 1000 from availabe products.
        this.priceArr = [];
        var iA = this.serviceKurtiDisplay;
        for (var i in iA) {
            if (iA[i].prices[0] >= 0 && iA[i].prices[0] <= 999) {
                var lcl = [0, 999];
                this.priceArr = this.insertIfNotAlreadySize(this.priceArr, 0);
            }
            else {
                var lst3 = iA[i].prices[0] % 1000;
                var upperLmt = iA[i].prices[0] + (1000 - lst3);
                var lcl = [upperLmt - 1000, upperLmt - 1];
                this.priceArr = this.insertIfNotAlreadySize(this.priceArr, (upperLmt - 1000));
                //insertIfNotAlreadySize

            }

            for (var j in this._selPrices) {

            }
        }
        return landingFilter;
    },

    'insertIfNotAlreadyTwoArr': function (mainArr, value) {
        //value is also an array

        for (var i in value) {
            var alreadyPresent = false;
            for (var j in mainArr) {
                if (mainArr[i] == value[j]) {
                    alreadyPresent = true;
                    break;
                }
            }
            if (!alreadyPresent) {
                mainArr.push(value);
            }
        }



        return mainArr;


    },
    'sizeRange': function () {
        //Calculates available sizes from data and returns an array of sizes which is used in UI display as filter.
        this.sizeArr = [];

        var iA = this.serviceKurtiDisplay;
        //iA[0].prices[0]
        for (var i in iA) {
            for (var j in iA[i].sizes) {
                this.sizeArr = this.insertIfNotAlreadySize(this.sizeArr, iA[i].sizes[j]);
            }

        }
        return landingFilter;
    },
    'insertIfNotAlreadySize': function (mainArr, value) {
        var isPresent = false;
        for (var i in mainArr) {
            if (mainArr[i] == value) {
                isPresent = true;
                break;
            }
        }

        if (!isPresent) {
            mainArr.push(value);
        }

        return mainArr;

    },
    'ppRange': function () {
        this.ppArr = [];
        var iA = this.serviceKurtiDisplay;
        for (var i in iA) {
            for (var j in iA[i].print_pattern) {
                this.ppArr = this.insertIfNotAlreadySize(this.ppArr, (iA[i].print_pattern[j]));
            }

        }

        return landingFilter;
    },
    'pRange': function () {

        this.pArr = [];

        var iA = this.serviceKurtiDisplay;
        //iA[0].prices[0]
        for (var i in iA) {
            for (var j in iA[i].pattern) {
                this.pArr = this.insertIfNotAlreadySize(this.pArr, (iA[i].pattern));
            }

        }

        return landingFilter;
    },
    'sleeveRange': function () {

        this.sleeveArr = [];

        var iA = this.serviceKurtiDisplay;
        //iA[0].prices[0]
        for (var i in iA) {
            for (var j in iA[i].sleeve) {
                this.sleeveArr = this.insertIfNotAlreadySize(this.sleeveArr, (iA[i].sleeve));
            }

        }

        return landingFilter;
    },
    'neckRange': function () {

        this.neckArr = [];

        var iA = this.serviceKurtiDisplay;
        //iA[0].prices[0]
        for (var i in iA) {
            for (var j in iA[i].neck) {
                this.neckArr = this.insertIfNotAlreadySize(this.neckArr, (iA[i].neck));
            }

        }

        return landingFilter;
    },
    'fabricRange': function () {
        this.fabricArr = [];

        var iA = this.serviceKurtiDisplay;
        //iA[0].prices[0]
        for (var i in iA) {
            for (var j in iA[i].fabric) {
                this.fabricArr = this.insertIfNotAlreadySize(this.fabricArr, (iA[i].fabric));
            }

        }

        return landingFilter;
    },
    'occRange': function () {
        this.occArr = [];
        var iA = this.serviceKurtiDisplay;
        for (var i in iA) {
            for (var j in iA[i].occasion) {
                this.occArr = this.insertIfNotAlreadySize(this.occArr, (iA[i].occasion[j]));
            }

        }

        return landingFilter;
    },
    'parentFilter': function (selPrices, selSizes, selPP, selP, selSleeve, selNeck, selFabric, selOcc) {
        this._selPrices = selPrices;
        this._selSizes = selSizes;
        this._selPP = selPP;
        this._selP = selP;
        this._selSleeve = selSleeve;
        this._selNeck = selNeck;
        this._selFabric = selFabric;
        this._selOcc = selOcc;
        console.log('selPrices', selPrices);
        console.log('selSizes', selSizes);
        console.log('selPP', selPP);
        console.log('selP',selP);
        console.log('selSleeveArr', selSleeve);
        console.log('selNeck', selNeck);
        console.log('selFabric', selFabric);
        console.log('selOcc', selOcc);
        
        this.serviceKurtiDisplay = [];

        if (selPrices.length == 0 && selPrices.length == 0 && selPP.length == 0 && selP.length == 0
            && selSleeve.length == 0 && selNeck.length == 0 && selFabric.length == 0 && selOcc.length == 0) {
            this.serviceKurtiDisplay = this.itemsArr;
            this.sizeRange();
            this.priceRange();
            this.ppRange();
            this.pRange();
            this.sleeveRange();
            this.neckRange();
            this.fabricRange();
            this.occRange();
        }

        //price filter
        this.serviceKurtiDisplay = this.itemsArr;
        var kdCopy = this.serviceKurtiDisplay;
        var lclProcessedHolder = [];
        if (selPrices.length != 0) {
            // this.updatedPriceArr = [];
            for (var i in kdCopy) {//kdCopy
                for (var j in selPrices) {//priceArrs
                    if (kdCopy[i].prices[0] >= selPrices[j] && kdCopy[i].prices[0] <= (selPrices[j] + 999)) {
                        /*    if(kdCopy[i].prices[0] >=0 && kdCopy[i].prices[0]<=999){
                               this.updatedPriceArr = this.insertIfNotAlreadySize( this.updatedPriceArr,0);
                           }
                           else{
                               var lst3 = kdCopy[i].prices[0] % 1000;
                               var upperLmt = kdCopy[i].prices[0] + (1000 - lst3);
                               this.updatedPriceArr = this.insertIfNotAlreadySize( this.updatedPriceArr,(upperLmt-1000) );
                           }
                            */
                        lclProcessedHolder.push(kdCopy[i]);
                        //                        this.serviceKurtiDisplay.push(kdCopy[i]);
                        break;
                    }
                }
            }

            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***price filter


        //sizeFilter
        var kdCopy = this.serviceKurtiDisplay;
        lclProcessedHolder = [];
        if (selSizes.length != 0) {
            //   this.updatedSizeArr = [];
            for (var i in kdCopy) {
                var flg = false;
                for (var j in selSizes) {
                    flg = false;
                    for (var k in kdCopy[i].sizes) {
                        if (selSizes[j] == kdCopy[i].sizes[k]) {
                            flg = true;
                        }
                        else {
                        }
                    }//*** k
                    if (flg == false) {
                        break;
                    }
                }//*** j
                if (flg) {

                    // this.updatedSizeArr = this.insertIfNotAlreadyTwoArr(this.updatedSizeArr, kdCopy[i].sizes);
                    lclProcessedHolder.push(kdCopy[i]);
                    //this.serviceKurtiDisplay.push(kdCopy[i]);
                }
            }//*** i
            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***sizeFilter

        //ppFilter
        var kdCopy = this.serviceKurtiDisplay;
        lclProcessedHolder = [];
        if (selPP.length != 0) {
            for (var i in kdCopy) {
                var flg = false;
                for (var j in selPP) {
                    flg = false;
                    for (var k in kdCopy[i].print_pattern) {
                        if (selPP[j] == kdCopy[i].print_pattern[k]) {
                            lclProcessedHolder.push(kdCopy[i]);
                            flg = true;
                            break;
                        }
                    }//*** k
                    if (flg == true) {
                        break;
                    }
                }//*** j
                
            }//*** i
            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***ppFilter

        //pFilter
        var kdCopy = this.serviceKurtiDisplay;
        var lclProcessedHolder = [];
        if (selP.length != 0) {
            for (var i in kdCopy) {//kdCopy
                for (var j in selP) {//priceArrs
                    if (kdCopy[i].pattern == selP[j]) {
                        lclProcessedHolder.push(kdCopy[i]);
                        //                        this.serviceKurtiDisplay.push(kdCopy[i]);
                        break;
                    }
                }
            }
            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***pFilter

        //sleeveFilter
        var kdCopy = this.serviceKurtiDisplay;
        var lclProcessedHolder = [];
        if (selSleeve.length != 0) {
            // this.updatedSleeveArr = [];
            for (var i in kdCopy) {//kdCopy
                for (var j in selSleeve) {//priceArrs
                    if (kdCopy[i].sleeve == selSleeve[j]) {
                        // this.updatedSleeveArr = this.insertIfNotAlreadySize(this.updatedSleeveArr, (kdCopy[i].sleeve));
                        lclProcessedHolder.push(kdCopy[i]);
                        //                        this.serviceKurtiDisplay.push(kdCopy[i]);
                        break;
                    }
                }
            }
            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***sleeveFilter

        //neckFilter
        var kdCopy = this.serviceKurtiDisplay;
        var lclProcessedHolder = [];
        if (selNeck.length != 0) {
            // this.updatedNeckArr = [];
            for (var i in kdCopy) {//kdCopy
                for (var j in selNeck) {//priceArrs
                    if (kdCopy[i].neck == selNeck[j]) {
                        //  this.updatedNeckArr = this.insertIfNotAlreadySize(this.updatedNeckArr, (kdCopy[i].neck));
                        lclProcessedHolder.push(kdCopy[i]);
                        //                        this.serviceKurtiDisplay.push(kdCopy[i]);
                        break;
                    }
                }
            }

            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***neckFilter

        //fabricFilter
        var kdCopy = this.serviceKurtiDisplay;
        var lclProcessedHolder = [];
        if (selFabric.length != 0) {
            // this.updatedNeckArr = [];
            for (var i in kdCopy) {//kdCopy
                for (var j in selFabric) {//priceArrs
                    if (kdCopy[i].fabric == selFabric[j]) {
                        lclProcessedHolder.push(kdCopy[i]);
                        break;
                    }
                }
            }

            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***fabricFilter

        //occFilter
        var kdCopy = this.serviceKurtiDisplay;
        lclProcessedHolder = [];
        if (selOcc.length != 0) {
            for (var i in kdCopy) {
                var flg = false;
                for (var j in selOcc) {
                    flg = false;
                    for (var k in kdCopy[i].occasion) {
                        if (selOcc[j] == kdCopy[i].occasion[k]) {
                             lclProcessedHolder.push(kdCopy[i]);
                            flg = true;
                            break;
                        }
                        else {
                        }
                    }//*** k
                    if (flg == true) {
                        break;
                    }
                }//*** j
               
            }//*** i
            this.serviceKurtiDisplay = lclProcessedHolder;
        }
        //***occFilter
        return landingFilter;
    },
    'updateArrays': function () {
        this._selPrices = this.pruneArr(this._selPrices, this.priceArr);
        this._selSizes = this.pruneArr(this._selSizes, this.sizeArr);
        this._selPP = this.pruneArr(this._selPP, this.ppArr);
        this._selP = this.pruneArr(this._selP, this.pArr);
        this._selSleeve = this.pruneArr(this._selSleeve, this.sleeveArr);
        this._selNeck = this.pruneArr(this._selNeck, this.neckArr);
        this._selFabric = this.pruneArr(this._selFabric,this.fabricArr);
        this._selOcc = this.pruneArr(this._selOcc,this.occArr);

        return landingFilter;
    },
    'pruneArr': function (_arr, curRange) {
        var present;
        for (var i = _arr.length;i>=0;i--) {
           // for (var i in _arr) {
            present = false;
            for (var j in curRange) {
                if (_arr[i] == curRange[j]) {
                    present = true;
                    break;
                }
            }
            if (!present) {
               var x =  _arr.splice(i, 1);
            }
        }

        return _arr;

    }




}//***root