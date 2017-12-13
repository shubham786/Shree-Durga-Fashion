// Validations
console.log('============');
$().ready(function(){
    $('#cartDoorAddVal').validate({
        errorClass: "jQryValErrClass",
        //validClass: "my-valid-class",
        rules: {
            inputName: {
                required: true,
                maxlength:45,
                minlength:2
            },  
            delAdd:{
                required:true,
                maxlength:250,
                minlength:4
            },
            pinCode:{
                required:true,
                number:true,
                maxlength:6,
                minlength:6
            },
            mobNum:{
                required:true,
                maxlength:20,
                minlength:6

            },
            city:{
                required:true,
                minlength:2,
                maxlength:45
            },
            state:{
                 required: true,
            }
           

        },
        messages: {
            inputName: {
                required: 'Please provide  Your Name.',
                maxlength:'Upto 35 characters allowed.',
                minlength:'Please enter a valid name.'
            },
            delAdd: {
                required:'Please provide delivery address.',
                maxlength:'Upto 250 characters allowed.',
                minlength:'Please enter a valid address.'
            },
            pinCode:{
                required:'Please provide pin code.',
                number:'Invalid Pincode.',
                maxlength:'Invalid Pincode.',
                minlength:'Invalid Pincode.'
            },
            mobNum:{
                required:'Please provide mobile number.',
                maxlength:'Maximum of 20 digits allowed.',
                minlength:'Contact number should contain atleast 6 digits.'
            },
            city:{
                required:'Please provide your city.',
                minlength:'Invalid city.',
                maxlength:'Upto 45 characters allowed.'
            },
            state:{
                required:'Please select your state.'
            }
            
             
        },
        success:function(){
        },
         submitHandler: function() { 
        angular.element('#cart_door_pge').scope().deli_add_submit();
        angular.element('#cart_door_pge').scope().$apply() ;


    }, 
        
    });
    });
// ***Validations