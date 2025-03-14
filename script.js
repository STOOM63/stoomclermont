// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Boutons d'ouverture des modales
  var modalButtons = document.querySelectorAll('[data-modal-target]');
  modalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var target = button.getAttribute("data-modal-target");
      openModal(target);
    });
  });

  // Boutons de fermeture des modales
  var modalCloseButtons = document.querySelectorAll(".modal-close");
  modalCloseButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var modal = button.closest(".modal");
      closeModal(modal.id);
    });
  });
});

// Ouvre la modale correspondante
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Ferme la modale correspondante
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Fermer la modale en cliquant à l'extérieur du contenu
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Calculateur d'économies (fonction utilisée dans calculator.html)
function calculateSavings() {
  var cigarettesPerDay = parseFloat(document.getElementById("cigarettes").value);
  var pricePerPack = parseFloat(document.getElementById("price").value);
  var cigarettesPerPack = 20; // Nombre moyen de cigarettes par paquet
  
  if (isNaN(cigarettesPerDay) || isNaN(pricePerPack)) {
    alert("Veuillez entrer des valeurs valides.");
    return;
  }
  
  var dailyCost = (cigarettesPerDay / cigarettesPerPack) * pricePerPack;
  var weeklySavings = dailyCost * 7;
  var monthlySavings = dailyCost * 30;
  var yearlySavings = dailyCost * 365;
  
  document.getElementById("result").innerHTML =
    "<p>Économie quotidienne : " + dailyCost.toFixed(2) + " €</p>" +
    "<p>Économie hebdomadaire : " + weeklySavings.toFixed(2) + " €</p>" +
    "<p>Économie mensuelle : " + monthlySavings.toFixed(2) + " €</p>" +
    "<p>Économie annuelle : " + yearlySavings.toFixed(2) + " €</p>";
}
