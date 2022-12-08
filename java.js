var valor = document.getElementById("valor");

valor.addEventListener(`keyup`, convertir);


let resputa = document.getElementById("respuesta").value


selector_tipo = document.getElementById("selector_tipo");
selector_tipo.addEventListener(`change`, convertir);

selector_tipo2 = document.getElementById("selector_tipo2");
selector_tipo2 = document.addEventListener(`change`, convertir);

var resultado;

let todo = []
let residuos = []

function convertir() {
    
    if(valor.value ==""){
        return
    }
   

    numero = valor.value
    numero = parseFloat(numero);


//......Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal ......//
//......Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal ......//
//......Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal ......//
//......Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal Decimal ......//

    if (document.getElementById("selector_tipo").value === "decimal" && document.getElementById("selector_tipo2").value === "decimal") {
        document.getElementById("respuesta").innerText = `La respuesta es ${numero}`
    }


   






    


    if (document.getElementById("selector_tipo").value === "decimal" && document.getElementById("selector_tipo2").value === "octal") {
        
        todo.push(numero)

        while (true) {

            let ultimo = todo[todo.length - 1]
            let residuo = ultimo % 8
            let final = ultimo / 8

            let final2 = parseInt(final)

            todo.push(final2)
            residuos.push(residuo)


            if (final2 === 0) {
                break
            }

        }

        let a = residuos.reverse()
        document.getElementById("respuesta").innerText = `La respuesta es ${a.join(" ")}`
        todo.length = todo.length - todo.length
        residuos.length = residuos.length - residuos.length
    }



    if (document.getElementById("selector_tipo").value === "decimal" && document.getElementById("selector_tipo2").value === "hexadecimal") {

        todo.push(numero)

        while (true) {

            let ultimo = todo[todo.length - 1]
            let residuo = ultimo % 16
            let final = ultimo / 16

            let final2 = parseInt(final)

            todo.push(final2)
            if (residuo === 10) {
                residuo = "A"
            } else if (residuo === 11) {
                residuo = "B"
            } else if (residuo === 12) {
                residuo = "C"
            } else if (residuo === 13) {
                residuo = "D"
            } else if (residuo === 14) {
                residuo = "E"
            } else if (residuo === 15) {
                residuo = "F"
            }

            residuos.push(residuo)


            if (final2 === 0) {
                break
            }

        }

        let a = residuos.reverse()
        document.getElementById("respuesta").innerText = `La respuesta es ${a.join(" ")}`
        todo.length = todo.length - todo.length
        residuos.length = residuos.length - residuos.length
    }






    if (document.getElementById("selector_tipo").value === "decimal" && document.getElementById("selector_tipo2").value === "binario") {

        todo.push(numero)

        while (true) {

            let ultimo = todo[todo.length - 1]
            let residuo = ultimo % 2
            let final = ultimo / 2

            let final2 = parseInt(final)

            todo.push(final2)
            residuos.push(residuo)


            if (final2 === 0) {
                break
            }

        }
        let a = residuos.reverse()
        document.getElementById("respuesta").innerText = `La respuesta es ${a.join(" ")}`
        todo.length = todo.length - todo.length
        residuos.length = residuos.length - residuos.length

    }




    

//     //...................... binario binario binario  binario binario binario binario binario binario binario binario ...........//
//     //...................... binario binario binario  binario binario binario binario binario binario binario binario ...........//
//     //...................... binario binario binario  binario binario binario binario binario binario binario binario ...........//
//     //...................... binario binario binario  binario binario binario binario binario binario binario binario ...........//





    if (document.getElementById("selector_tipo").value === "binario" && document.getElementById("selector_tipo2").value === "binario") {

        document.getElementById("respuesta").innerText = `La respuesta es ${numero}`

    }













    if (document.getElementById("selector_tipo").value === "binario" && document.getElementById("selector_tipo2").value === "decimal") {

        let text = numero.toString()
        let listo = text.split('')

        let rever = listo.reverse()

        let guardopotencias = []
        let final = []
        for (let i = 0; i < listo.length; i++) {

            let multi = Math.pow(2, i)
            guardopotencias.push(multi)

            let deci = rever[i] * guardopotencias[i]
            final.push(deci)

            let total = final.reduce((a, b) => a + b, 0);


            document.getElementById("respuesta").innerText = `La respuesta es ${total}`

        }

    }




    if (document.getElementById("selector_tipo").value === "binario" && document.getElementById("selector_tipo2").value === "octal") {

        let t = numero.toString()
        let liis = t.split('')
        let primera = 0
        let segunda = 1
        let tercera = 2
        var respuesta = []
        var arraytemporal = []

        var arra_respuesta = []
        let posarray = liis.length
        let vueltas = posarray / 3
        let residuo_pos = posarray % 3
        let nu_pos = liis.length;
        (nu_pos);
        let nu_interacion = nu_pos / 3;
        let a = Math.ceil(nu_interacion);
        let div_pos = nu_pos % 3;

        let toto = a * 3;
        let i = nu_pos;
        (toto + " numagico");
        while (i != toto) {
            liis.unshift(0)
            i++
        }
     
        var nuevaarray = []
        for (let i = 0; i < vueltas; i++) {


            let suma = 3
            arraytemporal.push(liis[primera])
            arraytemporal.push(liis[segunda])
            arraytemporal.push(liis[tercera])

            nuevaarray = arraytemporal.join("")
            
            respuesta.push(nuevaarray)
            primera = primera + suma
            segunda = segunda + suma
            tercera = tercera + suma
            arraytemporal.length = arraytemporal.length - arraytemporal.length
        }

  

        let pos_res = respuesta.length

        


        for (i = 0; i <= pos_res; i++) {



            if (respuesta[i] == "000") {
                arra_respuesta.push("0")
            } else if (respuesta[i] == "001") {
                arra_respuesta.push("1")
            } else if (respuesta[i] == "010") {
                arra_respuesta.push("2")
            } else if (respuesta[i] == "011") {
                arra_respuesta.push("3")
            } else if (respuesta[i] == "100") {
                arra_respuesta.push("4")
            } else if (respuesta[i] == "101") {
                arra_respuesta.push("5")
            } else if (respuesta[i] == "110") {
                arra_respuesta.push("6")
            } else if (respuesta[i] == "111") {
                arra_respuesta.push("7")
            }
        }


        (arra_respuesta);

        let respuestagod = arra_respuesta.join("")
        
        document.getElementById("respuesta").innerText= `la respuesta es ${respuestagod}`
    }











    if (document.getElementById("selector_tipo").value === "binario" && document.getElementById("selector_tipo2").value === "hexadecimal") {

        let b = numero.toString()
        let loos = b.split('')
        let loosre = loos
        let primera = 0
        let segunda = 1
        let tercera = 2
        let cuarta = 3
        var respuesta = []
        var tempoarray = []

        var respuestabihexa = []
        let posarray = loosre.length
        let vueltas = posarray / 4
        let residuo_pos = posarray % 4
        let nu_pos = loosre.length;
        (nu_pos);
        let nu_interacion = nu_pos / 4;
        let a = Math.ceil(nu_interacion);
        let div_pos = nu_pos % 4;

        let toto = a * 4;
        let i = nu_pos


        while (i != toto) {
            loosre.unshift(0)
            i++
        }

        var nuevaarray = []
        for (let i = 0; i < vueltas; i++) {

            let suma = 4
            tempoarray.push(loosre[primera])
            tempoarray.push(loosre[segunda])
            tempoarray.push(loosre[tercera])
            tempoarray.push(loosre[cuarta])
            nuevaarray = tempoarray.join("")
            respuesta.push(nuevaarray)
            primera = primera + suma
            segunda = segunda + suma
            tercera = tercera + suma
            cuarta = cuarta + suma
            tempoarray.length = tempoarray.length - tempoarray.length
        }

        console.log(respuesta);

        let pos_res = respuesta.length

        for (i = 0; i <= pos_res; i++) {

            if (respuesta[i] === "0000") {
                respuestabihexa.push("0")
            } else if (respuesta[i] === "0001") {
                respuestabihexa.push("1")
            } else if (respuesta[i] === "0010") {
                respuestabihexa.push("2")
            } else if (respuesta[i] === "0011") {
                respuestabihexa.push("3")
            } else if (respuesta[i] === "0100") {
                respuestabihexa.push("4")
            } else if (respuesta[i] === "0101") {
                respuestabihexa.push("5")
            } else if (respuesta[i] === "0110") {
                respuestabihexa.push("6")
            } else if (respuesta[i] === "0111") {
                respuestabihexa.push("7")
            }else if (respuesta[i] === "1000") {
                respuestabihexa.push("8")
            }else if (respuesta[i] === "1001") {
                respuestabihexa.push("9")
            }else if (respuesta[i] === "1010") {
                respuestabihexa.push("A")
            }else if (respuesta[i] === "1011") {
                respuestabihexa.push("B")
            }else if (respuesta[i] === "1100") {
                respuestabihexa.push("C")
            }else if (respuesta[i] === "1101") {
                respuestabihexa.push("D")
            }else if (respuesta[i] === "1110") {
                respuestabihexa.push("E")
            }else if (respuesta[i] === "1111") {
                respuestabihexa.push("F")
            }
        }



        let respuestagod = respuestabihexa.join("")
        
        document.getElementById("respuesta").innerText= `la respuesta es ${respuestagod}`
        

    }



// //......... octal octal octal  octal  octal  octal octal octal octal octal octal octal octal octal octal octal octal .......//
// //......... octal octal octal  octal  octal  octal octal octal octal octal octal octal octal octal octal octal octal .......//
// //......... octal octal octal  octal  octal  octal octal octal octal octal octal octal octal octal octal octal octal .......//
// //......... octal octal octal  octal  octal  octal octal octal octal octal octal octal octal octal octal octal octal .......//

if (document.getElementById("selector_tipo").value === "octal" && document.getElementById("selector_tipo2").value === "octal") {

    document.getElementById("respuesta").innerText = `La respuesta es ${numero}`

}




    let fi = []

    if (document.getElementById("selector_tipo").value === "octal" && document.getElementById("selector_tipo2").value === "decimal") {

        let ele
        let sep = numero.toString()
        let lis = sep.split('')
        let vuelt = lis.reverse()

        for (let i = 0; i < vuelt.length; i++) {

            ele = Math.pow(8, i)
        

            let cas = lis[i] * ele;

            fi.push(cas)
        }

        let f = fi.reduce((a, b) => a + b, 0);

        document.getElementById("respuesta").innerText = `La respuesta es ${f}`

    }


    if (document.getElementById("selector_tipo").value === "octal" && document.getElementById("selector_tipo2").value === "binario") {

        let popo = numero.toString()
        console.log(popo);
        let poporespuesta = popo.split('')
        console.log(poporespuesta);
        let arraypopo = []

        for (i = 0; i < popo; i++) {
            if (poporespuesta[i] == "0") {
                arraypopo.push("000")
            } else if (poporespuesta[i] == "1") {
                arraypopo.push("001")
            } else if (poporespuesta[i] == "2") {
                arraypopo.push("010")
            } else if (poporespuesta[i] == "3") {
                arraypopo.push("011")
            } else if (poporespuesta[i] == "4") {
                arraypopo.push("100")
            } else if (poporespuesta[i] == "5") {
                arraypopo.push("101")
            } else if (poporespuesta[i] == "6") {
                arraypopo.push("110")
            } else if (poporespuesta[i] == "7") {
                arraypopo.push("111")
            }
        }

        let poporespuestagod = arraypopo.join("")
        console.log(poporespuestagod);
        document.getElementById("respuesta").innerText = `La respuesta es ${poporespuestagod}`
    }



    if (document.getElementById("selector_tipo").value === "octal" && document.getElementById("selector_tipo2").value === "octal") {

        document.getElementById("respuesta").innerText = `La respuesta es ${numero}`

    }





    if (document.getElementById("selector_tipo").value === "octal" && document.getElementById("selector_tipo2").value === "hexadecimal") {

        let kaka = numero.toString()
        let kakarespuesta = kaka.split('')
        console.log(kakarespuesta);
        let arraykaka = []

        for (let i = 0; i < kaka; i++) {
            if (kakarespuesta[i] == "0") {
                arraykaka.push("000")
            } else if (kakarespuesta[i] == "1") {
                arraykaka.push("001")
            } else if (kakarespuesta[i] == "2") {
                arraykaka.push("010")
            } else if (kakarespuesta[i] == "3") {
                arraykaka.push("011")
            } else if (kakarespuesta[i] == "4") {
                arraykaka.push("100")
            } else if (kakarespuesta[i] == "5") {
                arraykaka.push("101")
            } else if (kakarespuesta[i] == "6") {
                arraykaka.push("110")
            } else if (kakarespuesta[i] == "7") {
                arraykaka.push("111")
            }
        }

        let kakarespuestagod = arraykaka.join("")


        let b = kakarespuestagod.toString()
        let loos = b.split('')
        let loosre = loos
        let primera = 0
        let segunda = 1
        let tercera = 2
        let cuarta = 3
        var respuesta = []
        var tempoarray = []

        var respuestabihexa = []
        let posarray = loosre.length
        let vueltas = posarray / 4
        let residuo_pos = posarray % 4
        let nu_pos = loosre.length;
        (nu_pos);
        let nu_interacion = nu_pos / 4;
        let a = Math.ceil(nu_interacion);
        let div_pos = nu_pos % 4;

        let toto = a * 4;
        let i = nu_pos


        while (i != toto) {
            loosre.unshift(0)
            i++
        }

        var nuevaarray = []
        for (let i = 0; i < vueltas; i++) {

            let suma = 4
            tempoarray.push(loosre[primera])
            tempoarray.push(loosre[segunda])
            tempoarray.push(loosre[tercera])
            tempoarray.push(loosre[cuarta])
            nuevaarray = tempoarray.join("")
            respuesta.push(nuevaarray)
            primera = primera + suma
            segunda = segunda + suma
            tercera = tercera + suma
            cuarta = cuarta + suma
            tempoarray.length = tempoarray.length - tempoarray.length
        }

        console.log(respuesta);

        let pos_res = respuesta.length

        for (i = 0; i <= pos_res; i++) {

            if (respuesta[i] === "0000") {
                respuestabihexa.push("0")
            } else if (respuesta[i] === "0001") {
                respuestabihexa.push("1")
            } else if (respuesta[i] === "0010") {
                respuestabihexa.push("2")
            } else if (respuesta[i] === "0011") {
                respuestabihexa.push("3")
            } else if (respuesta[i] === "0100") {
                respuestabihexa.push("4")
            } else if (respuesta[i] === "0101") {
                respuestabihexa.push("5")
            } else if (respuesta[i] === "0110") {
                respuestabihexa.push("6")
            } else if (respuesta[i] === "0111") {
                respuestabihexa.push("7")
            }else if (respuesta[i] === "1000") {
                respuestabihexa.push("8")
            }else if (respuesta[i] === "1001") {
                respuestabihexa.push("9")
            }else if (respuesta[i] === "1010") {
                respuestabihexa.push("A")
            }else if (respuesta[i] === "1011") {
                respuestabihexa.push("B")
            }else if (respuesta[i] === "1100") {
                respuestabihexa.push("C")
            }else if (respuesta[i] === "1101") {
                respuestabihexa.push("D")
            }else if (respuesta[i] === "1110") {
                respuestabihexa.push("E")
            }else if (respuesta[i] === "1111") {
                respuestabihexa.push("F")
            }
        }

        if(respuestabihexa[0]== 0){
            respuestabihexa.shift()
        }



        let respuestagod = respuestabihexa.join("")
        
        document.getElementById("respuesta").innerText= `la respuesta es ${respuestagod}`

        

    }




// //............... hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  .............//
// //............... hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  .............//
// //............... hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  .............//
// //............... hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  hexadecimal  .............//

if (document.getElementById("selector_tipo").value === "hexadecimal" && document.getElementById("selector_tipo2").value === "hexadecimal") {

    document.getElementById("respuesta").innerText = `La respuesta es ${numero}`

}





if (document.getElementById("selector_tipo").value === "hexadecimal" && document.getElementById("selector_tipo2").value === "binario") {




    let text = valor.value
    let listo = text.split('')



    let hexa_bi = valor.value
    let hexaa = hexa_bi.split('')
    let pos_res = hexaa.length
    console.log(hexaa);
    var hexa_res_bi = []

    for (let i = 0; i <= pos_res; i++) {

        if (hexaa[i] === "0") {
            hexa_res_bi.push("0000")
        } else if (hexaa[i] === "1") {
            hexa_res_bi.push("0001")
        } else if (hexaa[i] === "2") {
            hexa_res_bi.push("0010")
        } else if (hexaa[i] === "3") {
            hexa_res_bi.push("0011")
        } else if (hexaa[i] === "4") {
            hexa_res_bi.push("0100")
        } else if (hexaa[i] === "5") {
            hexa_res_bi.push("0101")
        } else if (hexaa[i] === "6") {
            hexa_res_bi.push("0110")
        } else if (hexaa[i] === "7") {
            hexa_res_bi.push("0111")
        }else if (hexaa[i] === "8") {
            hexa_res_bi.push("1000")
        }else if (hexaa[i] === "9") {
            hexa_res_bi.push("1001")
        }else if (hexaa[i] === "A" || hexaa[i] === "a" ) {
            hexa_res_bi.push("1010")
        }else if (hexaa[i] === "B" || hexaa[i] === "b") {
            hexa_res_bi.push("1011")
        }else if (hexaa[i] === "C" || hexaa[i] === "c") {
            hexa_res_bi.push("1100")
        }else if (hexaa[i] === "D" || hexaa[i] === "d") {
            hexa_res_bi.push("1101")
        }else if (hexaa[i] === "E" || hexaa[i] === "e") {
            hexa_res_bi.push("1110")
        }else if (hexaa[i] === "F" || hexaa[i] === "f") {
            hexa_res_bi.push("1111")
        }
    }


    console.log(`${hexa_res_bi} esta es la array antes de unirse` );

    let respuestagod_hexabi = hexa_res_bi.join("")
    
    document.getElementById("respuesta").innerText= `la respuesta es ${respuestagod_hexabi}`






}





if (document.getElementById("selector_tipo").value === "hexadecimal" && document.getElementById("selector_tipo2").value === "octal") {



    let text = valor.value
    let listo = text.split('')



    let hexa_bi_octa = valor.value
    let hexa_bi_octal = hexa_bi_octa.split('')
    let pos_res = hexa_bi_octal.length
    var hexa_octal_abi = []

    for (let i = 0; i <= pos_res; i++) {

        if (hexa_bi_octal[i] === "0") {
            hexa_octal_abi.push("0000")
        } else if (hexa_bi_octal[i] === "1") {
            hexa_octal_abi.push("0001")
        } else if (hexa_bi_octal[i] === "2") {
            hexa_octal_abi.push("0010")
        } else if (hexa_bi_octal[i] === "3") {
            hexa_octal_abi.push("0011")
        } else if (hexa_bi_octal[i] === "4") {
            hexa_octal_abi.push("0100")
        } else if (hexa_bi_octal[i] === "5") {
            hexa_octal_abi.push("0101")
        } else if (hexa_bi_octal[i] === "6") {
            hexa_octal_abi.push("0110")
        } else if (hexa_bi_octal[i] === "7") {
            hexa_octal_abi.push("0111")
        }else if (hexa_bi_octal[i] === "8") {
            hexa_octal_abi.push("1000")
        }else if (hexa_bi_octal[i] === "9") {
            hexa_octal_abi.push("1001")
        }else if (hexa_bi_octal[i] === "A" || hexa_bi_octal[i] === "a" ) {
            hexa_octal_abi.push("1010")
        }else if (hexa_bi_octal[i] === "B" || hexa_bi_octal[i] === "b") {
            hexa_octal_abi.push("1011")
        }else if (hexa_bi_octal[i] === "C" || hexa_bi_octal[i] === "c") {
            hexa_octal_abi.push("1100")
        }else if (hexa_bi_octal[i] === "D" || hexa_bi_octal[i] === "d") {
            hexa_octal_abi.push("1101")
        }else if (hexa_bi_octal[i] === "E" || hexa_bi_octal[i] === "e") {
            hexa_octal_abi.push("1110")
        }else if (hexa_bi_octal[i] === "F" || hexa_bi_octal[i] === "f") {
            hexa_octal_abi.push("1111")
        }
    }


    let hexaa_bii_octal = hexa_octal_abi.join("")
    
    
console.log(`${hexaa_bii_octal} esta es la respuesta en binario`);

    let t = hexaa_bii_octal.toString()
    let liis = t.split('')
    let primera = 0
    let segunda = 1
    let tercera = 2
    var respuesta = []
    var arraytemporal = []

    var arra_respuesta = []
    let posarray = liis.length
    let vueltas = posarray / 3
    let residuo_pos = posarray % 3
    let nu_pos = liis.length;
    (nu_pos);
    let nu_interacion = nu_pos / 3;
    let a = Math.ceil(nu_interacion);
    let div_pos = nu_pos % 3;

    let toto = a * 3;
    let i = nu_pos;
    (toto + " numagico");
    while (i != toto) {
        liis.unshift(0)
        i++
    }


    var nuevaarray = []
    for (let i = 0; i < vueltas; i++) {


        let suma = 3
        arraytemporal.push(liis[primera])
        arraytemporal.push(liis[segunda])
        arraytemporal.push(liis[tercera])

        nuevaarray = arraytemporal.join("")
        
        respuesta.push(nuevaarray)
        primera = primera + suma
        segunda = segunda + suma
        tercera = tercera + suma
        arraytemporal.length = arraytemporal.length - arraytemporal.length
    }

    

    let polpoli = respuesta.length

 


    for (i = 0; i <= polpoli; i++) {



        if (respuesta[i] == "000") {
            arra_respuesta.push("0")
        } else if (respuesta[i] == "001") {
            arra_respuesta.push("1")
        } else if (respuesta[i] == "010") {
            arra_respuesta.push("2")
        } else if (respuesta[i] == "011") {
            arra_respuesta.push("3")
        } else if (respuesta[i] == "100") {
            arra_respuesta.push("4")
        } else if (respuesta[i] == "101") {
            arra_respuesta.push("5")
        } else if (respuesta[i] == "110") {
            arra_respuesta.push("6")
        } else if (respuesta[i] == "111") {
            arra_respuesta.push("7")
        }
    }




    let respuestagod = arra_respuesta.join("")
    document.getElementById("respuesta").innerText= `la respuesta es ${respuestagod}`








}


if (document.getElementById("selector_tipo").value === "hexadecimal" && document.getElementById("selector_tipo2").value === "decimal") {

    let text = valor.value
    let listo = text.split('')

    for (let i = 0; i < listo.length; i++) {

        if (listo[i] === "A" || listo[i] === "a")  {
            listo[i] = "10"
        }if (listo[i] === "B" || listo[i] === "b")  {
            listo[i] = "11"
        }if (listo[i] === "C" || listo[i] === "c")  {
            listo[i] = "12"
        }if (listo[i] === "D" || listo[i] === "d")  {
            listo[i] = "13"
        }if (listo[i] === "E" || listo[i] === "e")  {
            listo[i] = "14"
        }if (listo[i] === "F" || listo[i] === "f")  {
            listo[i] = "15"
        }
    }

    let rever = listo.reverse()
    console.log(`soy reversa ${rever}`);


    let loq = []


    let guardopotencias = []
    console.log(guardopotencias);
    for (let i = 0; i < rever.length; i++) {

        let multi = Math.pow(16, i)
        guardopotencias.push(multi)

        console.log(`SOY MULTI ${multi}`);
        let j = rever[i] * guardopotencias[i]
        console.log(`Soy j ${j}`);
        loq.push(j)
        let sum = loq.reduce((a, b) => a + b, 0);

        console.log(sum);

        document.getElementById("respuesta").innerText = `La respuesta es ${sum}`
    }




}




}

