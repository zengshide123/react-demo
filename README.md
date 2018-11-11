# react-demo

> 项目为一个后台管理系统

## 基础架构

- create-react-app
- react 全家桶
- antd组件库
- axios 前后端数据交互

## 架构配置修改

1. 安装基本依赖
2. 支持less
3. antd按需引入

### 支持less

- 安装less-loader
```
    yarn add less less-loader
```
- 修改webpack配置(dev和prod)

变量增加 
```
    const lessRegex = /\.less$/;
    const lessModuleRegex = /\.module\.less$/;
```
规则增加
```
        {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: getStyleLoaders({ importLoaders: 2 }, 'less-loader'),
        },
        {
            test: lessModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
              'less-loader'
            ),
        },
```

`生产环境和开发环境略有不同，依次规则参照配置即可`

