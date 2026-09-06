document.querySelectorAll('a[href*="pay.cakto.com.br"]').forEach((botao) => {
    botao.addEventListener('click', () => {
        console.log('Redirecionando para o checkout da Cakto');
    });
});