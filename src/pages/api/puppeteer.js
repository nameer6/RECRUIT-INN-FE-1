// pages/api/generate-pdf.js
import puppeteer from 'puppeteer';

export default async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(req.body.htmlContent, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();
  res.setHeader('Content-Type', 'application/pdf');
  res.send(pdf);
};