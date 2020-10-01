var animals =
    /* real animals */
    [{
            "name": "antelope",
            "children": [{
                "name": "paper",
                "children": [
                    { "name": "ink", "size": 1 },
                    { "name": "color", "size": 1 }
                ]
            }]
        },

        {
            "name": "bear",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 10 },
                        { "name": "bronze with gilding", "size": 12 },
                        { "name": "bronze with inlay", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "opaque water color", "size": 1 }
                    ]
                }
            ]
        },

        {
            "name": "bird",
            "children": [{
                    "name": "glass",
                    "size": 2
                },
                {
                    "name": "jade",
                    "size": 10
                },
                {
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 24 },
                        { "name": "lead", "size": 1 },
                        { "name": "bronze with gilding", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "color", "size": 2 },
                        { "name": "etching", "size": 1 },
                        { "name": "watercolor", "size": 2 },
                        { "name": "wood engraving", "size": 1 }
                    ]
                },
                {
                    "name": "ceramic",
                    "children": [
                        { "name": "stone paste", "size": 1 }
                    ]
                },
                {
                    "name": "silver",
                    "children": [
                        { "name": "silver with gliding", "size": 2 }
                    ]
                },
                {
                    "name": "silk",
                    "size": 5
                }
            ]
        },
        {
            "name": "butterfly",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 2 },
                        { "name": "bronze with gilding", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "ink", "size": 1 }
                    ]
                },
                {
                    "name": "silk",
                    "size": 2
                }
            ]
        },

        {
            "name": "buffalo",
            "children": [{
                "name": "metal",
                "children": [
                    { "name": "bronze", "size": 2 }
                ]
            }]
        },
        {
            "name": "cheetah",
            "children": [{
                "name": "paper",
                "children": [
                    { "name": "watercolor", "size": 1 }
                ]
            }]
        },
        {
            "name": "cicada",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 1 }
                    ]
                },
                {
                    "name": "jade",
                    "size": 1
                }
            ]
        },
        {
            "name": "cow",
            "children": [{
                "name": "paper",
                "children": [
                    { "name": "watercolor", "size": 1 }
                ]
            }]

        },
        {
            "name": "deer",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 2 },
                        { "name": "bronze with gilding", "size": 1 },
                        { "name": "bronze with inlay", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "color on paper", "size": 4 }
                    ]
                },
                {
                    "name": "silk",
                    "size": 2
                }
            ]
        },
        {
            "name": "duck",
            "children": [{
                "name": "silver",
                "children": [
                    { "name": "silver with gilding", "size": 1 }
                ]
            }]

        },
        {
            "name": "dog",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "copper", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "etching", "size": 2 },
                        { "name": "watercolor", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "elephant",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 2 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "ink", "size": 1 },
                        { "name": "tracing", "size": 1 },
                        { "name": "watercolor", "size": 3 },
                        { "name": "color", "size": 1 }
                    ]
                },
                {
                    "name": "jade",
                    "size": 2
                },
                {
                    "name": "stone",
                    "size": 1
                },
                {
                    "name": "other",
                    "children": [
                        { "name": "ivory", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "horse",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 14 },
                        { "name": "bronze with gilding", "size": 1 },
                        { "name": "cooper", "size": 1 },
                        { "name": "lead", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "ink", "size": 1 },
                        { "name": "tracing", "size": 1 },
                        { "name": "watercolor", "size": 5 },
                        { "name": "color", "size": 2 },
                        { "name": "etching", "size": 9 }
                    ]
                },
                {
                    "name": "stone",
                    "size": 2
                }
            ]
        },
        {
            "name": "leopard",
            "children": [{
                "name": "paper",
                "children": [
                    { "name": "ink", "size": 1 }
                ]
            }]

        },
        {
            "name": "fish",
            "children": [{
                "name": "metal",
                "children": [
                    { "name": "bronze", "size": 2 }
                ]
            }]

        },
        {
            "name": "lion",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 5 },
                        { "name": "bronze with gilding", "size": 4 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "ink", "size": 2 },
                        { "name": "watercolor", "size": 1 }
                    ]
                },
                {
                    "name": "stone",
                    "children": [
                        { "name": "gilding", "size": 1 },
                        { "name": "limestone", "size": 1 },
                        { "name": "stone", "size": 13 }
                    ]
                },
                {
                    "name": "ceramic",
                    "children": [
                        { "name": "earthenware", "size": 1 }
                    ]
                },
                {
                    "name": "glass",
                    "size": 1
                },
                {
                    "name": "jade",
                    "size": 2
                },
                {
                    "name": "other",
                    "children": [
                        { "name": "ivory", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "monkey",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 3 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "watercolor", "size": 1 }
                    ]
                },
                {
                    "name": "stone",
                    "children": [
                        { "name": "marble", "size": 2 }
                    ]
                },
                {
                    "name": "other",
                    "children": [
                        { "name": "palm leaf", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "rabbit",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 1 }
                    ]
                },
                {
                    "name": "ceramic",
                    "children": [
                        { "name": "stone paste", "size": 1 }
                    ]
                },
                {
                    "name": "silver",
                    "children": [
                        { "name": "silver with gilding", "size": 2 }
                    ]
                }
            ]
        },
        {
            "name": "sheep",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "watercolor", "size": 1 },
                        { "name": "color", "size": 1 }
                    ]
                },
                {
                    "name": "stone",
                    "size": 2
                }
            ]
        },
        {
            "name": "tiger",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 2 },
                        { "name": "bronze with gilding", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "color", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "turtle",
            "children": [{
                "name": "metal",
                "children": [
                    { "name": "bronze", "size": 1 },
                    { "name": "bronze with gilding", "size": 1 }
                ]
            }]
        },


        /*unreal animals or undefined*/

        {
            "name": "dragon",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 6 },
                        { "name": "bronze with gilding", "size": 2 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "watercolor", "size": 1 }
                    ]
                },
                {
                    "name": "stone",
                    "children": [
                        { "name": "marble", "size": 1 }
                    ]
                },
                {
                    "name": "jade",
                    "size": 1
                }
            ]
        }, , {
            "name": "phoenix",
            "children": [{
                    "name": "silver",
                    "children": [
                        { "name": "silver with gilding", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "watercolor", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "taotie",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 1 }
                    ]
                },
                {
                    "name": "paper",
                    "children": [
                        { "name": "watercolor", "size": 1 }
                    ]
                }
            ]
        },
        {
            "name": "serpent",
            "children": [{
                "name": "metal",
                "children": [
                    { "name": "bronze", "size": 2 }
                ]
            }]
        },
        {
            "name": "undefined beasts",
            "children": [{
                    "name": "metal",
                    "children": [
                        { "name": "bronze", "size": 44 },
                        { "name": "bronze with gilding", "size": 17 },
                        { "name": "bronze with inlay", "size": 8 },
                        { "name": "lead", "size": 1 }
                    ]
                },
                {
                    "name": "jade",
                    "size": 1
                }
            ]
        }
    ]

