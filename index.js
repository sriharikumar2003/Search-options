var names = ["vijay", "ajith", "surya","vijay sethupathi","Jayam Ravi", "simbu", "kamal","karthick", "rajini", "dhanush", "vikram"];

function checker() {
    var val = document.getElementsByTagName("input")[0].value.toLowerCase();
    for (let i = 0; i < names.length; i++) {
        if (names[i] === val) {
            window.location.href = `https://www.google.com/search?q=${names[i]}`;
            return;
        }
    }
    alert("Sorry, Actor not in my list"); 
}

function clearField(){
    document.getElementsByTagName("input")[0].value = '';
}