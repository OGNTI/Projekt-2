// 2 players 1 device, possibly 1 player against computer
// 2 battlefields, choose where to place units on your side in turns
// first player doesn't see second players battlefield and reverse, only show battlefields after both players played
// different types of units, start with same units, units have health
// get gold from doing damage, buy units/upgrades? with gold
// if lose two times in a row, get steam sale on basic units, chance of survival
// play best of 5 battles


let startUnitsMenu = document.querySelector(".choose-startunits-menu");
let displayNames = document.querySelector(".display-names");
let namesForm = document.querySelector(".get-names-menu");
let playerName1;
let playerName2;
let button = document.querySelector(".set-names");
button.addEventListener("click", getNames);
function getNames() {
    playerName1 = document.querySelector(".player-name1").value;
    playerName2 = document.querySelector(".player-name2").value;
    namesForm.classList.toggle("hidden");
    startUnitsMenu.classList.toggle("hidden");
    displayNames.innerHTML = playerName1;
}

let pikemenPlusButton = document.querySelector(".pikemen .plus-button");
let pikemenMinusButton = document.querySelector(".pikemen .minus-button");
let archerPlusButton = document.querySelector(".archers .plus-button");
let archerMinusButton = document.querySelector(".archers .minus-button");
let cavalryPlusButton = document.querySelector(".cavalry .plus-button");
let cavalryMinusButton = document.querySelector(".cavalry .minus-button");
let nextSelectorButton = document.querySelector(".done-selecting-button");
let finishSelectingButton = document.querySelector(".finish-selecting-button")
let selectedLabel = document.querySelector(".selected-label");
let selectedAmount = 0;
let pikemenAmount = 0;
let archerAmount = 0;
let cavalryAmount = 0;
let selector = 1;
let p1UnitInventory = [];
let p2UnitInventory = [];
pikemenPlusButton.addEventListener("click", selectUnits);
pikemenMinusButton.addEventListener("click", deselectUnits);
archerPlusButton.addEventListener("click", selectUnits);
archerMinusButton.addEventListener("click", deselectUnits);
cavalryPlusButton.addEventListener("click", selectUnits);
cavalryMinusButton.addEventListener("click", deselectUnits);
nextSelectorButton.addEventListener("click", nextSelector);
finishSelectingButton.addEventListener("click", actualGameScreen);

function selectUnits(event) {
    if (selector == 1){
        if (selectedAmount < 3) {
            selectedAmount++;
            selectedLabel.innerHTML = selectedAmount;
            
            let unitType = event.target.getAttribute("data-unit-type");
            let newImage = document.createElement("img");
    
            if(unitType == "Pikemen"){
                pikemenAmount++;
                newImage.setAttribute("id", `${unitType}${pikemenAmount}`);
            }
            else if(unitType == "Archer"){
                archerAmount++;
                newImage.setAttribute("id", `${unitType}${archerAmount}`);
            }
            else if(unitType == "Cavalry"){
                cavalryAmount++;
                newImage.setAttribute("id", `${unitType}${cavalryAmount}`);
            }
            p1UnitInventory.push(unitType);
    
            newImage.setAttribute("src", `./img/${unitType}.png`);
            document.querySelector(".selected-start-units").append(newImage);    
        }
    }
    else if (selector == 2){
        if (selectedAmount < 3) {
            selectedAmount++;
            selectedLabel.innerHTML = selectedAmount;
    
            let unitType = event.target.getAttribute("data-unit-type");
            let newImage = document.createElement("img");
    
            if(unitType == "Pikemen"){
                pikemenAmount++;
                newImage.setAttribute("id", `${unitType}${pikemenAmount}`);
            }
            else if(unitType == "Archer"){
                archerAmount++;
                newImage.setAttribute("id", `${unitType}${archerAmount}`);
            }
            else if(unitType == "Cavalry"){
                cavalryAmount++;
                newImage.setAttribute("id", `${unitType}${cavalryAmount}`);
            }
            p2UnitInventory.push(unitType);
    
            newImage.setAttribute("src", `./img/${unitType}.png`);
            document.querySelector(".selected-start-units").append(newImage);
        }
    }
}

