let alumnes = [];

const formulari = document.getElementById("formulariAlumne");
const nomInput = document.getElementById("nom");
const examenInput = document.getElementById("examen");
const practiquesInput = document.getElementById("practiques");
const actitudInput = document.getElementById("actitud");
const missatge = document.getElementById("missatge");
const cosTaula = document.getElementById("cosTaula");
const btnAsc = document.getElementById("ordenarAsc");
const btnDesc = document.getElementById("ordenarDesc");

function validarFormulari() {
    const nom = nomInput.value.trim();
    const examen = parseFloat(examenInput.value);
    const practiques = parseFloat(practiquesInput.value);
    const actitud = parseFloat(actitudInput.value);

    if (nom === "") {
        mostrarMissatge("El nom no pot estar buit", "error");
        return false;
    }

    if (isNaN(examen) || examen < 0 || examen > 10) {
        mostrarMissatge("La nota d'examen ha de ser entre 0 i 10", "error");
        return false;
    }

    if (isNaN(practiques) || practiques < 0 || practiques > 10) {
        mostrarMissatge("La nota de pràctiques ha de ser entre 0 i 10", "error");
        return false;
    }

    if (isNaN(actitud) || actitud < 0 || actitud > 10) {
        mostrarMissatge("La nota d'actitud ha de ser entre 0 i 10", "error");
        return false;
    }

    return true;
}

function crearAlumne() {
    const alumne = {
        nom: nomInput.value.trim(),
        examen: parseFloat(examenInput.value),
        practiques: parseFloat(practiquesInput.value),
        actitud: parseFloat(actitudInput.value),
        notaFinal: 0
    };

    alumne.notaFinal = calcularNotaFinal(alumne);
    return alumne;
}

function calcularNotaFinal(alumne) {
    return (alumne.examen * 0.6) +
           (alumne.practiques * 0.3) +
           (alumne.actitud * 0.1);
}

function mostrarMissatge(text, tipus) {
    missatge.textContent = text;
    missatge.className = tipus;
}

function mostrarAlumnes() {
    cosTaula.innerHTML = "";

    alumnes.forEach(function(alumne) {

        const nota = alumne.notaFinal.toFixed(1);
        const estat = alumne.notaFinal >= 5 ? "Aprovat" : "Suspès";
        const classe = alumne.notaFinal >= 5 ? "aprovat" : "suspes";

        const fila = `
            <tr>
                <td>${alumne.nom}</td>
                <td>${alumne.examen.toFixed(2)}</td>
                <td>${alumne.practiques.toFixed(2)}</td>
                <td>${alumne.actitud.toFixed(2)}</td>
                <td>${nota}</td>
                <td class="${classe}">${estat}</td>
            </tr>
        `;

        cosTaula.innerHTML += fila;
    });
}

btnAsc.addEventListener("click", function() {
    alumnes.sort(function(a, b) {
        return a.notaFinal - b.notaFinal;
    });
    mostrarAlumnes();
});

btnDesc.addEventListener("click", function() {
    alumnes.sort(function(a, b) {
        return b.notaFinal - a.notaFinal;
    });
    mostrarAlumnes();
});