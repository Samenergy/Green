class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, index, value):
        new_node = Node(value)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            for _ in range(index - 1):
                current = current.next
            new_node.next = current.next
            current.next = new_node

    def retrieve(self, index):
        current = self.head
        for _ in range(index):
            current = current.next
        return current.data

    def search(self, value):
        current = self.head
        index = 0
        while current is not None:
            if current.data == value:
                return index
            current = current.next
            index += 1
        return -1

    def delete(self, index):
        if index == 0:
            self.head = self.head.next
        else:
            current = self.head
            for _ in range(index - 1):
                current = current.next
            current.next = current.next.next

    def reverse(self):
        prev, current = None, self.head
        while current:
            current.next, prev, current = prev, current, current.next
        self.head = prev

    def __str__(self):
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        return "->".join(elements)

# Example usage:
my_list = LinkedList()
for i in range(1, 6):
    my_list.insert(i-1, i)

my_list.insert(2, 10)

print(my_list.retrieve(2))
print(my_list.search(10))

my_list.delete(2)

my_list.reverse()

print(my_list)
