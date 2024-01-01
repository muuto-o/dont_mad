var uiController = (function () {

   var DOM = {
    avatar : document.querySelector(".avatar"),
    box : document.querySelector(".box"),
    back : document.querySelector(".back"),
    forward : document.querySelector(".forward"),
    button : document.querySelector(".btn"),
    message : document.querySelector(".message"),
    getBoxWithNumber : function(number){
        return{
            boxWithId : document.querySelector(".box-" + number)
        }
    }
   }

   return {
        getDOM : function(){
            return DOM;
        }
   }
})();

var appController = (function (uiController) {
    
    var DOMStrings = uiController.getDOM();

    var number = 1;

    var moveBack = function(){

        if(number > 1){
            DOMStrings.getBoxWithNumber(number).boxWithId.classList.toggle("avatar");
            DOMStrings.getBoxWithNumber(number - 1).boxWithId.classList.toggle("avatar")
            number--;
            DOMStrings.message.innerHTML = "";
        }else{
            DOMStrings.message.innerHTML = "You cannot move back";
        }
        
    } 

    var moveForward = function(){
        if(number < 23){
            DOMStrings.getBoxWithNumber(number).boxWithId.classList.toggle("avatar");
            DOMStrings.getBoxWithNumber(number + 1).boxWithId.classList.toggle("avatar");
            number++;
            DOMStrings.message.innerHTML = "";
        }else{
            DOMStrings.message.innerHTML = "You cannot move forward";
        }
        
    }

    var moveAvatar = function(){
        DOMStrings.back.addEventListener("click", function(){
            moveBack();
        });
    
        DOMStrings.forward.addEventListener("click", function(){
            moveForward();
        });
    }

    return{
        init : function(){
            console.log("Successfully started");
            moveAvatar();
        }
    }

})(uiController);

appController.init();