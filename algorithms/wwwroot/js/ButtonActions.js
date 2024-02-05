
var index_graph = 0;
function next(num) {
    let index = $(".shown").data("index");

    if ($(".shown").data("position") != "end") {
        $("ul[data-index =" + index + "]").removeClass("shown").addClass("hidden");
        $("ul[data-index =" + (index + 1) + "]").removeClass("hidden").addClass("shown");
        $("#current-step").text("Step " + (index + 2) + " :");
        console.log(bubble_array.length - 1)

        if (index + 1 == bubble_array.length - 1) {
            $("#current-comparison , #now-step , #previous-step").addClass("hidden");
            $("#final-step").removeClass("hidden");
        }
        else {
            //Update the text
            $("#curr-first").text(bubble_array[index + 1][comparison_array[index + 1][0]]);
            $("#curr-last").text(bubble_array[index + 1][comparison_array[index + 1][1]]);
            $("#index-first").text(comparison_array[index + 1][0]);
            $("#index-last").text(comparison_array[index + 1][1]);

            if (comparison_array[index + 1].length < 3) {
                //If a swap has been made
                $("#now-first").text(bubble_array[index + 1][comparison_array[index + 1][0]])
                $("#text-now").text(" will be swapped with ")
                $("#now-last").text(bubble_array[index + 1][comparison_array[index + 1][1]]);
            }
            else {
                $("#now-first").text("");
                $("#text-now").text("No swap previously made");
                $("#now-last").text("");
            }
            if (comparison_array[index].length < 3) {
                console.log("here");
                $("#prev-first").text(bubble_array[index][comparison_array[index][0]]);
                $("#text-prev").text(" was swapped with ");
                $("#prev-last").text(bubble_array[index][comparison_array[index][1]]);
            }
            else {
                $("#prev-first").text("");
                $("#text-prev").text("No swap previously made");
                $("#prev-last").text("");
            }
        }
        
    }
    
}

function prev() {
    let index = $(".shown").data("index");
    if ($(".shown").data("position") != "start") {
        if ($(".shown").data("position") == "second-last") {
            $("#current-comparison , #now-step , #previous-step").removeClass("hidden");
            $("#final-step").addClass("hidden");
        }
        $("ul[data-index =" + index + "]").removeClass("shown").addClass("hidden");
        $("ul[data-index =" + (index - 1) + "]").removeClass("hidden").addClass("shown");
        $("#current-step").text("Step " + (index) + " :");

        //Update the text
        $("#curr-first").text(bubble_array[index - 1][comparison_array[index - 1][0]]);
        $("#curr-last").text(bubble_array[index - 1][comparison_array[index - 1][1]]);
        $("#index-first").text(comparison_array[index - 1][0]);
        $("#index-last").text(comparison_array[index - 1][1]);

        if (comparison_array[index- 1].length < 3) {
            //If a swap has been made
            $("#now-first").text(bubble_array[index - 1][comparison_array[index - 1][0]])
            $("#text-now").text(" will be swapped with ")
            $("#now-last").text(bubble_array[index - 1][comparison_array[index - 1][1]]);
        }
        else {
            $("#now-first").text("");
            $("#text-now").text("No swap previously made");
            $("#now-last").text("");
        }
        if (comparison_array[index - 2].length < 3) {
            console.log("here");
            $("#prev-first").text(bubble_array[index - 2][comparison_array[index - 2][0]]);
            $("#text-prev").text(" was swapped with ");
            $("#prev-last").text(bubble_array[index - 2][comparison_array[index - 2][1]]);
        }
        else {
            $("#prev-first").text("");
            $("#text-prev").text("No swap previously made");
            $("#prev-last").text("");
        }
    }
}


function next_graph() {
    //Update the graph data
    if (index_graph < bubble_array.length - 1) {
        index_graph += 1;
    }
 
    [colours, borders] = graphColour(index_graph);
    [colours, borders] = graphColour(index_graph);
    
    chartId.data.datasets.forEach((dataset) => {
        dataset.data = bubble_array[index_graph];
        dataset.backgroundColor = colours;
        dataset.borderColor = borders;
    });
    chartId.update();

    //Update steps infomation
    if (index_graph == bubble_array.length - 1) {
        //Hide all as last step and explain how alogirthm has finished
        $("#current-comparison , #now-step , #previous-step").addClass("hidden");
        $("#final-step").removeClass("hidden");
    }
    else {
        $("#current-step").text("Step " + (index_graph + 1) + " :");
        $("#curr-first").text(bubble_array[index_graph][comparison_array[index_graph][0]]);
        $("#curr-last").text(bubble_array[index_graph][comparison_array[index_graph][1]]);
        $("#index-first").text(comparison_array[index_graph][0]);
        $("#index-last").text(comparison_array[index_graph][1]);

        //if a comparison made update to that else state none was made
        if (comparison_array[index_graph].length < 3) {
            //If a swap has been made
            $("#now-first").text(bubble_array[index_graph][comparison_array[index_graph][0]])
            $("#text-now").text(" will be swapped with ")
            $("#now-last").text(bubble_array[index_graph][comparison_array[index_graph][1]]);
        }
        else {
            $("#now-first").text("");
            $("#text-now").text("No swap previously made");
            $("#now-last").text("");
        }
        console.log(comparison_array[index_graph - 1].length)
        if (comparison_array[index_graph - 1].length < 3) {
            console.log("here");
            $("#prev-first").text(bubble_array[index_graph - 1][comparison_array[index_graph - 1][0]]);
            $("#text-prev").text(" was swapped with ");
            $("#prev-last").text(bubble_array[index_graph - 1][comparison_array[index_graph - 1][1]]);
        }
        else {
            $("#prev-first").text("");
            $("#text-prev").text("No swap previously made");
            $("#prev-last").text("");
        }
    }
    

}

function prev_graph() {
    if (index_graph > 0) {
        index_graph -= 1;
    }

    [colours, borders] = graphColour(index_graph);
    console.log(colours);

    chartId.data.datasets.forEach((dataset) => {
        dataset.data = bubble_array[index_graph];
        dataset.backgroundColor = colours;
        dataset.borderColor = borders;
    });
    chartId.update();

    //Update descriptions
    if (index_graph == bubble_array.length - 2) {
        $("#current-comparison , #now-step , #previous-step").removeClass("hidden");
        $("#final-step").text("Bubble Sort Complete").addClass("hidden");
    }

    $("#current-step").text("Step " + (index_graph + 1) + " :");
    $("#current-comparison").text(bubble_array[index_graph][comparison_array[index_graph][0]] + " is being compared to " + bubble_array[index_graph][comparison_array[index_graph][1]] + " at indexes " + comparison_array[index_graph][0] + " and " + comparison_array[index_graph][1]);

    if (comparison_array[index_graph].length < 3) {
        $("#now-first").text(bubble_array[index_graph][comparison_array[index_graph][0]]);
        $("#text-now").text(" will be swapped with ")
        $("#now-last").text(bubble_array[index_graph][comparison_array[index_graph][1]]);
    }
    else {
        $("#now-first").text("");
        $("#text-now").text("No swap previously made");
        $("#now-last").text("");
    }

    if (index_graph != 0) {
        if (comparison_array[index_graph - 1].length < 3) {
            $("#previous-step").text(bubble_array[index_graph - 1][comparison_array[index_graph - 1][0]] + " was swapped with " + bubble_array[index_graph - 1][comparison_array[index_graph - 1][1]])
        }
        else {
            $("#previous-step").text("No swap previously made");
        }
    }
    else {
        $("#previous-step").text("No swap previously made");
    }
}