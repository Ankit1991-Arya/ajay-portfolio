document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === 'block' ? 'none' : 'block';
  });
});