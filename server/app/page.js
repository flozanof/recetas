(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 3378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ContramuslosPolloSoja": 14711,
	"./ContramuslosPolloSoja.json": 14711
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3378;

/***/ }),

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 48250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92838)), "c:\\Proyectos\\Paco\\recetas\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51921)), "c:\\Proyectos\\Paco\\recetas\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["c:\\Proyectos\\Paco\\recetas\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 45050:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72211))

/***/ }),

/***/ 92510:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 12257:
/***/ (() => {



/***/ }),

/***/ 72211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardHeader/index.js
var CardHeader = __webpack_require__(77782);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardMedia/index.js
var CardMedia = __webpack_require__(23282);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardContent/index.js
var CardContent = __webpack_require__(1853);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardActions/index.js
var CardActions = __webpack_require__(23613);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(31022);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/colors/index.js
var colors = __webpack_require__(48007);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Share.js
var Share = __webpack_require__(99066);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(47048);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(15922);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Grid/index.js
var Grid = __webpack_require__(21971);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CircularProgress/index.js
var CircularProgress = __webpack_require__(99360);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress);
;// CONCATENATED MODULE: ./app/components/recetaLoading.tsx




function RecetaLoading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            alignItems: "center",
            justifyContent: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                disableShrink: true
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(95915);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogContent/index.js
var DialogContent = __webpack_require__(16856);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogContentText/index.js
var DialogContentText = __webpack_require__(69547);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogTitle/index.js
var DialogTitle = __webpack_require__(42153);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 18 modules
var styled = __webpack_require__(49716);
// EXTERNAL MODULE: ./node_modules/react-downloadfile-hook/dist/index.js
var dist = __webpack_require__(21777);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(30237);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(94038);
;// CONCATENATED MODULE: ./app/components/recetaFormIngredienteUpdt.tsx







function getIndex(id) {}
function RecetaFormIngredientesUpdt(props) {
    const { indexGrp, control, register } = props;
    const { fields, remove, append } = (0,index_esm/* useFieldArray */.Dq)({
        control,
        name: `IngredientesGrupo.${indexGrp}.Ingredientes`
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            fields.map((field, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                md: 12,
                                lg: 12,
                                xl: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    placeholder: "Nombre",
                                    ...register(`IngredientesGrupo.${indexGrp}.Ingredientes.${index}.Nombre`, {
                                        required: true
                                    }),
                                    style: {
                                        marginRight: "25px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                md: 2,
                                lg: 2,
                                xl: 2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    placeholder: "Cantidad",
                                    ...register(`IngredientesGrupo.${indexGrp}.Ingredientes.${index}.Cantidad`, {
                                        required: true
                                    }),
                                    style: {
                                        marginRight: "25px",
                                        marginTop: "0px",
                                        marginBottom: "0px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                md: 4,
                                lg: 4,
                                xl: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    placeholder: "Unidad",
                                    ...register(`IngredientesGrupo.${indexGrp}.Ingredientes.${index}.Unidad`, {
                                        required: true
                                    }),
                                    style: {
                                        marginRight: "25px",
                                        marginTop: "0px",
                                        marginBottom: "0px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                md: 6,
                                lg: 6,
                                xl: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "outlined",
                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {}),
                                    sx: {
                                        marginBottom: "25px"
                                    },
                                    onClick: ()=>{
                                        remove(index);
                                    },
                                    children: "Delete"
                                })
                            })
                        ]
                    })
                }, index);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "outlined",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {}),
                onClick: ()=>{
                    append({});
                },
                children: "A\xf1adir Ingrediente"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/recetaFormIngrediente.tsx




