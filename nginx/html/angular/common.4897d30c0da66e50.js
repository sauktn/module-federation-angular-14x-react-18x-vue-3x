"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[592],{

/***/ 2431:
/*!********************************************************!*\
  !*** ./src/app/profile-user/profile-user.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserComponent": () => (/* binding */ ProfileUserComponent)
/* harmony export */ });
/* harmony import */ var react_profile_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react_profile/react */ 317);
/* harmony import */ var react_profile_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_profile_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_profile_react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react_profile/react-dom/client */ 9470);
/* harmony import */ var react_profile_react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_profile_react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _profile_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-user.service */ 3034);






const _c0 = ["customReactComponentContainer"];
const containerElementName = "customReactComponentContainer";
let ProfileUserComponent = /*#__PURE__*/(() => {
  class ProfileUserComponent {
    constructor(profileUserService) {
      this.profileUserService = profileUserService;
      this.user = {
        name: null,
        email: null
      };
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this.updateCurrentUser = this.updateCurrentUser.bind(this);
    }

    updateCurrentUser(user) {
      console.log(' -- Angular UpdateCurrent: ');
      console.log(user);
      this.profileUserService.setNewCurrentUser(user);
    }

    ngOnInit() {
      /*
       * Set default from Angular to React js
       */
      this.profileUserService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(res => {
        this.user = res;
      });
    }

    ngAfterViewInit() {
      this.root = (0,react_profile_react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(this.containerRef.nativeElement);
      this.root.render("Loading script... ");

      try {
        __webpack_require__.e(/*! import() */ 323).then(__webpack_require__.t.bind(__webpack_require__, /*! react_profile/ProfileReactComponent */ 1323, 23)).then(module => {
          const renderNode = react_profile_react__WEBPACK_IMPORTED_MODULE_0__.createElement(module.ProfileReactComponent, {
            name: this.user?.name,
            email: this.user?.email,
            sendToRemoteApp: this.updateCurrentUser
          });
          this.root.render(renderNode);
        });
      } catch (error) {
        console.log("Erorr", error);
      }
    }

    ngOnDestroy() {
      // this.root.unmountComponentAtNode(this.containerRef.nativeElement);
      this.root.unmount();
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  ProfileUserComponent.ɵfac = function ProfileUserComponent_Factory(t) {
    return new (t || ProfileUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_profile_user_service__WEBPACK_IMPORTED_MODULE_2__.ProfileUserService));
  };

  ProfileUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProfileUserComponent,
    selectors: [["app-profile-user"]],
    viewQuery: function ProfileUserComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
      }
    },
    inputs: {
      user: "user"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 0,
    consts: [[2, "margin", "35px"], [2, "color", "cadetblue"], [2, "font-family", "Inter, sans-serif", "color", "rgb(140, 137, 137, 1)", "font-size", "13px"], ["customReactComponentContainer", ""]],
    template: function ProfileUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Profile (React Microfrontend)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " This user profile component is being remotely loaded into the application from React App using Webpack Module Federation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
  return ProfileUserComponent;
})();

/***/ }),

/***/ 4586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4968);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2722);
/* harmony import */ var vue_settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue_settings/vue */ 3710);
/* harmony import */ var vue_settings_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_settings_vue__WEBPACK_IMPORTED_MODULE_0__);
var _SettingsComponent_destroy$;






const _c0 = ["customVueComponentContainer"];
const containerVueElementName = "customVueComponentContainer";
class SettingsComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.vueComRef = Array(); // app!: any;

    _SettingsComponent_destroy$.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject());

    this.selected = '';
  }

  ngAfterViewInit() {
    try {
      /*
        Shadown Root remotes to vue
        // import("settings_user/App").then((module) => {
       */
      __webpack_require__.e(/*! import() */ 456).then(__webpack_require__.t.bind(__webpack_require__, /*! vue_settings/App */ 5456, 23)).then(module => {
        const app = (0,vue_settings_vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(module.default);
        app.mount(this.containerVueRef.nativeElement);
        this.app = app;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'vueSendEvent').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__classPrivateFieldGet)(this, _SettingsComponent_destroy$, "f"))).subscribe({
          next: next => {
            this.selected = next?.detail?.vueObj;
          },
          error: error => {
            console.error(error);
          },
          complete: () => {}
        });
      });
    } catch (error) {
      console.log("Erorr", error);
    }
  }

  ngOnDestroy() {
    this.renderer.destroy();
    this.app.unmount();

    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__classPrivateFieldGet)(this, _SettingsComponent_destroy$, "f").next();

    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__classPrivateFieldGet)(this, _SettingsComponent_destroy$, "f").complete();
  }

}
_SettingsComponent_destroy$ = new WeakMap();

SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2));
};

SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  viewQuery: function SettingsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.containerVueRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.childContent = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 9,
  vars: 1,
  consts: [[2, "margin", "35px"], [2, "color", "cadetblue"], [2, "font-family", "Inter, sans-serif", "color", "rgb(140, 137, 137, 1)", "font-size", "13px", "margin-bottom", "15px"], ["customVueComponentContainer", ""]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Settings (Vue Microfrontend)");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " This settings component is being remotely loaded into the application from Vue App using Webpack Module Federation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Vue Settings selected: ", ctx.selected, " ");
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4968:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 8421);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 9751);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 6099);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 1144);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 576);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 3268);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }

  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];

  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }

  if (!add) {
    throw new TypeError('Invalid event target');
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);

    add(handler);
    return () => remove(handler);
  });
}

function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}

function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}

function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}

function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
} //# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 2722:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4482);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 5403);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 8421);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 5032);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
} //# sourceMappingURL=takeUntil.js.map

/***/ })

}]);