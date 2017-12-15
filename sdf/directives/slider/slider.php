<link href='./sdf/directives/slider/slider.css' rel='stylesheet'>

<div class='container' style='position:relative;'>
    <div class='row fill  pm0'>

        <div class=' col-xs-12 col-sm-10 col-sm-offset-1' id='sliderId'  style='height:100%;position:relative;'>
            <div class='  test pm0' id='hh' style='height:100%;
                            border:solid 2px lightgray;
                         background-image:url("./sdf/images/website/slider/{{sliderImgNo}}.jpg");
                         background-size:100% 100%;
                         '></div>

            <div class='col-xs-12' id='hh2' style='margin-top:200px;position:absolute;left:0;top:0;'>

                <div class='col-xs-2  csr_ptr pmrl0 ' ng-click='slideLeft()'>
                    <img ng-src='./sdf/images/website/misc/slider-left.png' />
                </div>

                <div class='col-xs-2 pull-right  csr_ptr' ng-click="slideRight()" style='padding-right:0;margin-right:0;'>
                    <img class='pull-right' ng-src='./sdf/images/website/misc/slider-right.png' />
                </div>

            </div>
        </div>
    </div>
</div>
<!--  <div class='row' >
    
        <div id="slideshow">
            <img src="http://placehold.it/1024x300/f00/fff&text=First+Image">
            <img src="http://placehold.it/1024x300/0f0/fff&text=Second+Image">
            <img src="http://placehold.it/1024x300/ff0/000&text=Third+Image">
            <img src="http://placehold.it/1024x300/0ff/fff&text=Fourth+Image">
        </div>
    </div> -->
</div>