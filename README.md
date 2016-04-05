# Edinburgh-Busses-Project
My Project Based upon the Edinburgh Busses API. You will need your own key.
This doesn't do anything at the moment apart from get the API data and create a JSON route in localhost called /getjson.

To add your own key get it from http://www.mybustracker.co.uk/?page=API%20Key.

Then add a new file in server/busses/apiKey.js. In this file add the folllowing:

*var apiKey = 'YOUR KEY GOES HERE IN THE QUOTES';

module.exports = apiKey;*