function RecetaFormIngredientes(props) {
    const { indexGrp, control, register } = props;
    const { fields, remove, append } = (0,index_esm/* useFieldArray */.Dq)({
        control,
        name: `IngredientesGrupo`
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            fields.filter((x, y)=>y === indexGrp).map((item, k)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(RecetaFormIngredientesUpdt, {
                        indexGrp,
                        control,
                        register
                    })
                }, item.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/recetaFormGrupoIngr.tsx






function RecetaFormGrupoIngr(props) {
    const { control, register, getValues } = props;
    const { fields, remove, append } = (0,index_esm/* useFieldArray */.Dq)({
        control,
        name: `IngredientesGrupo`
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            fields.map((item, indexGrp)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Grupo:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            ...register(`IngredientesGrupo.${indexGrp}.Grupo`, {
                                required: true
                            }),
                            style: {
                                marginRight: "25px"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RecetaFormIngredientes, {
                            indexGrp,
                            control,
                            register,
                            getValues
                        })
                    ]
                }, item.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "outlined",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {}),
                sx: {
                    marginBottom: "15px",
                    marginTop: "15px"
                },
                onClick: ()=>{
                    append({});
                },
                children: "A\xf1adir Grupo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/recetaFormElaboracion.tsx






function RecetaFormElaboracion(props) {
    const { control, register, getValues } = props;
    const { fields, remove, append } = (0,index_esm/* useFieldArray */.Dq)({
        control,
        name: `Elaboracion`
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Pasos:"
            }),
            fields.map((item, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "number",
                            ...register(`Elaboracion.${index}.Paso`, {
                                required: true
                            }),
                            style: {
                                marginRight: "25px"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            ...register(`Elaboracion.${index}.Descripcion`, {
                                required: true
                            }),
                            style: {
                                marginRight: "25px"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "outlined",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {}),
                            size: "small",
                            sx: {
                                marginTop: "-30px"
                            },
                            onClick: ()=>{
                                remove(index);
                            },
                            children: "Delete"
                        })
                    ]
                }, item.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "outlined",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {}),
                onClick: ()=>{
                    append({});
                },
                children: "A\xf1adir Elaboraci\xf3n"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/recetaFormNotas.tsx






function RecetaFormNotas(props) {
    const { control, register, getValues } = props;
    const { fields, remove, append } = (0,index_esm/* useFieldArray */.Dq)({
        control,
        name: `Notas`
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            fields.map((item, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            ...register(`Notas.${index}`, {
                                required: true
                            }),
                            style: {
                                marginRight: "25px"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "outlined",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {}),
                            size: "small",
                            sx: {
                                marginTop: "-30px"
                            },
                            onClick: ()=>{
                                remove(index);
                            },
                            children: "Delete"
                        })
                    ]
                }, item.id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "outlined",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {}),
                onClick: ()=>{
                    append("");
                },
                children: "A\xf1adir Nota"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
}

// EXTERNAL MODULE: ./app/css/styleForm.css
var styleForm = __webpack_require__(43229);
;// CONCATENATED MODULE: ./app/components/recetaForm.tsx



















const MyPaper = (0,styled/* default */.ZP)((Paper_default()))(({ theme })=>({
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        lineHeight: "60px",
        padding: "5px"
    }));
function getFormJsonData(recipe) {
    console.log("*************** GET FORM JSON DATA ************");
    return JSON.stringify(recipe);
}
function RecetaForm(props) {
    const [recipe, setRecipe] = react_default().useState(props.receta);
    const [open, setOpen] = react_default().useState(true);
    const [fileNameRecipe, setfileNameRecipe] = react_default().useState(props.fileNameRecipe);
    const { control, register, handleSubmit, getValues, formState: { errors }, reset, setValue } = (0,index_esm/* useForm */.cI)({
        defaultValues: (0,react_.useMemo)(()=>{
            return props.receta;
        }, [
            props
        ])
    });
    const { downloadFile } = (0,dist/* useDownloadFile */.O)({
        fileName: "receta.json",
        format: "applicationn/json",
        data: getFormJsonData(recipe)
    });
    const handleClose = ()=>{
        setOpen(false);
        props.handleEditMode();
    };
    const onSubmit = (data)=>{
        if (data.Elaboracion != null) {
            data.Elaboracion.sort((a, b)=>a.Paso - b.Paso);
        }
    };
    function saveFile() {
        downloadFile();
    }
    if (recipe.Nombre) {
        return console.log("------------------  PINTANDO ------------------------------------------"), /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
            fullWidth: true,
            maxWidth: "xl",
            open: open,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                    className: "h1",
                    children: [
                        props.mode === "U" ? "Modificaci\xf3n Receta" : "Nueva Receta",
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "14px",
                                color: "white"
                            },
                            children: "Inserte los datos de la receta, gu\xe1rdala y desc\xe1rgala. Posteriormente suba manualmente el fichero json al servidor junto con la imagen."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    className: "form",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                            className: "p",
                            marginBottom: 3
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                            sx: {
                                width: "100%"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                onSubmit: handleSubmit(onSubmit),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                                    sx: {
                                        flexGrow: 1,
                                        p: "5px 15px 15px 15px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        container: true,
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                md: 6,
                                                xl: 3,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyPaper, {
                                                    className: "form",
                                                    elevation: 3,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "DATOS GEN\xc9RICOS"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Nombre receta",
                                                            ...register("Nombre", {
                                                                required: true,
                                                                maxLength: 50
                                                            }),
                                                            "aria-invalid": errors.Nombre ? "true" : "false"
                                                        }),
                                                        errors.Nombre && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            role: "alert",
                                                            children: "Nombre obligatorio. M\xe1x 50 caracteres"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Foto",
                                                            ...register("Foto", {
                                                                required: "Foto obligatoria",
                                                                maxLength: 100
                                                            }),
                                                            "aria-invalid": errors.Nombre ? "true" : "false"
                                                        }),
                                                        errors.Foto && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            role: "alert",
                                                            children: [
                                                                "Error: ",
                                                                errors.Foto.message
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "number",
                                                            placeholder: "Comensales",
                                                            ...register("Comensales", {
                                                                required: "Comensales obligatorios",
                                                                maxLength: 2
                                                            }),
                                                            "aria-invalid": errors.Comensales ? "true" : "false"
                                                        }),
                                                        errors.Comensales && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            role: "alert",
                                                            children: [
                                                                "Error: ",
                                                                errors.Comensales.message
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "number",
                                                            placeholder: "Dificultad (M\xe1x: 5)",
                                                            ...register("Dificultad", {
                                                                required: "Dificultad  obligatoria",
                                                                maxLength: 1,
                                                                max: 5
                                                            }),
                                                            "aria-invalid": errors.Nombre ? "true" : "false"
                                                        }),
                                                        errors.Dificultad && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            role: "alert",
                                                            children: [
                                                                "Error: ",
                                                                errors.Dificultad.message
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "number",
                                                            placeholder: "Tiempo Cocci\xf3n (minutos)",
                                                            ...register("TiempoCoccion", {
                                                                required: "Tiempo Cocci\xf3n obligatorio",
                                                                maxLength: 4
                                                            }),
                                                            "aria-invalid": errors.Nombre ? "true" : "false"
                                                        }),
                                                        errors.TiempoCoccion && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            role: "alert",
                                                            children: [
                                                                "Error: ",
                                                                errors.TiempoCoccion.message
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "number",
                                                            placeholder: "Tiempo Elaboraci\xf3n (minutos)",
                                                            ...register("TiempoElaboracion", {
                                                                required: "Tiempo elaboraci\xf3n obligatorio",
                                                                maxLength: 4
                                                            }),
                                                            "aria-invalid": errors.Nombre ? "true" : "false"
                                                        }),
                                                        errors.TiempoElaboracion && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            role: "alert",
                                                            children: [
                                                                "Error: ",
                                                                errors.TiempoElaboracion.message
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "T\xe9cnica Elaboraci\xf3n",
                                                            ...register("TecnicaElaboracion", {
                                                                required: "T\xe9cnica elaboraci\xf3n obligatoria"
                                                            }),
                                                            "aria-invalid": errors.Nombre ? "true" : "false"
                                                        }),
                                                        errors.TecnicaElaboracion && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            role: "alert",
                                                            children: [
                                                                "Error: ",
                                                                errors.TecnicaElaboracion.message
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                md: 6,
                                                xl: 5,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyPaper, {
                                                    className: "form",
                                                    elevation: 3,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "INGREDIENTES"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(RecetaFormGrupoIngr, {
                                                            control,
                                                            register,
                                                            getValues,
                                                            setValue
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                md: 12,
                                                xl: 4,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyPaper, {
                                                    className: "form",
                                                    elevation: 3,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "ELABORACI\xd3N"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(RecetaFormElaboracion, {
                                                            control,
                                                            register,
                                                            getValues,
                                                            setValue
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "NOTAS"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(RecetaFormNotas, {
                                                            control,
                                                            register,
                                                            getValues,
                                                            setValue
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: handleClose,
                            children: "Exit"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: saveFile,
                            children: "Download File"
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(RecetaLoading, {});
    }
}

;// CONCATENATED MODULE: ./app/components/ingrediente.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Ingrediente(props) {
    if (props.grpIng != null && props.grpIng.length > 0) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    paragraph: true,
                    variant: "h5",
                    sx: {
                        marginBottom: "0px"
                    },
                    children: "Ingredientes"
                }, "-1"),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    style: {
                        marginBottom: "15px"
                    }
                }),
                props.grpIng.map((grp, grpIndex)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            props.grpIng != null && props.grpIng.length > 1 && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                variant: "h6",
                                children: grp.Grupo
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: grp.Ingredientes?.filter((x)=>{
                                    x != null;
                                }).map((ingrediente, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                paragraph: true,
                                                variant: "body2",
                                                children: [
                                                    ingrediente.Nombre,
                                                    " (",
                                                    ingrediente.Cantidad,
                                                    " ",
                                                    ingrediente.Unidad,
                                                    ")"
                                                ]
                                            })
                                        }, index)
                                    }, index);
                                })
                            })
                        ]
                    }, grpIndex);
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./app/components/elaboracion.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function elaboracion_Ingrediente({ elaboracion }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                variant: "h5",
                sx: {
                    marginBottom: "0px"
                },
                children: "Elaboraci\xf3n"
            }, "-2"),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                style: {
                    marginBottom: "15px"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: elaboracion && elaboracion.map((paso, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    paragraph: true,
                                    variant: "body2",
                                    children: [
                                        "Paso: ",
                                        paso.Paso
                                    ]
                                })
                            }, "1 +{index}"),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    variant: "body2",
                                    children: paso.Descripcion
                                })
                            }, "2 + {index}")
                        ]
                    }, index);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/nota.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function nota_Ingrediente({ nota }) {
    if (nota != null && nota.length > 0) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    paragraph: true,
                    variant: "h5",
                    sx: {
                        marginBottom: "0px"
                    },
                    children: "Notas"
                }, "-3"),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    style: {
                        marginBottom: "15px"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: nota.map((nota, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    variant: "body2",
                                    children: nota
                                })
                            }, "1 +{index}")
                        }, index);
                    })
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./app/components/receta.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



















