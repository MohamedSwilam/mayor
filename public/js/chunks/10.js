(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/property/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.gettypes();
  },
  data: function data() {
    return {
      form: {
        title: '',
        information: '',
        property_type_id: '',
        description: '',
        sqm: 0,
        main_home_image: null,
        main_details_image: null,
        images: [],
        has_pool: false,
        has_garden: false,
        view_in_home: false,
        no_of_rooms: 1,
        no_of_baths: 1,
        no_of_floors: 1,
        price: 0,
        dinner_price: 0,
        lunch_price: 0,
        address_desc: '',
        address: '',
        location: '',
        imagesDesc: []
      },
      roles: [],
      uploadedHomeImage: null,
      uploadedDetailImage: null,
      selectedImages: [],
      selectedImagesDescriptions: [],
      is_requesting: false,
      counterDanger: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.title !== "" && this.form.information !== "" && this.form.main_home_image !== null && this.form.main_details_image !== null && this.form.images.length > 0 && this.form.address_desc !== "" && this.form.address !== "" && this.form.location !== "" && this.form.images.length === this.form.imagesDesc.length;
    }
  },
  methods: {
    gettypes: function gettypes() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.create.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('property/browsetype', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.roles = response.data.data.data;
        _this.form.property_type_id = _this.roles[0].property_type;
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
    previewHomeImage: function previewHomeImage(event) {
      var _this2 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this2.uploadedHomeImage = e.target.result;
          _this2.form.main_home_image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    previewDetailImage: function previewDetailImage(event) {
      var _this3 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this3.uploadedDetailImage = e.target.result;
          _this3.form.main_details_image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    uploadPropertyImages: function uploadPropertyImages(event) {
      var _this4 = this;

      // let selectedFiles = e.target.files;
      // if (!selectedFiles.length) {
      //     return false;
      // }
      // var reader = new FileReader();
      // for (let i = 0; i < selectedFiles.length; i++) {
      //     // this.form.images.push(selectedFiles[i]);
      //     this.form.images.push(reader.readAsDataURL(selectedFiles[i]));
      // }
      // let selectedImages = e.target.files;
      // if (!selectedImages.length) {
      //     return false;
      // }
      // for (let i = 0; i < selectedImages.length; i++) {
      //     this.formData.images.push(selectedImages[i]);
      // }
      // Reference to the DOM input element
      var input = event.target;
      var selectedFiles = event.target.files; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        var _loop = function _loop(i) {
          var reader = new FileReader();

          reader.onload = function (e) {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            // this.uploadedDetailImage = e.target.result;
            // this.form.main_details_image = input.files;
            _this4.form.images.push(selectedFiles[i]);

            _this4.selectedImages.push(e.target.result);
          }; // Start the reader job - read file as a data url (base64 format)
          // this.form.images.push(selectedFiles[i]);


          console.log(i, reader);
          reader.readAsDataURL(selectedFiles[i]);
        };

        // create a new FileReader to read this image and convert to base64 format
        // Define a callback function to run, when FileReader finishes its job
        for (var i = 0; i < selectedFiles.length; i++) {
          _loop(i);
        }
      }

      console.log(this.form.images);
    },
    //Create Resource
    create: function create(clicked_button_id) {
      var _this5 = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#".concat(clicked_button_id),
        color: 'primary',
        scale: 0.45
      });
      var form_data = new FormData();

      for (var key in this.form) {
        if ((key === 'main_home_image' || key === 'main_details_image') && this.form.hasOwnProperty(key)) {
          if (this.form[key]) {
            for (var i = 0; i < this.form[key].length; i++) {
              form_data.append(key, this.form[key][i]);
            }
          }
        } else if (key === 'images') {
          for (var _i = 0; _i < this.form[key].length; _i++) {
            form_data.append(key + '[]', this.form[key][_i]);
          }
        } else if (key === 'imagesDesc') {
          for (var _i2 = 0; _i2 < this.form[key].length; _i2++) {
            form_data.append(key + '[]', this.form[key][_i2]);
          }
        } else if (key === 'has_pool' || key === 'has_garden' || key === 'view_in_home') {
          form_data.append(key, this.form[key] ? 1 : 0);
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('property/create', form_data).then(function (response) {
        _this5.is_requesting = false;

        _this5.$vs.loading.close("#".concat(clicked_button_id, " > .con-vs-loading"));

        _this5.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });

        if (clicked_button_id === 'btn-create-1') {
          _this5.$router.push("/dashboard/property/".concat(response.data.data.data.id));
        } else {
          _this5.reset_form();
        }
      }).catch(function (error) {
        console.log(error);
        _this5.is_requesting = false;

        _this5.$vs.loading.close("#btn-create > .con-vs-loading");

        _this5.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    reset_form: function reset_form() {
      this.form = {
        name: '',
        property_type: '',
        title: '',
        information: '',
        image: null,
        images: [],
        has_pool: false,
        has_garden: false,
        no_of_rooms: 1,
        no_of_baths: 1,
        no_of_floors: 1,
        price: 0,
        dinner_price: 0,
        lunch_price: 0,
        address_desc: '',
        address: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centerx li {\n  display: inline-flex;\n}[dir] .centerx li {\n  margin: 10px;\n}\n.image-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 6px;\n  position: relative;\n}\n[dir=ltr] .image-preview {\n  padding-right: 20px;\n}\n[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n.img-upload {\n  display: none;\n}\n.image-container {\n  width: 100px;\n  height: 100px;\n}\n[dir] .image-container {\n  background-color: white;\n  border: 1px solid #DDD;\n  border-radius: 5px;\n  padding: 5px;\n}\nimg.preview {\n  width: 100px;\n  height: 100px;\n}\n[dir] img.preview {\n  background-color: white;\n  border: 1px solid #DDD;\n  border-radius: 5px;\n  padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=template&id=1453815c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/property/create.vue?vue&type=template&id=1453815c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
          "vx-card",
          { ref: "create", attrs: { title: "Add New Property" } },
          [
            _c(
              "vs-row",
              [
                _c(
                  "vs-col",
                  {
                    staticClass: "mb-3",
                    attrs: {
                      "vs-lg": "6",
                      "vs-sm": "12",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "preview",
                      attrs: {
                        alt: "uploaded photo",
                        src: _vm.uploadedHomeImage
                          ? _vm.uploadedHomeImage
                          : "/images/avatar-s-11.jpg"
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "img-upload",
                      attrs: {
                        id: "main-home-img",
                        type: "file",
                        accept: "image/*"
                      },
                      on: { change: _vm.previewHomeImage }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "mb-3",
                    attrs: {
                      "vs-lg": "6",
                      "vs-sm": "12",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "preview",
                      attrs: {
                        alt: "uploaded photo",
                        src: _vm.uploadedDetailImage
                          ? _vm.uploadedDetailImage
                          : "/images/avatar-s-11.jpg"
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "img-upload",
                      attrs: {
                        id: "main-detail-img",
                        type: "file",
                        accept: "image/*"
                      },
                      on: { change: _vm.previewDetailImage }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "mb-10",
                    attrs: {
                      "vs-lg": "6",
                      "vs-sm": "12",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        attrs: {
                          size: "small",
                          "icon-pack": "feather",
                          icon: "icon-upload",
                          onclick:
                            "document.getElementById('main-home-img').click()"
                        }
                      },
                      [_vm._v("Upload Main Home Photo\n                    ")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "mb-10",
                    attrs: {
                      "vs-lg": "6",
                      "vs-sm": "12",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        attrs: {
                          size: "small",
                          "icon-pack": "feather",
                          icon: "icon-upload",
                          onclick:
                            "document.getElementById('main-detail-img').click()"
                        }
                      },
                      [_vm._v("Upload Main Detail Photo\n                    ")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-divider"),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticStyle: { "text-align": "center" },
                    attrs: { "vs-w": "12" }
                  },
                  [
                    _c(
                      "vs-row",
                      [
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5",
                            attrs: {
                              "vs-w": "12",
                              "vs-type": "flex",
                              "vs-align": "center",
                              "vs-justify": "center"
                            }
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-upload",
                                  onclick:
                                    "document.getElementById('property-images').click()"
                                }
                              },
                              [
                                _vm._v(
                                  "Upload Property\n                                Images\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control img-upload",
                              attrs: {
                                id: "property-images",
                                type: "file",
                                multiple: ""
                              },
                              on: { change: _vm.uploadPropertyImages }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          { attrs: { "vs-w": "12" } },
                          [
                            _vm._l(_vm.selectedImages, function(image, indexx) {
                              return _vm.selectedImages.length > 0
                                ? [
                                    _c("img", {
                                      staticClass: "preview px-2 m-1",
                                      staticStyle: { display: "inline-flex" },
                                      attrs: {
                                        alt: "uploaded photo",
                                        src: image
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("vs-textarea", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        label: "Image description",
                                        name: "information"
                                      },
                                      model: {
                                        value: _vm.form.imagesDesc[indexx],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form.imagesDesc,
                                            indexx,
                                            $$v
                                          )
                                        },
                                        expression: "form.imagesDesc[indexx]"
                                      }
                                    })
                                  ]
                                : [
                                    _c("h5", [
                                      _c("b", [_vm._v("No Images Uploaded!")])
                                    ])
                                  ]
                            })
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br")
                  ],
                  1
                ),
                _vm._v(" "),
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
                            label: "Property Type",
                            autocomplete: "",
                            "label-placeholder": "Property Type",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.property_type_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "property_type_id", $$v)
                            },
                            expression: "form.property_type_id"
                          }
                        },
                        _vm._l(_vm.roles, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.id, text: item.property_type }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "12", "vs-sm": "12", "vs-xs": "12" }
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
                        danger: _vm.errors.has("title"),
                        "danger-text": _vm.errors.first("title"),
                        "val-icon-danger": "clear",
                        "icon-pack": "feather",
                        icon: "icon-home",
                        "label-placeholder": "Title",
                        name: "title"
                      },
                      model: {
                        value: _vm.form.title,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "title", $$v)
                        },
                        expression: "form.title"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                  },
                  [
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      attrs: {
                        counter: "35",
                        danger: _vm.errors.has("information"),
                        "danger-text": _vm.errors.first("information"),
                        "val-icon-danger": "clear",
                        label: "Information",
                        "counter-danger": _vm.counterDanger,
                        name: "information"
                      },
                      on: {
                        "update:counterDanger": function($event) {
                          _vm.counterDanger = $event
                        },
                        "update:counter-danger": function($event) {
                          _vm.counterDanger = $event
                        }
                      },
                      model: {
                        value: _vm.form.information,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "information", $$v)
                        },
                        expression: "form.information"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                  },
                  [
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      attrs: {
                        counter: "350",
                        danger: _vm.errors.has("description"),
                        "danger-text": _vm.errors.first("description"),
                        "val-icon-danger": "clear",
                        label: "Description",
                        "counter-danger": _vm.counterDanger,
                        name: "description"
                      },
                      on: {
                        "update:counterDanger": function($event) {
                          _vm.counterDanger = $event
                        },
                        "update:counter-danger": function($event) {
                          _vm.counterDanger = $event
                        }
                      },
                      model: {
                        value: _vm.form.description,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "description", $$v)
                        },
                        expression: "form.description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
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
                        danger: _vm.errors.has(
                          "https://goo.gl/maps/D67dKEvPJYYwmyA16"
                        ),
                        "danger-text": _vm.errors.first(
                          "https://goo.gl/maps/D67dKEvPJYYwmyA16"
                        ),
                        "val-icon-danger": "clear",
                        "icon-pack": "feather",
                        icon: "icon-map-pin",
                        "label-placeholder":
                          "Location link must be like https://goo.gl/maps/D67dKEvPJYYwmyA16",
                        name: "location"
                      },
                      model: {
                        value: _vm.form.location,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "location", $$v)
                        },
                        expression: "form.location"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
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
                        danger: _vm.errors.has("address"),
                        "danger-text": _vm.errors.first("address"),
                        "val-icon-danger": "clear",
                        "icon-pack": "feather",
                        icon: "icon-map",
                        "label-placeholder": "Address Title",
                        name: "title"
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
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "12", "vs-sm": "12", "vs-xs": "12" }
                  },
                  [
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      attrs: {
                        counter: "350",
                        danger: _vm.errors.has("address_desc"),
                        "danger-text": _vm.errors.first("address_desc"),
                        "val-icon-danger": "clear",
                        label: "Address Description",
                        "counter-danger": _vm.counterDanger,
                        name: "description"
                      },
                      on: {
                        "update:counterDanger": function($event) {
                          _vm.counterDanger = $event
                        },
                        "update:counter-danger": function($event) {
                          _vm.counterDanger = $event
                        }
                      },
                      model: {
                        value: _vm.form.address_desc,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "address_desc", $$v)
                        },
                        expression: "form.address_desc"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-divider"),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "4", "vs-sm": "4", "vs-xs": "4" }
                  },
                  [
                    _c("b", [_vm._v("Has Pool? ")]),
                    _vm._v(" "),
                    _c(
                      "vs-switch",
                      {
                        staticStyle: {
                          display: "inline-flex",
                          "vertical-align": "middle",
                          "margin-left": "10px"
                        },
                        attrs: {
                          "icon-pack": "feather",
                          "vs-icon-on": "icon-check-circle",
                          "vs-icon-off": "icon-slash"
                        },
                        model: {
                          value: _vm.form.has_pool,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "has_pool", $$v)
                          },
                          expression: "form.has_pool"
                        }
                      },
                      [
                        _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                          _vm._v("YES")
                        ]),
                        _vm._v(" "),
                        _c("span", { attrs: { slot: "off" }, slot: "off" }, [
                          _vm._v("NO")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "4", "vs-sm": "4", "vs-xs": "4" }
                  },
                  [
                    _c("b", [_vm._v("Has Garden? ")]),
                    _vm._v(" "),
                    _c(
                      "vs-switch",
                      {
                        staticStyle: {
                          display: "inline-flex",
                          "vertical-align": "middle",
                          "margin-left": "10px"
                        },
                        attrs: {
                          "icon-pack": "feather",
                          "vs-icon-on": "icon-check-circle",
                          "vs-icon-off": "icon-slash"
                        },
                        model: {
                          value: _vm.form.has_garden,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "has_garden", $$v)
                          },
                          expression: "form.has_garden"
                        }
                      },
                      [
                        _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                          _vm._v("YES")
                        ]),
                        _vm._v(" "),
                        _c("span", { attrs: { slot: "off" }, slot: "off" }, [
                          _vm._v("NO")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2 mb-5",
                    attrs: { "vs-lg": "4", "vs-sm": "4", "vs-xs": "4" }
                  },
                  [
                    _c("b", [_vm._v("View in home? ")]),
                    _vm._v(" "),
                    _c(
                      "vs-switch",
                      {
                        staticStyle: {
                          display: "inline-flex",
                          "vertical-align": "middle",
                          "margin-left": "10px"
                        },
                        attrs: {
                          "icon-pack": "feather",
                          "vs-icon-on": "icon-check-circle",
                          "vs-icon-off": "icon-slash"
                        },
                        model: {
                          value: _vm.form.view_in_home,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "view_in_home", $$v)
                          },
                          expression: "form.view_in_home"
                        }
                      },
                      [
                        _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                          _vm._v("YES")
                        ]),
                        _vm._v(" "),
                        _c("span", { attrs: { slot: "off" }, slot: "off" }, [
                          _vm._v("NO")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-divider"),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "3",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      staticStyle: { width: "fit-content" },
                      attrs: { label: "Square Per Meter:" },
                      model: {
                        value: _vm.form.sqm,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "sqm", $$v)
                        },
                        expression: "form.sqm"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "3",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      staticStyle: { width: "fit-content" },
                      attrs: { label: "Rooms:" },
                      model: {
                        value: _vm.form.no_of_rooms,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "no_of_rooms", $$v)
                        },
                        expression: "form.no_of_rooms"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "3",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      attrs: { label: "Bathrooms:" },
                      model: {
                        value: _vm.form.no_of_baths,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "no_of_baths", $$v)
                        },
                        expression: "form.no_of_baths"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "3",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      attrs: { label: "Floors:" },
                      model: {
                        value: _vm.form.no_of_floors,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "no_of_floors", $$v)
                        },
                        expression: "form.no_of_floors"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-divider"),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "4",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      staticStyle: { width: "fit-content" },
                      attrs: { label: "Property Price:" },
                      model: {
                        value: _vm.form.price,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "price", $$v)
                        },
                        expression: "form.price"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "4",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      attrs: { label: "Dinner Price:" },
                      model: {
                        value: _vm.form.dinner_price,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "dinner_price", $$v)
                        },
                        expression: "form.dinner_price"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "px-2",
                    attrs: {
                      "vs-lg": "4",
                      "vs-sm": "6",
                      "vs-xs": "12",
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "center"
                    }
                  },
                  [
                    _c("vs-input-number", {
                      attrs: { label: "Lunch Price:" },
                      model: {
                        value: _vm.form.lunch_price,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "lunch_price", $$v)
                        },
                        expression: "form.lunch_price"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-divider"),
            _vm._v(" "),
            _c(
              "vs-row",
              { attrs: { "vs-justify": "center", "vs-align": "center" } },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "vs-con-loading__container",
                    attrs: {
                      id: "btn-create-1",
                      "icon-pack": "feather",
                      icon: "icon-save"
                    },
                    on: {
                      click: function($event) {
                        _vm.is_requesting
                          ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                          : _vm.create("btn-create-1")
                      }
                    }
                  },
                  [_vm._v("Save & View Details\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "vs-con-loading__container ml-5",
                    attrs: {
                      id: "btn-create-2",
                      "icon-pack": "feather",
                      icon: "icon-save"
                    },
                    on: {
                      click: function($event) {
                        _vm.is_requesting
                          ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                          : _vm.create("btn-create-2")
                      }
                    }
                  },
                  [_vm._v("Save & Create Another\n                ")]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/property/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/property/create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_1453815c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=1453815c& */ "./resources/js/src/views/property/create.vue?vue&type=template&id=1453815c&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/property/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_1453815c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_1453815c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/property/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/property/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/property/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/property/create.vue?vue&type=template&id=1453815c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/property/create.vue?vue&type=template&id=1453815c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1453815c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=1453815c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/property/create.vue?vue&type=template&id=1453815c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1453815c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1453815c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);