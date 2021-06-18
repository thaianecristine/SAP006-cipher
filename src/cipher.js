const cipher = {
  encode: function (offset, criptografarText) {
    let resultado = "";

    for (let i = 0; i < criptografarText.length; i++) {
      let codigoASC = criptografarText.charCodeAt(i);

     //NUMEROS//
     if (codigoASC >= 34 && codigoASC <= 63) {
        codigoASC = ((codigoASC - 34 + offset) % 29) + 34;
        resultado += String.fromCharCode(codigoASC)

      }
      //MAUSCULA//
      else if (codigoASC >= 65 && codigoASC <= 90) {
        codigoASC = ((codigoASC - 65 + offset) % 26) + 65;
        resultado += String.fromCharCode(codigoASC)

      }
      // minuscula//
      else if (codigoASC >= 97 && codigoASC <= 122) {
        codigoASC = ((codigoASC - 97 + offset) % 26) + 97;
        resultado += String.fromCharCode(codigoASC)
      }
      //acentuação//
      else if (codigoASC >= 123 && codigoASC <= 254) {
        codigoASC = ((codigoASC - 123 + offset) % 131) + 123;
        resultado += String.fromCharCode(codigoASC)
      }
    }
    return resultado
  },

  decode: function (offset, descriptografarText) {
    let resultado = "";

    for (let i = 0; i < descriptografarText.length; i++) {
      let codigoASC = descriptografarText.charCodeAt(i);

      if (codigoASC >= 34 && codigoASC <= 63) {
        codigoASC = ((codigoASC - 34 - offset) % 29) + 34;
        resultado += String.fromCharCode(codigoASC)
      }

      else if (codigoASC >= 65 && codigoASC <= 90) {
        codigoASC = ((codigoASC - 90 - offset) % 26) + 90
        resultado += String.fromCharCode(codigoASC)
      }
      else if (codigoASC >= 97 && codigoASC <= 122) {
        codigoASC = ((codigoASC - 122 - offset) % 26) + 122
        resultado += String.fromCharCode(codigoASC)
      }

      else if (codigoASC >= 123 && codigoASC <= 254) {
        codigoASC = ((codigoASC - 123 - offset) % 131) + 123;
        resultado += String.fromCharCode(codigoASC)
      }

    }
    return resultado
  }
};

export default cipher;
