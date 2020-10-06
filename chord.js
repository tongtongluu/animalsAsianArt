var margin = { left: 0, top: -100, right: 0, bottom: -100 },
    width = 1200,
    height = 1000,
    innerRadius = Math.min(width, height) * .3,
    outerRadius = innerRadius * 1.1;

// var Names = ["antelope","lion","tiger","bird","elephant","cow","horse","cicada","fish","butterfly","baffalo","rabbit","duck","deer","monkey","sheep","leopard","turtle"," ","dragon","taotie","phoenix","serpent"," "],
// 	colors = ["#CFC1C1", "#CFC1C1", "#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#CFC1C1","#FFFFFF","333333","#333333","#333333","#333333","#FFFFFF"],
//     opacityDefault = 1;
var Names = ["lion", "tiger", "bird", "elephant", "horse", "fish", "duck", "monkey", "turtle", " ", "dragon", "taotie", "phoenix", "serpent", " "],
    colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FAF8F4", "#333333", "#333333", "#333333", "#333333", "#FAF8F4"],
    opacityDefault = 0.8;
// var dataArr = [
//     [0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0], //antelope
//     [1,	0,	0,	0,	2,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	0,	0], //lion
//     [0,	0,	0,	2,	2,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	2,	2,	0,	1,	0], //tiger
//     [1,	0,	2,	0,	1,	0,	0,	2,	2,	1,	1,	1,	1,	0,	0,	1,	0,	2,	0,	5,	2,	1,	1,	0], //bird
//     [0,	2,	2,	1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	2,	0,	1,	0], //elephant
//     [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0], //cow
//     [0,	1,  0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0], //horse
//     [0,	0,	0,	2,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0], //cicada
//     [0,	0,	0,	2,	0,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	2,	0,	1,	0],//fish
//     [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],//butterfly
//     [0,	0,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],//baffalo
//     [0,	0,  0,	1,	0,	0,  0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],//rabbit
//     [0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0],//duck
//     [0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],//deer
//     [0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],//monkey
//     [1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],//sheep
//     [1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],//leopard
//     [0,	0,	1,	2,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],//turtle
//     [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	20],//dummy
//     [0,	1,	2,	5,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	2,	1,	2,	0],//dragon
//     [0,	0,	2,	2,	2,	0,	0,	0,	2,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	0,	0,	3,	0],//taotie
//     [0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0],//phoenix
//     [0,	0,	1,	1,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2,	3,	0,	0,	0],//serpent
//     [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	20,	0,	0,	0,	0,	0]//dummy
// ];
var respondents = 51;
var emptyPerc = 0.5;
var emptyStroke = Math.round(respondents * emptyPerc);
var offset = Math.PI * (emptyStroke / (respondents + emptyStroke)) / 2;
offset = 3.14 * emptyStroke / (emptyStroke + respondents) / 2;
var dataArr = [
    [0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], //lion
    [0, 0, 2, 2, 0, 1, 0, 0, 1, 0, 2, 2, 0, 1, 0], //tiger
    [0, 2, 0, 1, 0, 2, 1, 0, 2, 0, 5, 2, 1, 1, 0], //bird
    [2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0], //elephant
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], //horse
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0], //fish
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], //duck
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], //monkey
    [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], //turtle
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, emptyStroke], //dummy
    [1, 2, 5, 1, 0, 1, 0, 1, 1, 0, 0, 2, 1, 2, 0], //dragon
    [0, 2, 2, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 3, 0], //taotie
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], //phoenix
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 2, 3, 0, 0, 0], //serpent
    [0, 0, 0, 0, 0, 0, 0, 0, 0, emptyStroke, 0, 0, 0, 0, 0] //dummy
];

// SCALE AND LAYOUT FUNTIONS

var colors = d3.scaleOrdinal()
    .domain(d3.range(Names.length))
    .range(colors);

function startAngle(d) { return d.startAngle + offset + 50; }

function endAngle(d) { return d.endAngle + offset + 50; }

var chord = d3
    .chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending) //sort the chords inside an arc from high to low
    .sortChords(d3.descending);


var dataChord = chord(dataArr);

var path = d3.ribbon()
    .radius(innerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle);

// SVG

var svg = d3.select("#chordchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")")
    // GRADIENT

//Function to create the unique id for each chord gradient
function getGradID(d) { return "linkGrad-" + d.source.index + "-" + d.target.index; }

//Create the gradients definitions for each chord
var grads = svg.append("defs").selectAll("linearGradient")
    .data(dataChord)
    .enter().append("linearGradient")
    //Create the unique ID for this specific source-target pairing
    .attr("id", getGradID)
    .attr("gradientUnits", "userSpaceOnUse")
    //Find the location where the source chord starts
    .attr("x1", function(d, i) { return innerRadius * Math.cos((d.source.endAngle - d.source.startAngle) / 2 + d.source.startAngle - Math.PI / 2); })
    .attr("y1", function(d, i) { return innerRadius * Math.sin((d.source.endAngle - d.source.startAngle) / 2 + d.source.startAngle - Math.PI / 2); })
    //Find the location where the target chord starts 
    .attr("x2", function(d, i) { return innerRadius * Math.cos((d.target.endAngle - d.target.startAngle) / 2 + d.target.startAngle - Math.PI / 2); })
    .attr("y2", function(d, i) { return innerRadius * Math.sin((d.target.endAngle - d.target.startAngle) / 2 + d.target.startAngle - Math.PI / 2); })
    //Set the starting color (at 0%)
