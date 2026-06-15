import {
    db,
    collection,
    getDocs
}
from "../firebase/config.js";

const tabla = document.getElementById("tablaAsistentes");

let totalFamilias = 0;
let totalAdultos = 0;
let totalNinos = 0;
let totalAsistentes = 0;

async function cargarAsistentes()
{
    const snapshot =
        await getDocs(collection(db,"asistentes"));

    snapshot.forEach((doc)=>
    {
        const datos = doc.data();

        totalFamilias++;

        totalAdultos += Number(datos.adultos || 0);

        totalNinos += Number(datos.ninos || 0);

        totalAsistentes += Number(datos.total || 0);

        tabla.innerHTML += `
        <tr>
            <td>${datos.familia}</td>
            <td>${datos.adultos}</td>
            <td>${datos.ninos}</td>
            <td>${datos.total}</td>
        </tr>
        `;
    });

    document.getElementById("familias").textContent =
        totalFamilias;

    document.getElementById("adultos").textContent =
        totalAdultos;

    document.getElementById("ninos").textContent =
        totalNinos;

    document.getElementById("total").textContent =
        totalAsistentes;
}

cargarAsistentes();