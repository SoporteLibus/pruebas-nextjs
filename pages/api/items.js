// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
  {
    id: 0,
    title: "Figura octocat",
    price: 100,
    image: "http://localhost:3000/img/octocat.webp",
    descripcion: "¡Estas pegatinas Octocat de 3 pulgadas son divertidas para todas las edades! Vienen en paquetes de 10 o 50. Estas calcomanías seguramente mejorarán cualquier cosa en la que las pegues."
  },
  {
    id: 1,
    title: "Gorra",
    price: 200,
    image: "http://localhost:3000/img/mug.webp",
    descripcion: "Mantenga la cabeza abrigada y el código fluyendo con el gorro Invertocat 2.0. Úselo con o sin puños, estos tejidos waffle de peso medio son de doble capa pero transpirables para proteger esas orejas de octogato en cualquier clima."
  },
  {
    id: 2,
    title: "Sudadera Halo",
    price: 200,
    image: "http://localhost:3000/img/tshirt01.webp",
    descripcion: "Imagen Sudadera Halo"
  },
  {
    id: 3,
    title: "Atom 2.0 Shirt",
    price: 200,
    image: "http://localhost:3000/img/tshirt02.webp",
    descripcion: "Impresiona a tus amigos, familiares y compañeros de viaje en el tiempo por igual con esta camiseta Atom(2.0) nueva y mejorada. ¡Únete a la revolución Atom! La camiseta Atom es una camiseta Next Level disponible en tallas para hombres y mujeres. Las camisetas son de triple mezcla, disponibles en azul medianoche y crema de plátano."
  },
  {
    id: 4,
    title: "Invertocat 2.0 Coaster",
    price: 30,
    image: "http://localhost:3000/img/coaster01.webp",
    descripcion: "Dale a tu escritorio nada más que lo mejor y mejora tu juego de posavasos con estos nuevos posavasos Invertocat 2.0 de bambú ecológicos. Incluye cuatro posavasos grabados con láser con soporte para posavasos."
  },
  {
    id: 5,
    title: "Glow in the Dark Sticker Pack",
    price: 5,
    image: "http://localhost:3000/img/stickers02.webp",
    descripcion: "Imagen Glow in the Dark"
  },
  {
    id: 6,
    title: "Adventure Sticker Pack",
    price: 10,
    image: "http://localhost:3000/img/stickers01.webp",
    descripcion: "¡Nos vamos de aventura! Deja volar tu imaginación con el nuevo paquete de pegatinas de aventura. Con varios Octocats nunca antes impresos y algunos viejos amigos, este paquete está aquí para celebrar el viaje tanto como el final."
  },
  {
    id: 7,
    title: "Invertocat Pullover Hoodie",
    price: 10,
    image: "http://localhost:3000/img/pullover01.webp",
    descripcion: "Si bien no hay nada como una sudadera con capucha negra original de GitHub, estas nuevas sudaderas con capucha son un clásico instantáneo. Con Invertocats bordados tono sobre tono en el pecho y la muñeca, estas discretas sudaderas con capucha te harán lucir tan fresco y tan limpio (¡y tan cálido!)"
  }
])
}
