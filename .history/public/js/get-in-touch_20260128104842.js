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
      document.getElementById('touchResponse').innerText = data.message;
      e.target.reset();
    } catch (err) {
      document.getElementById('touchResponse').innerText =
        'Something went wrong. Please try again.';
    }
  });