function chartmake(divname, animaldata) {
    am4core.ready(function() {

        // Themes begin
        am4core.options.autoSetClassName = true;
        am4core.useTheme(am4themes_animated);
        // Themes end

        // create chart
        var chart = am4core.create(divname, am4plugins_sunburst.Sunburst);
        chart.padding(0, 0, 0, 0);
        chart.margin(0, 0, 0, 0);
        chart.width = 125;
        chart.height = 125;
        chart.radius = 60;

        chart.data = animaldata;

        var colordata = [];
        animaldata.forEach(function(type, index) {
            switch (true) {
                case (type["name"].includes("metal")):
                    colordata[index] = am4core.color("#977663").lighten(0.3);
                    break;
                case (type["name"].includes("paper")):
                    colordata[index] = am4core.color("#DD7E69").lighten(0.3);
                    break;
                case (type["name"].includes("silver")):
                    colordata[index] = am4core.color("#737373").lighten(0.3);
                    break;
                case (type["name"].includes("ceramic")):
                    colordata[index] = am4core.color("#9C5043").lighten(0.3);
                    break;
                case (type["name"].includes("glass")):
                    colordata[index] = am4core.color("#B1D6CE").lighten(0.3);
                    break;
                case (type["name"].includes("silk")):
                    colordata[index] = am4core.color("#C19C9C").lighten(0.3);
                    break;
                case (type["name"].includes("jade")):
                    colordata[index] = am4core.color("#737F38").lighten(0.3);
                    break;
                case (type["name"].includes("stone")):
                    colordata[index] = am4core.color("#4A6467").lighten(0.3);
                    break;
                default:
                    colordata[index] = am4core.color("#D2A700").lighten(0.3);
            }
            console.log(colordata[index]);
        });

        console.log(divname);
        console.log(colordata);

        chart.colors.list = colordata;
        chart.colors.step = 1;
        chart.fontSize = 11;
        chart.innerRadius = 30;

        let title = chart.titles.create();
        title.text = divname;
        title.fontSize = 20;
        title.marginBottom = 10;
        title.padding(0, 0, 0, 10);
        title.align = "center";
        title.textalign = "center";

        // define data fields
        chart.dataFields.value = "size";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";


        let image = chart.createChild(am4core.Image);
        image.href = "resources/icon/old/" + divname + ".svg";
        image.x = am4core.percent(50);
        image.y = am4core.percent(50);
        image.horizontalCenter = "middle";
        image.verticalCenter = "middle";
        image.padding(am4core.percent(-25), 0, 0, 0);
        image.scale = 0.8;

        var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
        level0SeriesTemplate.hiddenInLegend = false;
        level0SeriesTemplate.labels.template.disabled = true;
        chart.seriesTemplates.setKey("0", level0SeriesTemplate)

        level0SeriesTemplate.labels.template.adapter.add("rotation", function(rotation, target) {
            target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
            target.maxHeight = Math.abs(target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS);

            return rotation;
        })

        var level1SeriesTemplate = level0SeriesTemplate.clone();
        chart.seriesTemplates.setKey("1", level1SeriesTemplate);
        level1SeriesTemplate.fillOpacity = 0.75;
        level1SeriesTemplate.hiddenInLegend = true;
        level1SeriesTemplate.contentWidth = am4core.percent(40);

        var level2SeriesTemplate = level0SeriesTemplate.clone();
        chart.seriesTemplates.setKey("2", level2SeriesTemplate);
        level2SeriesTemplate.fillOpacity = 0.5;
        level2SeriesTemplate.hiddenInLegend = true;

        //chart.legend = new am4charts.Legend();

    }); // end am4core.ready()
}

//d3.select("#graphs").append("div").attr("class", "columnMedium").attr("id", "animal");
//chartmake("chartdiv", animals[0]["children"]);


animals.forEach(function(animal) {
    d3.select("#graphs").append("div").attr("class", "columnMedium").attr("id", animal["name"]);
    chartmake(animal["name"], animal["children"]);
});