
$("#splash").on("click", function(){
    console.log("User clicked splash.");
    $("#splash").fadeTo(2000, 0, function(){
        console.log("Fade splash.");
        $("#splash").remove();
    });
});



function wait(seconds){
    setTimeout(seconds * 1000);
}