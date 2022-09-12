const cheerio = require('cheerio');
const request = require('request-promise');

async function getInjured() {
  const result = await request.get('https://www.premierinjuries.com/injury-table.php');
  const $ = cheerio.load(result);
  const scrapedData = [];
  const teams = [];
  $('.injury-team').each((index, element) => {
    teams.push($(element).text().toLowerCase());
  });
}

module.exports = { getInjured };
