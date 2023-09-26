const button = document.querySelector(".btn")

button.addEventListener('click',()=>{
    function getRandomHexColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }
      // Example usage:
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    document.querySelector(".colorcode").innerHTML = randomColor
})


const copyText = document.querySelector(".colorcode")

function copy_Text(textElement){

    if(!textElement){
        return
    }

    const elementText = textElement.innerHTML
    const inputElement = document.createElement('input')
    inputElement.setAttribute('value',elementText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy')
    document.body.removeChild(inputElement)
}

document.querySelector('.copy-text-btn').onclick = function(){
    copy_Text(copyText)
    
}