/** Centraliza enlaces: ajusta teléfonos, URLs de mapas y WhatsApp aquí. */

/** Marca principal del sitio (hub). */
export const brand = {
  name: "Vanguard Kids",
};

/** Archivos en /public */
/** Redes sociales — actualiza URLs reales aquí o con NEXT_PUBLIC_SOCIAL_* */
export const social = {
  instagram:
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ??
    "https://www.instagram.com/",
  facebook:
    process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "https://www.facebook.com/",
  youtube:
    process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "https://www.youtube.com/",
  tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK ?? "https://www.tiktok.com/",
};

export const brandAssets = {
  logo: "/logo.png",
  favicon: "/favicon.png",
  /** Fotos propias (public/img1.jpg … img4.jpg) */
  hero: "/img1.jpg",
  preschoolHero: "/img2.jpg",
  academyHero: "/img3.jpg",
  gallery: ["/img2.jpg", "/img3.jpg", "/img4.jpg"] as const,
};

export const whatsapp = {
  /** Formato internacional sin + ni espacios — +1 407 963 1784 */
  admission: process.env.NEXT_PUBLIC_WA_ADMISSION ?? "14079631784",
  families: process.env.NEXT_PUBLIC_WA_FAMILIES ?? "14079631784",
};

export function waLink(phone: string, text: string) {
  const q = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${q}`;
}

export const campuses = {
  kids: {
    slug: "vanguard-kids",
    path: "/vanguard-kids",
    title: "Vanguard Kids Preschool",
    short: "Juego, emoción y primeras palabras en dos idiomas.",
    accent: "kids" as const,
    mapsQuery: "Vanguard Kids Preschool",
    mapsOpenUrl:
      "https://www.google.com/maps/place/Vanguard+Kids/@27.9676121,-82.2511004,17z/data=!4m14!1m7!3m6!1s0x88c2cdbbed7bc68f:0x9e6743835393a9ac!2sVanguard+Kids!8m2!3d27.9676121!4d-82.2511004!16s%2Fg%2F11jj0_mykd!3m5!1s0x88c2cdbbed7bc68f:0x9e6743835393a9ac!8m2!3d27.9676121!4d-82.2511004!16s%2Fg%2F11jj0_mykd?entry=ttu",
    mapsEmbedUrl:
      process.env.NEXT_PUBLIC_MAPS_EMBED_KIDS ??
      "https://www.google.com/maps?q=27.9676121,-82.2511004&hl=en&z=17&output=embed",
  },
  academy: {
    slug: "vanguard-kids-academy",
    path: "/vanguard-kids-academy",
    title: "Vanguard Kids Academy",
    short: "Rutina académica sólida, STEAM y inglés todos los días.",
    accent: "academy" as const,
    mapsQuery: "Vanguard Kids Academy",
    mapsOpenUrl:
      "https://www.google.com/maps/place/Vanguard+Kids+Academy/@26.672253,-81.8164567,17z/data=!4m14!1m7!3m6!1s0x88db69ce2d2ae7e9:0x6191c08a53c6eb33!2sVanguard+Kids+Academy!8m2!3d26.672253!4d-81.8164567!16s%2Fg%2F11wvz5f0h9!3m5!1s0x88db69ce2d2ae7e9:0x6191c08a53c6eb33!8m2!3d26.672253!4d-81.8164567!16s%2Fg%2F11wvz5f0h9?entry=ttu",
    mapsEmbedUrl:
      process.env.NEXT_PUBLIC_MAPS_EMBED_ACADEMY ??
      "https://www.google.com/maps?q=26.672253,-81.8164567&hl=en&z=17&output=embed",
  },
};
