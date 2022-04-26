const foreingFinancialCtrl = {};
const puppeteer = require('puppeteer');
const { URL } = require('../utils/scrapingData'); // la url a la que se va a realizar la petición

// Obtener todos los datos de la tabla de la página web del SII
foreingFinancialCtrl.getAllTable = async (req, res) => {

    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle2' });

    let data = await page.evaluate( () => {

        let idTable = '#tabledatasii'; // id de la tabla que se va a recorrer
        let number = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(1)');
        let razonSocial = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(2)');
        let pais = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(3)');
        let incriptionData = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(4)');
        let validUntil = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(5)');
        let lastUpdate = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(6)');
        let state = document.querySelectorAll( idTable+' > tbody > tr > td:nth-child(7)');

        let data = [];
        for (let i = 0; i < number.length; i++) {
            data.push({
                number: number[i].innerText,
                razonSocial: razonSocial[i].innerText,
                pais : pais[i].innerText,
                incriptionData : incriptionData[i].innerText,
                validUntil : validUntil[i].innerText,
                lastUpdate : lastUpdate[i].innerText,
                state : state[i].innerText
            });
        }
       
        return {
            result : data
        }
    });

    return res.status(200).json({
        message: 'Table data obtained successfully',
        data: data.result,
        state: 'success'
    });
    
}

module.exports = foreingFinancialCtrl;