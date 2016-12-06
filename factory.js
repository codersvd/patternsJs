var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

var Factory = {
    types:{
        fullTime: function () {
            return new FullTime();
        },
        partTime : function () {
            return new PartTime();
        },
        temporary:function () {
            return new Temporary();
        },
        contractor: function(){
            return new Contractor();
        }
    },
    createStaff: function (type) {
        return new this.types[type]();
    }
};

var f = Factory;
var staff = [];

staff.push(f.createStaff("fullTime"));
staff.push(f.createStaff("partTime"));
staff.push(f.createStaff("temporary"));
staff.push(f.createStaff("contractor"));


for (var i = 0, len = staff.length; i < len; i++) {
    console.log(staff[i]);
}
