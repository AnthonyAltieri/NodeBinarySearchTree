/**
 * A Binary Search Tree implementation.
 *
 * @constructor
 */
function BST() {
    this._root = {
        data: null,
        left: null,
        right: null
    };
    this._vertices = null;
}

/**
 * Insert data into the Binary Search Tree, the current data that is
 * supported requires the ability to use the '>' and '<' operators.
 *
 * @param data - the data to be inserted into the bst
 */
BST.prototype.insert = function (data){
    const node = {
        data: data,
        left: null,
        right: null
    };

    if (this._root.data === null) {
        this._root = node;
    } else {
        let focus = this._root;
        while (true) {
            if (node.data < focus.data) {
                if (focus.left === null) {
                    focus.left = node;
                    return;
                } else {
                    focus = focus.left;
                }
            } else if (node.data > focus.data) {
                if (focus.right === null) {
                    focus.right = node;
                    return;
                } else {
                    focus = focus.right;
                }
            } else {
                return;
            }
        }
    }

};

/**
 * Logs an inorder traversal of the Binary Search Tree into the console.
 *
 */
BST.prototype.printInorder = function () {
    if (this._root === null) {
        console.log('The Binary Search Tree is empty.')
    } else {
        this.printInorderTraversal(root);
    }
};

/**
 * Helper recursively performs an inorder traversal of the Binary Search Tree and logs the
 * data of each node in the console.
 *
 * @param node - the node that is being evaluated
 */
BST.prototype.printInorderTraversal = function(node) {
    if (node != null && node.data != null) {
        if (node.left != null) {
            this.printInorder(node.left);
        }
        this._vertices.push(node.data);
        if (node.right != null) {
            this.printInorder( node.right );
        }
    }

};


/**
 * Returns true if the data is in the Binary Search Tree or false if it is not.
 *
 * @param data - the data being searched for
 * @returns {boolean}
 */
BST.prototype.contains = function (data) {
    if (this._root === null) {
        return false;
    } else {
        this.containsRecurse(this._root, data)
    }
};

/**
 * Helper function that returns true if the data is contained in the Binary Search Tree
 * and false if it is not
 *
 * @param node - the node that the recursion is evaluating
 * @param data - the data that is being searhced for
 * @returns {boolean}
 */
BST.prototype.containsRecurse = function (node, data) {
    if (node === null || node.data === null) {
        return false;
    }
    if (data < node.data) {
        return this.contains(node.left, data);
    } else if (data > node.data) {
        return this.contains(node.right, data);
    } else {
        return true;
    }
};

module.exports = BST;