var data = [
[2017,	303916],
[2016,	408870],
[2015,	331333],
[2014,	479371],
[2013,	414397],
[2012,	356873],
[2011,	327577],
[2010,	447731],
[2009,	540865],
[2008,	705005],
[2007,	858638],
[2006,	1071972],
[2005,	1171396],
[2004,	1139282],
[2003,	905065],
[2002,	929809],
[2001,	1235718],
[2000,	1643679],
[1999,	1537000],
[1998,	1516680],
[1997,	1368707],
[1996,	1507020],
[1995,	1271390],
[1994,	979101],
[1993,	1212886],
[1992,	1145574],
[1991,	1077876],
[1990,	1049321],
[1989,	852506],
[1988,	942561],
[1987,	1122067],
[1986,	1615844],
[1985,	1183351],
[1984,	1058276],
[1983,	1033974],
[1982,	745820],
[1981,	749808],
[1980,	690554],
[1979,	795798],
[1978,	789441],
[1977,	733193],
[1976,	607499],
[1975,	512264],
[1974,	571606],
[1973,	441066],
[1972,	321326],
[1971,	263991],
[1970,	201780],
[1969,	137968],
[1968,	96641],
[1967,	73973],
[1966,	62640],
[1965,	40020],
[1964,	32519],
[1963,	29644],
[1962,	21103],
[1961,	21745],
[1960,	21022],
];

var dataGDP = [
[1960,	18058],
[1961,	18175],
[1962,	18977],
[1963,	19515],
[1964,	20360],
[1965,	21390],
[1966,	22529],
[1967,	22842],
[1968,	23692],
[1969,	24196],
[1970,	23958],
[1971,	24395],
[1972,	25415],
[1973,	26603],
[1974,	26287],
[1975,	25956],
[1976,	27059],
[1977,	28001],
[1978,	29287],
[1979,	29951],
[1980,	29613],
[1981,	30056],
[1982,	29211],
[1983,	30159],
[1984,	32076],
[1985,	33024],
[1986,	33851],
[1987,	34730],
[1988,	35865],
[1989,	36757],
[1990,	36982],
[1991,	36464],
[1992,	37241],
[1993,	37762],
[1994,	38808],
[1995,	39391],
[1996,	40414],
[1997,	41723],
[1998,	43073],
[1999,	44576],
[2000,	45887],
[2001,	45878],
[2002,	46267],
[2003,	47158],
[2004,	48493],
[2005,	49655],
[2006,	50490],
[2007,	50902],
[2008,	50276],
[2009,	48453],
[2010,	49267],
[2011,	49675],
[2012,	50394],
[2013,	50863],
[2014,	51664],
[2015,	52591],
[2016,	53015],
]

var dataArray = data.map(item => item[1]);
var dataYears = data.map(item => item[0]);

var dataArrayGDP = dataGDP.map(item => item[1]);
var dataYearsGDP = dataGDP.map(item => item[0]);

var parseDate = d3.timeParse("%Y");

var height = 260;
var width = 520;

var margin = {left:70,right:50,top:40,bottom:0};

var y = d3.scaleLinear()
          .domain([0,d3.max(dataArray)])
          .range([height,0]);
var x = d3.scaleTime()
          .domain(d3.extent(dataYears,function(d){ return parseDate(d); }))
          .range([0,width]);

// var y2 = d3.scaleLinear()
//           .domain([0,d3.max(dataArrayGDP)])
//           .range([height,0]);
// var x2 = d3.scaleTime()
//           .domain(d3.extent(dataYearsGDP,function(d){ return parseDate(d); }))
//           .range([0,width]);

var yAxis = d3.axisLeft(y).ticks(6).tickPadding(6).tickSize(6);
var xAxis = d3.axisBottom(x).ticks(12).tickPadding(6).tickSize(6);


var line = d3.line()
                .x(function(d,i){ return x(parseDate(dataYears[i])); })
                .y(function(d){ return y(d) });

var line2 = d3.line()
                .x(function(d,i){ return x(parseDate(dataYearsGDP[i])); })
                .y(function(d){ return y(d) });


var svg = d3.select("body").append("svg").attr("height","360").attr("width","100vw");
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")")

chartGroup.append("path").attr("d",line(dataArray)).attr("fill","none").attr("stroke","black");
chartGroup.append("path").attr("d",line(dataArrayGDP)).attr("fill","none").attr("stroke","hotpink");
chartGroup.append("g")
  .attr("class","axis y")
  .call(yAxis);
chartGroup.append("g")
  .attr("class","axis x")
  .attr("transform","translate(0,"+height+")")
  .call(xAxis);
