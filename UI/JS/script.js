document.addEventListener("DOMContentLoaded", () => {
  fetch("DATA/data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("project-container");

      data.projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card";

        const indicatorColor = project.status === "Running" ? "green" : "red";

        card.innerHTML = `
          <div class="card-header">
            <div class="header-content">
              <span class="icon"><i class="fas fa-user"></i></span>
              <h4>User : ${project.user}</h4>
            </div>
            <span class="menu-icon">...</span>
          </div>
          <hr>
          <div class="card-body">
            <div class="status-time-lorem">
              <div class="status-time">
                <div class="status">
                  <div class="indicator" style="background-color: ${indicatorColor};"></div>
                  <span>Running</span>
                </div>
                <div class="time">
                  <i class="fas fa-clock"></i>
                  <span>3.1 hrs</span>
                </div>
              </div>
              <hr>
              <div class="lorem-section">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="javascript:void(0);" class="details-link">Details</a>
                <div class="options-container">
                  <div class="option">
                    <i class="fas fa-share-alt"></i>
                    <span>Share Project</span>
                  </div>
                  <div class="option">
                    <i class="fas fa-copy"></i>
                    <span>Copy Project</span>
                  </div>
                  <div class="option">
                    <i class="fas fa-sync-alt"></i>
                    <span>Refresh</span>
                  </div>
                  <div class="option">
                    <i class="fas fa-clipboard-list"></i>
                    <span>Logs</span>
                  </div>
                  <div class="option">
                    <i class="fas fa-edit"></i>
                    <span>Edit</span>
                  </div>
                  <div class="option">
                    <i class="fas fa-trash"></i>
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="actions">
              <button class="start"><i class="fas fa-play"></i></button>
              <button class="stop"><i class="fas fa-stop"></i></button>
            </div>
          </div>
        `;

        card.querySelector(".details-link").addEventListener("click", () => {
          const optionsContainer = card.querySelector(".options-container");
          optionsContainer.classList.toggle("active");
        });

        card.querySelector(".start").addEventListener("click", () => {
          project.status = "Running";
          card.querySelector(".indicator").style.backgroundColor = "green";
          card.querySelector(".status span").textContent = "Running";
        });

        card.querySelector(".stop").addEventListener("click", () => {
          project.status = "Stopped";
          card.querySelector(".indicator").style.backgroundColor = "red";
          card.querySelector(".status span").textContent = "Stopped";
        });

        container.appendChild(card);
      });
    });
});
