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