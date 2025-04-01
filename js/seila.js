let resultadoDiv = document.getElementById("resultado");
let numerosPares = "";

let i = 1;
while(1<= 10){
    if(i % 2 == 0){
        numerosPares += i + "<br>"
    }
    i++;
}
resultadoDiv.innerHTML = numerosPares;