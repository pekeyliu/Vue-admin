(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dragdialog"],{"0c3b":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("section",{staticClass:"main"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-rank"}),t._v(" 拖拽组件")]),a("el-breadcrumb-item",[t._v("拖拽弹框")])],1)],1),a("div",{staticClass:"container"},[a("p",[t._v("通过指令 v-dialogDrag 使 Dialog 对话框具有可拖拽的功能。")]),a("br"),a("el-button",{attrs:{type:"primary"},on:{click:function(i){t.visible=!0}}},[t._v("点我弹框")])],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"拖拽弹框",center:"",visible:t.visible,width:"30%"},on:{"update:visible":function(i){t.visible=i}}},[t._v("\n        我是一个可以拖拽的对话框！\n        "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(i){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(i){t.visible=!1}}},[t._v("确 定")])],1)])],1)},l=[],s={data:function(){return{visible:!1}}},n=s,r=a("e90a"),o=Object(r["a"])(n,e,l,!1,null,null,null);i["default"]=o.exports}}]);