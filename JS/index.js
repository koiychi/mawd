fetch('https://script.google.com/macros/s/WEB_APP_URL/exec')
    .then(response => response.json())
    .then(data => console.log(data));


$(document).ready(function() {
    $("#streak-tag").mouseenter(
        function() {
            $(this).text("Secretary");
        }
    );
    $("#streak-tag").mouseleave(
        function() {
            $(this).text("Attendance");
        }
    );

    $("#archive-tag").mouseenter(
        function() {
            $(this).text("Secretary");
        }
    );
    $("#archive-tag").mouseleave(
        function() {
            $(this).text("Archive");
        }
    );


    


});