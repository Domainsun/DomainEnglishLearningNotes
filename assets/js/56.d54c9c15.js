(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{364:function(t,v,a){"use strict";a.r(v);var _=a(14),r=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"java虚拟机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java虚拟机"}},[t._v("#")]),t._v(" Java虚拟机")]),t._v(" "),v("h3",{attrs:{id:"预备知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#预备知识"}},[t._v("#")]),t._v(" 预备知识")]),t._v(" "),v("h4",{attrs:{id:"javac是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javac是什么"}},[t._v("#")]),t._v(" Javac是什么")]),t._v(" "),v("p",[t._v("javac 是jre里面提供的工具，用来把.java文件编译成.class的字节码文件。 字节码文件经过jvm处理之后变成汇编指令。 汇编指令再加载到设备的主存之中，后变成机器指令由CPU执行。 所以， 只要是能够编译成.class字节码文件，就能由java虚拟机解释执行，实现跨平台。 kotlin groovy、JRuby、jython 都编译字节码由jvm解释执行。")]),t._v(" "),v("h4",{attrs:{id:"为什么jvm执行的文件叫做字节码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么jvm执行的文件叫做字节码"}},[t._v("#")]),t._v(" 为什么jvm执行的文件叫做字节码")]),t._v(" "),v("p",[t._v("这是因为jvm每次执行指令大小就是1个字节。这个字节里面包括了操作码和操作数。操作码就是运算符，操作数就是要进行运算的数。")]),t._v(" "),v("h4",{attrs:{id:"引用类型有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用类型有哪些"}},[t._v("#")]),t._v(" 引用类型有哪些")]),t._v(" "),v("p",[t._v("在Java中，有4种引用类型")]),t._v(" "),v("ul",[v("li",[t._v("强引用（new Object）：存在引用，GC时不会回收。不存在引用GC时会被回收。")]),t._v(" "),v("li",[t._v("软引用(SoftReference)：与是否存在引用无关，堆内存够时不回收，不够时回收。")]),t._v(" "),v("li",[t._v("弱引用(WeakReference)：与是否存在引用无关，只要触发GC就会被回收。")]),t._v(" "),v("li",[t._v("虚引用(PhantomReference)：任何时候都可能被回收，被回收时，会存入到给定的那个队列里面。")])]),t._v(" "),v("p",[v("strong",[t._v("使用场景")])]),t._v(" "),v("ul",[v("li",[t._v("强引用：日常业务逻辑开发，成员变量，局部变量")]),t._v(" "),v("li",[t._v("软引用：实现缓存类业务")]),t._v(" "),v("li",[t._v("弱引用：避免内存泄漏，handler，dialog")]),t._v(" "),v("li",[t._v("虚引用：使用虚引用管理堆外内存，实现清理类工作")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_01-jvm内部结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01-jvm内部结构"}},[t._v("#")]),t._v(" 01 Jvm内部结构")]),t._v(" "),v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202304231357066.png",height:"80%",width:"80%/"}}),t._v(" "),v("ul",[v("li",[v("strong",[t._v("类加载器：")])]),t._v(" "),v("li",[v("strong",[t._v("运行时数据区：")])]),t._v(" "),v("li",[v("strong",[t._v("执行引擎：")])])]),t._v(" "),v("p",[t._v("类加载器装载class文件到一块内存区域，这块内存区域就是运行时数据区。执行引擎从这块内存区域中取出数据通过本地库接口运行。本地接口库再对接不同的系统平台。")]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_02-类加载过程-todo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_02-类加载过程-todo"}},[t._v("#")]),t._v(" 02 类加载过程 //todo")]),t._v(" "),v("p",[t._v("jvm的类加载加载类信息分为5步")]),t._v(" "),v("ul",[v("li",[t._v("加载：把类信息加载到jvm的内存模型中的方法区")]),t._v(" "),v("li",[t._v("验证：验证类型信息是否符合jvm要求的规范")]),t._v(" "),v("li",[t._v("准备：分配变量内存和初始化值")]),t._v(" "),v("li",[t._v("解析：把符号引用处理为直接引用")]),t._v(" "),v("li",[t._v("初始化：合并类变量和静态语句块")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_03-运行时数据区存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03-运行时数据区存储"}},[t._v("#")]),t._v(" 03 运行时数据区存储")]),t._v(" "),v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202304231418568.png",height:"50%",width:"50%/"}}),t._v("\n根据是否共享线程数据可分为2大区域\n"),v("ul",[v("li",[v("p",[t._v("线程私有部分："),v("strong",[t._v("程序计数器、 方法栈")])]),t._v(" "),v("p",[t._v("每一个线程都有一个程序计数器和一个方法栈。程序计数器用来记录当前线程执行到哪一行，所以也叫行号记录器。方法栈用来存储执行一个方法所需要的数据，每执行一个方法，就会把这个方法的数据打包成一个栈帧入栈。")]),t._v(" "),v("p",[t._v("栈帧中会存储：")]),t._v(" "),v("ul",[v("li",[t._v("局部变量表：保存基础类型和对象的引用的局部变量，方法执行时会先保存当前调用对象this")]),t._v(" "),v("li",[t._v("操作数：保存方法中的要操作的数值")]),t._v(" "),v("li",[t._v("动态连接：保存多态中具体执行方法的地址")]),t._v(" "),v("li",[t._v("返回地址：存放"),v("strong",[t._v("调用该方法")]),t._v("的程序计数器的值")])])]),t._v(" "),v("li",[v("p",[t._v("线程公有部分： "),v("strong",[t._v("方法区数据， 堆数据")])]),t._v(" "),v("p",[t._v("方法区保存类信息、常量、静态变量，堆保存Java对象信息。")])])]),t._v(" "),v("h5",{attrs:{id:"局部变量的存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#局部变量的存储"}},[t._v("#")]),t._v(" 局部变量的存储")]),t._v(" "),v("p",[t._v("如果是java基础类型， 则变量和值存储在方法栈中。\n如果是引用类型， 变量存在方法栈中，值，也就是对象实例，存储在堆中。")]),t._v(" "),v("h5",{attrs:{id:"成员变量的存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#成员变量的存储"}},[t._v("#")]),t._v(" 成员变量的存储")]),t._v(" "),v("p",[t._v("全局变量， 也就是类中的变量。\n不管是基础类型还是引用类型， 成员变量和值都存储在堆中。")]),t._v(" "),v("blockquote",[v("p",[t._v("所以大部分的对象实例都是存在堆内存中的， 只有方法中的基础类型成员变量和其值，引用变量这三种存储在栈内存中。JVM的GC主要针对的也是堆内存的回收，所以也被叫做GC堆。")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_04-jvm的内存分配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_04-jvm的内存分配"}},[t._v("#")]),t._v(" 04 JVM的内存分配")]),t._v(" "),v("h4",{attrs:{id:"新生代和老年代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新生代和老年代"}},[t._v("#")]),t._v(" 新生代和老年代")]),t._v(" "),v("p",[t._v("根据对象的存活周期， 堆内存分为新生代区域和老年代区域，分配比例为1:2。创建一个对象时会分配在新生代，创建一个大对象新生代没有足够的内存空间时这个对象会被分配到老年代。 在新生代经历过一定GC次数的对象，会被转到老年代。 这个次数不同的垃圾回收器是不同的，常见的是6次，15次。 还有一种情况未达到这个指定次数也会被转到老年代。比如， 新生代的对象个数是10个， 有6（超过一半）个对象经历的GC次数是3，那大于3的对象就会被转到老年代。")]),t._v(" "),v("h4",{attrs:{id:"内存分配方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存分配方式"}},[t._v("#")]),t._v(" 内存分配方式")]),t._v(" "),v("p",[t._v("根据内存是否规整有两种分配方式。")]),t._v(" "),v("ul",[v("li",[t._v("指针碰撞")]),t._v(" "),v("li",[t._v("空闲列表")])]),t._v(" "),v("h5",{attrs:{id:"指针碰撞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指针碰撞"}},[t._v("#")]),t._v(" 指针碰撞")]),t._v(" "),v("p",[t._v("如果堆中内存分配是规整的，则只需要将记录内存的指针移动对象所需大小的位置。")]),t._v(" "),v("h5",{attrs:{id:"空闲列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#空闲列表"}},[t._v("#")]),t._v(" 空闲列表")]),t._v(" "),v("p",[t._v("如果堆中内存分配是不规整的，则需要记录哪些内存块已使用， 哪些内存块未使用。 从未使用的内存块中找出合适大小的分配给对象。")]),t._v(" "),v("blockquote",[v("p",[t._v("内存是否规整， 取决是jvm使用的垃圾回收器，带压缩整理的回收器，内存分配是规整的。")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_05-jvm内存回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_05-jvm内存回收"}},[t._v("#")]),t._v(" 05 JVM内存回收")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202302061406582.png",alt:"新生代老年代算法"}})]),t._v(" "),v("blockquote",[v("p",[t._v("新生代采用复制回收算法，老年代采用标记整理回收算法。")])]),t._v(" "),v("h4",{attrs:{id:"回收算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回收算法"}},[t._v("#")]),t._v(" 回收算法")]),t._v(" "),v("h5",{attrs:{id:"复制算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复制算法"}},[t._v("#")]),t._v(" 复制算法")]),t._v(" "),v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202302061405255.png",height:"50%",width:"50%/"}}),t._v(" "),v("p",[t._v("新生代被分配成8:1:1来实现复制回收算法。对象创建的时候分配在8和其中的一个1上面， 触发Minor GC时，把存活的对象复制到另外一个1上面，清空原来的8和1。每次触发Minor GC时都把原来的还存活的对象复制到空闲的那一块1上面。")]),t._v(" "),v("p",[t._v("当8这块内存区域被写满的时候，"),v("strong",[t._v("就会触发Minor GC")]),t._v("，对新生代区域进行垃圾回收。")]),t._v(" "),v("p",[t._v("当老年代内存区域被写满，或者手动调用Systemt.gc()时会触发FullGC,对整个堆内存进行回收。")]),t._v(" "),v("h5",{attrs:{id:"标记清除算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法"}},[t._v("#")]),t._v(" 标记清除算法")]),t._v(" "),v("p",[t._v("老年代采用标记清除回收算法，通过可达性分析标记需要回收的对象，放在一个集合中，标记完成后统一回收。")]),t._v(" "),v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202302061405017.png",height:"50%",width:"50%/"}}),t._v(" "),v("h5",{attrs:{id:"标记整理算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标记整理算法"}},[t._v("#")]),t._v(" 标记整理算法")]),t._v(" "),v("p",[t._v("和标记清除算法差不多，只是在清除前进行一次整理，再清除。\n具体实现是：把所有存活的都行都向一端移动进行整理，整理完成后，清除掉边界以外的内存。\n"),v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202302061406708.png",height:"50%",width:"50%/"}})]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_06-jvm怎么判断对象是否存活"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_06-jvm怎么判断对象是否存活"}},[t._v("#")]),t._v(" 06 JVM怎么判断对象是否存活")]),t._v(" "),v("p",[t._v("判断对象是否存活有两种方法")]),t._v(" "),v("ul",[v("li",[t._v("引用计数法")]),t._v(" "),v("li",[t._v("可达性分析法")])]),t._v(" "),v("h4",{attrs:{id:"引用计数法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[t._v("#")]),t._v(" 引用计数法")]),t._v(" "),v("p",[t._v("给对象设置一个引用计数器，通过引用计数器来记录引用对象的地方， 引用＋1，引用失效-1。为0时，代表对象已“死去”。引用计数法无法判断相互引用但实际上已经没有在使用的对象。")]),t._v(" "),v("h4",{attrs:{id:"可达性分析法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析法"}},[t._v("#")]),t._v(" 可达性分析法")]),t._v(" "),v("img",{attrs:{src:"https://gitee.com/yutian_9065/img/raw/master/img/202302061404446.png",heigt:"30%",width:"80%/"}}),t._v("\n可达性分析就是通过GC Roots 作为根节点向下搜寻，找出可达和不可达的对象。 \n"),v("h5",{attrs:{id:"gc-roots"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc-roots"}},[t._v("#")]),t._v(" GC Roots")]),t._v(" "),v("p",[t._v("GC Roots就是对象，并且是当前不可被回收的对象。\n"),v("strong",[t._v("哪些对象可以作为GC Roots对象？")])]),t._v(" "),v("ol",[v("li",[t._v("类信息")]),t._v(" "),v("li",[t._v("静态变量引用的对象")]),t._v(" "),v("li",[t._v("常量引用的对象")]),t._v(" "),v("li",[t._v("栈帧中的Java对象")])]),t._v(" "),v("p",[v("strong",[t._v("为什么以上对象可作为GC Roots？")])]),t._v(" "),v("ul",[v("li",[t._v("类信息、静态变量和常量都存储在方法区中。在进程运行期间，不会被回收。")]),t._v(" "),v("li",[t._v("只要方法没结束， 栈帧中引用的对象就不会被回收。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);