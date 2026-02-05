const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    // Close all answers
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove('active');
        q.nextElementSibling.style.display = 'none';
      }
    });

    // Toggle current answer
    question.classList.toggle('active');
    const answer = question.nextElementSibling;

    answer.style.display =
      answer.style.display === 'block' ? 'none' : 'block';
  });
});