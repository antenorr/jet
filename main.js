'use strict';

let outlineElement = document.getElementsByClassName('outline')[0]


let chosenStringified; //variable holding our chosen text to string
let chosenSelection;

document.onselectionchange = () => {
  console.log("A selection is being made...")
  chosenSelection = document.getSelection();
  chosenStringified = chosenSelection.toString()
  outlineElement.textContent = chosenStringified; // add to DOM all above


  if (document.getSelection().type === "Range") { //if text were selected
    console.log("Something has been selected");
    //grab the string text of the paragraph - assigne to variable
    let stringTextOfParagraph = chosenSelection.baseNode.parentElement.textContent;
    console.log(stringTextOfParagraph);  // lets see the text


// let range = window.getSelection().createRange();
// console.log(range);




    //WAIT 
    // let beganSelection = stringTextOfParagraph.indexOf(chosenSelection);
    // console.log(beganSelection);
    //stringTextOfParagraph.substring(beganSelection,  ----make this a function value)
    
    //

  }
  
}


