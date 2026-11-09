const mapsQuery = "Campo de Futebol da Manguela, Azias - Ponte da Barca";

export const CONTACT = {
  phoneDisplay: "+351 932 287 445",
  phoneHref: "tel:+351932287445",
  email: "assdesazias@gmail.com",
  emailHref: "mailto:assdesazias@gmail.com",
  address: mapsQuery,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  facebook: "https://www.facebook.com/profile.php?id=61565229806192",
  instagram: "https://www.instagram.com/aziasfc",
} as const;
