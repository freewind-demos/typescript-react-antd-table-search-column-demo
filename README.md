TypeScript React AntDesign Table Search Column Demo
=================================

Antd的表格搜索功能设计得比较死板，需要很多配置才能使用，并且有两个特别不好用的地方：

1. 没法做到边输边搜。因为必须调用`confirm`才会触发搜索，而它会自动关掉弹出来的搜索框
2. 难以实现弹出搜索框后自动选中某个input，因为涉及到两个不同的方法。之前想过两个解决这个问题，但都不完美：
   1. 弄一个组件级别的ref，把search input保存在里面，跨方法使用。但如果有多个列，会乱，需要更复杂的管理方式
   2. 每个column的定义弄成一个class，使用`this`来保存`searchInput`，多列不会乱，但是在定义时由于typescript的限制，每个方法签名必须写全，不能推断
   最后弄了一个函数返回相应的配置，在函数中可以有自己的object来持有`searchInput`，还比较方便。

所以如果想实现一个更自由的Search，还需要想办法自己控制。
（更新：antd在表格column header这块设计得比较死板，很难通过常规方法插入自己的search input）

```
npm install
npm run demo
```

It will open page on browser automatically.
