const mainBody = document.querySelector(".main-container")
const clickBtn = document.querySelector(".btn")
const inputValue = document.querySelector(".input")

clickBtn.addEventListener("click", ()=> {
    if(inputValue.value.trim() === "") {
        alert("Please enter a task before adding it")
        return;
    } else {
        const cancelImg = document.createElement("img")
        cancelImg.src = "./images/cancelBtn.png"

        const divContainer = document.createElement("div")
        mainBody.append(divContainer)

        const uncheckedImg = document.createElement("img")
        uncheckedImg.src = "./images/unchecked-50.png"
        uncheckedImg.style.cursor = "pointer"
        const elementCreated = document.createElement("h2")
        elementCreated.textContent = inputValue.value 
        divContainer.append(uncheckedImg, elementCreated, cancelImg)

        uncheckedImg.style.height = "2.2vh"
        uncheckedImg.style.marginTop = "0.3em"
        uncheckedImg.style.marginRight = "1.5em"
        elementCreated.style.fontWeight = "100"
        elementCreated.style.fontFamily = "Caveat" 
        cancelImg.style.height = "2vh"
  
        cancelImg.classList.add("cancel-img")
        divContainer.classList.add("div-container")

        inputValue.value = ""

        uncheckedImg.addEventListener("click", ()=> {
            if(uncheckedImg.src.includes("unchecked-50.png")) {
                 uncheckedImg.src = "./images/checked.png"
            } else {
                uncheckedImg.src = "./images/unchecked-50.png"
            }         
        })

        cancelImg.addEventListener("click", ()=> {
            divContainer.remove()
        })
    }

})
