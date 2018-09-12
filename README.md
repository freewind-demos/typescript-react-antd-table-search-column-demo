JavaScript React Base Demo (Latest)
===================================

Always update with latest versions and technologies.

```
npm install
npm run dev
```

It will open <http://localhost:8080/> automatically.

坑
---

### `tsconfig.json`

`module`必须为`commonjs`或者`amd`，不能为`umd`，否则会报错：

```
WARNING in ./entry.tsx 3:24-31
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
```

