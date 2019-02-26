'use strict';

let outlineElement = document.getElementsByClassName('outline')[0]
let myButton = document.getElementsByClassName('create')[0];
let coolList = document.getElementsByClassName('cool-list')[0];
let chosenSelection; //the main event!
let chosenStringified; //variable holding our chosen text to string

let soComplete;


document.onselectionchange = () => {
  console.log("A selection is being made...")
  chosenSelection = document.getSelection();
  chosenStringified = chosenSelection.toString()//can erase not used
   


  if (document.getSelection().type === "Range") { //if text were selected
    //console.log("Something has been selected");
    //grab the string text of the paragraph - assigne to variable
    //let entiretyOfEle = chosenSelection.baseNode;
    //console.log(entiretyOfEle);  // lets see the text



    let newNode, range;
    /** Create a SPAN around the selected RANGE on mouse up */
    document.onmouseup = () => {
      newNode = document.createElement('span');
      newNode.className = "red-highlight"
      range = getSelection().getRangeAt(0);
      range.surroundContents(newNode);
      //outlineElement.textContent = chosenStringified; // add to DOM all above
      soComplete = chosenStringified
      console.log(soComplete);
    }

  }
}





/**Why i could not just do this below Is BEYOND ME!! */
// myButton.addEventListener('mousedown', addToDom());
/**BUtton that will add the selection as a Line Item to DOM */
myButton.addEventListener('mousedown', (e) => {
  let listItem = document.createElement('li');
  listItem.textContent = soComplete;
  coolList.appendChild(listItem);
})



