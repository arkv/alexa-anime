var rp = require('request');
var cheerio = require('cheerio');
var page = Math.floor(Math.random() * 26057);
var fs = require('fs');
var title = [];

function random_item(items)
{  
return items[Math.floor(Math.random()*items.length)];    
}


rp("https://en.wikipedia.org/wiki/List_of_action_anime", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('table.wikitable > tbody > tr').each(function( index ) {
	title.push($(this).find('td > a').first().text()); 
  });
	fs.appendFileSync('actionanime.txt', title + '\n' + '\n');
	var randanime = title[Math.floor(Math.random()*title.length)]
	console.log(randanime);
});

/*
rp("https://myanimelist.net/anime/" + page, function(error, response, html) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

	var $ = cheerio.load(html);
	title += $('head > title').text().trim().replace('MyAnimeList.net',''); 

	 });
console.log("title:" + title);
 
var options = {
	method: GET,
    uri: 'https://myanimelist.net/anime/' + page,
    json: true
};

rp(options)
	.then(function (randanime, head) {
		var $ = cheerio.load(head);

		var title = $(this).find("title").text().trim();
		console.log(title);
		})
		
    .catch(function(err){
        console.error(err); // This will print any error that was thrown in the previous error handler.
        });
	
*/