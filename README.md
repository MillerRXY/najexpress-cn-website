# 钠捷能源官网

这是钠捷能源 NaExpress 的静态官网项目，用于展示公司介绍、产品矩阵、产品详情以及联系方式。

网站主要面向钠离子电池产品展示，包含汽车启停、工业动力、小型动力和储能系列等产品页面。


## 页面结构

najexpress-cn-website/
├── index.html                  # 首页
├── products.html               # 产品矩阵页
├── industrial-power.html        # 工业动力详情页
├── start-stop-battery.html      # 汽车启停详情页
├── small-power.html             # 小型动力详情页
├── storage-series.html          # 储能系列详情页
├── css/
│   ├── base.css                 # 全站基础样式
│   ├── layout.css               # 导航栏与整体布局样式
│   ├── components.css           # 通用组件样式
│   └── pages.css                # 页面专属样式
├── js/
│   └── main.js                  # 页面交互脚本
└── images/
    ├── hero/                    # 首页主视觉图片
    ├── about/                   # 公司介绍图片
    ├── applications/            # 应用领域图片
    ├── logo/                    # 网站 Logo
    ├── contact/                 # 联系方式与二维码图片
    └── products/                # 产品图片与参数表
```

## 主要功能

* 首页 Hero 主视觉展示
* 公司介绍区域
* 应用领域展示
* 产品矩阵展示
* 产品轮播图交互
* 产品详情页锚点跳转
* 响应式导航栏
* 手机端菜单
* 首页透明导航栏滚动切换
* 联系方式与二维码展示

## 产品分类

网站目前包含四大产品分类：

1. 汽车启停系列
2. 工业动力系列
3. 小型动力系列
4. 储能系列

每个产品分类都拥有独立的详情页面，产品矩阵页中的产品图片可以跳转到对应详情位置。

## 本地预览方式

可以直接使用 VS Code 打开项目文件夹，然后通过 Live Server 插件预览。

推荐方式：

1. 使用 VS Code 打开项目文件夹
2. 安装 Live Server 插件
3. 右键 `index.html`
4. 选择 `Open with Live Server`

也可以直接双击 `index.html` 打开，但部分路径和页面跳转效果在 Live Server 下更稳定。

## 技术栈

* HTML
* CSS
* JavaScript

## 维护说明

修改页面内容时，主要编辑对应的 HTML 文件。

修改样式时，按照以下规则维护 CSS 文件：

* `base.css`：全站基础样式，例如默认字体、链接、列表、盒模型
* `layout.css`：导航栏、手机菜单、下拉菜单、首页透明导航
* `components.css`：通用组件样式
* `pages.css`：首页、产品矩阵、产品详情页、联系我们区域样式

新增图片时，建议按照用途放入 `images/` 下对应文件夹，避免图片路径混乱。

© 2026 NaExpress 钠捷能源. 版权所有
