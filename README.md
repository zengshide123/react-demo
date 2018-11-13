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
### antd (less)按需加载

-  安装babel-plugin-import
-  配置本地babel 
    ```
    {
        "plugins": [
            ["import", {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": "css" // `style: true` 会加载 less 文件
            }]
        ]
    } 
    ```
- 再次修改webpack配置

规则增加

    ```
         // support less
          {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: getStyleLoaders({ importLoaders: 2 }, 'less-loader',{
              javascriptEnabled:true
            }),
          },
          {
            test: lessModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
              'less-loader',{
                javascriptEnabled:true
              }
            ),
          },
    ```

getStyleLoaders增新内容

   ```
        const getStyleLoaders = (cssOptions, preProcessor,preOptions) => {
            const loaders = [
                require.resolve('style-loader'),
                {
                loader: require.resolve('css-loader'),
                options: cssOptions,
                },
                {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                        flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    ],
                },
                },
            ];
            if (preProcessor) {
                loaders.push({
                loader:require.resolve(preProcessor),
                options:preOptions
                });
            }
            return loaders;
        };
   ```

   `
    按需加载中会遇见less版本过高问题，可以采用上述配置或者回退less至2.7.3版本
   `

## 项目基本构建过程

- 环境搭建
- 基础布局组件
- 路由组件
- 基础UI组件

