$( document ).ready(function() {
    console.log( "ready!" );
    // $(".single-gallery-item").click(function(){
    //     var test = $(this).attr('data-wow-delay');
    //     console.log("clicked");
    //     console.log(test);
    // });


    $(".eat-wise").click(function() {
        window.location.href = "https://github.com/davidma-cpu/eat-wise";
    })

    $(".reading-list-app").click(function() {
        window.location.href = "https://mighty-shore-93875.herokuapp.com";
    })

    $(".reading-list-github").click(function() {
        window.location.href = "https://github.com/davidma-cpu/react-reading-list";
    })

    $(".commandline-github").click(function() {
        window.location.href = "https://github.com/davidma-cpu/constructor-word-guess/blob/master/index.js";
    })

    $(".books-app").click(function() {
        window.location.href = "https://infinite-mesa-86642.herokuapp.com/";
    })

    $(".books-github").click(function() {
        window.location.href = "https://github.com/davidma-cpu/google-books-search";
    })

    $(".bikeshare-github").click(function() {
        window.location.href = "https://github.com/davidma-cpu/bikeshare";
    })

    
    $("#contact_submit").click(function() {
        event.preventDefault;
        var address = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var body = document.getElementById("message").value;

        window.open('mailto:davidm989@gmail.com');
        // console.log(address);
        // console.log(subject);
        // console.log(body);
        // console.log("CLICKED SUBMIT");
    })
});