const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName:{type:String,required:"This is a required field."},
    email:{type:String},
    mobile:{type:String},
    city:{type:String}
});
// Check email format
employeeSchema.path('email').validate((email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
},'Invalid e-mail');

mongoose.model('Employee',employeeSchema);