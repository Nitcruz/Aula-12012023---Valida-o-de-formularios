// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
usernameLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change",(e)=>{
 let valor =  e.target.value
 
if(valor.length < 3){

   usernameInput.classList.add("error")
   usernameInput.classList.remove("correct")
   usernameHelper.innerText = "Seu user name precisa ter pelo menos 3 caracteres"
   usernameHelper.classList.add("visible")
}else{
 
    usernameInput.classList.add("correct")
 usernameInput.classList.remove("error")
 usernameHelper.classList.remove("visible")
}

})

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");


emailInput.addEventListener("change",(e)=>{
let valor = e.target.value
console.log(valor.includes(".com"))

if(valor.includes("@") && valor.includes(".com")){
    emailInput.classList.remove("error")
 emailInput.classList.add("correct")  
 emailHelper.innerText = "Email incorreto precisa ter @ e .com"
 emailHelper.classList.remove("visible")

    
 }else{
    emailInput.classList.remove("correct")   
    emailInput.classList.add("error")
    emailHelper.classList.add("visible")
   
 }
 
 })

 