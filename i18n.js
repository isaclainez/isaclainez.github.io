/* =========================================================
   English / Spanish switch
   ---------------------------------------------------------
   English lives in the HTML. Spanish lives here.
   Each Spanish text is matched to an element by its data-i18n key
   (or data-i18n-attrs for things like alt text).

   When you edit English text in the HTML, update the same key here too.
   A key that's missing here simply stays in English.
   ========================================================= */

/* ON / OFF SWITCH
   false = translation off: the ES button is hidden and the site is always in English.
   true  = translation on: the ES / EN button shows in the menu. */
var TRANSLATION_ENABLED = false;

var ES = {
  /* Page titles */
  "meta.title.home": "Isac Lainez | Física y radioastronomía",
  "meta.title.blog": "Blog | Isac Lainez",
  "meta.title.photo": "Fotografía | Isac Lainez",

  /* Navigation */
  "nav.research": "Investigación",
  "nav.experience": "Experiencia",
  "nav.publications": "Publicaciones",
  "nav.blog": "Blog",
  "nav.photography": "Fotografía",
  "nav.contact": "Contacto",
  "nav.cv": "CV",

  /* Hero */
  "hero.lede": "Físico que estudia <strong>púlsares</strong> con <strong>radiotelescopios</strong>. Soy estudiante de segundo año de la Maestría en Física de la Universidad de Puerto Rico en Mayagüez y estoy aplicando a programas de doctorado para otoño de 2027.",
  "hero.cv": "Descargar CV",
  "hero.email": "Escríbeme",
  "hero.portrait": "Retrato de Isac Lainez",
  "pulse.label": "Al periodo real de PSR B1919+21, un pulso cada 1.337 segundos. Fue el primer púlsar descubierto, por Jocelyn Bell Burnell y Antony Hewish en 1967.",

  "glance.now": "Actualmente",
  "glance.now.v": "Maestría en Física, segundo año, UPR Mayagüez",
  "glance.research": "Investigación",
  "glance.research.v": "Púlsares y radioastronomía",
  "glance.seeking": "Busco",
  "glance.seeking.v": "Posiciones de doctorado a partir de otoño de 2027",
  "glance.based": "Vivo en",
  "glance.based.v": "Mayagüez, Puerto Rico. Originario de Tegucigalpa, Honduras",

  /* About */
  "about.title": "Sobre mí",
  "about.p1": "¡Hola! Soy <strong>Isac Lainez</strong>, estudiante de segundo año de la Maestría en Física de la Universidad de Puerto Rico, Recinto de Mayagüez, donde paso la mayor parte del tiempo persiguiendo preguntas sobre el universo (y, de vez en cuando, persiguiendo café para sobrevivir al proceso).",
  "about.p2": "Nací y crecí en Tegucigalpa, Honduras, y de alguna manera terminé mirando las estrellas, estudiando física y preguntándome cómo el universo logra ser a la vez increíblemente simple y ridículamente complicado.",
  "about.p3": "Cuando no estoy entre ecuaciones, código y artículos, normalmente estoy leyendo, viendo películas, haciendo senderismo o fingiendo que sé hacia dónde va el sendero. Si quieres hablar de ciencia, libros o películas, <a href=\"#contact\">escríbeme</a>.",
  "about.quote": "«El nitrógeno de nuestro ADN, el calcio de nuestros dientes, el hierro de nuestra sangre y el carbono de nuestras tartas de manzana se formaron en el interior de estrellas que colapsaron. Estamos hechos de materia estelar.»<cite>Carl Sagan, Cosmos</cite>",

  /* Research */
  "research.title": "Investigación",
  "research.lead": "Uso observaciones de radio de púlsares para estudiar física extrema y la estructura de nuestra galaxia.",
  "research.kicker": "Proyecto actual, tesis de maestría",
  "research.ptitle": "[Título de tu tesis o proyecto]",
  "research.pdesc": "[Dos o tres oraciones: la pregunta que investigas, los datos o el telescopio que usas y lo que has encontrado o esperas encontrar.]",
  "research.advisor": "Asesor: [Nombre del asesor], Universidad de Puerto Rico en Mayagüez",
  "research.i1.t": "Astronomía de púlsares",
  "research.i1.d": "Cronometrar y caracterizar estrellas de neutrones para estudiar su emisión y su entorno.",
  "research.i2.t": "Radioastronomía",
  "research.i2.d": "Trabajo con datos de radiotelescopios de plato único y de interferómetros.",
  "research.i3.t": "Computación científica",
  "research.i3.d": "Desarrollo de flujos de análisis en Python para grandes conjuntos de datos astronómicos.",

  /* Carousel */
  "tel.title": "Telescopios y cielos",
  "tel.intro": "Lugares que me mantienen en este campo, desde los radiotelescopios que he visitado hasta la vista en el camino. Hay más en la <a href=\"photography.html\">página de fotografía</a>.",
  "tel.s1.alt": "El Telescopio de Green Bank sobre los árboles de un valle verde en Virginia Occidental",
  "tel.s1.place": "Observatorio de Green Bank, Virginia Occidental, junio de 2025",
  "tel.s1.text": "El Telescopio Robert C. Byrd de Green Bank, de 100 metros, el radiotelescopio totalmente orientable más grande del mundo, dentro de la Zona Nacional de Silencio Radioeléctrico.",
  "tel.s2.alt": "Una antena del Very Large Array bajo un cielo azul despejado, con más antenas en el horizonte",
  "tel.s2.place": "Llanuras de San Agustín, Nuevo México, junio de 2026",
  "tel.s2.text": "Veintisiete antenas de 25 metros repartidas por el desierto alto, combinadas para funcionar como un solo radiotelescopio.",
  "tel.s3.alt": "Vista desde la ventana de un avión de una isla larga y estrecha rodeada de agua turquesa y nubes",
  "tel.s3.place": "[Lugar, fecha]",
  "tel.s3.title": "Desde la ventanilla",
  "tel.s3.text": "Islas, arrecifes y cúmulos vistos desde arriba. El cielo vale la pena desde cualquier ángulo.",

  /* Experience */
  "exp.title": "Educación y experiencia",
  "exp.1.when": "2025 a 2027 (esperado)",
  "exp.1.title": "Maestría en Física",
  "exp.1.where": "Universidad de Puerto Rico en Mayagüez",
  "exp.1.detail": "[Enfoque de investigación, asesor, cursos relevantes.]",
  "exp.2.when": "[Mes Año a Mes Año]",
  "exp.2.title": "[Programa de investigación o pasantía]",
  "exp.2.where": "[Observatorio o institución]",
  "exp.2.detail": "[En qué trabajaste y qué produjiste.]",
  "exp.3.when": "[Año a Año]",
  "exp.3.title": "[Licenciatura en Física]",
  "exp.3.where": "[Institución], Honduras",
  "exp.3.detail": "[Honores, tesis o cualquier logro destacado.]",

  /* Teaching and outreach */
  "teach.title": "Docencia y divulgación",
  "teach.1.when": "[Semestre Año al presente]",
  "teach.1.title": "[Asistente de cátedra]",
  "teach.1.where": "[Nombre del curso], Universidad de Puerto Rico en Mayagüez",
  "teach.1.detail": "[Los laboratorios o recitaciones que diriges, cuántos estudiantes y qué enseñas.]",
  "teach.2.when": "[Mes Año]",
  "teach.2.title": "[Evento o programa de divulgación]",
  "teach.2.where": "[Lugar u organización]",
  "teach.2.detail": "[Qué hiciste, por ejemplo una noche de observación, una charla en una escuela o una jornada de puertas abiertas en un observatorio.]",

  /* Publications */
  "pubs.title": "Publicaciones y charlas",
  "pubs.poster": "Póster",
  "pubs.paper": "Artículo",
  "pubs.1.when": "[Año]",
  "pubs.1.title": "[Título del póster o charla]",
  "pubs.1.venue": "[Nombre del congreso], [Ciudad]",
  "pubs.2.when": "En preparación",
  "pubs.2.title": "[Título del artículo en preparación]",
  "pubs.2.venue": "Para enviar a [Revista]",
  "pubs.profiles": "Lista completa en",
  "pubs.and": "y",

  /* Skills */
  "skills.title": "Habilidades",
  "skills.prog": "Programación",
  "skills.radio": "Software de radioastronomía",
  "skills.obs": "Observación y datos",
  "skills.obs.v": "[Telescopios o sondeos con cuyos datos has trabajado, y el tiempo de observación que hayas tenido.]",
  "skills.lang": "Idiomas",
  "skills.lang.v": "Español (nativo), inglés",

  /* News and now */
  "news.title": "Noticias",
  "news.1.date": "nov 2026",
  "news.1": "Rediseñé este sitio antes de aplicar al doctorado.",
  "news.2.date": "jul 2026",
  "news.2": "Reconstruí la página principal.",
  "news.3.date": "jun 2026",
  "news.3": "Visité el Very Large Array en Nuevo México.",
  "news.4.date": "jun 2025",
  "news.4": "Visité el Observatorio de Green Bank en Virginia Occidental.",
  "now.title": "Ahora mismo",
  "now.reading": "Leyendo",
  "now.reading.v": "[libro actual]",
  "now.listening": "Escuchando",
  "now.listening.v": "[artista actual]",
  "now.working": "Trabajando en",
  "now.working.v": "Aplicaciones al doctorado y mi tesis",
  "now.feeling": "Me siento",
  "now.feeling.v": "Curioso",
  "else.blog": "Notas sobre púlsares, la escuela graduada y el camino hasta aquí.",
  "else.photo": "Telescopios, cielos nocturnos y senderos.",

  /* Contact and footer */
  "contact.title": "Contacto",
  "contact.note": "Me encanta hablar de investigación, oportunidades de posgrado, el cosmos, libros o películas.",
  "contact.cv": "CV (PDF)",
  "contact.local": "Ahora mismo son las <span id=\"localTime\">--:--</span> en Mayagüez.",
  "footer.dept": "Departamento de Física, Universidad de Puerto Rico en Mayagüez",
  "footer.home": "Inicio",

  /* Blog page */
  "blog.intro": "Un espacio personal para compartir mi camino en la astrofísica, desde los púlsares y la radioastronomía hasta las ideas y experiencias que han marcado mi trayectoria como estudiante graduado. A medida que avance mi investigación, compartiré aquí mi trabajo, mis reflexiones y mis publicaciones.",
  "blog.empty.title": "Aún no hay publicaciones",
  "blog.empty.text": "La primera viene en camino. Mientras tanto, puedes escribirme a <a href=\"mailto:isac.lainez@upr.edu\">isac.lainez@upr.edu</a>.",

  /* Photography page */
  "photo.intro": "Una colección en curso de fotos de donde sea que esté: caminatas, cielos nocturnos, telescopios y cualquier cosa que me llame la atención. Nada profesional. Selecciona una foto para verla en tamaño completo.",
  "photo.1.meta": "Tela, Honduras, 14 de octubre de 2023",
  "photo.1.caption": "Tomada en la playa de Tela, Honduras, después del eclipse anular.",
  "photo.1.alt": "Playa de Tela, Honduras, después del eclipse anular",
  "photo.1.date": "14 oct 2023",
  "photo.2.meta": "Nuevo México, 4 de junio de 2026",
  "photo.2.caption": "El Very Large Array en Nuevo México, con las antenas a lo lejos.",
  "photo.2.alt": "Antenas del Very Large Array en Nuevo México",
  "photo.2.date": "4 jun 2026",
  "photo.2.place": "Very Large Array, Nuevo México",
  "photo.3.meta": "Green Bank, Virginia Occidental, 2 de junio de 2025",
  "photo.3.caption": "El Telescopio Robert C. Byrd de Green Bank, de 100 metros, en el Observatorio de Green Bank, Virginia Occidental.",
  "photo.3.alt": "El Telescopio de Green Bank en Virginia Occidental",
  "photo.3.date": "2 jun 2025",
  "photo.3.place": "Telescopio de Green Bank, Virginia Occidental",

  /* Labels used by buttons and screen readers */
  "ui.menuOpen": "Abrir menú",
  "ui.menuClose": "Cerrar menú",
  "ui.prevSlide": "Diapositiva anterior",
  "ui.nextSlide": "Diapositiva siguiente",
  "ui.showSlide": "Mostrar diapositiva",
  "ui.of": "de",
  "ui.pause": "Pausar presentación",
  "ui.play": "Reproducir presentación",
  "ui.prevPhoto": "Foto anterior",
  "ui.nextPhoto": "Foto siguiente",
  "ui.close": "Cerrar"
};

