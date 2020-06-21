public class Solution
{
    private static final int[] primetable = primes(26);

    public List<List<String>> groupAnagrams(String[] strs)
    {
        Map<Integer, List<String>> map = new HashMap<>(strs.length);
        for (String s:strs)
        {
            int hashcode = hash(s);
            map.putIfAbsent(hashcode, new ArrayList<String>());
            map.get(hashcode).add(s);
        }
        List<List<String>> res = new ArrayList<>();
        res.addAll(map.values());
        return res;
    }
    private int hash(String s)
    {
        int hashcode = 1;
        for (char c:s.toCharArray())
        {
            hashcode *= primetable[c - 97];
        }
        return hashcode;
    }
    private static int[] primes(int n)
    {
        if (n < 1)
        {
            return null;
        }
        int[] res = new int[n];
        res[0] = 2;
        int counter = 1, cur = 3;
        while (counter < n)
        {
            for (int num:res)
            {

                if (num == 0 || num * num > cur)
                {
                    res[counter++] = cur++;
                    break;
                }

                if (cur % num == 0)
                {
                    ++cur;
                    break;
                }
            }
        }
        return res;
    }
}
