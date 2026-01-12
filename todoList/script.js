const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value == ""){
        alert("You should write something.")
    }else{

        // create li tag when add new task clicking the btn
        let li = document.createElement('li');
        // add task value into this li tag
        li.innerHTML = inputBox.value;
        //then append this li tag with value to our container
        listContainer.appendChild(li);
        
        //as well ad need to add image (close img) to close task
        let img = document.createElement('img');
        img.src = "img/notcheck.png";
        img.classList.add("close"); //some css style add using class
        li.appendChild(img); 
    }

    //after adding task inputbox should be empty
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener('click',(e)=>{
    //when you click the task in the container, mark as checked.
    // you can also uncheck
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); 
        saveData();
    }

    //when you click the close btn, task should be removed from the container
    else if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        saveData();
    }
})

//this function is used to save data in local storage.
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//this function is used to get data from local storage.
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();