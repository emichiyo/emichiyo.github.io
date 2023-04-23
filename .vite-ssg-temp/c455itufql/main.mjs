import { defineComponent, useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { ViteSSG } from "vite-ssg";
const index$1 = "";
const index = "";
const style = "";
const _sfc_main$9 = defineComponent({
  name: "FlexBox",
  props: {
    row: { type: Boolean, required: false },
    column: { type: Boolean, required: false },
    left: { type: Boolean, required: false }
  },
  computed: {
    classObject() {
      const obj = { "flex-box": true };
      const buffer = Object.assign(obj, this.$props);
      return buffer;
    },
    styleObject() {
      const obj = {};
      Object.assign(obj, {
        "justify-content": this.left ? "left" : "center",
        "align-items": this.left ? "left" : "center"
      });
      return obj;
    }
  }
});
const FlexBox_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.classObject,
    style: _ctx.styleObject
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FlexBox.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const FlexBox = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__file", "/Users/jalen/Documents/emichiyo/src/components/FlexBox.vue"]]);
const _sfc_main$8 = defineComponent({
  name: "FlexBox",
  props: {
    order: { type: Number, required: false }
  },
  computed: {
    styleObject() {
      return {
        order: this.order
      };
    }
  }
});
const FlexItem_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex-item",
    style: _ctx.styleObject
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FlexItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const FlexItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__file", "/Users/jalen/Documents/emichiyo/src/components/FlexItem.vue"]]);
const _sfc_main$7 = defineComponent({
  name: "NavBar",
  components: {
    FlexBox,
    FlexItem
  },
  data() {
    return {
      component_width: 3e3,
      // tab_names: ['Home', 'About', 'Gallery', 'Commision', 'Contact']
      tab_names: [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Gallery", route: "/gallery" },
        { name: "Commission", route: "/commission" },
        { name: "Contact", route: "/contact" }
      ]
    };
  }
});
const NavBar_vue_vue_type_style_index_0_scoped_c3ceb15a_lang = "";
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlexBox = resolveComponent("FlexBox");
  const _component_FlexItem = resolveComponent("FlexItem");
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(_component_FlexBox, mergeProps({
    column: "",
    class: "navbar"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FlexBox, { row: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_FlexItem, { class: "head-item" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="header-name" data-v-c3ceb15a${_scopeId3}>Emichiyo!</h1>`);
                  } else {
                    return [
                      createVNode("h1", { class: "header-name" }, "Emichiyo!")
                    ];
                  }
                }),
                _: 1
                /* STABLE */
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_FlexItem, { class: "head-item" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_FlexBox, {
                      column: "",
                      left: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_FlexItem, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Artist and Illustrator `);
                              } else {
                                return [
                                  createTextVNode(" Artist and Illustrator ")
                                ];
                              }
                            }),
                            _: 1
                            /* STABLE */
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_FlexItem, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` based in Omaha, Nebraska `);
                              } else {
                                return [
                                  createTextVNode(" based in Omaha, Nebraska ")
                                ];
                              }
                            }),
                            _: 1
                            /* STABLE */
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_FlexItem, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=" data-v-c3ceb15a${_scopeId5}>@emi.chiyo_</a>`);
                              } else {
                                return [
                                  createVNode("a", { href: "https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=" }, "@emi.chiyo_")
                                ];
                              }
                            }),
                            _: 1
                            /* STABLE */
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_FlexItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" Artist and Illustrator ")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_FlexItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" based in Omaha, Nebraska ")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_FlexItem, null, {
                              default: withCtx(() => [
                                createVNode("a", { href: "https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=" }, "@emi.chiyo_")
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ];
                        }
                      }),
                      _: 1
                      /* STABLE */
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_FlexBox, {
                        column: "",
                        left: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FlexItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" Artist and Illustrator ")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(_component_FlexItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" based in Omaha, Nebraska ")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(_component_FlexItem, null, {
                            default: withCtx(() => [
                              createVNode("a", { href: "https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=" }, "@emi.chiyo_")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ];
                  }
                }),
                _: 1
                /* STABLE */
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_FlexItem, { class: "head-item" }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "header-name" }, "Emichiyo!")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_FlexItem, { class: "head-item" }, {
                  default: withCtx(() => [
                    createVNode(_component_FlexBox, {
                      column: "",
                      left: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FlexItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" Artist and Illustrator ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_FlexItem, null, {
                          default: withCtx(() => [
                            createTextVNode(" based in Omaha, Nebraska ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_FlexItem, null, {
                          default: withCtx(() => [
                            createVNode("a", { href: "https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=" }, "@emi.chiyo_")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_FlexBox, { row: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.tab_names, (tab, index2) => {
                _push3(`<div class="tab-item" data-v-c3ceb15a${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_router_link, {
                  to: tab.route
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(tab.name)}`);
                    } else {
                      return [
                        createTextVNode(
                          toDisplayString(tab.name),
                          1
                          /* TEXT */
                        )
                      ];
                    }
                  }),
                  _: 2
                  /* DYNAMIC */
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(
                  Fragment,
                  null,
                  renderList(_ctx.tab_names, (tab, index2) => {
                    return openBlock(), createBlock("div", {
                      key: index2,
                      class: "tab-item"
                    }, [
                      createVNode(_component_router_link, {
                        to: tab.route
                      }, {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(tab.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FlexBox, { row: "" }, {
            default: withCtx(() => [
              createVNode(_component_FlexItem, { class: "head-item" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "header-name" }, "Emichiyo!")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_FlexItem, { class: "head-item" }, {
                default: withCtx(() => [
                  createVNode(_component_FlexBox, {
                    column: "",
                    left: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_FlexItem, null, {
                        default: withCtx(() => [
                          createTextVNode(" Artist and Illustrator ")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_FlexItem, null, {
                        default: withCtx(() => [
                          createTextVNode(" based in Omaha, Nebraska ")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_FlexItem, null, {
                        default: withCtx(() => [
                          createVNode("a", { href: "https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=" }, "@emi.chiyo_")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_FlexBox, { row: "" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(
                Fragment,
                null,
                renderList(_ctx.tab_names, (tab, index2) => {
                  return openBlock(), createBlock("div", {
                    key: index2,
                    class: "tab-item"
                  }, [
                    createVNode(_component_router_link, {
                      to: tab.route
                    }, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString(tab.name),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["to"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-c3ceb15a"], ["__file", "/Users/jalen/Documents/emichiyo/src/components/NavBar.vue"]]);
const _sfc_main$6 = defineComponent({
  name: "Footer",
  components: {
    FlexBox,
    FlexItem
  },
  data() {
    return {
      component_width: 3e3
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_4896eafd_lang = "";
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlexBox = resolveComponent("FlexBox");
  const _component_FlexItem = resolveComponent("FlexItem");
  _push(ssrRenderComponent(_component_FlexBox, mergeProps({
    column: "",
    left: "",
    class: "footer"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FlexItem, { class: "head-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p data-v-4896eafd${_scopeId2}>Emichiyo&#39;s Feet :3</p>`);
            } else {
              return [
                createVNode("p", null, "Emichiyo's Feet :3")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FlexItem, { class: "head-item" }, {
            default: withCtx(() => [
              createVNode("p", null, "Emichiyo's Feet :3")
            ]),
            _: 1
            /* STABLE */
          })
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-4896eafd"], ["__file", "/Users/jalen/Documents/emichiyo/src/components/Footer.vue"]]);
const _sfc_main$5 = defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer
  }
});
const App_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_router_view = resolveComponent("router-view");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(ssrRenderComponent(_component_router_view, { class: "current-page" }, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__file", "/Users/jalen/Documents/emichiyo/src/App.vue"]]);
const _sfc_main$4 = defineComponent({
  name: "Hello World",
  components: {
    FlexBox
  },
  props: {
    msg: String
  },
  computed: {
    imageCSS() {
      return {
        width: "100%",
        height: `${globalThis.window.innerHeight - 232 - 80}px`
        // margin-left: margins,
        // margin-right: margins,
      };
    }
  }
});
const _imports_0 = "/assets/outer-space-971d088c.jpg";
const index_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlexBox = resolveComponent("FlexBox");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_FlexBox, mergeProps({ column: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="space" style="${ssrRenderStyle(_ctx.imageCSS)}"${_scopeId}>`);
      } else {
        return [
          createVNode(
            "img",
            {
              src: _imports_0,
              alt: "space",
              style: _ctx.imageCSS
            },
            null,
            4
            /* STYLE */
          )
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<!-- <img src="../assets/ellie.jpg" alt="The girl" width="400"/> --><!-- <p>Wow! Isn't she beautiful?</p> --><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __pages_import_0__ = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__file", "/Users/jalen/Documents/emichiyo/src/pages/index.vue"]]);
const __pages_import_1__ = () => Promise.resolve().then(() => Gallery$1);
const __pages_import_2__ = () => Promise.resolve().then(() => Contact$1);
const __pages_import_3__ = () => Promise.resolve().then(() => Commission$1);
const __pages_import_4__ = () => Promise.resolve().then(() => About$1);
const routes = [{ "name": "index", "path": "/", "component": __pages_import_0__, "props": true }, { "name": "Gallery", "path": "/gallery", "component": __pages_import_1__, "props": true }, { "name": "Contact", "path": "/contact", "component": __pages_import_2__, "props": true }, { "name": "Commission", "path": "/commission", "component": __pages_import_3__, "props": true }, { "name": "About", "path": "/about", "component": __pages_import_4__, "props": true }];
const createApp = ViteSSG(
  App,
  { routes }
);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Gallery</h1>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Gallery.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__file", "/Users/jalen/Documents/emichiyo/src/pages/Gallery.vue"]]);
const Gallery$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gallery
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Contact</h1>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__file", "/Users/jalen/Documents/emichiyo/src/pages/Contact.vue"]]);
const Contact$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Commission</h1>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Commission.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Commission = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__file", "/Users/jalen/Documents/emichiyo/src/pages/Commission.vue"]]);
const Commission$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Commission
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = defineComponent({
  name: "About",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  }
});
const About_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-box" }, _attrs))}><h1>About</h1><p>Hello!</p><!--[-->`);
  ssrRenderList(_ctx.list, (index2) => {
    _push(`<p>${ssrInterpolate(index2)} We can put this type augmentation in a .ts file, or in a project-wide *.d.ts file. Either way, make sure it is included in tsconfig.json. For library / plugin authors, this file should be specified in the types property in package.json. <br> In order to take advantage of module augmentation, you will need to ensure the augmentation is placed in a TypeScript module. That is to say, the file needs to contain at least one top-level import or export, even if it is just export {}. If the augmentation is placed outside of a module, it will overwrite the original types rather than augmenting them! </p>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/jalen/Documents/emichiyo/src/pages/About.vue"]]);
const About$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
export {
  createApp
};
