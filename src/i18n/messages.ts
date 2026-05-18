export type Locale = "es" | "en";

export type Messages = {
  brandTagline: string;
  brandDescription: string;
  campusKidsShort: string;
  campusAcademyShort: string;
  nav: { campus: string; experience: string; map: string; contact: string };
  header: { kids: string; academy: string; bookVisit: string };
  hero: {
    badge: string;
    badgeMobile: string;
    titleBefore: string;
    titleHighlight: string;
    body: string;
    ctaCampus: string;
    ctaAdmission: string;
    statCampuses: string;
    statTours: string;
    statMarketing: string;
    imageAlt: string;
    imageCaption: string;
  };
  campusSplit: {
    kicker: string;
    title: string;
    body: string;
    kidsBadge: string;
    academyBadge: string;
    cta: string;
  };
  bento: {
    kicker: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  stats: {
    kicker: string;
    title: string;
    items: { label: string }[];
  };
  map: {
    kicker: string;
    title: string;
    hint: string;
    campusLabel: string;
    openMaps: string;
  };
  lead: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    placeholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  contact: {
    kicker: string;
    title: string;
    thanksTitle: string;
    thanksBody: string;
    again: string;
    stepWord: string;
    stepBetween: string;
    back: string;
    next: string;
    send: string;
    sending: string;
    error: string;
    steps: {
      title: string;
      placeholder?: string;
    }[];
    campusOptions: { value: string; label: string }[];
  };
  wa: {
    menuTitle: string;
    admission: string;
    families: string;
    admissionBody: string;
    familiesBody: string;
    ariaOpen: string;
  };
  footer: {
    campus: string;
    legal: string;
    social: string;
    privacy: string;
    terms: string;
    credit: string;
  };
  controls: { themeLight: string; themeDark: string; langEs: string; langEn: string };
  campusPage: {
    miniKicker: string;
    tourKids: string;
    tourKidsCopy: string;
    galleryKidsTitle: string;
    galleryKidsCopy: string;
    tourAcademy: string;
    tourAcademyCopy: string;
    galleryAcademyTitle: string;
    galleryAcademyCopy: string;
    scheduleTour: string;
    requestAdmission: string;
    backHub: string;
    imageKidsAlt: string;
    imageAcademyAlt: string;
  };
  campusExperience: {
    reelLabel: string;
    curriculumTitle: string;
    curriculumSubtitle: string;
    levelLabel: string;
    levels: { name: string; detail: string }[];
  };
};

export const messages: Record<Locale, Messages> = {
  es: {
    brandTagline: "El Nido Digital",
    brandDescription:
      "Red de daycares donde cada niño crece con alegría, bilingüismo y tecnología con propósito.",
    campusKidsShort:
      "Juego, emoción y primeras palabras en dos idiomas.",
    campusAcademyShort:
      "Rutina académica sólida, STEAM y inglés todos los días.",
    nav: {
      campus: "Campus",
      experience: "Experiencia",
      map: "Ubicaciones",
      contact: "Contacto",
    },
    header: {
      kids: "Preescolar",
      academy: "Academia",
      bookVisit: "Agendar visita",
    },
    hero: {
      badge: "Daycare · Bilingüe · Tecnología con corazón",
      badgeMobile: "GUARDERÍA BILINGÜE CORAZÓN",
      titleBefore: "Donde el aprendizaje",
      titleHighlight: "cobra vida",
      body: "Explora nuestros dos campus y elige la energía que mejor acompaña a tu familia.",
      ctaCampus: "Elegir campus",
      ctaAdmission: "Hablar con admisión",
      statCampuses: "campus insignia",
      statTours: "espacios preparados",
      statMarketing: "atención personalizada",
      imageAlt: "Niños en actividades guiadas en Vanguard Kids",
      imageCaption: "Aprendiendo con alegría cada día",
    },
    campusSplit: {
      kicker: "Nuestros campus",
      title: "Dos experiencias, un mismo estándar de cuidado",
      body: "Elige el ambiente que mejor encaje con la edad y los objetivos de tu familia.",
      kidsBadge: "Enfoque lúdico",
      academyBadge: "Bilingüe · STEAM",
      cta: "Entrar al mini-site",
    },
    bento: {
      kicker: "Por qué Vanguard Kids",
      title: "Más que un daycare: un nido para crecer",
      intro:
        "Combinamos cariño, bilingüismo y rutinas claras para que tu hijo se sienta seguro desde el primer día.",
      items: [
        {
          title: "Bilingüismo cada día",
          desc: "Inglés y español en juego, canciones, rutinas y conversación natural.",
        },
        {
          title: "Ambientes seguros",
          desc: "Salones luminosos, patios y materiales pensados para explorar con confianza.",
        },
        {
          title: "Equipo cercano",
          desc: "Educadores que conocen a cada niño y comunican con las familias.",
        },
        {
          title: "Adaptación con cariño",
          desc: "Acompañamos el ingreso paso a paso, con paciencia y seguimiento.",
        },
        {
          title: "Preparación escolar",
          desc: "De los primeros pasos al Kindergarten con bases sólidas en STEAM.",
        },
      ],
    },
    stats: {
      kicker: "Por qué nosotros",
      title: "Métricas con alma, no con frío corporativo",
      items: [
        { label: "Años cuidando familias" },
        { label: "Idiomas en aula" },
        { label: "Especialistas pedagógicos" },
        { label: "Momentos mágicos al día" },
      ],
    },
    map: {
      kicker: "Mapa vivo",
      title: "Dos ubicaciones, una promesa de excelencia",
      hint: "Visítanos en el campus más cercano a tu familia.",
      campusLabel: "Campus",
      openMaps: "Abrir en Maps",
    },
    lead: {
      kicker: "Recursos para familias",
      title: "Ebook gratuito: 5 claves para la adaptación al daycare",
      body: "Déjanos tu correo y te enviamos la guía con consejos prácticos para los primeros días.",
      emailLabel: "Correo del papá o la mamá",
      placeholder: "hola@familia.com",
      submit: "Quiero el ebook",
      sending: "Enviando…",
      success: "¡Listo! Revisa tu bandeja en unos minutos.",
      error: "Algo falló. Intenta de nuevo o escríbenos por WhatsApp.",
    },
    contact: {
      kicker: "Admisiones",
      title: "Cuéntanos sobre tu familia",
      thanksTitle: "¡Gracias!",
      thanksBody: "Nuestro equipo de admisión te contactará muy pronto.",
      again: "Enviar otro mensaje",
      stepWord: "Paso",
      stepBetween: "de",
      back: "Atrás",
      next: "Siguiente",
      send: "Enviar",
      sending: "Enviando…",
      error: "No pudimos enviar. Intenta otra vez o usa WhatsApp.",
      steps: [
        { title: "¿Cómo se llama tu pequeño?", placeholder: "Ej: Lucía" },
        { title: "¿Qué edad tiene?", placeholder: "Ej: 2 años y 4 meses" },
        { title: "Un placer conocerlos. ¿Tu nombre?", placeholder: "Tu nombre completo" },
        {
          title: "Déjanos un WhatsApp para enviarte el folleto digital",
          placeholder: "+57 …",
        },
        { title: "¿Qué campus te interesa más?" },
        {
          title: "Cuéntanos cualquier detalle (alergias, horarios, inglés…)",
          placeholder: "Opcional",
        },
      ],
      campusOptions: [
        { value: "vanguard-kids", label: "Vanguard Kids Preschool" },
        { value: "vanguard-kids-academy", label: "Vanguard Kids Academy" },
        { value: "both", label: "Aún no decido / ambos" },
      ],
    },
    wa: {
      menuTitle: "WhatsApp",
      admission: "Hablar con Admisión",
      families: "Soporte para padres",
      admissionBody: "Hola Vanguard Kids, quiero información de admisión.",
      familiesBody: "Hola, soy familia Vanguard Kids y necesito ayuda.",
      ariaOpen: "Abrir menú de WhatsApp",
    },
    footer: {
      campus: "Campus",
      legal: "Legal",
      social: "Síguenos",
      privacy: "Política de privacidad",
      terms: "Términos",
      credit: "Todos los derechos reservados.",
    },
    controls: {
      themeLight: "Tema claro",
      themeDark: "Tema oscuro",
      langEs: "Español",
      langEn: "English",
    },
    campusPage: {
      miniKicker: "Campus",
      tourKids: "Conoce nuestros espacios",
      tourKidsCopy:
        "Salones coloridos, zonas de juego y patios donde los pequeños exploran con alegría y seguridad.",
      galleryKidsTitle: "Momentos en el aula",
      galleryKidsCopy:
        "Un vistazo a la vida diaria: arte, música, juego libre y primeras palabras en dos idiomas.",
      tourAcademy: "Aulas y laboratorios bilingües",
      tourAcademyCopy:
        "Espacios para lectura, ciencia y proyectos STEAM con rutinas académicas claras.",
      galleryAcademyTitle: "Aprendizaje en acción",
      galleryAcademyCopy:
        "Proyectos, lectura en inglés y trabajo en equipo que preparan para el siguiente paso.",
      scheduleTour: "Agendar recorrido",
      requestAdmission: "Solicitar admisión",
      backHub: "← Volver al hub",
      imageKidsAlt: "Aula colorida y materiales lúdicos",
      imageAcademyAlt: "Estudiantes en ambiente de aprendizaje bilingüe",
    },
    campusExperience: {
      reelLabel: "Galería",
      curriculumTitle: "Programa por edades",
      curriculumSubtitle:
        "Cada nivel está diseñado para el desarrollo emocional, cognitivo y bilingüe de tu hijo.",
      levelLabel: "Nivel",
      levels: [
        {
          name: "Exploradores",
          detail: "Sensorial, rutinas de afecto y primeras palabras.",
        },
        {
          name: "Creativos",
          detail: "Arte, música y juego simbólico con vocabulario bilingüe.",
        },
        {
          name: "Inventores",
          detail: "Resolución de problemas, matemáticas vivas y STEAM suave.",
        },
      ],
    },
  },
  en: {
    brandTagline: "The Digital Nest",
    brandDescription:
      "A daycare network where every child grows with joy, bilingualism, and purposeful technology.",
    campusKidsShort:
      "Play, emotion, and first words in two languages.",
    campusAcademyShort:
      "Strong academic routines, STEAM, and English every day.",
    nav: {
      campus: "Campuses",
      experience: "Experience",
      map: "Locations",
      contact: "Contact",
    },
    header: {
      kids: "Preschool",
      academy: "Academy",
      bookVisit: "Book a visit",
    },
    hero: {
      badge: "Daycare · Bilingual · Heart-led tech",
      badgeMobile: "DAYCARE BILINGUAL HEART",
      titleBefore: "Where learning",
      titleHighlight: "comes alive",
      body: "Explore both campuses and pick the energy that fits your family best.",
      ctaCampus: "Choose a campus",
      ctaAdmission: "Talk to admissions",
      statCampuses: "flagship campuses",
      statTours: "purpose-built spaces",
      statMarketing: "personalized care",
      imageAlt: "Children enjoying guided activities at Vanguard Kids",
      imageCaption: "Learning with joy every day",
    },
    campusSplit: {
      kicker: "Our campuses",
      title: "Two experiences, one standard of care",
      body: "Choose the setting that best fits your child’s age and your family’s goals.",
      kidsBadge: "Play-first focus",
      academyBadge: "Bilingual · STEAM",
      cta: "Open mini-site",
    },
    bento: {
      kicker: "Why Vanguard Kids",
      title: "More than daycare: a nest to grow",
      intro:
        "We blend warmth, bilingual learning, and clear routines so children feel safe from day one.",
      items: [
        {
          title: "Daily bilingualism",
          desc: "English and Spanish through play, songs, routines, and natural conversation.",
        },
        {
          title: "Safe environments",
          desc: "Bright classrooms, playgrounds, and materials built for confident exploration.",
        },
        {
          title: "Caring team",
          desc: "Teachers who know each child and stay in touch with families.",
        },
        {
          title: "Gentle onboarding",
          desc: "We support the transition step by step, with patience and follow-up.",
        },
        {
          title: "School readiness",
          desc: "Strong foundations in STEAM from early years through Kindergarten prep.",
        },
      ],
    },
    stats: {
      kicker: "Why us",
      title: "Human metrics, not cold corporate charts",
      items: [
        { label: "Years caring for families" },
        { label: "Languages in the classroom" },
        { label: "Pedagogy specialists" },
        { label: "Magical moments per day" },
      ],
    },
    map: {
      kicker: "Live map",
      title: "Two locations, one promise of excellence",
      hint: "Visit us at the campus closest to your family.",
      campusLabel: "Campus",
      openMaps: "Open in Maps",
    },
    lead: {
      kicker: "Resources for families",
      title: "Free ebook: 5 keys to daycare adaptation",
      body: "Share your email and we’ll send practical tips for the first days at daycare.",
      emailLabel: "Parent email",
      placeholder: "hello@family.com",
      submit: "Send me the ebook",
      sending: "Sending…",
      success: "Done! Check your inbox in a few minutes.",
      error: "Something went wrong. Try again or message us on WhatsApp.",
    },
    contact: {
      kicker: "Admissions",
      title: "Tell us about your family",
      thanksTitle: "Thank you!",
      thanksBody: "Our admissions team will reach out very soon.",
      again: "Send another message",
      stepWord: "Step",
      stepBetween: "of",
      back: "Back",
      next: "Next",
      send: "Send",
      sending: "Sending…",
      error: "We couldn’t send it. Try again or use WhatsApp.",
      steps: [
        { title: "What’s your little one’s name?", placeholder: "e.g. Lucy" },
        { title: "How old are they?", placeholder: "e.g. 2 years 4 months" },
        { title: "Nice to meet you. Your name?", placeholder: "Full name" },
        {
          title: "Share a WhatsApp number for the digital brochure",
          placeholder: "+1 …",
        },
        { title: "Which campus interests you most?" },
        {
          title: "Anything else? (allergies, schedule, English goals…)",
          placeholder: "Optional",
        },
      ],
      campusOptions: [
        { value: "vanguard-kids", label: "Vanguard Kids Preschool" },
        { value: "vanguard-kids-academy", label: "Vanguard Kids Academy" },
        { value: "both", label: "Not sure yet / both" },
      ],
    },
    wa: {
      menuTitle: "WhatsApp",
      admission: "Talk to Admissions",
      families: "Parent support",
      admissionBody: "Hi Vanguard Kids — I’d like admissions information.",
      familiesBody: "Hi — I’m a Vanguard Kids family and I need help.",
      ariaOpen: "Open WhatsApp menu",
    },
    footer: {
      campus: "Campuses",
      legal: "Legal",
      social: "Follow us",
      privacy: "Privacy policy",
      terms: "Terms",
      credit: "All rights reserved.",
    },
    controls: {
      themeLight: "Light theme",
      themeDark: "Dark theme",
      langEs: "Español",
      langEn: "English",
    },
    campusPage: {
      miniKicker: "Campus",
      tourKids: "Explore our spaces",
      tourKidsCopy:
        "Colorful classrooms, play zones, and outdoor areas where children learn with joy and safety.",
      galleryKidsTitle: "Classroom moments",
      galleryKidsCopy:
        "Daily life: art, music, free play, and first words in two languages.",
      tourAcademy: "Bilingual classrooms & labs",
      tourAcademyCopy:
        "Spaces for reading, science, and STEAM projects with clear academic routines.",
      galleryAcademyTitle: "Learning in action",
      galleryAcademyCopy:
        "Projects, English literacy, and teamwork that prepare kids for what’s next.",
      scheduleTour: "Book a tour",
      requestAdmission: "Request admission",
      backHub: "← Back to hub",
      imageKidsAlt: "Colorful classroom and playful materials",
      imageAcademyAlt: "Students in a bilingual learning environment",
    },
    campusExperience: {
      reelLabel: "Gallery",
      curriculumTitle: "Programs by age",
      curriculumSubtitle:
        "Each level supports your child’s emotional, cognitive, and bilingual growth.",
      levelLabel: "Level",
      levels: [
        {
          name: "Explorers",
          detail: "Sensory play, nurturing routines, and first words.",
        },
        {
          name: "Creators",
          detail: "Art, music, and pretend play with bilingual vocabulary.",
        },
        {
          name: "Inventors",
          detail: "Problem-solving, living math, and gentle STEAM.",
        },
      ],
    },
  },
};
