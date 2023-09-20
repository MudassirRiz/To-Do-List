const inputBox = document.getElementById("input-box");
const ulLi = document.getElementById("list-cont");

function addTask(){
    if(inputBox.value ===''){
        alert("Please Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ulLi.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "✕";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
ulLi.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ulLi.innerHTML);
}
function displayTask(){
    ulLi.innerHTML = localStorage.getItem("data");
}
displayTask();