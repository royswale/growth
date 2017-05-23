const JAVASCRIPT = [
  '介绍JavaScript的基本数据类型。',
  '说说写JavaScript的基本规范？',
  'JavaScript原型，原型链 ? 有什么特点？',
  'JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？',
  'Javascript如何实现继承？',
  'javascript对象的几种创建方式？',
  '如何创建一个对象? （画出此对象的内存图）',
  '谈谈This对象的理解。',
  'eval是做什么的？',
  '什么是window对象? 什么是document对象?',
  'null，undefined的区别？',
  '写一个通用的事件侦听器函数(机试题)。',
  '[\'1\',\'2\',\'3\'\'].map(parseInt) 答案是多少？',
  '关于事件，IE与火狐的事件机制有什么区别？ 如何阻止冒泡？',
  '什么是闭包（closure），为什么要用它？',
  'javascript 代码中的\'use strict\';是什么意思 ? 使用它区别是什么？',
  '如何判断一个对象是否属于某个类？',
  'new操作符具体干了什么呢?',
  '用原生JavaScript的实现过什么功能吗？',
  'Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？',
  '对JSON的了解？',
  '[].forEach.call($$(\'*\'),function(a){ a.style.outline=\'1px solid #\'+(~~(Math.random()*(1<<24))).toString(16) }) 能解释一下这段代码的意思吗？',
  'js延迟加载的方式有哪些？',
  'Ajax 是什么? 如何创建一个Ajax？',
  '同步和异步的区别?',
  '如何解决跨域问题?',
  '页面编码和被请求的资源编码如果不一致如何处理？',
  '模块化开发怎么做？',
  'AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？',
  'requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）',
  '谈一谈你对ECMAScript6的了解？',
  'ECMAScript6 怎么写class么，为什么会出现class这种东西?',
  '异步加载的方式有哪些？',
  'documen.write和 innerHTML的区别?',
  'DOM操作——怎样添加、移除、移动、复制、创建和查找节点?',
  '.call() 和 .apply() 的含义和区别？',
  '数组和对象有哪些原生方法，列举一下？',
  'JS 怎么实现一个类。怎么实例化这个类',
  'JavaScript中的作用域与变量声明提升？',
  '如何编写高性能的Javascript？',
  '那些操作会造成内存泄漏？',
  'JQuery的源码看过吗？能不能简单概况一下它的实现原理？',
  'jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？',
  'jquery中如何将数组转化为json字符串，然后再转化回来？',
  'jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？',
  'jquery.extend 与 jquery.fn.extend的区别？',
  'jQuery 的队列是如何实现的？队列可以用在哪些地方？',
  '谈一下Jquery中的bind(),live(),delegate(),on()的区别？',
  'JQuery一个对象可以同时绑定多个事件，这是如何实现的？',
  '是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？',
  'jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）',
  '针对 jQuery性能的优化方法？',
  'Jquery与jQuery UI有啥区别？',
  'JQuery的源码看过吗？能不能简单说一下它的实现原理？',
  'jquery 中如何将数组转化为json字符串，然后再转化回来？',
  'jQuery和Zepto的区别？各自的使用场景？',
  '针对 jQuery 的优化方法？',
  'Zepto的点透问题如何解决？',
  'jQueryUI如何自定义组件?',
  '需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？',
  '如何判断当前脚本运行在浏览器还是node环境中？（阿里）',
  '移动端最小触控区域是多大？',
  'jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?',
  '把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？',
  '移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）',
  '知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么? Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？',
  '解释JavaScript中的作用域与变量声明提升？',
  '那些操作会造成内存泄漏？',
  'JQuery一个对象可以同时绑定多个事件，这是如何实现的？',
  'Node.js的适用场景？',
  '(如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么? 解释一下 Backbone 的 MVC 实现方式？',
  '什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?',
  '知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?',
  '如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?',
  '前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?',
  '简述一下 Handlebars 的基本用法？',
  '简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？',
  '用js实现千位分隔符?',
];
export default JAVASCRIPT;
