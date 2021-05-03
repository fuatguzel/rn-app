var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12.
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
newdate = day + '-' + month + '-' + year;

export const base_url = 'https://covid19.mathdro.id/api/countries';

export const daily_url = `https://covid19.mathdro.id/api/daily/${newdate}`;
