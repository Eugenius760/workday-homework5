var dateDisplay = $("#currentDay")
var date = moment();
var saveBtn = $(".saveBtn")
var toDo = $("textarea")

// set current date
dateDisplay.text(date.format("dddd[,] MMMM Do"))

function renderTodo() {
    todo.text(localStorage.getItem("toDo"));
    return;
}

// event listener for save
$(saveBtn).on("click", function() {
    localStorage.setItem("toDo", toDo);

});