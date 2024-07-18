var form = document.getElementById('carForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(form);

    fetch('https://exemplo.com/api/venda-veiculo', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Erro ao enviar formulário');
        }
        return response.json();
    })
    .then(function(data) {
        console.log('Resposta do servidor:', data);
        alert('Formulário enviado com sucesso!');
        form.reset(); 
    })
    .catch(function(error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
});
