// Final challenge: rewrite this using arrow function syntax

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let addExcitement = (theWordArray, a) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
      
      if (i % 3 === 0 && i > 0) {
      buildMeUp += `${sentence[i]}${a} `
      } else {
        buildMeUp += `${theWordArray[i]} `;
      }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

addExcitement(sentence, "?")