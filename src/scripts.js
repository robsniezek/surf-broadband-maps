const path = require('path');
const fs = require('fs');

const content = fs.readFileSync(path.join(__dirname,'./geojson/surfExisting/Accounts Today.geojson'), {encoding: 'utf8'});
const json = JSON.parse(content);

// get unique account types
// const accountTypes = {};
// json.features.forEach(map => {
//   accountTypes[map.properties.account_type] = true;
// });

// filter
// const fiber = json.features.filter(row => {
//   return row.properties.account_type.indexOf('Fiber') !== -1;
// });
// fs.writeFileSync('./output.geojson', JSON.stringify(fiber, null, 2), {encoding: 'utf8'});
// console.log(fiber.length);

// map specific keys
// const mapped = json.features.filter(row => {
//   return row.properties.account_type.indexOf('Fiber') !== -1;
// }).map(row => {
//   return {
//     latitude: row.properties.latitude,
//     longitude: row.properties.longitude
//   }
// });
// fs.writeFileSync('./output.geojson', JSON.stringify(mapped, null, 2), {encoding: 'utf8'});