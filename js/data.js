/* tallerDQS — shared project & service data */

/* planes: número de archivos plano-1.jpg, plano-2.jpg… que existen en la carpeta del proyecto.
   Ponlo en 0 si no hay planos todavía. Agrégalo cuando subas los archivos. */
const PROJECTS_RAW = [
  { id:'casa-arboledas', name:'Casa Arboledas', type:'Vivienda', location:'Santiago, N.L.', year:'2024', client:'Privado', area:'360 m²', status:'Construido', planes:0,
    tagline:'Una casa que crece entre los árboles existentes del terreno.',
    longDesc:'La planta se pliega para conservar los árboles maduros del predio, que se vuelven el centro de cada espacio. Patios y dobles alturas llevan luz y vegetación al interior.',
    longDesc2:'Materiales cálidos —madera, barro y concreto pulido— dan continuidad entre el jardín y las habitaciones.' },
  { id:'casa-el-uro', name:'Casa El Uro', type:'Vivienda', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'520 m²', status:'Construido', planes:0,
    tagline:'Volúmenes de piedra que se asientan en la ladera de El Uro.',
    longDesc:'La casa se escalona con la pendiente y abre sus estancias hacia la sierra. Los muros de piedra local anclan el conjunto y enmarcan vistas precisas del valle.',
    longDesc2:'El programa se reparte en plataformas conectadas por un eje de agua y sombra.' },
  { id:'casa-er', name:'Casa ER', type:'Vivienda', location:'Santiago, N.L.', year:'2022', client:'Privado', area:'1,950 m²', status:'En etapa de diseño', planes:0,
    tagline:'Una casa-patio compacta, ordenada por la luz del norte.',
    longDesc:'Alrededor de un patio central se disponen las áreas comunes y privadas, con plena privacidad hacia la calle. La luz indirecta baña los interiores durante todo el día.',
    longDesc2:'La paleta es sobria: aplanados claros, carpintería de encino y pisos continuos.' },
  { id:'casa-mm', name:'Casa MM', type:'Vivienda', location:'CDMX', year:'2024', client:'Privado', area:'290 m²', status:'Construido', planes:0,
    tagline:'Reinterpretación de la casa urbana en un lote estrecho.',
    longDesc:'En un predio angosto, la casa se organiza en torno a un vacío vertical que conduce la luz hasta la planta baja. Las terrazas escalonadas amplían cada nivel.',
    longDesc2:'La fachada de celosía regula la privacidad y el asoleamiento.' },
  { id:'depto-pixel', name:'Depto Pixel', type:'Vivienda', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'180 m²', status:'Construido', planes:0,
    tagline:'Un departamento flexible que cambia con el día.',
    longDesc:'Un núcleo de servicios libera el perímetro para un espacio continuo y luminoso. Paneles corredizos reconfiguran las áreas según el uso.',
    longDesc2:'El mobiliario a medida integra almacenaje, cocina y trabajo en una sola pieza.' },
  { id:'rancho-gg', name:'Rancho GG', type:'Vivienda', location:'Monterrey, N.L.', year:'2025', client:'Privado', area:'1,200 m²', status:'En proceso', planes:0,
    tagline:'Una casa de campo que se extiende horizontal sobre el llano.',
    longDesc:'Las cubiertas amplias y los corredores sombreados median entre el clima y la vida al exterior. Los volúmenes se separan por patios y jardines.',
    longDesc2:'Materiales nobles y de baja mantención envejecen junto con el paisaje.' },
  { id:'cafe-breno', name:'Cafe Breno', type:'Comercial', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'140 m²', status:'Construido', planes:0,
    tagline:'Un café íntimo donde el material es el protagonista.',
    longDesc:'El local se resuelve con pocos materiales —concreto, acero y madera— y una barra central que organiza el flujo. La luz cálida define el ambiente.',
    longDesc2:'El mobiliario y la señalética se diseñaron a la medida del espacio.' },
  { id:'cafeteria-olor', name:'Cafeteria Olor', type:'Comercial', location:'CDMX', year:'2022', client:'Privado', area:'120 m²', status:'Construido', planes:0,
    tagline:'Aromas y luz en un espacio pequeño y preciso.',
    longDesc:'La cafetería aprovecha un local estrecho con un mostrador continuo y espejos que amplían la percepción. La iluminación puntual destaca el producto.',
    longDesc2:'Texturas en tono tierra y vegetación dan calidez al conjunto.' },
  { id:'estudio-maar-danza', name:'Estudio Maar Danza', type:'Comercial', location:'Santiago, N.L.', year:'2024', client:'Privado', area:'220 m²', status:'Construido', planes:0,
    tagline:'Un estudio de danza hecho de luz, madera y silencio.',
    longDesc:'La sala principal busca proporción y acústica: piso flotante de madera, muros tratados y un gran ventanal hacia el norte. El movimiento es el centro del proyecto.',
    longDesc2:'Las áreas de apoyo y vestidores se resuelven con economía de materiales.' },
  { id:'terraza-ell', name:'Terraza ELL', type:'Comercial', location:'San Pedro, N.L.', year:'2025', client:'Privado', area:'160 m²', status:'Construido', planes:0,
    tagline:'Una terraza-mirador para reunir al aire libre.',
    longDesc:'La intervención añade una estructura ligera de sombra sobre una azotea existente. Jardineras y celosías crean microclimas para distintos usos.',
    longDesc2:'El pavimento y el mobiliario unifican el conjunto con una paleta neutra.' },
  { id:'terraza-gt', name:'Terraza GT', type:'Comercial', location:'Chicago, IL', year:'2024', client:'Privado', area:'150 m²', status:'Construido', planes:0,
    tagline:'Una azotea reconvertida en sala de estar urbana.',
    longDesc:'Sobre un edificio existente, la terraza ofrece sombra, vegetación y vistas a la ciudad. La estructura metálica se monta en seco para reducir cargas.',
    longDesc2:'Pisos de madera y plantadores definen recorridos y estancias.' },
  { id:'terraza-kalah', name:'Terraza Kalah', type:'Comercial', location:'Monterrey, N.L.', year:'2023', client:'Privado', area:'170 m²', status:'Construido', planes:0,
    tagline:'Sombra, agua y vegetación sobre la ciudad.',
    longDesc:'La terraza combina pérgolas, un espejo de agua y jardinería resistente al clima para crear un oasis en altura. La luz de la tarde guía el diseño.',
    longDesc2:'El mobiliario modular permite adaptar el espacio a distintos eventos.' },
  { id:'oficinas-artexa', name:'Oficinas Artexa', type:'Corporativo', location:'Monterrey, N.L.', year:'2024', client:'Confidencial', area:'640 m²', status:'Construido', planes:0,
    tagline:'Oficinas abiertas, ordenadas por la luz y la madera.',
    longDesc:'La planta se organiza en torno a un núcleo común que libera el perímetro para el trabajo. Se expone la losa para ganar altura y se controla la acústica con textiles.',
    longDesc2:'Salas de vidrio y áreas informales equilibran concentración y encuentro.' },
  { id:'oficinas-dileo', name:'Oficinas Dileo', type:'Corporativo', location:'Chicago, IL', year:'2023', client:'Confidencial', area:'580 m²', status:'Construido', planes:0,
    tagline:'Un espacio de trabajo flexible y silencioso.',
    longDesc:'El proyecto reconfigura una planta existente con mamparas ligeras y un eje de circulación claro. La luz natural cruza de fachada a fachada.',
    longDesc2:'Materiales neutros y mobiliario a medida unifican la imagen corporativa.' },
  { id:'consultorios', name:'Consultorios', type:'Médico', location:'Monterrey, N.L.', year:'2022', client:'Privado', area:'300 m²', status:'Construido', planes:0,
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

function projectGallery(p) {
  return [
    { file: 'foto-1.jpg', label: 'Foto 1', ratio: '4 / 3' },
    { file: 'foto-2.jpg', label: 'Foto 2', ratio: '4 / 3' },
    { file: 'foto-3.jpg', label: 'Foto 3', ratio: '3 / 2' },
    { file: 'foto-4.jpg', label: 'Foto 4', ratio: '3 / 2' },
  ];
}