(function () {
  var STORAGE_KEY = 'site-lang';
  var originals = [];

  if (!TRANSLATION_ENABLED) {
    // hide the ES button (and its menu slot) and stay in English
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      (btn.closest('li') || btn).hidden = true;
    });
    window.siteLang = 'en';
    window.t = function (key, english) { return english; };
    return;
  }

  // Remember the English version of every translatable element
  document.querySelectorAll('[data-i18n], [data-i18n-attrs]').forEach(function (el) {
    var entry = { el: el, key: el.getAttribute('data-i18n'), html: null, attrs: [] };
    if (entry.key) entry.html = el.innerHTML;
    (el.getAttribute('data-i18n-attrs') || '').split(',').forEach(function (pair) {
      var parts = pair.split(':');
      if (parts.length !== 2) return;
      var attr = parts[0].trim();
      entry.attrs.push({ attr: attr, key: parts[1].trim(), value: el.getAttribute(attr) });
    });
    originals.push(entry);
  });

  // Translate a label used by script.js; falls back to the English text given
  window.t = function (key, english) {
    return window.siteLang === 'es' && ES[key] != null ? ES[key] : english;
  };

  function apply(lang) {
    window.siteLang = lang;
    var es = lang === 'es';

    originals.forEach(function (o) {
      if (o.key) o.el.innerHTML = es && ES[o.key] != null ? ES[o.key] : o.html;
      o.attrs.forEach(function (a) {
        o.el.setAttribute(a.attr, es && ES[a.key] != null ? ES[a.key] : a.value);
      });
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = es ? 'EN' : 'ES';
      btn.setAttribute('lang', es ? 'en' : 'es');
      btn.setAttribute('aria-label', es ? 'View in English' : 'Ver en español');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () { apply(window.siteLang === 'es' ? 'en' : 'es'); });
  });

  // English by default; remember a visitor's choice across pages
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  apply(saved === 'es' ? 'es' : 'en');
})();
