var urlService = {
    'trnsformUrl':function(url){
        var url = url.split("url/");
        var operation = url[1][0];
        url[1] = url[1].slice(2);// (/0)/somethingEncodedByPhp
        
        var letter = '';
        var result = [];
         for (i = 1; i < url.length; i++) {
            if (i == url.length - 1) {
                letter += url[i];
            } else {
                letter += url[i] + 'url/';
            }
        } 

        result[0] = operation;
        result[1] = letter;
        return result;
    }
};