/* $(document).ready(Function{alert("Jquery esta funcionando!!")

}) */

$(".link").mouseover(function() {
    $(this).css("font-size","30px")
    
})

$(".link").mouseout(function() {
    $(this).css("font-size","20px")
    
})

$(".parrafo").mouseover(function() {
    $(this).css("color","purple")
    
})
$(".parrafo").mouseout(function() {
    $(this).css("color","rgb(97, 93, 93)")
    
})

$(".parrafo1").mouseover(function() {
    $(this).css("color","rgb(19, 83, 112)")
    
})
$(".parrafo1").mouseout(function() {
    $(this).css("color","rgb(97, 93, 93)")
    
})


$(".parrafo2").mouseover(function() {
    $(this).css("color"," rgb(230, 106, 61)")
    
})
$(".parrafo2").mouseout(function() {
    $(this).css("color","rgb(97, 93, 93)")
    
})


$(".parrafo3").mouseover(function() {
    $(this).css("color"," rgb(42, 107, 77)")
    
})
$(".parrafo3").mouseout(function() {
    $(this).css("color","rgb(97, 93, 93)")
    
})

$(".parrafo5").mouseover(function(evento){
    alert("La siguiente lista contiene selectores y eventos Jquery")
})


$(".opcion1").click(function(evento){
    alert("HAS HECHO CLIK")
})

$(".opcion2").click(function(){
    $(this).css("background","pink")
    
})

$(".opcion2").dblclick(function(){
    $(this).css("background","transparent")
    
}) 

$(".opcion3").click(function(){
    $(this).css("font-size","25px")
    
})

$(".opcion3").dblclick(function(){
    $(this).css("font-size","18px")
    
}) 
$(".opcion4").click(function(){
    $(this).css("color","rgb(89, 201, 95)")
    
})

$(".opcion4").dblclick(function(){
    $(this).css("color","rgb(97, 93, 93)")
    
}) 

$(".opcion5").click(function(){
    $(this).css("font-family","segoe print")
    
})

$(".opcion5").dblclick(function(){
    $(this).css("font-family","Patrick Hand,cursive")
    
}) 

$(".opcion6").click(function(){
    $(this).css("text-align","center")
    
})

$(".opcion6").dblclick(function(){
    $(this).css("text-align","left")
    
}) 


$(".opcion7").click(function(){
    $(this).fadeToggle("3000")
    
})

$(".opcion8").dblclick(function(){
    $(".opcion7").fadeIn("3000")
    
})

$(".opcion8").click(function(){
    $(this).animate ({opacity: "0.1", left: "+=400",fontSize:'1em',width: "200"}, 1200)
    .animate({opacity: "0.4", top: "+=160", height: "20", width: "80",fontSize:'0.5em'}, "slow")
    .animate({opacity: "1", left: "0", width: "260"}, "slow")
    .animate({top: "0",width: "900",fontSize:'18px'}, "fast")
    .slideUp()
    .slideDown(900)
    return false;
    }) 


    $(".opcion9").click(function(){
        $(this).css("letter-spacing","4px")
        
    })
    
    $(".opcion9").dblclick(function(){
        $(this).css("letter-spacing","1px")
        
    }) 


    $(".opcion0").click(function(evento){
        alert("fin de lista")
        
    })
    


