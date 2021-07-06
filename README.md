# 带类型的微前端架构 | module federation example of react and typescript

此项目尝试解决以下问题 | this project is to solve:

- 微前端架构，各子项目独立编译 | separate building and work together
- 保持类型检查，和代码提示 | keep typing
- 子项目可以独立工作，不依赖线上服务 | sub project can work on their own, no need other's online service

## 项目简述 | projects 

- [lib-app](./lib-app) 纯底层库 | pure vendor libs (react,react-dom)
- [component-app](./component-app) 自定义组件库 | customized components (buttons, tips)
- [main-app](./main-app) 主项目，使用底层库和组件库 | main app that uses libs and components


代码基于 | codes based on [complete-react-case](https://github.com/module-federation/module-federation-examples/tree/master/complete-react-case)

修改后增加了类型和子项目独立工作的能力 | added typing and ability for sub projects to work on their own 

## 使用 | try on your own

```
cd lib-app
npm i 
npm run build

cd ../component-app
npm i 
npm run build

cd ../main-app
npm i 
npm run dev
```