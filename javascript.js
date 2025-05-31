document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    
    if(formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if(nome && email && mensagem) {
                // Aqui viria o código para enviar os dados
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
    
    // Suavizar rolagem para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});