const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');
const { URL } = require('../utils/scrapingData');


router.get('/', async (req, res) => {

    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle2' });

    let data = await page.evaluate( () => {
        let title = document.querySelector('.title').innerText;
        let description = document.querySelector('.contenido > p:nth-child(4)').innerText
        return {
            title : title,
            description : description
        }
    });

    await page.goto(URL, { waitUntil: 'networkidle2' });

    res.send({
        title: data.title,
        version: '1.0.0',
        author: 'Carlos Pasten Bravo',
        description: data.description,
        message : 'to obtain the data from the table of the website of the SII /api/All'
    });
});

module.exports = router;