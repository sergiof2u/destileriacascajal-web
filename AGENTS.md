# Destilería Cascajal — sitio web

Sitio de la Destilería Cascajal y de su licor Resplandor, en Subachoque, Cundinamarca. Estático, hecho con Astro,
para publicarse gratis en GitHub Pages en `destileriacascajal.com`.

Estas instrucciones aplican a cualquier IA que trabaje en este repositorio.

Las reglas del producto viven en el vault de Obsidian: `07 DESTILERÍA CASCAJAL/PÁGINA WEB/02 Criterios y
decisiones.md`, y las ideas generales en `01 Ideas para la página web.md` de la misma carpeta. Ante una
discrepancia, manda el vault.

La destilería es un proyecto aparte de SUMA: contabilidad, marca y comunicación separadas.

---

## Cómo se describe el producto (decidido el 2026-10-26)

- **Resplandor es un licor artesanal de caña.** La palabra *ron* puede aparecer en los textos, sin ser la
  denominación principal.
- **Graduación: entre 30 y 35 % vol.** La de cada lote va en su etiqueta.
- **Reposado con astillas de roble.** Nada de *añejo*, *añejamiento* ni barril.
- **Materia prima: caña de azúcar de la provincia de Gualivá.** Sin hablar de panela, miel virgen ni melaza.
- **Nada de cerveza**: ni comparaciones ni maridajes con cerveza.
- **Nada medicinal** ni alegaciones de salud.
- **Limoncello: 25 % vol**, en 375 ml.
- **El equipo** se describe como es: caldera de acero inoxidable de 160 L a gas, columna de cerca de metro y medio con
  vidrio, dos platos de burbuja de cobre y deflegmador. Nunca «alambique de cobre».

Los hechos que se repiten viven en `src/site.ts`. Si cambian, se cambian ahí.

## Venta y legal

- **No hay venta en línea** mientras la destilería no tenga registro sanitario. Los pedidos entran por WhatsApp.
- **Sin precios** en la página por ahora.
- **La verificación de edad** al entrar y **las leyendas obligatorias** del pie no se quitan.

## Reglas de redacción

- **Tuteo** al dirigirse al lector: tienes, quieres, escríbenos. Nunca voseo.
- **Nada de superlativos** ni promesas infladas. El tono es el del manifiesto: calma, ritual, sin prisa.
- **No prometer lo que no está confirmado** con Sergio (visitas, catas, envíos, precios).
- El manifiesto se publica tal como lo escribió Sergio, sin la palabra *medicina*.

## Identidad visual

Sale de la etiqueta verde de Resplandor y la amarilla del limoncello: el arco crema, la cabeza con plantas, las
hojas de línea, las líneas punteadas y «Producido en Subachoque». Letras: Bebas Neue (títulos), Josefin Sans
(texto) y Courier Prime (firma de origen). Colores en `src/styles/global.css`.
