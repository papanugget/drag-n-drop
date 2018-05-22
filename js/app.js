console.log('drag and drop connected!');
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty'); //nodelist
//fill listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
//loop thru empties var and call drag event
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
//functions
function dragStart(){
    this.className += ' hold'; //appends hold class to end of classList
    setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd(){
    this.className = 'fill';
}
function dragOver(e){
    e.preventDefault();  //dragOver prevents drop from ever running
    // console.log('over');
}
function dragEnter(e){
    // console.log('enter');    
    e.preventDefault();
    this.className += ' hovered'; //appends hovered class
}
function dragLeave(){
    // console.log('leave');
    this.className = 'empty'; //removes hovered class
}
function dragDrop(){
    // console.log('drop');
    this.className = 'empty';
    this.append(fill); //appends fill var into div where it is dropped
}