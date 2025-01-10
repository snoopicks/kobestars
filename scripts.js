document.getElementById("calculForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const abeilles = parseInt(document.getElementById("abeilles").value);
    const boost = parseInt(document.getElementById("boost").value) / 100;
    const zone = parseFloat(document.getElementById("zone").value);

    const mielEstimé = abeilles * (1 + boost) * zone;
    document.getElementById("resultat").innerText = `Vous pouvez récolter environ ${mielEstimé.toFixed(2)} unités de miel.`;
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// scripts.js
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.textDecoration = "underline";
    });
    link.addEventListener("mouseleave", () => {
        link.style.textDecoration = "none";
    });
});

document.querySelectorAll('.bee-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

document.querySelectorAll('.strategy-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

document.getElementById("calculForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const abeilles = parseInt(document.getElementById("abeilles").value);
    const boost = parseInt(document.getElementById("boost").value) / 100;
    const zone = parseFloat(document.getElementById("zone").value);

    const mielEstimé = abeilles * (1 + boost) * zone;
    const resultatElement = document.getElementById("resultat");

    // Affiche le résultat avec une animation
    resultatElement.innerText = `Vous pouvez récolter environ ${mielEstimé.toFixed(2)} unités de miel.`;
    resultatElement.style.opacity = 0;
    setTimeout(() => {
        resultatElement.style.opacity = 1;
        resultatElement.style.transition = "opacity 0.5s ease-in-out";
    }, 50);
});


document.addEventListener("DOMContentLoaded", () => {
    const zoneCards = document.querySelectorAll(".zone-card");
    zoneCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});

