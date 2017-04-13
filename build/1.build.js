webpackJsonp([1,6],Array(26).concat([
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(27)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(29),
	  /* template */
	  __webpack_require__(40),
	  /* scopeId */
	  "data-v-55f759f2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\learn\\webpack_vue2\\src\\vue\\login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-55f759f2", Component.options)
	  } else {
	    hotAPI.reload("data-v-55f759f2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(17)("10958199", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-55f759f2&scoped=true!../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
	     var newContent = require("!!../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-55f759f2&scoped=true!../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports


	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n.p-main[data-v-55f759f2] {\n  padding: 0 7.4%;\n}\n.p-infor[data-v-55f759f2] {\n  padding: 1.5rem 0 4.75rem 0;\n}\n.p-infor .top-infor[data-v-55f759f2] {\n  color: #999;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0.75rem 0 0 0;\n}\n\n/*输入框*/\n.p-main .ipt-gp[data-v-55f759f2] {\n  height: 3.35rem;\n  box-sizing: border-box;\n  margin-bottom: 0.6rem;\n  position: relative;\n}\n.p-main .ipt-gp[data-v-55f759f2]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  background: #adafb0;\n  -webkit-transform: scaleY(0.5);\n}\n.ipt-gp .icon-ipt[data-v-55f759f2] {\n  position: absolute;\n  left: 0.25rem;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  z-index: 10;\n}\n.ipt-gp .icon-tel[data-v-55f759f2] {\n  width: 1rem;\n  height: 1.525rem;\n  background: url(/src/assets/module/login/imgs/icon-tel.png) no-repeat;\n  background-size: contain;\n}\n.ipt-gp .icon-code[data-v-55f759f2] {\n  width: 1.125rem;\n  height: 1.175rem;\n  background: url(/src/assets/module/login/imgs/icon-code.png) no-repeat;\n  background-size: contain;\n}\n.ipt-gp .ipt-text[data-v-55f759f2]::-webkit-input-placeholder {\n  color: #999;\n}\n.ipt-gp .ipt-text[data-v-55f759f2] {\n  position: absolute;\n  left: 2.5rem;\n  display: block;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  color: #333;\n  font-size: 1.2rem;\n  z-index: 10;\n}\n\n/*提交*/\n.btn-submit[data-v-55f759f2] {\n  margin-top: 2.75rem;\n  font-size: 1.3rem;\n  color: #fff;\n  background: #ff5a54;\n  font-family: 'microsoft yahei';\n  border: 0;\n  height: 3.2rem;\n  width: 100%;\n  display: block;\n}\n.btn-submit[data-v-55f759f2]:disabled {\n  background: #999;\n  color: #fff;\n}\n\n/*底部链接*/\n.link-bottom[data-v-55f759f2] {\n  display: block;\n  text-align: center;\n  color: #ff5a54;\n  font-size: 1.3125rem;\n  line-height: 0;\n  height: 1.3125rem;\n  margin: 15.75rem auto 0.5rem auto;\n}\n.link-bottom em[data-v-55f759f2], .link-bottom i[data-v-55f759f2] {\n  vertical-align: middle;\n  display: inline-block;\n}\n.link-bottom .icon-next[data-v-55f759f2] {\n  width: 0.975rem;\n  height: 1.2rem;\n  background: url(/src/assets/module/login/imgs/icon-next.png) no-repeat;\n  background-size: contain;\n  margin-left: 0.75rem;\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var nvTips = __webpack_require__(30);
	var countDown = __webpack_require__(35);
	module.exports = {
		data: function data() {
			return {
				userTel: '',
				userCode: '',
				disabledSubmitBtn: true
			};
		},
		methods: {
			// 手机跳转
			telInputKeyUp: function telInputKeyUp() {
				var countDownStatus = this.$store.state.countDownIsTap;
				if (this.userTel.length == 11 && countDownStatus == false) {
					this.$store.dispatch('aCountDownDisabled', false);
				} else {
					this.$store.dispatch('aCountDownDisabled', true);
				}
				this.inputKeyupFun();
			},
			// 输入框按钮
			inputKeyupFun: function inputKeyupFun() {
				var that = this;
				// 按钮是否可点击
				if (that.userTel != "" && that.userCode != "") {
					that.disabledSubmitBtn = false;
				} else {
					that.disabledSubmitBtn = true;
				}
			},
			// 登录按钮
			submitBtnClickFun: function submitBtnClickFun() {
				var that = this;

				if (that.userTel == '11111111111' && that.userCode == '1111') {
					this.$cookie.set('zlhIsLogin', true, { expires: '100Y' });
					this.$cookie.set('zlhAccount', that.userTel, { expires: '100Y' });
					this.$router.push('/buyStock');
				} else {
					// 弹出层
					this.$store.dispatch('aSetShowTips', true);
					this.$store.dispatch('aSetShowTipsContent', '帐号验证码全为1');
				}
			}

		},
		components: {
			nvTips: nvTips,
			countDown: countDown
		}
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(31)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(33),
	  /* template */
	  __webpack_require__(34),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\learn\\webpack_vue2\\src\\components\\tips.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] tips.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d45cba3a", Component.options)
	  } else {
	    hotAPI.reload("data-v-d45cba3a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(17)("4b8109a2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-d45cba3a!../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./tips.vue", function() {
	     var newContent = require("!!../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-d45cba3a!../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./tips.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports


	// module
	exports.push([module.id, "\n.dialog-tips {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1024;\n  display: inline-block;\n  -webkit-transform: translate(-50%, -50%);\n}\n.dialog-tips-main {\n  line-height: 2;\n  background: rgba(0, 0, 0, 0.75);\n  color: #fff;\n  border-radius: 5px;\n  padding: 0.75rem 1.5rem;\n  font-size: 0;\n  text-align: center;\n  max-width: 80%;\n  margin: 0 auto;\n}\n.dialog-tips-main i,\n.dialog-tips-main span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.dialog-tips-main .msg-text {\n  font-size: 1.2rem;\n  word-break: break-all;\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
		computed: {
			showTips: function showTips() {
				return this.$store.state.isShowTips;
			},
			tipsContent: function tipsContent() {
				return this.$store.state.tipsContent;
			}
		}
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "dialogTips"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showTips),
	      expression: "showTips"
	    }],
	    staticClass: "dialog-tips"
	  }, [_c('div', {
	    staticClass: "dialog-tips-main"
	  }, [_c('div', {
	    staticClass: "msg-text"
	  }, [_c('span', [_vm._v(_vm._s(_vm.tipsContent))])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d45cba3a", module.exports)
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(36)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(38),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\learn\\webpack_vue2\\src\\components\\countDown.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] countDown.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-081eb194", Component.options)
	  } else {
	    hotAPI.reload("data-v-081eb194", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(17)("569025be", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-081eb194!../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./countDown.vue", function() {
	     var newContent = require("!!../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-081eb194!../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./countDown.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports


	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n/*验证码*/\n.ipt-gp .code-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 9.25rem;\n  height: 2.75rem;\n  border-radius: 5px;\n  font-size: 1.1rem;\n  font-family: 'microsoft yahei';\n  background: #ffb847;\n  color: #fff;\n  border: 0;\n  z-index: 20;\n}\n.ipt-gp .code-btn:disabled {\n  background: #ebebeb;\n  color: #888;\n}\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//

	module.exports = {
		props: ['btnText', 'btnTimer'],
		data: function data() {
			return {
				countDownText: '获取验证码',
				countDownTime: 59
			};
		},
		mounted: function mounted() {
			this.$nextTick(function () {
				this.countDownText = this.btnText || this.countDownText;
				this.countDownTime = this.btnTimer || this.countDownTime;
			});
		},
		computed: {
			disabledButton: function disabledButton() {
				return this.$store.state.countDownDisabled;
			}
		},
		methods: {
			// 倒计时点击事件
			codeBtnClickFun: function codeBtnClickFun() {
				var countDownTime = this.countDownTime;
				this.$store.dispatch('aCountDownIsTap', true);
				this.smsCodeCount(countDownTime);
			},
			smsCodeCount: function smsCodeCount(count) {
				var that = this;
				if (count == 0) {
					that.countDownText = "获取验证码";
					this.$store.dispatch('aCountDownIsTap', false);
					this.$store.dispatch('aCountDownDisabled', false);
				} else {
					this.$store.dispatch('aCountDownDisabled', true);
					that.countDownText = count-- + "s后重发";
					that.timer = setTimeout(function () {
						that.smsCodeCount(count);
					}, 1000);
				}
			}
		}
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "countDown"
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "tap",
	      rawName: "v-tap",
	      value: ({
	        methods: _vm.codeBtnClickFun
	      }),
	      expression: "{methods:codeBtnClickFun}"
	    }],
	    staticClass: "code-btn",
	    attrs: {
	      "disabled": _vm.disabledButton
	    }
	  }, [_vm._v(_vm._s(_vm.countDownText))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-081eb194", module.exports)
	  }
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "login"
	    }
	  }, [_c('div', {
	    staticClass: "main"
	  }, [_c('div', {
	    staticClass: "p-main"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "ipt-gp"
	  }, [_c('i', {
	    staticClass: "icon-ipt icon-tel"
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.userTel),
	      expression: "userTel"
	    }],
	    staticClass: "ipt-text",
	    attrs: {
	      "type": "tel",
	      "placeholder": "请输入手机号",
	      "maxlength": "11"
	    },
	    domProps: {
	      "value": (_vm.userTel)
	    },
	    on: {
	      "keyup": _vm.telInputKeyUp,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.userTel = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "ipt-gp"
	  }, [_c('i', {
	    staticClass: "icon-ipt icon-code"
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.userCode),
	      expression: "userCode"
	    }],
	    staticClass: "ipt-text",
	    attrs: {
	      "type": "tel",
	      "placeholder": "验证码",
	      "maxlength": "4"
	    },
	    domProps: {
	      "value": (_vm.userCode)
	    },
	    on: {
	      "keyup": _vm.inputKeyupFun,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.userCode = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('count-down')], 1), _vm._v(" "), _c('button', {
	    directives: [{
	      name: "tap",
	      rawName: "v-tap",
	      value: ({
	        methods: _vm.submitBtnClickFun
	      }),
	      expression: "{methods:submitBtnClickFun}"
	    }],
	    staticClass: "btn-submit",
	    attrs: {
	      "disabled": _vm.disabledSubmitBtn
	    }
	  }, [_vm._v("验证")])]), _vm._v(" "), _c('nv-tips')], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "p-infor"
	  }, [_c('p', {
	    staticClass: "top-infor"
	  }, [_vm._v("进行手机号码注册认证，感谢您的配合。")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-55f759f2", module.exports)
	  }
	}

/***/ }
]));