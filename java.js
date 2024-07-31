function sendToWhatsApp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    const numeroWhatsApp1 = document.getElementById('numeroWhatsApp1').value;


        if (!nome || !email || !msg || !numeroWhatsApp1) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const mensagem = `*Solicitação de agendamento*:\n\nNome: ${nome}\nEmail: ${email}\nNúmero${numeroWhatsApp1}\nMensagem: ${msg}`;

   
    const mensagemEncoded = encodeURIComponent(mensagem);

   
    const numeroWhatsApp = '5547988831423'; //mude aqui o número do cliente

      
      const numeroFormatado = numeroWhatsApp.replace(/\D/g, '');
      

    
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;

    
    window.open(url, '_blank');
}
