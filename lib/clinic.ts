export const clinic = {
  name: 'Clínica Dental Virginia García Sánchez',
  phoneDisplay: '+34 923 10 02 67',
  phoneHref: 'tel:+34923100267',
  whatsappHref:
    'https://wa.me/34923100267?text=' +
    encodeURIComponent('Hola, me gustaría pedir cita en la Clínica Dental Virginia García Sánchez.'),
  address: 'C. de las Eras, 13, 37005 Salamanca',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Clínica Dental Virginia García Sánchez, C. de las Eras 13, 37005 Salamanca'),
  mapsEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('C. de las Eras, 13, 37005 Salamanca') +
    '&output=embed',
  rating: '4,9',
  reviews: '+440',
}

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Sobre Nosotros' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#contacto', label: 'Contacto' },
]
