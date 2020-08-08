(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-user",
  mounted: function mounted() {
    this.getRoles();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.name !== "" && this.form.email !== '' && this.form.password !== '' && this.form.confirm_password !== '';
    }
  },
  data: function data() {
    return {
      roles: [],
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: ''
      },
      is_requesting: false
    };
  },
  methods: {
    //Get A List Of All Roles.
    getRoles: function getRoles() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.create.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('rolesAndPermissions/getRoles', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.roles = response.data.data.data;
        _this.form.role = _this.roles[0].name;
      }).catch(function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    create: function create() {
      var _this2 = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-create",
        color: 'primary',
        scale: 0.45
      });
      var form_data = new FormData();

      for (var key in this.form) {
        form_data.append(key, this.form[key]);
      }

      this.$store.dispatch('user/create', form_data).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

        _this2.$router.push("/dashboard/user/".concat(response.data.data.data.id));

        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/create.vue?vue&type=template&id=b175d6b4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user/create.vue?vue&type=template&id=b175d6b4& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.can("create-user")
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              { ref: "create", attrs: { title: "Personal Information" } },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "User Role",
                            autocomplete: "",
                            "label-placeholder": "User Role",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.role,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "role", $$v)
                            },
                            expression: "form.role"
                          }
                        },
                        _vm._l(_vm.roles, function(item, index) {
                          return item.name !== "Client"
                            ? _c("vs-select-item", {
                                key: index,
                                attrs: { value: item.name, text: item.name }
                              })
                            : _vm._e()
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:3",
                            expression: "'required|min:3'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "first_name",
                          danger: _vm.errors.has("first_name"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("first_name"),
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "label-placeholder": "First Name"
                        },
                        model: {
                          value: _vm.form.first_name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "first_name", $$v)
                          },
                          expression: "form.first_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:3",
                            expression: "'required|min:3'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "last_name",
                          danger: _vm.errors.has("last_name"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("last_name"),
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "label-placeholder": "Last Name"
                        },
                        model: {
                          value: _vm.form.last_name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "last_name", $$v)
                          },
                          expression: "form.last_name"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "email",
                          danger: _vm.errors.has("email"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("email"),
                          "icon-pack": "feather",
                          icon: "icon-mail",
                          "label-placeholder": "Email"
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:6|max:10",
                            expression: "'required|min:6|max:10'"
                          }
                        ],
                        ref: "password",
                        staticClass: "w-full",
                        attrs: {
                          name: "password",
                          danger: _vm.errors.has("password"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("password"),
                          type: "password",
                          "icon-pack": "feather",
                          icon: "icon-lock",
                          "label-placeholder": "Password"
                        },
                        model: {
                          value: _vm.form.password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "password", $$v)
                          },
                          expression: "form.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "min:6|max:10|confirmed:password",
                            expression: "'min:6|max:10|confirmed:password'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          type: "password",
                          name: "confirm_password",
                          danger: _vm.errors.has("confirm_password"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("confirm_password"),
                          "icon-pack": "feather",
                          icon: "icon-lock",
                          "label-placeholder": "Confirm Password"
                        },
                        model: {
                          value: _vm.form.confirm_password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "confirm_password", $$v)
                          },
                          expression: "form.confirm_password"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "vs-row",
                  {
                    attrs: {
                      "vs-align": "center",
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-w": "12"
                    }
                  },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "center",
                          "vs-align": "center",
                          "vs-w": "12"
                        }
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              id: "btn-create",
                              disabled: !_vm.validateForm,
                              "icon-pack": "feather",
                              icon: "icon-save",
                              type: "gradient"
                            },
                            on: {
                              click: function($event) {
                                _vm.is_requesting
                                  ? _vm.$store.dispatch(
                                      "viewWaitMessage",
                                      _vm.$vs
                                    )
                                  : _vm.create()
                              }
                            }
                          },
                          [_vm._v("Create User")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/user/create.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/user/create.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_b175d6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=b175d6b4& */ "./resources/js/src/views/user/create.vue?vue&type=template&id=b175d6b4&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/user/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_b175d6b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_b175d6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/user/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/user/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/user/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/user/create.vue?vue&type=template&id=b175d6b4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/user/create.vue?vue&type=template&id=b175d6b4& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_b175d6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=b175d6b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user/create.vue?vue&type=template&id=b175d6b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_b175d6b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_b175d6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);