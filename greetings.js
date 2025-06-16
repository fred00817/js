function validateHello(greetings) {

    const greeting = greetings.toLowerCase()

    if (greeting.includes('hello')) return "true"

    else if (greeting.includes("ciao")) return "true";
    else if (greeting.includes('salut')) return "true";
    else if (greeting.includes( "hola")) return "true";
    else if (greeting.includes('ahoj')) return "true";
    else if (greeting.includes("czech")) return "true";
    else { return "i don't know";
    }
    

}
  

console.log(validateHello('fdoppouhp9ufihCIAOiufoRPGJIOIHNRPOIGNOFINL'));


