var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
	.addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}
document.addEventListener("keypress", function(event) {
    sound(event.key);
    // animation(event.key);
    // if(!button) return;
    });

function sound(key) {
        switch (key) {
            case "W":
            var sound1 = new Audio("sound/1.mp3");
            // animation(key)
            sound1.play();
            animation(key)
            break;
        
            case "A":
            var sound2 = new Audio("sound/2.mp3");
            // animation(key)
            sound2.play();
            animation(key)
            break;
        
            case "S":
            var sound3 = new Audio('sound/3.mp3');
            // animation(key)
            sound3.play();
            animation(key)
            break;
        
            case "D":
            var sound4 = new Audio('sound/10.mp3');
            // animation(key)
            sound4.play();
            animation(key)
            break;
        
            case "J":
            var sound5 = new Audio('sound/5.mp3');
            // animation(key)
            sound5.play();
            animation(key)
            break;
        
            case "K":
            var sound6 = new Audio('sound/6.mp3');
            // animation(key)
            sound6.play();
            animation(key)
            break;
        
            case "L":
            var sound7 = new Audio('sound/7.mp3');
            // animation(key)
            sound7.play();
            animation(key)
            break;
            //  if (!button) return;           
           
            default: console.log(key);
        }
        }
        function animation(currentKey) {
            var activeButton = document.querySelector("." + currentKey);
            
            activeButton.classList.add("animation");
            
            setTimeout(function() {
                activeButton.classList.remove("animation");
            }, 100);
            }
            
            
