let todoList=['hi','dg'];
displayItems();//page load ki start me call kia

function addToDo(){
    let inputElement=document.querySelector('#ipt');
    //or andr ki value ko kese nikale .nikal k add krna h na;
    let todoItem= inputElement.value;
    todoList.push(todoItem);
     inputElement.value='';
     displayItems();
}

//ye function jo todoList k andr se elements lega or p me add krte jaega
function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    //acuumalator concept is been used here
    //
    let newHtml='';
   
    for(let i=0;i<todoList.length;i++){
        newHtml+=`
         
        <span>${todoList[i]}</span>
        <button class='btn-todo' onclick="todoList.splice(${i},1)
        displayItems()";
        >Delete</button>
          
        `;
    }
    containerElement.innerHTML=newHtml;
     
}