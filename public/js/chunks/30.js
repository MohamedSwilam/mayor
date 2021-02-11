(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/message/browse.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/message/browse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  mounted: function mounted() {
    this.browse();
  },
  data: function data() {
    return {
      messages: [],
      display_message: {
        display: false,
        data: {
          name: '',
          message: ''
        }
      },
      is_requesting: false
    };
  },
  methods: {
    //Get A List Of All Messages.
    browse: function browse() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.message.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('message/browse', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.message.$refs.content);

        _this.messages = response.data.data.data;
      }).catch(function (error) {
        _this.$vs.loading.close(_this.$refs.message.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    view: function view(record) {
      this.display_message.data = record;
      this.display_message.display = true;
    },
    // Confirm Dialog To Delete Message
    confirmDelete: function confirmDelete(record) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteRecord,
        parameters: [record]
      });
    },
    //Delete The Selected Record.
    deleteRecord: function deleteRecord(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('message/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.messages = _this2.messages.filter(function (type) {
          return type.id !== params[0].id;
        });

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

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/message/browse.vue?vue&type=template&id=77309a1c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/message/browse.vue?vue&type=template&id=77309a1c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c(
          "vs-popup",
          {
            staticClass: "holamundo",
            attrs: {
              title: _vm.display_message.data.name + "'s Message",
              active: _vm.display_message.display
            },
            on: {
              "update:active": function($event) {
                return _vm.$set(_vm.display_message, "display", $event)
              }
            }
          },
          [
            _c("p", [_vm._v(_vm._s(_vm.display_message.data.message))]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("span", [
              _c("b", [_vm._v("Phone: ")]),
              _vm._v(" " + _vm._s(_vm.display_message.data.phone))
            ]),
            _vm._v(" "),
            _c("span", { staticStyle: { float: "right" } }, [
              _c("b", [_vm._v("Email: ")]),
              _vm._v(" " + _vm._s(_vm.display_message.data.email))
            ]),
            _vm._v(" "),
            _c("vs-divider", { staticClass: "m-1" }),
            _vm._v(" "),
            _c("span", { staticStyle: { float: "right" } }, [
              _vm._v(
                "Created at " +
                  _vm._s(
                    _vm._f("date")(_vm.display_message.data.created_at, true)
                  ) +
                  " - " +
                  _vm._s(_vm._f("time")(_vm.display_message.data.created_at))
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vx-card",
          {
            ref: "message",
            attrs: {
              title: "Messages List",
              "collapse-action": "",
              refreshContentAction: ""
            },
            on: { refresh: _vm.browse }
          },
          [
            _c(
              "vs-table",
              {
                attrs: { search: "", data: _vm.messages },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(record, index) {
                        return record.service == null
                          ? _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(index + 1) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: record.name } }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(record.name) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: record.email } }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(record.email) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: record.phone } }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(record.phone) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: record.created_at } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm._f("date")(
                                            record.created_at,
                                            true
                                          )
                                        ) +
                                        " - " +
                                        _vm._s(
                                          _vm._f("time")(record.created_at)
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c(
                                        "div",
                                        { staticClass: "flex mb-4" },
                                        [
                                          _c(
                                            "vx-tooltip",
                                            {
                                              staticClass: "mr-5",
                                              attrs: {
                                                color: "primary",
                                                text: "View Record"
                                              }
                                            },
                                            [
                                              _c("vs-button", {
                                                attrs: {
                                                  radius: "",
                                                  color: "primary",
                                                  type: "border",
                                                  "icon-pack": "feather",
                                                  icon: "icon-eye"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.view(record)
                                                  }
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vx-tooltip",
                                            {
                                              attrs: {
                                                color: "danger",
                                                text: "Delete Record"
                                              }
                                            },
                                            [
                                              _c("vs-button", {
                                                staticClass:
                                                  "vs-con-loading__container",
                                                attrs: {
                                                  id: "btn-delete-" + record.id,
                                                  radius: "",
                                                  color: "danger",
                                                  type: "border",
                                                  "icon-pack": "feather",
                                                  icon: "icon-trash"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.is_requesting
                                                      ? _vm.$store.dispatch(
                                                          "viewWaitMessage",
                                                          _vm.$vs
                                                        )
                                                      : _vm.confirmDelete(
                                                          record
                                                        )
                                                  }
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      })
                    }
                  }
                ])
              },
              [
                _c(
                  "template",
                  { slot: "thead" },
                  [
                    _c("vs-th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "name" } }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "email" } }, [
                      _vm._v("Email")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "Phone" } }, [
                      _vm._v("Phone")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                      _vm._v("Created At")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Action")])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/message/browse.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/message/browse.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_77309a1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=77309a1c& */ "./resources/js/src/views/message/browse.vue?vue&type=template&id=77309a1c&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/message/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_77309a1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_77309a1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/message/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/message/browse.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/message/browse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/message/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/message/browse.vue?vue&type=template&id=77309a1c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/message/browse.vue?vue&type=template&id=77309a1c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_77309a1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=77309a1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/message/browse.vue?vue&type=template&id=77309a1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_77309a1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_77309a1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);