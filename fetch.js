// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "lfhAACxNfCCZkYCMPMkqelvWP7lkxB3jzVOoI2RO";

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
var start = 0;
var last = 0;
var inCollection = 0;
var search = `unit_code:"FSG" + topic:"Animals"`;

// array that we will write into
let dataArray = [];
var data = [];

// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm + "&start=" + start + "&rows=" + 1000;
    //console.log(url);
    return window
        .fetch(url)
        .then(res => res.json())
        .then(data => {
            data.response.rows.forEach(function(n) {
                addObject(n);
                //console.log(n);
            })
        })
        .catch(error => {
            console.log(error);
        })
}