const receta_ExpandMore = (0,styles.styled)((props)=>{
    const { expand, ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        ...other
    });
})(({ theme, expand })=>({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    }));
function Receta(props) {
    const [receta, setReceta] = (0,react_.useState)({
        Nombre: "",
        Foto: "",
        Comensales: 0,
        Dificultad: 0,
        TiempoCoccion: 0,
        TiempoElaboracion: 0,
        TecnicaElaboracion: "",
        IngredientesGrupo: [],
        Elaboracion: [],
        Notas: []
    });
    const [expanded, setExpanded] = (0,react_.useState)(false);
    const [editMode, setEditMode] = (0,react_.useState)(false);
    // Recuperamos información del cocinero de la API.
    (0,react_.useEffect)(()=>{
        fetch("recetas/" + props.filename, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(myJson) {
            setReceta(myJson);
        });
    }, [
        props.filename
    ]);
    function handleEditMode() {
        setEditMode(!editMode);
    }
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: editMode ? /*#__PURE__*/ jsx_runtime_.jsx(RecetaForm, {
            mode: "U",
            fileNameRecipe: "ContramuslosPolloSoja.json",
            receta: receta,
            handleEditMode: ()=>handleEditMode()
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            sx: {
                maxWidth: 345
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                    avatar: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        sx: {
                            width: 0,
                            bgcolor: colors/* red */.Q6[500],
                            visibility: "hidden"
                        }
                    }),
                    action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        "aria-label": "settings",
                        onClick: handleEditMode,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Edit/* default */.Z, {})
                    }),
                    title: receta.Nombre
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                    component: "img",
                    height: "194",
                    image: receta.Foto,
                    alt: "Foto receta"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Comensales: ",
                                                receta.Comensales
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Dificultad: ",
                                                receta.Dificultad
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        "Tiempo elaboraci\xf3n: ",
                                        receta.TiempoElaboracion,
                                        " minutos"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        "Tiempo cocci\xf3n: ",
                                        receta.TiempoCoccion,
                                        " minutos"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        "T\xe9cnica elaboraci\xf3n: ",
                                        receta.TecnicaElaboracion
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                    disableSpacing: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            "aria-label": "share",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Share/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(receta_ExpandMore, {
                            expand: expanded,
                            onClick: handleExpandClick,
                            "aria-expanded": expanded,
                            "aria-label": "show more",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ExpandMore/* default */.Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    in: expanded,
                    timeout: "auto",
                    unmountOnExit: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Ingrediente, {
                                grpIng: receta.IngredientesGrupo
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(elaboracion_Ingrediente, {
                                elaboracion: receta.Elaboracion
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(nota_Ingrediente, {
                                nota: receta.Notas
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./public/recetas/prototipo/NuevaReceta.json
const NuevaReceta_namespaceObject = JSON.parse('{"Nombre":"Nombre","Foto":"","Comensales:":"","Dificultad":null,"Comensales":null,"TiempoCoccion":null,"TiempoElaboracion":null,"TecnicaElaboracion":"","IngredientesGrupo":[{"Grupo":"Nombre","Ingredientes":null}],"Elaboracion":[{"Paso":1,"Descripcion":""}],"Notas":[]}');
;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








//const images = require('../public/recetas', false);
//const imageList = images.keys().map(image => images(image));
function getRecetas() {
    const images = __webpack_require__(3378);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: images.keys().filter((nombre)=>nombre.endsWith(".json")).map((receta, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Receta, {
                filename: receta
            }, index);
        })
    });
}
function Home() {
    const [newRecipe, setNewRecipe] = (0,react_.useState)(false);
    function handleEditMode() {
        setNewRecipe(!newRecipe);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: newRecipe ? /*#__PURE__*/ jsx_runtime_.jsx(RecetaForm, {
            mode: "U",
            fileNameRecipe: "Receta.json",
            receta: NuevaReceta_namespaceObject,
            handleEditMode: ()=>handleEditMode()
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "flex flex-col justify-between p-24",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "outlined",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(Add/* default */.Z, {}),
                    sx: {
                        marginBottom: "10px",
                        maxWidth: "180px"
                    },
                    onClick: ()=>{
                        handleEditMode();
                    },
                    children: "A\xf1adir Rectea"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            md: 6,
                            lg: 4,
                            xl: 3,
                            children: getRecetas()
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 51921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92411);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Recetas App",
    description: "Gesti\xf3n recetas"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 92838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`c:\Proyectos\Paco\recetas\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 43229:
/***/ (() => {



/***/ }),

/***/ 67272:
/***/ (() => {



/***/ }),

/***/ 14711:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Nombre":"Contramuslos de pollo marinados con soja","Foto":"ContramuslosPolloSoja.jpg","Comensales":4,"Dificultad":2,"TiempoCoccion":30,"TiempoElaboracion":120,"TecnicaElaboracion":"Horno","IngredientesGrupo":[{"Grupo":"Principal","Ingredientes":[{"Nombre":"Contramuslo pollo","Cantidad":8,"Unidad":"Unidad","Sustituto":["Trasero pollo"]},{"Nombre":"Arroz","Cantidad":3,"Unidad":"Taza"}]},{"Grupo":"Marinada","Ingredientes":[{"Nombre":"Soja","Cantidad":10,"Unidad":"Cucharada"},{"Nombre":"Zumo limón","Cantidad":2,"Unidad":"Cucharada"},{"Nombre":"Zumo naranja","Cantidad":0.5,"Unidad":"Unidad","Sustituto":["Miel","Mandarina"]},{"Nombre":"Jerez","Cantidad":2,"Unidad":"Cucharada"},{"Nombre":"Ajo","Cantidad":2,"Unidad":"Unidad"}]}],"Elaboracion":[{"Paso":1,"Descripcion":"Marinada: mezclar los ingredientes de la marinada en un cuenco. Vierte la mitad del preparado en una fuente, coloca el pollo encima y riégalo en el resto. Tápalo y déjalo reposar 2 horas."},{"Paso":2,"Descripcion":"Precaliente el horno a 200 ºC y hornea el pollo durante 20 minutos con la piel hacia arriba. Úntalo con aceite y cuécelo 10 minutos más."},{"Paso":3,"Descripcion":"Cuando esté hecho, sirve el pollo con el arroz caliente."}],"Notas":["En horno siemens poner función \'Grill con aire caliente\' (dibujo grill con una turbina).","Saltea el arroz con los jugos de cocción del pollo. Quedará mucho más sabroso."]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501], () => (__webpack_exec__(48250)));
module.exports = __webpack_exports__;

})();