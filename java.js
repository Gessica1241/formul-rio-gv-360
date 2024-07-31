
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Contato</title>
    <link rel="stylesheet" href="script.js">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <form id="contactForm">
        <h1 style="font-family: Arial, sans-serif; 
        font-size: 25px;">Faça seu agendamento:</h1>
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="numeroWhatsApp1">Número do WhatsApp:</label>
            <input type="tel" id="numeroWhatsApp1" name="numeroWhatsApp" placeholder="Ex: 5591999999999" required>
        </div>
        <div class="form-group">
            <label for="msg">Mensagem:</label>
            <input type="text" id="msg" name="msg" required>
        </div>
        
        <button    type="button" onclick="sendToWhatsApp()"> <img src="whats3.png" alt="Logo">Enviar no WhatsApp
           
        </button>
    </form>

    <script src="script.js"></script>
</body>
</html>
