# LinkedList Implementation in JavaScript

## Introduction

This project involves implementing a LinkedList class in JavaScript, representing a doubly-linked list. In a linked list, elements, or nodes, are connected in a sequence, with each node containing data and references to the previous and next nodes. This implementation allows operations such as adding elements, removing elements, and manipulating the list.

The main goal of this project is to gain a fundamental understanding of linked lists, their structure, and how to perform various operations on them. The project aims to enhance your knowledge of data structures and provide hands-on experience with JavaScript classes and methods.

## Purpose of the Linked List

A linked list is a dynamic data structure that offers advantages such as efficient insertion and deletion of elements compared to arrays. This project encourages you to create a LinkedList class capable of managing elements and their relationships, demonstrating the versatility of linked lists in real-world scenarios.

## LinkedList Class Features

The LinkedList class includes the following properties and methods:

- Properties:
  - `head` or `first` node: Reference to the first node in the list.
  - `tail` or `last` node: Reference to the last node in the list.

- Methods:
  - `add(payload)`: Adds an element to the end of the list.
  - `addLast(payload)`: Adds an element to the end of the list.
  - `addFirst(payload)`: Adds an element to the beginning of the list.
  - `clear()`: Removes all elements from the list.
  - `get(index)`: Returns the element at the specified index.
  - `indexOf(payload)`: Finds the index of the specified element.
  - `insertAfter(index, payload)`: Inserts a new element after the specified index.
  - `insertBefore(index, payload)`: Inserts a new element before the specified index.
  - `first()`: Returns the first element in the list.
  - `last()`: Returns the last element in the list.
  - `remove(index)`: Removes the element at the specified index and returns it.
  - `removeFirst()`: Removes the first element in the list and returns it.
  - `removeLast()`: Removes the last element in the list and returns it.

- Node-related Methods:
  - `insertAfterNode(payload, existingNode)`: Inserts a new node after an existing node.
  - `insertBeforeNode(payload, existingNode)`: Inserts a new node before an existing node.
  - `removeNode(node)`: Removes a node from the list.
  - `nodeAt(index)`: Finds the node at the specified index.
  - `swapNodes(nodeA, nodeB)`: Swaps the positions of two nodes.

- Debugging Method:
  - `dumpList()`: Outputs the entire linked list, including nodes, references, and payloads, for debugging purposes.


