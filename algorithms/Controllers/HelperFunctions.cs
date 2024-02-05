namespace algorithms.Controllers
{
    public class HelperFunctions
    {
        public static List<int> ToList(string input)
        {
            return input.Split(",").Select(value => Convert.ToInt32(value)).ToList();
        }
    }
}
