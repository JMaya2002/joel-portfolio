const form = document.getElementById('contactForm');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  // Aquí conectarías con tu backend o servicio de email
  console.log('Form data:', data);

  // Mostrar mensaje de éxito
  alert('¡Mensaje enviado! Te responderé pronto.');
  form.reset();
});
