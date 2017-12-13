$().ready(function(){
    $('#loginForm').validate({
        errorClass: "jQryValErrClass",
        rules: {
            inputEmail: {
                required: true,
                email:true,
                maxlength:35
            },
            inputPass:{
                required:true,
                minlength:3,
                maxlength:25
            },
            inputConfirmPass:{
                required:true,
                minlength:3,
                maxlength:25,
                equalTo:'#inputPass1'
            }

        },
        messages: {
            inputEmail: {
                required: 'Please provide  mail id.',
                email: 'Incorrect email id',
                maxlength:'Upto 35 characters allowed.'
            },
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
        angular.element('#loginFormContainer').scope().loginFormSuccess();
        angular.element('#loginFormContainer').scope().$apply() ;


    }, 
        
    });
    });