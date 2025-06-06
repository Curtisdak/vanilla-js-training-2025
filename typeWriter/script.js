let paragraph = "Hello, welcome to the typewriter effect demo! Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!Hello, welcome to the typewriter effect demo!"
let contents = ["my name is curtis", "I love coding", "I am ready to learn", "contact me for more"]

const paraEL = document.querySelector("#typewriter");
const title = document.querySelector(".titleEl");
const showParaBtn = document.querySelector("#showParaBtn")

let charIndex = 0;
let contentIndex = 0


const simpleTypeFunc = (text) => {

    if (index < text.length) {
        paraEL.textContent += text.charAt(index)
        index++
        setTimeout(() => simpleTypeFunc(text), 20);
    }
}

const typewriterLoop = () => {
    let currentText = contents[contentIndex]

    if (charIndex < currentText.length) {

        paraEL.textContent += currentText.charAt(charIndex)
        setTimeout(typewriterLoop, 50)
        charIndex++
    } else {
        setTimeout(() => {
            paraEL.textContent = "";
            charIndex = 0
            contentIndex = (contentIndex + 1) % contents.length
            typewriterLoop()

        }, 2000)
    }




    console.log(currentText)
}

showParaBtn.addEventListener("click", () => {
    console.log("is clicked")
    paraEL.textContent = "";
    index = 0;
    typewriterLoop()
    console.log(contents)
})