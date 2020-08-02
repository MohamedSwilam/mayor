(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
  name: "browse",
  mounted: function mounted() {
    this.getReservations();
  },
  data: function data() {
    return {
      reservations: [],
      is_requesting: false
    };
  },
  methods: {
    //Get A List Of All Reservations.
    getReservations: function getReservations() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.reservations.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('reservation/browseMyReservations', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.reservations.$refs.content);

        _this.reservations = response.data.data.data;
      }).catch(function (error) {
        _this.$vs.loading.close(_this.$refs.reservations.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    // Confirm Dialog To Delete Message
    confirmDelete: function confirmDelete(record) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deletemyRecord,
        parameters: [record]
      });
    },
    //Delete The Selected Record.
    deletemyRecord: function deletemyRecord(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('reservation/deleteMyReservation', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.reservations = _this2.reservations.filter(function (reservation) {
          return reservation.id !== params[0].id;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".td-img {\n  max-width: 75px;\n  max-height: 75px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browseMyReservations.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=template&id=cf89a2ec&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=template&id=cf89a2ec& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "vx-col w-full mb-base" },
    [
      _c(
        "vx-card",
        {
          ref: "reservations",
          attrs: {
            title: "Reservations List",
            "collapse-action": "",
            refreshContentAction: ""
          },
          on: { refresh: _vm.getReservations }
        },
        [
          _c(
            "vs-table",
            {
              attrs: { search: "", data: _vm.reservations },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(record, index) {
                      return _c(
                        "vs-tr",
                        { key: index },
                        [
                          _c("vs-td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(index + 1) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("img", {
                              staticClass: "td-img",
                              attrs: {
                                alt: "property image",
                                src:
                                  "/storage/property/" +
                                  record.properties.main_home_image
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticStyle: {
                                  color: "dodgerblue",
                                  "text-decoration": "underline"
                                },
                                attrs: {
                                  href:
                                    "/dashboard/property/" +
                                    record.properties.id
                                }
                              },
                              [_vm._v(_vm._s(record.properties.title))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(record.clients.user.first_name) +
                                " " +
                                _vm._s(record.clients.user.last_name) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: record.check_in } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm._f("date")(record.check_in, true)) +
                                " - " +
                                _vm._s(_vm._f("time")(record.check_in)) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: record.check_out } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm._f("date")(record.check_out, true)) +
                                " - " +
                                _vm._s(_vm._f("time")(record.check_out)) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: record.status_id } },
                            [
                              _c(
                                "vs-chip",
                                {
                                  attrs: {
                                    color: record.reservation_status.color
                                  }
                                },
                                [_vm._v(_vm._s(record.reservation_status.name))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: record.created_at } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm._f("date")(record.created_at, true)
                                ) +
                                " - " +
                                _vm._s(_vm._f("time")(record.created_at)) +
                                "\n                    "
                            )
                          ]),
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
                                          text: "View Details"
                                        }
                                      },
                                      [
                                        _c("vs-button", {
                                          attrs: {
                                            to:
                                              "/dashboard/reservation/" +
                                              record.id,
                                            radius: "",
                                            color: "primary",
                                            type: "border",
                                            "icon-pack": "feather",
                                            icon: "icon-eye"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vx-tooltip",
                                      {
                                        staticClass: "mr-5",
                                        attrs: {
                                          color: "warning",
                                          text: "Edit Record"
                                        }
                                      },
                                      [
                                        _c("vs-button", {
                                          attrs: {
                                            to:
                                              "/dashboard/reservation/" +
                                              record.id +
                                              "/edit-my-reservation",
                                            radius: "",
                                            color: "warning",
                                            type: "border",
                                            "icon-pack": "feather",
                                            icon: "icon-edit"
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
                                                : _vm.confirmDelete(record)
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
                  _c("vs-th", [_vm._v("Property")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Client Name")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "check_in" } }, [
                    _vm._v("Check In")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "check_out" } }, [
                    _vm._v("Check Out")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status_id" } }, [
                    _vm._v("Status")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/reservation/browseMyReservations.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/reservation/browseMyReservations.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browseMyReservations_vue_vue_type_template_id_cf89a2ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browseMyReservations.vue?vue&type=template&id=cf89a2ec& */ "./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=template&id=cf89a2ec&");
/* harmony import */ var _browseMyReservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browseMyReservations.vue?vue&type=script&lang=js& */ "./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browseMyReservations.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _browseMyReservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browseMyReservations_vue_vue_type_template_id_cf89a2ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browseMyReservations_vue_vue_type_template_id_cf89a2ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/reservation/browseMyReservations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browseMyReservations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browseMyReservations.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=template&id=cf89a2ec&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=template&id=cf89a2ec& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_template_id_cf89a2ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browseMyReservations.vue?vue&type=template&id=cf89a2ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reservation/browseMyReservations.vue?vue&type=template&id=cf89a2ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_template_id_cf89a2ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browseMyReservations_vue_vue_type_template_id_cf89a2ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);