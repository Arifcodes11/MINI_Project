const axios = require('axios');
const cheerio = require('cheerio');

const fetchMarketData = () => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const url = `https://krama.karnataka.gov.in/MainPage/DailyMrktPriceRep2.aspx?Rep=Com&CommCode=78&VarCode=4&Date=${formattedDate}&CommName=Tomato%20/%20%E0%B2%9F%E0%B3%8A%E0%B2%AE%E0%B3%8D%E0%B2%AF%E0%B2%BE%E0%B2%9F%E0%B3%8A&VarName=Hybrid%20/%20%E0%B2%B9%E0%B3%88%E0%B2%AC%E0%B3%8D%E0%B2%B0%E0%B2%BF%E0%B2%A1%E0%B3%8D`;

  return axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const tableRows = $('#_ctl0_content5_Table1 tr');

      const data = [];

      tableRows.each((index, element) => {
        if (index !== 0) { // Skip the header row
          const row = $(element).find('td');
          const market = $(row[0]).text().trim();
          const minPrice = $(row[4]).text().trim();
          const maxPrice = $(row[5]).text().trim();

          
          data[market] = [minPrice, maxPrice];
          
        }
      });

      return data;
    })
    .catch(error => {
      console.error('Error fetching the webpage:', error);
    });
}

module.exports = fetchMarketData;