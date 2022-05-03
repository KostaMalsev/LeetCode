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
    
    
    function getNumberFromLinkedList(ptr)
    {
        
        let number = "";
        while(true)
            {
                numnber = number + ptr.val.toString();
                ptr = ptr.next;
                if(ptr.next === null) break;
            }
        console.log(number)
        return number;
    }
    
    function buildListArrReversed(arr)
    {
        let linkedList = [];
        let ii = arr.length;
        console.log(arr);
                
        function createEl(val,next)
        {
            if(ii==0)
                linkedList.push({val:val,next:null});
            else{
                console.log(linkedList)
                //linkedList.push({val:val, createEl(arr[ii-1])});
            }
            
            return; //linkedList;
        }
        
        return linkedList;
    }
    
    
    
    console.log(Object.getOwnPropertyNames(l1))
    let num1 = getNumberFromLinkedList(l1);
    let num2 = getNumberFromLinkedList(l2);
    
    let sum = num1 + num2;
    let sArr = sum.split(""); console.log(sArr);
    
    buildListArrReversed(arr);

    
};
