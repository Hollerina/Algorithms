using System.Collections;

namespace algorithms.Models.Partials
{
	public class DisplayListModel
	{
		public List<int> numbers { get; }
		public string className { get; }
		public int index { get; }
		public string position { get; }
		public List<int> comparison { get; }
		public List<int> before_comp { get; }

		public DisplayListModel(List<int> numbers, string className, int index, string position, List<int> comparison, List<int> before_comp)
		{
			this.numbers = numbers;
			this.className = className;
			this.index = index;
			this.position = position;
			this.comparison = comparison;
			this.before_comp = before_comp;
		}
	}
}
