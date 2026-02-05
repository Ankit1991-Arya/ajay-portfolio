document.getElementById('contactForm').addEventListener('submit', async (e) => {
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

    document.getElementById('responseMsg').innerText = data.message;
    e.target.reset();

  } catch (error) {
    document.getElementById('responseMsg').innerText =
      'Something went wrong. Try again.';
  }
});
