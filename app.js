const menu = document.getElementById("langMenu")

function setLang(lang) {
   const elements = document.querySelectorAll("[data-lang]");

   elements.forEach(el => {
      if (el.getAttribute("data-lang") === lang) {
         el.style.display = "";
      } else {
         el.style.display = "none";
      }
   });

   menu.classList.remove('activeMenu')
   localStorage.setItem("lang", lang);
}

// carregar idioma salvo
window.addEventListener("DOMContentLoaded", () => {
   const savedLang = localStorage.getItem("lang") || "pt";
   setLang(savedLang);
});


function toggleLangMenu() {
   const arrowCell = document.getElementById('arrowCell')
   menu.classList.toggle('activeMenu')

   if (arrowCell.textContent === "▲") {
      arrowCell.textContent = "▼";
   } else {
      arrowCell.textContent = "▲";
   }
};


let links = document.querySelectorAll('.link');
links.forEach(element => {
   element.addEventListener('click', () => {
      let active = document.querySelector('.active');
      active.classList.remove('active');

      element.classList.add('active');
   });
});


// hidden_opacity
let hidden_opacity = document.querySelectorAll('.hidden_opacity')

let myObserverOpacity = new IntersectionObserver(entry => {
   entry.forEach(entries => {
      if (entries.isIntersecting) {
         entries.target.classList.add('hidden_none')
      }
      else {
         entries.target.classList.remove('hidden_none')
      }
   })
})

hidden_opacity.forEach(hiddens => {
   myObserverOpacity.observe(hiddens)
})

let dObutttonsLInks = document.querySelector('.dObutttonsLInks')
function dowloadCv() {
   dObutttonsLInks.classList.toggle('dObutttonsLInks_activo')
}


function curriculum() {
   dObutttonsLInks.classList.remove('dObutttonsLInks_activo')
}


function enviarSMS() {
   window.location.href = 'mailto:angelinoeurico574@gmail.com'
}

const form = document.querySelector(".contact-form");
const successOverlay = document.getElementById("successOverlay");
const text_sucess = document.querySelector(".text_sucess");

form.addEventListener("submit", function (event) {
   event.preventDefault();

   const name = form.name.value.trim();
   const email = form.email.value.trim();
   const subject = form.subject.value.trim();
   const message = form.message.value.trim();

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // VALIDAÇÃO DE ERRO
   if (!name || !emailPattern.test(email) || !subject || !message) {
      successOverlay.classList.add("show");
      text_sucess.textContent = "Por favor, preencha todos os campos obrigatórios.";

      setTimeout(() => {
         successOverlay.classList.remove("show");
      }, 3000);

      return; // IMPORTANTE: para aqui
   }

   // SUCESSO → abrir email
   const mailtoLink = `mailto:angelinoeurico574@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      "Nome: " + name + "\nEmail: " + email + "\n\nMensagem:\n" + message
   )}`;

   window.location.href = mailtoLink;

   successOverlay.classList.add("show");
   text_sucess.textContent = "Mensagem pronta para envio!";

   setTimeout(() => {
      successOverlay.classList.remove("show");
   }, 3000);

   form.reset();
});
