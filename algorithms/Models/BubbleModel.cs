using System.Collections;

namespace algorithms.Models
{
	public class BubbleModel
	{
		public List<List<int>> Bubbles { get; }
		public int stepstaken { get; }
		public int comparisons { get; }
		public List<List<int>> compared { get; }
		public List<int> compare_index { get; }

		public BubbleModel(List<List<int>> bubbles, int steps, int comparisons, List<List<int>> comparisons_list, List<int> compare_index)
		{ 
			this.Bubbles = bubbles;
			this.comparisons = comparisons;
			this.compared = comparisons_list;
			this.stepstaken = steps;
			this.compare_index = compare_index;
		}
	}
}
