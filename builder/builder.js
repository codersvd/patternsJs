//builder
(function(win, doc){
    function Circle(){
        this.item = doc.createElement("div");
        this.item.className = "circle";
    }

    Circle.prototype.move = function(left, top){
            this.item.style.left = left+"px";
            this.item.style.top = top+"px";
    };
    Circle.prototype.color = function(clr){
            this.item.style.background = clr;
    };
    Circle.prototype.get = function(){
            return this.item;
    };

    function RedCircleBuilder(){
        this.item = new Circle();
        this.init();
    }
    RedCircleBuilder.prototype.init = function(){
        //nothing
    };
    RedCircleBuilder.prototype.get = function(){
        return this.item.get();
    };
    
    function BlueCircleBuilder(){
        this.item = new Circle();
        this.init();
    }
    BlueCircleBuilder.prototype.get = function(){
        return this.item.get();
    };
    BlueCircleBuilder.prototype.init = function(){
        this.item.color("blue");
    };
    
    //factory
    var CircleFactory = function(){
        this.types = {};
        this.create = function(type){
            return new this.types[type]();
        }
        
        this.register = function(type, cls){
            if(cls.prototype.init && cls.prototype.get){
                this.types[type] = cls;
            }
        }
    };
    
    
    //singleton
    var CircleSingleton = (function(){
       var instance;
       
       function init(){
           var _circle = [];
           var _stage = doc.querySelector(".adv");
           var _cf = new CircleFactory();
           _cf.register("red", RedCircleBuilder);
           _cf.register("blue", BlueCircleBuilder);
           
           function _position(circle, left, top){
               circle.style.left = left+"px";
               circle.style.top = top+"px";
           }
           
           function create(left,top, color){
               var circle = _cf.create(color).get();
               _position(circle, left, top);
               
               return circle;
           }
           
           function add(circle){
               _stage.append(circle);
               _circle.push(circle);
           }
           
           function index(){
               return _circle.length;
           }
           
           return {
               index,
               create,
               add
           };
       }
       
       return {
         getInstance: function(){
             if(!instance){
                 instance = init();
             }
             
             return instance;
         }
       };
    })();
    
    doc.addEventListener("DOMContentLoaded", function(){
        var stage = doc.querySelector(".adv");
        stage.addEventListener("click", function(e){
           var cg = CircleSingleton.getInstance();
           var circle = cg.create(e.pageX-25, e.pageY-25, Math.random()>.5 ? "red" : 'blue');
           cg.add(circle);
        });
    });
    
})(window,document);