function graphColour(index_colour) {
	console.log(comparison_array[index_colour - 1]);
	let colours_graph = [];
	let borders_graph = [];
	for (let i = 0; i < bubble_array.length; i++) {
		if (index_colour == 0) {
			if (i == comparison_array[index_colour][0] || i == comparison_array[index_colour][1]) {
				colours_graph.push("#5A877A");
				borders_graph.push("#7fbeab");
			}
			else {
				colours_graph.push("#5C5C5C");
				borders_graph.push("#525252");
			}
		}
		else if (index_colour == comparison_array.length) {
			//Last comparison in the array
			if ((i == comparison_array[index_colour - 1][0] || i == comparison_array[index_colour - 1][1]) && comparison_array[index_colour - 1].length < 3) {
				colours_graph.push(pattern.draw('circle', '#7fbeab'));
			}
			else {
				colours_graph.push("#7fbeab");
				
			}
			borders_graph.push("#5A877A");
		}
		else if (comparison_array[index_colour - 1].length < 3) {
			//Can be dotted bars 
			if ((i == comparison_array[index_colour - 1][0] || i == comparison_array[index_colour - 1][1]) && (i == comparison_array[index_colour][0] || i == comparison_array[index_colour][1])) {
				//dotted and coloured
				
				colours_graph.push(pattern.draw('circle', '#5A877A'));
				borders_graph.push("#7fbeab");
			}
			else if (i == comparison_array[index_colour - 1][0] || i == comparison_array[index_colour - 1][1]) {
				console.log("I go heer")
				colours_graph.push(pattern.draw('circle', '#5C5C5C'));
				borders_graph.push("#525252");
			}
			else if (i == comparison_array[index_colour][0] || i == comparison_array[index_colour][1]) {
				colours_graph.push("#5A877A");
				borders_graph.push("#7fbeab");
			}
			else {
				colours_graph.push("#5C5C5C");
				borders_graph.push("#525252");
			}
		}
		else {
			if (i == comparison_array[index_colour][0] || i == comparison_array[index_colour][1]) {
				borders_graph.push("#7fbeab");
				colours_graph.push("#5A877A");
			}
			else {
				colours_graph.push("#5C5C5C");
				borders_graph.push("#525252");
			}
		}
		
	}
	console.log(index_colour);
	return [colours_graph, borders_graph];
}

console.log("I am here barney")