//singlton
(function(win, doc){
    var CircleSingleton = (function(){
       var instance;
       
       function init(){
           var _circle = [];
           var _stage = doc.querySelector(".adv");
           
           function _position(circle, lef, top){
               circle.style.left = left;
               circle.style.top = top;
           }
           
           function create(){
               var circle = "<div class='circle'></div>";
               _position(circle, left, top);
               return circle;
           }
           
           function add(circle){
               _stage.appendChild(circle);
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
})(window,document);