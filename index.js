let display = document.getElementById("opons");
let result = document.getElementById("opres")

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                result.innerText = '';
                break;
            case '=':
                try{
                    result.innerText = eval(display.innerText);
                } catch {
                    result.innerText = "Error"
                    const audio = new Audio();
                    audio.src = "./src/orb.mp3";
                    audio.play();
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            
                
            default:

                
                display.innerText += e.target.innerText;
        }
    });
})

display.innerText;

const audio = new Audio();
audio.src = "./src/orb.mp3";

