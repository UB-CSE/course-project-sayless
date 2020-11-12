$(document).ready(function () {
    $('.morediv').scrollTop($('#messages').height()); // send the page to the bottom of the messages
    var socket = io.connect({transports: ['websocket']});
    const sessionId = socket.id;
    socket.on( 'connect', function() {
    socket.emit('join',{
        path_name : window.location.pathname
    });

    socket.emit("store",{sessionId});
    } );
    $('#get-room').on('submit',function (event) {
        console.log("button has been clicked")
        console.log(window.parent.document.getElementById("bioframe").getAttribute("class"))
        window.parent.document.getElementById("bioframe").setAttribute("src","/bio/"+window.location.href.toString().split(window.location.host)[1].split("/")[2])
        // console.log(window.location.href.toString().split(window.location.host)[1].split("/"))
        // window.location.pathname = "/bio/"+window.location.href.toString().split(window.location.host)[1].split("/")[2];
                
        
    event.preventDefault();  
});

    // message sends only when you hit send
    $("#send").click(function() {
        let user_input = $( 'input.message' ).val()
        console.log(user_input);
        socket.emit( 'sending_message', {
        message : user_input,
        path_name : window.location.pathname
        } );
        $('.emoji-wysiwyg-editor').html("");
    } );

    // this my response displays the messages a user sends
    socket.on('message_received', function(data) {
        console.log(data);

        if(data.user.length != 0){
            $('#header').text(data.user);
        }else{
            var split = data.msg.split(":");

            if($('#header').text() == split[0]){
                createlist(split[1], true);
            }else{
                createlist(split[1], false);
            }

            $('.morediv').scrollTop($('#messages').height());
        }
    });
});


    
function createlist(elem, received){
    var div = document.getElementById("messages");
    var p = document.createElement("p");

    if(received){
        p.setAttribute("class", "receivedmessage");
    }else{
        p.setAttribute("class", "sentmessage");
    }

    p.appendChild(document.createTextNode(elem));
    div.appendChild(p);
}