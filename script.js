window.onload = function () {
  const inicio = document.getElementById("inicio");
  const videoIntro = document.getElementById("videoIntro");
  const elegante = document.getElementById("elegante");
  const musica = document.getElementById("musica");
  const videoFondo = document.getElementById("videoFondoInvitacion");
  let iniciado = false;

  // Iniciar la experiencia al hacer clic
  inicio.addEventListener("click", (e) => {
    if (iniciado) return;
    iniciado = true;
    
    const mensaje = document.getElementById("mensaje");
    if (mensaje) mensaje.style.display = "none";
    
    // Activar sonido de la intro
    videoIntro.muted = false;
    
    // Intentar reproducir la intro
    videoIntro.play().catch(error => {
      console.log("Error al reproducir video:", error);
      continuarConInvitacion();
    });

    videoIntro.onended = () => {
      continuarConInvitacion();
    };
    
    function continuarConInvitacion() {
      inicio.style.opacity = "0";
      setTimeout(() => {
        inicio.classList.remove("activa");
        elegante.classList.add("activa");
        
        if (videoFondo) {
          videoFondo.play().catch(e => console.log("Error video fondo:", e));
        }
        if (musica) {
          musica.volume = 0.4;
          musica.loop = true;
          musica.play().catch(e => console.log("Error música:", e));
        }
      }, 1000);
    }
  });

  // ========== CONTADOR REGRESIVO - MISA (28 de Abril 20:30) ==========
  const fechaMisa = new Date("April 28, 2026 20:30:00").getTime();

  function actualizarContadorMisa() {
    const ahora = new Date().getTime();
    const diferencia = fechaMisa - ahora;

    if (diferencia <= 0) {
      document.getElementById("diasMisa").innerText = "00";
      document.getElementById("horasMisa").innerText = "00";
      document.getElementById("minutosMisa").innerText = "00";
      document.getElementById("segundosMisa").innerText = "00";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("diasMisa").innerText = dias.toString().padStart(2, "0");
    document.getElementById("horasMisa").innerText = horas.toString().padStart(2, "0");
    document.getElementById("minutosMisa").innerText = minutos.toString().padStart(2, "0");
    document.getElementById("segundosMisa").innerText = segundos.toString().padStart(2, "0");
  }

  // ========== CONTADOR REGRESIVO - FIESTA (9 de Mayo 21:30) ==========
  const fechaFiesta = new Date("May 9, 2026 21:30:00").getTime();

  function actualizarContadorFiesta() {
    const ahora = new Date().getTime();
    const diferencia = fechaFiesta - ahora;

    if (diferencia <= 0) {
      document.getElementById("diasFiesta").innerText = "00";
      document.getElementById("horasFiesta").innerText = "00";
      document.getElementById("minutosFiesta").innerText = "00";
      document.getElementById("segundosFiesta").innerText = "00";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("diasFiesta").innerText = dias.toString().padStart(2, "0");
    document.getElementById("horasFiesta").innerText = horas.toString().padStart(2, "0");
    document.getElementById("minutosFiesta").innerText = minutos.toString().padStart(2, "0");
    document.getElementById("segundosFiesta").innerText = segundos.toString().padStart(2, "0");
  }

  // Iniciar ambos contadores
  actualizarContadorMisa();
  actualizarContadorFiesta();
  setInterval(() => {
    actualizarContadorMisa();
    actualizarContadorFiesta();
  }, 1000);

  // Botón de datos bancarios
  const btnBancarios = document.getElementById("btnBancarios");
  if (btnBancarios) {
    btnBancarios.addEventListener("click", () => {
      const datosDiv = document.getElementById("datosBancarios");
      if (datosDiv) {
        if (datosDiv.style.display === "none" || datosDiv.style.display === "") {
          datosDiv.style.display = "block";
          btnBancarios.textContent = "🙈 OCULTAR DATOS";
        } else {
          datosDiv.style.display = "none";
          btnBancarios.textContent = "💳 DATOS BANCARIOS";
        }
      }
    });
  }

  // Botón de confirmar asistencia
  const btnConfirmar = document.getElementById("btnConfirmar");
  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", (e) => {
      e.preventDefault();
      const mensajeConfirmacion = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia a tus 15 años ✨");
      window.open(`https://wa.me/+5493854354477?text=${mensajeConfirmacion}`, "_blank");
    });
  }

  // Botón de WhatsApp
  const btnWhatsapp = document.getElementById("btnWhatsapp");
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", (e) => {
      e.preventDefault();
      const mensaje = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia a tus 15 años ✨");
      window.open(`https://wa.me/+5493854354477?text=${mensaje}`, "_blank");
    });
  }
};