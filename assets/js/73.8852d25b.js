(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{381:function(e,r,s){"use strict";s.r(r);var t=s(14),a=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rxjava"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rxjava"}},[e._v("#")]),e._v(" RxJava")]),e._v(" "),r("h3",{attrs:{id:"源码分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[e._v("#")]),e._v(" 源码分析")]),e._v(" "),r("h4",{attrs:{id:"数据发送转换原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据发送转换原理"}},[e._v("#")]),e._v(" 数据发送转换原理")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("从上往下创建每一层的Observable：")]),e._v(" create 、 map 这些操作符都创建了一个Observable对象，创建对象时，把父类对象赋值给自己的source属性。")]),e._v(" "),r("li",[r("strong",[e._v("从下往上创建每一层的Observer：")]),e._v(" 最后一层的Observable 对象.subscribe订阅方法中传入了一个Observer的实现。在这个方法中，创建一个自己的新的的Observer，传入的这个Observer作为其中的actual属性。并调用source这个父类对象的subscribe方法把自己new的这个Observer传递给父类，如此往上递归创建并传递带有子Observer的自身的Observer。这样便完成了每一层的Observer的创建。")]),e._v(" "),r("li",[e._v("**从上往下传递数据给Observer：**在创建最上面一层时，会调用create传进来的source对象的subscribe方法， 把下一层传进来的Observer封装成ObservableEmitter对象， 调用这个对象的onNext方法，实际上就是调用下一层的Observer的next回调。下一层收到回调处理数据后再调用actual把数据分发给下层。")])])])}),[],!1,null,null,null);r.default=a.exports}}]);