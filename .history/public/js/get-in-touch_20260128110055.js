document
  .getElementById('getInTouchForm')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      const res = await fetch('/api/get-in-touch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      const respEl = document.getElementById('touchResponse');
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
    } catch (err) {
       const respEl = document.getElementById('touchResponse');
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
