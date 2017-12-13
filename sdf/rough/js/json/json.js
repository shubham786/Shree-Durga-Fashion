console.log('-----inside json.js-------');

var data = '{"records":[{"name":"shubham","age":"23"}'+
            ',{"name":"rahul","age":"34"}]}';


data_in_obj = JSON.parse(data);//string to object
obj_to_string = JSON.stringify(data_in_obj); //object to string

console.log(typeof(data));
console.log(typeof(data_in_obj));
console.log(typeof(obj_to_string));
console.log(data);
console.log(data_in_obj.records[1].name);