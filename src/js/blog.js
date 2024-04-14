async function Load() {
  const pages = await import('./main.js');

  pages.render();
}

Load();
