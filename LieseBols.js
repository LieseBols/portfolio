var main = function () {
  "use strict";

  var tonen = 1;
  
  $(".koken img").on("mouseover", function () {
    	if (tonen === 1) {$(".popup1").removeClass("hidden");}
    });
  $(".koken img").on("mouseout", function(){
  		$(".popup1").addClass("hidden");
  	});



  $(".grafisch img").on("mouseover", function () {
    	if (tonen === 1) {$(".popup2").removeClass("hidden");}
    });
  $(".grafisch img").on("mouseout", function(){
  		$(".popup2").addClass("hidden");
  	});



  $(".reizen img").on("mouseover", function () {
    	if (tonen === 1) {$(".popup3").removeClass("hidden");}
    });
  $(".reizen img").on("mouseout", function(){
  		$(".popup3").addClass("hidden");
  	});

$(".CV").on("click", function(){
    $(".popup6").removeClass("hidden"); 
  });
$("button").on("click", function(){
    $(".popup6").addClass("hidden"); 
  });
  	
$(".CP").on("click", function(){
    $(".popup5").removeClass("hidden"); 
  });
$("button").on("click", function(){
    $(".popup5").addClass("hidden"); 
  });

};

$("document").ready(main);