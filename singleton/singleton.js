//singlton
(function(win, doc){
    var CircleSingleton = (function(){
       var instance;
       
       function init(){
           var _circle = [];
           var _stage = doc.querySelector(".adv");
           
           function _position(circle, left, top){
               circle.style.left = left+"px";
               circle.style.top = top+"px";
           }
           
           function create(left,top){
               var circle = doc.createElement("div");
               _position(circle, left, top);
               circle.className = "circle";
    
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
           var circle = cg.create(e.pageX-25, e.pageY-25);
           cg.add(circle);
        });
    });
    
})(window,document);