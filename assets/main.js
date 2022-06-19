let Dieselvalor ;
let Gasolina ;

fetch('./assets/carburadores.json')
.then(data => {
return data.json();
})
.then(data => {
 Gasolina =  data[0].precio;
 Dieselvalor = data[1].precio;
});



let jsons;
selectop = document.getElementById('inputGroupSelect02');

fetch('./assets/data.json')
.then(data => {
return data.json();
})
.then(data => {
    for (let i = 0; i < data.length; i++) {
        jsons = data;
        
    let option = document.createElement("option");
    option.textContent = data[i].modelo;
    option.setAttribute("value", data[i].id);
    option.setAttribute("model", data[i].modelo);
    option.setAttribute("litroscada100", data[i].litroscada100);
    option.setAttribute("tipo", data[i].tipo);


    selectop.appendChild(option);

    }
});


numberply = document.getElementById('replyNumber');
modalbutton = document.getElementById('modalbutton');

testnumbers();

    numberply.addEventListener('change', (event) => {
        testnumbers();
    });
    selectop.addEventListener('change', (event) => {
        testnumbers();
    });


function testnumbers(){
    if(numberply.value > 0 && selectop.value != 0){
        modalbutton.disabled = false; 
       }
    else{
        modalbutton.disabled = true;
    }

}

modalbutton.addEventListener('click', (event) =>{
    if(selectop[selectop.value].getAttribute('tipo')=='Diesel'){
        valor = Dieselvalor;
    }
    else{
        valor = Gasolina;
    }
    let CardModelModel = document.getElementById('CardModelModel');
    let litros = document.getElementById('litros');
    let precio = document.getElementById('precio');
    let tipo = document.getElementById('tipo');

    CardModelModel.innerText = selectop[selectop.value].getAttribute('model') ;
    litros.innerText = Math.ceil(((( numberply.value / 100 ) * 100) / 100) * selectop[selectop.value].getAttribute('litroscada100'));;
    tipo.innerText = '('+selectop[selectop.value].getAttribute('tipo')+')';
    precio.innerText = (Math.ceil(((( numberply.value / 100 ) * 100) / 100) * selectop[selectop.value].getAttribute('litroscada100')) * valor).toString().replace('.',',');
})

