async function loadHTML(elementId, filePath) {
  const res = await fetch(filePath);
  const data = await res.text();
  document.getElementById(elementId).innerHTML = data;
}

loadHTML('header', '/partials/header.html');
loadHTML('footer', '/partials/footer.html');