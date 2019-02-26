'use strict';

let outlineElement = document.getElementsByClassName('outline')[0]
let chosenSelection;
let chosenStringified; //variable holding our chosen text to string


document.onselectionchange = () => {
  console.log("A selection is being made...")
  chosenSelection = document.getSelection();
  chosenStringified = chosenSelection.toString()
  outlineElement.textContent = chosenStringified; // add to DOM all above


  if (document.getSelection().type === "Range") { //if text were selected
    console.log("Something has been selected");
    //grab the string text of the paragraph - assigne to variable
    let entiretyOfEle = chosenSelection.baseNode;
    console.log(entiretyOfEle);  // lets see the text
    // console.log(getSelection().getRangeAt(0))



    /** Create a SPAN around the selected RANGE on mouse up */
    document.onmouseup = () => {
      let newNode = document.createElement('span');
      newNode.className = "red-highlight"
      let range = getSelection().getRangeAt(0);
      range.surroundContents(newNode);
    }




    //WAIT 
    // let beganSelection = stringTextOfParagraph.indexOf(chosenSelection);
    // console.log(beganSelection);
    //stringTextOfParagraph.substring(beganSelection,  ----make this a function value)
    
    //

  }
  
}


