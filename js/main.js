/* ===== MENU MOBILE ===== */
const toggleBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('#nav');
const closeBtn = document.querySelector('.nav__close');

function toggleMenu(open) {
  nav.dataset.open = open;
  toggleBtn.setAttribute('aria-expanded', open);
}

toggleBtn.addEventListener('click', () => {
  const isOpen = nav.dataset.open === 'true';
  toggleMenu(!isOpen);
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => toggleMenu(false));
}

/* ===== SWIPER CATÁLOGO ===== */
const catalogoSwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  breakpoints: {
    640:  { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  navigation: {
    nextEl: '.swiper-btn--next',
    prevEl: '.swiper-btn--prev',
  },
});

/* ===== DADOS DOS IMÓVEIS (Real Palace) ===== */
const imoveis = [
  {
    titulo: 'Capibaribe Prime - viva bem no Recife',
    subtitulo: 'Fachada',
    local: 'Várzea, PE',
    quartos: 2,
    descricao: 'Piscina, Elevador, Varanda',
    valor: 'Renda a partir de R$ 2.200',
    foto: 'assets/img/capibaribe-prime.jpg',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Unique Duo - Viva o melhor de Candeias',
    subtitulo: 'Fachada',
    local: 'Candeias, PE',
    quartos: 3,
    descricao: 'Bar molhado, Varnda gourmet, 5 min da praia',
    valor: 'Renda a partir de R$ 7.000',
    foto: 'assets/img/unique-duo.jpg',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Morata Living Residence - Viva com qualidade de vida',
    subtitulo: 'Recepção',
    local: 'Imbiribeira, PE',
    quartos: 2,
    descricao: 'Varanda gourmet, Lazer completo, Academia',
    valor: 'Renda a partir de R$ 6.000',
    foto: 'assets/img/morata.jpg',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Pátio Nattú - lazer equipada',
    subtitulo: 'Fachada',
    local: 'Caxangá, PE',
    quartos: 2,
    descricao: 'À 600 metros da UPA - Varanda',
    valor: 'Renda a partir de R$ 5.000',
    foto: 'assets/img/nattu-fachada.webp',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Candeias Life Club - Viva com qualidade de vida',
    subtitulo: 'Fachada',
    local: 'Candeias, PE',
    quartos: 3,
    descricao: 'Varanda gourmet, Piscina, Academia, Pet Place',
    valor: 'Renda a partir de R$ 4.000',
    foto: 'assets/img/candeias-life.jpg',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Real Prime – Lazer Completo',
    subtitulo: 'Fachada',
    local: 'Camaragibe, PE',
    quartos: 2,
    descricao: 'Piscina, Churrasqueira, Playground',
    valor: 'Renda a partir de R$ 1.800',
    foto: 'assets/img/real-prime-fachada.webp',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Estilo Boa Viagem - Viva com qualidade e segurança',
    subtitulo: 'Fachada',
    local: 'Boa Viagem, PE',
    quartos: 3,
    descricao: 'Suíte, varanda, lazer completo, bem pertinho da praia',
    valor: 'Renda a partir de R$ 12.000',
    foto: 'assets/img/estilo-boa-viagem.webp',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Candeias Garden - Viva com conforto e segurança',
    subtitulo: 'Fachada',
    local: 'Candeias, PE',
    quartos: 2,
    descricao: 'Área priatia, Piscina, Varanda',
    valor: 'Renda a partir de R$ 2.200',
    foto: 'assets/img/candeias-garden.webp',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Direcional Praia - Viva com qualidade de vida',
    subtitulo: 'Recepção',
    local: 'Candeias, PE',
    quartos: 2,
    descricao: 'Piscina, Área gourmet, À 3 min da praia',
    valor: 'Renda a partir de R$ 3.500',
    foto: 'assets/img/direc-praia.webp',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Viva Olinda - Viva com conforto e segurança',
    subtitulo: 'Fachada',
    local: 'Fragoso, PE',
    quartos: 2,
    descricao: 'Pub, Varanda gourmet, Garden e muito mais',
    valor: 'Renda a partir de R$ 3.500',
    foto: 'assets/img/VivaOlinda.jpg',
    whatsapp: '5581999999999',
    programas: ['Minha Casa Minha Vida'],
  },
  {
    titulo: 'Real Palace',
    subtitulo: 'Fachada',
    local: 'Camaragibe, PE',
    quartos: 2,
    descricao: 'Varanda, elevador, lazer completo',
    valor: 'Renda a partir de R$ 1.800',
    foto: 'assets/img/real-palace-fachada.webp',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Villa Gonzaga - Viva com conforto',
    subtitulo: 'Fachada',
    local: 'Caruaru, PE',
    quartos: 0,
    descricao: 'Varanda e acabamento moderno',
    valor: 'Use FGTS • Subsídio até R$ 55 mil',
    foto: 'assets/img/villa-gonzaga.jpg',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Viva Vida São Lourenço',
    subtitulo: 'Fachada',
    local: 'São Lourenço, PE',
    quartos: 2,
    descricao: 'Lazer completo, próximo de escola, hospiteis, transporte e mercado',
    valor: 'Renda a partir de R$ 1.500',
    foto: 'assets/img/viva-vida-sao-lourenço.webp',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Residence Park - Viva com conforto e segurança',
    subtitulo: 'Fachada',
    local: 'Barra de Jangada, PE',
    quartos: 2,
    descricao: 'Varnda, Área garden, Lazer completo',
    valor: 'Renda a partir de R$ 2.000',
    foto: 'assets/img/residence-park.webp',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Villa das Laranjeiras - Viva com conforto',
    subtitulo: 'Fachada',
    local: 'Socorro, PE',
    quartos: 2,
    descricao: 'Piscina, Área gourmet, Varanda',
    valor: 'Renda a partir de R$ 2.500',
    foto: 'assets/img/villa-das-laranjeiras.webp',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
  {
    titulo: 'Pontal de Itamaracá - Viva com qualidade de vida',
    subtitulo: 'Fachada',
    local: 'Paulista, PE',
    quartos: 2,
    descricao: 'Piscina, Área gourmet, Varanda',
    valor: 'Renda a partir de R$ 2.000',
    foto: 'assets/img/pontal-de-itamaraca.jpg',
    whatsapp: '5581999999999',
    programas: ['MCMV', 'Morar Bem Pernambuco'],
  },
];

/* ===== GERAR CARDS ===== */
function gerarCard(imovel) {
  return `
    <div class="swiper-slide">
      <div class="card">
        <img src="${imovel.foto}" alt="${imovel.subtitulo || imovel.titulo}" loading="lazy">
        <div class="card__body">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.local}${imovel.quartos ? ` – ${imovel.quartos} quartos` : ''}</p>
          <p>${imovel.descricao}</p>
          <p><strong>${imovel.valor}</strong></p>
          <p><small>${imovel.programas.join(', ')}</small></p>
          <a class="btn btn--primary"
             href="https://wa.me/${imovel.whatsapp}?text=Tenho%20interesse%20no%20${encodeURIComponent(imovel.titulo)}"
             target="_blank" rel="noopener">
            Tenho Interesse
          </a>
        </div>
      </div>
    </div>`;
}

document.getElementById('catalogo-swiper').innerHTML =
  imoveis.map(gerarCard).join('');

/* ===== ACCORDION FAQ ===== */
document.querySelectorAll('.accordion__header').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.maxHeight;
    document.querySelectorAll('.accordion__panel').forEach(p => p.style.maxHeight = null);
    if (!isOpen) panel.style.maxHeight = panel.scrollHeight + 'px';
  });
});

/* ===== FORM LEAD ===== */
/* const form = document.getElementById('form-lead');
const msg  = document.getElementById('form-msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  // Integre aqui com Formspree, Netlify Forms, etc.
  form.reset();
  msg.hidden = false;
}); */

imoveis.map((imovel, i) => {
  try {
    return gerarCard(imovel);
  } catch (e) {
    console.warn("Erro ao gerar card do imóvel:", i, imovel, e);
    return '';
  }
}).join('');