function deselectUnits(event) {
    let unitType = event.target.getAttribute("data-unit-type");
    let element;
    
    if(selector == 1)
    {
        if (selectedAmount > 0) {
            if(unitType == "Pikemen"){
                element = document.getElementById(`${unitType}${pikemenAmount}`);
                pikemenAmount--;
            }
            else if(unitType == "Archer"){
                element = document.getElementById(`${unitType}${archerAmount}`);
                archerAmount--;
            }
            else if(unitType == "Cavalry"){
                element = document.getElementById(`${unitType}${cavalryAmount}`);
                cavalryAmount--;
            }
            element.remove();
            p1UnitInventory.splice(p1UnitInventory.indexOf(unitType), 1);
    
            selectedAmount--;
            selectedLabel.innerHTML = selectedAmount;
        }
    }
    else if(selector == 2)
    {
        if (selectedAmount > 0) {
            if(unitType == "Pikemen"){
                element = document.getElementById(`${unitType}${pikemenAmount}`);
                pikemenAmount--;
            }
            else if(unitType == "Archer"){
                element = document.getElementById(`${unitType}${archerAmount}`);
                archerAmount--;
            }
            else if(unitType == "Cavalry"){
                element = document.getElementById(`${unitType}${cavalryAmount}`);
                cavalryAmount--;
            }
            element.remove();
            p2UnitInventory.splice(p1UnitInventory.indexOf(unitType), 1);
    
            selectedAmount--;
            selectedLabel.innerHTML = selectedAmount;
        }
    }
}

function nextSelector(){
    if (selectedAmount == 3)
    {
        let previousSelected = document.querySelector(".selected-start-units");
        previousSelected.innerHTML = '';
        displayNames.innerHTML = playerName2;
        displayNames.classList.toggle("red");
        displayNames.classList.toggle("blue");
        selector++;
        pikemenAmount = 0;
        archerAmount = 0;
        cavalryAmount = 0;
        selectedAmount = 0;
        selectedLabel.innerHTML = selectedAmount;
        nextSelectorButton.classList.toggle("hidden");
        finishSelectingButton.classList.toggle("hidden");
    }
}

let actualGameMenu = document.querySelector(".actual-game");
let player1DisplayName = document.querySelector(".player1-side-name");
let player2DisplayName = document.querySelector(".player2-side-name");
let p1PikemenAmount = 0;
let p1ArcherAmount = 0;
let p1CavalryAmount = 0;
let p2PikemenAmount = 0;
let p2ArcherAmount = 0;
let p2CavalryAmount = 0;

function actualGameScreen(){
    if (selectedAmount == 3)
    {
        startUnitsMenu.classList.toggle("hidden");
        actualGameMenu.classList.toggle("hidden");
        player1DisplayName.innerHTML = playerName1;
        player2DisplayName.innerHTML = playerName2;
        for (let index = 0; index < p1UnitInventory.length; index++) {
            let newImage = document.createElement("img");
            unitType = p1UnitInventory[index];
            if(unitType == "Pikemen"){
                p1PikemenAmount++;
                newImage.setAttribute("id", `${unitType}${p1PikemenAmount}`);
            }
            else if (unitType == "Archer"){
                p1ArcherAmount++;
                newImage.setAttribute("id", `${unitType}${p1ArcherAmount}`);
            }
            else if (unitType == "Cavalry"){
                p1CavalryAmount++;
                newImage.setAttribute("id", `${unitType}${p1CavalryAmount}`);
            }
            newImage.setAttribute("src", `./img/${unitType}.png`);
            newImage.classList.add("unit");
            document.querySelector(".player1-owned").append(newImage);
        }
        for (let index = 0; index < p2UnitInventory.length; index++) {
            let newImage = document.createElement("img");
            unitType = p2UnitInventory[index];
            if(unitType == "Pikemen"){
                p2PikemenAmount++;
                newImage.setAttribute("id", `${unitType}${p2PikemenAmount}`);
            }
            else if (unitType == "Archer"){
                p2ArcherAmount++;
                newImage.setAttribute("id", `${unitType}${p2ArcherAmount}`);
            }
            else if (unitType == "Cavalry"){
                p2CavalryAmount++;
                newImage.setAttribute("id", `${unitType}${p2CavalryAmount}`);
            }
            newImage.setAttribute("src", `./img/${unitType}.png`);
            newImage.classList.add("unit");
            document.querySelector(".player2-owned").append(newImage);
        }
        const image = document.getElementsByTagName("img");
        for (let index = 0; index < image.length; index++) {
        const element = image[index];
        element.addEventListener("dragstart", dragStart);
        }
    }
}

function dragStart(e) {
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e.target.id);
    setTimeout(() => {
        e.target.classList.add('hidden');
    }, 0);
}

const boxes = document.querySelectorAll('.position');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    console.log(id);
    e.target.appendChild(draggable);

    draggable.classList.remove('hidden');
}