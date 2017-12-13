console.log('-=common services=-');
rootModule.service('s_http', function ($http) {
    this.s_http_fun = function (operation_data, callback) {

        $http({
            method: "POST",
            url: "./sdf/service/php/reply.php",
            data: operation_data
        }).then(
            function success(response) {

                switch (response.data.code) {
                    /* case 201:
                        //console.log('201 called');
                        callback(response);
                        break;
                    case 200:
                        callback(response);
                    break; */
                    default: callback(response);
                }

            }
            ,
            function error(response) {
                console.log(response);
                console.log('ERROR IN ELSE PART OF SERVICE.');
            }
            );//login functionality***

    };
});
rootModule.service('s_local_storage', function ($http) {
    this.array_of_obj = [];
    this.set_lcl_cart = function (id_qty_obj) {
        if (localStorage.getItem('id_clr_size_qty_array_obj') == null) {
            //will be called only first time when the local object(for holding items) is created.
            this.array_of_obj = [];
            console.log('if part');
            this.array_of_obj.push(id_qty_obj);
            this.array_of_obj = JSON.stringify(this.array_of_obj);
            localStorage.setItem("id_clr_size_qty_array_obj", this.array_of_obj);
            console.log(localStorage.getItem('id_clr_size_qty_array_obj'));

        } else {
            console.log('else part');
            this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
            for (i = 0; i < this.array_of_obj.length; i++) {
                //id color size qnty
                for (j = 0; j < this.array_of_obj[i].length; j++) {
                    if (this.array_of_obj[j] == id_qty_obj[j] &&
                        this.array_of_obj[j] == id_qty_obj[j] &&
                        this.array_of_obj[j] == id_qty_obj[j]) {
                        this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
                        this.array_of_obj[i][3] = id_qty_obj[3];
                        this.array_of_obj = JSON.stringify(this.array_of_obj);
                        localStorage.setItem("id_clr_size_qty_array_obj", this.array_of_obj);
                        //console.log(localStorage.getItem('id_clr_size_qty_array_obj'));
                        return;
                    }
                }
            }
            this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
            this.array_of_obj.push(id_qty_obj);
            this.array_of_obj = JSON.stringify(this.array_of_obj);
            localStorage.setItem("id_clr_size_qty_array_obj", this.array_of_obj);
            console.log('%%%%%%%%Final locally stored cart object', localStorage.getItem('id_clr_size_qty_array_obj'));
        }
    }
    this.setQty = function (id, size, qty) {
        console.log('--==Set Size==--');
        this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
        for (i = 0; i < this.array_of_obj.length; i++) {
            //id color size qnty
            for (j = 0; j < this.array_of_obj[i].length; j++) {
                    if (this.array_of_obj[i][0] == id &&//id
                        this.array_of_obj[i][2] == size) {//size
                        this.array_of_obj[i][3] = parseInt(qty) ;
                        this.array_of_obj = JSON.stringify(this.array_of_obj);
                        localStorage.setItem("id_clr_size_qty_array_obj", this.array_of_obj);
                        console.log('updated qty', JSON.parse(this.array_of_obj));
                        return;
                        
                }
            }//*** for loop(j)
        }//*** for loop(i)
    }
    this.get_lcl_cart = function () {
        return JSON.parse(localStorage.getItem("id_clr_size_qty_array_obj"));
    }
    this.set_email = function (email) {
        localStorage.setItem("email", email);
    }
    this.get_email = function () {
        return localStorage.getItem("email");
    }
    this.set_user_id = function (id_cus) {
        localStorage.setItem("userId", id_cus);
    }
    this.get_user_id = function () {
        return localStorage.getItem("userId");
    }
    this.clean = function () {
        localStorage.clear();
    }
    this.clear_lcl_cart = function () {
        localStorage.removeItem("id_clr_size_qty_array_obj");
    }



    //I guess this is to be deleted.
    this.id_exists = function (id) {

        if (localStorage.getItem('id_clr_size_qty_array_obj') == null) {
            return false;
        } else {
            this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
            for (i = 0; i < this.array_of_obj.length; i++) {
                if (this.array_of_obj[i].id == id) {
                    return true;
                }
            }
        }
    }

    this.id_size_exists = function (id, size) {

        if (localStorage.getItem('id_clr_size_qty_array_obj') == null) {
            return false;
        } else {
            this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
            for (i = 0; i < this.array_of_obj.length; i++) {
                if ((this.array_of_obj[i].id == id) && (this.array_of_obj[i].size == size)) {
                    return true;
                }
            }
        }
    }
    this.delete_item = function (item) {
        this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
        for (i = 0; i < this.array_of_obj.length; i++) {
            if (this.array_of_obj[i].id == item.id && this.array_of_obj[i].color == item.color
                && this.array_of_obj[i].size == item.size) {
                this.array_of_obj.splice(i, 1);
                this.array_of_obj = JSON.stringify(this.array_of_obj);
                localStorage.setItem("id_clr_size_qty_array_obj", this.array_of_obj);
                console.log('deleted, updatd array is', JSON.parse(this.array_of_obj));
                return;
            }
        }


    }
    this.change_qty = function (item, dx) {
        this.array_of_obj = JSON.parse(localStorage.getItem('id_clr_size_qty_array_obj'));
        for (i = 0; i < this.array_of_obj.length; i++) {
            if (this.array_of_obj[i][0] == item[0] &&//id
                this.array_of_obj[i][1] == item[1] &&//color
                this.array_of_obj[i][2] == item[2]) {//size
                this.array_of_obj[i][3] = parseInt(this.array_of_obj[i][3]) + dx;
                this.array_of_obj = JSON.stringify(this.array_of_obj);
                localStorage.setItem("id_clr_size_qty_array_obj", this.array_of_obj);
                console.log('updated qty', JSON.parse(this.array_of_obj));
                return;
            }
        }
    }

});