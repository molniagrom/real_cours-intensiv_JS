let category1 = document.getElementById("sports-videos");
let category2 = document.getElementById("education-videos");

export function renderButtons1(buttonDetails) {
    const button = document.createElement("button");
    button.classList.add("reaction");
    button.innerText = buttonDetails.text;
    category1.append(button);
    return button; 
}

export function renderButtons2(buttonDetails) {
    const button = document.createElement("button");
    button.classList.add("reaction");
    button.innerText = buttonDetails.text;
    category2.append(button);
    return button; 
}