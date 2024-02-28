let language =  prompt("Enter the language code:");

let translatedVersion;

if (language === "es"){
    translatedVersion = "Hola Mundo";
}
else if (language === "de"){
    translatedVersion = "Hallo Welt";
}
else if (language === "fr"){
    translatedVersion = "Bonjour le monde";
}
else {translatedVersion = "Hello World";}

console.log("Hello World translated in " + language + "is" + translatedVersion);
