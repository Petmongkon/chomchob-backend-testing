class Person{
    constructor(name,friends) {
        this.name = name
        this.friends = friends
    }
    
    friendsOfFriends(otherPerson) {
        if (otherPerson.friends.indexOf(this.name) === -1){
            return otherPerson.name+' is not '+this.name+' friend'
        }    
        return otherPerson.friends.diff(this.friends).diff(this.name)
        
    }
}

Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) === -1;
    });
};

Afriend = ['B','D','E','F']
Bfriend = ['A','C','D','F','G','H']
Cfriend = ['B','D','E','F']

A = new Person('A',Afriend)
B = new Person('B',Bfriend)
C = new Person('C',Cfriend)

console.log(A.friendsOfFriends(B))
console.log(A.friendsOfFriends(C))
console.log(B.friendsOfFriends(C))