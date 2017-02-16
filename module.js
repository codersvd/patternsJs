//Design Pattern Module

(function ( win, doc, $ ) {
    var chatModule = (function () {
        var _me     = "Me: ";
        var _bot    = "Bot: ";
        var _aSaid  = [ "This is a Cyber Chat" ];
        var _msgYes = "Yes, It's a great idea";
        var _msgNo  = "No, It's a not great idea";
        var _stuff  = [
            'Like books',
            'She laughed and the desert sang',
            "I don't like Chinese",
            "She smiled like a sphinx"
        ];
        
        function _echo( msg ) {
            _aSaid.push( "<div>" + msg + "</div>\n" );
            
            var aSaidLength = _aSaid.length;
            var start       = Math.max( aSaidLength - 6, 0 );
            var out         = '';
            
            for ( var i = start; i < aSaidLength; i++ ) {
                out += _aSaid[ i ];
            }
            
            console.log( out );
        }
        
        function talk( msg ) {
            _echo( _me + msg );
        };
        function replayYesNo() {
            var msg = Math.random() > .5 ? _msgYes : _msgNo;
            _echo( _bot + msg );
            
        };
        function saySassyStuff() {
            var msg = _stuff[ Math.floor( Math.random() * _stuff.length ) ];
            _echo( _bot + msg );
        };
        
        return {
            talk,
            replayYesNo,
            saySassyStuff
        };
    })();
    
    if(!win.chatModule){
        win.chatModule = chatModule;
    }
    
    function init() {
        chatModule.talk( "Hello my name is " + Math.random() );
        chatModule.replayYesNo();
        chatModule.replayYesNo();
        chatModule.saySassyStuff();
        chatModule.talk( "Bye" );
    };
    
    setInterval( init, 10000 );
    
})( window, document, jQuery );