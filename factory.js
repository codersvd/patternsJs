var Factory = {
    log: function () {
        var log = "";
        return {
            add: function(message){
                log += message + "\n";
            },
            show: function () {
                console.log(log);
                log = "";
            }
        }
    },
    types:{
        fullTime: function () {

        },
        partTime : function () {

        },
        temporary:function () {

        },
        contractor: function(){

        }
    },
    say: function () {
        this.log.add(this.)
    },
    createStaff : function (type) {
        return new this.types[type]();
    }
};