function validateHello(greetings) {

    const greeting = greetings.toLowerCase()

  if (greeting === "hello") return "english";
  else if (greeting === "ciao") return "italian";
  else if (greeting === "salut") return "french";
  else if (greeting === "halo") return "spanish";
  else if (greeting === "ahoj") return "czech republic";
  else if (greeting === "polish") return "polish";
  else {
    return "i don't know";
  }
}

console.log(validateHello('SaLUT'));