<link href='./sdf/pages/detailed-product/detailed-product.css' rel='stylesheet'>
<div style='margin-top:20px;'></div>
<div class='container-fluid ' ng-controller='c_detailed_product'>
    <div class='row  '>
        <div class='col-xs-12 col-md-5  '>
            <div class='col-xs-2 ' style='cursor:pointer ;'>
                <span ng-repeat='x in noOfImages track by $index'>

                    <img class='' id='{{$index+1}}' ng-mouseleave='mouseLeave($index+1)' ng-mouseover='mouseOver($index+1)' ng-click='del($index+1)'
                        alt='loading...' width=50px height=60px ng-src='./sdf/images/products/kurtis/{{single_detailed_kurti[0].id_kurti}}/1/{{single_detailed_kurti[0].colors[0]}}/sm/{{$index+1}}.jpg'
                        style='margin-bottom:10px;' />
                    <img style='display:none;' ng-src='./sdf/images/products/kurtis/{{single_detailed_kurti[0].id_kurti}}/1/{{single_detailed_kurti[0].colors[0]}}/md/{{$index+1}}.jpg'
                        ng-src='./sdf/images/products/kurtis/{{single_detailed_kurti[0].id_kurti}}/1/{{single_detailed_kurti[0].colors[0]}}/lg/{{$index+1}}.jpg'
                    />
                </span>

            </div>
            <div class='col-xs-10' ng-click='imageZoomer()'>
                <img class=' lg-gry-brdr csr_ptr' width=100% height=400px ng-src='./sdf/images/products/kurtis/{{single_detailed_kurti[0].id_kurti}}/1/{{single_detailed_kurti[0].colors[0]}}/md/{{current_img_id}}.jpg'
                    alt='loading...' />
            </div>
        </div>
        <div class='col-xs-12 col-md-7 ' style='margin-top:15px;'>
            <div class='row '>
                <span class='fnt-sz-14'>
                    <strong>Product Name:</strong>
                </span>
                <span class='fnt-sz-12 dtlItmName'> {{single_detailed_kurti[0].name}}</span>
            </div>
            </br>
            <div class='row '>
                <span class='fnt-sz-14'>
                    <strong>Product Desc:</strong>
                </span>
                <span class='fnt-sz-12'> {{single_detailed_kurti[0].product_desc}}</span>
            </div>
            <hr>
            <div class='row '>
                <span class='fnt-sz-14'>
                    <strong>Price: &#8377</span>{{single_detailed_kurti[0].prices[0]}}</strong>
            </div>
            <hr>
            <div class='row ' style='position:absulute;right:0;top:0;'>
                <div class='fnt-sz-14'>
                    <strong>SELECT SIZE:</strong>
                </div>
                <span ng-click='sizeClk(x)' ng-init='' ng-if='single_detailed_kurti[0].qty[$index]>0' id='size_{{x}}' ng-repeat='x in single_detailed_kurti[0].sizes'
                    class="size_btn">
                    {{x}}{{indvQty}}
                </span>
            </div>
            <div style='color:red;' ng-show='noQty'>
                Product Sold Out.
            </div>
            <div style='color:red;' ng-show='size_err_flg'>
                Please select size.
            </div>
            </br>
            <!--
            <span class='rmv_qty' ng-click='rmv_qty()'>-</span>
            <input type='text' class='form-control' style='width:56px;display:inline-block;' placeholder='qty' ng-model='qty' />
            <span class='add_qty' ng-click='add_qty()'>+</span>-->
            </br>
            <div class='text-center'>

                <button ng-click="addToCart()" id='addToCartBtn' class='cstmBtn  bgClrGreenish'>
                    <span ng-show='bagOrCartFlg'>
                        <img width=15px height=15px style='margin-bottom:5px;margin-right:5px;' ng-src='./sdf/images/website/misc/shopping-bag.png'
                        />
                    </span>

                    <span>
                        <img width=18px ng-show='!bagOrCartFlg' height=20px style='margin-bottom:5px;margin-right:5px;' ng-src='./sdf/images/website/misc/arrow-pointing-to-right.png'
                        />
                    </span>
                    {{add_to_cart_btn}}
                </button>
            </div>
        </div>
    </div>


    <!-- imageZoomer -->
    <div id='' class='' ng-show='imgZoomerFlg' style="z-index:201;position:fixed;right:0;bottom:0;width:100%;height:100%;
    border:solid 2px black;background-color:rgba(73, 71, 75, 0.568);">
        <div class=' col-xs-10 col-xs-offset-1 row fill '>
            <div class='  pm0 fill' style="width:100%;">
                <div class='fill ' sytle='position:relative;width:100%;'>
                    <div class='  fill ' style='position:relative;height:94%;width:100%;margin-top:2%;
                    background-size:100% 100%;
                        background-image:url("./sdf/images/products/kurtis/{{single_detailed_kurti[0].id_kurti}}/1/{{single_detailed_kurti[0].colors[0]}}/lg/{{current_img_id}}.jpg")'>
                        <div class='row  pm0' style="position:relative">
                            <div class='col-xs-12  '>
                                <div class='pull-right' style='margin-top:10px;margin-right:0px;'>
                                    <img ng-click='closeZoomer()' class='csr_ptr' width=35px height=35px ng-src='./sdf/images/website/misc/close.png' />
                                </div>
                            </div>
                        </div>

                        <div class='row   pmrl0 ' style='position:relative;margin-top:200px;'>

                            <div class='col-xs-2    '>
                                <img width=35px height=35px ng-click='leftImg()' class=' csr_ptr' ng-src='./sdf/images/website/misc/left-arrow.png' />
                            </div>

                            <div class='col-xs-2  col-xs-offset-8 ' style=''>
                                <div class='pull-right row;' style="margin-right:0 !important;padding-right:0 !important;">
                                    <div class='col-xs-6 col-xs-offset-3'>
                                        <img width=35px class=' csr_ptr' ng-click="rightImg()" height=35px ng-src='./sdf/images/website/misc/right-arrow.png' />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
    <!-- ***imageZoomer -->

    
