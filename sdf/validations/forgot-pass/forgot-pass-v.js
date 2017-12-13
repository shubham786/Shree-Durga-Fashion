$().ready(function(){
    $('#forgot-pass').validate({
        rules: {
           
            pass:{
                required:true,
                minlength:3,
                maxlength:25
            },
            confirmPass:{
                required:true,
                equalTo:'#pass'
            }

        },
        messages: {
         
            pass:{
                required:'Please provide password.',
                length:'Password length should be 3 characters.',
                maxlength:'Upto 25 characters allowed.'
            },
            confirmPass:{
                 required:'Please provide confirm password.',
                 minlength:'Password length should be 3 characters.',
                equalTo:'Passwords do not match.',
                maxlength:'Upto 25 characters allowed.'
            }
        },
        success:function(){
        },
         submitHandler: function() { 
        angular.element('#forgot-pass-container').scope().submit();
        angular.element('#forgot-pass-container').scope().$apply() ;


    }, 
        
    });
    });