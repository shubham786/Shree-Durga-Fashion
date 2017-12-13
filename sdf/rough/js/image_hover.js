$(document).ready(function () {

//jQuery

    $("#image1").hover(function(){
        $("#image").animate({left:'200px',opacity:'0.5'},"fast")
    },function(){
        $("#image").animate({left:'0px',opacity:'1'},"fast")
    });

    $("#image").mouseenter(function () {
        //alert('mouse enter');
        console.log('mouse enter');
        $("#lens").show();
    });
    $("#image").mouseleave(function () {
        //alert('mouse leave');
        console.log('mouse leave');
        $("#lens").hide();
    })
   
    $("#image1").hover(function () {
        // document.getElementById("lens").style.display="block";
        $("#lens").show();
    },
        function () {
            $("#lens").hide();
        });

});//parent closing

//javascript    



function myFunction(e) {


    var x = e.clientX;
    var y = e.clientY;
    var df = "jdf";
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
    
    document.getElementById("lens").style.left = (e.clientX - 50).toString() + "px";
    document.getElementById("lens").style.top = (e.clientY - 50).toString() + "px";
};

function myFunction1() {
    document.getElementById("lens").style.width = "0px";
};