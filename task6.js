function ShoppingList() {
  this.items = []

  this.addItem = function(name, quantity) {
    this.items.push({ name: name, quantity: quantity })
  }

  this.printList = function() {
    console.log(this.items)
  }
}


const myList = new ShoppingList()
myList.addItem("chamoy", 2)
myList.addItem("cocacola", 12)
myList.printList()

