class Solution
{
    public ListNode removeNthFromEnd(ListNode head, int n)
    {
        int x = traverse(head, n);
        if (x == n)
        {
            return head.next;
        }
        return head;
    }

    int traverse(ListNode temp, int n)
    {
        if (temp == null) return 0;

        int x = traverse(temp.next, n);

        if (x == n)
        {
            temp.next = temp.next.next;
        }
        return x + 1;
    }
}
