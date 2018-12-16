// Check off specific Todos by clicking 

$("ul").on("click", "li" ,function () {
    $(this).toggleClass("completed")
})
// Click on x to delete todo

$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    e.stopPropagation()
})

$("input").keypress(function(event){
    if (event.which === 13){
        let todoText = $(this).val()
        $(this).val("")
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span> " + todoText + "</li>")
    }
})

$(".fa-edit").click(function(){
    $("input").fadeToggle()
})


