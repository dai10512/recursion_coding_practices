class SinglyLinkedListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function getIndexValue(head,index){
    // 関数を完成させてください
    let iterator = head;
    for(let i = 1; i < index; i++){
        iterator = iterator.next;
        if(iterator == null) return null;
    }
    return iterator.data;
}

// 連結リストのインデックス検索
// easy
// 片方向リストの先頭ノード head と自然数 index が与えられるので、片方向リスト内の index 番目の要素の値を返す getIndexValue という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> head, integer index

// 出力のデータ型： integer

// getIndexValue(singlyLinkedList([3,2,1,5,6,4]),1) --> 3

// getIndexValue(singlyLinkedList([7,8,2,3,1,7,8,11,4,3,2]),5) --> 1

// getIndexValue(singlyLinkedList([34,35,64,34,10,2,14,5,353,23,35,63,23]),7) --> 14