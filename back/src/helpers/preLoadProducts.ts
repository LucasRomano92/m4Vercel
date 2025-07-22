import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [{
   name: "Batería Electrónica Pro X1",
    description: "Descubrí la potencia y versatilidad de la Batería Electrónica Pro X1: sonidos realistas, pads sensibles al tacto y múltiples configuraciones para todo tipo de músicos. Ideal para estudio, vivo o práctica silenciosa.",
    price: 699,
    stock: 10,
    image: "https://maneimport.com/wp-content/uploads/2020/02/alesispro1.jpeg",
    categoryId: 2
  },
  {
    
    name: "Teclado MIDI MacKeys 88",
    description: "Combiná portabilidad y control profesional con el MacKeys 88: teclado MIDI de 88 teclas contrapesadas, ideal para producción, composición y directo. Compatible con los principales DAWs y software de música.",
    price: 999,
    stock: 10,
    image: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/KEUAAOSwSDZZpnDO/$_12.JPG",
    categoryId: 3
  },
  {
    
    name: "iStrum Guitarra Electroacústica Pro",
    description: "Liberá tu creatividad con la iStrum Electroacústica Pro: cuerpo liviano, sonido cálido y conexión directa a amplificadores. Perfecta para grabar, tocar en vivo o disfrutar en casa.",
    price: 799,
    stock: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXElIlSGwMWwB7AozlZ-Y0HHAwizO5PeGxg&s",
    categoryId: 1
  },
  {
    
    name: "BeatWatch Metrónomo Inteligente",
    description: "Controlá tu ritmo con el BeatWatch: un reloj-metrónomo con vibración, visualización LED y conexión Bluetooth para sincronizar con tu banda o app de práctica. Llevá el tempo contigo siempre.",
    price: 399,
    stock: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cggHiJo7tu--SNZasKEYTF4HdwiWnOPRrHAXIPx_ZxoD06jnoV0g31rsUg6Pv_IqEy0&usqp=CAU",
    categoryId: 9
  },
  {
    
    name: "AirTone In-Ear Monitors Pro",
    description: "Sumergite en el sonido con los AirTone Pro: monitores in-ear con cancelación activa de ruido, calidad de estudio y diseño ergonómico. Ideales para músicos en vivo, DJs y productores exigentes.",
    price: 249,
    stock: 10,
    image: "https://pacificears.com.au/cdn/shop/files/02-AM-ProX-20-Rear-Final-1536x1152-1_9186f1bd-8aea-40d7-92ea-ec6d9a46e485.jpg?v=1714968910&width=1536",
    categoryId: 9
  },
  {
    
    name: "SoundBox Mini Amplificador Portátil",
    description: "Llevá tu música a todas partes con el SoundBox Mini: amplificador compacto con gran potencia, entrada auxiliar, Bluetooth y batería recargable. Ideal para ensayos callejeros o pequeñas presentaciones.",
    price: 99,
    stock: 10,
    image: "https://m.media-amazon.com/images/I/81tya2JxcLL._AC_UF1000,1000_QL80_.jpg",
    categoryId: 9
  },
    {
    name: "SynthStation Analog Vibe",
    description: "Explorá paisajes sonoros infinitos con el SynthStation Analog Vibe: sintetizador analógico con osciladores vintage, secuenciador por pasos y filtros dinámicos. Perfecto para ambient, techno o experimentación.",
    price: 1299,
    stock: 5,
    image: "https://media.sweetwater.com/m/products/image/31f2a992c3z1aFr0GUPw6ajrWIS369UD9b3OKdgX.jpg?quality=82&width=750&ha=31f2a992c36936da",
    categoryId: 3
  },
  {
    name: "SaxoWave Pro Tenor",
    description: "Elegancia y potencia en cada nota con el SaxoWave Pro Tenor: acabado dorado, digitación precisa y estuche rígido. Ideal para estudiantes avanzados y músicos profesionales.",
    price: 1599,
    stock: 0,
    image: "https://rvb-img.reverb.com/image/upload/s--OvaowZWt--/a_0/t_card-square/v1743287226/u9txuypqne9weu9cfk2l.jpg",
    categoryId: 7
  }

];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
