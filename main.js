// SCRIPT
// 1. Sla de referentie naar het gebruikersnaam-veld op
// 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
// 3. Zet een event listener op het gebruikersnaam-veld
// 4. Maak een functie die de event listener kan aanroepen als de gebruiker input geeft
// 5. Laat die functie checken of de huidige waarde van de input een '@' bevat
// 6. Als dit zo is, geef de waarschuwing weer
// 7. Als dit niet zo is, zorg dan dat de waarschuwing verdwijnt
// 8. Herhaal deze stappen voor het wachtwoord

// sla de referenties op naar de inputvelden
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Warning Messages
const usernameWarning = document.getElementById('username-warning');
const passwordWarning = document.getElementById('password-warning');


// Eventlistener
userNameInput.addEventListener('keyup', checkUsername);
userNameInput.addEventListener('keyup', checkPassWord);

// maak een functie die de username input checkt en door de event listener wordt aangeroepen
function checkUsername(e) {
    if (e.target.value.includes("@")) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        usernameWarning.textContent = '';
    }
}

// maak een functie die de password input checkt en door de event listener wordt aangeroepen
function checkPassWord (e) {
    // Als het invoerveld leeg is, of wanneer het wachtwoord lang genoeg is willen we de melding NIET tonen
    if (e.target.value === '' || e.target.value.length > 6) {
        passwordWarning.textContent = '';
    } else {
        // in alle andere gevallen (e.target.value !== '' && e.target.value.length <= 6) tonen we de melding WEL
        passwordWarning.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}