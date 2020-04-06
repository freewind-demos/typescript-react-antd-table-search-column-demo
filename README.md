TypeScript React AntDesign Table Search Column Demo
=================================

Antd的表格搜索功能设计得比较死板，需要很多配置才能使用，并且有两个特别两个特别不好用的地方：

1. 没法做到边输边搜。因为必须调用`confirm`才会触发搜索，而它会自动关掉弹出来的搜索框
2. 难以弹出搜索框后自动选中某个input，因为涉及到两个不同的方法。我们有两种办法解决这个问题，但都不完美：
   1. 弄一个组件级别的ref，把search input保存在里面，跨方法使用。但如果有多个列，会乱，需要更复杂的管理方式
   2. 每个column的定义弄成一个class，使用`this`来保存`searchInput`，多列不会乱，但是在定义时由于typescript的限制，每个方法签名必须写全，不能推断

所以如果想实现一个更自由的Search，还需要想办法自己控制。

```
npm install
npm run demo
```

It will open page on browser automatically.
