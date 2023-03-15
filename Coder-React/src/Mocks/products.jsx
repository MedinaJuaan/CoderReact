import KitCctv from "../assets/Images/Cctv/kit_cctv.webp";
import Camara from "../assets/Images/Cctv/camara.jpg";
import Disco1tb from "../assets/Images/Cctv/disco_1tb.jpg";
import Disco2tb from "../assets/Images/Cctv/disco_2tb.jpg";
import Dvr4 from "../assets/Images/Cctv/dvr_4ch.jpeg";
import Dvr8 from "../assets/Images/Cctv/dvr_8ch.jpeg";
import Dvr16 from "../assets/Images/Cctv/dvr_16ch.jpg";
import Barrera from "../assets/Images/Alarma/barrera.webp";
import CentralAlarma from "../assets/Images/Alarma/central_alarma.jpg";
import KitAlarma from "../assets/Images/Alarma/kit_alarma.webp";
import Magnetico from "../assets/Images/Alarma/magnetico.webp";
import SensorInterior from "../assets/Images/Alarma/sensor_interior.jpg";
import SensorExterior from "../assets/Images/Alarma/sensor_exterior.jpg";
import SirenaInterior from "../assets/Images/Alarma/sirena_exterior.jpg";
import SirenaExterior from "../assets/Images/Alarma/sirena_interior.jpg";
import Teclado from "../assets/Images/Alarma/teclado.webp";

export default [
  {
    id: 1,
    name: "Kit Basico CCTV",
    category: "alarma",
    stock: 10,
    description: "Kit compuesto por: DVR4ch,2camaras y disco de 1TB",
    price: 60000,
    image: KitCctv,
  },
  {
    id: 2,
    name: "Dvr4ch",
    category: "cctv",
    stock: 10,
    description: "Dvr 4 canales",
    price: 35000,
    image: Dvr4,
  },
  {
    id: 3,
    name: "Dvr8ch",
    category: "cctv",
    stock: 10,
    description: "Dvr 8 canales",
    price: 45000,
    image: Dvr8,
  },
  {
    id: 4,
    name: "Dvr16ch",
    category: "cctv",
    stock: 10,
    description: "Dvr 16 canales",
    price: 65000,
    image: Dvr16,
  },
  {
    id: 5,
    name: "Camara",
    category: "cctv",
    stock: 10,
    description: "Camara 12v",
    price: 9000,
    image: Camara,
  },
  {
    id: 6,
    name: "Disco 1TB",
    category: "cctv",
    stock: 10,
    description: "Disco 1TB de capacidad",
    price: 17000,
    image: Disco1tb,
  },
  {
    id: 7,
    name: "Disco 2TB",
    category: "cctv",
    stock: 10,
    description: "Disco 2TB de capacidad",
    price: 23000,
    image: Disco2tb,
  },
  {
    id: 13,
    name: "Kit Basico Alarma",
    category: "alarma",
    stock: 10,
    description:
      "Kit compuesto por: Central,teclado,2 sensores de movimiento interior, 1 magnetico y sirena interior",
    price: 62000,
    image: KitAlarma,
  },
  {
    id: 8,
    name: "Central de alarma",
    category: "alarma",
    stock: 10,
    description: "Central de alarma domiciliaria",
    price: 35000,
    image: CentralAlarma,
  },
  {
    id: 9,
    name: "Teclado",
    category: "alarma",
    stock: 10,
    description: "Teclado de activacion",
    price: 17000,
    image: Teclado,
  },
  {
    id: 10,
    name: "Sensor interior",
    category: "alarma",
    stock: 10,
    description: "Sensor de movimiento interior",
    price: 7000,
    image: SensorInterior,
  },
  {
    id: 11,
    name: "Sensor exterior",
    category: "alarma",
    stock: 10,
    description: "Sensor de movimiento exterior",
    price: 15000,
    image: SensorExterior,
  },
  {
    id: 12,
    name: "Sensor magnetico",
    category: "alarma",
    stock: 10,
    description: "Sensor magnetico",
    price: 1000,
    image: Magnetico,
  },
  {
    id: 14,
    name: "Sirena interior",
    category: "alarma",
    stock: 10,
    description: "Sirena interior",
    price: 8000,
    image: SirenaInterior,
  },
  {
    id: 15,
    name: "Sirena exterior",
    category: "alarma",
    stock: 10,
    description: "Sirena exterior",
    price: 7000,
    image: SirenaExterior,
  },
  {
    id: 16,
    name: "Barrera",
    category: "alarma",
    stock: 10,
    description: "Barrera exterior hasta 40mts",
    price: 13000,
    image: Barrera,
  },
];
