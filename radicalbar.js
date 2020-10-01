function makeCharts() {
    const width = 960,
        height = 960,
        chartRadius = height / 2 - 40;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    let svg = d3.select('#arc').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip');

    const PI = Math.PI,
        arcMinRadius = 10,
        arcPadding = 3,
        labelPadding = 25,
        numTicks = 0;
    data[0] = { name: "Undefined creature", value: 71 };
    data[1] = { name: "Bird", value: 52 };
    data[2] = { name: "Horse", value: 37 };
    data[3] = { name: "Lion", value: 32 };
    data[4] = { name: "Bear", value: 24 };
    data[5] = { name: "Elephant", value: 13 };
    data[6] = { name: "Dragon", value: 11 };
    data[7] = { name: "Deer", value: 10 };
    data[8] = { name: "Monkey", value: 7 };
    data[9] = { name: "Butterfly", value: 6 };
    data[10] = { name: "Dog", value: 4 };
    data[11] = { name: "Rabbit", value: 4 };
    data[12] = { name: "Sheep", value: 4 };
    data[13] = { name: "Tiger", value: 4 };
    data[14] = { name: "Antelope", value: 2 };
    data[15] = { name: "Cicada", value: 2 };
    data[16] = { name: "Fish", value: 2 };
    data[17] = { name: "Phoenix", value: 2 };
    data[18] = { name: "Serpent", value: 2 };
    data[19] = { name: "Taotie", value: 2 };
    data[20] = { name: "Turtle", value: 1 };
    data[21] = { name: "Baffalo", value: 1 };
    data[22] = { name: "Cheetah", value: 1 };
    data[23] = { name: "Cow", value: 1 };
    data[24] = { name: "Duck", value: 1 };
    data[25] = { name: "Leopard", value: 1 };
    console.log(data);

    let scale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) * 2])
        .range([0, 2 * PI]);

    let ticks = scale.ticks(numTicks).slice(0, -1);
    let keys = data.map((d, i) => d.name);
    //number of arcs
    const numArcs = keys.length;
    const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;

    let arc = d3.arc()
        .innerRadius((d, i) => getInnerRadius(i))
        .outerRadius((d, i) => getOuterRadius(i))
        .cornerRadius(0)
        .startAngle(PI)
        .endAngle((d, i) => scale(d) + PI)

    let radialAxis = svg.append('g')
        .attr('class', 'r axis')
        .selectAll('g')
        .data(data)
        .enter().append('g');

    radialAxis.append('circle')
        .attr('r', (d, i) => getOuterRadius(i) + arcPadding);

    radialAxis.append('text')
        .attr('x', labelPadding + 10)
        .attr('y', (d, i) => getOuterRadius(i) - arcPadding)
        .text(d => d.name)
        .style('text-anchor', 'start')
        .attr('transform', function(d, i, j) { return 'translate(-20,0)' });

    let axialAxis = svg.append('g')
        .attr('class', 'a axis')
        .selectAll('g')
        .data(ticks)
        .enter().append('g')
        .attr('transform', d => 'rotate(' + (rad2deg(scale(d)) - 90) + ')');

    axialAxis.append('line')
        .attr('x2', chartRadius);

    axialAxis.append('text')
        .attr('x', chartRadius)
        .style('text-anchor', d => (scale(d) >= PI && scale(d) < 2 * PI ? 'end' : null))
        .attr('transform', d => 'rotate(' + (90 - rad2deg(scale(d))) + ',' + (chartRadius + 10) + ',0)')
        .text(d => d);

    //data arcs
    let arcs = svg.append('g')
        .attr('class', 'data')
        .selectAll('path')
        .data(data)
        .enter().append('path')
        .attr('class', 'arc')
        .style('fill', d3.color("#333333"))

    arcs.transition()
        .delay((d, i) => i * 200)
        .duration(1000)
        .attrTween('d', arcTween);

    arcs.on('mousemove', showTooltip)
    arcs.on('mouseout', hideTooltip)

    function arcTween(d, i) {
        let interpolate = d3.interpolate(0, d.value);
        return t => arc(interpolate(t), i);
    }

    function showTooltip(d) {
        tooltip.style('left', (d3.event.pageX + 10) + 'px')
            .style('top', (d3.event.pageY - 25) + 'px')
            .style('display', 'inline-block')
            .html(d.value);
    }

    function hideTooltip() {
        tooltip.style('display', 'none');
    }

    function rad2deg(angle) {
        return angle * 180 / PI;
    }

    function getInnerRadius(index) {
        return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
    }

    function getOuterRadius(index) {
        return getInnerRadius(index) + arcWidth;
    }

}

makeCharts();