/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    console.log(l1,l2);
    
    function getNumberFromLinkedList(l)
    {
        
        let number = 0;
        console.log('linked list',l.next.val)
        for(var i=l.length; i>0; i--)
            {
                console.log(number)
                number = l[i]*Math.pow(10,l.length - i);
            }
        return number;
    }
    
    function buildLinkedList(number)
    {
        let nm = number;
        let lnm = [];
        let i=0;
        while(nm > 1)
            {
                lnm.push(nm % 10);
                nm = nm/10;
            }
        return lnm;
    }
    
    console.log(l1,l2);
    
    let num1 = getNumberFromLinkedList(l1);
    let num2 = getNumberFromLinkedList(l2);
    
    let sum = num1 + num2;
    console.log(sum)
    console.log(buildLinkedList(sum));
    //return buildLinkedList(sum);
};
