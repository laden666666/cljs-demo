REPL

REPL是指交互式解释器环境。R(read)、E(evaluate)、P(print)、L(loop)。输入值，交互式解释器会读取输入内容并对它求值，再返回结果，并重复此过程。

REPL编译器有Lumo、planck

这里不做研究



ClojureScript编译器

ClojureScript有多个编译器：Boot、Lein、ein-cljsbuild、boot-cljs和shadow-cljs。这里仅研究shadow-cljs

安装nodejs

https://nodejs.org/

安装nodejs6789都可以，建议6或者8

安装jdk

http://www.oracle.com/technetwork/java/javase

必须安装8，不可用安装9

安装shadow-cljs

建议安装到全局

    npm install -g shadow-cljs

这样可以在cmd中使用shadow-cljs命令了



配置集成开发环境

如果使用的是webstorm，可以安装Clojure-kit插件



快速开始

先创建npm包，执行

    npm init

一步一步执行完后，创建cljs配置文件，执行

    shadow-cljs init

会生成一个 shadow-cljs.edn

shadow-cljs.edn

shadow-cljs.edn默认内容如下

    ;; shadow-cljs configuration
    {:source-paths
    ["src"]

    :dependencies
    []

    :builds
    {}}

- :dependencies 管理cljs的依赖
- :source-paths 告诉编译器编译哪些地方的cljs文件
- :builds 编译相关配置，需要明确一个编译任务名称(如app)，并配置这个任务，主要配置有：
  - :target 表示编译文件的目标，因为js代码运行在不同环境中，js上下文的是不一样的，所有必须告诉cljs目标运行在上面环境下，主要环境有：
    - :browser 浏览器使用的代码
    - :nodejs Node.js 开发
    - :node-library 可以被 Node.js 调用的模块
    - :npm-module 遵循 CommonJS 语法的一个个独立的 js 文件
  - :devtools 表示开发环境的配置, 这里我只配置了热替换之后执行的函数 app.main/reload!
  - :asset-path 资源存储的路径

配置好的示例如下：

    :builds
    {:app {:target :browser
             :output-dir "public/js"
             :asset-path "/js"
             :modules {:main {:entries [my.app]}}}}}

编译和发布

shadow-cljs有两种编译模式，类似其他npm下的cli，shadow-cljs有:dev and :release。dev是开发模式，release是发布模式

这两个模式下对应的命令行分别是：

    # compile a build once in :dev mode
    shadow-cljs compile app

    # compile and watch
    shadow-cljs watch app

    # connect to REPL for the build (available while watch is running)
    shadow-cljs cljs-repl app

    shadow-cljs release app

开发环境常用watch，这样可以监听文件的变化。

初次执行shadow-cljs cljs-repl app时候，需要初始化。这需要等一段时间。

因为我们目标开发出的是无特定环境的模块，所有需要将编译设置为npm-module模式，并且设置出一些常用的npm的script，供开发和测试使用

    {:source-paths ["src"]
     :dependencies []
     :builds {:app {:target :npm-module
                    :output-dir "dist/"}}}

package.json设置

配置好shadow-cljs.edn文件之后，建议将编译和发布两套命令改为npm的script脚本。同时将打包输出的路径配置到main文件中。

    {
      "name": "npm模块的名字",
      "version": "0.1.0",
      "main": "dist/app/app.main.js",
      "scripts": {
        "dev": "shadow-cljs watch app",
        "build": "shadow-cljs compile app"
      },
      "devDependencies": {
        "shadow-cljs": "^2.0.2"
      }
    }

上述配置中的main项，app是build对应的名称，即src/app/mian.cljs文件，app.main.js的文件名是mian.cljs的命名空间（ns名称）。

编写源代码

下一步编写源代码，源代码入口文件的位置必须和shadow-cljs.edn的:builds配置相吻合。

按照之前的配置如下

    {:source-paths ["src"]
     :dependencies []
     :builds {:app {:target :npm-module
                    :output-dir "dist/"}}}

这个配置对应的入口文件路径是/src/app/mian.cljs，在这个文件中我们可以使用ClojureScript的语法开发软件了。

注意：在npm-module模式下是可以使用npm的包的，这样就完成了ClojureScript对已有JavaScript模块的调用。同时通过ClojureScript调用interop. JavaScript 的全局变量，可以通过 js 命名空间访问js的全局变量

需要注意的是，入口文件的命名空间（ns名称），会是输出文件的名称，如cljs文件：

    (ns app.mian)

最后源代码会编译为/dist/app.mian.js文件

执行命令

因为我们打包生成的js文件不依赖与浏览器或者nodejs环境，所有可以在web页面中或者是nodejs环境中都可运行着。在工程根目录下创建一个app.js文件，使用commonjs的方式引用我们生成的

    var cljs = require('./dist/app.mian.js')

cljs变量就是ClojureScript的app.mian模块了。

先运行shadow-cljs的编译

    npm run dev

然后再运行app.js，这样就可以开发调试了。

如果是开发webapp，可与webpack集成；如果开发nodejs应用，可以和supervisor集成。具体集成略



# 参考资料

[cljs中文教程](http://cljs-book.clj.im/)

[shadow-cljs官网](https://github.com/thheller/shadow-cljs)

[与webpack集成demo](https://github.com/minimal-xyz/minimal-shadow-cljs-webpack)