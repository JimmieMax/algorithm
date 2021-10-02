# 二叉查找树

## 中序遍历

```js
function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}
```

## 先序遍历

```js
function inOrder(node) {
  if(!(node == null)) {
    console.log(node.value);
    inOrder(node.left);
    inOrder(node.right);
  }
}
```

## 后序遍历

```js
function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.value);
  }
}
```
