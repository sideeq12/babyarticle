const fs = require('fs');
const pregnancyWeeks = require('./data/pregnancyWeeks.json');
const symptomWeekMap = require('./data/symptomWeekMap.json');

const baseUrl = 'https://babybloom.com';
const lastMod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Main pages
const routes = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/pregnancy`, priority: 0.9 },
    { url: `${baseUrl}/pregnancy-symptoms`, priority: 0.8 },
    { url: `${baseUrl}/pregnancy-nutrition`, priority: 0.8 },
    { url: `${baseUrl}/pregnancy-due-date-calculator`, priority: 0.8 },
];

routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${route.url}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
});

// Pregnancy week pages
pregnancyWeeks.forEach(week => {
    const url = `${baseUrl}/pregnancy/${week.week}-weeks-pregnant`;
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
});

// Symptom pages
symptomWeekMap.forEach(mapping => {
    const symptomSlug = mapping.symptom.replace(/ /g, '-');
    const url = `${baseUrl}/pregnancy-symptoms/${mapping.week}-${symptomSlug}`;
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
});

xml += '</urlset>\n';

fs.writeFileSync('sitemap.xml', xml);
console.log('Sitemap generated');