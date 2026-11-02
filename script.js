/* ==========================================================
   Triple Es Bakes - script.js
   Everything you are likely to edit is in the CONFIG, SOCIAL
   and MENU sections at the top of this file.
   ========================================================== */
(function () {
  'use strict';

  /* ---------- CONFIG ---------- */
  var CONFIG = {
    whatsappNumber: '2348137600323', // international format, no + sign
    defaultMessage: 'Hello Triple Es Bakes, I would like to place an order. Please share your menu and prices.',
    currency: '\u20A6' // naira sign
  };

  /* Add real social page URLs here. Empty = shows a "coming soon" note. */
  var SOCIAL = {
    facebook: '',  // e.g. 'https://facebook.com/...'  (flyer name: Etinyene Ekong)
    tiktok: '',    // e.g. 'https://tiktok.com/@...'   (flyer name: Ety Wealth)
    instagram: ''
  };

  /* ---------- MENU ----------
     SAMPLE PRICES: edit freely. 'cat' can hold several categories:
     cakes | small-chops | pastries | snacks
     'img' is an external photo URL. If a photo fails to load, a
     branded placeholder is shown instead, so swap in any URL you prefer. */
  var U = function (id) { return 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=640&q=75'; };

  var MENU = [
    { id: 'cakes', name: 'Cakes', cat: ['cakes'], price: 25000, unit: 'from, 6-inch', emoji: '\uD83C\uDF82',
      desc: 'Soft, moist celebration cakes in the flavour, size and design you choose.', img: U('1578985545062-69928b1d9587') },
    { id: 'shawarma', name: 'Shawarma', cat: ['snacks'], price: 3500, unit: 'each', emoji: '\uD83C\uDF2F',
      desc: 'A warm wrap packed with seasoned meat, fresh veg and creamy sauce.', img: U('1529006557810-274b9b2fc783') },
    { id: 'samosa', name: 'Samosa', cat: ['small-chops'], price: 2000, unit: 'pack of 6', emoji: '\uD83E\uDD5F',
      desc: 'Crisp golden pockets filled with spiced minced meat.', img: U('1601050690597-df0568f70950') },
    { id: 'spring-rolls', name: 'Spring Rolls', cat: ['small-chops'], price: 2000, unit: 'pack of 6', emoji: '\uD83E\uDD62',
      desc: 'Crunchy rolls with a savoury vegetable and chicken filling.', img: U('1625398407796-82650a8c135f') },
    { id: 'meat-pie', name: 'Meat Pie', cat: ['pastries'], price: 1000, unit: 'each', emoji: '\uD83E\uDD67',
      desc: 'Buttery pastry with a peppery minced beef and potato filling.', img: U('1572383672419-ab35444a6934') },
    { id: 'buns', name: 'Buns', cat: ['pastries'], price: 500, unit: 'each', emoji: '\uD83E\uDD50',
      desc: 'Soft, lightly sweet buns baked fresh for breakfast or tea.', img: U('1509440159596-0249088772ff') },
    { id: 'egg-rolls', name: 'Egg Rolls', cat: ['small-chops'], price: 700, unit: 'each', emoji: '\uD83E\uDD5A',
      desc: 'Soft dough wrapped around a boiled egg and fried until golden.', img: U('1626082927389-6cd097cdc6ec') },
    { id: 'puff-puff', name: 'Puff Puff', cat: ['small-chops', 'snacks'], price: 1500, unit: 'pack of 10', emoji: '\uD83D\uDFE1',
      desc: 'Fluffy, lightly sweet fried dough balls. Always the first to disappear.', img: U('1621236378699-8597faf6a176') },
    { id: 'doughnuts', name: 'Doughnuts', cat: ['pastries'], price: 800, unit: 'each', emoji: '\uD83C\uDF69',
      desc: 'Pillowy doughnuts rolled in sugar while still warm.', img: U('1551024601-bec78aea704b') },
    { id: 'fish-roll', name: 'Fish Roll', cat: ['pastries', 'small-chops'], price: 700, unit: 'each', emoji: '\uD83D\uDC1F',
      desc: 'Flaky pastry rolled around seasoned fish, a Nigerian bakery classic.', img: U('1562967914-608f82629710') },
    { id: 'corn-dog', name: 'Corn Dog', cat: ['snacks'], price: 1500, unit: 'each', emoji: '\uD83C\uDF2D',
      desc: 'A juicy sausage in a crisp golden batter, served on a stick.', img: U('1619740455993-9e612b1af08a') },
    { id: 'chin-chin', name: 'Chin Chin', cat: ['snacks'], price: 2500, unit: 'pack', emoji: '\uD83C\uDF6A',
      desc: 'Crunchy, lightly sweet fried bites that are perfect for sharing.', img: U('1558961363-fa8fdf82db35') },
    { id: 'plantain-mosa', name: 'Plantain Mosa', cat: ['snacks', 'small-chops'], price: 1500, unit: 'pack of 6', emoji: '\uD83C\uDF4C',
      desc: 'Soft, sweet ripe plantain fried into golden, tender bites.', img: U('1528751014936-863e6e7a319c') },
    { id: 'hamburger', name: 'Hamburger', cat: ['snacks'], price: 3500, unit: 'each', emoji: '\uD83C\uDF54',
      desc: 'A stacked burger with a juicy patty, fresh veg and soft bun.', img: U('1568901346375-23c9450c58cd') },
    { id: 'pancake', name: 'Pancake', cat: ['pastries'], price: 2000, unit: 'stack of 3', emoji: '\uD83E\uDD5E',
      desc: 'Light, fluffy pancakes ready for syrup, fruit or a little butter.', img: U('1567620905732-2d1ec7ab7445') },
    { id: 'scotch-egg', name: 'Scotch Egg', cat: ['small-chops'], price: 1200, unit: 'each', emoji: '\uD83E\uDD5A',
      desc: 'A boiled egg wrapped in seasoned meat and fried until crisp.', img: U('1587486913049-53fc88980cfc') },
    { id: 'yam-balls', name: 'Yam Balls', cat: ['small-chops'], price: 2000, unit: 'pack of 8', emoji: '\uD83C\uDF60',
      desc: 'Seasoned mashed yam, crumbed and fried, crisp outside and soft inside.', img: U('1630409351217-bc4fa6422075') },
    { id: 'peanut', name: 'Peanut', cat: ['snacks'], price: 1000, unit: 'pack', emoji: '\uD83E\uDD5C',
      desc: 'Crunchy peanuts made for munching on the go.', img: U('1567892320421-1c657571ea4a') }
  ];

  /* Featured items: ids from MENU above plus the badge text. */
  var FEATURED = [
    { id: 'cakes', badge: 'Special occasion cake' },
    { id: 'puff-puff', badge: 'Customer favourite' },
    { id: 'meat-pie', badge: 'Customer favourite' },
    { id: 'shawarma', badge: 'Popular pick' }
  ];

  var FILTER_LABELS = { all: 'All Products', cakes: 'Cakes', 'small-chops': 'Small Chops', pastries: 'Pastries', snacks: 'Snacks' };

  /* ---------- Helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function waLink(message) {
    return 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(message || CONFIG.defaultMessage);
  }

  function formatPrice(n) { return CONFIG.currency + n.toLocaleString('en-NG'); }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  /* Branded placeholder shown if a photo URL fails to load. */
  function fallbackImage(item) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#efd3f6"/><stop offset="1" stop-color="#e7a9bb"/></linearGradient></defs>' +
      '<rect width="640" height="480" fill="url(#g)"/>' +
      '<text x="320" y="250" font-size="120" text-anchor="middle">' + item.emoji + '</text>' +
      '<text x="320" y="350" font-size="38" text-anchor="middle" fill="#8f2f49" font-family="Georgia,serif" font-weight="bold">' + item.name + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function makeImage(item, width, height) {
    var img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name + ' from Triple Es Bakes';
    img.width = width; img.height = height;
    img.loading = 'lazy';
    img.addEventListener('error', function onError() {
      img.removeEventListener('error', onError);
      img.src = fallbackImage(item);
    });
    return img;
  }

  function orderButton(item, label, extraClass) {
    var a = el('a', 'btn ' + (extraClass || 'btn--primary btn--small'), label || 'Order');
    a.href = waLink('Hello Triple Es Bakes, I would like to order ' + item.name + '. Please confirm availability and price.');
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Order ' + item.name + ' on WhatsApp');
    return a;
  }

  /* ---------- Menu ---------- */
  function renderMenu(filter) {
    var grid = $('#menuGrid');
    var items = MENU.filter(function (i) { return filter === 'all' || i.cat.indexOf(filter) !== -1; });
    grid.textContent = '';

    items.forEach(function (item) {
      var card = el('article', 'menu-card');
      card.appendChild(makeImage(item, 640, 480));

      var body = el('div', 'menu-card__body');
      var top = el('div', 'menu-card__top');
      top.appendChild(el('h3', '', item.name));
      var price = el('span', 'menu-card__price', formatPrice(item.price));
      price.appendChild(el('span', 'menu-card__unit', item.unit));
      top.appendChild(price);

      body.appendChild(top);
      body.appendChild(el('p', '', item.desc));
      body.appendChild(orderButton(item, 'Order on WhatsApp'));
      card.appendChild(body);
      grid.appendChild(card);
    });

    $('#menuStatus').textContent = 'Showing ' + items.length + (items.length === 1 ? ' item' : ' items') +
      ' in ' + FILTER_LABELS[filter] + '.';
  }

  function initFilters() {
    var buttons = $$('.filter');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
        renderMenu(btn.getAttribute('data-filter'));
      });
    });
    renderMenu('all');
  }

  /* ---------- Featured ---------- */
  function renderFeatured() {
    var grid = $('#featuredGrid');
    FEATURED.forEach(function (f) {
      var item = MENU.filter(function (m) { return m.id === f.id; })[0];
      if (!item) return;
      var card = el('article', 'featured-card');
      card.appendChild(makeImage(item, 640, 480));
      var body = el('div', 'featured-card__body');
      body.appendChild(el('span', 'featured-card__badge', f.badge));
      body.appendChild(el('h3', '', item.name));
      body.appendChild(el('p', '', item.desc));
      body.appendChild(orderButton(item, 'Order ' + item.name));
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- WhatsApp links already in the HTML ---------- */
  function initWhatsAppLinks() {
    $$('.js-wa').forEach(function (a) {
      a.href = waLink(a.getAttribute('data-msg'));
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var toggle = $('.nav-toggle');
    var nav = $('#primary-nav');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });

    /* Highlight the link for the section currently on screen */
    if ('IntersectionObserver' in window) {
      var links = $$('.primary-nav ul a');
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (l) {
            var active = l.getAttribute('href') === '#' + entry.target.id;
            l.classList.toggle('is-active', active);
            if (active) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach(function (l) {
        var section = $(l.getAttribute('href'));
        if (section) observer.observe(section);
      });
    }
  }

  /* ---------- Social placeholders ---------- */
  function showToast(message) {
    var toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2600);
  }

  function initSocial() {
    $$('[data-social]').forEach(function (a) {
      var url = SOCIAL[a.getAttribute('data-social')];
      if (url) {
        a.href = url; a.target = '_blank'; a.rel = 'noopener';
      } else {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          showToast('This social link is coming soon.');
        });
      }
    });
  }

  /* ---------- Opening hours: highlight today ---------- */
  function initHours() {
    var today = String(new Date().getDay());
    var row = $('.hours tr[data-day="' + today + '"]');
    if (row) row.classList.add('is-today');
  }

  /* ---------- Start ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initWhatsAppLinks();
    renderFeatured();
    initFilters();
    initNav();
    initSocial();
    initHours();
    $('#year').textContent = new Date().getFullYear();
  });
})();