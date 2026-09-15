   
    let respuesta = 0;
    const nR = () => Math.floor(Math.random() * 10) + 1;
window.onload = () => {


   
    const contenedorEcuacion = document.getElementById('operation'); 
    contenedorEcuacion.style.fontSize="50px";
    contenedorEcuacion.style.textAlign="center";
    const textosRespuestas = document.querySelectorAll('.result1 h2'); 
    const botones = document.querySelectorAll('.result'); 


    const GenerarEcuation = () => {
        let numberEcuation = Math.floor(Math.random() * 3);
        let ecuation = "";
        let a, b, c, d; 
        switch(numberEcuation){
            case 0:
                a = nR(); b = nR(); c = nR();
                ecuation = `${a}X + ${b} = ${c}`;
                respuesta = (c - b) / a;
                break;

            case 1:
                a = nR(); b = nR(); c = nR(); d = nR();
                if(b === d) d = b + 1;
                ecuation = `${a} + ${b}X = ${c} + ${d}X`;
                respuesta = (c - a) / (b - d);
                break;

            case 2:
                a = nR(); b = nR(); c = nR(); d = nR();
                if(b === 1) d = b + 2;
                ecuation = `${a} - ${b}X + ${c} = ${d} - X`;
                respuesta = (d - a - c) / (1 - b);
                break;
        }

        respuesta = parseFloat(respuesta.toFixed(1));
        contenedorEcuacion.innerHTML = ecuation; 


        let opcionFalsa1 = parseFloat((respuesta + (Math.random() * 3 + 1)).toFixed(1));
        let opcionFalsa2 = parseFloat((respuesta - (Math.random() * 3 + 1)).toFixed(1));

        let opciones = [respuesta, opcionFalsa1, opcionFalsa2];
        opciones.sort(() => Math.random() - 0.5);
        textosRespuestas.forEach((elementoTexto, index) => {
            elementoTexto.textContent = opciones[index];
        });
    };  
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            let valorSeleccionado = parseFloat(textosRespuestas[index].textContent);
            if (valorSeleccionado === respuesta) {
                alert('RESPUESTA RECONTRA BACANA');
                GenerarEcuation(); 
            } else {
                alert('TONTO, INTENTALO DE NUEVO');
            }
        });
    });
    GenerarEcuation();
};