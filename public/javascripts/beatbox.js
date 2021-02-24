document.querySelector("body").style.backgroundImage = 'url(../images/assets/beatbox-background.jpeg)';

let beats = {
    // These numbers are code for the keyboard keys
    "65": {
        beat: new Beat("../sounds/Piano Chord 331.mp3"),
        button: new Button('#00fffe',65)
    },
    "83": {
        beat: new Beat("../sounds/Piano Chord 209.mp3"),
        button: new Button('#00fffe',83)
    },
    "68": {
        beat: new Beat("../sounds/Piano Chord 208.mp3"),
        button: new Button('#00fffe',68)
    },
    "70": {
        beat: new Beat("../sounds/Drum Sticks Hit 3.mp3"),
        button: new Button('#FF00FF',70)
    },
    "71": {
        beat: new Beat("../sounds/Drum Snare Roll.mp3"),
        button: new Button('#FF00FF',71)
    },
    "72": {
        beat: new Beat("../sounds/PREL Musical 57.mp3"),
        button: new Button('#FF00FF',72)
    },
    "74": {
        beat: new Beat("../sounds/Cymbal Suspended 2.mp3"),
        button: new Button('#FF00FF',74)
    },
    "75": {
        beat: new Beat("../sounds/Musical Compos 33.mp3"),
        button: new Button('#FFFFFF',75)
    },
    "76": {
        beat: new Beat("../sounds/Musical Orches 4.mp3"),
        button: new Button('#FFFFFF',76)
    }
}

// Define triggerBeat to play the beat upon a press of key
triggerBeat = (event) => {
    
    // Get keyCode from event
    const keyCode = event.keyCode;
    
    // Check if it is a specified beat
    if(keyCode in beats) {
        
        // Define keyPress
        let keyPress = beats[keyCode];
        // Play the sound
        keyPress.beat.playSound();
        // Show the keyPress
        keyPress.button.select();
    }
}

// Create an event listener
document.addEventListener('keydown', triggerBeat);
