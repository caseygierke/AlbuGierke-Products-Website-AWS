
class Beat{
    constructor(audioSource) {
        this.audio = new Audio(audioSource);
	}

	playSound = () => {
        // This line allows it to play again before the previous one finishes
        this.audio.currentTime = 0;
		this.audio.play();
	}
}

class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.createTransitionEndListener();
    }

    createTransitionEndListener = () => {
        this.element.addEventListener("transitionend", ()=>{
            this.deselect();
        })
    }

    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    // Select function to set the background color and boxShadow
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
        this.element.style.transition = 'all 0.2s';
    }

    // Deselect function to reset background color and boxShadow
    deselect = () => {
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = `none`;
    }
}