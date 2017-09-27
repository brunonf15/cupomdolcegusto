//Helper
module.exports = {
    path: function () {
        return "https://www.nescafe-dolcegusto.com.br/";
    },

    //User data
    loginUser: function () {
        //Realiza o login
        element(by.id('header-account')).click();
        browser.driver.sleep(5000);
        element(by.id('email')).sendKeys('user@gmail.com');
        element(by.id('pass')).sendKeys('pass1234');
        browser.driver.sleep(3000);
        element(by.id('send2')).click();
        browser.driver.sleep(5000);
    },

    //Random text
    getText: function textoAleatorio(tamanho) {
        var letras = 'abcdefghiklmnopqrstuvwxyz123456789';
        var aleatorio = '';
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * letras.length);
            aleatorio += letras.substring(rnum, rnum + 1);
        }
        return aleatorio;
    }


};
