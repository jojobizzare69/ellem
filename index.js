const arr = ['abadas',  "dll", "ilya"]

for (let i = 0; i < 3; i++) {
    document.querySelector("ul").innerHTML += "<li>" + arr[i] + "</li>"
    console.log(arr[i]);
}