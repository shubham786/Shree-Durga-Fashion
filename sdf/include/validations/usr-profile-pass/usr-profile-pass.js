// Validations
$().ready(function(){
    $('#changePassForm').validate({
        errorClass: "jQryValErrClass",
        //validClass: "my-valid-class",
        rules: {
            inputPass:{
                required:true,
                minlength:3,
                maxlength:25
            },
            inputConfirmPass:{
                required:true,
                minlength:3,
                maxlength:25,
                equalTo:'#inputPass'
            },
            existingPass:{
                required:true,
                minlength:3,
                maxlength:25
            },
           

        },
        messages: {
            inputPass:{
                required:'Please provide password.',
                length:'Password length should be 3 characters.',
                maxlength:'Upto 25 characters allowed.'
            },
             inputConfirmPass:{
                 required:'Please provide confirm password.',
                 minlength:'Password length should be 3 characters.',
                equalTo:'Passwords do not match.',
                maxlength:'Upto 25 characters allowed.'
            }
            
             
        },
        success:function(){
        },
         submitHandler: function() { 
        angular.element('#usrPrflPge').scope().updatePass();
        angular.element('#usrPrflPge').scope().$apply() ;


    }, 
        
    });
    });
// ***Validations