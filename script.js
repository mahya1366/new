$(document).ready(function(){
    $(".pass").keyup(function(){
    let value=$(".pass").val().toLowerCase();
    $("tbody tr").filter(function(){
        $(this).toggle($(this).text().indexOf(value)>-1);
    })
})
})