grads.append("stop")
    .attr("offset", "0.1")
    .attr("stop-color", function(d) { return colors(d.source.index); });

//Set the ending color (at 100%)
grads.append("stop")
    .attr("offset", "0.5")
    .attr("stop-color", function(d) { return colors(d.target.index); });


// ARCS
var arc = d3.arc()
    .innerRadius(innerRadius * 1.01)
    .outerRadius(outerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle);

var arcs = svg.selectAll("g.group")
    .data(dataChord.groups)
    .enter().append("g")
    .attr("class", "group")
    .on("mouseover", fade(.1))
    .on("mouseout", fade(opacityDefault));


arcs
    .append('path')
    .attr('d', arc)
    .style("fill", function(d) {
        return colors(d.index);
    })



// NAMES

//Append the label names on the outside
arcs.append("text")
    .each(function(d) { d.angle = ((d.startAngle + d.endAngle) / 2) + offset + 50; })
    .attr("dy", "1em")
    .attr("class", "titles")
    .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .attr("transform", function(d) {
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" +
            "translate(" + (outerRadius + 30) + ")" +
            (d.angle > Math.PI ? "rotate(180)" : "") +
            (d.angle < Math.PI ? "rotate(180)" : "");
    })
    .text(function(d, i) { return Names[i]; });

// INNER CHORDS

svg.selectAll("path.chord")
    .data(dataChord)
    .enter().append("path")
    .attr("class", "chord")
    //change the fill to reference the unique gradient ID of the source-target combination
    .style("fill", function(d) { return "url(#" + getGradID(d) + ")"; })
    .style("opacity", opacityDefault)
    .attr("d", path);

// EXTRA




//Returns an event handler for fading a given chord group.
function fade(opacity) {
    return function(d, i) {
        svg.selectAll("path.chord")
            .filter(function(d) { return d.source.index != i && d.target.index != i; })
            .transition()
            .style("opacity", opacity);
    };
} //fade


// add annotations
const annotations = [{
        //below in makeAnnotations has type set to d3.annotationLabel
        //you can add this type value below to override that default
        type: d3.annotationCalloutCircle,
        note: {
            label: "most popular animals among all the collections",
            title: "Bird paired with almost all 4 mythical animals",
            wrap: 150
        },
        //settings for the subject, in this case the circle radius
        subject: {
            radius: 50
        },
        x: 0.78 * width,
        y: 0.25 * height,
        dy: 30,
        dx: 20
    },
    {   type: d3.annotationCalloutCircle,
        note: {
            label: "has appeared 10 times, all collections belong to south asian region, because it is a sacred animal in India and a common theme in South Asian art",
            title: "The elephant",
            wrap: 300,
            align: "left"
        },
        subject: {
            radius: 30
        },
        x: 0.82 * width,
        y: 0.45 * height,
        dy: 30,
        dx: 20
    },
 
    
].map(function(d) { d.color = "#B9B7B5"; return d })

const makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotations)

d3.select("svg")
    .append("g")
    .attr("class", "annotation-group")
    .call(makeAnnotations)

//sketch style for annotations
var rc = rough.svg('svg');

d3.selectAll('.annotation-subject').select('path')
    .attr('visibility', 'hidden')

d3.selectAll('.annotation-connector').select('path')
    .attr('visibility', 'hidden')

d3.selectAll('path.note-line')
    .attr('visibility', 'hidden')

d3.selectAll('.annotation-subject').each(function() {
    let gParent = this
    d3.select('svg').select('path.subject').each(function() {
        gParent.appendChild(rc.path(d3.select(this).node().getAttribute('d'), {
            stroke: 'black',
            fillStyle: 'hachure',
            strokeWidth: 0.1,
            roughness: 2.5,
        }))
    })
})

// d3.selectAll('.annotation-connector').each(function() {
//     let gParent = this
//     d3.select('svg').select('path').each(function() {
//         gParent.appendChild(rc.path(d3.select(this).node().getAttribute('d'), {
//             stroke: 'black',
//             fillStyle: 'hachure',
//             strokeWidth: 0.55,
//             roughness: 2.5,
//         }))
//     })
// })

d3.selectAll('.annotation-note').each(function() {
    let gParent = this
    d3.select(this).each(function() {
        gParent.append(rc.path(d3.select('path.note-line').node().getAttribute('d'), {
            stroke: 'black',
            fillStyle: 'hachure',
            strokeWidth: 0.55,
            roughness: 2.5,
        }))
    })
})

// create general annotation group:
const annotationsGeneral = [{
    note: {
      label: "",
      title: " Skip those instances that only appear once, and want to reduce the bias of the data, such as fish, antelope, cicada, etc."
    
    },
    x: 0.45 * width,
    y: 0.55 * height,
    dy: 50
    //dx: 100
  },
  {
    note: {
      label: "",
      title: "Hover over icons :)"
    
    },
    x: -0.01 * width,
    y: 0.35 * height,
    //dy: 50
    dx: 100
  }
].map(function(d){ d.color = "#AA211F"; return d})

  const makeAnnotationsGeneral = d3.annotation()
          .type(d3.annotationLabel)
          .annotations(annotationsGeneral)

        d3.select("svg")
          .append("g")
          .attr("class", "annotation-group")
          .call(makeAnnotationsGeneral)
