const labelNumber = document.getElementById("labelNumbers");
const labelLetters = document.getElementById("labelLetters");

const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");
let isFinishL = false;
let isFinishN = false;
let letrasAux = "";
let numberAux = "";

//Funciones

const fnA1 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.length == 0 && !letrasAux.includes("1")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "1";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("a") && letrasAux.length == 0) {
      labelLetters.innerHTML = "A";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnB2 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("1") == 0 && !numberAux.includes("2")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "2";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("b") && letrasAux.lastIndexOf("a") == 0) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "B";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnC3 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("2") == 1 && !numberAux.includes("3")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "3";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("c") && letrasAux.lastIndexOf("b") == 1) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "C";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnD4 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("3") == 2 && !numberAux.includes("4")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "4";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("d") && letrasAux.lastIndexOf("c") == 2) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "D";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnE5 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("4") == 3 && !numberAux.includes("5")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "5";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("e") && letrasAux.lastIndexOf("d") == 3) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "E";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnF6 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("5") == 4 && !numberAux.includes("6")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "6";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("f") && letrasAux.lastIndexOf("e") == 4) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "F";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnG7 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("6") == 5 && !numberAux.includes("7")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "7";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("g") && letrasAux.lastIndexOf("f") == 5) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "G";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnH8 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("7") == 6 && !numberAux.includes("8")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "8";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("h")) {
      if (letrasAux.lastIndexOf("g") == 6) {
        labelLetters.innerHTML = letrasAux.toUpperCase() + "H";
      } else {
        alert("faltan letras o no sigue la secuencia");
      }
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnI9 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("8") == 7 && !numberAux.includes("9")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "9";
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("i") && letrasAux.lastIndexOf("h") == 7) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "I";
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
};

const fnJ0 = () => {
  letrasAux = labelLetters.innerHTML.toLowerCase();
  numberAux = labelNumber.innerHTML;
  if (isFinishL) {
    if (numberAux.lastIndexOf("9") == 8 && !numberAux.includes("0")) {
      labelNumber.innerHTML = labelNumber.innerHTML + "0";
      isFinishN = true;
    } else {
      alert("No esta siguiendo la secuencia de numeros o faltan números");
    }
  } else {
    if (!letrasAux.includes("j") && letrasAux.lastIndexOf("i") == 8) {
      labelLetters.innerHTML = letrasAux.toUpperCase() + "J";
      isFinishL = true;
    } else {
      alert("faltan letras o no sigue la secuencia");
    }
  }
  if (isFinishL == isFinishN) {
    alert("!GENIAL¡. terminaste letras y numeros. FELICIDADES!! :D");
  }
};

const fnCL = () => {
  labelLetters.innerHTML = "";
  isFinishL = false;
};

const fnCN = () => {
  labelNumber.innerHTML = "";
  isFinishN = false;
};

//Eventos
a1.onclick = () => {
  fnA1();
};

b2.onclick = () => {
  fnB2();
};

c3.onclick = () => {
  fnC3();
};

d4.onclick = () => {
  fnD4();
};

e5.onclick = () => {
  fnE5();
};

f6.onclick = () => {
  fnF6();
};

g7.onclick = () => {
  fnG7();
};

h8.onclick = () => {
  fnH8();
};

i9.onclick = () => {
  fnI9();
};

j0.onclick = () => {
  fnJ0();
};

cl.onclick = () => {
  fnCL();
};

cn.onclick = () => {
  fnCN();
};
