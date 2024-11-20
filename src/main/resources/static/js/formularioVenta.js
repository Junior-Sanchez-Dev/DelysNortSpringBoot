// Función para cargar un archivo HTML en un contenedor
      function loadHTML(url, containerId) {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((data) => {
            console.log("Contenido cargado:", data); // Mensaje de depuración
            document.getElementById(containerId).innerHTML = data;
          })
          .catch((error) => {
            console.error("Error loading HTML:", error);
          });
      }

      // Cargar el encabezado y el pie de página
      loadHTML("/header.html", "header-container");
      loadHTML("/footer.html", "footer-container");