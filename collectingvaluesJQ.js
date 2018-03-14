$('#input').on('change', function() {
    var val;
    val = $("#input").val();
    h1 = $(".articles").children("h1");
    h1.text(val);// Your code goes here!
});
