// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function () {
//     console.log("clicked!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var mylist = document.getElementById("mylist");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var delbut = document.createElement("button")
    delbut.innerText = "delete";
    li.appendChild(document.createTextNode(input.value + " "));
    li.append(delbut);
    addMyEventListener(li);
    mylist.appendChild(li);
    input.value = ""
}

button.addEventListener("click", function () {
    if (inputLength() === 0) {
        alert("enter value!!")
        return;
    }
    createListElement();
});

input.addEventListener("keypress", function () {
    if (event.keyCode === 13) {
        if (inputLength() === 0) {
            alert("enter value!!")
            return;
        }
        createListElement();
    }
});

var lis = document.querySelectorAll("li");
console.log("lis is:", lis);

function addMyEventListener(li) {
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    console.log("li is: ", li)

    var deletebutton = li.children[0]
    console.log("delete button is: ", deletebutton)
    deletebutton.addEventListener("click", function () {
        deleteParent(deletebutton);
    });
}

lis.forEach(addMyEventListener)

// add event listener to all delete buttons such that when clicked delete parent

function deleteParent(element) {
    var parent = element.parentElement;
    parent.parentElement.removeChild(parent);
}