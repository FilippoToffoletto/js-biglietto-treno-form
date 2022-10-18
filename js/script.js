// ELEMENTI
const btnGenera = document.getElementById ('genera');
const btnReset = document.getElementById ('annulla');


const inputName = document.getElementById('name');
const inputKm = document.getElementById('km');
const inputRange = document.getElementById('fascia');

const outputName = document.getElementById('outputName');
const outputOffer = document.getElementById('outputOffer');
const outputCoach = document.getElementById('outputCoach');
const outputCP = document.getElementById('outputCP');
const outputPrice = document.getElementById('outputPrice');
const ticketBox = document.querySelector('.ticket')


// DATI

const juniorDiscount = .20;
const silverDiscount = .40;
const priceForKm = .21;

// EVENTI

btnGenera.addEventListener('click', function(){
    passangerName =  inputName.value;
    totalKm = inputKm.value;
    ageRange  = inputRange.value;
    coach = Math.ceil(Math.random() * 12);
    code = Math.floor(Math.random() * (999999 - 100000) -1 ) + 100000;
    totalPrice = totalKm + priceForKm;

    let  labelOffer = ' Biglietto Standard ';

    // CALCOLO LO SCONTO
    if(ageRange ===  'minorenne') {
        totalPrice *= totalPrice *  (1 - juniorDiscount);
        labelOffer = 'Sconto Junior';
    }else if(ageRange === 'silver'){
        totalPrice *= totalPrice *  (1 - silverDiscount);
        labelOffer = 'Sconto Silver';

    }
    outputName.innerHTML = passangerName;
    outputOffer.innerHTML = labelOffer;
    outputCoach.innerHTML = coach;
    outputCP.innerHTML = code;
    outputPrice.innerHTML = ' € ' + totalPrice.toFixef(2);

    ticketBox.classList.remove('hide');
});

btnReset.addEventListener('click', function(){
    inputName.value = '';
    inputKm.value = '';
    inputRange.value = 'maggiorenne';

    ticketBox.classList.add('hide');
});

