
function btnEncriptar() {
    let textoEncriptar=document.getElementById("textoEncriptar"); //define la variable texto encriptar con el ID en html que tiene el textarea de igual nombre(textoEncriptar) y el .value es para que se vea el valor
        textoEncriptar.addEventListener("keydown",function(event){ // este addeventlistener, detecta lo que se ingresa en el text area por medio del teclado
            let tecla = event.key;                                 // y las funciones que se le asignaron es que 
            let letra = (tecla >= 'a' && tecla <= 'z')||(tecla >= 'A' && tecla <= 'Z') || tecla === ' '; // si es una letra de la a-z y A-Z se accepta en el campo text area
            if (!letra){
                event.preventDefault();                         // pero si no es, evita que se escriba o se ingrese texto, entonces solo se acceptan letras
            }                                                   // y se excluyen los numeros y cualquier otro caracter especial
        }
        )
    let encriptando=textoEncriptar.value.toLowerCase().replace(/[a,e,i,o,u]/g,function (match){ // se define variable encriptando  y le da el valor de la variable de arriba(textoEncriptar), para que lea todo lo que esta en el textarea(asi lo entendi) y despues se hace la funcion de encriptar
                                        // el .toLowerCase convierte el texto de mayusculas a minusculas (es diferente a text-transform:lower-Case de css) para que asi se encripten correctamente aun que se ingrese mayuscula
        switch (match){ // la funcion de arriba dice que remplaza(replace) las vocales que se ingresaron en el textarea. la letra "g" indica que debe buscar en todo el texto, si se quita, solo encriptara la primera vocal que encuentre.
        case "e":
        return "enter";
        case "i":           // en esta parte "switch(match)" del texto es donde se encripta y se cambia cada vocal por la frase encriptada
        return "imes"       
        case "a":
        return "ai";
        case "o":
        return "ober";
        case "u":
        return "ufat";
        default:
            return match; // regresa el texto tal cual, si no hay ninguna coincidencia.
        }

    });
    let textoEncriptado=document.getElementById("textoEncriptado"); // se obtiene el valor del textarea donde esta el texto encriptado
    textoEncriptado.value=encriptando;                              //se le asigna el valor de encriptadno al textarea y asi hace que aparezca el texto encriptado
    console.log(textoEncriptado.value);                             // console.log para saber que esta sucediendo y si se encripta o no bien,ya que antes me encriptaba las minisculas pero las mayusculas no y no salia en el textarea pero si en el consollog
    document.getElementById("textoEncriptar").value=""; // cuando se preciona el boton encriptar, se limpia el campo del textarea donde se ingresa el texto a encriptar.
    document.getElementById("textoEncriptado").style.backgroundImage = 'none'; // hace que la imagen con el ID  textoEncriptado, desaparezca al precionar el boton encriptar
    document.getElementById("textoAviso").style.display="none"; //oculta el elemento h2 que es un texto en el textarea de encriptado. display=none
}

function btnDesencriptar() { //boton para desencriptar, esta agregada esta funcion en html
    let textoEncriptar=document.getElementById("textoEncriptar").value // se llama al campo textarea "textoEncriptar" y se obtiene su valor, de lo que esta escrito ahi
    let desencriptando=textoEncriptar.toLowerCase().replace(/enter|imes|ai|ober|ufat/g,function (match){// se asigna el valor de la variable "textoEncriptar"a "desencriptando" y
                                    // se le agrega ".toLowerCase" para que todo el texto introducido sea minusculas y pueda desencriptarlo correctamente 
        switch (match){                // para que detecte las palabras a desencriptar solo se separan por "|" ya no se necesita encerrar entre corchetes 
            case "enter":       
                return "e";
            case "imes":
                return "i";             // se asigna por que vocal se va a cambiar cada palabra 
            case "ai":
                return "a";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                return match;       // en caso de que no haya coincidencias se regresa el valor que esta en el text area, por decirlo, no se desencripta
                }
  
            });
        let textoEncriptado=document.getElementById("textoEncriptado"); // se asigna la variable del textarea "textoEncriptado" y se busca por Id en el html
        textoEncriptado.value=desencriptando;                           // se obtiene el valor de textoEncriptado con ".value" y se le asigna el valor de "desencriptando"
        document.getElementById("textoEncriptar").value="";             // asiendo que "textoEncriptado" sea igual a "desencriptando"
        }                                                               // osea que el texto de "desencriptando" se mostrara en el textarea "textoEncriptado"


function btnCopiar() {
    textoEncriptado.value;
    navigator.clipboard.writeText(textoEncriptado.value)
    .then(() => {
        console.log("Texto copiado exitosamente");
    })
    .catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}



//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

