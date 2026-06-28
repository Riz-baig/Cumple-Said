import {
    db,
    collection,
    getDocs
} from "../firebase/config.js";

async function exportarAsistentes() {
    const snapshot = await getDocs(collection(db, "asistentes"));

    let contenido = "LISTADO DE ASISTENTES\n";
    contenido += "====================\n\n";

    let totalFamilias = 0;
    let totalAdultos = 0;
    let totalNinos = 0;
    let totalAsistentes = 0;

    snapshot.forEach((doc) => {
        const datos = doc.data();

        totalFamilias++;
        totalAdultos += Number(datos.adultos || 0);
        totalNinos += Number(datos.ninos || 0);
        totalAsistentes += Number(datos.total || 0);

        contenido += `Familia: ${datos.familia || ""}\n`;
        contenido += `Adultos: ${datos.adultos || 0}\n`;
        contenido += `Niños: ${datos.ninos || 0}\n`;
        contenido += `Total: ${datos.total || 0}\n`;
        contenido += "--------------------\n";
    });

    contenido += "\nRESUMEN\n";
    contenido += `Total familias: ${totalFamilias}\n`;
    contenido += `Total adultos: ${totalAdultos}\n`;
    contenido += `Total niños: ${totalNinos}\n`;
    contenido += `Total asistentes: ${totalAsistentes}\n`;

    const archivo = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(archivo);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "asistentes.txt";
    enlace.click();

    URL.revokeObjectURL(url);
}

exportarAsistentes();