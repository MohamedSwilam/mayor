(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      uploadedImage: '/images/website/avatar-s-11.jpg',
      form: {
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
        is_male: 1,
        ssn: '',
        image: '',
        mobile: '',
        address: '',
        nationality: ''
      }
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.email !== '' && this.form.password !== '' && this.form.confirm_password !== '' && this.form.confirm_password === this.form.password && this.form.first_name !== '' && this.form.last_name !== '' && this.form.ssn !== '' && this.form.image !== '' && this.form.mobile !== '' && this.form.address !== '' && this.form.nationality !== '';
    }
  },
  methods: {
    previewImage: function previewImage(event) {
      var _this = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this.uploadedImage = e.target.result;
          _this.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    register: function register() {
      var _this2 = this;

      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'image' && this.form.hasOwnProperty(key)) {
          if (this.form[key]) {
            for (var i = 0; i < this.form[key].length; i++) {
              form_data.append(key, this.form[key][i]);
            }
          }
        } else {
          form_data.append(key, this.form[key]);
        }
      } // Loading


      this.$vs.loading();
      console.log(form_data);
      this.$store.dispatch('auth/registerUserJWT', form_data).then(function () {
        _this2.$vs.loading.close();
      }).catch(function (error) {
        _this2.$vs.loading.close();

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
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
  return _c(
    "div",
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
      attrs: { id: "page-login" }
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
              _c(
                "div",
                { staticClass: "vx-row no-gutter justify-center items-center" },
                [
                  _c(
                    "div",
                    { staticClass: "vx-col hidden lg:block lg:w-1/2" },
                    [
                      _c("img", {
                        staticClass: "mx-auto",
                        attrs: {
                          src: __webpack_require__(/*! @assets/images/logo/logo.jpg */ "./resources/assets/images/logo/logo.jpg"),
                          alt: "login"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "px-8 pt-8 login-tabs-container" },
                        [
                          _c("div", { staticClass: "vx-card__title mb-2" }, [
                            _c("h4", { staticClass: "mb-4" }, [
                              _vm._v("Register")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Already have an account? "),
                              _c("b", [
                                _c(
                                  "a",
                                  { attrs: { href: "/dashboard/login" } },
                                  [_vm._v("Login Here")]
                                )
                              ]),
                              _vm._v(".")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-row",
                            [
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "image-preview",
                                      staticStyle: { display: "inline-flex" }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "preview",
                                        attrs: {
                                          alt: "photo",
                                          src: _vm.uploadedImage
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        display: "inline-flex",
                                        position: "relative",
                                        top: "-15px"
                                      }
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          id: "img-upload",
                                          type: "file",
                                          accept: "image/*"
                                        },
                                        on: { change: _vm.previewImage }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "vs-button",
                                        {
                                          attrs: {
                                            size: "small",
                                            "icon-pack": "feather",
                                            icon: "icon-upload",
                                            type: "gradient",
                                            onclick:
                                              "document.getElementById('img-upload').click()"
                                          }
                                        },
                                        [_vm._v("Upload Photo")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("first_name"),
                                      "danger-text": _vm.errors.first(
                                        "first_name"
                                      ),
                                      "val-icon-danger": "clear",
                                      name: "first_name",
                                      type: "text",
                                      "icon-no-border": "",
                                      icon: "icon icon-user",
                                      "icon-pack": "feather",
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
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("last_name"),
                                      "danger-text": _vm.errors.first(
                                        "last_name"
                                      ),
                                      "val-icon-danger": "clear",
                                      type: "text",
                                      name: "last_name",
                                      "icon-no-border": "",
                                      icon: "icon icon-user",
                                      "icon-pack": "feather",
                                      "label-placeholder": "Last name"
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
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-4",
                                  attrs: { "vs-w": "12" }
                                },
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
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("email"),
                                      "danger-text": _vm.errors.first("email"),
                                      "val-icon-danger": "clear",
                                      type: "email",
                                      name: "email",
                                      "icon-no-border": "",
                                      icon: "icon icon-mail",
                                      "icon-pack": "feather",
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
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("label", [_vm._v("Gender:")]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "1" },
                                      model: {
                                        value: _vm.form.is_male,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "is_male", $$v)
                                        },
                                        expression: "form.is_male"
                                      }
                                    },
                                    [_vm._v("Male")]
                                  ),
                                  _vm._v("    \n                        "),
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "0" },
                                      model: {
                                        value: _vm.form.is_male,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "is_male", $$v)
                                        },
                                        expression: "form.is_male"
                                      }
                                    },
                                    [_vm._v("Female")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("ssn"),
                                      "danger-text": _vm.errors.first("ssn"),
                                      "val-icon-danger": "clear",
                                      type: "text",
                                      name: "ssn",
                                      "icon-no-border": "",
                                      icon: "icon icon-credit-card",
                                      "icon-pack": "feather",
                                      "label-placeholder": "SSN"
                                    },
                                    model: {
                                      value: _vm.form.ssn,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "ssn", $$v)
                                      },
                                      expression: "form.ssn"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("mobile"),
                                      "danger-text": _vm.errors.first("mobile"),
                                      "val-icon-danger": "clear",
                                      type: "text",
                                      name: "mobile",
                                      "icon-no-border": "",
                                      icon: "icon icon-phone",
                                      "icon-pack": "feather",
                                      "label-placeholder": "Mobile"
                                    },
                                    model: {
                                      value: _vm.form.mobile,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "mobile", $$v)
                                      },
                                      expression: "form.mobile"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("address"),
                                      "danger-text": _vm.errors.first(
                                        "address"
                                      ),
                                      "val-icon-danger": "clear",
                                      type: "text",
                                      name: "address",
                                      "icon-no-border": "",
                                      icon: "icon icon-map-pin",
                                      "icon-pack": "feather",
                                      "label-placeholder": "Address"
                                    },
                                    model: {
                                      value: _vm.form.address,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "address", $$v)
                                      },
                                      expression: "form.address"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("nationality"),
                                      "danger-text": _vm.errors.first(
                                        "nationality"
                                      ),
                                      "val-icon-danger": "clear",
                                      type: "text",
                                      name: "nationality",
                                      "icon-no-border": "",
                                      icon: "icon icon-flag",
                                      "icon-pack": "feather",
                                      "label-placeholder": "nationality"
                                    },
                                    model: {
                                      value: _vm.form.nationality,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "nationality", $$v)
                                      },
                                      expression: "form.nationality"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required|min:6|max:16",
                                        expression: "'required|min:6|max:16'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has("password"),
                                      "danger-text": _vm.errors.first(
                                        "password"
                                      ),
                                      "val-icon-danger": "clear",
                                      type: "password",
                                      name: "password",
                                      "icon-no-border": "",
                                      icon: "icon icon-lock",
                                      "icon-pack": "feather",
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
                                "vs-col",
                                {
                                  staticClass: "mb-2",
                                  attrs: { "vs-w": "12" }
                                },
                                [
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value:
                                          "required|min:6|max:16|confirmed:password",
                                        expression:
                                          "'required|min:6|max:16|confirmed:password'"
                                      }
                                    ],
                                    staticClass: "w-full mt-6",
                                    attrs: {
                                      "data-vv-validate-on": "blur",
                                      danger: _vm.errors.has(
                                        "confirm_password"
                                      ),
                                      "danger-text": _vm.errors.first(
                                        "confirm_password"
                                      ),
                                      "val-icon-danger": "clear",
                                      type: "password",
                                      name: "confirm_password",
                                      "icon-no-border": "",
                                      icon: "icon icon-lock",
                                      "icon-pack": "feather",
                                      "label-placeholder": "Confirm Password"
                                    },
                                    model: {
                                      value: _vm.form.confirm_password,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "confirm_password",
                                          $$v
                                        )
                                      },
                                      expression: "form.confirm_password"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex flex-wrap justify-between mt-5 mb-3"
                            },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { disabled: !_vm.validateForm },
                                  on: { click: _vm.register }
                                },
                                [_vm._v("Register")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/logo/logo.jpg":
/*!***********************************************!*\
  !*** ./resources/assets/images/logo/logo.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.jpg?265b7fea4965b9a0023baabf5f1dce1f";

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=09126b38& */ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=09126b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);