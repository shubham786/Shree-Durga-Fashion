var dtlPrdSrvc = {
    //check if id of detailed page is present in selected item list in lcl cart.
    'isIdSelected': function (lclCart, id) {
        for (i in lclCart) {
            if (lclCart[i][0] == id) {
                return true;
                break;
            }
        }
        return false;
    },
    'selectedSizes':function(lclCart,id){
        selectedSizes = [];
        for(i in lclCart){
            if(lclCart[i][0] == id){
                selectedSizes.push(lclCart[i][2]);
            }
        }
        return selectedSizes;

    }

}