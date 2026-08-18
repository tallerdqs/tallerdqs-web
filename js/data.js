/* tallerDQS — shared project & service data */

/* planes: número de archivos plano-1.jpg, plano-2.jpg… que existen en la carpeta del proyecto.
   Ponlo en 0 si no hay planos todavía. Agrégalo cuando subas los archivos. */
const PROJECTS_RAW = [
  { id:'casa-arboledas', name:'Casas Arboledas', type:'Vivienda', location:'Santiago, N.L.', year:'2026', client:'Privado', area:'295 m²', status:'En construcción', planes:3,
    portada:'foto1-FRONTAL 1.jpg',
    fotos:['foto1-FRONTAL 1.jpg','foto2-FRONTAL 2.jpg','foto3-SALA.jpg','foto4-COMEDOR.jpg','foto5-MASTERBEDROOM.jpg','foto6-POSTERIOR 1.jpg'],
    tagline:'Tipología residencial abierta, orientada a las vistas de la sierra.',
    longDesc:'Proyecto de desarrollo residencial en el que se desarrolló una tipología funcional de planta abierta, diseñada para aprovechar al máximo el terreno disponible y orientada hacia las vistas que el predio ofrecía.',
    longDesc2:'El desarrollo contempla dos casas de tipología prácticamente idéntica, diferenciadas mediante materialidad y fachada propias para darle identidad e individualidad a cada una. La idea central fue crear una vivienda funcional y estéticamente accesible, pensada para conectar con cualquier posible cliente.',
    longDesc3:'La planta baja alberga el área social: sala y comedor en un espacio abierto, con la posibilidad de integrar o cerrar la cocina según la preferencia del usuario, además de un cuarto de servicio con acceso independiente. La segunda planta concentra las tres recámaras, cada una con walk-in closet, organizadas alrededor de un family room que funciona como distribuidor. En la tercera planta se ubica una segunda área social abierta, con capacidad de adaptarse a distintos usos, un estudio, y dos terrazas que aprovechan las vistas hacia las montañas de Monterrey.' },
  { id:'casa-el-uro', name:'Casa El Uro', type:'Vivienda', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'520 m²', status:'Construido', planes:3,
    portada:'foto1 - Vista Frontal.png',
    fotos:['foto1 - Vista Frontal.png','foto2- Vista Trasera 1.png','foto3 - Vista Trasera 2.png'],
    planosFiles:['plano1-El Uro Sotano.jpg','plano2-El Uro PB.jpg','plano3-El Uro PA.jpg'],
    tagline:'Una casa que no desafía el terreno: tres niveles construidos con él.',
    longDesc:'Casa de tres niveles que responde a la topografía del terreno y se construye junto con ella, sin desafiarla.',
    longDesc2:'Su forma se compone de dos volúmenes en L, una decisión que separa con claridad los espacios privados de los públicos.',
    longDesc3:'El primer nivel aloja los espacios de servicio, una ubicación que el propio terreno definió. El área social se desarrolla como planta abierta, con grandes ventanas que enmarcan las montañas de Monterrey.',
    longDesc4:'Las tres recámaras se concentran en el último nivel, lejos del flujo social, lo que refuerza la privacidad del descanso. Entre un ámbito y otro, las transiciones interiores acompañan ese cambio de carácter, protegiendo la intimidad del usuario sin cerrar la casa sobre sí misma.',
    longDesc5:'Casa El Uro parte de una idea de fondo: dejar que el terreno guíe el proyecto, y construir con él en lugar de imponerse.' },
  { id:'casa-er', name:'Casa ER', type:'Vivienda', location:'Santiago, N.L.', year:'2022', client:'Privado', area:'1,950 m²', status:'En etapa de diseño', planes:3,
    portada:'foto1-FACHADA FRONTAL.png',
    fotos:[
      'foto1-FACHADA FRONTAL.png',
      'foto2-FACHADA POSTERIOR 2.png',
      'foto3-FACHADA POSTERIOR.png',
      'foto4-RECIBIDOR.png',
      'foto5-ESCALERA.png',
      'foto6-AREA SOCIAL.png',
      'foto7-COCINA.png',
      'foto8-TERRAZA.png',
      'foto9-BIBLIOTECA.png',
      'foto10-BAR BIBLIOTECA.png',
      'foto11-OFICINA.png',
      'foto12-ESTUDIO GRABACION.png',
      'foto13-PASILLO SOTANO.png',
      'foto14-SPEAK EASY.png',
      'foto15-CINE.png',
      'foto16-ESCALERAS PRIV.png',
      'foto20-PASILLO CUARTOS.png',
      'foto-21RECAMARA PPAL.png',
      'foto22-RECAMARA SEC.png',
    ],
    tagline:'Una casa-patio compacta, ordenada por la luz del norte.',
    longDesc:'Alrededor de un patio central se disponen las áreas comunes y privadas, con plena privacidad hacia la calle. La luz indirecta baña los interiores durante todo el día.',
    longDesc2:'La paleta es sobria: aplanados claros, carpintería de encino y pisos continuos.' },
  { id:'casa-mm', name:'Casa MM', type:'Vivienda', location:'Santa Catarina, N.L.', year:'2026', client:'Privado', area:'320 m²', status:'En etapa de diseño', planes:4,
    portada:'CASA MM - RENDER 1.png',
    fotos:['CASA MM - RENDER 1.png','CASA MM - RENDER 2.png'],
    tagline:'Una casa escalonada que conecta jardín interior, luz natural y vistas hacia la Huasteca.',
    longDesc:'Proyecto diseñado para una pareja joven en un terreno con desnivel ascendente, condición que se aprovechó para concentrar los espacios de servicio en el primer nivel. Desde ahí, una escalera imponente conduce a un recibidor que remata en un jardín interior, elemento que aporta mayor entrada de luz natural y conexión con el exterior en un terreno de proporciones angostas.',
    longDesc2:'El área social, de planta abierta, cuenta con un sistema de puertas corredizas que permite ocultar o exponer espacios como la cocina y la escalera, según la necesidad del usuario en cada momento. La tercera planta alberga las tres recámaras, y una azotea en el nivel superior aprovecha las vistas hacia la Huasteca y las montañas del entorno.' },
  { id:'depto-pixel', name:'Depto Pixel', type:'Vivienda', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'180 m²', status:'Construido', planes:0,
    portada:'Depto Pixel 1.png',
    fotos:['Depto Pixel 1.png','Depto Pixel 2.png','Depto Pixel 3.png','Depto Pixel 5.png','Depto Pixel 6.png','Depto Pixel 7.png','Depto Pixel 8.png'],
    tagline:'Un departamento flexible que cambia con el día.',
    longDesc:'Un núcleo de servicios libera el perímetro para un espacio continuo y luminoso. Paneles corredizos reconfiguran las áreas según el uso.',
    longDesc2:'El mobiliario a medida integra almacenaje, cocina y trabajo en una sola pieza.' },
  { id:'rancho-gg', name:'Rancho GG', type:'Campestre', location:'Allende, N.L.', year:'2025', client:'Privado', area:'1,200 m²', status:'En construcción', planes:0,
    portada:'foto1-CABALLERIZAS.png',
    fotos:['foto1-CABALLERIZAS.png','foto2-CABALLERIZAS.png','foto3-CABALLERIZAS.png','foto4-CABALLERIZAS.png','foto5- CASA DE CAMPO.jpg','foto6- CASA DE CAMPO.png','foto7-SALA COMEDOR.png','foto8- RECAMARA PRINCIPAL.png'],
    tagline:'Una casa de campo que se extiende horizontal sobre el llano.',
    longDesc:'El proyecto nace de la idea del cliente de desarrollar unas caballerizas sustentables: un espacio conectado con su entorno, resuelto con materiales simples, bajo mantenimiento y costo controlado, sin sacrificar estética, esencia ni funcionalidad.',
    longDesc2:'A partir de esta premisa se desarrolló un master plan que integra tres componentes: las caballerizas, una casa para el personal de servicio y una casa de campo. Cada volumen se orientó para aprovechar las mejores vistas del predio, colocándose frente a frente entre sí —una decisión que genera visibilidad cruzada entre los espacios y responde a la orientación y ventilación específicas que cada uso requiere.',
    longDesc3:'La casa de campo se resolvió en forma de L. Un ala aloja el área social, planteada como un espacio completamente abierto con conexión hacia ambos costados. Perpendicular a ella, el ala de habitaciones se diseñó en módulos, permitiendo que la construcción pueda crecer por etapas conforme lo requiera el cliente.' },
  { id:'cafe-breno', name:'Cafe Breno', type:'Comercial', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'140 m²', status:'Construido', planes:0, fotos:[],
    tagline:'Un café íntimo donde el material es el protagonista.',
    longDesc:'El local se resuelve con pocos materiales —concreto, acero y madera— y una barra central que organiza el flujo. La luz cálida define el ambiente.',
    longDesc2:'El mobiliario y la señalética se diseñaron a la medida del espacio.' },
  { id:'cafeteria-olor', name:'Cafeteria Olor', type:'Comercial', location:'CDMX', year:'2022', client:'Privado', area:'120 m²', status:'Construido', planes:0, fotos:[],
    tagline:'Aromas y luz en un espacio pequeño y preciso.',
    longDesc:'La cafetería aprovecha un local estrecho con un mostrador continuo y espejos que amplían la percepción. La iluminación puntual destaca el producto.',
    longDesc2:'Texturas en tono tierra y vegetación dan calidez al conjunto.' },
  { id:'estudio-maar-danza', name:'Estudio Maar Danza', type:'Comercial', location:'Santiago, N.L.', year:'2024', client:'Privado', area:'220 m²', status:'Construido', planes:1,
    portada:'foto1-SALA DE ESPERA Y RECEPCION.png',
    fotos:['foto1-SALA DE ESPERA Y RECEPCION.png','foto2- SALON DE BAILE.png'],
    tagline:'Un estudio de danza hecho de luz, madera y silencio.',
    longDesc:'La sala principal busca proporción y acústica: piso flotante de madera, muros tratados y un gran ventanal hacia el norte. El movimiento es el centro del proyecto.',
    longDesc2:'Las áreas de apoyo y vestidores se resuelven con economía de materiales.' },
  { id:'terraza-ell', name:'Terraza ELL', type:'Remodelación', location:'San Pedro, N.L.', year:'2025', client:'Privado', area:'120 m²', status:'Construido', planes:0,
    portada:'Terraza ELL 1.jpg',
    fotos:['Terraza ELL 1.jpg','Terraza ELL 2.jpg','Terraza ELL 3.jpg','Terraza ELL 4.jpg','Terraza ELL 5.jpg','Terraza ELL 6.jpg','Terraza ELL 7.jpg'],
    tagline:'Una terraza independiente concebida para la convivencia y los eventos.',
    longDesc:'El proyecto consiste en una extensión del área social de una residencia existente: una terraza independiente de la vivienda principal, concebida como espacio de convivencia y eventos.',
    longDesc2:'La estructura se resolvió mediante una cubierta sin columnas visibles, lo que otorga una amplitud completa al espacio y permite una circulación y conexión totalmente abiertas. Los materiales y acabados dialogan con la casa original, pero expresan con claridad la modernidad y el momento en que este espacio fue incorporado.',
    longDesc3:'El resultado es un volumen ligero que admite múltiples funcionalidades, y que integra un área de asador —elemento imprescindible para el cliente.' },
  { id:'terraza-gt', name:'Terraza GT', type:'Comercial', location:'Chicago, IL', year:'2024', client:'Privado', area:'150 m²', status:'Construido', planes:0,
    portada:'Terraza GT 1.jpg',
    fotos:['Terraza GT 1.jpg','Terraza GT 2.jpg','Terraza GT 3.jpg','Terraza GT 4.jpg','Terraza GT 5.jpg','Terraza GT 6.jpg'],
    tagline:'Una azotea reconvertida en sala de estar urbana.',
    longDesc:'Sobre un edificio existente, la terraza ofrece sombra, vegetación y vistas a la ciudad. La estructura metálica se monta en seco para reducir cargas.',
    longDesc2:'Pisos de madera y plantadores definen recorridos y estancias.' },
  { id:'terraza-kalah', name:'Terraza Kalah', type:'Comercial', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'170 m²', status:'Construido', planes:0,
    portada:'Kalah 1.png',
    fotos:['Kalah 1.png','Kalah 2.png'],
    tagline:'Sombra, agua y vegetación sobre la ciudad.',
    longDesc:'La terraza combina pérgolas, un espejo de agua y jardinería resistente al clima para crear un oasis en altura. La luz de la tarde guía el diseño.',
    longDesc2:'El mobiliario modular permite adaptar el espacio a distintos eventos.' },
  { id:'oficinas-artexa', name:'Oficinas Artexa', type:'Corporativo', location:'Monterrey, N.L.', year:'2024', client:'Confidencial', area:'640 m²', status:'Construido', planes:0,
    portada:'foto1-PRIVADO RH.png',
    fotos:['foto1-PRIVADO RH.png','foto2- Cowork.png','foto3-cowork.png','foto4-cowork.png'],
    tagline:'Oficinas abiertas, ordenadas por la luz y la madera.',
    longDesc:'La planta se organiza en torno a un núcleo común que libera el perímetro para el trabajo. Se expone la losa para ganar altura y se controla la acústica con textiles.',
    longDesc2:'Salas de vidrio y áreas informales equilibran concentración y encuentro.' },
  { id:'oficinas-dileo', name:'Oficinas Dileo', type:'Corporativo', location:'Chicago, IL', year:'2023', client:'Confidencial', area:'580 m²', status:'Construido', planes:1,
    portada:'DILEO TM 1.png',
    fotos:['DILEO TM 1.png','DILEO TM 2.png','DILEO TM 3.png'],
    planosFiles:['plano1.png'],
    tagline:'Un espacio de trabajo flexible y silencioso.',
    longDesc:'El proyecto reconfigura una planta existente con mamparas ligeras y un eje de circulación claro. La luz natural cruza de fachada a fachada.',
    longDesc2:'Materiales neutros y mobiliario a medida unifican la imagen corporativa.' },
  { id:'consultorios', name:'Consultorios', type:'Médico', location:'Monterrey, N.L.', year:'2022', client:'Privado', area:'300 m²', status:'Construido', planes:0,
    portada:'Consultorios 1.webp',
    fotos:['Consultorios 1.webp','Consultorios 2.webp','Consultorios 3.webp','Consultorios 4.webp','Consultorios 5.webp'],
    tagline:'Consultorios claros, accesibles y serenos.',
    longDesc:'La distribución prioriza recorridos simples para pacientes y personal, con luz natural en salas de espera y consultorios. Los acabados son higiénicos y cálidos a la vez.',
    longDesc2:'La señalética y el color guían los recorridos sin saturar el ambiente.' },
];

