// function findAllOccurrences(text, pattern) {
//     const regex = new RegExp(pattern, 'g');
//     const matches = text.match(regex);

//     console.log(`Matches for pattern ${pattern}: ${matches}`);

//     return matches;
// }

const text = "Javascript is a Versatile Language. Many developers love JavaScript. Because of its flexibility";

// findAllOccurrences(text, "JavaScript")

function findAllDigits(text) {
        const regex = /\d/g;
        const matches = text.match(regex);

        console.log(`Digits found : ${matches}`);

        return matches;
}
const text2 = "My phone number is 1234456789 and my zip code is 123-456"

// findAllDigits(text2);

function findCapitalWords(text) {
        const regex = /\b[A-Z][a-z]*\b/g;

        const matches = text.match(regex);

        console.log("Words starting with capital letter :", matches);

        return matches;
}

// findCapitalWords(text);

function findDigitSequence(text) {
    const regex = /\d+/g;

    const matches = text.match(regex);
    console.log("Digits sequences found: ", matches );

    return matches;
}

// findDigitSequence(text2)

function capturePhoneNo(phoneNumber) {
        const regex = /\((\d{3})\)(\d{3})-(\d{4})/;

        const matches = phoneNumber.match(regex);

        // console.log(matches);
        if(matches) {
            const [, areaCode, centralOfficeCode, lineNumber] = matches;
            console.log("Area Code : ", areaCode);
            console.log("Central Office Code : ", centralOfficeCode);
            console.log("Line Number : ", lineNumber);

        } else {
            console.log("No matches found.");
        }
}

const phoneNumber = "(123)459-7890";
// capturePhoneNo(phoneNumber);


function captureEmail(email) {
    const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9._]+\.[a-zA-Z]{2,})$/;

    const matches = email.match(regex);

    if(matches) {
        const [, username, domain] = matches;

        console.log("Username :", username);
        console.log("Domain : ", domain); 
    } else {
        console.log("No match found");
    }


}

const email = "dipali@gmail.com"
// captureEmail(email);

function matchWordAtBeginning(text) {
        const regex = /^\b\w+\b/;

        const match = text.match(regex);

        console.log("Word at the beginning of the string", match);

        return match;

}

// matchWordAtBeginning(text);

function matchWordAtEnd(text) {
        const regex = /\b\w+\b$/;

        const match = text.match(regex);

        console.log("Word at the end of the string", match);
        return match;

}
// matchWordAtEnd(text);

function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const isValid = regex.test(password);

        console.log("Password is valid ", isValid);
  return isValid;       
}

const password1 = "Password1@"
const password2 = "password123"

// validatePassword(password1);
// validatePassword(password2);

function validateURL(url) {
    const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-./?%&=]*)?$/i;

    const isValid = regex.test(url);

    console.log("URL is valid ", isValid);

    return isValid;
}

const url1 = "https://www.google.com";
const url2 = "exampleco";
validateURL(url1)
validateURL(url2)