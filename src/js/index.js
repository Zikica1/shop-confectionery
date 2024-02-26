async function load() {
  const pages = await import('./main.js');

  pages.render();
}

load();
