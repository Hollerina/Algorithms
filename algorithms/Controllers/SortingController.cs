using Microsoft.AspNetCore.Mvc;
using algorithms.Models;
using System.Diagnostics.CodeAnalysis;
using System.Collections.Generic;
using System.Collections;

namespace algorithms.Controllers
{
    public class SortingController : Controller
    {
        public IActionResult Bubble()
        {
            return View();
        }

        [HttpPost]
        public IActionResult BubbleSort(string BubbleList, string submitButton)
        {
            if(String.IsNullOrWhiteSpace(BubbleList))
            {
                return View("Bubble");
            }
            bool fullSteps = false;

            switch (submitButton)
            {
                case "Full Step by Step":
                    fullSteps = true;
                    break;
            }

            //Convert to a List
            List<int> numbers = HelperFunctions.ToList(BubbleList);
            List<int> currentList = new List<int>();
            //create ouput list
            List<List<int>> steps = new List<List<int>>();
			currentList.AddRange(numbers);
			steps.Add(currentList);
			currentList = new List<int>();
            List<int> index_compare = new List<int>();
            //List of lists which hold the index at each stage of where the two being swapped
            List<List<int>> compared = new List<List<int>>();
            List<int> temp_compare = new List<int>();
            bool swapped;
            bool swapped_full = false;
            int temp;
            int stepsTaken = 0;
            int comparisons = 0;

			//Bubble sort
			for (int i = 0; i < numbers.Count; i++)
            {
                swapped = false;
                
				for (int j = 0; j < numbers.Count - i - 1; j++)
                {
					swapped_full = false;

					if (numbers[j] > numbers[j + 1])
                    {
						//Add the index to List
						temp_compare.Add(j);
						temp_compare.Add(j + 1);
						compared.Add(temp_compare);
						temp_compare = new List<int>();

						//swapping
						temp = numbers[j];
						numbers[j] = numbers[j + 1];
						numbers[j + 1] = temp;
						swapped_full = true;
                        swapped = true;

                        if (!fullSteps)
                        {
							//Push onto an list of steps
							currentList.AddRange(numbers);
							steps.Add(currentList);
							currentList = new List<int>();
							
						}
						comparisons += 1;
						index_compare.Add(i);
					}

                    if (fullSteps)
                    {
						//Push onto an list of steps
						currentList.AddRange(numbers);
						steps.Add(currentList);
						currentList = new List<int>();
						

                        if (!swapped_full)
                        {
							temp_compare.Add(j);
							temp_compare.Add(j + 1);
							temp_compare.Add(-1);
							compared.Add(temp_compare);
							temp_compare = new List<int>();
						}
						
					}

                }
                stepsTaken += 1;
                //Check if complete
                if(!swapped)
                {
                    break;
                }
            }
            BubbleModel bubbled = new BubbleModel(steps, stepsTaken, comparisons, compared, index_compare);

            return View("Bubble", bubbled);
        }

        public IActionResult Merge()
        {
            return View();
        }

        public IActionResult Quick()
        {
            return View();
        }
    }
}
