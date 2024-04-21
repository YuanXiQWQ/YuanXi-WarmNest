/**
 * Node中的包管理器是npm(Node Package Manager)
 *
 * package.json:
 *  包的一个描述文件,node中通过该文件对项目进行描述
 *  每一个node项目必须有package.json
 *      name:项目名称,可以包含0-9,a-z,_,-,不包括大写字母
 *      version:版本,从1.0.0开始
 *          修复错误,兼容旧版(补丁): 1.0.1
 *          添加功能,兼容旧版(小更新): 1.1.0
 *          更新功能,影响兼容(大更新): 2.0.0
 *      description:项目描述
 *      main:入口文件
 *      scripts:可以自定义一些命令,例如:
 *          "scripts" :{
 *              "test": "echo 'Hello World'"
 *          }
 *          此时在项目文件中输入test,会执行echo 'Hello World'
 *          常用的是start和test
 *      author:作者
 *      license:许可证
 *
 *  npn init:           初始化项目,在当前目录下生成package.json
 *  npm init -y:        会以全部默认的形式生成package.json
 *  npm install:        将package.json中的依赖包安装到项目中
 *      简写: npm i
 *      install时,
 *          1.将依赖包安装到项目中的node_modules目录
 *          2.将依赖包添加到项目中的package.json的dependencies(依赖)中
 *              版本前的^表示匹配最新的大版本,
 *                  例如^1.0.0表示匹配最新的1.x.x版本,可以是1.0.1或者1.1.0,但不能是2.0.0,0.1.0
 *              版本前的~表示匹配最新的小版本,
 *                  例如~1.0.0表示匹配最新的1.0.x版本,可以是1.0.1,不能是1.1.0
 *              *表示匹配最新的版本
 *          3.会自动添加package-lock.json文件
 *              帮助加速npm下载的,避免给每个项目分别下载重复依赖
 *      安装包: npm install 包名
 *      指定版本:
 *          npm install 包名@1.1.4:安装指定版本
 *          npm install 包名@"> 5.1.4":安装高于指定版本的版本,需要引号括起来
 *      全局安装:
 *          npm install 包名 -g
 *  npm uninstall 包名:删除项目中的依赖包
 *
 *  引入npm下载的包时,不需要路径,直接引用包名即可
 *
 *  国内镜像:
 *      1.cnpm:
 *      npm install -g cnpm --registry=https://registry.npmmirror.com
 *      2.修改npm仓库地址
 *          npm set registry https://registry.npmmirror.com
 *          还原:
 *          npm config delete registry
 *          查看当前配置:
 *          npm config get registry
 */

/**
 * _yarn (Yet Another Resource Navigator):
 *
 * npm i yarn -g: 全局安装yarn
 * npm r yarn -g: 删除全局安装的yarn
 * 或者开启Node继承的yarn,pnpm: corepack enable
 *      会同时加入yarn和pnpm
 * yarn init: 初始化yarn
 * yarn add 包名: 安装依赖包(npm 也支持 add)
 * yarn remove 包名: 删除依赖包
 */

/**
 * pnpm (Per Package Node.js Package Manager):
 *
 * 基本都一样
 */