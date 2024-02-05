var chrt;
var chartId;

//Run through the comparison array at index 0 to create the colours
var colours = [];
var borders = [];
[colours, borders] = graphColour(0);
var labels = [...Array(bubble_array[0].length).keys()].map(i => i);

$(document).ready(function () {

	Chart.defaults.color = '#FFF';

	console.log("here");
	chrt = document.getElementById("chartId").getContext("2d");
	chartId = new Chart(chrt, {
		type: 'bar',
		data: {
			labels: labels,
			
			datasets: [{
				data: bubble_array[0],
				backgroundColor: colours,
				borderColor: borders,
				borderWidth: 2,

			}],
		},
		options: {
			responsive: false,
			plugins: {
				legend: { display: false },
			},
			scales: {
				x: {
					title: {
						display: true,
						text: 'Index'
					}
				},
				y: {
					title: {
						display: true,
						text: "Values"
					}
				}
			}
		},
	});
})