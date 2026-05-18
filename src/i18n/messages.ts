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
    imageBadge: string;
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
    canvasTitle: string;
    canvasSubtitle: string;
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
      statTours: "tours inmersivos",
      statMarketing: "marketing asistido",
      imageAlt: "Niños sonriendo en actividad guiada",
      imageCaption: "Cinemática + renders 3D de salones",
      imageBadge: "Próx: video hero",
    },
    campusSplit: {
      kicker: "Selector dual",
      title: "Dos experiencias, un mismo estándar de cuidado",
      body: "Pasa el cursor sobre cada tarjeta: se expanden con profundidad, color y microinteracciones pensadas para padres que buscan lo excepcional.",
      kidsBadge: "Enfoque lúdico",
      academyBadge: "Bilingüe · STEAM",
      cta: "Entrar al mini-site",
    },
    bento: {
      kicker: "Bento grid",
      title: "Experiencia digital tipo producto tech",
      intro:
        "Glassmorphism suave, pastel vibrante y motion que guía la mirada sin ruido. Así se siente un daycare del futuro.",
      items: [
        {
          title: "Galería inmersiva",
          desc: "Lightbox cinematográfico, reels verticales y highlights para móvil.",
        },
        {
          title: "Tour 3D / 360°",
          desc: "WebGL listo para integrar Matterport, Spline o Three.js.",
        },
        {
          title: "Currículo vivo",
          desc: "Niveles con iconos animados: lenguaje, socioemocional, STEAM.",
        },
        {
          title: "Hub de contacto",
          desc: "Formularios conversacionales, WhatsApp con menú y remarketing.",
        },
        {
          title: "Bots de marketing",
          desc: "Lead magnet + agendador con Google Calendar y confirmación por WA.",
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
      hint: "Sustituye los iframes por tus URLs reales de Google Maps Embed en .env o en src/lib/site.ts.",
      campusLabel: "Campus",
      openMaps: "Abrir en Maps",
    },
    lead: {
      kicker: "Lead magnet (base para tu bot)",
      title: "Ebook gratuito: 5 claves para la adaptación al daycare",
      body: "Deja tu correo y te enviamos la guía. Este endpoint ya guarda el lead en consola del servidor; luego conectas CRM, Meta CAPI o tu bot conversacional.",
      emailLabel: "Correo del papá o la mamá",
      placeholder: "hola@familia.com",
      submit: "Quiero el ebook",
      sending: "Enviando…",
      success: "¡Listo! Revisa tu bandeja en unos minutos.",
      error: "Algo falló. Intenta de nuevo o escríbenos por WhatsApp.",
    },
    contact: {
      kicker: "Hub de contacto",
      title: "Formulario que se siente como una conversación",
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
      privacy: "Política de privacidad",
      terms: "Términos",
      credit: "Hecho con Next.js, Tailwind y cariño para familias Vanguard Kids.",
    },
    controls: {
      themeLight: "Tema claro",
      themeDark: "Tema oscuro",
      langEs: "Español",
      langEn: "English",
    },
    campusPage: {
      miniKicker: "Mini-site",
      tourKids: "Tour 360° · salones y patio",
      tourKidsCopy:
        "Aquí integrarás Matterport, modelo 3D con Three.js o una escena Spline embebida.",
      galleryKidsTitle: "Galería & reels",
      galleryKidsCopy:
        "Carrusel vertical estilo Stories para testimonios de mamás y papás.",
      tourAcademy: "Laboratorios y aulas bilingües en 360°",
      tourAcademyCopy:
        "Placeholder WebGL: mismo contenedor que en Preschool, con assets propios de Academy.",
      galleryAcademyTitle: "Proyectos y competencias",
      galleryAcademyCopy:
        "Muestra robots, lectoescritura en inglés y evidencias de STEAM.",
      scheduleTour: "Agendar recorrido",
      requestAdmission: "Solicitar admisión",
      backHub: "← Volver al hub",
      imageKidsAlt: "Aula colorida y materiales lúdicos",
      imageAcademyAlt: "Estudiantes en ambiente de aprendizaje bilingüe",
    },
    campusExperience: {
      canvasTitle: "Canvas 360 / Spline",
      canvasSubtitle: "Sustituye este bloque por tu tour embebido.",
      reelLabel: "Reel / foto",
      curriculumTitle: "Currículo por niveles",
      curriculumSubtitle:
        "Clic en cada tarjeta (próximo: acordeón animado con iconografía Lottie).",
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
      statTours: "immersive tours",
      statMarketing: "assisted marketing",
      imageAlt: "Children smiling during a guided activity",
      imageCaption: "Cinematic footage + 3D classroom renders",
      imageBadge: "Next: hero video",
    },
    campusSplit: {
      kicker: "Dual selector",
      title: "Two experiences, one standard of care",
      body: "Hover each card: depth, color, and micro-interactions designed for families who expect the exceptional.",
      kidsBadge: "Play-first focus",
      academyBadge: "Bilingual · STEAM",
      cta: "Open mini-site",
    },
    bento: {
      kicker: "Bento grid",
      title: "A digital experience that feels like a tech product",
      intro:
        "Soft glassmorphism, vibrant pastels, and motion that guides the eye quietly. This is a daycare from the future.",
      items: [
        {
          title: "Immersive gallery",
          desc: "Cinematic lightbox, vertical reels, and mobile-first highlights.",
        },
        {
          title: "3D / 360° tour",
          desc: "WebGL-ready for Matterport, Spline, or Three.js embeds.",
        },
        {
          title: "Living curriculum",
          desc: "Levels with animated icons: language, SEL, and STEAM.",
        },
        {
          title: "Contact hub",
          desc: "Conversational forms, WhatsApp menu, and remarketing hooks.",
        },
        {
          title: "Marketing bots",
          desc: "Lead magnet + Google Calendar scheduling with WA confirmations.",
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
      hint: "Replace the iframes with your real Google Maps Embed URLs in .env or src/lib/site.ts.",
      campusLabel: "Campus",
      openMaps: "Open in Maps",
    },
    lead: {
      kicker: "Lead magnet (bot-ready)",
      title: "Free ebook: 5 keys to daycare adaptation",
      body: "Share your email and we’ll send the guide. This endpoint logs the lead server-side; next, plug in your CRM, Meta CAPI, or chatbot.",
      emailLabel: "Parent email",
      placeholder: "hello@family.com",
      submit: "Send me the ebook",
      sending: "Sending…",
      success: "Done! Check your inbox in a few minutes.",
      error: "Something went wrong. Try again or message us on WhatsApp.",
    },
    contact: {
      kicker: "Contact hub",
      title: "A form that feels like a conversation",
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
      privacy: "Privacy policy",
      terms: "Terms",
      credit: "Built with Next.js, Tailwind, and love for Vanguard Kids families.",
    },
    controls: {
      themeLight: "Light theme",
      themeDark: "Dark theme",
      langEs: "Español",
      langEn: "English",
    },
    campusPage: {
      miniKicker: "Mini-site",
      tourKids: "360° tour · classrooms & playground",
      tourKidsCopy:
        "Embed Matterport, a Three.js model, or a Spline scene right here.",
      galleryKidsTitle: "Gallery & reels",
      galleryKidsCopy:
        "Vertical Stories-style carousel for parent testimonials.",
      tourAcademy: "Labs & bilingual classrooms in 360°",
      tourAcademyCopy:
        "WebGL placeholder: same container as Preschool, with Academy assets.",
      galleryAcademyTitle: "Projects & competencies",
      galleryAcademyCopy:
        "Show robots, English literacy milestones, and STEAM evidence.",
      scheduleTour: "Book a tour",
      requestAdmission: "Request admission",
      backHub: "← Back to hub",
      imageKidsAlt: "Colorful classroom and playful materials",
      imageAcademyAlt: "Students in a bilingual learning environment",
    },
    campusExperience: {
      canvasTitle: "360 canvas / Spline",
      canvasSubtitle: "Replace this block with your embedded tour.",
      reelLabel: "Reel / photo",
      curriculumTitle: "Curriculum by levels",
      curriculumSubtitle:
        "Tap each card (next: animated accordion + Lottie icons).",
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
