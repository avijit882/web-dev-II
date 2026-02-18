localStorage.setitem("name","alex")
localStorage.setitem("age",45)

console.log(localStorage.getItem("name"))
console.log(localStorage.getitem("age"))

localStorage.setItem("name","john")

localStorage.removeItem("name")
console.log(localStorage.getitem("name"))//null

sessionStorage.setItem("name","alex")
sessionStorage.setItem("age",45)

console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getitem("age"))


