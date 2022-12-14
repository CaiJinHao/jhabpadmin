(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["login"],
  {
    "0df9": function (e, t, i) {
      e.exports = i.p + "img/login_bg_small.f9a24ed7.png";
    },
    "17bd": function (e, t, i) {},
    2017: function (e, t, i) {
      "use strict";
      i("f935");
    },
    "426e": function (e, t, i) {},
    "60f5": function (e, t, i) {
      "use strict";
      i("17bd");
    },
    "66b9": function (e, t, i) {
      e.exports = i.p + "img/right-top-arrow.9761ff85.png";
    },
    "8ed4": function (e, t, i) {},
    "9ed6": function (e, t, i) {
      "use strict";
      i.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "login_wrap",
              style: e.isMobile
                ? ""
                : { background: "url(" + e.handleImg() + ") no-repeat" }
            },
            [
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !e.isMobile,
                      expression: "!isMobile"
                    }
                  ],
                  staticClass: "login_logo"
                },
                [i("img", { attrs: { src: e.logoSrc } })]
              ),
              i(
                "div",
                { staticClass: "login_content" },
                [
                  i("h3", [e._v(e._s(e.examInfo.examName))]),
                  i(
                    "div",
                    { staticClass: "exam_time_info" },
                    [
                      i(
                        "el-row",
                        { attrs: { gutter: 10 } },
                        [
                          i("el-col", { attrs: { xs: 24, sm: 10 } }, [
                            i("div", { staticClass: "title" }, [
                              i("i", { staticClass: "icon_date" }),
                              i("span", [e._v("??????????????????")])
                            ]),
                            i("p", [e._v(e._s(e.examInfo.beginDate))])
                          ]),
                          i("el-col", { attrs: { xs: 0, sm: 4 } }, [
                            i("i", { staticClass: "icon_dotted" })
                          ]),
                          i("el-col", { attrs: { xs: 24, sm: 10 } }, [
                            i("div", { staticClass: "title" }, [
                              i("i", { staticClass: "icon_date" }),
                              i("span", [e._v("??????????????????")])
                            ]),
                            i("p", [e._v(e._s(e.examInfo.endDate))])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  i("el-input", {
                    staticClass: "examinee_num_input",
                    attrs: { placeholder: e.placeholder, clearable: "" },
                    model: {
                      value: e.input,
                      callback: function (t) {
                        e.input = t;
                      },
                      expression: "input"
                    }
                  }),
                  i(
                    "div",
                    { staticClass: "btns_info" },
                    [
                      i(
                        "el-button",
                        {
                          class: !0 === e.btnRegister ? "" : "btn_login",
                          attrs: { type: "primary" },
                          on: { click: e.handleToExam }
                        },
                        [e._v("????????????")]
                      ),
                      i(
                        "el-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.btnResultSearch,
                              expression: "btnResultSearch"
                            }
                          ],
                          attrs: { type: "primary", plain: "" },
                          on: { click: e.handleQueryGrades }
                        },
                        [e._v("????????????")]
                      ),
                      i(
                        "el-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.btnRegister,
                              expression: "btnRegister"
                            }
                          ],
                          attrs: { type: "primary", plain: "" },
                          on: { click: e.handleRegister }
                        },
                        [e._v("????????????")]
                      )
                    ],
                    1
                  ),
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.needEquipmenTest && !e.passCameraCheck,
                          expression: "needEquipmenTest && !passCameraCheck"
                        }
                      ],
                      staticClass: "camera_notice"
                    },
                    [
                      i(
                        "div",
                        {
                          class:
                            "device-testing-btn " + e.deviceTestingBtnCloClass,
                          attrs: { id: "device-testing-btn" },
                          on: { click: e.handleShowCamerrDialog }
                        },
                        [
                          i("div", { staticClass: "device-icon" }, [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-shebei" }
                                })
                              ]
                            )
                          ]),
                          e._v(" ???????????? ")
                        ]
                      )
                    ]
                  ),
                  e.deviceTestVis
                    ? i("EquipmentTestDlg", {
                        attrs: {
                          deviceTestingBtnCloClass: e.deviceTestingBtnCloClass,
                          deviceConnectListVis: e.deviceConnectListVis,
                          passCameraCheck: e.passCameraCheck
                        },
                        on: {
                          "update:deviceConnectListVis": function (t) {
                            e.deviceConnectListVis = t;
                          },
                          "update:device-connect-list-vis": function (t) {
                            e.deviceConnectListVis = t;
                          },
                          handlePassCameraCheck: function (t) {
                            return e.handlePassCameraCheck(t);
                          },
                          handleDeviceTestingBtnCloClass: function (t) {
                            return e.handleDeviceTestingBtnCloClass(t);
                          }
                        }
                      })
                    : e._e()
                ],
                1
              ),
              e.isMobile
                ? e._e()
                : i("div", { staticClass: "login_footer" }, [
                    i("p", [e._v(e._s(e.examInfo.welcomeComment))]),
                    i("p", [e._v(e._s(e.examInfo.officeName))])
                  ])
            ]
          );
        },
        s = [],
        n = i("a8d5"),
        c = i("efce"),
        o = i("e8d3"),
        r = i("2dd0"),
        l = i("64b6"),
        d =
          (i("e186"),
          i("4c1e"),
          i("d1ba"),
          i("fee8"),
          i("bbe2"),
          i("51b3"),
          i("89a8"),
          i("d5ee"),
          i("a7a0")),
        h = i("e4a1"),
        m = i("9dba"),
        v = i("ac1a"),
        u = i("1131"),
        g = i("b7c7"),
        p = i("d257"),
        f = i("0df9"),
        b = i.n(f),
        C = i("b1f3"),
        w = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", [
            i(
              "div",
              {
                staticClass: "device-testing-btn",
                attrs: { id: "device-testing-btn" }
              },
              [
                i("div", { staticClass: "device-icon" }, [
                  i(
                    "svg",
                    { staticClass: "icon", attrs: { "aria-hidden": "true" } },
                    [i("use", { attrs: { "xlink:href": "#icon-shebei" } })]
                  )
                ])
              ]
            ),
            i(
              "div",
              {
                staticStyle: { display: "none" },
                attrs: { id: "device-testing-root" }
              },
              [
                i("div", { staticClass: "device-testing-card" }, [
                  i(
                    "div",
                    {
                      staticClass: "device-testing-prepare",
                      attrs: { id: "device-testing-prepare" }
                    },
                    [
                      i("div", { staticClass: "testing-title" }, [
                        e._v("????????????")
                      ]),
                      i("div", { staticClass: "testing-prepare-info" }, [
                        e._v(
                          "???????????????????????????????????????????????????????????????????????????~"
                        )
                      ]),
                      i("div", { staticClass: "device-display" }, [
                        i(
                          "div",
                          {
                            staticClass: "device icon-normal",
                            attrs: { id: "device-camera" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-shiping-xue" }
                                })
                              ]
                            )
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "device icon-normal",
                            attrs: { id: "device-voice" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-shengyin" }
                                })
                              ]
                            )
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "device icon-normal",
                            attrs: { id: "device-mic" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-maikefeng-xue" }
                                })
                              ]
                            )
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "device icon-normal",
                            attrs: { id: "device-network" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-wangluo" }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      e._m(0),
                      i("div", { staticClass: "connect-info" }, [
                        i("div", { attrs: { id: "connect-info" } }),
                        i(
                          "div",
                          {
                            staticClass: "connect-attention-container",
                            staticStyle: { display: "none" },
                            attrs: { id: "connect-attention-container" }
                          },
                          [
                            i(
                              "div",
                              {
                                staticClass: "connect-attention-icon",
                                attrs: { id: "connect-attention-icon" }
                              },
                              [
                                i(
                                  "svg",
                                  {
                                    staticClass: "icon",
                                    attrs: { "aria-hidden": "true" }
                                  },
                                  [
                                    i("use", {
                                      attrs: { "xlink:href": "#icon-warn" }
                                    })
                                  ]
                                )
                              ]
                            ),
                            i("div", {
                              staticClass: "connect-attention-info",
                              staticStyle: { display: "none" },
                              attrs: { id: "connect-attention-info" }
                            })
                          ]
                        )
                      ]),
                      e._m(1)
                    ]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "device-testing",
                      staticStyle: { display: "none" },
                      attrs: { id: "device-testing" }
                    },
                    [
                      i("div", { staticClass: "device-testing-title" }, [
                        i(
                          "div",
                          {
                            staticClass: "testing icon-gray",
                            attrs: { id: "camera-testing" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-shiping-xue" }
                                })
                              ]
                            )
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "testing icon-gray",
                            attrs: { id: "voice-testing" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-shengyin" }
                                })
                              ]
                            )
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "testing icon-gray",
                            attrs: { id: "mic-testing" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-maikefeng-xue" }
                                })
                              ]
                            )
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "testing icon-gray",
                            attrs: { id: "network-testing" }
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: { "aria-hidden": "true" }
                              },
                              [
                                i("use", {
                                  attrs: { "xlink:href": "#icon-wangluo" }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      e._m(2),
                      e._m(3),
                      e._m(4),
                      e._m(5)
                    ]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "device-testing-report",
                      staticStyle: { display: "none" },
                      attrs: { id: "device-testing-report" }
                    },
                    [
                      i("div", { staticClass: "testing-title" }, [
                        e._v("????????????")
                      ]),
                      i("div", { staticClass: "device-report-list" }, [
                        i(
                          "div",
                          { staticClass: "device-report camera-report" },
                          [
                            i("div", { staticClass: "device-info" }, [
                              i("div", { staticClass: "report-icon" }, [
                                i(
                                  "svg",
                                  {
                                    staticClass: "icon",
                                    attrs: { "aria-hidden": "true" }
                                  },
                                  [
                                    i("use", {
                                      attrs: {
                                        "xlink:href": "#icon-shiping-xue"
                                      }
                                    })
                                  ]
                                )
                              ]),
                              i("div", {
                                staticClass: "device-name",
                                attrs: { id: "camera-name" }
                              })
                            ]),
                            i("div", {
                              staticClass: "camera-testing-result",
                              attrs: { id: "camera-testing-result" }
                            })
                          ]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "device-report voice-report",
                            attrs: { id: "voice-report" }
                          },
                          [
                            i("div", { staticClass: "device-info" }, [
                              i("div", { staticClass: "report-icon" }, [
                                i(
                                  "svg",
                                  {
                                    staticClass: "icon",
                                    attrs: { "aria-hidden": "true" }
                                  },
                                  [
                                    i("use", {
                                      attrs: { "xlink:href": "#icon-shengyin" }
                                    })
                                  ]
                                )
                              ]),
                              i("div", {
                                staticClass: "device-name",
                                attrs: { id: "voice-name" }
                              })
                            ]),
                            i("div", {
                              staticClass: "voice-testing-result",
                              attrs: { id: "voice-testing-result" }
                            })
                          ]
                        ),
                        i("div", { staticClass: "device-report mic-report" }, [
                          i("div", { staticClass: "device-info" }, [
                            i("div", { staticClass: "report-icon" }, [
                              i(
                                "svg",
                                {
                                  staticClass: "icon",
                                  attrs: { "aria-hidden": "true" }
                                },
                                [
                                  i("use", {
                                    attrs: {
                                      "xlink:href": "#icon-maikefeng-xue"
                                    }
                                  })
                                ]
                              )
                            ]),
                            i("div", {
                              staticClass: "device-name",
                              attrs: { id: "mic-name" }
                            })
                          ]),
                          i("div", {
                            staticClass: "mic-testing-result",
                            attrs: { id: "mic-testing-result" }
                          })
                        ])
                      ]),
                      e._m(6)
                    ]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "device-testing-close-btn",
                      attrs: { id: "device-testing-close-btn" }
                    },
                    [
                      i(
                        "svg",
                        {
                          staticClass: "icon",
                          attrs: { "aria-hidden": "true" }
                        },
                        [
                          i("use", {
                            attrs: { "xlink:href": "#icon-baseline-close-px" }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ]
            ),
            i(
              "div",
              {
                staticStyle: { "justify-content": "center", display: "none" },
                attrs: { id: "remind-info-container" }
              },
              [
                e._m(7),
                i(
                  "div",
                  {
                    staticClass: "browser-remind",
                    attrs: { id: "browser-remind" }
                  },
                  [
                    i(
                      "div",
                      {
                        staticStyle: { width: "100%", "font-size": "28px" },
                        attrs: { id: "remind-icon" }
                      },
                      [
                        i(
                          "svg",
                          {
                            staticClass: "icon",
                            attrs: { "aria-hidden": "true" }
                          },
                          [i("use", { attrs: { "xlink:href": "#icon-warn" } })]
                        ),
                        i(
                          "span",
                          {
                            staticStyle: {
                              display: "inline-block",
                              "margin-left": "5px"
                            }
                          },
                          [e._v("??????")]
                        )
                      ]
                    ),
                    i("div", {
                      staticClass: "remind-info",
                      attrs: { id: "remind-info" }
                    })
                  ]
                )
              ]
            )
          ]);
        },
        y = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "loading-background",
                attrs: { id: "device-loading" }
              },
              [i("div", { staticClass: "device-loading" })]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "testing-btn-display" }, [
              i(
                "div",
                {
                  staticClass: "test-btn start-test start-gray",
                  attrs: { id: "start-test-btn" }
                },
                [e._v("????????????")]
              ),
              i(
                "div",
                {
                  staticClass: "test-btn connect-again",
                  staticStyle: { display: "none" },
                  attrs: { id: "connect-again-btn" }
                },
                [e._v("????????????")]
              )
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "testing-body",
                staticStyle: { display: "none" },
                attrs: { id: "camera-testing-body" }
              },
              [
                i("div", { staticClass: "device-list camera-device-list" }, [
                  i(
                    "div",
                    {
                      staticClass: "select-title",
                      staticStyle: { display: "block" }
                    },
                    [e._v("???????????????")]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "select-list",
                      staticStyle: { display: "block" }
                    },
                    [
                      i("select", {
                        staticClass: "device-select",
                        attrs: { name: "select", id: "camera-select" }
                      })
                    ]
                  )
                ]),
                i("div", {
                  staticClass: "camera-video",
                  attrs: { id: "camera-video" }
                }),
                i("div", { staticClass: "testing-info-container" }, [
                  i("div", { staticClass: "testing-info" }, [
                    e._v("????????????????????????????????????")
                  ]),
                  i("div", { staticClass: "button-list" }, [
                    i(
                      "div",
                      {
                        staticClass: "fail-button",
                        attrs: { id: "camera-fail" }
                      },
                      [e._v("?????????")]
                    ),
                    i(
                      "div",
                      {
                        staticClass: "success-button",
                        attrs: { id: "camera-success" }
                      },
                      [e._v("????????????")]
                    )
                  ])
                ])
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "testing-body",
                staticStyle: { display: "none" },
                attrs: { id: "voice-testing-body" }
              },
              [
                i("div", { staticClass: "device-list camera-device-list" }, [
                  i(
                    "div",
                    {
                      staticClass: "select-title",
                      staticStyle: { display: "block" }
                    },
                    [e._v("???????????????")]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "select-list",
                      staticStyle: { display: "block" }
                    },
                    [
                      i("select", {
                        staticClass: "device-select",
                        attrs: { name: "select", id: "voice-select" }
                      })
                    ]
                  )
                ]),
                i("div", { staticClass: "audio-control" }, [
                  i("div", { staticClass: "audio-control-info" }, [
                    e._v("?????????????????????, ????????????????????????????????????")
                  ]),
                  i("audio", {
                    attrs: {
                      id: "audio-player",
                      src: "https://trtc-1252463788.cos.ap-guangzhou.myqcloud.com/web/assets/bgm-test.mp3",
                      controls: ""
                    }
                  })
                ]),
                i("div", { staticClass: "testing-info-container" }, [
                  i("div", { staticClass: "testing-info" }, [
                    e._v("???????????????????????????")
                  ]),
                  i("div", { staticClass: "button-list" }, [
                    i(
                      "div",
                      {
                        staticClass: "fail-button",
                        attrs: { id: "voice-fail" }
                      },
                      [e._v("?????????")]
                    ),
                    i(
                      "div",
                      {
                        staticClass: "success-button",
                        attrs: { id: "voice-success" }
                      },
                      [e._v("????????????")]
                    )
                  ])
                ])
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "testing-body",
                staticStyle: { display: "none" },
                attrs: { id: "mic-testing-body" }
              },
              [
                i("div", { staticClass: "device-list camera-device-list" }, [
                  i(
                    "div",
                    {
                      staticClass: "select-title",
                      staticStyle: { display: "block" }
                    },
                    [e._v("???????????????")]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "select-list",
                      staticStyle: { display: "block" }
                    },
                    [
                      i("select", {
                        staticClass: "device-select",
                        attrs: { name: "select", id: "mic-select" }
                      })
                    ]
                  )
                ]),
                i("div", { staticClass: "mic-testing-container" }, [
                  i("div", { staticClass: "mic-testing-info" }, [
                    e._v("??????????????????'??????'?????????")
                  ]),
                  i("div", {
                    staticClass: "mic-bar-container",
                    attrs: { id: "mic-bar-container" }
                  }),
                  i("div", { attrs: { id: "audio-container" } })
                ]),
                i("div", { staticClass: "testing-info-container" }, [
                  i("div", { staticClass: "testing-info" }, [
                    e._v("???????????????????????????????????????")
                  ]),
                  i("div", { staticClass: "button-list" }, [
                    i(
                      "div",
                      { staticClass: "fail-button", attrs: { id: "mic-fail" } },
                      [e._v("?????????")]
                    ),
                    i(
                      "div",
                      {
                        staticClass: "success-button",
                        attrs: { id: "mic-success" }
                      },
                      [e._v("????????????")]
                    )
                  ])
                ])
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "testing-body",
                staticStyle: { display: "none" },
                attrs: { id: "network-testing-body" }
              },
              [
                i("div", { staticClass: "testing-index-list" }, [
                  i("div", { staticClass: "testing-index-group" }, [
                    i("div", { staticClass: "testing-index" }, [
                      e._v("????????????")
                    ]),
                    i("div", { attrs: { id: "system" } })
                  ]),
                  i("div", { staticClass: "testing-index-group" }, [
                    i("div", { staticClass: "testing-index" }, [
                      e._v("???????????????")
                    ]),
                    i("div", { attrs: { id: "browser" } })
                  ]),
                  i("div", { staticClass: "testing-index-group" }, [
                    i("div", { staticClass: "testing-index" }, [
                      e._v("??????????????????")
                    ]),
                    i("div", { attrs: { id: "screen-share" } })
                  ])
                ]),
                i("div", { staticClass: "testing-footer" }, [
                  i(
                    "div",
                    {
                      staticClass: "test-btn",
                      attrs: { id: "testing-report-btn" }
                    },
                    [e._v("??????????????????")]
                  )
                ])
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "device-report-footer" }, [
              i(
                "div",
                {
                  staticClass: "device-report-btn testing-agin",
                  attrs: { id: "testing-again" }
                },
                [e._v("????????????")]
              ),
              i(
                "div",
                {
                  staticClass: "device-report-btn testing-finish",
                  attrs: { id: "testing-finish" }
                },
                [e._v("????????????")]
              )
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              {
                staticClass: "webview-remind",
                attrs: { id: "webview-remind" }
              },
              [
                a("img", {
                  staticClass: "webview-remind-img",
                  attrs: { src: i("66b9"), alt: "right-top-arrow" }
                }),
                a("div", { staticClass: "webview-remind-info" }, [
                  a("span", [e._v("??????????????? ?????? ??????")]),
                  a(
                    "span",
                    {
                      staticStyle: {
                        display: "inline-block",
                        "margin-top": "10px"
                      }
                    },
                    [e._v("?????????safari??????????????????")]
                  )
                ])
              ]
            );
          }
        ],
        x = i("98a4"),
        M =
          (i("1a91"),
          i("10dd"),
          i("b3d9"),
          i("5a05"),
          i("d25d"),
          i("b110"),
          i("fe35"),
          i("acc0"),
          i("d5d2"),
          i("c65b")),
        k = i.n(M),
        T = i("6254"),
        z = i.n(T);
      i("a5db"), i("6df5"), i("87bf"), i("cea3"), i("6370"), i("87d5");
      var S = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry|BB10/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        isSafari: function () {
          return (
            /Safari/.test(navigator.userAgent) &&
            !/Chrome/.test(navigator.userAgent)
          );
        },
        any: function () {
          return (
            S.Android() || S.BlackBerry() || S.iOS() || S.Opera() || S.Windows()
          );
        },
        getOsName: function () {
          var e = "Unknown OS";
          return (
            S.Android() && (e = "Android"),
            S.BlackBerry() && (e = "BlackBerry"),
            S.iOS() && (e = "iOS"),
            S.Opera() && (e = "Opera Mini"),
            S.Windows() && (e = "Windows"),
            { osName: e, type: "mobile" }
          );
        }
      };
      function L() {
        for (
          var e,
            t = "-",
            i = navigator.appVersion,
            a = navigator.userAgent,
            s = t,
            n = [
              { s: "Chrome OS", r: /CrOS/ },
              { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
              { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
              { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
              { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
              { s: "Windows Vista", r: /Windows NT 6.0/ },
              { s: "Windows Server 2003", r: /Windows NT 5.2/ },
              { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
              { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
              { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
              { s: "Windows 98", r: /(Windows 98|Win98)/ },
              { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
              {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
              },
              { s: "Windows CE", r: /Windows CE/ },
              { s: "Windows 3.11", r: /Win16/ },
              { s: "Android", r: /Android/ },
              { s: "Open BSD", r: /OpenBSD/ },
              { s: "Sun OS", r: /SunOS/ },
              { s: "Linux", r: /(Linux|X11)/ },
              { s: "iOS", r: /(iPhone|iPad|iPod)/ },
              { s: "Mac OS X", r: /Mac OS X/ },
              { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
              { s: "QNX", r: /QNX/ },
              { s: "UNIX", r: /UNIX/ },
              { s: "BeOS", r: /BeOS/ },
              { s: "OS/2", r: /OS\/2/ },
              {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
              }
            ],
            c = 0;
          (e = n[c]);
          c++
        )
          if (e.r.test(a)) {
            s = e.s;
            break;
          }
        var o = t;
        switch (
          (/Windows/.test(s) &&
            (/Windows (.*)/.test(s) && (o = /Windows (.*)/.exec(s)[1]),
            (s = "Windows")),
          s)
        ) {
          case "Mac OS X":
            /Mac OS X (10[\.\_\d]+)/.test(a) &&
              (o = /Mac OS X (10[\.\_\d]+)/.exec(a)[1]);
            break;
          case "Android":
            /Android ([\.\_\d]+)/.test(a) &&
              (o = /Android ([\.\_\d]+)/.exec(a)[1]);
            break;
          case "iOS":
            /OS (\d+)_(\d+)_?(\d+)?/.test(a) &&
              ((o = /OS (\d+)_(\d+)_?(\d+)?/.exec(i)),
              (o = o[1] + "." + o[2] + "." + (0 | o[3])));
            break;
        }
        return { osName: s + o, type: "desktop" };
      }
      function _() {
        return S.any() ? S.getOsName() : L();
      }
      function I() {
        var e,
          t = {},
          i = navigator.userAgent.toLowerCase();
        return (
          (e = i.match(/edge\/([\d.]+)/))
            ? (t.edge = e[1])
            : (e = i.match(/rv:([\d.]+)\) like gecko/)) ||
              (e = i.match(/msie ([\d.]+)/))
            ? (t.ie = e[1])
            : (e = i.match(/firefox\/([\d.]+)/))
            ? (t.firefox = e[1])
            : (e = i.match(/chrome\/([\d.]+)/))
            ? (t.chrome = e[1])
            : (e = i.match(/opera.([\d.]+)/))
            ? (t.opera = e[1])
            : (e = i.match(/version\/([\d.]+).*safari/)) && (t.safari = e[1]),
          t.edge
            ? { broswer: "Edge", version: t.edge }
            : t.ie
            ? { broswer: "IE", version: t.ie }
            : t.firefox
            ? { broswer: "Firefox", version: t.firefox }
            : t.chrome
            ? { broswer: "Chrome", version: t.chrome }
            : t.opera
            ? { broswer: "Opera", version: t.opera }
            : t.safari
            ? { broswer: "Safari", version: t.safari }
            : { broswer: "", version: "0" }
        );
      }
      var R = {
          name: "test",
          props: ["isTest", "deviceTestingBtnCloClass"],
          data: function () {
            return {
              isSafari: null,
              isFirefox: null,
              noVoiceDevice: null,
              hasCameraDevice: !1,
              hasMicAndVoiceDevice: !1,
              hasCameraConnect: null,
              hasVoiceConnect: null,
              hasMicConnect: null,
              hasNetworkConnect: null,
              cameraTestingResult: {},
              voiceTestingResult: {},
              micTestingResult: {},
              networkTestingResult: {
                uplinkNetworkQualities: [],
                downlinkNetworkQualities: [],
                rttList: [],
                average: {
                  rtt: 0,
                  uplinkNetworkQuality: 0,
                  downlinkNetworkQuality: 0
                }
              },
              completedTestingPageIdList: [],
              curTestingPageId: "",
              localStream: null,
              client: null,
              timeout: null,
              networkQualityNum: 0,
              deviceFailAttention:
                "1. ????????????????????????????????????????????????<br>2. ???????????????????????????????????????????????????<br>3. ???????????????????????????????????????????????????????????????<br>4. ???????????????/????????????????????????????????????<br>5. ???????????????????????????/?????????<br>6. ?????????????????????????????????",
              networkFailAttention:
                "1. ???????????????????????????<br>2. ??????????????????????????????<br>3. ????????????????????????????????????",
              NETWORK_QUALITY: {
                0: "??????",
                1: "??????",
                2: "??????",
                3: "??????",
                4: "???",
                5: "??????",
                6: "??????"
              },
              pageCallbackConfig: {
                "camera-testing-body": "startCameraTesting",
                "voice-testing-body": "startVoiceTesting",
                "mic-testing-body": "startMicTesting",
                "network-testing-body": "startNetworkTesting"
              },
              cameraId: "",
              micId: ""
            };
          },
          created: function () {},
          mounted: function () {
            this.deviceTestingInit(),
              this.init(),
              navigator.mediaDevices &&
                (navigator.mediaDevices.ondevicechange = (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  "camera-testing-body" !==
                                  this.curTestingPageId
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (e.next = 3), this.updateCameraDeviceList()
                                );
                              case 3:
                                return e.abrupt("return");
                              case 4:
                                if (
                                  "voice-testing-body" !== this.curTestingPageId
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (e.next = 7), this.updateVoiceDeviceList()
                                );
                              case 7:
                                return e.abrupt("return");
                              case 8:
                                if (
                                  "mic-testing-body" !== this.curTestingPageId
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 11), this.updateMicDeviceList()
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })());
          },
          methods: {
            init: function () {
              (this.isSafari =
                /Safari/.test(navigator.userAgent) &&
                !/Chrome/.test(navigator.userAgent) &&
                !/CriOS/.test(navigator.userAgent) &&
                !/FxiOS/.test(navigator.userAgent) &&
                !/EdgiOS/.test(navigator.userAgent)),
                (this.isFirefox = /Firefox/i.test(navigator.userAgent)),
                (this.noVoiceDevice = this.isSafari || this.isFirefox),
                this.noVoiceDevice && this.hideVoiceTesting();
            },
            showNotSupportRemindInfo: function () {
              var e = _().type;
              switch ((k()("#remind-info-container").show(), e)) {
                case "desktop":
                  this.showDesktopRemindInfo();
                  break;
                case "mobile":
                  this.showMobileRemindInfo();
                  break;
                default:
                  break;
              }
            },
            showDesktopRemindInfo: function () {
              var e = _().osName;
              k()("#browser-remind").show(),
                e.indexOf("Mac OS") > -1
                  ? k()("#remind-info").text(
                      "?????????chrome??????safari?????????????????????"
                    )
                  : k()("#remind-info").text("?????????chrome?????????????????????");
            },
            showMobileRemindInfo: function () {
              var e = _().osName;
              if ("iOS" === e) {
                var t = /MicroMessenger/.test(navigator.userAgent),
                  i = /QQ/.test(navigator.userAgent);
                if (t || i) return void k()("#webview-remind").show();
                this.isSafari ||
                  (k()("#browser-remind").show(),
                  k()("#remind-info").text(
                    "????????????????????????webRTC, ?????????safari?????????????????????"
                  ));
              }
            },
            hideVoiceTesting: function () {
              k()("#connect-voice").hide(),
                k()("#device-voice").hide(),
                k()("#voice-testing").hide(),
                k()("#voice-report").hide(),
                k()("#device-mic").addClass("noVoiceDevice"),
                k()("#device-network").addClass("noVoiceDevice"),
                k()("#mic-testing").addClass("noVoiceDevice"),
                k()("#network-testing").addClass("noVoiceDevice");
            },
            deviceTestingInit: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (void 0 !== navigator.mediaDevices) {
                            t.next = 3;
                            break;
                          }
                          return (
                            e.showNotSupportRemindInfo(), t.abrupt("return")
                          );
                        case 3:
                          return (
                            (i = e),
                            k()("#device-testing-btn, #connect-again-btn").on(
                              "click",
                              function () {
                                e.startDeviceConnect();
                              }
                            ),
                            k()("#connect-attention-icon").on(
                              "mouseover",
                              function () {
                                k()("#connect-attention-info").show();
                              }
                            ),
                            k()("#connect-attention-icon").on(
                              "mouseout",
                              function () {
                                k()("#connect-attention-info").hide();
                              }
                            ),
                            k()("#start-test-btn").on("click", function () {
                              k()(e).hasClass("start-gray") ||
                                (k()("#device-testing-prepare").hide(),
                                k()("#device-testing").show(),
                                e.startCameraTesting());
                            }),
                            k()("#camera-fail, #camera-success").on(
                              "click",
                              function (t) {
                                (e.cameraTestingResult.statusResult =
                                  "camera-success" === t.target.id),
                                  k()("#camera-testing-body").hide(),
                                  e.localStream.close(),
                                  e.noVoiceDevice
                                    ? e.startMicTesting()
                                    : e.startVoiceTesting();
                              }
                            ),
                            k()("#voice-fail, #voice-success").on(
                              "click",
                              function (t) {
                                (e.voiceTestingResult.statusResult =
                                  "voice-success" === t.target.id),
                                  k()("#voice-testing-body").hide();
                                var i = document.querySelector("#audio-player");
                                i.paused || i.pause(), e.startMicTesting();
                              }
                            ),
                            k()("#mic-fail, #mic-success").on(
                              "click",
                              function (t) {
                                (e.micTestingResult.statusResult =
                                  "mic-success" === t.target.id),
                                  k()("#mic-testing-body").hide(),
                                  e.localStream.close(),
                                  e.startNetworkTesting();
                              }
                            ),
                            k()("#testing-report-btn").on("click", function () {
                              e.showTestingReport(), e.localStream.close();
                            }),
                            k()("#testing-again").on("click", function () {
                              k()("#device-testing-report").hide(),
                                (e.networkTestingResult = {
                                  uplinkNetworkQualities: [],
                                  downlinkNetworkQualities: [],
                                  rttList: [],
                                  average: {
                                    rtt: 0,
                                    uplinkNetworkQuality: 0,
                                    downlinkNetworkQuality: 0
                                  }
                                }),
                                e.startDeviceConnect(),
                                (e.completedTestingPageIdList = []);
                            }),
                            k()(
                              "#testing-finish, #device-testing-close-btn"
                            ).on("click", function () {
                              e.finishDeviceTesting();
                            }),
                            k()("#testing-finish").on("click", function () {
                              i.cameraTestingResult.statusResult &&
                              (i.noVoiceDevice ||
                                i.voiceTestingResult.statusResult) &&
                              i.micTestingResult.statusResult
                                ? e.$emit("handlePassCameraCheck", !0)
                                : k()("#device-testing-btn").css(
                                    "color",
                                    "red"
                                  );
                            }),
                            k()(
                              "#camera-testing, #voice-testing, #mic-testing, #network-testing"
                            ).on("click", function () {
                              var e = k()(this).attr("id") + "-body";
                              if (
                                e !== i.curTestingPageId &&
                                i.completedTestingPageIdList.indexOf(e) > -1
                              ) {
                                k()("#".concat(i.curTestingPageId)).hide(),
                                  i.localStream && i.localStream.close(),
                                  i.client && i.client.leave(),
                                  i.client && i.client.off("network-quality");
                                var t = document.querySelector("#audio-player");
                                t.paused || t.pause(),
                                  k()("#".concat(e)).show();
                                var a = i.pageCallbackConfig;
                                i[a[e]] && i[a[e]]();
                              }
                            }),
                            k()("#camera-select").change(
                              Object(n["a"])(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      while (1)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t = k()(this)
                                                .children("option:selected")
                                                .val()),
                                              localStorage.setItem(
                                                "txy_webRTC_cameraId",
                                                t
                                              ),
                                              (i.cameraTestingResult.device = {
                                                label: k()(this)
                                                  .children("option:selected")
                                                  .text(),
                                                deviceId: k()(this)
                                                  .children("option:selected")
                                                  .val(),
                                                kind: "videoinput"
                                              }),
                                              (e.next = 5),
                                              i.localStream.switchDevice(
                                                "video",
                                                t
                                              )
                                            );
                                          case 5:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    this
                                  );
                                })
                              )
                            ),
                            k()("#voice-select").change(
                              Object(n["a"])(
                                regeneratorRuntime.mark(function e() {
                                  var t, a;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      while (1)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t = k()(this)
                                                .children("option:selected")
                                                .val()),
                                              localStorage.setItem(
                                                "txy_webRTC_voiceId",
                                                t
                                              ),
                                              (i.voiceTestingResult.device = {
                                                label: k()(this)
                                                  .children("option:selected")
                                                  .text(),
                                                deviceId: k()(this)
                                                  .children("option:selected")
                                                  .val(),
                                                kind: "audiooutput"
                                              }),
                                              (a =
                                                document.querySelector(
                                                  "#audio-player"
                                                )),
                                              (e.next = 6),
                                              a.setSinkId(t)
                                            );
                                          case 6:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    this
                                  );
                                })
                              )
                            ),
                            k()("#mic-select").change(
                              Object(n["a"])(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      while (1)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t = k()(this)
                                                .children("option:selected")
                                                .val()),
                                              localStorage.setItem(
                                                "txy_webRTC_micId",
                                                t
                                              ),
                                              (i.micTestingResult.device = {
                                                label: k()(this)
                                                  .children("option:selected")
                                                  .text(),
                                                deviceId: k()(this)
                                                  .children("option:selected")
                                                  .val(),
                                                kind: "audioinput"
                                              }),
                                              (e.next = 5),
                                              i.localStream.switchDevice(
                                                "audio",
                                                t
                                              )
                                            );
                                          case 5:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    this
                                  );
                                })
                              )
                            ),
                            k()("body").on("click", function () {
                              k()("#device-connect-list").hide();
                            }),
                            (t.next = 22),
                            e.getDevicesInfo()
                          );
                        case 22:
                          e.startDeviceConnect();
                        case 23:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            getDevicesInfo: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i, a, s;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), z.a.getCameras();
                        case 2:
                          return (
                            (i = t.sent), (t.next = 5), z.a.getMicrophones()
                          );
                        case 5:
                          return (a = t.sent), (t.next = 8), z.a.getSpeakers();
                        case 8:
                          (s = t.sent),
                            (e.hasCameraDevice = i.length > 0),
                            (e.hasMicDevice = a.length > 0),
                            (e.hasVoiceDevice = s.length > 0),
                            i.forEach(function (t) {
                              t.deviceId.length > 0 &&
                                (e.hasCameraConnect = !0);
                            }),
                            a.forEach(function (t) {
                              t.deviceId.length > 0 && (e.hasMicConnect = !0);
                            }),
                            e.noVoiceDevice
                              ? ((e.hasVoiceDevice = !0),
                                (e.hasVoiceConnect = !0))
                              : (e.hasVoiceConnect = s.length > 0),
                            (e.hasNetworkConnect = !!navigator.onLine);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            deviceDialogInit: function () {
              var e = this;
              localStorage.getItem("txy_device_testing")
                ? (this.showDeviceStatus(),
                  (this.hasCameraConnect && this.hasMicConnect) ||
                    navigator.mediaDevices
                      .getUserMedia({
                        video: this.hasCameraDevice,
                        audio: this.hasMicDevice
                      })
                      .then(function () {
                        e.hasCameraDevice && (e.hasCameraConnect = !0),
                          e.hasMicDevice && (e.hasMicConnect = !0),
                          e.getDevicesList(),
                          e.showDeviceStatus();
                      })
                      .catch(function (t) {
                        console.log("getUserMedia err", t.name, t.message),
                          e.handleGetUserMediaError(t);
                      }))
                : (localStorage.setItem("txy_device_testing", Date.now()),
                  this.startDeviceConnect());
            },
            showDeviceStatus: function () {
              k()("#connect-camera").css(
                "color",
                "".concat(this.hasCameraConnect ? "green" : "red")
              ),
                k()("#connect-voice").css(
                  "color",
                  "".concat(this.hasVoiceConnect ? "green" : "red")
                ),
                k()("#connect-mic").css(
                  "color",
                  "".concat(this.hasMicConnect ? "green" : "red")
                ),
                k()("#connect-network").css(
                  "color",
                  "".concat(this.hasNetworkConnect ? "green" : "red")
                ),
                this.hasCameraConnect &&
                this.hasVoiceConnect &&
                this.hasMicConnect &&
                this.hasNetworkConnect
                  ? k()("#device-testing-btn").css("color", "green")
                  : k()("#device-testing-btn").css("color", "red");
            },
            getDeviceConnectInfo: function () {
              var e = "????????????????????????";
              return this.hasCameraDevice &&
                this.hasMicDevice &&
                this.hasVoiceDevice
                ? this.hasCameraConnect && this.hasMicConnect
                  ? (this.hasNetworkConnect ||
                      ((e = "??????????????????????????????????????????"),
                      k()("#connect-attention-container").show(),
                      k()("#connect-attention-info").html(
                        this.networkFailAttention
                      )),
                    e)
                  : ((e = this.hasNetworkConnect
                      ? "??????????????????????????????????????????/???????????????"
                      : "??????????????????????????????????????????/???????????????????????????????????????"),
                    k()("#connect-attention-container").show(),
                    k()("#connect-attention-info").html(
                      this.deviceFailAttention
                    ),
                    e)
                : ((e = "????????????"
                    .concat(this.hasCameraDevice ? "" : "???????????????")
                    .concat(this.hasVoiceDevice ? "" : "???????????????")
                    .concat(
                      this.hasMicDevice ? "" : "???????????????",
                      "??????????????????????????????"
                    )),
                  e);
            },
            startDeviceConnect: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e.getDevicesInfo();
                        case 2:
                          k()("#device-testing-root").show(),
                            k()("#device-testing-prepare").show(),
                            (e.curTestingPageId = "device-testing-prepare"),
                            e.initTestingTabTitle(),
                            e.showDeviceConnectInfo(),
                            (e.hasCameraConnect && e.hasMicConnect) ||
                              navigator.mediaDevices
                                .getUserMedia({
                                  video: e.hasCameraDevice,
                                  audio: e.hasMicDevice
                                })
                                .then(function () {
                                  e.hasCameraDevice &&
                                    (e.hasCameraConnect = !0),
                                    e.hasMicDevice && (e.hasMicConnect = !0),
                                    e.getDevicesList(),
                                    e.showDeviceConnectInfo();
                                })
                                .catch(function (t) {
                                  e.$emit("handlePassCameraCheck", !1),
                                    console.log(
                                      "getUserMedia err",
                                      t.name,
                                      t.message
                                    ),
                                    e.handleGetUserMediaError(t);
                                });
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            showDeviceConnectInfo: function () {
              var e = this;
              this.hasCameraConnect &&
              this.hasVoiceConnect &&
              this.hasMicConnect &&
              this.hasNetworkConnect
                ? k()("#device-testing-btn").css("color", "green")
                : k()("#device-testing-btn").css("color", "red"),
                k()("#connect-attention-container").hide(),
                k()("#device-loading").show(),
                k()("#connect-info")
                  .text("?????????????????????????????????")
                  .css("color", "#cccccc"),
                k()(
                  "#device-camera, #device-voice, #device-mic, #device-network"
                ).removeClass("connect-success connect-fail"),
                k()("#connect-again-btn").hide(),
                k()("#start-test-btn").addClass("start-gray").show(),
                setTimeout(function () {
                  k()("#device-loading").hide(),
                    k()("#device-camera")
                      .removeClass("connect-success connect-fail")
                      .addClass(
                        "".concat(
                          e.hasCameraConnect
                            ? "connect-success"
                            : "connect-fail"
                        )
                      ),
                    k()("#device-voice")
                      .removeClass("connect-success connect-fail")
                      .addClass(
                        "".concat(
                          e.hasVoiceConnect ? "connect-success" : "connect-fail"
                        )
                      ),
                    k()("#device-mic")
                      .removeClass("connect-success connect-fail")
                      .addClass(
                        "".concat(
                          e.hasMicConnect ? "connect-success" : "connect-fail"
                        )
                      ),
                    k()("#device-network")
                      .removeClass("connect-success connect-fail")
                      .addClass(
                        "".concat(
                          e.hasNetworkConnect
                            ? "connect-success"
                            : "connect-fail"
                        )
                      );
                  var t = "",
                    i =
                      e.hasCameraConnect &&
                      e.hasVoiceConnect &&
                      e.hasMicConnect &&
                      e.hasNetworkConnect;
                  i
                    ? (k()("#connect-info")
                        .text("???????????????????????????????????????????????????")
                        .css("color", "#32CD32"),
                      k()("#connect-again-btn").hide(),
                      k()("#start-test-btn").removeClass("start-gray").show())
                    : ((t = e.getDeviceConnectInfo()),
                      k()("#connect-info").text(t).css("color", "red"),
                      k()("#start-test-btn").hide(),
                      k()("#connect-again-btn").show());
                }, 2e3);
            },
            getDevicesList: function () {
              var e = this;
              z.a.getCameras().then(function (t) {
                k()("#camera-option").empty(),
                  t.forEach(function (t) {
                    e.cameraId || (e.cameraId = t.deviceId);
                    var i = k()("<div></div>");
                    i.attr("id", t.deviceId),
                      i.html(t.label),
                      i.appendTo("#camera-option");
                  });
              }),
                z.a.getMicrophones().then(function (t) {
                  k()("#mic-option").empty(),
                    t.forEach(function (t) {
                      e.micId || (e.micId = t.deviceId);
                      var i = k()("<div></div>");
                      i.attr("id", t.deviceId),
                        i.html(t.label),
                        i.appendTo("#mic-option");
                    });
                });
            },
            updateCameraDeviceList: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i, a;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), z.a.getCameras();
                        case 2:
                          (i = t.sent),
                            k()("#camera-select").empty(),
                            i.forEach(function (e) {
                              var t = k()("<option></option>");
                              t.attr("value", e.deviceId),
                                t.html(e.label),
                                t.appendTo("#camera-select");
                            }),
                            (a = i.filter(function (e) {
                              return (
                                e.deviceId ===
                                localStorage.getItem("txy_webRTC_cameraId")
                              );
                            })),
                            a.length > 0
                              ? (k()("#camera-select").val(
                                  localStorage.getItem("txy_webRTC_cameraId")
                                ),
                                (e.cameraTestingResult.device = a[0]))
                              : (k()("#camera-select").val(i[0].deviceId),
                                (e.cameraTestingResult.device = i[0]));
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            startCameraTesting: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            k()("#camera-testing-body").show(),
                            (e.curTestingPageId = "camera-testing-body"),
                            k()("#camera-testing")
                              .removeClass("icon-normal")
                              .addClass("icon-blue complete"),
                            e.completedTestingPageIdList.push(
                              "camera-testing-body"
                            ),
                            (e.completedTestingPageIdList = Object(x["a"])(
                              new Set(e.completedTestingPageIdList)
                            )),
                            (t.next = 7),
                            e.updateCameraDeviceList()
                          );
                        case 7:
                          return (
                            (t.next = 9),
                            e.createLocalStream(
                              {
                                audio: !1,
                                video: !0,
                                cameraId: e.cameraTestingResult.device.deviceId
                              },
                              "camera-video"
                            )
                          );
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            updateVoiceDeviceList: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i, a;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), z.a.getSpeakers();
                        case 2:
                          (i = t.sent),
                            k()("#voice-select").empty(),
                            i.forEach(function (e) {
                              var t = k()("<option></option>");
                              t.attr("value", e.deviceId),
                                t.html(e.label),
                                t.appendTo("#voice-select");
                            }),
                            (a = i.filter(function (e) {
                              return (
                                e.deviceId ===
                                localStorage.getItem("txy_webRTC_voiceId")
                              );
                            })),
                            a.length > 0
                              ? (k()("#voice-select").val(
                                  localStorage.getItem("txy_webRTC_voiceId")
                                ),
                                (e.voiceTestingResult.device = a[0]))
                              : (k()("#voice-select").val(i[0].deviceId),
                                (e.voiceTestingResult.device = i[0]));
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            startVoiceTesting: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            k()("#voice-testing-body").show(),
                            (e.curTestingPageId = "voice-testing-body"),
                            k()("#voice-testing")
                              .removeClass("icon-gray")
                              .addClass("icon-blue complete"),
                            e.completedTestingPageIdList.push(
                              "voice-testing-body"
                            ),
                            (e.completedTestingPageIdList = Object(x["a"])(
                              new Set(e.completedTestingPageIdList)
                            )),
                            (t.next = 7),
                            e.updateVoiceDeviceList()
                          );
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            updateMicDeviceList: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i, a;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), z.a.getMicrophones();
                        case 2:
                          (i = t.sent),
                            k()("#mic-select").empty(),
                            i.forEach(function (e) {
                              var t = k()("<option></option>");
                              t.attr("value", e.deviceId),
                                t.html(e.label),
                                t.appendTo("#mic-select");
                            }),
                            (a = i.filter(function (e) {
                              return (
                                e.deviceId ===
                                localStorage.getItem("txy_webRTC_micId")
                              );
                            })),
                            a.length > 0
                              ? (k()("#mic-select").val(
                                  localStorage.getItem("txy_webRTC_micId")
                                ),
                                (e.micTestingResult.device = a[0]))
                              : (k()("#mic-select").val(i[0].deviceId),
                                (e.micTestingResult.device = i[0]));
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            startMicTesting: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            k()("#mic-testing-body").show(),
                            (e.curTestingPageId = "mic-testing-body"),
                            k()("#mic-testing")
                              .removeClass("icon-gray")
                              .addClass("icon-blue complete"),
                            e.completedTestingPageIdList.push(
                              "mic-testing-body"
                            ),
                            (e.completedTestingPageIdList = Object(x["a"])(
                              new Set(e.completedTestingPageIdList)
                            )),
                            (t.next = 7),
                            e.updateMicDeviceList()
                          );
                        case 7:
                          if (0 === k()("#mic-bar-container").children().length)
                            for (i = 0; i < 28; i++)
                              k()("<div></div>")
                                .addClass("mic-bar")
                                .appendTo("#mic-bar-container");
                          return (
                            (t.next = 10),
                            e.createLocalStream(
                              {
                                audio: !0,
                                microphoneId:
                                  e.micTestingResult.device.deviceId,
                                video: !1
                              },
                              "audio-container"
                            )
                          );
                        case 10:
                          setInterval(function () {
                            var t = e.localStream.getAudioLevel(),
                              i = Math.ceil(28 * t);
                            k()("#mic-bar-container")
                              .children(".active")
                              .removeClass("active");
                            for (var a = 0; a < i; a++)
                              k()("#mic-bar-container")
                                .children()
                                .slice(0, a)
                                .addClass("active");
                          }, 100);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            startNetworkTesting: function () {
              var e = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function t() {
                  var i, a, s;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          k()("#network-testing-body").show(),
                            k()("#testing-report-btn").hide(),
                            (e.curTestingPageId = "network-testing-body"),
                            k()("#network-testing")
                              .removeClass("icon-gray")
                              .addClass("icon-blue complete"),
                            e.completedTestingPageIdList.push(
                              "network-testing-body"
                            ),
                            (e.completedTestingPageIdList = Object(x["a"])(
                              new Set(e.completedTestingPageIdList)
                            )),
                            (e.networkQualityNum = 0),
                            k()("#system").empty(),
                            (i = _()),
                            k()("<div></div>")
                              .text(i.osName)
                              .appendTo("#system"),
                            k()("#browser").empty(),
                            (a = I()),
                            k()("<div></div>")
                              .text("".concat(a.broswer, " ").concat(a.version))
                              .appendTo("#browser"),
                            k()("#screen-share").empty(),
                            (s = z.a.isScreenShareSupported()),
                            k()("<div></div>")
                              .text(s ? "??????" : "?????????")
                              .appendTo("#screen-share"),
                            k()("#testing-report-btn").show();
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            showTestingReport: function () {
              k()("#device-testing").hide(),
                k()("#network-testing-body").hide(),
                k()("#device-testing-report").show(),
                (this.curTestingPageId = "device-testing-report"),
                k()("#camera-name").text(this.cameraTestingResult.device.label),
                this.cameraTestingResult.statusResult
                  ? k()("#camera-testing-result")
                      .text("??????")
                      .css("color", "green")
                  : k()("#camera-testing-result")
                      .text("??????")
                      .css("color", "red"),
                this.noVoiceDevice ||
                  (k()("#voice-name").text(
                    this.voiceTestingResult.device.label
                  ),
                  this.voiceTestingResult.statusResult
                    ? k()("#voice-testing-result")
                        .text("??????")
                        .css("color", "green")
                    : k()("#voice-testing-result")
                        .text("??????")
                        .css("color", "red")),
                k()("#mic-name").text(this.micTestingResult.device.label),
                this.micTestingResult.statusResult
                  ? k()("#mic-testing-result")
                      .text("??????")
                      .css("color", "green")
                  : k()("#mic-testing-result").text("??????").css("color", "red"),
                k()("#network-name").text("????????????"),
                k()("#network-testing-result")
                  .html(
                    "".concat(
                      this.NETWORK_QUALITY[
                        String(this.networkTestingResult.upLinkNetwork)
                      ]
                    )
                  )
                  .css(
                    "color",
                    "".concat(
                      Number(this.networkTestingResult.upLinkNetwork) > 3
                        ? "red"
                        : "green"
                    )
                  );
            },
            finishDeviceTesting: function () {
              k()("#device-testing-root").hide(),
                k()("#device-testing").hide(),
                k()("#".concat(this.curTestingPageId)).hide(),
                (this.curTestingPageId = ""),
                (this.completedTestingPageIdList = []);
              var e = document.querySelector("#audio-player");
              e.paused || e.pause(), (e.currentTime = 0);
            },
            initTestingTabTitle: function () {
              ["camera", "voice", "mic", "network"].forEach(function (e) {
                k()("#".concat(e, "-testing"))
                  .removeClass("icon-blue complete")
                  .addClass("icon-gray");
              });
            },
            createLocalStream: function (e, t) {
              var i = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function a() {
                  return regeneratorRuntime.wrap(
                    function (a) {
                      while (1)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (i.localStream = z.a.createStream(e)),
                              (a.prev = 1),
                              (a.next = 4),
                              i.localStream.initialize()
                            );
                          case 4:
                            a.next = 9;
                            break;
                          case 6:
                            (a.prev = 6),
                              (a.t0 = a["catch"](1)),
                              i.handleGetUserMediaError(a.t0);
                          case 9:
                            t && i.localStream.play(t);
                          case 10:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 6]]
                  );
                })
              )();
            },
            handleGetUserMediaError: function (e) {
              switch (e.name) {
                case "NotReadableError":
                  return void alert(
                    "???????????????????????????/?????????????????????????????????????????????????????????/?????????????????????????????????????????????????????????/?????????"
                  );
                case "NotAllowedError":
                  return void alert("??????/????????????????????????????????????????????????");
                case "NotFoundError":
                  return void alert("????????????????????????????????????");
                case "OverConstrainedError":
                  return void alert(
                    "????????????????????????????????????????????? cameraId/microphoneId???????????????????????????????????????????????????"
                  );
                default:
                  alert("???????????????????????????????????????, ?????????");
              }
            }
          }
        },
        D = R,
        O = (i("60f5"), i("a7b67"), i("cba8")),
        V = Object(O["a"])(D, w, y, !1, null, "1ce561c6", null),
        B = V.exports,
        N = (function (e) {
          Object(r["a"])(i, e);
          var t = Object(l["a"])(i);
          function i() {
            var e;
            return (
              Object(c["a"])(this, i),
              (e = t.apply(this, arguments)),
              (e.input = ""),
              (e.examId = ""),
              (e.examInfo = ""),
              (e.btnResultSearch = !1),
              (e.btnRegister = !1),
              (e.passCameraCheck = !1),
              (e.deviceTestVis = !1),
              (e.connectVoiceVis = !1),
              (e.deviceConnectListVis = !1),
              (e.connectCameraColClass = ""),
              (e.deviceTestingBtnCloClass = ""),
              (e.getTokenParams = { username: "", password: "" }),
              (e.placeholder = "?????????????????????"),
              (e.bgImage = b.a),
              (e.logoSrc = ""),
              (e.shenGangAoExam = !1),
              e
            );
          }
          return (
            Object(o["a"])(i, [
              {
                key: "inputTrimValue",
                get: function () {
                  return this.input.replace(/(^\s*)|(\s*$)/g, "");
                }
              },
              {
                key: "examConfigData",
                get: function () {
                  return m["a"].examInfoConfig
                    ? m["a"].examInfoConfig
                    : JSON.parse(g["a"].get("examInfoConfig"));
                }
              },
              {
                key: "checkUserAgent",
                value: function () {
                  var e = window.navigator.userAgent.toLowerCase();
                  return e.indexOf("micromessenger") > -1 && !this.isMobile
                    ? this.$message.warning(
                        "???????????????????????????????????????????????????"
                      )
                    : !this.isExamMobile && this.isMobile
                    ? this.$alert(
                        "????????????????????????????????????????????????????????????????????????????????????"
                      )
                    : this.isExamMobile &&
                      this.isMobile &&
                      this.isVideoMonitoring &&
                      e.indexOf("micromessenger") > -1
                    ? this.$alert(
                        "???????????????????????????????????????????????????????????????????????????"
                      )
                    : void 0;
                }
              },
              {
                key: "needEquipmenTest",
                get: function () {
                  if (this.isMobile) {
                    var e = Object(p["c"])(
                        "passMobileVideoDeviceCheck",
                        this.examConfigData
                      ),
                      t = Object(p["c"])(
                        "videoDeviceCheck",
                        this.examConfigData
                      );
                    return t && !e;
                  }
                  return Object(p["c"])(
                    "videoDeviceCheck",
                    this.examConfigData
                  );
                }
              },
              {
                key: "isExamClient",
                get: function () {
                  return Object(p["c"])("examClient", this.examConfigData);
                }
              },
              {
                key: "redo",
                get: function () {
                  return Object(p["c"])("redo", this.examConfigData);
                }
              },
              {
                key: "redoCountVal",
                get: function () {
                  return Object(p["c"])(
                    "redoCount",
                    this.examConfigData,
                    "string"
                  );
                }
              },
              {
                key: "isExamMobile",
                get: function () {
                  return Object(p["c"])("examMobile", this.examConfigData);
                }
              },
              {
                key: "isVideoMonitoring",
                get: function () {
                  return Object(p["c"])("videoMonitoring", this.examConfigData);
                }
              },
              {
                key: "idCardLogin",
                get: function () {
                  return Object(p["c"])("idCardLogin", this.examConfigData);
                }
              },
              {
                key: "admissionNumLogin",
                get: function () {
                  return Object(p["c"])(
                    "admissionNumLogin",
                    this.examConfigData
                  );
                }
              },
              {
                key: "isMobile",
                get: function () {
                  return v["a"].device;
                }
              },
              {
                key: "created",
                value: function () {
                  (this.examId = this.$route.params.id),
                    (this.getTokenParams.password = this.examId),
                    m["a"].SET_EXAMID(this.examId),
                    this.idCardLogin && (this.placeholder = "?????????????????????"),
                    this.admissionNumLogin &&
                      (this.placeholder = "?????????????????????"),
                    this.admissionNumLogin &&
                      this.idCardLogin &&
                      (this.placeholder = "?????????????????????/????????????"),
                    this.fetchData(),
                    this.isExamClient &&
                      void 0 !== window.cefQuery &&
                      Object(p["d"])("1");
                  for (
                    var e = window.navigator.userAgent.toLowerCase(),
                      t = e.split(" "),
                      i = "",
                      a = 0,
                      s = 0;
                    s < t.length;
                    s++
                  )
                    /chrome/i.test(t[s]) && (i = t[s]);
                  (a = i ? Number(i.split("/")[1].split(".")[0]) : 0),
                    ((!this.isMobile && -1 === e.indexOf("chrome")) ||
                      (!this.isMobile && a < 75)) &&
                      this.$confirm(
                        '????????????????????????????????????????????????,??????????????????chrome?????????!<br/><br/> <a style="color: #02a7f0" href="https://www.google.cn/chrome/">chrome?????????????????????</a>',
                        "????????????",
                        {
                          type: "warning",
                          center: !0,
                          showCancelButton: !1,
                          showConfirmButton: !1,
                          showClose: !1,
                          closeOnPressEscape: !1,
                          closeOnClickModal: !1,
                          dangerouslyUseHTMLString: !0
                        }
                      );
                }
              },
              {
                key: "fetchData",
                value: function () {
                  var e = this,
                    t = { examId: this.examId, needToken: !1 };
                  try {
                    m["a"].GetExamInfo(t).then(function (t) {
                      (e.examInfo = t.exam),
                        (e.btnResultSearch = t.exam.publishResult),
                        (e.btnRegister = t.immediateMode),
                        (e.bgImage = t.exam.background),
                        (e.logoSrc = t.exam.logo),
                        (e.shenGangAoExam = t.exam.shenGangAoExam),
                        t.exam &&
                          (g["a"].set("examName", t.exam.examName),
                          g["a"].set(
                            "shenGangAoExam",
                            e.shenGangAoExam.toString()
                          )),
                        t.exam.publishExam ||
                          e.$message({
                            type: "info",
                            message: "???????????????????????????"
                          });
                    });
                  } catch (i) {
                    console.log(i);
                  }
                }
              },
              {
                key: "handleToExam",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t,
                        i,
                        a = this;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    window.navigator.userAgent.toLowerCase()),
                                  !(t.indexOf("micromessenger") > -1) ||
                                    this.isMobile)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.$message.warning(
                                    "???????????????????????????????????????????????????"
                                  )
                                );
                              case 3:
                                if (this.isExamMobile || !this.isMobile) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.$alert(
                                    "????????????????????????????????????????????????????????????????????????????????????"
                                  )
                                );
                              case 5:
                                if (
                                  !(
                                    this.isExamMobile &&
                                    this.isMobile &&
                                    this.isVideoMonitoring &&
                                    t.indexOf("micromessenger") > -1
                                  )
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.$alert(
                                    "???????????????????????????????????????????????????????????????????????????"
                                  )
                                );
                              case 7:
                                if (
                                  !(
                                    !this.needEquipmenTest ||
                                    (this.needEquipmenTest &&
                                      this.passCameraCheck)
                                  )
                                ) {
                                  e.next = 26;
                                  break;
                                }
                                if (
                                  (window.navigator.userAgent,
                                  (i = {
                                    examId: this.examId,
                                    admissionNumber: this.inputTrimValue,
                                    deviceType: this.isMobile ? "mobile" : "pc",
                                    needToken: !1,
                                    browserInfo: "???????????????????????????"
                                  }),
                                  !this.inputTrimValue)
                                ) {
                                  e.next = 23;
                                  break;
                                }
                                return (
                                  (e.prev = 11),
                                  (this.getTokenParams.username =
                                    this.inputTrimValue),
                                  (e.next = 15),
                                  m["a"].getToken(this.getTokenParams)
                                );
                              case 15:
                                m["a"].Login(i).then(function (e) {
                                  e &&
                                    (g["a"].set(
                                      "passwordNumber",
                                      e.passwordNumber
                                    ),
                                    0 === e.examState
                                      ? a.$message({
                                          type: "info",
                                          message: "????????????????????????"
                                        })
                                      : 2 === e.examState
                                      ? a.$message({
                                          type: "info",
                                          message: "?????????????????????"
                                        })
                                      : 3 === e.examState
                                      ? a.$message({
                                          type: "info",
                                          message:
                                            "????????????????????????????????????" +
                                            e.earlyLogOnMins +
                                            "???????????????"
                                        })
                                      : 4 === e.examState &&
                                        a.$message({
                                          type: "info",
                                          message:
                                            "?????????" +
                                            e.delayLogOnMins +
                                            "????????????????????????"
                                        }),
                                    e.state >= 30 &&
                                      (a.redo && a.redoCountVal > 0
                                        ? a.$router.push({ name: "result" })
                                        : a.$message({
                                            type: "info",
                                            message: "?????????????????????????????????"
                                          })),
                                    1 === e.examState &&
                                      e.state < 30 &&
                                      (g["a"].set("conformInfo", "login"),
                                      a.$router.push({ name: "confirm" })));
                                }),
                                  (e.next = 21);
                                break;
                              case 18:
                                (e.prev = 18),
                                  (e.t0 = e["catch"](11)),
                                  console.log(e.t0);
                              case 21:
                                e.next = 24;
                                break;
                              case 23:
                                this.$message({
                                  message: "?????????????????????/???????????????",
                                  type: "warning",
                                  center: !0,
                                  showClose: !0
                                });
                              case 24:
                                e.next = 27;
                                break;
                              case 26:
                                this.$message({
                                  type: "info",
                                  message: "????????????????????????"
                                });
                              case 27:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[11, 18]]
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })()
              },
              {
                key: "handleRegister",
                value: function () {
                  var e = this,
                    t = { examId: this.examId };
                  m["a"].publishExam(t).then(function (t) {
                    !0 === t &&
                      (g["a"].set("conformInfo", "register"),
                      m["a"].SET_EXAMID(e.examId),
                      e.$router.push({ name: "confirm-register" }));
                  });
                }
              },
              {
                key: "handleImg",
                value: function () {
                  var e = this.bgImage ? this.bgImage : b.a;
                  return Object(C["imgUrl"])(e);
                }
              },
              {
                key: "handleDeviceTestingBtnCloClass",
                value: function (e) {
                  this.deviceTestingBtnCloClass = e;
                }
              },
              {
                key: "handlePassCameraCheck",
                value: function (e) {
                  this.passCameraCheck = e;
                }
              },
              {
                key: "handleShowCamerrDialog",
                value: function () {
                  this.deviceTestVis = !0;
                }
              },
              {
                key: "handleQueryGrades",
                value: (function () {
                  var e = Object(n["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t,
                        i = this;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.isExamMobile || !this.isMobile) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  this.$alert(
                                    "????????????????????????????????????????????????????????????????????????"
                                  ),
                                  e.abrupt("return")
                                );
                              case 3:
                                if (!this.inputTrimValue) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (t = {
                                    examId: this.examId,
                                    admissionNumber: this.inputTrimValue
                                  }),
                                  (this.getTokenParams.username =
                                    this.inputTrimValue),
                                  (e.next = 8),
                                  m["a"].getToken(this.getTokenParams)
                                );
                              case 8:
                                m["a"].GetQueryScore(t).then(function (e) {
                                  e &&
                                    (e.state < 30
                                      ? i.$message({
                                          type: "info",
                                          message: "???????????????????????????????????????"
                                        })
                                      : i.$router.push({ name: "result" }));
                                }),
                                  (e.next = 12);
                                break;
                              case 11:
                                this.$message({
                                  message: "?????????????????????/???????????????",
                                  type: "warning",
                                  center: !0,
                                  showClose: !0
                                });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })()
              }
            ]),
            i
          );
        })(h["e"]);
      Object(d["a"])(
        [Object(h["f"])("examConfigData")],
        N.prototype,
        "checkUserAgent",
        null
      ),
        (N = Object(d["a"])(
          [
            Object(h["a"])({
              name: "Login",
              components: { LangSelect: u["a"], EquipmentTestDlg: B }
            })
          ],
          N
        ));
      var E = N,
        A = E,
        P =
          (i("2017"),
          i("edec"),
          Object(O["a"])(A, a, s, !1, null, "28386be0", null));
      t["default"] = P.exports;
    },
    a7b67: function (e, t, i) {
      "use strict";
      i("426e");
    },
    d5d2: function (e, t) {
      !(function (e) {
        var t,
          i,
          a,
          s,
          n,
          c,
          o,
          r =
            '<svg><symbol id="icon-warn" viewBox="0 0 1024 1024"><path d="M510.977205 890.39305c-210.599486 0-381.324822-170.722266-381.324822-381.324822 0-210.599486 170.725336-381.323798 381.324822-381.323798 210.599486 0 381.323798 170.725336 381.323798 381.323798C892.301004 719.671807 721.576691 890.39305 510.977205 890.39305L510.977205 890.39305zM569.299519 323.276754c0-29.189809-29.965475-52.849672-59.181891-52.849672-29.218462 0-58.32129 23.659863-58.32129 52.849672l15.349593 220.394572c0 29.189809 13.426801 52.879348 42.587957 52.879348 29.218462 0 44.216038-23.688515 44.216038-52.879348L569.299519 323.276754 569.299519 323.276754zM511.894088 625.14185c-33.000602 0-59.697637 26.811646-59.697637 59.809177 0 32.999578 26.698059 59.725266 59.697637 59.725266 32.997532 0 59.811224-26.725688 59.811224-59.725266S544.891619 625.14185 511.894088 625.14185L511.894088 625.14185z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M843.307 742.24c0 3.217 2.607 5.824 5.824 5.824s5.824-2.607 5.824-5.824a5.823 5.823 0 0 0-5.824-5.824 5.823 5.823 0 0 0-5.824 5.824zM714.731 874.912c0 6.398 5.186 11.584 11.584 11.584s11.584-5.186 11.584-11.584-5.186-11.584-11.584-11.584-11.584 5.186-11.584 11.584zM541.419 943.2c0 9.614 7.794 17.408 17.408 17.408s17.408-7.794 17.408-17.408-7.794-17.408-17.408-17.408-17.408 7.794-17.408 17.408z m-186.56-9.152c0 12.795 10.373 23.168 23.168 23.168s23.168-10.373 23.168-23.168-10.373-23.168-23.168-23.168-23.168 10.373-23.168 23.168zM189.355 849.12c0 16.012 12.98 28.992 28.992 28.992s28.992-12.98 28.992-28.992-12.98-28.992-28.992-28.992-28.992 12.98-28.992 28.992zM74.731 704.736c0 19.228 15.588 34.816 34.816 34.816s34.816-15.588 34.816-34.816-15.588-34.816-34.816-34.816-34.816 15.588-34.816 34.816z m-43.008-177.28c0 22.41 18.166 40.576 40.576 40.576s40.576-18.166 40.576-40.576-18.166-40.576-40.576-40.576-40.576 18.166-40.576 40.576z m35.392-176.128c0 25.626 20.774 46.4 46.4 46.4s46.4-20.774 46.4-46.4c0-25.626-20.774-46.4-46.4-46.4-25.626 0-46.4 20.774-46.4 46.4z m106.176-142.016c0 28.843 23.381 52.224 52.224 52.224s52.224-23.381 52.224-52.224c0-28.843-23.381-52.224-52.224-52.224-28.843 0-52.224 23.381-52.224 52.224z m155.904-81.344c0 32.024 25.96 57.984 57.984 57.984s57.984-25.96 57.984-57.984-25.96-57.984-57.984-57.984-57.984 25.96-57.984 57.984z m175.104-5.056c0 35.24 28.568 63.808 63.808 63.808s63.808-28.568 63.808-63.808c0-35.24-28.568-63.808-63.808-63.808-35.24 0-63.808 28.568-63.808 63.808z m160.32 72.128c0 38.421 31.147 69.568 69.568 69.568s69.568-31.147 69.568-69.568-31.147-69.568-69.568-69.568-69.568 31.147-69.568 69.568z m113.92 135.488c0 41.638 33.754 75.392 75.392 75.392s75.392-33.754 75.392-75.392-33.754-75.392-75.392-75.392-75.392 33.754-75.392 75.392z m45.312 175.488c0 44.854 36.362 81.216 81.216 81.216s81.216-36.362 81.216-81.216c0-44.854-36.362-81.216-81.216-81.216-44.854 0-81.216 36.362-81.216 81.216z" fill="" ></path></symbol><symbol id="icon-shengyin" viewBox="0 0 1024 1024"><path d="M784 371.2c-16-25.6-35.2-44.8-44.8-54.4-9.6-9.6-28.8-9.6-38.4 3.2-9.6 9.6-9.6 28.8 3.2 38.4 3.2 3.2 6.4 6.4 9.6 9.6 9.6 9.6 19.2 22.4 25.6 35.2 57.6 86.4 57.6 179.2-38.4 278.4-9.6 9.6-9.6 28.8 0 38.4 9.6 9.6 28.8 9.6 38.4 0C851.2 598.4 851.2 476.8 784 371.2z"  ></path><path d="M896 246.4c-16-25.6-35.2-48-54.4-70.4-9.6-12.8-19.2-19.2-25.6-25.6-9.6-9.6-28.8-9.6-38.4 3.2-9.6 9.6-9.6 28.8 3.2 38.4 3.2 3.2 12.8 9.6 22.4 22.4 16 19.2 32 38.4 48 64 105.6 160 105.6 336-70.4 518.4-9.6 9.6-9.6 28.8 0 38.4 9.6 9.6 28.8 9.6 38.4 0C1014.4 630.4 1014.4 425.6 896 246.4z"  ></path><path d="M483.2 86.4l-217.6 185.6-108.8 0c-57.6 0-108.8 48-108.8 108.8l0 272c0 60.8 48 108.8 108.8 108.8l96 0 230.4 182.4c54.4 41.6 105.6 16 105.6-51.2l0-755.2C588.8 67.2 534.4 41.6 483.2 86.4zM534.4 889.6c0 22.4-3.2 22.4-19.2 9.6l-236.8-185.6c-3.2-3.2-9.6-6.4-16-6.4l-105.6 0c-28.8 0-54.4-25.6-54.4-54.4l0-272c0-28.8 25.6-54.4 54.4-54.4l118.4 0c6.4 0 12.8-3.2 16-6.4l224-192c16-12.8 16-12.8 16 6.4L531.2 889.6z"  ></path></symbol><symbol id="icon-wangluo" viewBox="0 0 1024 1024"><path d="M955.392 514.56c0-242.688-196.608-439.296-439.296-439.296C273.408 75.264 76.8 271.872 76.8 514.56c0 242.688 196.608 439.296 439.296 439.296 116.224 0 221.696-45.056 300.032-118.784 5.12-1.536 9.728-4.096 13.312-8.704 3.072-3.072 5.12-6.656 6.656-10.752C909.824 736.768 955.392 631.296 955.392 514.56zM481.792 893.952c-0.512-1.024-1.536-1.536-2.56-2.56-47.104-40.96-85.504-89.6-114.176-143.36 38.4-15.872 79.36-25.6 121.856-28.672l0 174.592C485.376 893.952 483.328 893.952 481.792 893.952zM136.192 542.72l113.152 0c3.072 61.44 16.384 121.344 38.912 177.664-21.504 12.288-41.472 26.112-60.928 41.984C175.616 702.464 142.336 626.176 136.192 542.72zM230.4 262.656c18.944 15.36 38.912 28.672 59.392 40.96-23.552 56.832-37.376 118.272-40.448 180.736L136.704 484.352C143.36 399.872 177.664 323.072 230.4 262.656zM549.376 135.168c1.024 1.024 1.536 2.048 3.072 3.072 45.568 39.424 83.456 86.528 111.616 138.24-37.888 15.36-77.824 24.576-118.784 27.648l0-168.96C546.816 135.168 548.352 135.168 549.376 135.168zM895.488 484.352l-113.152 0c-3.584-62.464-17.408-123.392-40.96-180.736 20.992-11.776 40.96-25.6 59.904-40.96C854.528 323.072 888.832 399.872 895.488 484.352zM486.912 484.352 308.224 484.352c3.072-53.76 15.36-105.984 34.816-155.136 45.568 18.944 94.208 30.208 143.872 33.28L486.912 484.352zM486.912 542.72l0 117.76c-50.688 3.072-99.84 14.848-145.92 33.792-18.432-48.128-29.696-99.328-32.768-151.552L486.912 542.72zM545.28 542.72l178.176 0c-3.072 52.736-14.336 103.936-32.768 152.064-46.08-19.456-95.232-30.72-145.408-34.304L545.28 542.72zM545.28 484.352 545.28 362.496c49.664-3.072 98.304-14.336 143.36-32.768 19.456 49.152 31.232 101.376 34.816 154.624L545.28 484.352zM716.8 250.368c-17.408-31.744-37.376-61.952-60.928-90.112 37.888 14.848 72.704 35.84 103.424 61.44C745.472 232.448 731.136 242.176 716.8 250.368zM486.912 134.656l0 168.96c-40.96-3.072-81.408-12.288-118.784-27.648 28.16-51.712 65.536-98.304 111.104-137.728 1.024-1.024 2.56-2.56 3.584-3.584C483.84 135.168 485.376 135.168 486.912 134.656zM315.392 250.368c-14.848-8.704-28.672-18.432-42.496-28.672 30.72-25.6 65.536-46.08 102.912-60.928C352.768 188.416 332.288 218.624 315.392 250.368zM312.832 774.144c17.408 33.28 38.4 65.024 62.464 94.208-38.912-15.36-74.752-37.376-106.496-64C283.136 793.088 297.984 783.36 312.832 774.144zM545.28 894.464l0-174.592c41.984 3.072 82.944 12.8 121.344 28.672-28.672 53.76-67.072 102.4-114.176 143.36-1.024 1.024-1.536 1.536-2.56 2.56C548.352 893.952 546.816 893.952 545.28 894.464zM718.848 774.656c14.848 9.216 29.696 18.944 43.52 30.208-31.232 26.624-67.072 48.128-105.984 63.488C680.448 839.68 701.44 807.936 718.848 774.656zM743.936 720.896c22.528-56.32 35.84-116.736 38.912-178.176L896 542.72c-6.144 83.968-39.936 160.256-91.648 220.672C784.896 747.52 764.928 733.184 743.936 720.896z"  ></path></symbol><symbol id="icon-maikefeng-xue" viewBox="0 0 1024 1024"><path d="M801.728 364.8a32 32 0 0 0-32 32v91.392c0 129.28-115.648 234.432-257.728 234.432S254.272 617.408 254.272 488.192V393.216a32 32 0 0 0-64 0v94.976c0 157.888 133.248 286.208 300.672 296.448v99.392H357.632c-16.128 0-29.184 14.336-29.184 32.064 0 17.664 13.056 31.936 29.184 31.936h319.04c16.064 0 29.184-14.272 29.184-31.936 0-17.728-13.12-32.064-29.184-32.064H554.944v-101.376c156.992-19.776 278.784-143.488 278.784-294.464V396.8c0-17.728-14.272-32-32-32z"  ></path><path d="M517.12 678.656a199.104 199.104 0 0 0 198.912-198.848V268.736A199.168 199.168 0 0 0 517.12 69.888a199.04 199.04 0 0 0-198.784 198.848v211.072a199.04 199.04 0 0 0 198.784 198.848z m85.056-126.784a49.856 49.856 0 1 1 0-99.648 49.856 49.856 0 0 1 0 99.648zM382.336 268.736c0-74.368 60.48-134.848 134.784-134.848a135.04 135.04 0 0 1 134.912 134.848v28.48H382.336v-28.48z"  ></path></symbol><symbol id="icon-shiping-xue" viewBox="0 0 1024 1024"><path d="M520.896 815.296c197.952 0 358.976-166.08 358.976-370.112s-161.088-370.112-358.976-370.112-358.848 166.016-358.848 370.112 160.96 370.112 358.848 370.112z m0-676.224c162.688 0 294.976 137.344 294.976 306.112 0 168.832-132.288 306.112-294.976 306.112-162.624 0-294.848-137.344-294.848-306.112-0.064-168.768 132.224-306.112 294.848-306.112z"  ></path><path d="M824.256 746.112a32.128 32.128 0 0 0-29.888 56.64c21.888 11.584 27.264 20.736 27.52 22.528-1.92 20.864-106.688 69.824-300.992 69.824-191.488 0-299.072-49.536-300.864-69.824 0.128-1.664 5.056-10.432 26.176-21.888a32 32 0 0 0-30.464-56.256c-49.344 26.688-59.712 57.216-59.712 78.144 0 91.968 189.12 133.824 364.864 133.824 175.808 0 364.992-41.856 364.992-133.824 0-21.248-10.688-52.224-61.632-79.168zM520.96 618.816a173.632 173.632 0 1 0 0.128-347.264 173.632 173.632 0 0 0-0.128 347.264z m-59.968-315.648a70.976 70.976 0 1 1 0 141.952 70.976 70.976 0 0 1 0-141.952z"  ></path></symbol><symbol id="icon-right-b" viewBox="0 0 1024 1024"><path d="M782.2336 271.7696a51.2 51.2 0 1 1 73.9328 70.8608l-392.0896 409.6a51.2 51.2 0 0 1-74.0864-0.1536l-222.3104-234.0864a51.2 51.2 0 0 1 74.24-70.5024l185.344 195.072 354.9696-370.7904z"  ></path></symbol><symbol id="icon-baseline-close-px" viewBox="0 0 1024 1024"><path d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"  ></path></symbol><symbol id="icon-shebei" viewBox="0 0 1024 1024"><path d="M529.2 820.4c-37.4 0-74.8-9.1-104-27.3L240.5 677.7c-10.3-6.4-13.4-20-7-30.3s20-13.4 30.3-7l184.7 115.4c43.7 27.3 117.6 27.3 161.3 0l184.7-115.4c10.3-6.4 23.9-3.3 30.3 7 6.4 10.3 3.3 23.9-7 30.3L633.2 793.1c-29.2 18.2-66.6 27.3-104 27.3z"  ></path><path d="M529.2 662.8c-37.4 0-74.8-9.1-104-27.3L240.5 520.1c-31.3-19.6-48.6-46.7-48.6-76.4s17.3-56.8 48.6-76.4l184.7-115.4c58.3-36.4 149.7-36.5 208 0l184.7 115.4c31.3 19.6 48.6 46.7 48.6 76.4s-17.3 56.8-48.6 76.4L633.2 635.5c-29.2 18.2-66.6 27.3-104 27.3z m0-394.1c-29.4 0-58.8 6.8-80.7 20.5L263.9 404.7c-18 11.2-27.9 25.1-27.9 39s9.9 27.8 27.9 39l184.7 115.4c43.7 27.3 117.6 27.3 161.3 0l184.7-115.4c18-11.2 27.9-25.1 27.9-39s-9.9-27.8-27.9-39L609.9 289.3c-21.9-13.7-51.3-20.6-80.7-20.6z"  ></path></symbol><symbol id="icon-no" viewBox="0 0 1024 1024"><path d="M571.733333 512l226.133334-226.133333c17.066667-17.066667 12.8-42.666667-4.266667-59.733334-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 285.866667 226.133333c-17.066667-17.066667-42.666667-12.8-59.733334 4.266667-17.066667 17.066667-17.066667 42.666667 0 59.733333l226.133334 226.133334-226.133334 226.133333c-17.066667 17.066667-21.333333 42.666667-4.266666 59.733333 17.066667 17.066667 42.666667 21.333333 59.733333 4.266667l4.266667-4.266667 226.133333-226.133333 226.133333 226.133333c17.066667 17.066667 46.933333 12.8 59.733334-4.266666 12.8-17.066667 12.8-38.4 0-55.466667L571.733333 512z"  ></path></symbol><symbol id="icon-yonhu" viewBox="0 0 1024 1024"><path d="M368.071472 533.396309c106.49036 0 193.127556-86.532819 193.127556-192.894242 0-106.361423-86.637196-192.892195-193.127556-192.892195s-193.127556 86.530772-193.127556 192.892195C174.943916 446.864514 261.581112 533.396309 368.071472 533.396309zM368.071472 198.833511c78.246085 0 141.903917 63.552431 141.903917 141.668557 0 78.117149-63.657832 141.670603-141.903917 141.670603s-141.903917-63.553455-141.903917-141.670603C226.167554 262.385942 289.825386 198.833511 368.071472 198.833511zM782.219863 538.397207c50.315966-21.135366 85.73771-70.876234 85.73771-128.72885 0-76.960813-62.683644-139.572826-139.732461-139.572826-77.047794 0-139.731438 62.612013-139.731438 139.572826 0 62.971194 41.96988 116.327402 99.43057 133.647883-44.6315 12.485359-84.175121 39.092343-112.36516 75.757404-56.391335-53.006238-129.938398-82.102926-207.992101-82.102926-80.691787 0-156.566872 31.094182-213.649961 87.555102C96.759229 681.059394 65.280284 756.248863 65.280284 836.240709c0 5.131881 0.132006 10.311857 0.39295 15.397688l1.24741 24.298406 601.292676 0 1.249457-24.296359c0.261966-5.090948 0.394996-10.270924 0.394996-15.399735 0-18.185174-1.644453-36.116569-4.830005-53.641711l293.554826 0 1.245364-24.301476c0.184195-3.605108 0.277316-7.274684 0.277316-10.906397C960.105273 642.693598 883.088178 555.488467 782.219863 538.397207zM639.717312 409.668357c0-48.715515 39.70428-88.348164 88.5078-88.348164s88.508823 39.632649 88.508823 88.348164c0 48.716538-39.705304 88.350211-88.508823 88.350211S639.717312 458.384895 639.717312 409.668357zM116.771005 824.713164c6.118348-131.441635 116.272143-236.519832 250.797-236.519832 134.525879 0 244.678652 105.078197 250.798023 236.519832L116.771005 824.713164zM650.842697 731.37536c-9.827833-26.061562-23.337521-50.705845-40.300868-73.281003C640.439766 613.945857 691.071933 586.572416 746.008126 586.572416c84.33885 0 153.910369 63.61383 162.073282 144.802944L650.842697 731.37536z"  ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M113.575 400.447c61.606 0 111.559 49.951 111.559 111.554s-49.952 111.554-111.559 111.554c-61.606 0-111.559-49.951-111.559-111.554S51.97 400.447 113.575 400.447zM511.999 400.447c61.606 0 111.559 49.951 111.559 111.554s-49.952 111.554-111.559 111.554c-61.606 0-111.559-49.951-111.559-111.554s49.953-111.554 111.559-111.554zM910.422 400.447c61.606 0 111.559 49.951 111.559 111.554s-49.952 111.554-111.559 111.554c-61.605 0-111.559-49.951-111.559-111.554s49.954-111.554 111.559-111.554z"  ></path></symbol><symbol id="icon-zuoyouhuadong" viewBox="0 0 1388 1024"><path d="M483.982824 54.755487H435.259721v139.208866h48.723103z m-295.586826 139.208866h97.446207v-139.208866h-97.446207z m-19.95327 56.147576V0L0 124.35992z m780.961737-193.500324H900.217333v139.208866h48.723103z m12.992828 255.216255a495.583562 495.583562 0 0 0-97.910236 55.219516c-27.377744 19.489241-123.431861 80.741142-142.921102 89.557704a226.446422 226.446422 0 0 0-65.428167 50.579221 469.597908 469.597908 0 0 1-61.251901 46.402956 123.895891 123.895891 0 0 0-14.848946 12.064768 35.730276 35.730276 0 0 0-5.568355-11.136709 38.050423 38.050423 0 0 0-15.777004-5.568355c3.248207-5.568355 6.960443 0 15.777004-12.064768s3.248207-18.561182 6.032385-23.665508a38.050423 38.050423 0 0 0 29.697891-11.136709 134.104541 134.104541 0 0 0 32.482069-28.769832 90.021733 90.021733 0 0 0 10.20865-26.449685c2.784177-19.489241-2.784177-29.697891-13.456857-32.946098-18.097153-5.568355-46.402955 19.953271-46.402955 19.953271a53.827428 53.827428 0 0 0-11.13671 3.248207 106.262768 106.262768 0 0 0-46.402955 6.032384c-8.816562 2.784177-25.521625 29.697891-42.226689 53.827428s-46.402955 51.97131-50.115192 73.316669a662.634202 662.634202 0 0 0-5.104325 130.856334 859.382732 859.382732 0 0 0 22.737448 120.647684c4.640296 32.018039-4.176266 67.748315 0 92.805911 6.496414 75.636817 253.360136 117.399477 260.320579 108.118886s11.600739-6.960443 9.744621-13.920887 4.176266-7.888502 10.67268-20.88133c2.784177-4.640296 3.248207-16.241034 6.960443-22.273418 9.744621-16.241034 96.982177-96.982177 139.208866-142.457073a92.805911 92.805911 0 0 0 19.489241-32.018039c4.640296-11.136709 0 0 4.176266-18.561182a365.655288 365.655288 0 0 0 14.848946-61.715931 37.122364 37.122364 0 0 0-9.280592-29.697891 147.561398 147.561398 0 0 0 25.521626-61.251901 38.514453 38.514453 0 0 0-23.201478-34.338187 221.342097 221.342097 0 0 0 16.705064-46.402956c3.248207-13.920887-11.136709-30.62595-28.305803-46.402955a81.205172 81.205172 0 0 0-68.212344-6.032384s58.931753-43.154748 77.956965-61.251901c6.032384-6.032384 35.730276-23.201478 56.147576-36.658335a117.863506 117.863506 0 0 0 31.08998-25.057596c6.960443-8.816562 10.67268-14.848946 9.280591-21.809389-8.352532-25.521625-20.88133-38.050423-51.97131-32.018039z m136.424688-117.399477h97.446206v-139.208866h-97.446206z m-100.694413 0h65.892197v-139.208866H997.663539z m-677.483147 0h65.892197v-139.208866H320.180391zM1216.221458 0v248.255811l167.978698-124.35992z"  ></path></symbol><symbol id="icon-youhua" viewBox="0 0 1024 1024"><path d="M844.989749 78.649566a1158.271069 1158.271069 0 0 0-589.72289-19.633709c-3.55301-15.466345-7.223771-30.932691-10.771662-46.521907-1.423252-6.307361-4.141765-11.657355-11.483288-12.3741-7.459273-0.716746-11.959412 1.781625-15.978306 7.495111-18.937442 26.652696-36.574502 53.663764-52.67568 81.028086-4.73564 8.088986-1.541003 17.606343 6.865399 21.415333a982.125728 982.125728 0 0 1 82.625405 42.595165c5.682768 3.215116 10.177787 3.568369 15.507302-0.235502 5.447266-3.69124 5.329515-9.635108 3.906263-15.942469-2.841384-12.015727-5.565017-24.036574-8.406401-36.170053a1112.389114 1112.389114 0 0 1 567.708562 18.916963c10.889413 3.209996 25.096334-3.215116 28.526474-13.326348 3.312388-10.111232-4.73564-23.795953-16.101178-27.24657z m-41.740189 551.479395c-7.100901-2.49837-20.242943-2.974494-27.343844-2.257749l-13.966299 37.951678a16.085818 16.085818 0 0 1-20.478445 9.517357 15.921991 15.921991 0 0 1-9.589031-20.345335l23.673082-64.727244a40.342536 40.342536 0 0 0 2.605882-14.514097c0-17.724094-11.242666-33.789434-28.055469-39.856173a43.199279 43.199279 0 0 0-32.673359 1.428371 42.339184 42.339184 0 0 0-22.019447 23.913704 16.085818 16.085818 0 0 1-20.478445 9.517357 15.921991 15.921991 0 0 1-9.589032-20.345335v-0.117751l10.894533-29.74494c2.129758-5.948988 3.312388-11.897976 3.312388-17.724094 0-16.659215-8.759655-29.391688-23.913704-34.864552-10.418409-3.68612-21.307822-3.209996-31.014604 1.663873-9.706783 4.878989-17.283807 13.56697-21.307822 24.512699a49.260899 49.260899 0 0 1-1.064879 2.380619l-24.031455 42.00129a15.93735 15.93735 0 0 1-20.360693 6.660614c-7.459273-3.332867-11.242666-11.775106-8.759655-19.393087l92.091566-282.346556c9.947404-27.487192-0.471004-51.518647-23.555331-59.848255-23.673082-8.570229-46.87516 3.926742-56.464192 30.338816l-157.909287 461.292325a15.921991 15.921991 0 0 1-20.242942 9.87573 15.79912 15.79912 0 0 1-9.942285-20.104713l35.867996-104.94179a222.677488 222.677488 0 0 0-21.661075 7.617982c-44.627651 18.205337-92.920943 88.405446-92.920943 170.027406 0 16.536344 2.012007 33.077808 5.918271 49.138028 28.408722 117.080388 84.755163 180.973135 194.248287 220.593806 109.610875 39.620671 162.404305 1.663874 215.315486-48.068029 40.363014-37.956797 112.810632-219.87706 137.313092-286.744302 5.575257-15.241082-6.737408-36.298043-23.898345-42.487653z"  ></path></symbol><symbol id="icon-youhua1" viewBox="0 0 1049 1024"><path d="M905.811731 113.086565c-194.444725-43.880026-397.680299-37.395005-589.496577 19.443186-11.355961 3.341968-26.119204-3.350874-29.589823-13.656841-3.466661-10.322791 4.875888-24.418037 16.766247-27.919335 199.241443-59.033182 410.309909-65.76462 612.250063-20.188374 3.730891-15.871625 7.441989-31.752157 11.163973-47.623782 1.514128-6.402882 4.306853-11.889369 11.99229-12.70779 7.673562-0.797639 12.366369 1.775389 16.593063 7.631997a1149.980283 1134.454038 0 0 0 54.682785 83.0524c4.894691 8.227752 1.557672 18.015155-7.158956 21.935065-29.769935 13.465844-58.393884 28.060851-85.819394 43.660329-5.883328 3.351864-10.513789 3.660627-16.086374-0.229594-5.561699-3.890221-5.489457-9.945743-3.992152-16.369407a32401.450424 31964.005954 0 0 1 8.694855-37.025874v-0.00198zM104.191747 431.397854c9.181752-24.719873 35.50284-41.32778 65.515234-41.32778 8.584018 0 16.885992 1.405269 24.651588 4.179191 4.215808 1.506211 14.450522 6.782898 24.239904 14.096236 12.456425-26.963355 40.140228-44.699436 70.627643-44.699436a78.739609 78.739609 0 0 1 26.512086 4.597803c16.776143 5.996145 30.638827 17.20762 39.769119 32.000553 19.264064-24.099377 51.225031-34.164865 80.995956-23.552114 19.443186 6.942228 34.582488 20.867258 42.65091 39.204042L556.396491 228.831267c12.447518-33.546349 41.75035-55.221142 74.622764-55.221142 8.910594 0 17.878587 1.585381 26.6348 4.706662 41.53956 14.842414 60.660128 58.923334 44.350098 102.864716L573.606091 605.384036c6.745292 7.480584 16.451546 20.229939 27.372071 40.58754 37.796794 70.504929 11.09371 198.874292-87.65713 270.355982-70.609829 51.093411-135.697545 74.893921-204.852624 74.893921-40.517276 0-82.712958-8.02092-128.922564-24.519969C48.134371 919.78927 28.183506 839.440529 19.010661 761.166045 10.164393 685.850543 100.337153 441.752313 104.191747 431.396864zM52.006778 757.444061c8.655271 73.696474 25.067232 138.006343 138.894037 178.632477 42.539082 15.193731 80.985071 22.575353 117.567593 22.575353 62.56021 0 119.651746-21.138416 185.124425-68.540521 58.969846-42.672682 118.669047-153.097153 77.980566-228.978721-4.389982-8.189157-8.454377-14.833507-12.043751-20.149779l-41.951244 105.875159c-3.307331 8.390051-12.934414 12.538564-21.49864 9.288632-8.544433-3.253891-12.782012-12.689977-9.473692-21.079038l184.304026-465.34896c10.030851-27.03065-0.081149-52.028608-24.602108-60.78779-24.19735-8.618655-48.981549 4.866982-58.910468 31.581941L470.951176 522.487997c-3.173731 7.741846-11.829992 11.880463-20.04191 9.527132-8.18025-2.334528-13.215468-10.363366-11.678579-18.583201l9.141177-48.73909a17.76577 17.52628 0 0 0 0.738261-2.62251c4.177212-11.232257 4.004028-23.03355-0.453248-33.218782-4.388003-10.053613-12.730551-17.704413-23.519457-21.545153-21.578799-7.711167-42.9953 4.230652-51.73172 27.750109l-11.375753 30.60518c-3.134146 8.447449-12.670184 12.806753-21.275974 9.734953s-13.063066-12.41783-9.918034-20.868248l0.019793-0.07917c4.012934-10.873023 3.477546-22.644627-1.496315-33.138623-4.995633-10.513789-13.883466-18.484238-24.976186-22.452639a44.579691 43.977999 0 0 1-15.157115-2.634385c-18.554502 0-35.269288 11.501436-41.628626 28.589311 0 0-22.378417 54.574916-27.283005 66.334644-4.912504 11.761707-12.699873 13.627153-21.001847 10.574156-8.300985-3.052007-11.262936-11.441069-7.523138-21.755942 3.720005-10.303988 14.439636-38.941791 14.439636-38.941791-5.126264-5.219289-15.883501-13.546003-23.24632-16.170492-4.104969-1.464647-8.556308-2.203898-13.277815-2.203898-15.844905 0-29.952027 8.188167-34.307371 19.890497-25.430424 68.537552-89.984731 258.693237-83.390852 314.904006z" fill="#4596FE" ></path></symbol><symbol id="icon-zuohua1" viewBox="0 0 1043 1024"><path d="M120.619327 113.086565c193.722298-43.880026 396.201798-37.395005 587.305544 19.443186 11.313407 3.341968 26.022221-3.350874 29.478986-13.656841 3.453795-10.322791-4.857085-24.418037-16.703901-27.919335-198.499223-59.033182-408.784895-65.76462-609.973922-20.188374-3.718026-15.871625-7.415269-31.752157-11.123399-47.623782-1.50819-6.402882-4.29003-11.889369-11.946767-12.70779-7.645852-0.797639-12.320846 1.775389-16.531706 7.631997a1145.706087 1134.454038 0 0 0-54.478923 83.0524c-4.876878 8.227752-1.552724 18.015155 7.132237 21.935065 29.659097 13.465844 58.177156 28.060851 85.499745 43.660329 5.862546 3.351864 10.475193 3.660627 16.026996-0.229594 5.541907-3.890221 5.469664-9.945743 3.978297-16.369407a32281.022812 31964.005954 0 0 1-8.663187-37.025874v-0.00198zM919.259547 431.397854c-9.148105-24.719873-35.37122-41.32778-65.271786-41.32778-8.55235 0-16.823645 1.405269-24.558564 4.179191-4.200963 1.506211-14.398072 6.782898-24.150838 14.096236-12.409913-26.963355-39.991784-44.699436-70.365391-44.699436a78.185418 78.185418 0 0 0-26.414113 4.597803c-16.713797 5.996145-30.52502 17.20762-39.621665 32.000553-19.190831-24.099377-51.035023-34.164865-80.69412-23.552114-19.370943 6.942228-34.453836 20.867258-42.49158 39.204042L468.735187 228.831267c-12.401006-33.546349-41.593989-55.221142-74.344678-55.221142-8.876947 0-17.813272 1.585381-26.535837 4.706662-41.386168 14.842414-60.435482 58.923334-44.184831 102.864716l127.919083 324.201544c-6.719562 7.480584-16.3892 20.229939-27.26915 40.587539-37.657256 70.504929-11.053135 198.874292 87.331543 270.355982 70.347579 51.093411 135.192835 74.893921 204.090612 74.893921 40.366853 0 82.406174-8.02092 128.443585-24.519968 130.923588-46.91224 150.80023-127.260981 159.938438-205.535466 8.813611-75.314512-81.025645-319.413732-84.864405-329.769181z m51.991002 326.046207c-8.623603 73.696474-24.973217 138.006343-138.377453 178.632477-42.381732 15.193731-80.684224 22.575353-117.130178 22.575353-62.328637 0-119.208393-21.138416-184.436635-68.540521-58.751139-42.672682-118.228663-153.097153-77.690605-228.978721 4.372169-8.189157 8.421719-14.833507 11.998228-20.149779l41.795873 105.875159c3.295455 8.390051 12.884933 12.538564 21.41848 9.288632 8.512765-3.253891 12.73451-12.689977 9.438065-21.079038L354.64811 269.717673c-9.994235-27.03065 0.08016-52.028608 24.509083-60.787789 24.109274-8.618655 48.800447 4.866982 58.69275 31.581941l116.01388 281.975183c3.161856 7.741846 11.786448 11.880463 19.966698 9.527131 8.149572-2.334528 13.166977-10.363366 11.635035-18.583201l-9.10753-48.73909a17.699465 17.52628 0 0 0-0.734302-2.622509c-4.162368-11.232257-3.990173-23.03355 0.451269-33.218783 4.371179-10.053613 12.683049-17.704413 23.43138-21.545152 21.49864-7.711167 42.834981 4.230652 51.539733 27.750108l11.333199 30.60518c3.12326 8.447449 12.623672 12.806753 21.196803 9.734953s13.015564-12.41783 9.882408-20.868248l-0.021772-0.07917c-3.9971-10.873023-3.463692-22.644627 1.492356-33.138623 4.975841-10.513789 13.831016-18.484238 24.883161-22.452639a44.414424 43.977999 0 0 1 15.101696-2.634385c18.484238 0 35.136678 11.501436 41.472265 28.589311 0 0 22.296278 54.574916 27.182063 66.334645 4.894691 11.761707 12.652371 13.627153 20.923667 10.574156 8.270306-3.052007 11.222361-11.441069 7.495429-21.755943-3.70615-10.303988-14.386196-38.941791-14.386196-38.941791 5.106471-5.219289 15.824123-13.546003 23.160222-16.170492 4.089135-1.464647 8.52464-2.203898 13.228333-2.203898 15.786517 0 29.840199 8.188167 34.17971 19.890498 25.33641 68.537552 89.650238 258.693237 83.081099 314.904005z" fill="#4596FE" ></path></symbol><symbol id="icon-shanghua" viewBox="0 0 1024 1024"><path d="M293.918118 0H730.051765C775.981176 0 813.176471 36.683294 813.176471 81.92v860.16c0 45.236706-37.195294 81.92-83.094589 81.92H293.948235C248.018824 1024 210.823529 987.316706 210.823529 942.08V81.92C210.823529 36.683294 248.018824 0 293.918118 0z m0 30.72c-28.702118 0-51.952941 22.919529-51.952942 51.2v860.16c0 28.280471 23.250824 51.2 51.952942 51.2H730.051765c28.702118 0 51.952941-22.919529 51.952941-51.2V81.92c0-28.280471-23.250824-51.2-51.952941-51.2H293.948235z m228.47247 307.2v409.6h-20.781176v-409.6H470.467765L512 266.24l41.562353 71.68h-31.171765zM231.604706 892.235294h10.179765c0 25.901176 17.769412 38.761412 56.109176 38.761412h428.363294c31.804235 0 50.055529-13.221647 56.259765-40.116706l9.878588 2.710588c-7.408941 32.165647-29.936941 48.489412-66.138353 48.489412H297.893647c-43.279059 0-66.288941-16.655059-66.288941-49.844706z m0-760.470588c0-33.189647 23.009882-49.844706 66.258823-49.844706h428.393412c36.201412 0 58.729412 16.323765 66.138353 48.489412l-9.878588 2.710588c-6.204235-26.895059-24.455529-40.116706-56.259765-40.116706H297.893647c-38.309647 0-56.109176 12.860235-56.109176 38.761412H231.604706z"  ></path></symbol><symbol id="icon-shanghua1" viewBox="0 0 1024 1024"><path d="M494.52385 496.711782a62.804915 62.804915 0 0 1 43.622109 16.861754l3.618109 3.549843 43.553843 43.622109 351.434457 351.366191c24.985433 24.848901 24.985433 65.603829 0.204799 90.452731a64.443304 64.443304 0 0 1-90.657529 0l-351.57099-351.434458-351.36619 351.57099a64.443304 64.443304 0 0 1-90.657529 0 64.443304 64.443304 0 0 1 0-90.589263L404.139386 560.745488l43.007713-43.007713 4.369038-4.369037a63.351044 63.351044 0 0 1 43.007713-16.656956z m0-496.704955a62.804915 62.804915 0 0 1 43.622109 16.793488L541.764068 20.48669l43.553843 43.622109 351.434457 351.366191c24.985433 24.780635 24.985433 65.603829 0.204799 90.384464a64.443304 64.443304 0 0 1-90.657529 0l-351.57099-351.366191L143.362458 505.995987a64.443304 64.443304 0 0 1-90.657529 0 64.443304 64.443304 0 0 1 0-90.589263L404.139386 64.040533l43.007713-43.007713 4.369038-4.437304A63.351044 63.351044 0 0 1 494.52385 0.006827z"  ></path></symbol><symbol id="icon-xianshiqi1" viewBox="0 0 1024 1024"><path d="M85.333333 128v597.333333h853.333334V128H85.333333z m0-85.333333h853.333334a85.333333 85.333333 0 0 1 85.333333 85.333333v597.333333a85.333333 85.333333 0 0 1-85.333333 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V128a85.333333 85.333333 0 0 1 85.333333-85.333333z"  ></path><path d="M213.333333 896h597.333334a42.666667 42.666667 0 0 1 0 85.333333H213.333333a42.666667 42.666667 0 0 1 0-85.333333z"  ></path><path d="M512 725.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666667a42.666667 42.666667 0 0 1-85.333334 0v-170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M852.728 392.447c104.27 66.027 104.213 173.113 0 239.103l-570.84 361.47c-104.27 66.026-188.797 23.034-188.797-95.883V126.86c0-118.98 84.584-161.873 188.798-95.882l570.839 361.47z"  ></path></symbol><symbol id="icon-zantingtingzhi" viewBox="0 0 1024 1024"><path d="M768.255475 0a112.588489 112.588489 0 0 0-109.912589 109.711897v804.375514a109.912589 109.912589 0 0 0 219.825178 0V109.644999A112.588489 112.588489 0 0 0 768.255475 0zM255.553052 0A112.588489 112.588489 0 0 0 145.640463 109.711897v804.375514a109.912589 109.912589 0 0 0 219.825178 0V109.644999A112.722284 112.722284 0 0 0 255.553052 0z"  ></path></symbol><symbol id="icon-wangyezhibogongju-guanbimaikefeng" viewBox="0 0 1024 1024"><path d="M309.817344 388.860759v120.339444a195.571038 195.571038 0 0 0 291.075241 170.683949zM700.752028 518.481013V195.571038a195.571038 195.571038 0 0 0-381.809418-59.158684z"  ></path><path d="M105.168316 100.71059m19.210963-19.210963l0 0q19.210963-19.210963 38.421927 0l719.457914 719.457914q19.210963 19.210963 0 38.421927l0 0q-19.210963 19.210963-38.421927 0l-719.457914-719.457914q-19.210963-19.210963 0-38.421927Z"  ></path><path d="M831.357395 651.108456a357.285266 357.285266 0 0 0 31.10886-145.174684v-79.327595a37.745418 37.745418 0 0 0-37.745417-37.745418h-4.821874a37.745418 37.745418 0 0 0-37.797266 37.69357v79.794228a279.979747 279.979747 0 0 1-12.702784 82.956962zM698.470711 941.043038H544.896635v-80.053468a356.663089 356.663089 0 0 0 169.180355-65.639697l-56.773671-57.032911a278.735392 278.735392 0 0 1-433.501975-231.968405V426.606177a37.797266 37.797266 0 0 0-75.542684 0v79.534988a358.27038 358.27038 0 0 0 317.569621 354.848405v80.053468H312.202357a41.478481 41.478481 0 0 0 0 82.956962h386.268354a41.478481 41.478481 0 0 0 0-82.956962z"  ></path></symbol><symbol id="icon-guanbishexiang" viewBox="0 0 1024 1024"><path d="M715.472593 853.560889L342.281481 151.703704h291.953778a105.699556 105.699556 0 0 1 105.699556 105.699555v157.544297l194.218666-141.463704a56.888889 56.888889 0 0 1 77.672297 8.116148c7.850667 9.40563 12.174222 21.048889 12.174222 33.109333v423.253334c0 29.202963-24.803556 52.868741-55.296 52.86874a57.268148 57.268148 0 0 1-31.364741-9.329777l-197.404444-119.504593v123.941926c0 25.713778-9.216 49.303704-24.462222 67.621926z m-151.552 38.07763H105.699556A105.699556 105.699556 0 0 1 0 785.938963V257.403259A105.699556 105.699556 0 0 1 105.699556 151.703704h64.777481l393.443556 739.934815z"  ></path><path d="M185.192296 17.825185a38.001778 38.001778 0 0 1 51.351704 15.625482l496.071111 928.805926a37.850074 37.850074 0 0 1-15.587555 51.275851 38.001778 38.001778 0 0 1-51.351704-15.663407L169.604741 69.063111a37.850074 37.850074 0 0 1 15.549629-51.275852z"  ></path></symbol><symbol id="icon-Loading" viewBox="0 0 1024 1024"><path d="M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"  ></path></symbol><symbol id="icon-icon-switch-camera-1" viewBox="0 0 1024 1024"><path d="M282.07964666 596.45567684l457.88336482 0c46.8105039 0 92.59573349-38.67044725 92.59573349-85.47059485L832.55874497 253.54802315c0-46.8105039-45.78522959-92.59573349-92.59573349-92.59573349l-93.6106515 0c0-37.64517294-38.67044725-56.98039657-85.47059485-56.98039656l-100.73579013 0c-46.8105039 0-85.47059485 19.33522363-85.47059485 56.98039656L281.05437234 160.95228966c-46.8105039 0-92.59573349 44.77031158-92.59573348 92.59573349l0 257.43705884C188.46899516 557.78522959 234.25422475 596.45567684 282.07964666 596.45567684zM511.01615091 239.30810217c79.37073051 0 143.46590941 64.10553521 143.46590942 143.4659094s-64.10553521 143.46590941-143.46590942 143.46590942-143.46590941-64.10553521-143.46590941-143.46590942S431.65577671 239.30810217 511.01615091 239.30810217z"  ></path><path d="M511.01615091 381.75909357m-85.47059485 0a10.68382435 10.68382435 0 1 0 170.9411897 0 10.68382435 10.68382435 0 1 0-170.9411897 0Z"  ></path><path d="M1012.65490931 608.66576181c-9.15497466-19.33522363-21.36505964-30.5303906-32.5602266-38.67044724-22.37997764-17.29503131-43.75539358-25.43508796-57.99531457-31.54530861-14.25027729-6.11022064-22.39033394-8.14005665-22.39033394-8.14005665s7.12513865 4.07002833 20.35014162 12.21008498c12.21008498 8.14005665 30.5303906 21.36505964 47.82542191 40.70028326 8.14005665 9.15497466 15.2651953 21.36505964 19.33522362 33.57514462 3.05511033 12.21008498 2.04019232 25.43508796-5.08494633 36.63025493-13.22500299 23.40525195-44.77031158 40.70028326-78.34545619 53.92528624-68.17556353 25.43508796-149.57613006 35.61533693-219.7815296 39.68536526-27.47528028 2.02983601-53.92528624 2.02983601-77.3305382 2.029836l0 108.8758468c27.47528028-3.05511033 57.99531457-8.14005665 90.55554117-14.2502773 75.30070219-16.2801133 159.74602272-40.70028326 233.00653259-84.45567683 18.32030562-11.19516698 35.61533693-23.40525195 50.88053222-37.64517294 15.2651953-14.23992099 28.49019828-31.5453086 35.61533693-52.91036824C1023.85007629 648.35112707 1021.80988397 624.94587513 1012.65490931 608.66576181z"  ></path><path d="M398.0702758 748.0616429c-18.30994931 0-37.64517294-1.01491801-57.99531457-2.02983601-70.20539954-4.07002833-151.60596607-13.22500299-219.7815296-38.67044724-33.57514461-12.21008498-65.12045322-30.5303906-79.37073051-52.91036825-7.12513865-11.19516698-9.15497466-23.40525195-5.08494634-36.63025493 3.05511033-12.21008498 10.18024897-24.42016995 18.32030563-33.57514461 16.2801133-19.33522363 34.60041892-31.5453086 47.8254219-40.70028326 12.21008498-8.14005665 20.35014163-12.21008498 20.35014163-12.21008497s-8.14005665 2.04019232-22.37997764 8.14005665c-14.25027729 6.11022064-34.60041892 14.25027729-57.99531457 31.54530859-11.19516698 9.15497466-23.40525195 20.35014163-31.54530859 36.63025494-8.14005665 16.2801133-10.18024897 39.68536526-3.05511033 60.03550689 7.12513865 20.35014163 21.36505964 37.64517294 36.63025493 52.91036823 14.25027729 14.25027729 31.5453086 26.46036227 49.85525792 37.64517294 73.26050987 43.75539358 157.71618671 68.17556353 233.01688889 84.45567684 24.42016995 5.08494634 48.84033991 9.15497466 71.23067386 12.21008498l0 65.12045321 132.28109874-113.96079312L398.0702758 692.09616434 398.0702758 748.0616429z"  ></path></symbol><symbol id="icon-unfullscreen" viewBox="0 0 1029 1024"><path d="M355.474619 0a39.357659 39.357659 0 0 0-39.357659 39.357659v222.050164L66.096326 11.276633a37.721442 37.721442 0 0 0-53.342895 53.342894l250.13119 250.020635H40.834458a39.357659 39.357659 0 1 0 0 78.66004h307.73046c28.68908 0 46.212083-14.8144 46.212083-46.212082V39.357659A39.302381 39.302381 0 0 0 355.474619 0zM679.456698 393.300202h307.951571a39.357659 39.357659 0 1 0 0-78.66004h-222.271274l249.910079-250.020635a37.721442 37.721442 0 0 0-53.342894-53.342894l-249.799525 250.13119V39.302381a39.357659 39.357659 0 0 0-78.66004 0v307.785739c0 31.397683 17.467725 46.212083 46.212083 46.212082zM348.564918 629.390879H40.77918a39.302381 39.302381 0 1 0 0 78.604763h222.105441L12.753431 958.016277a37.721442 37.721442 0 0 0 53.342895 53.342894l250.020634-250.13119v221.939609a39.357659 39.357659 0 1 0 78.660041 0v-307.619906c0-31.452961-17.523003-46.156805-46.212083-46.156805zM1026.544817 668.637983a39.302381 39.302381 0 0 0-39.136548-39.247104h-307.896294c-28.799635 0-46.26736 14.759122-46.26736 46.212083v307.564628a39.357659 39.357659 0 1 0 78.66004 0v-221.939609l250.075913 250.13119a37.721442 37.721442 0 0 0 53.342894-53.342894l-250.13119-250.020635h222.215997a39.302381 39.302381 0 0 0 39.136548-39.357659z" fill="#2c2c2c" ></path></symbol><symbol id="icon-fullscreen" viewBox="0 0 1024 1024"><path d="M41.91 682.266h0.14a41.91 41.91 0 0 1 41.91 41.91v250.929a41.91 41.91 0 0 1-41.91 41.91h-0.14A41.91 41.91 0 0 1 0 975.105V724.176a41.91 41.91 0 0 1 41.91-41.91z" fill="#2c2c2c" ></path><path d="M43.307 933.32h252.088a41.91 41.91 0 0 1 41.91 41.91 41.91 41.91 0 0 1-41.91 41.91H43.307a41.91 41.91 0 0 1-41.91-41.91 41.91 41.91 0 0 1 41.91-41.91z" fill="#2c2c2c" ></path><path d="M13.495 1002.905a41.742 41.742 0 0 1 0.964-59.163l341.846-329.817a41.91 41.91 0 1 1 58.394 60.071L72.853 1003.869a42.078 42.078 0 0 1-59.358-0.964zM981.965 5.588h0.125a41.91 41.91 0 0 1 41.91 41.91v250.943a41.91 41.91 0 0 1-41.91 41.91h-0.126a41.91 41.91 0 0 1-41.91-41.91V47.498a41.91 41.91 0 0 1 41.91-41.91z" fill="#2c2c2c" ></path><path d="M728.605 5.588h252.088a41.91 41.91 0 0 1 41.91 41.91 41.91 41.91 0 0 1-41.91 41.91H728.605a41.91 41.91 0 0 1-41.91-41.91 41.91 41.91 0 0 1 41.91-41.91z" fill="#2c2c2c" ></path><path d="M1010.505 19.698a41.742 41.742 0 0 1-0.964 59.163L667.695 408.692a41.91 41.91 0 1 1-58.394-60.071L951.147 18.804a42.078 42.078 0 0 1 59.358 0.894zM48.895 0h250.929a41.91 41.91 0 0 1 41.91 41.91v0.126a41.91 41.91 0 0 1-41.91 41.91H48.895a41.91 41.91 0 0 1-41.91-41.91v-0.126A41.91 41.91 0 0 1 48.895 0z" fill="#2c2c2c" ></path><path d="M48.895 1.397a41.91 41.91 0 0 1 41.91 41.91v252.158a41.91 41.91 0 0 1-41.91 41.91 41.91 41.91 0 0 1-41.91-41.91V43.307a41.91 41.91 0 0 1 41.91-41.91z" fill="#2c2c2c" ></path><path d="M21.095 13.495a41.742 41.742 0 0 1 59.163 0.964l329.817 341.846a41.91 41.91 0 1 1-60.071 58.394L20.131 72.853a42.078 42.078 0 0 1 0.964-59.358z m704.464 926.56h250.943a41.91 41.91 0 0 1 41.91 41.91v0.125a41.91 41.91 0 0 1-41.91 41.91H725.559a41.91 41.91 0 0 1-41.91-41.91v-0.126a41.91 41.91 0 0 1 41.91-41.91z" fill="#2c2c2c" ></path><path d="M976.502 686.75a41.91 41.91 0 0 1 41.91 41.91v252.033a41.91 41.91 0 0 1-41.91 41.91 41.91 41.91 0 0 1-41.91-41.91V728.605a41.91 41.91 0 0 1 41.91-41.854z" fill="#2c2c2c" ></path><path d="M1004.302 1010.505a41.742 41.742 0 0 1-59.163-0.964L615.308 667.695a41.91 41.91 0 1 1 60.071-58.394l329.817 341.846a42.078 42.078 0 0 1-0.894 59.358z" fill="#2c2c2c" ></path></symbol><symbol id="icon-arrow-up" viewBox="0 0 1024 1024"><path d="M2.276 766.862c0-10.24 3.64-20.594 10.922-28.444L485.604 228.693c14.563-15.70100001 38.229-15.701 52.792 0L1010.802 738.418c14.563 15.70100001 14.563 41.187 0 56.889-14.564 15.701-38.23 15.70100001-52.793 0L512 314.027l-446.009 481.28c-14.563 15.70100001-38.23 15.70100001-52.793 0-7.282-7.851-10.922-18.205-10.922-28.445z" fill="#333333" ></path></symbol><symbol id="icon-arrow-down" viewBox="0 0 1024 1024"><path d="M1021.724 257.138c0 10.24-3.64 20.594-10.922 28.444L538.396 795.307c-14.563 15.70100001-38.229 15.701-52.792 0L13.198 285.582c-14.563-15.70100001-14.563-41.187 0-56.889 14.564-15.701 38.23-15.70100001 52.793 0L512 709.973l446.009-481.28c14.563-15.70100001 38.23-15.70100001 52.793 0 7.282 7.851 10.922 18.205 10.922 28.445z" fill="#333333" ></path></symbol><symbol id="icon-arrow-left" viewBox="0 0 1024 1024"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" fill="#333333" ></path></symbol><symbol id="icon-arrow-right" viewBox="0 0 1024 1024"><path d="M257.138 2.276c10.24 0 20.594 3.64 28.444 10.922L795.307 485.604c15.70100001 14.563 15.701 38.229 0 52.792L285.582 1010.802c-15.70100001 14.563-41.187 14.563-56.889 0-15.701-14.564-15.70100001-38.23 0-52.793L709.973 512l-481.28-446.009c-15.70100001-14.563-15.70100001-38.23 0-52.793 7.851-7.282 18.205-10.922 28.445-10.922z" fill="#333333" ></path></symbol><symbol id="icon-beauty1" viewBox="0 0 1024 1024"><path d="M855.424 900.928c-2.688-8.128-52.736-21.44-52.736-21.44-44.736-18.752-44.736-80.384 0-99.328 0 0 47.424-13.312 52.736-21.44 7.936-16.064 21.056-51.008 21.056-51.008 7.936-21.44 26.304-32.256 42.048-32.256v-225.28c0-34.752-5.312-69.696-10.624-101.952C868.48 147.2 676.224-21.824 439.36 2.304 365.632 10.432 299.84 34.56 241.984 72c31.68 13.312 92.16 37.504 92.16 37.504 44.8 18.688 44.8 80.32 0 99.264 0 0-89.472 29.504-92.16 37.44-13.056 32.32-36.8 93.952-36.8 93.952-18.432 45.568-78.912 45.568-97.472 0l-28.864-72.064c-23.68 56.384-34.112 118.016-34.112 182.336v410.304c0 99.264 60.48 160.896 160.64 160.896H429.12c-15.744-5.376-31.68-10.816-47.424-18.688-142.208-67.072-210.688-244.16-189.632-399.68 2.688-18.752 10.624-24.128 28.992-26.88 128.96-13.312 389.696-67.008 418.56-193.152 2.624-16 5.312-29.504 7.936-45.568 5.312 5.376 8 10.752 8 16C802.88 541.44 776.704 616.32 776.704 605.696c5.312 51.008 5.312 102.016-7.936 152.832-31.68 128.704-97.408 225.28-231.744 265.408H763.52c52.736 0 97.472-21.44 123.648-56.384-5.248-5.44-7.936-10.816-10.56-16.064 0 0.448-15.872-34.368-21.184-50.56z m0 0" fill="#666666" ></path><path d="M952.896 799.104l-28.992-72.448-28.8 72.448L824 828.48l71.104 29.568 28.8 72.448 28.992-72.448L1024 828.48l-71.104-29.376z m0 0M260.544 721.28c81.536-61.632 176.32 0 176.32 0-94.784-134.08-176.32 0-176.32 0z m0 0M542.336 721.28c81.536-61.632 176.384 0 176.384 0-94.848-134.08-176.384 0-176.384 0z m0 0M157.952 321.792l44.736-115.136 113.216-45.568-113.216-45.632L157.952 0.128l-44.736 115.328L0 161.088l113.216 45.568 44.736 115.136z m0 0" fill="#666666" ></path></symbol><symbol id="icon-beauty2" viewBox="0 0 1121 1024"><path d="M257.963335 208.893082a115.50654 115.50654 0 0 0-58.74507 61.720469l-16.688941 47.549175c-10.852579 31.089112-28.609612 31.089112-39.538483 0l-16.688941-47.549175a115.888002 115.888002 0 0 0-58.74507-61.720469l-45.260406-17.49001c-29.601412-11.443845-29.601412-30.059166 0-41.483937l45.260406-17.490009a115.678198 115.678198 0 0 0 58.74507-61.606032l16.688941-47.549175c10.967018-31.089112 28.609612-30.974673 39.538483 0l16.688941 47.549175a114.858056 114.858056 0 0 0 58.74507 61.606032l45.260406 17.490009c29.601412 11.443845 29.486973 30.059166 0 41.483937z m830.212793 69.368772a55.922255 55.922255 0 0 0-29.372535 29.372535l-8.334934 22.620667c-5.493045 14.743487-14.285733 14.743487-19.778778 0l-8.334934-22.620667a55.922255 55.922255 0 0 0-29.372535-29.372535l-22.620666-8.334933c-14.743487-5.493045-14.743487-14.285733 0-19.778779l22.620666-8.334933a55.922255 55.922255 0 0 0 29.372535-29.372535l8.334934-22.620667c5.493045-14.743487 14.285733-14.743487 19.778778 0l8.334934 22.620667a56.322789 56.322789 0 0 0 29.372535 29.372535l22.620666 8.334933c14.743487 5.493045 14.743487 14.285733 0 19.778779z m-684.360992 157.276574a32.500519 32.500519 0 1 1 47.549176-44.344899l74.060748 79.439356a48.807998 48.807998 0 0 1-35.666649 82.014221H406.447221a32.424227 32.424227 0 0 1 0-64.848454h45.947037l-48.579122-52.222078z m38.737415 278.066355a32.481446 32.481446 0 1 1 57.944001-29.372535 61.548812 61.548812 0 0 0 4.005346 6.179676 105.188007 105.188007 0 0 0 15.258459 17.165768 92.809581 92.809581 0 0 0 64.352554 24.451681 96.776781 96.776781 0 0 0 67.881073-24.222805 75.758253 75.758253 0 0 0 17.165767-21.83867 32.481446 32.481446 0 1 1 59.546139 25.939382 135.743072 135.743072 0 0 1-32.920127 43.868071 160.786019 160.786019 0 0 1-111.768217 41.255061 157.391012 157.391012 0 0 1-107.781945-41.140622 149.532905 149.532905 0 0 1-33.835635-42.170568z m280.927317-160.919531a56.914055 56.914055 0 1 0-56.914055-56.914054 56.914055 56.914055 0 0 0 56.933128 56.914054z m-577.055874 32.424227a438.871448 438.871448 0 1 1 438.871448 438.871448A438.852375 438.852375 0 0 1 146.443067 585.147625z m81.270371 0a357.62015 357.62015 0 1 0 357.62015-357.620149 357.639223 357.639223 0 0 0-357.62015 357.658295z"  ></path></symbol><symbol id="icon-camera2" viewBox="0 0 1024 1024"><path d="M512 867.742167c-241.668085 0-437.579033-194.251146-437.579033-433.870572S270.331915 0 512 0s437.579033 194.251146 437.579033 433.870572S753.668085 867.742167 512 867.742167zM512 200.24772c-130.128733 0-235.619322 104.59622-235.619322 233.622852S381.871267 667.4924 512 667.4924s235.619322-104.595196 235.619322-233.621828S642.128733 200.24772 512 200.24772zM512 578.493413c-80.555687 0-145.861042-64.748676-145.861042-144.621818s65.304332-144.623865 145.861042-144.623865 145.858996 64.7497 145.858996 144.623865S592.555687 578.493413 512 578.493413zM512 912.24166c133.200698 0 249.623267-42.409902 314.853921-105.84056l107.166765 96.584756c-82.296331 71.834049-240.355183 120.504538-422.020686 120.504538-184.52462 0-344.709903-50.204425-425.861154-123.904984l105.971543-98.165764C256.259408 867.620393 375.329271 912.24166 512 912.24166z"  ></path></symbol><symbol id="icon-camera" viewBox="0 0 1024 1024"><path d="M348.16 552.448a160 160 0 1 0 327.68 0 160 160 0 1 0-327.68 0z"  ></path><path d="M358.4 67.38l-92.16 107.826H102.4C46.08 175.206 0 215.86 0 272.18v582.042c0 56.32 46.08 102.4 102.4 102.4h819.2c56.32 0 102.4-46.08 102.4-102.4V272.179c0-56.32-46.08-96.973-102.4-96.973H757.76L665.6 67.38H358.4zM512 808.447c-143.36 0-256-112.64-256-256s112.64-256 256-256 256 112.64 256 256-112.64 256-256 256z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12l-375.296-375.808c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944l375.296 375.296c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z"  ></path></symbol><symbol id="icon-close-copy" viewBox="0 0 1024 1024"><path d="M563.53961182 520.52813721L835.32763673 248.7401123c13.71917724-13.71917724 13.71917724-36.33728028-2e-8-50.05645751l-1.48315429-1.4831543c-13.71917724-13.71917724-36.33728028-13.71917724-50.05645752 0L512 469.35931396l-271.7880249-272.15881347c-13.71917724-13.71917724-36.33728028-13.71917724-50.05645752 0l-1.48315429 1.4831543c-14.08996583 13.71917724-14.08996583 36.33728028 0 50.05645751l271.78802489 271.78802491L188.67236327 792.31616211c-13.71917724 13.71917724-13.71917724 36.33728028 2e-8 50.05645752l1.48315429 1.4831543c13.71917724 13.71917724 36.33728028 13.71917724 50.05645752 0L512 572.06774903l271.7880249 271.7880249c13.71917724 13.71917724 36.33728028 13.71917724 50.05645752 0l1.48315429-1.4831543c13.71917724-13.71917724 13.71917724-36.33728028 0-50.05645752L563.53961182 520.52813721z"  ></path></symbol><symbol id="icon-end-call" viewBox="0 0 1024 1024"><path d="M31.093 409.231l0.01-0.013 2.949-3.395c70.92-77.036 236.866-122.815 443.934-122.475l76.465 0.113c207.079 0.344 371.141 46.67 438.864 123.927 47.774 54.509 26.267 174.97-12.578 221.752-19.134 23.043-37.532 21.871-46.801 19.104-69.056-12.597-178.115-47.788-207.592-72.012l-2.101-1.725-1.33-2.369c-10.58-18.652-7.12-37.859-4.066-54.807 4.03-22.314 5.562-35.628-9.79-50.153-4.667-4.406-30.593-18.757-168.838-20.338l-58.379-0.076c-135.095 1.353-161.19 15.405-166.005 19.768-15.703 14.33-14.938 27.86-11.839 50.122 2.361 16.946 5.043 36.176-6.314 54.809l-1.443 2.351-2.163 1.7c-30.461 24.14-140.924 58.962-212.073 71.726-9.168 2.757-30.164 3.423-49.842-27.251-30.918-48.155-44.99-157.86-1.068-210.758z m0 0" fill="#666666" ></path></symbol><symbol id="icon-speaker" viewBox="0 0 1024 1024"><path d="M19.753 338.832v348.675c0 45.123 36.919 82.041 82.041 82.041h127.164V256.791H101.794c-45.123 0-82.041 36.918-82.041 82.041zM561.225 76.3c-16.408 0-32.817 4.102-45.123 16.408L286.387 244.485v533.268l229.715 155.878c36.919 24.612 90.245 16.408 114.858-20.51 8.204-12.306 16.408-28.714 16.408-45.123V158.341c-4.102-49.224-41.021-82.041-86.143-82.041z m242.021 283.042c-12.306-12.306-32.816-12.306-45.123 0-12.306 12.306-12.306 32.816 0 45.123 28.714 28.714 45.123 69.735 45.123 110.756s-16.408 82.041-45.123 110.756c-12.306 12.306-12.306 32.816 0 45.123 4.102 8.204 12.306 8.204 20.51 8.204s16.408-4.102 20.51-8.204c41.021-41.021 65.633-94.347 65.633-155.878 4.103-61.532-20.509-114.859-61.53-155.88z"  ></path><path d="M889.39 244.485c-12.306-12.306-28.714-12.306-41.021 0s-12.306 32.816 0 45.123c61.531 57.429 94.347 139.47 94.347 225.613S909.9 679.304 848.369 740.834c-12.306 12.306-12.306 32.816 0 45.123 4.102 8.204 12.306 8.204 20.51 8.204 8.204 0 16.408-4.102 20.51-8.204 73.837-69.735 114.858-168.185 114.858-266.634 0-106.654-41.02-205.103-114.857-274.838z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M931.84 512c0-59.61955555 37.43288889-110.13688889 89.88444445-130.27555555-12.51555555-49.152-31.85777778-95.45955555-57.11644445-138.01244445C913.18044445 266.58133333 851.05777778 257.25155555 808.96 215.04c-42.09777778-42.09777778-51.42755555-104.33422222-28.55822222-155.648C737.73511111 34.13333333 691.42755555 14.79111111 642.27555555 2.27555555c-20.25244445 52.45155555-70.76977778 89.88444445-130.27555555 89.88444445-59.61955555 0-110.13688889-37.43288889-130.27555555-89.88444445-49.152 12.51555555-95.45955555 31.85777778-138.01244445 57.11644445 22.86933333 51.42755555 13.53955555 113.55022222-28.55822222 155.648-42.09777778 42.09777778-104.33422222 51.42755555-155.648 28.672C34.13333333 286.26488889 14.79111111 332.57244445 2.27555555 381.72444445c52.45155555 20.25244445 89.88444445 70.76977778 89.88444445 130.27555555 0 59.61955555-37.43288889 110.13688889-89.88444445 130.27555555 12.51555555 49.152 31.85777778 95.45955555 57.11644445 138.01244445C110.81955555 757.41866667 172.94222222 766.74844445 215.04 808.96c42.09777778 42.09777778 51.42755555 104.33422222 28.55822222 155.648C286.26488889 989.86666667 332.57244445 1009.20888889 381.72444445 1021.72444445c20.25244445-52.45155555 70.76977778-89.88444445 130.27555555-89.88444445 59.61955555 0 110.13688889 37.43288889 130.27555555 89.88444445 49.152-12.51555555 95.45955555-31.85777778 138.01244445-57.11644445-22.86933333-51.42755555-13.53955555-113.55022222 28.55822222-155.648 42.09777778-42.09777778 104.33422222-51.42755555 155.648-28.672C989.86666667 737.73511111 1009.20888889 691.42755555 1021.72444445 642.27555555c-52.45155555-20.13866667-89.88444445-70.656-89.88444445-130.27555555zM512 651.94666667c-77.25511111 0-139.94666667-62.69155555-139.94666667-139.94666667s62.69155555-139.94666667 139.94666667-139.94666667 139.94666667 62.69155555 139.94666667 139.94666667-62.69155555 139.94666667-139.94666667 139.94666667z"  ></path></symbol><symbol id="icon-phone" viewBox="0 0 1024 1024"><path d="M614.219294 699.934118c1.746824-1.084235 20.901647-13.071059 26.50353-16.444236 10.360471-6.264471 18.913882-10.962824 27.467294-14.817882 60.114824-27.346824 113.121882-8.011294 183.235764 73.908706 43.369412 50.718118 56.199529 95.713882 39.454118 135.770353-12.468706 29.936941-36.502588 50.597647-79.269647 76.137412-2.770824 1.626353-27.407059 15.962353-33.731765 19.877647-99.568941 61.44-327.800471-79.209412-491.941647-319.548236-164.562824-240.941176-207.149176-497.844706-106.255059-560.188235l13.312-8.432941 14.456471-9.396706C258.469647 43.791059 291.117176 30.599529 329.848471 37.165176c38.671059 6.625882 71.559529 35.237647 99.388235 87.341177 58.669176 110.230588 45.718588 162.514824-29.756235 210.040471-5.421176 3.493647-24.696471 15.119059-26.50353 16.263529-18.492235 11.444706 12.830118 88.124235 85.654588 194.740706 73.728 107.821176 135.348706 166.791529 155.52753 154.383059z" fill="#515151" ></path></symbol><symbol id="icon-mic" viewBox="0 0 1024 1024"><path d="M860.928 436.4288v77.824a337.92 337.92 0 0 1-89.7024 233.8304 339.712 339.712 0 0 1-221.696 114.0224v80.2816h155.6992a38.912 38.912 0 0 1 0 77.824h-389.12a38.912 38.912 0 0 1 0-77.824h155.5456v-80.2304a339.712 339.712 0 0 1-221.696-114.0224 337.92 337.92 0 0 1-89.7024-233.8304V436.4288a38.7072 38.7072 0 0 1 66.304-27.3408 37.4272 37.4272 0 0 1 11.5712 27.392v77.824A262.4 262.4 0 0 0 318.1056 706.56a262.4 262.4 0 0 0 192.4608 79.9744 262.4 262.4 0 0 0 192.512-79.9744 262.4 262.4 0 0 0 79.9744-192.512V436.4288a38.912 38.912 0 0 1 77.824 0z m-155.6992-233.5232v311.3984a195.1744 195.1744 0 0 1-194.56 194.56 195.1744 195.1744 0 0 1-194.56-194.56V202.9056a187.392 187.392 0 0 1 57.0368-137.472A187.392 187.392 0 0 1 510.6176 8.2944a187.392 187.392 0 0 1 137.472 57.1904 187.392 187.392 0 0 1 57.1904 137.472z m0 0"  ></path></symbol><symbol id="icon-bgm" viewBox="0 0 1024 1024"><path d="M883.2 6.4L332.8 99.2h-25.6c-12.8 0-25.6 9.6-25.6 25.6V752c-22.4-12.8-48-19.2-73.6-19.2-80 0-147.2 64-147.2 144C64 960 128 1024 211.2 1024c80 0 147.2-64 147.2-144V345.6l512-89.6v352c-70.4-41.6-160-16-198.4 54.4-12.8 22.4-19.2 48-19.2 73.6 0 80 64 147.2 147.2 144 80 0 147.2-64 147.2-147.2v-704c0-12.8-9.6-22.4-19.2-22.4-3.2-3.2-9.6-3.2-12.8-3.2l-12.8 3.2c-16-3.2-19.2 0-19.2 0"  ></path></symbol><symbol id="icon-member-list" viewBox="0 0 1194 1024"><path d="M426.666667 512a256 256 0 1 1 0-512 256 256 0 0 1 0 512zM341.333333 597.333333h170.666667a341.333333 341.333333 0 0 1 341.333333 341.333334v85.333333H0v-85.333333a341.333333 341.333333 0 0 1 341.333333-341.333334z m810.666667-597.333333a42.666667 42.666667 0 1 1 0 85.333333h-341.333333a42.666667 42.666667 0 1 1 0-85.333333h341.333333z m0 256a42.666667 42.666667 0 1 1 0 85.333333h-170.666667a42.666667 42.666667 0 1 1 0-85.333333h170.666667z m0 256a42.666667 42.666667 0 1 1 0 85.333333h-170.666667a42.666667 42.666667 0 1 1 0-85.333333h170.666667z"  ></path></symbol><symbol id="icon-switch-camera" viewBox="0 0 1170 1024"><path d="M1025.56571469 179.70285688c56.67428531 0 102.72 49.61142844 102.72 110.67428624v590.81142844c0 61.33714313-46.04571469 110.81142844-102.72 110.81142844H135.47428531C78.76571469 992 32.68571469 942.38857156 32.68571469 881.18857156V290.37714313c0-61.06285687 46.04571469-110.67428531 102.75428531-110.67428625H270.97142844C303.47428531 179.70285688 372.45714313 32 408.66285688 32h342.71999999C787.65714313 32 856.70857156 179.70285688 889.14285688 179.70285688h136.42285781z m-186.51428625 356.12571468a265.78285687 265.78285687 0 0 0-45.53142844-149.21142843l-1.09714312-2.05714313c-3.56571469-5.21142844-7.47428531-10.01142844-11.28-14.84571469-0.48-0.61714313-0.85714313-1.23428531-1.37142844-1.85142843A255.36 255.36 0 0 0 683.42857156 293.97714312l-3.08571468-1.50857156a292.25142844 292.25142844 0 0 0-18.20571375-6.78857156c-2.22857156-0.72-4.42285687-1.57714312-6.61714313-2.19428531a350.60571469 350.60571469 0 0 0-16.28571469-4.32c-3.08571469-0.75428531-6-1.47428531-9.08571375-2.09142938-1.44-0.27428531-2.91428531-0.75428531-4.38857156-1.02857062-4.04571469-0.68571469-8.22857156-0.96-12.24-1.57714313-2.81142844-0.34285688-5.65714313-0.85714313-8.46857156-1.09714312-6.85714313-0.61714313-13.71428531-1.02857156-20.43428531-1.13142844-1.23428531 0-2.46857156-0.10285688-3.66857157-0.10285687-0.24 0-0.37714312 0.10285688-0.61714312 0.10285687a251.72571469 251.72571469 0 0 0-147.42857157 47.65714313 31.98857156 31.98857156 0 0 0-7.61142843 44.02285687 30.54857156 30.54857156 0 0 0 43.13142843 7.78285688 191.58857156 191.58857156 0 0 1 114-36.17142844c5.86285688 0 11.62285688 0.37714312 17.24571469 0.89142844 1.71428531 0.24 3.42857156 0.48 5.28 0.61714312 4.62857156 0.61714313 9.29142844 1.23428531 13.81714313 2.19428531 1.95428531 0.37714312 4.04571469 1.02857156 6 1.37142938 4.52571469 0.99428531 8.94857156 2.09142844 13.37142843 3.42857062 1.33714312 0.51428531 2.67428531 1.02857156 4.14857157 1.50857157a150.10285687 150.10285687 0 0 1 16.14857062 6.17142843c28.90285687 12.68571469 54.27428531 32.22857156 73.98857156 56.64l0.34285782 0.48c27.80571469 34.56 44.57142844 78.85714313 44.57142843 126.99428625h-51.66857156l82.62857156 126.58285688 82.69714219-126.58285688h-51.94285687z m-145.71428531 164.09142844a192.54857156 192.54857156 0 0 1-131.00571469 35.31428531l-6.51428531-0.89142843c-4.11428531-0.61714313-8.29714312-1.09714312-12.34285782-1.95428532-2.46857156-0.51428531-4.90285688-1.13142844-7.47428531-1.71428625-4.04571469-1.02857156-7.95428531-1.88571469-11.86285687-3.08571375a306.48 306.48 0 0 0-5.65714313-1.88571468 153.66857156 153.66857156 0 0 1-16.14857156-6.27428532c-5.04-2.36571469-10.04571469-4.69714313-14.94857156-7.40571468l-0.72-0.34285688a197.89714312 197.89714312 0 0 1-44.57142844-34.21714312l-0.61714313-0.72a171.56571469 171.56571469 0 0 1-11.65714218-13.2c-0.68571469-1.02857156-1.57714312-1.98857156-2.29714313-3.08571375a202.32 202.32 0 0 1-42.99428531-124.90285782h51.66857062l-82.62857062-126.58285687-82.66285781 126.58285687h51.66857156c0 55.54285687 17.00571469 106.97142844 45.66857156 149.45142938 0.34285688 0.61714313 0.61714313 1.23428531 0.99428531 1.85142843 2.91428531 4.32 6.24 8.36571469 9.42857157 12.44571375 1.2 1.61142844 2.33142844 3.22285688 3.53142843 4.69714313 4.8 5.82857156 9.66857156 11.34857156 14.81142938 16.66285687 0.51428531 0.48 0.99428531 1.09714312 1.47428531 1.61142844 17.28 17.62285688 36.85714313 32.57142844 58.04571469 44.4 0.61714313 0.37714312 1.09714312 0.75428531 1.71428531 1.02857157 6.13714313 3.29142844 12.34285687 6.37714312 18.75428531 9.22285781l4.76571469 2.22857062c5.38285687 2.33142844 11.00571469 4.32 16.66285688 6.27428625l8.05714312 2.74285688c4.90285688 1.47428531 9.94285688 2.70857156 15.08571469 3.94285687 3.42857156 0.85714313 6.72 1.71428531 10.14857062 2.33142938 1.47428531 0.34285688 2.81142844 0.75428531 4.14857157 0.99428531 4.8 0.85714313 9.56571469 1.37142844 14.46857156 1.95428531l5.14285687 0.75428625c8.57142844 0.85714313 17.24571469 1.47428531 25.81714313 1.47428531a252.68571469 252.68571469 0 0 0 147.70285687-47.86285687 32.26285687 32.26285687 0 0 0 7.57714313-44.19428531 30.75428531 30.75428531 0 0 0-43.2-7.64571469z"  ></path></symbol></svg>',
          l = (t = document.getElementsByTagName("script"))[
            t.length - 1
          ].getAttribute("data-injectcss");
        if (l && !e.__iconfont__svg__cssinject__) {
          e.__iconfont__svg__cssinject__ = !0;
          try {
            document.write(
              "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
            );
          } catch (e) {
            console && console.log(e);
          }
        }
        function d() {
          c || ((c = !0), s());
        }
        (i = function () {
          var e,
            t,
            i,
            a,
            s,
            n = document.createElement("div");
          (n.innerHTML = r),
            (r = null),
            (e = n.getElementsByTagName("svg")[0]) &&
              (e.setAttribute("aria-hidden", "true"),
              (e.style.position = "absolute"),
              (e.style.width = 0),
              (e.style.height = 0),
              (e.style.overflow = "hidden"),
              (t = e),
              (i = document.body).firstChild
                ? ((a = t), (s = i.firstChild).parentNode.insertBefore(a, s))
                : i.appendChild(t));
        }),
          document.addEventListener
            ? ~["complete", "loaded", "interactive"].indexOf(
                document.readyState
              )
              ? setTimeout(i, 0)
              : ((a = function () {
                  document.removeEventListener("DOMContentLoaded", a, !1), i();
                }),
                document.addEventListener("DOMContentLoaded", a, !1))
            : document.attachEvent &&
              ((s = i),
              (n = e.document),
              (c = !1),
              (o = function () {
                try {
                  n.documentElement.doScroll("left");
                } catch (e) {
                  return void setTimeout(o, 50);
                }
                d();
              })(),
              (n.onreadystatechange = function () {
                "complete" == n.readyState &&
                  ((n.onreadystatechange = null), d());
              }));
      })(window);
    },
    edec: function (e, t, i) {
      "use strict";
      i("8ed4");
    },
    f935: function (e, t, i) {
      e.exports = {
        menuBg: "#304156",
        menuText: "#000",
        menuActiveText: "#fff",
        primary: "#5eb7e8",
        success: "#4de2b3",
        warning: "#ffba00",
        danger: "#ff4949",
        info: "#5d5d5d"
      };
    }
  }
]);
