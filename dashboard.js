document.addEventListener("DOMContentLoaded", function() {
    const umkmCount = document.getElementById("umkm-count");
    const income = document.getElementById("income");
    const reports = document.getElementById("reports");

    // Simulate fetching data
    setTimeout(() => {
        umkmCount.textContent = "125";
        income.textContent = "Rp. 55.000.000";
        reports.textContent = "18";
    }, 2000);

    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.addEventListener("click", () => {
        alert("Anda telah logout");
        window.location.href = "login.html"; // Redirect to login page
    });
});
