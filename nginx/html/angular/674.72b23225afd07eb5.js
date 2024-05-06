"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[674],{

/***/ 6674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile-user/profile-user.component */ 2431);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/settings.component */ 4586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);



let LayoutComponent = /*#__PURE__*/(() => {
  class LayoutComponent {}

  LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)();
  };

  LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["app-layout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-profile-user")(1, "app-settings");
      }
    },
    dependencies: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent, _profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_0__.ProfileUserComponent],
    encapsulation: 2
  });
  return LayoutComponent;
})();

/***/ })

}]);