const SERVICES = [
  { num:'01', name:'Arquitectura', desc:'Proyecto integral, del concepto al proyecto ejecutivo.' },
  { num:'02', name:'Desarrollo', desc:'Estructuración y desarrollo de proyectos inmobiliarios.' },
  { num:'03', name:'Construcción', desc:'Ejecución de obra con control de calidad, costo y tiempo.' },
  { num:'04', name:'Consultoría', desc:'Acompañamiento técnico, normativo y de viabilidad.' },
  { num:'05', name:'Interiorismo', desc:'Interiores que extienden la lógica del edificio.' },
  { num:'06', name:'Gerencia', desc:'Gerencia de proyecto y supervisión integral de obra.' },
];

const HOME_IDS = ['casa-arboledas', 'casa-er', 'casa-el-uro', 'estudio-maar-danza', 'depto-pixel', 'terraza-ell'];

function fmt2(n) {
  return String(n).padStart(2, '0');
}

function getSortedProjects() {
  return [...PROJECTS_RAW]
    .sort((a, b) => b.year.localeCompare(a.year))
    .map((p, i) => ({ ...p, num: fmt2(i + 1) }));
}

function getHomeProjects() {
  const all = getSortedProjects();
  return HOME_IDS.map(id => all.find(p => p.id === id)).filter(Boolean);
}

function getProjectById(id) {
  return getSortedProjects().find(p => p.id === id) || null;
}

function getNextProject(currentId) {
  const all = getSortedProjects();
  const idx = all.findIndex(p => p.id === currentId);
  return all[(Math.max(idx, 0) + 1) % all.length];
}

function uniqueInOrder(arr) {
  return [...new Set(arr)];
}

function imagePath(slug, file) {
  return `images/projects/${slug}/${file}`;
}

function portadaSrc(p) {
  const file = p.portada || 'portada.jpg';
  return `images/projects/${p.id}/${encodeURIComponent(file)}`;
}

/* Extrae el título legible del nombre de archivo.
   'foto1-FACHADA FRONTAL.png' → 'Fachada Frontal'
   'foto-21RECAMARA PPAL.png' → 'Recamara Ppal' */
function fotoLabel(filename) {
  return filename
    .replace(/^foto-?\d+-?/i, '')
    .replace(/\.[^.]+$/, '')
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

/* URL-encoda el nombre de archivo para usarlo en src de <img> */
function fotoSrc(slug, filename) {
  return `images/projects/${slug}/${encodeURIComponent(filename)}`;
}
