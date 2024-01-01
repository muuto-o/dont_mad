var uiController = (function () {

   var DOM = {
    avatar : document.querySelector(".avatar"),
    box : document.querySelector(".box"),
    back : document.querySelector(".back"),
    message : document.querySelector(".message"),
    button : document.querySelector(".dice_btn"),
    restartBtn : document.querySelector(".restart_btn"),
    dice : document.querySelector(".dice"),
    getBoxWithNumber : function(position){
        return document.querySelector(".box-" + position);
    }
   }

   return {
        getDOM : function(){
            return DOM;
        }
   }
})();


var movementController = (function () {
    var DOMStrings = uiController.getDOM();
    var startingPoint = 1;
    var endingPoint = 70;
    var restartMessage = "Тоглоом эхэллээ";
    var winningMessage = "Та яллаа";
    var emptyString = "";

    var position = 1;

    var restart = function(){
        DOMStrings.getBoxWithNumber(position).classList.toggle("avatar");
        DOMStrings.getBoxWithNumber(startingPoint).classList.toggle("avatar");
        position = startingPoint;
        DOMStrings.message.innerHTML = restartMessage;
    }

    var moveForward = function(number){
        if(position + number <= endingPoint){
            DOMStrings.getBoxWithNumber(position).classList.toggle("avatar");
            DOMStrings.getBoxWithNumber(position + number).classList.toggle("avatar");
            position += number;
            DOMStrings.message.innerHTML = emptyString;
        }else{
            DOMStrings.message.innerHTML = winningMessage;
        }
        
    }

    return{
        restart : function(){
            restart();
        },
        moveForward : function(number){
            moveForward(number);
        },
        getRandomNumber : function(){
            return Math.floor(Math.random() * 6) + 1;
        }
    }

})();

var appController = (function (uiController, movementController) {
    
    
    var eventListeners = function(){
        var DOMStrings = uiController.getDOM();

        DOMStrings.button.addEventListener("click", function(){

            var diceNumber = movementController.getRandomNumber();
            DOMStrings.dice.src = "dice-" + diceNumber + ".png";
            movementController.moveForward(diceNumber);
            
        });

        DOMStrings.restartBtn.addEventListener("click", function(){
            movementController.restart();
            DOMStrings.dice.src = "dice-0.png";
        });

    }

    return{
        init : function(){
            console.log("Successfully started");
            eventListeners();
        }
    }

})(uiController, movementController);

appController.init();