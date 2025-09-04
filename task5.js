const readline = require('readline')

function FriendsList() {
  this.friends = []

  this.addFriend = function(name) {
    this.friends.push(name)
  }

  this.printFriends = function() {
    console.log(this.friends)
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const friendsList = new FriendsList()

rl.question("¿Cuántos amigos quieres agregar? ", function(count) {
  let number = parseInt(count)
  let i = 0

  function askFriend() {
    if (i < number) {
      rl.question(`Nombre del amigo ${i + 1}: `, function(name) {
        friendsList.addFriend(name)
        i++
        askFriend()
      })
    } else {
      friendsList.printFriends()
      rl.close()
    }
  }

  askFriend()
})