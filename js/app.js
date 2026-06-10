import {
    db,
    collection,
    addDoc
}
from "../firebase/config.js";
function mostrarPregunta1()
{
    document.getElementById("inicio").style.display = "none";
    document.getElementById("p1").style.display = "block";
}

function comprobar1()
{
    let r = document.getElementById("respuesta1").value.toLowerCase();

    if(r === "said")
    {
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "block";
    }
    else
    {
        alert("Ups, inténtalo otra vez");
    }
}

function comprobar2()
{
    let r = document.getElementById("respuesta2").value;

    if(r === "2026")
    {
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "block";
    }
    else
    {
        alert("Ups, inténtalo otra vez");
    }
}

function comprobar3()
{
    let r = document.getElementById("respuesta3")
        .value
        .trim()
        .toLowerCase();

    if(r === "junio")
    {
        document.getElementById("p3").style.display = "none";
        document.getElementById("final").style.display = "block";
    }
    else
    {
        alert("💡 Pista: escribe el nombre del mes en letras.");
    }
}

function actualizarContador()
{
    const cumple = new Date("2026-06-20");

    const hoy = new Date();

    const diferencia = cumple - hoy;

    const dias = Math.ceil(
        diferencia / (1000 * 60 * 60 * 24)
    );

    document.getElementById("contador").innerHTML =
        "🎉 Faltan " +
        dias +
        " días para mi gran cumpleaños 🎉";
}

actualizarContador();

async function confirmarAsistencia()
{
    let familia = document.getElementById("familia").value.trim();

    let adultos = parseInt(
        document.getElementById("adultos").value
    );

    let ninos = parseInt(
        document.getElementById("ninos").value
    );

    if(familia == "")
    {
        alert("Introduce el nombre de la familia");
        return;
    }

    if(isNaN(adultos))
    {
        alert("Selecciona el número de adultos");
        return;
    }

    if(isNaN(ninos))
    {
        alert("Selecciona el número de niños");
        return;
    }

    if(adultos + ninos > 8)
    {
        alert("El máximo por familia es 8 personas");
        return;
    }

    try
    {
        await addDoc(
            collection(db, "asistentes"),
            {
                familia: familia,
                adultos: adultos,
                ninos: ninos,
                total: adultos + ninos,
                fecha: new Date()
            }
        );

        alert(
            "🎉 Gracias " +
            familia +
            ". Habéis confirmado " +
            (adultos + ninos) +
            " asistentes."
        );

        document.getElementById("familia").value = "";
        document.getElementById("adultos").value = "";
        document.getElementById("ninos").value = "";
    }
    catch(error)
    {
        console.log(error);

        alert(
            "Error guardando la asistencia"
        );
    }
}

window.mostrarPregunta1 = mostrarPregunta1;
window.comprobar1 = comprobar1;
window.comprobar2 = comprobar2;
window.comprobar3 = comprobar3;
window.confirmarAsistencia = confirmarAsistencia;