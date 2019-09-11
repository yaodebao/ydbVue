# 安装 

----

## 使用 npm 安装包
```base
npm/cnpm install yitong-ui --save  npm/cnpm install throttle-debounce@1.0.1  --save-dev
```
## webpack相关配置
```
build 文件夹下module中include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]改为
include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client'),resolve('node_modules/yitong-ui/packages')]
```






