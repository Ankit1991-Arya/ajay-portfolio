document.getElementByClass('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    service: e.target.service.value,
    message: e.target.message.value
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    const respEl = document.getElementById('responseMsg');
    if (respEl) {
      // show message
      respEl.innerText = data.message || 'Thank you';
      respEl.style.display = 'block';

      // hide after 5 seconds
      setTimeout(() => {
        respEl.innerText = '';
        respEl.style.display = 'none';
      }, 5000);
    }

    e.target.reset();

  } catch (error) {
    const respEl = document.getElementById('responseMsg');
    if (respEl) {
      respEl.innerText = 'Something went wrong. Try again.';
      respEl.style.display = 'block';
      setTimeout(() => {
        respEl.innerText = '';
        respEl.style.display = 'none';
      }, 5000);
    }
  }
});
