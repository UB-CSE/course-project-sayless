$(document).ready(function () {
    $('#autocomplete-3').on('input', function() {
  
        const username = $('#autocomplete-3').val();
        const requestData = {'username': username };
      
        if(username != ""){
            $.ajax({
                type: "POST",
                url: "/search",
                cache: false,
                data: requestData,
                success: data => {   
                    $( "#autocomplete-3" ).autocomplete({
                        //can change this to what we want. 1 DOES NOT DO ANYTHING
                        minLength:2,   
                        delay:500,   
                        source: data
                    });
                }
            });
        }
    });

    $('#block').submit(function () {
    
        const name = $('#autocomplete-3').val();

        const requestData = {'username': name};
    
        if(name != ""){
            console.log(name);
            $.ajax({
                type: "POST",
                url: "/block",
                cache: false,
                data: requestData,
                success: data => {   
                    if(data == "Success"){
                        window.location.pathname = '/';
                    }else if(data == "Invalid"){
                        console.log("Invalid");

                        const msgElem = $('#truth');
                        msgElem.text("Something went wrong contact support");
                        msgElem.css("color", "red");
                    }else{
                        console.log("Error");

                        const msgElem = $('#truth');
                        msgElem.text("Something went wrong contact support");
                        msgElem.css("color", "red");
                    }
                }
            });
        }

        $('#blockUser').attr('class', "collapse hide");

        return false;
    });

    $(".unblock").on('click', function(){
        const requestData = {'username': this.id};

        $.ajax({
            type: "POST",
            url: "/unblock",
            cache: false,
            data: requestData,
            success: data => {   
                if(data == "Success"){
                    window.location.pathname = '/block';
                }else if(data == "Fail"){
                    console.log("Invalid");

                    const msgElem = $('#truth');
                    msgElem.text("Unblocking Failed");
                    msgElem.css("color", "red");
                }else if(data == "Login"){
                    console.log("Need to Log in again");

                    const msgElem = $('#truth');
                    msgElem.text("Need to Log in again");
                    msgElem.css("color", "red");

                    window.location.pathname = '/';
                }else{
                    console.log("Error");

                    const msgElem = $('#truth');
                    msgElem.text("Something went wrong contact support");
                    msgElem.css("color", "red");
                }
            }
        });
    });
});