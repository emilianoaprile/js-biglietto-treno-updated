console.log('ok')

// input form
const nameInputElement = document.getElementById('name')
const distanceInputElement = document.getElementById('distance')
const ageInputElement = document.getElementById('age')

console.log(nameInputElement, distanceInputElement, ageInputElement)

// elementi DOM 
const passengerNameElement = document.getElementById('ticket-name')
const offerTypeElement = document.getElementById('offer-type')
const wagonElement = document.getElementById('wagon-number')
const codeElement = document.getElementById('cp-code')
const finalPriceElement = document.getElementById('final-price')

console.log(passengerNameElement, offerTypeElement, wagonElement, codeElement, finalPriceElement)

// button crea - annulla
const btnCreaElement = document.getElementById('btn-crea')
const btnAnnullaElement = document.getElementById('btn-annulla')

console.log(btnCreaElement, btnAnnullaElement)


// evento crea
btnCreaElement.addEventListener('click', function () {
    console.log('ho cliccato')

    // variabili 
    const tariffa = 0.21
    const distanza = parseInt(distanceInputElement.value)
    const eta = parseInt(ageInputElement.value)
    let prezzoBase = distanza * tariffa
    const sconto20 = (prezzoBase / 100) * 20
    const sconto40 = (prezzoBase / 100) * 40
    let prezzoFinale

    // calcolo del biglietto
    if (eta === 0) {

        prezzoFinale = prezzoBase - sconto20
        displayElements()
        capitalizeFirstLetter(nameInputElement)

    } else if (eta === 2) {

        prezzoFinale = prezzoBase - sconto40
        displayElements()
        capitalizeFirstLetter(nameInputElement)


    } else if (eta === 1) {

        prezzoFinale = prezzoBase
        displayElements()
        capitalizeFirstLetter(nameInputElement)
    }


    // controllo valori input
    if (nameInputElement.value === '' || nameInputElement.value.length < 3) {

        console.log('Il nome deve avere almeno 3 caratteri') 

        const errorMessageElement = document.getElementById('errorName');
        errorMessageElement.innerHTML = 'Il nome deve avere almeno 3 lettere'

        setTimeout(function() {
            errorMessageElement.style.display = 'none';
        }, 4000);

        notDisplayElements()
    }

    if (isNaN(distanceInputElement.value) || distanceInputElement.value < 10) {
        
        console.log('La distanza minima è di 10km')

        const errorMessageElement = document.getElementById('errorDistance');
        errorMessageElement.innerHTML = 'La distanza minima è di 10km'

        setTimeout(function() {
            errorMessageElement.style.display = 'none';
        }, 4000);

        notDisplayElements()
    }

    // funzioni
    function displayElements() {

        if (eta === 0) {
            offerTypeElement.innerHTML = 'Sconto 20%'
        } else if (eta === 2) {
            offerTypeElement.innerHTML = 'Sconto 40%'
        } else if (eta === 1) {
            offerTypeElement.innerHTML = 'Prezzo Pieno'
        }

        // passengerNameElement.innerHTML = nameInputElement.value
        wagonElement.innerHTML = Math.floor(Math.random() * 9) + 1
        codeElement.innerHTML = Math.floor(Math.random() * (10000 - 9000)) + 9000
        finalPriceElement.innerHTML = prezzoFinale.toFixed(2) + '&euro;'

    }

    function notDisplayElements() {

        passengerNameElement.innerHTML = ''
        offerTypeElement.innerHTML = ''
        wagonElement.innerHTML = ''
        codeElement.innerHTML = ''
        finalPriceElement.innerHTML = ''

    }

    function capitalizeFirstLetter(nameInputElement) {

        let currentInputValue = nameInputElement.value;
        const words = currentInputValue.split(' ');
        console.log('array di parole:', words)

        let capitalizedString = '';

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            console.log('parola assegnata to indice:', word)

            const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
            console.log('parola capitalizzata:', capitalizedWord)

            capitalizedString += capitalizedWord + ' ';
            console.log('concateno parole capit. con spazio', capitalizedString)
        }

        passengerNameElement.innerHTML = capitalizedString
        return capitalizedString
    }

})

// evento annulla
btnAnnullaElement.addEventListener('click', function () {
    // input
    nameInputElement.value = ''
    distanceInputElement.value = ''

    // dati del biglietto
    passengerNameElement.innerHTML = ''
    offerTypeElement.innerHTML = ''
    wagonElement.innerHTML = ''
    codeElement.innerHTML = ''
    finalPriceElement.innerHTML = ''

})



