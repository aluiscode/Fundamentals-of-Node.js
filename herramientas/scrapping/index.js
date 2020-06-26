const puppeteer = require('puppeteer');

//Función anonima asyncrona auto ejecutable
(async () => {
    console.log('Arbir el navegador')
    //Headless es una propiedad para no cerrar sin verlo
    const browser= await puppeteer.launch({ headless: false})
    //Evitar que se abra reapido y se cirre, trabajaremos con el
    const page = await browser.newPage()
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    //Trabajar sobre una pagina web
    let titulo1= await page.evaluate(() => {
        const h1 = document.querySelector('h1')
        return h1.innerHTML;
    })

    //Imprimir en Consola
    console.log(titulo1)

    console.log('Cerrando Navegador')
    // browser.close()
    console.log('Navegador Cerrado')
})();