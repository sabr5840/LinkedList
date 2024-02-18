// Definition af en Node i dobbelt-hægtet liste
class Node {
    constructor(data) {
        this.prev = null; // Reference til forrige node
        this.next = null; // Reference til næste node
        this.data = data; // Data, der er gemt i noden
    }
}

// Definition af dobbelt-hægtet liste
class LinkedList {
    constructor() {
        this.head = null; // Reference til den første node
        this.tail = null; // Reference til den sidste node
    }

    // Metode til at udskrive hele listen til konsollen
    dumpList() {
        let currentNode = this.head;
        console.log("List:");
        console.log(` - head: ${this.head ? this.head.data : null}`);
        console.log(` - tail: ${this.tail ? this.tail.data : null}`);
        console.log("-------");

        while (currentNode) {
            console.log("node:");
            console.log(`  prev: ${currentNode.prev ? currentNode.prev.data : null}`);
            console.log(`  next: ${currentNode.next ? currentNode.next.data : null}`);
            console.log(`  data: ${currentNode.data}`);
            console.log("-------");
            currentNode = currentNode.next;
        }
    }

    // Metode til at tilføje et element til slutningen af listen
    add(payload) {
        const newNode = new Node(payload);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Metode til at tilføje et element til slutningen af listen (alias for add-metoden)
    addLast(payload) {
        this.add(payload);
    }

    // Metode til at tilføje et element til begyndelsen af listen
    addFirst(payload) {
        const newNode = new Node(payload);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Metode til at fjerne alle elementer fra listen
    clear() {
        this.head = null;
        this.tail = null;
    }

    // Metode til at hente elementet på en bestemt position i listen
    get(index) {
        const node = this.nodeAt(index);
        return node ? node.data : undefined;
    }

    // Metode til at finde positionen for et specifikt element i listen
    indexOf(payload) {
        let index = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === payload) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    // Metode til at indsætte et nyt element efter en given position i listen
    insertAfter(index, payload) {
        const currentNode = this.nodeAt(index);
        if (currentNode) {
            const newNode = new Node(payload);
            newNode.prev = currentNode;
            newNode.next = currentNode.next;
            if (currentNode.next) {
                currentNode.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            currentNode.next = newNode;
        }
    }

    // Metode til at indsætte et nyt element før en given position i listen
    insertBefore(index, payload) {
        const currentNode = this.nodeAt(index);
        if (currentNode) {
            const newNode = new Node(payload);
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
            if (currentNode.prev) {
                currentNode.prev.next = newNode;
            } else {
                this.head = newNode;
            }
            currentNode.prev = newNode;
        }
    }

    // Metode til at returnere det første element i listen
    first() {
        return this.head ? this.head.data : undefined;
    }

    // Metode til at returnere det sidste element i listen
    last() {
        return this.tail ? this.tail.data : undefined;
    }

    // Metode til at fjerne elementet på en bestemt position i listen og returnere det
    remove(index) {
        const currentNode = this.nodeAt(index);
        if (currentNode) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
            } else {
                this.head = currentNode.next;
            }

            if (currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            } else {
                this.tail = currentNode.prev;
            }

            return currentNode.data;
        }
        return undefined;
    }

    // Metode til at fjerne det første element i listen og returnere det
    removeFirst() {
        return this.remove(0);
    }

    // Metode til at fjerne det sidste element i listen og returnere det
    removeLast() {
        return this.remove(this.size() - 1);
    }

    // Metode til at indsætte et nyt element efter en eksisterende node i listen
    insertAfterNode(payload, existingNode) {
        if (!existingNode) {
            return;
        }

        const newNode = new Node(payload);
        newNode.prev = existingNode;
        newNode.next = existingNode.next;

        if (existingNode.next) {
            existingNode.next.prev = newNode;
        } else {
            this.tail = newNode;
        }

        existingNode.next = newNode;
    }

    // Metode til at indsætte et nyt element før en eksisterende node i listen
    insertBeforeNode(payload, existingNode) {
        if (!existingNode) {
            return;
        }

        const newNode = new Node(payload);
        newNode.prev = existingNode.prev;
        newNode.next = existingNode;

        if (existingNode.prev) {
            existingNode.prev.next = newNode;
        } else {
            this.head = newNode;
        }

        existingNode.prev = newNode;
    }

    // Metode til at fjerne en given node fra listen
    removeNode(node) {
        if (!node) {
            return;
        }

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }

    // Metode til at finde noden på en given position i listen
    nodeAt(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode && currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }

    // Metode til at bytte om på positionen af to nodes i listen
    swapNodes(nodeA, nodeB) {
        if (!nodeA || !nodeB) {
            return;
        }

        const tempPrevA = nodeA.prev;
        const tempNextA = nodeA.next;

        nodeA.prev = nodeB.prev;
        nodeA.next = nodeB.next;

        if (nodeB.prev) {
            nodeB.prev.next = nodeA;
        } else {
            this.head = nodeA;
        }

        if (nodeB.next) {
            nodeB.next.prev = nodeA;
        } else {
            this.tail = nodeA;
        }

        nodeB.prev = tempPrevA;
        nodeB.next = tempNextA;

        if (tempPrevA) {
            tempPrevA.next = nodeB;
        } else {
            this.head = nodeB;
        }

        if (tempNextA) {
            tempNextA.prev = nodeB;
        } else {
            this.tail = nodeB;
        }
    }

    // Metode til at beregne størrelsen af listen
    size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }
}

// Test af linked list
const ll = new LinkedList();

ll.add("A");
ll.add("B");
ll.add("E");

ll.dumpList();

ll.addFirst("Z");
ll.insertAfter(1, "C");
ll.insertBefore(3, "D");

ll.dumpList();

console.log("Get at index 2:", ll.get(2));
console.log("Index of 'C':", ll.indexOf("C"));

ll.remove(2);
ll.removeFirst();
ll.removeLast();

ll.dumpList();

const nodeX = new Node("X");
ll.insertAfterNode("Y", nodeX);
ll.insertBeforeNode("W", nodeX);

ll.dumpList();

ll.swapNodes(nodeX, ll.nodeAt(1));

ll.dumpList();
