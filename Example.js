var BST = require('./BST.js');

var bst = new BST();

for (var i = 0 ; i < 25 ; i++) {
    bst.insert(i);
}


console.log('First Test, should be true: ' + bst.contains(10));


console.log('Second Test, should be false: ' + bst.contains(-1));

