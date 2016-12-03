//singlton
var MyClassSinglton =  function () {
    if(MyClassSinglton.instance) {
        return MyClassSinglton.instance;
    }
    MyClassSinglton.instance = this;

    //properties
    this.state = true;
};

MyClassSinglton.prototype = {
  start: function(){
      return this;
  }
};

//check
var check1Singlton = new MyClassSinglton();
var check2Singlton = new MyClassSinglton();
console.log(check1Singlton === check2Singlton); //return true

//change properties
check2Singlton.state = false; //check1Singlton.state  = false
console.log(check1Singlton.start(), check1Singlton.start());
check1Singlton.state = true; //check2.state  = true
console.log(check1Singlton.start(), check1Singlton.start());

/*
* without singlton
*/

var MyClassNotSinglton =  function () {
    //properties
    this.state = true;
};

MyClassNotSinglton.prototype = {
    start: function(){
        return this;
    }
};

//check
var check1NotSinglton = new MyClassNotSinglton();
var check2NotSinglton = new MyClassNotSinglton();
console.log(check1NotSinglton === check2NotSinglton); //return false

//change properties
check2NotSinglton.state = false;
console.log(check1NotSinglton.start(), check2NotSinglton.start());
check1NotSinglton.state = false;
check2NotSinglton.state = true;
console.log(check1NotSinglton.start(), check2NotSinglton.start());
