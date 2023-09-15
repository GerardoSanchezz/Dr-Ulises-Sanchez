// Obtén todos los enlaces de tu página
const allLinks = document.querySelectorAll("a");
const headerEl = document.querySelector(".header");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Verifica si el enlace es un enlace interno (comienza con "#")
    if (href.startsWith("#")) {
      e.preventDefault(); // Previene el comportamiento predeterminado solo para enlaces internos

      // Scroll back to top o hacia otras secciones
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const sectionEl = document.querySelector(href);
        if (sectionEl) {
          sectionEl.scrollIntoView({
            behavior: "smooth",
          });
        }
      }

      // Cierra el menú de navegación móvil si está abierto
      headerEl.classList.remove("nav-open");
    } else {
      // Si el enlace es externo, permite la navegación normal
      // No es necesario hacer nada aquí
    }
  });
});
// console.log("Hello world!");

// const myName = "Jonas Schmedtmann";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// // h1.addEventListener("click", function () {
// //   h1.textContent = myName;
// //   h1.style.backgroundColor = "red";
// //   h1.style.padding = "5rem";
// // });

// ///////////////////////////////////////////////////////////
// // Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

// ///////////////////////////////////////////////////////////
// // Make mobile navigation work

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

// ///////////////////////////////////////////////////////////
// // Sticky navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

// ///////////////////////////////////////////////////////////
// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// Primer modal
const openModal = document.querySelector(".hero__cta");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal.classList.remove("modal--show");
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Segundo modal

const openModal2 = document.querySelector(".hero__cta2");
const modal2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector(".modal__close2");

openModal2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal2.classList.add("modal--show2"); // Cambia modal a modal2
});

closeModal2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal2.classList.remove("modal--show2"); // Cambia modal a modal2
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});

// TERCER MODAL

const openModal3 = document.querySelector(".hero__cta3");
const modal3 = document.querySelector(".modal3");
const closeModal3 = document.querySelector(".modal__close3");

openModal3.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal3.classList.add("modal--show3"); // Cambia modal a modal3
});

closeModal3.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal3.classList.remove("modal--show3"); // Cambia modal a modal3
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
});

// CUARTO MODAL

const openModal4 = document.querySelector(".hero__cta4");
const modal4 = document.querySelector(".modal4");
const closeModal4 = document.querySelector(".modal__close4");
const textoPegado = document.querySelector(".texto-pegado");

openModal4.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal4.classList.add("modal--show4"); // Cambia modal a modal4
});

textoPegado.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal4.classList.add("modal--show4");
  // Abre el modal o realiza la acción que desees aquí
  console.log("Texto clicado, abrir modal o realizar otra acción.");
});

closeModal4.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal4.classList.remove("modal--show4"); // Cambia modal a modal4
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
});

// QUINTO MODAL

const openModal5 = document.querySelector(".hero__cta5");
const modal5 = document.querySelector(".modal5");
const closeModal5 = document.querySelector(".modal__close5");

openModal5.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal5.classList.add("modal--show5"); // Cambia modal a modal5
});

closeModal5.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal5.classList.remove("modal--show5"); // Cambia modal a modal5
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal5) {
    modal5.style.display = "none";
  }
});

// SEXTO MODAL

const openModal6 = document.querySelector(".hero__cta6");
const modal6 = document.querySelector(".modal6");
const closeModal6 = document.querySelector(".modal__close6");

openModal6.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal6.classList.add("modal--show6"); // Cambia modal a modal6
});

closeModal6.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal6.classList.remove("modal--show6"); // Cambia modal a modal6
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal6) {
    modal6.style.display = "none";
  }
});

// SEPTIMO MODAL

const openModal7 = document.querySelector(".hero__cta7");
const modal7 = document.querySelector(".modal7");
const closeModal7 = document.querySelector(".modal__close7");

openModal7.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal7.classList.add("modal--show7"); // Cambia modal a modal7
});

closeModal7.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal7.classList.remove("modal--show7"); // Cambia modal a modal7
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal7) {
    modal7.style.display = "none";
  }
});

// OCTAVO MODAL

const openModal8 = document.querySelector(".hero__cta8");
const modal8 = document.querySelector(".modal8");
const closeModal8 = document.querySelector(".modal__close8");

openModal8.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal8.classList.add("modal--show8"); // Cambia modal a modal8
});

closeModal8.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal8.classList.remove("modal--show8"); // Cambia modal a modal8
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal8) {
    modal8.style.display = "none";
  }
});

// NOVENO MODAL

const openModal9 = document.querySelector(".hero__cta9");
const modal9 = document.querySelector(".modal9");
const closeModal9 = document.querySelector(".modal__close9");

openModal9.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal9.classList.add("modal--show9"); // Cambia modal a modal9
});

closeModal9.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal9.classList.remove("modal--show9"); // Cambia modal a modal9
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal9) {
    modal9.style.display = "none";
  }
});

// DECIMO MODAL

const openModal10 = document.querySelector(".hero__cta10");
const modal10 = document.querySelector(".modal10");
const closeModal10 = document.querySelector(".modal__close10");

openModal10.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL OPENED");
  modal10.classList.add("modal--show10"); // Cambia modal a modal10
});

closeModal10.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("MODAL CLOSED");
  modal10.classList.remove("modal--show10"); // Cambia modal a modal10
});
// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target === modal10) {
    modal10.style.display = "none";
  }
});