<div class='row text-center'>
    <i>
        <h2>SIMILAR PICKS</h2>
    </i>
    <div style='border-bottom:1px black solid;'></div>
    <div style='margin-top:3px;border-bottom:1px black solid;'></div>
</div>

    <div class='row'>
        <table style='width:100%;'>
            <tr ng-repeat="kd in dtl_kurti_display" class='col-xs-12 col-sm-6 col-md-4 col-lg-3 ' style='padding:20px;'>
                <div style=''>
                    <td class=' text-center emphasize ' ng-click='detailed_prod(kd.id_kurti)' style='cursor:pointer;background-color:white;border-radius:10px;'>
                        <div class='' style='border:1px solid gray;border-radius:0px;box-shadow: 1px 1px 1px #888888;'>
                            <div>
                                <img style='width:100%;height:230px;border-radius:0px;' ng-src='./sdf/images/products/kurtis/{{kd.id_kurti}}/1/{{kd.colors[0]}}/md/1.jpg'
                                    alt='' />
                            </div>
                            <div class='landingItmPrice'> {{ kd.entry_date | limitTo:10 }}</div>
                            <div class='landingItmPrice'>&#8377; {{ kd.prices[0] }}</div>
                            <div class='landingItmPrice'> {{ kd.id_kurti }}</div>
                            <div class='landingItmName'>{{ kd.name| limitTo:20 }} </div>
                            <!--
                            <div class='landingItmPrice'> {{ kd.sizes }}</div>
                            <div class='landingItmPrice'>PP {{ kd.print_pattern }}</div>
                            <div class='landingItmPrice'>P {{ kd.pattern }}</div>
                            <div class='landingItmPrice'>SLEEVE {{ kd.sleeve }}</div>
                            <div class='landingItmPrice'>NECK {{ kd.neck }}</div>
                            <div class='landingItmPrice'>FABRIC {{ kd.fabric }}</div>
                            <div class='landingItmPrice'>OCCASION {{ kd.occasion }}</div> -->
    
                            <!-- ,id_kurti,sizes,print_pattern,pattern,sleeve,neck,fabric,occasion -->
                            <!-- <div>{{ kd.colors[0] }}</div>-->
    
                        </div>
                    </td>
                </div>
            </tr>
    
        </table>
    </div>

</div>




<div style='padding-bottom:10px;'>
    <hr>
</div>




