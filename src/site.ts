// Datos del sitio. Todo lo que se repite en varias secciones vive acá y en
// ningún otro lugar. Las decisiones sobre cómo se describe el producto están
// en el vault: `07 DESTILERÍA CASCAJAL/PÁGINA WEB/02 Criterios y decisiones.md`.

export const site = {
  nombre: 'Destilería Cascajal',
  marca: 'Resplandor',
  tagline: 'Licor artesanal de caña, hecho en Subachoque',
  // Lema de la contraetiqueta 2026.
  lema: 'Florecimiento del ser',
  descripcion:
    'Destilería Cascajal: Resplandor, licor artesanal de caña reposado con astillas de roble, y limoncello. Micro lotes destilados a mano en Subachoque, Cundinamarca, a 2.700 metros.',

  // Pedidos: por WhatsApp. No hay venta en línea mientras la destilería no
  // tenga registro sanitario.
  whatsapp: '573164142904',
  whatsappVisible: '316 414 2904',

  lugar: 'Subachoque, Cundinamarca',
  altura: '2.700 metros',
} as const;

export const whatsappUrl = (texto?: string) =>
  `https://wa.me/${site.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

// Hechos del producto. Si cambian, se cambian acá.
export const resplandor = {
  denominacion: 'Licor artesanal de caña',
  graduacion: '30 – 35 % vol',
  medidas: ['750 ml', '375 ml'],
  materiaPrima: 'Caña de azúcar de la provincia de Gualivá',
  reposo: 'Con astillas de roble',
} as const;

export const limoncello = {
  denominacion: 'Licor artesanal',
  graduacion: '25 % vol',
  medidas: ['375 ml'],
} as const;

// Leyendas obligatorias en la publicidad de licores en Colombia.
export const leyendas = [
  'El exceso de alcohol es perjudicial para la salud.',
  'Prohíbase el expendio de bebidas embriagantes a menores de edad.',
] as const;

export const nav = [
  { href: '#resplandor', label: 'Resplandor' },
  { href: '#limoncello', label: 'Limoncello' },
  { href: '#como-se-hace', label: 'Cómo se hace' },
  { href: '#manifiesto', label: 'Manifiesto' },
  { href: '#pedidos', label: 'Pedidos' },
] as const;
