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

    setInterval(characterLimit, 600);
    $('#get-room').on('submit',function (event) {
        console.log("button has been clicked")
        //console.log(window.parent.document.getElementById("bioframe").getAttribute("class"))
        // window.parent.location.pathname = "/bio/"+window.location.href.toString().split(window.location.host)[1].split("/")[2]
        window.parent.document.getElementById("bioframe").setAttribute("src","/bio/"+window.location.href.toString().split(window.location.host)[1].split("/")[2])
        window.parent.document.getElementById("bioframe").setAttribute("style","visibility: visible;width:600px;height:950px;padding-right: 0px;top:20%;")
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
        path_name : window.location.pathname,
        target : document.getElementById('header').innerText
        } );
        $('.emoji-wysiwyg-editor').html("");
        const msgElem = $('#truth');
        msgElem.text("");
    } );

    // this my response displays the messages a user sends
    socket.on('message_received', function(data) {
        console.log(data);

        if(data.user == "character_limit_error"){
            const msgElem = $('#truth');
            msgElem.text("Character limit exceeded by (" + data.exceeded + ") characters. Only ("+data.limit+") characters allowed.");
            msgElem.css("color", "red");
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

function characterLimit(){
    request_data = $('.emoji-wysiwyg-editor').html();
    $.ajax({
        type: "POST",
        url: "/character_limit",
        cache: false,
        data:  request_data,
        success: data => {    
            // check what kind of error is it. 
            if(!data["Exceeded"]){
                const msgElem = $('#truth');
                msgElem.text("Remaining limit of (" + data["Success"] + ") characters.");
                msgElem.css("color", "green");

            }else if(data["Exceeded"]){
                const msgElem = $('#truth');
                msgElem.text("Character limit exceeded by (" + data["Exceeded"] + ") characters. Only (" + data["limit"] + ") characters allowed.");
                msgElem.css("color", "red");
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log("error");
        }
    });

    return true;
}

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