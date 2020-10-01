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

// create your own array with just the data you need
function addObject(objectData) {
    var currentID = objectData.id;
    var currentTitle = objectData.title;
    var objectLink = objectData.content.descriptiveNonRepeating.record_link;
    var objectDisplay = objectData.content.indexedStructured.onPhysicalExhibit;
    var objectCulture = objectData.content.indexedStructured.culture;
    var objectType = objectData.content.freetext.objectType;
    var objectMedium = objectData.content.freetext.physicalDescription[0]["content"];
    var objectDate = objectData.content.freetext.date[0]["content"];
    var objectPlace = "";
    var objectTopic = objectData.content.indexedStructured.topic;

    try {
        objectPlace = objectData.content.freetext.place[0]["content"];
    } catch (err) {
        objectPlace = "";
    }
    var objectPeriod = "";
    try {
        objectPeriod = objectData.content.freetext.date[1]["content"];
    } catch (err) {
        objectPeriod = "";
    }

    var index = dataArray.length;

    dataArray[index] = {};
    dataArray[index]["title"] = currentTitle;
    dataArray[index]["id"] = currentID;
    dataArray[index]["link"] = objectLink;
    if (typeof(objectDisplay) === 'undefined') {
        dataArray[index]["display"] = "No";
    } else {
        dataArray[index]["display"] = "Yes";
    }
    dataArray[index]["culture"] = objectCulture;
    var finalobject = "";
    for (var i = 0; i < objectType.length; i++) {
        finalobject += objectType[i]["content"]
        finalobject += '%'
    }
    dataArray[index]["type"] = finalobject;
    dataArray[index]["medium"] = objectMedium;
    dataArray[index]["date"] = objectDate;
    dataArray[index]["place"] = objectPlace;
    var finaltopic = "";
    for (var i = 0; i < objectTopic.length; i++) {
        finaltopic += objectTopic[i]
        finaltopic += '%'
    }
    dataArray[index]["topic"] = finaltopic;
    dataArray[index]["period"] = objectPeriod;
}

function exportToCsv(filename, rows) {
    var processRow = function(row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            var result = innerValue.replaceAll(',', '%');
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        //console.log(finalVal);
        return finalVal + '\n';
    };

    var csvFile = 'title, id, link, display, culture, type, medium, date, origin, topic, period\n';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(Object.values(rows[i]));
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

async function run() {
    while (start == last) {
        await fetchSearchData(search);
        start += 1000;
        last = dataArray.length;
    };

    for (var i = 0; i < dataArray.length; i++) {
        if (typeof(dataArray[i].display) != 'undefined') {
            inCollection += 1;
        }
    };
    //console.log(dataArray);
    //exportToCsv("test.csv", dataArray);
}

run();