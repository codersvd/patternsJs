//Factory
(function(win, doc){
    var RedCircle = function(){
        this.item = doc.createElement("div");
        this.item.className = "circle";
    };
    
    var BlueCircle = function(){
        this.item = doc.createElement("div");
        this.item.style.background = "blue";
        this.item.className = "circle";
    };
    
    //factory
    var CircleFactory = function(){
        this.create = function(color){
            if(color === 'blue'){
                return new BlueCircle();
            }
            else{
                return new RedCircle();
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
           
           function _position(circle, left, top){
               circle.style.left = left+"px";
               circle.style.top = top+"px";
           }
           
           function create(left,top, color){
               var circle = _cf.create(color).item;
               _position(circle, left, top);
    
               console.log( circle );
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