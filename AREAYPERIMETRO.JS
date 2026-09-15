document.addEventListener("DOMContentLoaded", function () {
    let selectFigura = document.querySelector(".style");
    let divSelectBig = document.querySelector(".select-big");
    let divSolucion = document.querySelector(".solution");
    let resultadoArea = document.getElementById("area-result");
    let resultadoPerimetro = document.getElementById("perimetro-result");

    let contenedorFila = document.createElement("div");
    contenedorFila.style.display = "flex";
    contenedorFila.style.flexDirection = "row"; 
    contenedorFila.style.width = "100%";
    contenedorFila.style.marginTop = "30px";
    contenedorFila.style.alignItems = "center";
    contenedorFila.style.justifyContent = "space-around"; 

    let contenedorInputs = document.createElement("div");
    contenedorInputs.style.width = "45%"; 
    contenedorInputs.style.display = "flex";
    contenedorInputs.style.flexDirection = "column";
    contenedorInputs.style.alignItems = "center";
    contenedorInputs.style.gap = "10px"; 

 
    divSolucion.style.position = "static"; 
    divSolucion.style.left = "auto";
    divSolucion.style.top = "auto";
    divSolucion.style.margin = "0";
    divSolucion.style.width = "45%"; 

    contenedorFila.appendChild(contenedorInputs); 
    contenedorFila.appendChild(divSolucion);      
    divSelectBig.appendChild(contenedorFila);  

    selectFigura.addEventListener("change", function () {
        contenedorInputs.innerHTML = ""; 
        resultadoArea.textContent = "0";
        resultadoPerimetro.textContent = "0";

        let figura = selectFigura.value;

        if (figura === "square") {
            let labelLado = document.createElement("label");
            labelLado.textContent = "Medida del Lado:";
            labelLado.className = "text-white font-bold text-lg";

            let inputLado = document.createElement("input");
            inputLado.type = "number";
            inputLado.className = "border rounded p-1 text-black bg-white text-center w-32";

            contenedorInputs.appendChild(labelLado);
            contenedorInputs.appendChild(inputLado);

            inputLado.addEventListener("input", function () {
                let lado = parseFloat(inputLado.value);
                if (lado > 0) {
                    resultadoArea.textContent = lado * lado;
                    resultadoPerimetro.textContent = lado * 4;
                }
            });

        } else if (figura === "rectangule" || figura === "romboide") {
            let labelBase = document.createElement("label");
            labelBase.textContent = "Base:";
            labelBase.className = "text-white font-bold text-lg";
            let inputBase = document.createElement("input");
            inputBase.type = "number";
            inputBase.className = "border rounded p-1 text-black bg-white text-center w-32";

            let labelAltura = document.createElement("label");
            labelAltura.textContent = "Altura:";
            labelAltura.className = "text-white font-bold text-lg";
            let inputAltura = document.createElement("input");
            inputAltura.type = "number";
            inputAltura.className = "border rounded p-1 text-black bg-white text-center w-32";

            contenedorInputs.appendChild(labelBase);
            contenedorInputs.appendChild(inputBase);
            contenedorInputs.appendChild(labelAltura);
            contenedorInputs.appendChild(inputAltura);

            function calcularAreaPerimetro() {
                let base = parseFloat(inputBase.value);
                let altura = parseFloat(inputAltura.value);
                if (base > 0 && altura > 0) {
                    resultadoArea.textContent = base * altura;
                    resultadoPerimetro.textContent = (base * 2) + (altura * 2);
                }
            }

            inputBase.addEventListener("input", calcularAreaPerimetro);
            inputAltura.addEventListener("input", calcularAreaPerimetro);

        } else if (figura === "triangule") {
            let labelBase = document.createElement("label");
            labelBase.textContent = "Base:";
            labelBase.className = "text-white font-bold";
            let inputBase = document.createElement("input");
            inputBase.type = "number";
            inputBase.className = "border rounded p-1 text-black bg-white text-center w-32";

            let labelAltura = document.createElement("label");
            labelAltura.textContent = "Altura:";
            labelAltura.className = "text-white font-bold";
            let inputAltura = document.createElement("input");
            inputAltura.type = "number";
            inputAltura.className = "border rounded p-1 text-black bg-white text-center w-32";

            let labelLado1 = document.createElement("label");
            labelLado1.textContent = "Lado 1:";
            labelLado1.className = "text-white font-bold";
            let inputLado1 = document.createElement("input");
            inputLado1.type = "number";
            inputLado1.className = "border rounded p-1 text-black bg-white text-center w-32";

            let labelLado2 = document.createElement("label");
            labelLado2.textContent = "Lado 2:";
            labelLado2.className = "text-white font-bold";
            let inputLado2 = document.createElement("input");
            inputLado2.type = "number";
            inputLado2.className = "border rounded p-1 text-black bg-white text-center w-32";

            contenedorInputs.appendChild(labelBase);
            contenedorInputs.appendChild(inputBase);
            contenedorInputs.appendChild(labelAltura);
            contenedorInputs.appendChild(inputAltura);
            contenedorInputs.appendChild(labelLado1);
            contenedorInputs.appendChild(inputLado1);
            contenedorInputs.appendChild(labelLado2);
            contenedorInputs.appendChild(inputLado2);

            function calcularTriangulo() {
                let base = parseFloat(inputBase.value);
                let altura = parseFloat(inputAltura.value);
                let lado1 = parseFloat(inputLado1.value);
                let lado2 = parseFloat(inputLado2.value);

                if (base > 0 && altura > 0) {
                    resultadoArea.textContent = (base * altura) / 2;
                }
                if (base > 0 && lado1 > 0 && lado2 > 0) {
                    resultadoPerimetro.textContent = base + lado1 + lado2;
                }
            }

            inputBase.addEventListener("input", calcularTriangulo);
            inputAltura.addEventListener("input", calcularTriangulo);
            inputLado1.addEventListener("input", calcularTriangulo);
            inputLado2.addEventListener("input", calcularTriangulo);

        } else if (figura === "rombo") {
            let labelDMayor = document.createElement("label");
            labelDMayor.textContent = "Diagonal Mayor:";
            labelDMayor.className = "text-white font-bold";
            let inputDMayor = document.createElement("input");
            inputDMayor.type = "number";
            inputDMayor.className = "border rounded p-1 text-black bg-white text-center w-32";

            let labelDMenor = document.createElement("label");
            labelDMenor.textContent = "Diagonal Menor:";
            labelDMenor.className = "text-white font-bold";
            let inputDMenor = document.createElement("input");
            inputDMenor.type = "number";
            inputDMenor.className = "border rounded p-1 text-black bg-white text-center w-32";

            let labelLado = document.createElement("label");
            labelLado.textContent = "Lado:";
            labelLado.className = "text-white font-bold";
            let inputLado = document.createElement("input");
            inputLado.type = "number";
            inputLado.className = "border rounded p-1 text-black bg-white text-center w-32";

            contenedorInputs.appendChild(labelDMayor);
            contenedorInputs.appendChild(inputDMayor);
            contenedorInputs.appendChild(labelDMenor);
            contenedorInputs.appendChild(inputDMenor);
            contenedorInputs.appendChild(labelLado);
            contenedorInputs.appendChild(inputLado);

            function calcularRombo() {
                let D = parseFloat(inputDMayor.value);
                let d = parseFloat(inputDMenor.value);
                let lado = parseFloat(inputLado.value);

                if (D > 0 && d > 0) {
                    resultadoArea.textContent = (D * d) / 2;
                }
                if (lado > 0) {
                    resultadoPerimetro.textContent = lado * 4;
                }
            }

            inputDMayor.addEventListener("input", calcularRombo);
            inputDMenor.addEventListener("input", calcularRombo);
            inputLado.addEventListener("input", calcularRombo);
        }
    });
});