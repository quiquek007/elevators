"use strict";
(self["webpackChunkElevators"] = self["webpackChunkElevators"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _redux_settings_panel_settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux/settings-panel/settings-panel.actions */ 1448);
/* harmony import */ var _constants_project_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/project.constants */ 4110);
/* harmony import */ var app_redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/redux/general-settings/general-settings.actions */ 9014);
/* harmony import */ var app_redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/redux/camera-settings/camera-settings.actions */ 9352);
/* harmony import */ var app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/constants/camera-settings.constants */ 7681);
/* harmony import */ var _redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/elevator-manager-settings/elevator-manager-settings.actions */ 6550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_engine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/engine.service */ 701);
/* harmony import */ var _services_object_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/object-manager.service */ 3510);
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/engine.component */ 2558);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 2930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);
/* harmony import */ var _settings_panel_animation_player_animation_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings-panel/animation-player/animation-player.component */ 8481);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings-panel/settings-panel.component */ 6820);

















function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r3.onResetAllSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("position", ctx_r1.getTooltipPosition());
} }
function AppComponent_kendo_drawer_content_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "kendo-drawer-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "settings-panel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selectedOption", ctx_r2.selectedTab);
} }
const _c0 = function (a0) { return { "right-side": a0 }; };
const _c1 = function (a0) { return { "k-flip-h": a0 }; };
const _c2 = function (a0, a1) { return { "opposite-side": a0, "opposite-side--right-side": a1 }; };
class AppComponent {
    constructor(store, engServ, objectManager) {
        this.store = store;
        this.engServ = engServ;
        this.objectManager = objectManager;
        this.subscriptions = [];
        this.cameraSettings = Object.assign({}, app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_4__["default"]);
        this.contentExpanded = false;
        this.panelOnRightSide = false;
        this.items = [
            {
                text: 'ElevatorsManager',
                icon: 'k-i-plus-outline'
            },
            {
                text: 'Passangers',
                icon: 'k-i-myspace-box'
            },
            {
                text: 'GlobalSettings',
                icon: 'k-i-gear',
                selected: true
            },
            {
                text: 'SmartDumbManager',
                icon: 'k-i-hyperlink'
            },
            {
                text: 'Favourites',
                icon: 'k-i-star-outline'
            }
            // {
            //     separator: true
            // },
            // {
            //     text: 'Reset All',
            //     icon: 'k-i-reload'
            // }
        ];
    }
    canDeactivate(event) {
        localStorage.setItem(_constants_project_constants__WEBPACK_IMPORTED_MODULE_1__.localStorageProject, JSON.stringify(this.plainStore));
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state).subscribe(x => this.plainStore = x), this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.panelOnRightSide = position === 'right'), this.store.select(state => state.settingsPanel.formOpened).subscribe(formOpened => this.contentExpanded = formOpened), this.store
            .select(state => state.settingsPanel.selectedTab)
            .subscribe(selectedTab => {
            this.selectedTab = selectedTab;
            this.items.forEach(item => item.selected = false);
            this.items.find(({ text }) => text === selectedTab).selected = true;
        }), this.store
            .select(state => state.cameraSettings.cameraPosition)
            .subscribe(cameraPosition => this.cameraSettings.cameraPosition = cameraPosition), this.store
            .select(state => state.cameraSettings.controlsTarget)
            .subscribe(controlsTarget => this.cameraSettings.controlsTarget = controlsTarget), this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.panelOnRightSide ? 'left' : 'right';
    }
    onSelect(ev) {
        this.items.forEach(item => item.selected = false);
        this.items.find(({ text }) => text === ev.item.text).selected = true;
        this.store.dispatch(new _redux_settings_panel_settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedTab(ev.item.text));
    }
    onHideContent() {
        this.store.dispatch(new _redux_settings_panel_settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetPanelOpened(!this.contentExpanded));
    }
    changeContolPanelSide() {
        this.store.dispatch(new _redux_settings_panel_settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetPanelPosition(this.getTooltipPosition()));
    }
    onResetAllSettings() {
        this.allElevators.forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
        this.store.dispatch(new _redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_5__["default"].ResetAllSettings());
        this.store.dispatch(new app_redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].ResetAllSettings());
        this.store.dispatch(new app_redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].ResetCameraPosition());
        this.store.dispatch(new app_redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_3__["default"].ResetControlsTarget());
        this.engServ.setInitialCameraPosition(this.cameraSettings);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_services_engine_service__WEBPACK_IMPORTED_MODULE_6__.EngineService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_object_manager_service__WEBPACK_IMPORTED_MODULE_7__.ObjectManagerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) { return ctx.canDeactivate($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 20, consts: [[3, "ngClass"], [3, "position", "items", "mode", "mini", "autoCollapse", "select"], ["miniPanel", ""], ["kendoDrawerFooterTemplate", ""], [4, "ngIf"], ["kendoTooltip", "", 1, "form-controllers", 3, "position"], ["title", "Panel side", 1, "k-button", 3, "click"], [1, "k-icon", "k-i-indent-increase", 3, "ngClass"], ["title", "Toggle content", 1, "k-button", 3, "click"], [1, "k-icon", "k-i-logout", 3, "ngClass"], ["kendoButton", "", "kendoTooltip", "", "title", "Reset all settings", "iconClass", "k-icon k-i-reload", 1, "reset-button", 3, "position", "click"], [3, "selectedOption"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "kendo-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "kendo-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("select", function AppComponent_Template_kendo_drawer_select_2_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, AppComponent_kendo_drawer_content_5_Template, 2, 1, "kendo-drawer-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.changeContolPanelSide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.onHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "animation-player");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c0, ctx.panelOnRightSide));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("position", ctx.getTooltipPosition())("items", ctx.items)("mode", "push")("mini", true)("autoCollapse", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.contentExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](13, _c1, ctx.panelOnRightSide));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](15, _c1, ctx.contentExpanded && !ctx.panelOnRightSide || !ctx.contentExpanded && ctx.panelOnRightSide));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](17, _c2, ctx.panelOnRightSide, !ctx.panelOnRightSide));
    } }, directives: [_engine_engine_component__WEBPACK_IMPORTED_MODULE_8__.EngineComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__.DrawerContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__.DrawerComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__.DrawerFooterTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipDirective, _settings_panel_animation_player_animation_player_component__WEBPACK_IMPORTED_MODULE_9__.AnimationPlayerComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__.DrawerContentComponent, _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_10__.SettingsPanelComponent], styles: ["kendo-drawer-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 100;\n  max-width: 400px;\n  background: aliceblue;\n  transition: 0.3s all;\n}\n.reset-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n.right-side[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.form-controllers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.opposite-side[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.opposite-side--right-side[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7QUFISjtBQUtJO0VBQ0ksaUJBQUE7QUFIUiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrZW5kby1kcmF3ZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xufVxuXG4ucmVzZXQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5mb3JtLWNvbnRyb2xsZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5vcHBvc2l0ZS1zaWRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAmLS1yaWdodC1zaWRlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 2930);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _progress_kendo_angular_listbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-listbox */ 3042);
/* harmony import */ var _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-panel/settings-panel.component */ 6820);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/engine.component */ 2558);
/* harmony import */ var _services_object_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/object-manager.service */ 3510);
/* harmony import */ var _redux_root_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/root-reducer */ 6213);
/* harmony import */ var _settings_panel_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-panel/general-settings/general-settings.component */ 3513);
/* harmony import */ var _settings_panel_general_settings_grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-panel/general-settings/grid-settings/grid-settings.component */ 7464);
/* harmony import */ var _settings_panel_general_settings_renderer_settings_renderer_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings-panel/general-settings/renderer-settings/renderer-settings.component */ 5865);
/* harmony import */ var _resouces_attention_sign_attention_sign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resouces/attention-sign/attention-sign.component */ 9446);
/* harmony import */ var _settings_panel_general_settings_controls_settings_controls_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings-panel/general-settings/controls-settings/controls-settings.component */ 4909);
/* harmony import */ var _settings_panel_elevators_manager_elevators_manager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings-panel/elevators-manager/elevators-manager.component */ 8131);
/* harmony import */ var _settings_panel_elevators_manager_wireframes_settings_wireframes_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings-panel/elevators-manager/wireframes-settings/wireframes-settings.component */ 9816);
/* harmony import */ var _settings_panel_passengers_manager_passengers_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings-panel/passengers-manager/passengers-manager.component */ 6514);
/* harmony import */ var _settings_panel_smart_dumb_manager_smart_dumb_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings-panel/smart-dumb-manager/smart-dumb-manager.component */ 4548);
/* harmony import */ var _settings_panel_animation_player_animation_player_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings-panel/animation-player/animation-player.component */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 4001);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [_services_object_manager_service__WEBPACK_IMPORTED_MODULE_4__.ObjectManagerService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__.ButtonsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule,
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_21__.TooltipModule,
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__.InputsModule,
            _progress_kendo_angular_listbox__WEBPACK_IMPORTED_MODULE_23__.ListBoxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreModule.forRoot(_redux_root_reducer__WEBPACK_IMPORTED_MODULE_5__.rootReducer)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__.EngineComponent,
        _settings_panel_settings_panel_component__WEBPACK_IMPORTED_MODULE_0__.SettingsPanelComponent,
        _settings_panel_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_6__.GeneralSettingsComponent,
        _settings_panel_general_settings_grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_7__.GridSettingsComponent,
        _settings_panel_general_settings_renderer_settings_renderer_settings_component__WEBPACK_IMPORTED_MODULE_8__.RendererSettingsComponent,
        _settings_panel_general_settings_controls_settings_controls_settings_component__WEBPACK_IMPORTED_MODULE_10__.ControlsSettingsComponent,
        _settings_panel_passengers_manager_passengers_manager_component__WEBPACK_IMPORTED_MODULE_13__.PassengersManagerComponent,
        _settings_panel_smart_dumb_manager_smart_dumb_manager_component__WEBPACK_IMPORTED_MODULE_14__.SmartDumbManagerComponent,
        _settings_panel_animation_player_animation_player_component__WEBPACK_IMPORTED_MODULE_15__.AnimationPlayerComponent,
        _settings_panel_elevators_manager_elevators_manager_component__WEBPACK_IMPORTED_MODULE_11__.ElevatorsManagerComponent,
        _settings_panel_elevators_manager_wireframes_settings_wireframes_settings_component__WEBPACK_IMPORTED_MODULE_12__.WireframesSettingsComponent,
        _resouces_attention_sign_attention_sign_component__WEBPACK_IMPORTED_MODULE_9__.AttentionSignComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__.ButtonsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule,
        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_21__.TooltipModule,
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__.InputsModule,
        _progress_kendo_angular_listbox__WEBPACK_IMPORTED_MODULE_23__.ListBoxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreRootModule] }); })();


/***/ }),

/***/ 7681:
/*!********************************************************!*\
  !*** ./src/app/constants/camera-settings.constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cameraSettings = {
    key: 'cameraSettings',
    cameraPosition: { x: 100, y: 0, z: 0 },
    controlsTarget: { x: 0, y: 0, z: 0 },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cameraSettings);


/***/ }),

/***/ 2490:
/*!******************************************************************!*\
  !*** ./src/app/constants/elevator-manager-settings.constants.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const elevatorManagerSettings = {
    key: 'elevatorManagerSettings',
    elevators: [],
    selectedElevator: null,
    distanceBetweenElevators: 25,
    defaultElevator: {
        wallColor: '#75c6c6',
        wallOpacity: 1,
        wallTransparent: false,
        length: 10,
        width: 10,
        height: 15,
        capacity: 10,
        speed: 0.2,
        coveredFloors: 2,
        currentFloor: 0,
        floorHeight: 25,
        floorColor: 'gray',
        floorColorArrived: 'lightgreen',
        floorTextArrived: 'black',
        floorText: 'white',
        floorOpacity: 0.8,
        floorLength: 25,
        floorWidth: 25
    },
    animationTime: {
        doorOpenClose: 1,
        startEndSmooth: 0.25,
        linear: 0.5
    },
    wireframes: {
        wireframesSettingsExpanded: false,
        isWireframesShowed: true,
        color: '#fff'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elevatorManagerSettings);


/***/ }),

/***/ 5674:
/*!*********************************************************!*\
  !*** ./src/app/constants/general-settings.constants.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generalSettings = {
    key: 'generalSettings',
    backgroundColor: 'rgb(64, 64, 64)',
    grid: {
        gridColor: 'gray',
        gridEnable: true,
        gridSettingsExpanded: false,
        gridOpacity: 0.2,
        gridSize: {
            size: 200,
            division: 40
        },
    },
    renderer: {
        rendererSettingsExpanded: false,
        rendererAlpha: true,
        rendererAntialias: true,
    },
    controls: {
        controlsSettingsExpanded: false,
        enableDamping: true,
        dampingFactor: 0.15,
        cameraMinDistance: 100,
        cameraMaxDistance: 1000,
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generalSettings);


/***/ }),

/***/ 4110:
/*!************************************************!*\
  !*** ./src/app/constants/project.constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageProject": () => (/* binding */ localStorageProject)
/* harmony export */ });
const localStorageProject = 'elevatorsProject';



/***/ }),

/***/ 909:
/*!*******************************************************!*\
  !*** ./src/app/constants/settings-panel.constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const settingsPanel = {
    key: 'settingsPanel',
    formPosition: 'left',
    formOpened: false,
    selectedTab: 'GlobalSettings'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsPanel);


/***/ }),

/***/ 2558:
/*!********************************************!*\
  !*** ./src/app/engine/engine.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineComponent": () => (/* binding */ EngineComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 3934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6928);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/constants/camera-settings.constants */ 7681);
/* harmony import */ var app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/redux/elevator-manager-settings/elevator-manager-settings.actions */ 6550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/engine.service */ 701);
/* harmony import */ var _services_object_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/object-manager.service */ 3510);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_font_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/font-provider.service */ 9217);










const _c0 = ["rendererCanvas"];
const _c1 = ["canvasContainer"];
class EngineComponent {
    constructor(engServ, objectManager, store, fontProvider) {
        this.engServ = engServ;
        this.objectManager = objectManager;
        this.store = store;
        this.fontProvider = fontProvider;
        this.subscriptions = [];
        this.grid = null;
        this.cameraSettings = Object.assign({}, app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    ngOnInit() {
        if (!this.rendererCanvas)
            throw new Error('rendererCanvas is not implemented!');
        this.initPrerenderSettings();
        const rendererSettings = {
            canvas: this.rendererCanvas.nativeElement,
            alpha: this.rendererAlpha,
            antialias: this.rendererAntialias // smooth edges
        };
        this.engServ.createScene(rendererSettings, this.canvasContainer, this.cameraSettings);
        this.engServ.animate();
        this.subscribeOnMouseClick();
        // helpers
        // this.objectManager.addToScene(this.objectManager.createCube());
        // var axesHelper = new THREE.AxesHelper(50);
        // this.objectManager.addToScene(axesHelper);
        this.initSubscriptions();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    initPrerenderSettings() {
        this.subscriptions.push(this.store.select(state => state.generalSettings.renderer.rendererAlpha).subscribe(alpha => this.rendererAlpha = alpha), this.store.select(state => state.generalSettings.renderer.rendererAntialias).subscribe(antialias => this.rendererAntialias = antialias), this.store
            .select(state => state.cameraSettings.cameraPosition)
            .subscribe(cameraPosition => this.cameraSettings.cameraPosition = cameraPosition), this.store
            .select(state => state.cameraSettings.controlsTarget)
            .subscribe(controlsTarget => this.cameraSettings.controlsTarget = controlsTarget));
    }
    initSubscriptions() {
        this.subscriptions.push(this.store
            .select(state => state.generalSettings.backgroundColor)
            .subscribe(backgroundColor => this.engServ.setColorBackground(backgroundColor)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
            this.store.select(state => state.generalSettings.grid.gridColor),
            this.store.select(state => state.generalSettings.grid.gridOpacity),
            this.store.select(state => state.generalSettings.grid.gridEnable),
            this.store.select(state => state.generalSettings.grid.gridSize)
        ]).subscribe(([gridColor, gridOpacity, enable, gridSize]) => this.updateGrid({ gridColor, gridOpacity, gridSize }, enable)), this.store.select(state => state.generalSettings.controls.enableDamping).subscribe(flag => this.engServ.controls.enableDamping = flag), this.store.select(state => state.generalSettings.controls.dampingFactor).subscribe(dump => this.engServ.controls.dampingFactor = dump), this.store
            .select(state => state.generalSettings.controls.cameraMinDistance)
            .subscribe(distance => this.engServ.controls.minDistance = distance), this.store
            .select(state => state.generalSettings.controls.cameraMaxDistance)
            .subscribe(distance => this.engServ.controls.maxDistance = distance), this.store.select(state => state.elevatorManagerSettings.selectedElevator).subscribe(elevator => this.selectedElevator = elevator), this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators), 
        // require loaded font before using
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
            this.store.select(state => state.elevatorManagerSettings.elevators).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)),
            this.fontProvider.isLoaded.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(value => value))
        ]).subscribe(([elevators]) => this.reInitiateElevators(elevators)));
    }
    /**
     * grid lifecircle:
     * require to create new grid for changing color
     */
    updateGrid({ gridColor, gridOpacity, gridSize }, enable = true) {
        if (this.grid)
            this.objectManager.removeObject(this.grid);
        if (!enable)
            return;
        this.grid = this.objectManager.createGrid(gridSize.size, gridSize.division, gridColor, gridColor);
        this.grid.material.opacity = gridOpacity;
        this.objectManager.addToScene(this.grid);
    }
    reInitiateElevators(elevators) {
        const elevatorList = [];
        elevators.forEach((elevator, idx) => {
            var _a;
            const config = this.objectManager.createElevatorConfiguration(elevator);
            const elevatorObject = this.objectManager.buildElevatorObject(config, idx);
            config.id = elevatorObject.id;
            elevatorList.push(config);
            if (((_a = this.selectedElevator) === null || _a === void 0 ? void 0 : _a.id) === elevator.id) {
                this.objectManager.highlightSelectedElevator(config.id);
                this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SetSelectedElevator(config));
            }
        });
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SetAllElevators(elevatorList));
    }
    subscribeOnMouseClick() {
        let startPointX = 0;
        let startPointY = 0;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.rendererCanvas.nativeElement, 'mousedown')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((event) => event.button === 0))
            .subscribe((event) => {
            event.preventDefault();
            startPointX = event.x;
            startPointY = event.y;
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.rendererCanvas.nativeElement, 'mouseup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((event) => event.button === 0))
            .subscribe((event) => {
            var _a;
            event.preventDefault();
            // if it's not a click
            if (!this.isClick(startPointX, event.x) || !this.isClick(startPointY, event.y))
                return;
            const mouse3D = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
            const raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
            raycaster.setFromCamera(mouse3D, this.engServ.camera);
            const intersects = raycaster.intersectObjects(this.engServ.scene.children, true);
            const selectedObject = intersects.find(obj => this.getElevatorParent(obj.object));
            // if selected is not an elevator
            if (!selectedObject) {
                if (this.selectedElevator) {
                    this.objectManager.deHighlightSelectedElevator(this.selectedElevator.id);
                    this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SetSelectedElevator(null));
                }
                return;
            }
            const selectedElevator = this.getElevatorParent(selectedObject.object);
            // if selected is the same elevator
            if (((_a = this.selectedElevator) === null || _a === void 0 ? void 0 : _a.id) === selectedElevator.id)
                return;
            if (this.selectedElevator)
                this.objectManager.deHighlightSelectedElevator(this.selectedElevator.id);
            const elevator = this.allElevators.find(item => item.id === selectedElevator.id);
            this.objectManager.highlightSelectedElevator(elevator.id);
            this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SetSelectedElevator(elevator));
        });
    }
    // check on click: true or shift: false
    isClick(startPoint, endPoint, threshold = 2) {
        return Math.abs(startPoint - endPoint) <= threshold;
    }
    getElevatorParent(object) {
        var _a;
        let elem = object;
        while (elem) {
            elem = elem.parent;
            if ((_a = elem === null || elem === void 0 ? void 0 : elem.userData) === null || _a === void 0 ? void 0 : _a.isElevatorParent)
                break;
        }
        return elem;
    }
}
EngineComponent.ɵfac = function EngineComponent_Factory(t) { return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_engine_service__WEBPACK_IMPORTED_MODULE_3__.EngineService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_object_manager_service__WEBPACK_IMPORTED_MODULE_4__.ObjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_services_font_provider_service__WEBPACK_IMPORTED_MODULE_5__.FontProviderService)); };
EngineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EngineComponent, selectors: [["app-engine"]], viewQuery: function EngineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.canvasContainer = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "engine-wrapper"], ["canvasContainer", ""], ["id", "renderCanvas"], ["rendererCanvas", ""]], template: function EngineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } }, styles: [".engine-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZW5naW5lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuZ2luZS13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 9352:
/*!******************************************************************!*\
  !*** ./src/app/redux/camera-settings/camera-settings.actions.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SET_CAMERA_POSITION = 'SET_CAMERA_POSITION';
const RESET_CAMERA_POSITION = 'RESET_CAMERA_POSITION';
const SET_CONTROLS_TARGET = 'SET_CONTROLS_TARGET';
const RESET_CONTROLS_TARGET = 'RESET_CONTROLS_TARGET';
class SetCameraPostion {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CAMERA_POSITION;
    }
}
class ResetCameraPosition {
    constructor() {
        this.type = RESET_CAMERA_POSITION;
    }
}
class SetControlsTarget {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CONTROLS_TARGET;
    }
}
class ResetControlsTarget {
    constructor() {
        this.type = RESET_CONTROLS_TARGET;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    SetCameraPostion,
    ResetCameraPosition,
    SetControlsTarget,
    ResetControlsTarget,
    SET_CAMERA_POSITION,
    RESET_CAMERA_POSITION,
    SET_CONTROLS_TARGET,
    RESET_CONTROLS_TARGET
});


/***/ }),

/***/ 5710:
/*!******************************************************************!*\
  !*** ./src/app/redux/camera-settings/camera-settings.reducer.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cameraSettingsReducer": () => (/* binding */ cameraSettingsReducer)
/* harmony export */ });
/* harmony import */ var _default_state_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-state.provider */ 3680);
/* harmony import */ var app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/constants/camera-settings.constants */ 7681);
/* harmony import */ var _camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-settings.actions */ 9352);



let defaultState = new _default_state_provider__WEBPACK_IMPORTED_MODULE_0__["default"]().getState();
defaultState = !defaultState ? app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"] : defaultState[app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].key];
function cameraSettingsReducer(state = defaultState, action) {
    switch (action.type) {
        case _camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_CAMERA_POSITION:
            return Object.assign(Object.assign({}, state), { cameraPosition: action.payload });
        case _camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].RESET_CAMERA_POSITION:
            return Object.assign(Object.assign({}, state), { cameraPosition: app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].cameraPosition });
        case _camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_CONTROLS_TARGET:
            return Object.assign(Object.assign({}, state), { controlsTarget: action.payload });
        case _camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].RESET_CONTROLS_TARGET:
            return Object.assign(Object.assign({}, state), { controlsTarget: app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].controlsTarget });
        default:
            return state;
    }
}


/***/ }),

/***/ 3680:
/*!*************************************************!*\
  !*** ./src/app/redux/default-state.provider.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultState)
/* harmony export */ });
/* harmony import */ var _constants_project_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/project.constants */ 4110);

class DefaultState {
    constructor() {
        this.state = null;
        this.state = this.getLocalStorage();
    }
    getState() {
        return this.state;
    }
    setState(state) {
        localStorage.setItem(_constants_project_constants__WEBPACK_IMPORTED_MODULE_0__.localStorageProject, JSON.stringify(state));
    }
    getLocalStorage() {
        return JSON.parse(localStorage.getItem(_constants_project_constants__WEBPACK_IMPORTED_MODULE_0__.localStorageProject));
    }
}


/***/ }),

/***/ 6550:
/*!**************************************************************************************!*\
  !*** ./src/app/redux/elevator-manager-settings/elevator-manager-settings.actions.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ADD_NEW_ELEVATOR = 'ADD_NEW_ELEVATOR';
const SET_ALL_ELEVATORS = 'SET_ALL_ELEVATORS';
const SET_SELECTED_ELEVATOR = 'SET_SELECTED_ELEVATOR';
const SET_ELEVATOR_WALL_COLOR = 'SET_ELEVATOR_WALL_COLOR';
const SET_ELEVATOR_WALL_OPACITY = 'SET_ELEVATOR_WALL_OPACITY';
const SET_ELEVATOR_WALL_TRANSPARENT = 'SET_ELEVATOR_WALL_TRANSPARENT';
const SET_ELEVATOR_CAPACITY = 'SET_ELEVATOR_CAPACITY';
const SET_ELEVATOR_SPEED = 'SET_ELEVATOR_SPEED';
const SET_ELEVATOR_COVERED_FLOORS = 'SET_ELEVATOR_COVERED_FLOORS';
const SET_ELEVATOR_CURRENT_FLOOR = 'SET_ELEVATOR_CURRENT_FLOOR';
const SET_WIREFRAMES_EXPAND = 'SET_WIREFRAMES_EXPAND';
const SET_WIREFRAMES_SHOWED = 'SET_WIREFRAMES_SHOWED';
const SET_WIREFRAMES_COLOR = 'SET_WIREFRAMES_COLOR';
const RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS = 'RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS';
class AddNewElevator {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_NEW_ELEVATOR;
    }
}
class SetAllElevators {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ALL_ELEVATORS;
    }
}
class SetSelectedElevator {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_ELEVATOR;
    }
}
class SetElevatorWallColor {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_WALL_COLOR;
    }
}
class SetElevatorWallOpacity {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_WALL_OPACITY;
    }
}
class SetElevatorWallTransparent {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_WALL_TRANSPARENT;
    }
}
class SetElevatorCapacity {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_CAPACITY;
    }
}
class SetElevatorSpeed {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_SPEED;
    }
}
class SetElevatorCoveredFloors {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_COVERED_FLOORS;
    }
}
class SetElevatorCurrentFloor {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ELEVATOR_CURRENT_FLOOR;
    }
}
// wireframes
class SetWireframesExpand {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_WIREFRAMES_EXPAND;
    }
}
class SetWireframesShowed {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_WIREFRAMES_SHOWED;
    }
}
class SetWireframesColor {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_WIREFRAMES_COLOR;
    }
}
class ResetAllSettings {
    constructor() {
        this.type = RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ADD_NEW_ELEVATOR,
    SET_ALL_ELEVATORS,
    SET_SELECTED_ELEVATOR,
    SET_ELEVATOR_WALL_COLOR,
    SET_ELEVATOR_WALL_OPACITY,
    SET_ELEVATOR_WALL_TRANSPARENT,
    SET_ELEVATOR_CAPACITY,
    SET_ELEVATOR_SPEED,
    SET_ELEVATOR_COVERED_FLOORS,
    SET_ELEVATOR_CURRENT_FLOOR,
    SET_WIREFRAMES_EXPAND,
    SET_WIREFRAMES_SHOWED,
    SET_WIREFRAMES_COLOR,
    RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS,
    AddNewElevator,
    SetAllElevators,
    SetSelectedElevator,
    SetElevatorWallColor,
    SetElevatorWallOpacity,
    SetElevatorWallTransparent,
    SetElevatorCapacity,
    SetElevatorSpeed,
    SetElevatorCoveredFloors,
    SetElevatorCurrentFloor,
    SetWireframesExpand,
    SetWireframesShowed,
    SetWireframesColor,
    ResetAllSettings
});


/***/ }),

/***/ 1211:
/*!**************************************************************************************!*\
  !*** ./src/app/redux/elevator-manager-settings/elevator-manager-settings.reducer.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elevatorManagerReducer": () => (/* binding */ elevatorManagerReducer)
/* harmony export */ });
/* harmony import */ var _default_state_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-state.provider */ 3680);
/* harmony import */ var app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/constants/elevator-manager-settings.constants */ 2490);
/* harmony import */ var _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elevator-manager-settings.actions */ 6550);



let defaultState = new _default_state_provider__WEBPACK_IMPORTED_MODULE_0__["default"]().getState();
defaultState = !defaultState ? app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"] : defaultState[app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].key];
function elevatorManagerReducer(state = defaultState, action) {
    switch (action.type) {
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_NEW_ELEVATOR:
            return Object.assign(Object.assign({}, state), { elevators: [...state.elevators, Object.assign({}, action.payload)] });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ALL_ELEVATORS:
            return Object.assign(Object.assign({}, state), { elevators: [...action.payload] });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_SELECTED_ELEVATOR:
            return Object.assign(Object.assign({}, state), { selectedElevator: action.payload ? Object.assign({}, action.payload) : null });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_WALL_COLOR:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { wallColor: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_WALL_OPACITY:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { wallOpacity: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_WALL_TRANSPARENT:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { wallTransparent: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_CAPACITY:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { capacity: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_SPEED:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { speed: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_COVERED_FLOORS:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { coveredFloors: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ELEVATOR_CURRENT_FLOOR:
            return Object.assign(Object.assign({}, state), { defaultElevator: Object.assign(Object.assign({}, state.defaultElevator), { currentFloor: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_WIREFRAMES_EXPAND:
            return Object.assign(Object.assign({}, state), { wireframes: Object.assign(Object.assign({}, state.wireframes), { wireframesSettingsExpanded: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_WIREFRAMES_SHOWED:
            return Object.assign(Object.assign({}, state), { wireframes: Object.assign(Object.assign({}, state.wireframes), { isWireframesShowed: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_WIREFRAMES_COLOR:
            return Object.assign(Object.assign({}, state), { wireframes: Object.assign(Object.assign({}, state.wireframes), { color: action.payload }) });
        case _elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].RESET_ELEVATOR_MANAGER_SETTINGS_ALL_SETTINGS:
            return app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"];
        default:
            return state;
    }
}


/***/ }),

/***/ 9014:
/*!********************************************************************!*\
  !*** ./src/app/redux/general-settings/general-settings.actions.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SET_GENERAL_SETTINGS_COLOR = 'SET_GENERAL_SETTINGS_COLOR';
const RESET_GENERAL_SETTINGS_COLOR = 'RESET_GENERAL_SETTINGS_COLOR';
const RESET_GENERAL_SETTINGS_ALL_SETTINGS = 'RESET_GENERAL_SETTINGS_ALL_SETTINGS';
const SET_GRID_COLOR = 'SET_GRID_COLOR';
const RESET_GRID_COLOR = 'RESET_GRID_COLOR';
const SET_GRID_SETTINGS_EXPAND = 'SET_GRID_SETTINGS_EXPAND';
const SET_GRID_ENABLE = 'SET_GRID_ENABLE';
const SET_GRID_OPACITY = 'SET_GRID_OPACITY';
const SET_GRID_SIZE = 'SET_GRID_SIZE';
const RESET_GRID_SIZE = 'RESET_GRID_SIZE';
const SET_RENDERER_EXPAND = 'SET_RENDERER_EXPAND';
const SET_RENDERER_ALPHA = 'SET_RENDERER_ALPHA';
const SET_RENDERER_ANTIALIAS = 'SET_RENDERER_ANTIALIAS';
const SET_CONTROLS_SETTINGS_EXPAND = 'SET_CONTROLS_SETTINGS_EXPAND';
const SET_CONTROLS_ENABLE_DUMPING = 'SET_CONTROLS_ENABLE_DUMPING';
const SET_CONTROLS_DUMPING_FACTOR = 'SET_CONTROLS_DUMPING_FACTOR';
const RESET_CONTROLS_DUMPING_FACTOR = 'RESET_CONTROLS_DUMPING_FACTOR';
const SET_CONTROLS_CAMERA_MIN_DISTANCE = 'SET_CONTROLS_CAMERA_MIN_DISTANCE';
const SET_CONTROLS_CAMERA_MAX_DISTANCE = 'SET_CONTROLS_CAMERA_MAX_DISTANCE';
// general settings
class SetBackgroundColor {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GENERAL_SETTINGS_COLOR;
    }
}
class ResetBackgroundColor {
    constructor() {
        this.type = RESET_GENERAL_SETTINGS_COLOR;
    }
}
class ResetAllSettings {
    constructor() {
        this.type = RESET_GENERAL_SETTINGS_ALL_SETTINGS;
    }
}
// grid settings
class SetGridColor {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GRID_COLOR;
    }
}
class ResetGridColor {
    constructor() {
        this.type = RESET_GRID_COLOR;
    }
}
class SetGridSettingsExpand {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GRID_SETTINGS_EXPAND;
    }
}
class SetGridEnable {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GRID_ENABLE;
    }
}
class SetGridOpacity {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GRID_OPACITY;
    }
}
class SetGridSize {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_GRID_SIZE;
    }
}
class ResetGridSize {
    constructor() {
        this.type = RESET_GRID_SIZE;
    }
}
// renderer settings
class SetRendererExpand {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RENDERER_EXPAND;
    }
}
class SetRendererAlpha {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RENDERER_ALPHA;
    }
}
class SetRendererAntialias {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RENDERER_ANTIALIAS;
    }
}
// controls
class SetControlsSettingsExpand {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CONTROLS_SETTINGS_EXPAND;
    }
}
class SetControlsDumping {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CONTROLS_ENABLE_DUMPING;
    }
}
class SetControlsDumpingFactor {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CONTROLS_DUMPING_FACTOR;
    }
}
class ResetControlsDumpingFactor {
    constructor() {
        this.type = RESET_CONTROLS_DUMPING_FACTOR;
    }
}
class SetControlsCameraMinDistance {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CONTROLS_CAMERA_MIN_DISTANCE;
    }
}
class SetControlsCameraMaxDistance {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_CONTROLS_CAMERA_MAX_DISTANCE;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    SetBackgroundColor,
    ResetBackgroundColor,
    ResetAllSettings,
    SetGridColor,
    ResetGridColor,
    SetGridSettingsExpand,
    SetGridEnable,
    SetGridOpacity,
    SetGridSize,
    ResetGridSize,
    SetRendererExpand,
    SetRendererAlpha,
    SetRendererAntialias,
    SetControlsSettingsExpand,
    SetControlsDumping,
    SetControlsDumpingFactor,
    ResetControlsDumpingFactor,
    SetControlsCameraMinDistance,
    SetControlsCameraMaxDistance,
    SET_GENERAL_SETTINGS_COLOR,
    RESET_GENERAL_SETTINGS_COLOR,
    RESET_GENERAL_SETTINGS_ALL_SETTINGS,
    SET_GRID_COLOR,
    RESET_GRID_COLOR,
    SET_GRID_SETTINGS_EXPAND,
    SET_GRID_ENABLE,
    SET_GRID_OPACITY,
    SET_GRID_SIZE,
    RESET_GRID_SIZE,
    SET_RENDERER_EXPAND,
    SET_RENDERER_ALPHA,
    SET_RENDERER_ANTIALIAS,
    SET_CONTROLS_SETTINGS_EXPAND,
    SET_CONTROLS_ENABLE_DUMPING,
    SET_CONTROLS_DUMPING_FACTOR,
    RESET_CONTROLS_DUMPING_FACTOR,
    SET_CONTROLS_CAMERA_MIN_DISTANCE,
    SET_CONTROLS_CAMERA_MAX_DISTANCE,
});


/***/ }),

/***/ 8360:
/*!********************************************************************!*\
  !*** ./src/app/redux/general-settings/general-settings.reducer.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generalSettingsReducer": () => (/* binding */ generalSettingsReducer)
/* harmony export */ });
/* harmony import */ var _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-settings.actions */ 9014);
/* harmony import */ var _default_state_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-state.provider */ 3680);
/* harmony import */ var app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/general-settings.constants */ 5674);



let defaultState = new _default_state_provider__WEBPACK_IMPORTED_MODULE_1__["default"]().getState();
defaultState = !defaultState ? app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"] : defaultState[app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].key];
function generalSettingsReducer(state = defaultState, action) {
    switch (action.type) {
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_GENERAL_SETTINGS_COLOR:
            return Object.assign(Object.assign({}, state), { backgroundColor: action.payload });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_GENERAL_SETTINGS_COLOR:
            return Object.assign(Object.assign({}, state), { backgroundColor: app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundColor });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_GENERAL_SETTINGS_ALL_SETTINGS: return app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"];
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_GRID_COLOR:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridColor: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_GRID_COLOR:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridColor: app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].grid.gridColor }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_GRID_SETTINGS_EXPAND:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridSettingsExpanded: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_GRID_ENABLE:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridEnable: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_GRID_OPACITY:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridOpacity: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_GRID_SIZE:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridSize: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_GRID_SIZE:
            return Object.assign(Object.assign({}, state), { grid: Object.assign(Object.assign({}, state.grid), { gridSize: app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].grid.gridSize }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_RENDERER_EXPAND:
            return Object.assign(Object.assign({}, state), { renderer: Object.assign(Object.assign({}, state.renderer), { rendererSettingsExpanded: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_RENDERER_ALPHA:
            return Object.assign(Object.assign({}, state), { renderer: Object.assign(Object.assign({}, state.renderer), { rendererAlpha: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_RENDERER_ANTIALIAS:
            return Object.assign(Object.assign({}, state), { renderer: Object.assign(Object.assign({}, state.renderer), { rendererAntialias: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CONTROLS_SETTINGS_EXPAND:
            return Object.assign(Object.assign({}, state), { controls: Object.assign(Object.assign({}, state.controls), { controlsSettingsExpanded: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CONTROLS_ENABLE_DUMPING:
            return Object.assign(Object.assign({}, state), { controls: Object.assign(Object.assign({}, state.controls), { enableDamping: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CONTROLS_DUMPING_FACTOR:
            return Object.assign(Object.assign({}, state), { controls: Object.assign(Object.assign({}, state.controls), { dampingFactor: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_CONTROLS_DUMPING_FACTOR:
            return Object.assign(Object.assign({}, state), { controls: Object.assign(Object.assign({}, state.controls), { dampingFactor: app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].controls.dampingFactor }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CONTROLS_CAMERA_MIN_DISTANCE:
            return Object.assign(Object.assign({}, state), { controls: Object.assign(Object.assign({}, state.controls), { cameraMinDistance: action.payload }) });
        case _general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CONTROLS_CAMERA_MAX_DISTANCE:
            return Object.assign(Object.assign({}, state), { controls: Object.assign(Object.assign({}, state.controls), { cameraMaxDistance: action.payload }) });
        default:
            return state;
    }
}


/***/ }),

/***/ 6213:
/*!***************************************!*\
  !*** ./src/app/redux/root-reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _general_settings_general_settings_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-settings/general-settings.reducer */ 8360);
/* harmony import */ var _settings_panel_settings_panel_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-panel/settings-panel.reducer */ 7677);
/* harmony import */ var _elevator_manager_settings_elevator_manager_settings_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elevator-manager-settings/elevator-manager-settings.reducer */ 1211);
/* harmony import */ var _camera_settings_camera_settings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera-settings/camera-settings.reducer */ 5710);




const rootReducer = {
    generalSettings: _general_settings_general_settings_reducer__WEBPACK_IMPORTED_MODULE_0__.generalSettingsReducer,
    settingsPanel: _settings_panel_settings_panel_reducer__WEBPACK_IMPORTED_MODULE_1__.settingsPanelReducer,
    elevatorManagerSettings: _elevator_manager_settings_elevator_manager_settings_reducer__WEBPACK_IMPORTED_MODULE_2__.elevatorManagerReducer,
    cameraSettings: _camera_settings_camera_settings_reducer__WEBPACK_IMPORTED_MODULE_3__.cameraSettingsReducer,
};


/***/ }),

/***/ 1448:
/*!****************************************************************!*\
  !*** ./src/app/redux/settings-panel/settings-panel.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SET_PANEL_POSITION = 'SET_PANEL_POSITION';
const SET_PANEL_OPENED = 'SET_PANEL_OPENED';
const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
class SetPanelPosition {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PANEL_POSITION;
    }
}
class SetPanelOpened {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PANEL_OPENED;
    }
}
class SetSelectedTab {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_TAB;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    SetPanelPosition,
    SetPanelOpened,
    SetSelectedTab,
    SET_PANEL_POSITION,
    SET_PANEL_OPENED,
    SET_SELECTED_TAB
});


/***/ }),

/***/ 7677:
/*!****************************************************************!*\
  !*** ./src/app/redux/settings-panel/settings-panel.reducer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsPanelReducer": () => (/* binding */ settingsPanelReducer)
/* harmony export */ });
/* harmony import */ var _settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-panel.actions */ 1448);
/* harmony import */ var app_constants_settings_panel_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/constants/settings-panel.constants */ 909);
/* harmony import */ var _default_state_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../default-state.provider */ 3680);



let defaultState = new _default_state_provider__WEBPACK_IMPORTED_MODULE_2__["default"]().getState();
defaultState = !defaultState ? app_constants_settings_panel_constants__WEBPACK_IMPORTED_MODULE_1__["default"] : defaultState[app_constants_settings_panel_constants__WEBPACK_IMPORTED_MODULE_1__["default"].key];
function settingsPanelReducer(state = defaultState, action) {
    switch (action.type) {
        case _settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_PANEL_OPENED:
            return Object.assign(Object.assign({}, state), { formOpened: action.payload });
        case _settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_PANEL_POSITION:
            return Object.assign(Object.assign({}, state), { formPosition: action.payload });
        case _settings_panel_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SELECTED_TAB:
            return Object.assign(Object.assign({}, state), { selectedTab: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ 9446:
/*!*********************************************************************!*\
  !*** ./src/app/resouces/attention-sign/attention-sign.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttentionSignComponent": () => (/* binding */ AttentionSignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class AttentionSignComponent {
}
AttentionSignComponent.ɵfac = function AttentionSignComponent_Factory(t) { return new (t || AttentionSignComponent)(); };
AttentionSignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttentionSignComponent, selectors: [["attention-sign"]], decls: 7, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["fill", "#f98e2e", "d", "M503 387L322 53a75 75 0 00-66-39l-60 242 60 242h181a75 75 0 0066-111z"], ["fill", "#fab037", "d", "M190 53L9 387a75 75 0 0066 111h181V14c-28 0-53 15-66 39z"], ["fill", "#fbd141", "d", "M453 422L265 75h-9l-60 181 60 182h188z"], ["fill", "#fbf24a", "d", "M247 75L59 422l9 16h188V75z"], ["fill", "#434343", "d", "M241 348h30v30h-30z"], ["fill", "#434343", "d", "M241 203h30v115h-30z"]], template: function AttentionSignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbnRpb24tc2lnbi5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 2226:
/*!****************************************************************!*\
  !*** ./src/app/services/elevator-animation-manager.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElevatorAnimationManagerService": () => (/* binding */ ElevatorAnimationManagerService)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 3934);
/* harmony import */ var app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/constants/elevator-manager-settings.constants */ 2490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine.service */ 701);




class ElevatorAnimationManagerService {
    constructor(engineService) {
        this.engineService = engineService;
    }
    start(object3d, speed) {
        const promiseStart = this.moveSmooth(object3d, speed);
        promiseStart.then(() => this.moveLinear(object3d, speed)).then(() => this.moveSmooth(object3d, speed, true));
    }
    pause() {
        this.engineService.clipActions.forEach(clipA => clipA.stop());
    }
    moveSmooth(object3d, speed, isEnd = false) {
        return new Promise(resolve => {
            const { position } = object3d;
            const { startEndSmooth } = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].animationTime;
            const distance = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].defaultElevator.floorHeight * startEndSmooth;
            const points = this.getSmoothCurve(position.y, position.y + distance, speed * startEndSmooth, isEnd).getPoints(10);
            const timeArray = [].map.call(points, point => point.y);
            const distanceArray = [];
            [].forEach.call(points, point => distanceArray.push(position.x, point.x, position.z));
            // name, time keyframes, position keyframe
            const positionKF = new three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack('.position', timeArray, distanceArray);
            const clip = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip('moveStartSmooth', speed * startEndSmooth, [positionKF]);
            const mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(object3d);
            const clipAction = mixer.clipAction(clip);
            clipAction.loop = three__WEBPACK_IMPORTED_MODULE_0__.LoopOnce;
            clipAction.clampWhenFinished = true;
            clipAction.play();
            this.engineService.clipActions.push(clipAction);
            mixer.addEventListener('finished', () => {
                this.removeMixer(clipAction);
                resolve();
            });
        });
    }
    moveLinear(object3d, speed) {
        return new Promise(resolve => {
            const { position: pos } = object3d;
            const { linear } = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].animationTime;
            const distance = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].defaultElevator.floorHeight * linear;
            // name, time keyframes, position keyframe
            const positionKF = new three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack('.position', [0, speed * linear], [pos.x, pos.y, pos.z, pos.x, pos.y + distance, pos.z]);
            const clip = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip('moveStartSmooth', speed * linear, [positionKF]);
            const mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(object3d);
            const clipAction = mixer.clipAction(clip);
            clipAction.loop = three__WEBPACK_IMPORTED_MODULE_0__.LoopOnce;
            clipAction.clampWhenFinished = true;
            clipAction.play();
            this.engineService.clipActions.push(clipAction);
            mixer.addEventListener('finished', () => {
                this.removeMixer(clipAction);
                resolve();
            });
        });
    }
    /* example:
        this.openCloseDoor(object3d.getObjectByName('door-left'), true);
        this.openCloseDoor(object3d.getObjectByName('door-right'), false);
        setTimeout(() => {
            this.openCloseDoor(object3d.getObjectByName('door-left'), true, true);
            this.openCloseDoor(object3d.getObjectByName('door-right'), false, true);
        }, 2500);
    */
    openCloseDoor(door, isDoorleft, close = false) {
        return new Promise(resolve => {
            let distance = isDoorleft ? app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].defaultElevator.length : app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].defaultElevator.length / 2;
            const { doorOpenClose } = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].animationTime;
            if (close)
                distance *= -1;
            const positionKF = new three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack('.position', [0, doorOpenClose], [door.position.x, door.position.y, door.position.z, door.position.x - distance, door.position.y, door.position.z]);
            const clip = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip('moveEndSmooth', doorOpenClose, [positionKF]);
            const mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(door);
            const clipAction = mixer.clipAction(clip);
            clipAction.loop = three__WEBPACK_IMPORTED_MODULE_0__.LoopOnce;
            clipAction.clampWhenFinished = true;
            clipAction.play();
            this.engineService.clipActions.push(clipAction);
            mixer.addEventListener('finished', () => {
                this.removeMixer(clipAction);
                resolve();
            });
        });
    }
    getSmoothCurve(startPoint, endPoint, animationTime, useReverse = false) {
        return useReverse
            ? new three__WEBPACK_IMPORTED_MODULE_0__.CubicBezierCurve(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(startPoint, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((endPoint - startPoint) * 0.5 + startPoint, animationTime * 0.5), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(endPoint, animationTime * 0.5), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(endPoint, animationTime))
            : new three__WEBPACK_IMPORTED_MODULE_0__.CubicBezierCurve(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(startPoint, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(startPoint, animationTime * 0.5), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((endPoint - startPoint) * 0.5 + startPoint, animationTime * 0.5), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(endPoint, animationTime));
    }
    removeMixer(usedClipActions) {
        const idx = this.engineService.clipActions.findIndex(clipAction => clipAction === usedClipActions);
        this.engineService.clipActions.splice(idx, 1);
    }
}
ElevatorAnimationManagerService.ɵfac = function ElevatorAnimationManagerService_Factory(t) { return new (t || ElevatorAnimationManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_engine_service__WEBPACK_IMPORTED_MODULE_2__.EngineService)); };
ElevatorAnimationManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ElevatorAnimationManagerService, factory: ElevatorAnimationManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 701:
/*!********************************************!*\
  !*** ./src/app/services/engine.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineService": () => (/* binding */ EngineService)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 3934);
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-orbitcontrols */ 8939);
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3247);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var _redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/camera-settings/camera-settings.actions */ 9352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 9407);







class EngineService {
    constructor(ngZone, store) {
        this.ngZone = ngZone;
        this.store = store;
        this.frameId = null;
        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();
        this.clipActions = [];
    }
    ngOnDestroy() {
        if (this.frameId != null)
            cancelAnimationFrame(this.frameId);
    }
    createScene(settings, container, cameraSettings) {
        // The first step is to get the reference of the canvas element from our HTML document
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer(settings);
        this.renderer.setSize(container.nativeElement.clientWidth, container.nativeElement.clientHeight);
        this.container = container.nativeElement;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        // soft white light
        this.light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0x404040);
        this.light.position.z = 10;
        // mouse control
        this.controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__(this.camera, this.renderer.domElement);
        this.controls.screenSpacePanning = false;
        // this.controls.maxPolarAngle = Math.PI / 2;
        this.scene.add(this.light);
        this.scene.add(this.camera);
        this.setInitialCameraPosition(cameraSettings);
        this.subscribeOnCameraMovement();
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            document.readyState !== 'loading' ? this.render() : window.addEventListener('DOMContentLoaded', () => this.render());
            window.addEventListener('resize', () => this.resize());
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => this.render());
        // animation
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
        if (this.clipActions[0]) {
            const delta = this.clock.getDelta();
            this.clipActions.forEach(clipAction => clipAction.getMixer().update(delta));
        }
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
    setColorBackground(color) {
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(color);
    }
    addToScene(obj) {
        this.scene.add(obj);
    }
    removeFromScene(obj) {
        this.scene.remove(obj);
    }
    getObjectById(id) {
        return this.scene.getObjectById(id);
    }
    getObjectByName(name) {
        return this.scene.getObjectByName(name);
    }
    setInitialCameraPosition(cameraSettings) {
        if (!cameraSettings)
            return;
        ['x', 'y', 'z'].forEach(axis => {
            this.camera.position[axis] = cameraSettings.cameraPosition[axis];
            this.controls.target[axis] = cameraSettings.controlsTarget[axis];
        });
    }
    subscribeOnCameraMovement() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.controls, 'change')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(250))
            .subscribe(() => {
            const { position } = this.camera;
            const { target } = this.controls;
            this.store.dispatch(new _redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SetCameraPostion({ x: position.x, y: position.y, z: position.z }));
            this.store.dispatch(new _redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SetControlsTarget({ x: target.x, y: target.y, z: target.z }));
        });
    }
}
EngineService.ɵfac = function EngineService_Factory(t) { return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
EngineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: EngineService, factory: EngineService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9217:
/*!***************************************************!*\
  !*** ./src/app/services/font-provider.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontProviderService": () => (/* binding */ FontProviderService)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 3934);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



class FontProviderService {
    constructor() {
        this.isLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.loader = new three__WEBPACK_IMPORTED_MODULE_0__.FontLoader();
        this.loader.load('assets/fonts/Lato_Light_Regular.json', font => {
            this.latoLightRegular = font;
            this.isLoaded.next(true);
        });
    }
    getLatoLightRegular() {
        if (!this.latoLightRegular)
            throw Error('The font is not loaded!');
        return this.latoLightRegular;
    }
}
FontProviderService.ɵfac = function FontProviderService_Factory(t) { return new (t || FontProviderService)(); };
FontProviderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FontProviderService, factory: FontProviderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3510:
/*!****************************************************!*\
  !*** ./src/app/services/object-manager.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectManagerService": () => (/* binding */ ObjectManagerService)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 3934);
/* harmony import */ var _shared_classes_elevator_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/elevator.class */ 971);
/* harmony import */ var app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/elevator-manager-settings.constants */ 2490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine.service */ 701);
/* harmony import */ var _font_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-provider.service */ 9217);






const angle90 = 1.5707963267948966;
// function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
//     object.rotateX(THREE.Math.degToRad(degreeX));
//     object.rotateY(THREE.Math.degToRad(degreeY));
//     object.rotateZ(THREE.Math.degToRad(degreeZ));
//  }
class ObjectManagerService {
    constructor(engine, fontProvider) {
        this.engine = engine;
        this.fontProvider = fontProvider;
        this.defaultColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color('rgb(0, 0, 255)');
    }
    createCube(geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1)) {
        const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry);
        cube.material.color.set(this.defaultColor);
        cube.material.opacity = 0.3;
        return cube;
    }
    createGrid(size, division, centerLineColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x000000), otherLineColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x000000)) {
        const grid = new three__WEBPACK_IMPORTED_MODULE_0__.GridHelper(size, division, centerLineColor, otherLineColor);
        grid.material.transparent = false;
        return grid;
    }
    createElevatorConfiguration(elevatorConfig) {
        return new _shared_classes_elevator_class__WEBPACK_IMPORTED_MODULE_1__["default"](elevatorConfig);
    }
    buildElevatorObject(elevator, allElevators) {
        const object = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
        const elevatorSelf = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
        elevator.id = object.id;
        object.userData = { isElevatorParent: true };
        object.name = `elevator${allElevators}`;
        object.add(...this.getFloorPlatforms(elevator));
        elevatorSelf.name = 'elevatorSelf';
        elevatorSelf.add(...this.getSkeletGeometry(elevator));
        elevatorSelf.add(this.getElevatorTitle(allElevators));
        elevatorSelf.position.y = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorHeight * elevator.currentFloor;
        object.add(elevatorSelf);
        object.translateX(allElevators * app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].distanceBetweenElevators);
        const pane = object.getObjectByName(`floorPane${elevator.currentFloor}`);
        const text = pane.getObjectByName('floorText');
        pane.material.color.set(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorColorArrived);
        text.material.color.set(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorTextArrived);
        this.addToScene(object);
        console.log('object', object);
        return object;
    }
    highlightSelectedElevator(elevatorId) {
        const object = this.getObjectById(elevatorId);
        const clone = object.clone();
        // to avoid bug with highlight shift
        ['x', 'y', 'z'].forEach(axes => clone.position[axes] = 0);
        const helper = new three__WEBPACK_IMPORTED_MODULE_0__.BoxHelper(clone);
        helper.geometry.scale(1.1, 1, 1.1);
        helper.name = 'highlight-selection';
        object.add(helper);
    }
    deHighlightSelectedElevator(elevatorId) {
        const object = this.getObjectById(elevatorId);
        object.remove(object.getObjectByName('highlight-selection'));
    }
    addToScene(object) {
        this.engine.addToScene(object);
    }
    removeObject(object) {
        this.engine.removeFromScene(object);
    }
    getObjectById(id) {
        return this.engine.getObjectById(id);
    }
    getObjectByName(name) {
        return this.engine.getObjectByName(name);
    }
    getElevatorTitle(elevatorTitle) {
        const elevatorTitleMesh = this.createFloorNumber(`Elevator ${elevatorTitle}`, 'crimson');
        elevatorTitleMesh.translateY(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.height);
        elevatorTitleMesh.translateX(-app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.width / 2);
        elevatorTitleMesh.translateZ(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.length / 2);
        elevatorTitleMesh.name = 'elevator-title';
        return elevatorTitleMesh;
    }
    getFloorPlatforms(elevator, font = this.fontProvider.getLatoLightRegular()) {
        const geometry = [];
        for (let i = 0; i < elevator.coveredFloors; i++)
            geometry.push(this.createFloor(elevator, i, font));
        return geometry;
    }
    createFloor(elevator, floorNumber, font = this.fontProvider.getLatoLightRegular()) {
        const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorLength, app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorWidth);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
            color: app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorColor,
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            opacity: app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorOpacity,
            transparent: true
        });
        const floor = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, material);
        floor.rotateX(-angle90);
        floor.translateZ(floorNumber * app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorHeight);
        floor.translateY(-(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorWidth + elevator.width) / 2);
        const floorNumberMesh = this.createFloorNumber(`Floor ${floorNumber}`, app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorText, font);
        floorNumberMesh.translateY(-app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorWidth / 2);
        floorNumberMesh.translateX(-app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorWidth / 2);
        floorNumberMesh.rotateX(angle90);
        floorNumberMesh.name = 'floorText';
        floor.add(floorNumberMesh);
        floor.name = `floorPane${floorNumber}`;
        return floor;
    }
    createWireframe(elevator, object, name = 'wireframe') {
        const edges = new three__WEBPACK_IMPORTED_MODULE_0__.EdgesGeometry(object.geometry);
        const line = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments(edges, new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({ color: elevator.wireframes.color }));
        line.name = name;
        object.add(line);
    }
    createFloorNumber(title, color, font = this.fontProvider.getLatoLightRegular()) {
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.TextGeometry(title, {
            font,
            size: 2,
            height: 0
        });
        return new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color }));
    }
    getSkeletGeometry(elevator) {
        const geometry = [];
        const floor = this.createPane(elevator, 'floor', false);
        const ceiling = this.createPane(elevator, 'ceiling', false);
        const wallLeft = this.createPane(elevator, 'wall');
        const wallRight = this.createPane(elevator, 'wall');
        const wallBack = this.createPane(elevator, 'wall');
        const doorR = this.createPane(elevator, 'door-right');
        const doorL = this.createPane(elevator, 'door-left');
        floor.rotateX(angle90);
        ceiling.rotateX(angle90);
        ceiling.translateZ(-elevator.height);
        wallLeft.translateZ(-elevator.length / 2);
        wallRight.translateZ(elevator.length / 2);
        wallBack.rotateY(-angle90);
        wallBack.translateZ(-elevator.length / 2);
        doorR.rotateY(angle90);
        doorR.translateZ(-elevator.length / 2);
        doorR.geometry.scale(0.5, 1, 1);
        doorR.translateX(elevator.length / 4);
        doorL.rotateY(angle90);
        doorL.translateZ(-elevator.length / 2);
        doorL.geometry.scale(0.5, 1, 1);
        doorL.translateX(-elevator.length / 4);
        geometry.push(floor, ceiling, wallLeft, wallRight, wallBack, doorR, doorL);
        if (elevator.wireframes.isWireframesShowed)
            geometry.forEach(element => this.createWireframe(elevator, element));
        return geometry;
    }
    createPane(elevator, name, isWall = true) {
        const geometry = isWall
            ? new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(elevator.length, elevator.height)
            : new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(elevator.length, elevator.width);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
            color: elevator.wallColor,
            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
            opacity: elevator.wallOpacity,
            transparent: elevator.wallTransparent
        });
        const pane = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
        if (isWall) {
            pane.translateY(elevator.height / 2);
            pane.rotateY(angle90);
        }
        pane.name = name;
        return pane;
    }
}
ObjectManagerService.ɵfac = function ObjectManagerService_Factory(t) { return new (t || ObjectManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_engine_service__WEBPACK_IMPORTED_MODULE_3__.EngineService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_font_provider_service__WEBPACK_IMPORTED_MODULE_4__.FontProviderService)); };
ObjectManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ObjectManagerService, factory: ObjectManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8481:
/*!*******************************************************************************!*\
  !*** ./src/app/settings-panel/animation-player/animation-player.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationPlayerComponent": () => (/* binding */ AnimationPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/object-manager.service */ 3510);
/* harmony import */ var app_services_elevator_animation_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/elevator-animation-manager.service */ 2226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);







function AnimationPlayerComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnimationPlayerComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onPlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx_r0.getTooltipPosition());
} }
function AnimationPlayerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnimationPlayerComponent_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onPause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx_r2.getTooltipPosition());
} }
class AnimationPlayerComponent {
    constructor(store, objectManager, animationService) {
        this.store = store;
        this.objectManager = objectManager;
        this.animationService = animationService;
        this.tooltipPosition = 'right';
        this.subscriptions = [];
        this.isInPause = true;
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position), this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'top' : 'right';
    }
    onPlay() {
        // TODO: continue from here
        // elevators without passengers who is already on its floor
        // const elevatorsWO = this.allElevators.map(elevator => {
        //     const supportedFloors = elevator.supportedFloors.map((floor, index) => {
        //         const passengers = floor.passengers.filter(passenger => passenger.destinationFloor !== index);
        //         return { ...floor, passengers };
        //     });
        //     return { ...elevator, supportedFloors };
        // });
        // const dummyElevators = elevatorsWO.filter(elevator => !elevator.isSmart);
        // const smartElevators = elevatorsWO.filter(elevator => elevator.isSmart);
        this.animationService.start(this.objectManager.getObjectById(this.allElevators[0].id).getObjectByName('elevatorSelf'), this.allElevators[0].speed);
        this.isInPause = false;
    }
    onPause() {
        this.animationService.pause();
        this.isInPause = true;
    }
}
AnimationPlayerComponent.ɵfac = function AnimationPlayerComponent_Factory(t) { return new (t || AnimationPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_0__.ObjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_elevator_animation_manager_service__WEBPACK_IMPORTED_MODULE_1__.ElevatorAnimationManagerService)); };
AnimationPlayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AnimationPlayerComponent, selectors: [["animation-player"]], decls: 3, vars: 2, consts: [["kendoButton", "", "kendoTooltip", "", "title", "Play", "iconClass", "k-icon k-i-play", 3, "position", "click", 4, "ngIf", "ngIfElse"], ["pauseBtn", ""], ["kendoButton", "", "kendoTooltip", "", "title", "Play", "iconClass", "k-icon k-i-play", 3, "position", "click"], ["kendoButton", "", "kendoTooltip", "", "title", "Pause", "iconClass", "k-icon k-i-pause", 3, "position", "click"]], template: function AnimationPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AnimationPlayerComponent_button_0_Template, 1, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AnimationPlayerComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInPause)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmltYXRpb24tcGxheWVyLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 8131:
/*!*********************************************************************************!*\
  !*** ./src/app/settings-panel/elevators-manager/elevators-manager.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElevatorsManagerComponent": () => (/* binding */ ElevatorsManagerComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 3934);
/* harmony import */ var app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/redux/elevator-manager-settings/elevator-manager-settings.actions */ 6550);
/* harmony import */ var app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/elevator-manager-settings.constants */ 2490);
/* harmony import */ var _reset_keys_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-keys.model */ 9402);
/* harmony import */ var app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/classes/floor.class */ 7329);
/* harmony import */ var app_shared_classes_passenger_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/classes/passenger.class */ 796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/object-manager.service */ 3510);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _wireframes_settings_wireframes_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wireframes-settings/wireframes-settings.component */ 9816);














const _c0 = function () { return { opacity: false }; };
class ElevatorsManagerComponent {
    constructor(store, objectManager, changeDetector) {
        this.store = store;
        this.objectManager = objectManager;
        this.changeDetector = changeDetector;
        this.tooltipPosition = 'right';
        this.subscriptions = [];
        // TODO: remove the example
        // setInterval(() => {
        //     const pane = this.elevatorObject.getObjectByName('floorPane0');
        //     const text = pane.children[0];
        //     console.log('text', text);
        //     const color = new THREE.Color(Math.random() * 0xffffff);
        //     const newColor: any = '#' + color.getHexString();
        //     (<any>text).material.color.set(newColor);
        // }, 2000);
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position), this.store.select(state => state.elevatorManagerSettings.defaultElevator.wallColor).subscribe(color => this.wallColor = color), this.store.select(state => state.elevatorManagerSettings.defaultElevator.wallOpacity).subscribe(opacity => this.wallOpacity = opacity), this.store
            .select(state => state.elevatorManagerSettings.defaultElevator.wallTransparent)
            .subscribe(value => this.wallTransparent = value), this.store
            .select(state => state.elevatorManagerSettings.defaultElevator.capacity)
            .subscribe(capacity => this.elevatorCapacity = capacity), this.store.select(state => state.elevatorManagerSettings.defaultElevator.speed).subscribe(speed => this.elevatorSpeed = speed), this.store
            .select(state => state.elevatorManagerSettings.defaultElevator.coveredFloors)
            .subscribe(coveredFloors => this.elevatorCoveredFloors = coveredFloors), this.store
            .select(state => state.elevatorManagerSettings.defaultElevator.currentFloor)
            .subscribe(floor => this.elevatorCurrentFloor = floor), this.store
            .select(state => state.elevatorManagerSettings.wireframes.isWireframesShowed)
            .subscribe(isWireframesShowed => this.isWireframesShowed = isWireframesShowed), this.store.select(state => state.elevatorManagerSettings.wireframes.color).subscribe(color => this.wireframesColor = color), this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators), this.store
            .select(state => state.elevatorManagerSettings.selectedElevator)
            .subscribe(elevator => {
            this.changeDetector.markForCheck(); // yes, this needed
            this.selectedElevator = elevator;
            if (!elevator) {
                this.elevatorObject = null;
                return;
            }
            this.wallTransparent = elevator.wallTransparent;
            this.elevatorObject = this.objectManager.getObjectById(this.selectedElevator.id);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }
    onAddElevator() {
        const elevatorConfig = this.getElevatorConfiguration();
        const elevator = this.objectManager.createElevatorConfiguration(elevatorConfig);
        this.objectManager.buildElevatorObject(elevator, this.allElevators.length);
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].AddNewElevator(elevator));
    }
    onDeleteElevator() {
        if (!this.selectedElevator)
            return;
        const removedIndex = this.allElevators.findIndex(elevator => this.selectedElevator.id === elevator.id);
        for (let i = removedIndex + 1, len = this.allElevators.length; i < len; i++) {
            this.objectManager.getObjectById(this.allElevators[i].id).translateX(-app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].distanceBetweenElevators);
        }
        const removedElevatorId = this.allElevators.find(elevator => this.selectedElevator.id === elevator.id).id;
        const filteredList = this.allElevators.filter(elevator => elevator.id !== removedElevatorId);
        this.objectManager.removeObject(this.objectManager.getObjectById(removedElevatorId));
        this.staticDispatch(null, filteredList);
        this.renameAllElevators(filteredList);
    }
    onWallColorChange(color) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorWallColor(color));
        if (!this.selectedElevator)
            return;
        this.getWallObjects().forEach((element) => element.material.color.set(color));
        this.staticDispatch(...this.getModifiedElevators('wallColor', color));
    }
    onGetRandomColor() {
        const color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(Math.random() * 0xffffff);
        const newColor = '#' + color.getHexString();
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorWallColor(newColor));
        if (!this.selectedElevator)
            return;
        this.getWallObjects().forEach((element) => element.material.color.set(newColor));
        this.staticDispatch(...this.getModifiedElevators('wallColor', newColor));
    }
    onWallOpacityChange(opacity) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorWallOpacity(opacity));
        if (!this.selectedElevator)
            return;
        this.getWallObjects().forEach((element) => element.material.opacity = opacity);
        this.staticDispatch(...this.getModifiedElevators('wallOpacity', opacity));
    }
    onWallTransparentChange() {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorWallTransparent(this.wallTransparent));
        if (!this.selectedElevator)
            return;
        this.getWallObjects().forEach((element) => element.material.transparent = this.wallTransparent);
        this.staticDispatch(...this.getModifiedElevators('wallTransparent', this.wallTransparent));
    }
    onElevatorCapacityChange(capacity) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorCapacity(capacity));
        if (!this.selectedElevator)
            return;
        this.staticDispatch(...this.getModifiedElevators('capacity', capacity));
    }
    onElevatorSpeedChange(speed) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorSpeed(speed));
        if (!this.selectedElevator)
            return;
        this.staticDispatch(...this.getModifiedElevators('speed', speed));
    }
    onElevatorCoveredFloorsChange(coveredFloors) {
        if (coveredFloors < 2)
            coveredFloors = 2;
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorCoveredFloors(coveredFloors));
        if (!this.selectedElevator)
            return;
        if (this.selectedElevator.coveredFloors > coveredFloors) {
            for (let i = this.selectedElevator.coveredFloors - 1; i >= coveredFloors; i--)
                this.elevatorObject.remove(this.elevatorObject.getObjectByName(`floorPane${i}`));
            if (this.selectedElevator.currentFloor >= coveredFloors)
                this.changeElevatorPosition(coveredFloors - 1);
        }
        else {
            for (let i = this.selectedElevator.coveredFloors; i < coveredFloors; i++)
                this.elevatorObject.add(this.objectManager.createFloor(this.selectedElevator, i));
        }
        this.objectManager.deHighlightSelectedElevator(this.selectedElevator.id);
        this.objectManager.highlightSelectedElevator(this.selectedElevator.id);
        const modifiedElevator = Object.assign(Object.assign({}, this.selectedElevator), { coveredFloors, supportedFloors: this.selectedElevator.coveredFloors > coveredFloors
                ? this.selectedElevator.supportedFloors.slice(0, coveredFloors)
                : this.selectedElevator.supportedFloors.concat(new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_4__["default"]()), currentFloor: this.selectedElevator.currentFloor >= coveredFloors ? coveredFloors - 1 : this.selectedElevator.currentFloor });
        modifiedElevator.supportedFloors = modifiedElevator.supportedFloors.map(floor => {
            const passengers = floor.passengers.map(passenger => passenger.destinationFloor >= coveredFloors ? new app_shared_classes_passenger_class__WEBPACK_IMPORTED_MODULE_5__["default"](passenger.currentFloor, coveredFloors - 1) : passenger);
            return new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_4__["default"](passengers);
        });
        const idx = this.allElevators.findIndex(item => modifiedElevator.id === item.id);
        const modifiedAllElevators = [...this.allElevators];
        modifiedAllElevators[idx] = modifiedElevator;
        this.staticDispatch(modifiedElevator, modifiedAllElevators);
    }
    onElevatorCurrentFloorChange(floor) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetElevatorCurrentFloor(floor));
        if (!this.selectedElevator)
            return;
        this.changeElevatorPosition(floor);
        this.staticDispatch(...this.getModifiedElevators('currentFloor', floor));
    }
    getElevatorConfiguration() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return {
            capacity: ((_a = this.selectedElevator) === null || _a === void 0 ? void 0 : _a.capacity) || this.elevatorCapacity,
            coveredFloors: ((_b = this.selectedElevator) === null || _b === void 0 ? void 0 : _b.coveredFloors) || this.elevatorCoveredFloors,
            currentFloor: ((_c = this.selectedElevator) === null || _c === void 0 ? void 0 : _c.currentFloor) || this.elevatorCurrentFloor,
            speed: ((_d = this.selectedElevator) === null || _d === void 0 ? void 0 : _d.speed) || this.elevatorSpeed,
            wallColor: ((_e = this.selectedElevator) === null || _e === void 0 ? void 0 : _e.wallColor) || this.wallColor,
            wallOpacity: ((_f = this.selectedElevator) === null || _f === void 0 ? void 0 : _f.wallOpacity) || this.wallOpacity,
            wallTransparent: ((_g = this.selectedElevator) === null || _g === void 0 ? void 0 : _g.wallTransparent) || this.wallTransparent,
            wireframes: {
                isWireframesShowed: ((_j = (_h = this.selectedElevator) === null || _h === void 0 ? void 0 : _h.wireframes) === null || _j === void 0 ? void 0 : _j.isWireframesShowed) || this.isWireframesShowed,
                color: ((_l = (_k = this.selectedElevator) === null || _k === void 0 ? void 0 : _k.wireframes) === null || _l === void 0 ? void 0 : _l.color) || this.wireframesColor
            }
        };
    }
    onResetAllSettings(key) {
        switch (key) {
            case _reset_keys_model__WEBPACK_IMPORTED_MODULE_3__.ResetKeys.TAB_ELEVATORS_PLUS_SETTINGS:
                this.allElevators.forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
                this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetSelectedElevator(null));
                this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ResetAllSettings());
                break;
            // TODO: maybe delete it later
            // case ResetKeys.TAB_SETTINGS:
            //     const savedElevators = [...this.allElevators];
            //     this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());
            //     this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(savedElevators));
            //     break;
            case _reset_keys_model__WEBPACK_IMPORTED_MODULE_3__.ResetKeys.TAB_ELEVATORS:
                this.allElevators.forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
                this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetAllElevators([]));
                this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetSelectedElevator(null));
                break;
        }
    }
    getWallObjects() {
        const elevatorSelf = this.elevatorObject.getObjectByName('elevatorSelf');
        const walls = elevatorSelf.children.filter(element => element.name === 'wall');
        walls.push(elevatorSelf.children.find(element => element.name === 'floor'));
        walls.push(elevatorSelf.children.find(element => element.name === 'ceiling'));
        walls.push(elevatorSelf.children.find(element => element.name === 'door-right'));
        walls.push(elevatorSelf.children.find(element => element.name === 'door-left'));
        return walls;
    }
    getModifiedElevators(property, value, selectedElevator = this.selectedElevator, allElevators = this.allElevators) {
        const modifiedElevator = Object.assign(Object.assign({}, selectedElevator), { [property]: value });
        const idx = allElevators.findIndex(item => modifiedElevator.id === item.id);
        const modifiedAllElevators = [...allElevators];
        modifiedAllElevators[idx] = modifiedElevator;
        return [modifiedElevator, modifiedAllElevators];
    }
    staticDispatch(elevator, allElevators) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetSelectedElevator(elevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].SetAllElevators(allElevators));
    }
    renameAllElevators(allElevators) {
        allElevators.forEach((elevator, index) => {
            const elevatorObj = this.objectManager.getObjectById(elevator.id);
            elevatorObj.name = `elevator${index}`;
            elevatorObj.remove(elevatorObj.getObjectByName('elevator-title'));
            elevatorObj.add(this.objectManager.getElevatorTitle(index));
        });
    }
    changeElevatorPosition(floor) {
        const elevator = this.elevatorObject.getObjectByName('elevatorSelf');
        const paneCurr = this.elevatorObject.getObjectByName(`floorPane${floor}`);
        const textCurr = paneCurr.getObjectByName('floorText');
        const panePrev = this.elevatorObject.getObjectByName(`floorPane${this.selectedElevator.currentFloor}`);
        elevator.position.y = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorHeight * floor;
        paneCurr.material.color.set(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorColorArrived);
        textCurr.material.color.set(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorTextArrived);
        if (!panePrev)
            return;
        const textPrev = panePrev.getObjectByName('floorText');
        panePrev.material.color.set(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorColor);
        textPrev.material.color.set(app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"].defaultElevator.floorText);
    }
}
ElevatorsManagerComponent.ɵfac = function ElevatorsManagerComponent_Factory(t) { return new (t || ElevatorsManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_6__.ObjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
ElevatorsManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ElevatorsManagerComponent, selectors: [["elevators-manager"]], decls: 48, vars: 47, consts: [[1, "option-title"], ["kendoButton", "", "kendoTooltip", "", "title", "Remove Elevator", "iconClass", "k-icon k-i-minus", 1, "delete-elevator-button", 3, "disabled", "position", "click"], ["kendoButton", "", "kendoTooltip", "", "title", "Add Elevator", "iconClass", "k-icon k-i-plus", 1, "add-elevator-button", 3, "position", "click"], [1, "option-line"], [3, "value", "format", "gradientSettings", "valueChange"], ["kendoButton", "", "kendoTooltip", "", "title", "Random color", "iconClass", "k-icon k-i-kpi-status-open", 3, "position", "click"], [1, "numerictext-component", 3, "value", "min", "max", "step", "decimals", "format", "autoCorrect", "valueChange"], [1, "component-switch", 3, "ngModel", "ngModelChange", "valueChange"], ["kendoButton", "", "kendoTooltip", "", "title", "Reset tab settings and all elevators", "iconClass", "k-icon k-i-reload", 3, "position", "click"], ["kendoButton", "", "kendoTooltip", "", "title", "Remove only elevators", "iconClass", "k-icon k-i-reload", 3, "position", "click"]], template: function ElevatorsManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ElevatorsManagerComponent_Template_button_click_1_listener() { return ctx.onDeleteElevator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ElevatorsManagerComponent_Template_button_click_3_listener() { return ctx.onAddElevator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Wall Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "kendo-colorpicker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ElevatorsManagerComponent_Template_kendo_colorpicker_valueChange_8_listener($event) { return ctx.onWallColorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ElevatorsManagerComponent_Template_button_click_9_listener() { return ctx.onGetRandomColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Wall Opacity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "kendo-numerictextbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ElevatorsManagerComponent_Template_kendo_numerictextbox_valueChange_14_listener($event) { return ctx.onWallOpacityChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Wall Transparent:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "kendo-switch", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ElevatorsManagerComponent_Template_kendo_switch_ngModelChange_19_listener($event) { return ctx.wallTransparent = $event; })("valueChange", function ElevatorsManagerComponent_Template_kendo_switch_valueChange_19_listener() { return ctx.onWallTransparentChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "wireframes-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Elevator Capacity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "kendo-numerictextbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ElevatorsManagerComponent_Template_kendo_numerictextbox_valueChange_25_listener($event) { return ctx.onElevatorCapacityChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Elevator Speed(sec/floor):");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "kendo-numerictextbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ElevatorsManagerComponent_Template_kendo_numerictextbox_valueChange_30_listener($event) { return ctx.onElevatorSpeedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Covered Floors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "kendo-numerictextbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ElevatorsManagerComponent_Template_kendo_numerictextbox_valueChange_35_listener($event) { return ctx.onElevatorCoveredFloorsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Current Floor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "kendo-numerictextbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function ElevatorsManagerComponent_Template_kendo_numerictextbox_valueChange_40_listener($event) { return ctx.onElevatorCurrentFloorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Reset:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ElevatorsManagerComponent_Template_button_click_45_listener() { return ctx.onResetAllSettings(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ElevatorsManagerComponent_Template_button_click_46_listener() { return ctx.onResetAllSettings(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_37_0;
        let tmp_39_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.selectedElevator)("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx.elevatorObject == null ? null : ctx.elevatorObject.name) || "Elevator manager", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (ctx.selectedElevator == null ? null : ctx.selectedElevator.wallColor) || ctx.wallColor)("format", "hex")("gradientSettings", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](46, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (ctx.selectedElevator == null ? null : ctx.selectedElevator.wallOpacity) || ctx.wallOpacity)("min", 0)("max", 1)("step", 0.05)("decimals", 2)("format", "n2")("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.wallTransparent);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (ctx.selectedElevator == null ? null : ctx.selectedElevator.capacity) || ctx.elevatorCapacity)("min", 0)("max", 100)("step", 1)("decimals", 0)("format", "n0")("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (ctx.selectedElevator == null ? null : ctx.selectedElevator.speed) || ctx.elevatorSpeed)("min", 0.01)("max", 50)("step", 0.05)("decimals", 2)("format", "n2")("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (ctx.selectedElevator == null ? null : ctx.selectedElevator.coveredFloors) || ctx.elevatorCoveredFloors)("min", 2)("max", 101)("step", 1)("decimals", 0)("format", "n0")("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", (tmp_37_0 = ctx.selectedElevator == null ? null : ctx.selectedElevator.currentFloor) !== null && tmp_37_0 !== undefined ? tmp_37_0 : ctx.elevatorCurrentFloor)("min", 0)("max", ((tmp_39_0 = ctx.selectedElevator == null ? null : ctx.selectedElevator.coveredFloors) !== null && tmp_39_0 !== undefined ? tmp_39_0 : ctx.elevatorCoveredFloors) - 1)("step", 1)("decimals", 0)("format", "n0")("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", ctx.getTooltipPosition());
    } }, directives: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipDirective, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_12__.ColorPickerComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_12__.NumericTextBoxComponent, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_12__.SwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _wireframes_settings_wireframes_settings_component__WEBPACK_IMPORTED_MODULE_7__.WireframesSettingsComponent], styles: [".add-elevator-button[_ngcontent-%COMP%], .delete-elevator-button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.add-elevator-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .delete-elevator-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: beige;\n}\n.add-elevator-button[_ngcontent-%COMP%] {\n  background: #53ff53;\n}\n.delete-elevator-button[_ngcontent-%COMP%] {\n  background: #ff5454;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZXZhdG9ycy1tYW5hZ2VyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0FBQ0o7QUFIQTs7RUFLUSxZQUFBO0FBRVI7QUFFQTtFQUNJLG1CQUFBO0FBQUo7QUFHQTtFQUNJLG1CQUFBO0FBREoiLCJmaWxlIjoiZWxldmF0b3JzLW1hbmFnZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWVsZXZhdG9yLWJ1dHRvbixcbi5kZWxldGUtZWxldmF0b3ItYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IGJlaWdlO1xuICAgIH1cbn1cblxuLmFkZC1lbGV2YXRvci1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM1M2ZmNTM7XG59XG5cbi5kZWxldGUtZWxldmF0b3ItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY1NDU0O1xufSJdfQ== */"] });


/***/ }),

/***/ 9402:
/*!**********************************************************************!*\
  !*** ./src/app/settings-panel/elevators-manager/reset-keys.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetKeys": () => (/* binding */ ResetKeys)
/* harmony export */ });
var ResetKeys;
(function (ResetKeys) {
    ResetKeys[ResetKeys["TAB_ELEVATORS_PLUS_SETTINGS"] = 0] = "TAB_ELEVATORS_PLUS_SETTINGS";
    ResetKeys[ResetKeys["TAB_SETTINGS"] = 1] = "TAB_SETTINGS";
    ResetKeys[ResetKeys["TAB_ELEVATORS"] = 2] = "TAB_ELEVATORS";
})(ResetKeys || (ResetKeys = {}));


/***/ }),

/***/ 9816:
/*!*******************************************************************************************************!*\
  !*** ./src/app/settings-panel/elevators-manager/wireframes-settings/wireframes-settings.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WireframesSettingsComponent": () => (/* binding */ WireframesSettingsComponent)
/* harmony export */ });
/* harmony import */ var app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/redux/elevator-manager-settings/elevator-manager-settings.actions */ 6550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/object-manager.service */ 3510);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 2930);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);







function WireframesSettingsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Show wireframes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "kendo-switch", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WireframesSettingsComponent_ng_template_2_Template_kendo_switch_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.isWireframesShowed = $event; })("click", function WireframesSettingsComponent_ng_template_2_Template_kendo_switch_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onShowWireframeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.isWireframesShowed);
} }
const _c0 = function () { return { opacity: false }; };
function WireframesSettingsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Wireframes color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "kendo-colorpicker", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function WireframesSettingsComponent_ng_template_3_Template_kendo_colorpicker_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onWireframesColorChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (ctx_r1.selectedElevator == null ? null : ctx_r1.selectedElevator.wireframes == null ? null : ctx_r1.selectedElevator.wireframes.color) || ctx_r1.wireframesColor)("format", "hex")("gradientSettings", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class WireframesSettingsComponent {
    constructor(store, objectManager) {
        this.store = store;
        this.objectManager = objectManager;
        this.tooltipPosition = 'right';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.store
            .select(state => state.elevatorManagerSettings.wireframes.wireframesSettingsExpanded)
            .subscribe(expanded => this.wireframesSettingsExpanded = expanded), this.store
            .select(state => state.elevatorManagerSettings.wireframes.isWireframesShowed)
            .subscribe(isWireframesShowed => this.isWireframesShowed = isWireframesShowed), this.store.select(state => state.elevatorManagerSettings.wireframes.color).subscribe(color => this.wireframesColor = color), this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators), this.store
            .select(state => state.elevatorManagerSettings.selectedElevator)
            .subscribe(elevator => {
            this.selectedElevator = elevator;
            if (!elevator) {
                this.elevatorObject = null;
                return;
            }
            this.isWireframesShowed = elevator.wireframes.isWireframesShowed;
            this.elevatorObject = this.objectManager.getObjectById(this.selectedElevator.id);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }
    onWireframesSettingsExpanded(event) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetWireframesExpand(event[0].expanded));
    }
    onShowWireframeChange(event) {
        event.stopPropagation();
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetWireframesShowed(this.isWireframesShowed));
        if (!this.selectedElevator)
            return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('isWireframesShowed', this.isWireframesShowed);
        this.isWireframesShowed
            ? this.getWallObjects().forEach(element => this.objectManager.createWireframe(modifiedElevator, element))
            : this.getWireframesObjects().forEach((element) => element.parent.remove(element));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(modifiedAllElevators));
    }
    onWireframesColorChange(color) {
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetWireframesColor(color));
        if (!this.selectedElevator)
            return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('color', color);
        this.getWireframesObjects().forEach((element) => element.material.color.set(color));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(modifiedAllElevators));
    }
    getWireframesObjects() {
        return this.getWallObjects().map(elem => elem.getObjectByName('wireframe'));
    }
    getWallObjects() {
        const elevatorSelf = this.elevatorObject.getObjectByName('elevatorSelf');
        const walls = elevatorSelf.children.filter(element => element.name === 'wall');
        walls.push(elevatorSelf.children.find(element => element.name === 'floor'));
        walls.push(elevatorSelf.children.find(element => element.name === 'ceiling'));
        walls.push(elevatorSelf.children.find(element => element.name === 'door-right'));
        walls.push(elevatorSelf.children.find(element => element.name === 'door-left'));
        return walls;
    }
    getModifiedElevators(property, value) {
        const modifiedElevator = Object.assign(Object.assign({}, this.selectedElevator), { wireframes: Object.assign(Object.assign({}, this.selectedElevator.wireframes), { [property]: value }) });
        const idx = this.allElevators.findIndex(item => modifiedElevator.id === item.id);
        const modifiedAllElevators = [...this.allElevators];
        modifiedAllElevators[idx] = modifiedElevator;
        return [modifiedElevator, modifiedAllElevators];
    }
}
WireframesSettingsComponent.ɵfac = function WireframesSettingsComponent_Factory(t) { return new (t || WireframesSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_1__.ObjectManagerService)); };
WireframesSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WireframesSettingsComponent, selectors: [["wireframes-settings"]], decls: 4, vars: 1, consts: [[3, "stateChange"], ["title", "", 3, "expanded"], ["kendoPanelBarItemTitle", ""], ["kendoPanelBarContent", ""], [1, "component-title-wrapper"], [1, "component-title"], [1, "component-switch", 3, "ngModel", "ngModelChange", "click"], [1, "option-line"], [3, "value", "format", "gradientSettings", "valueChange"]], template: function WireframesSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "kendo-panelbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("stateChange", function WireframesSettingsComponent_Template_kendo_panelbar_stateChange_0_listener($event) { return ctx.onWireframesSettingsExpanded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "kendo-panelbar-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WireframesSettingsComponent_ng_template_2_Template, 4, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WireframesSettingsComponent_ng_template_3_Template, 5, 4, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", ctx.wireframesSettingsExpanded);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarItemComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarItemTitleDirective, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarContentDirective, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.SwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.ColorPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXJlZnJhbWVzLXNldHRpbmdzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 4909:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings-panel/general-settings/controls-settings/controls-settings.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlsSettingsComponent": () => (/* binding */ ControlsSettingsComponent)
/* harmony export */ });
/* harmony import */ var _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../redux/general-settings/general-settings.actions */ 9014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 2930);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);








function ControlsSettingsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enable Damping:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "kendo-switch", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_switch_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.enableDamping = $event; })("click", function ControlsSettingsComponent_ng_template_2_Template_kendo_switch_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onDumpingEnableChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Dumping factor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "kendo-numerictextbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_numerictextbox_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.dampingFactor = $event; })("valueChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_numerictextbox_valueChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onDampingFactorChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlsSettingsComponent_ng_template_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onDampingFactorReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Camera distance(min/max):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "kendo-numerictextbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_numerictextbox_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.cameraMinDistance = $event; })("valueChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_numerictextbox_valueChange_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onCameraMinDistanceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "kendo-numerictextbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_numerictextbox_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.cameraMaxDistance = $event; })("valueChange", function ControlsSettingsComponent_ng_template_2_Template_kendo_numerictextbox_valueChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onCameraMaxDistanceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.enableDamping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.dampingFactor)("min", 0.001)("max", 1)("step", 0.01)("decimals", 3)("format", "n2")("autoCorrect", true)("disabled", !ctx_r0.enableDamping)("ngModel", ctx_r0.dampingFactor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", ctx_r0.getTooltipPosition())("disabled", !ctx_r0.enableDamping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.cameraMinDistance)("min", 0)("max", 50000)("step", 25)("decimals", 0)("format", "n0")("autoCorrect", true)("ngModel", ctx_r0.cameraMinDistance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.cameraMaxDistance)("min", 1)("max", 50000)("step", 25)("decimals", 0)("format", "n0")("autoCorrect", true)("ngModel", ctx_r0.cameraMaxDistance);
} }
class ControlsSettingsComponent {
    constructor(store) {
        this.store = store;
        this.tooltipPosition = 'right';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state.settingsPanel.formPosition)
            .subscribe(position => this.tooltipPosition = position), this.store.select(state => state.generalSettings.controls.controlsSettingsExpanded)
            .subscribe(enable => this.controlsSettingsExpanded = enable), this.store.select(state => state.generalSettings.controls.enableDamping)
            .subscribe(enable => this.enableDamping = enable), this.store.select(state => state.generalSettings.controls.dampingFactor)
            .subscribe(factor => this.dampingFactor = factor), this.store.select(state => state.generalSettings.controls.cameraMinDistance)
            .subscribe(distance => this.cameraMinDistance = distance), this.store.select(state => state.generalSettings.controls.cameraMaxDistance)
            .subscribe(distance => this.cameraMaxDistance = distance));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }
    onControlsSettingsExpanded(event) {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetControlsSettingsExpand(event[0].expanded));
    }
    onDumpingEnableChange() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetControlsDumping(this.enableDamping));
    }
    onDampingFactorReset() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].ResetControlsDumpingFactor());
    }
    onDampingFactorChange() {
        if (this.dampingFactor === null)
            this.dampingFactor = 0.01;
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetControlsDumpingFactor(this.dampingFactor));
    }
    onCameraMinDistanceChange() {
        if (this.cameraMinDistance === null)
            this.cameraMinDistance = 0;
        if (this.cameraMinDistance >= this.cameraMaxDistance) {
            this.cameraMaxDistance = this.cameraMinDistance;
            this.onCameraMaxDistanceChange();
        }
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetControlsCameraMinDistance(this.cameraMinDistance));
    }
    onCameraMaxDistanceChange() {
        if (this.cameraMaxDistance === null)
            this.cameraMaxDistance = 500;
        if (this.cameraMaxDistance < this.cameraMinDistance) {
            this.cameraMinDistance = this.cameraMaxDistance;
            this.onCameraMinDistanceChange();
        }
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetControlsCameraMaxDistance(this.cameraMaxDistance));
    }
}
ControlsSettingsComponent.ɵfac = function ControlsSettingsComponent_Factory(t) { return new (t || ControlsSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
ControlsSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ControlsSettingsComponent, selectors: [["controls-settings"]], decls: 3, vars: 1, consts: [[3, "stateChange"], ["title", "Controls settings", 3, "expanded"], ["kendoPanelBarContent", ""], [1, "option-line"], [1, "component-switch", 3, "ngModel", "ngModelChange", "click"], [1, "numerictext-component", 3, "value", "min", "max", "step", "decimals", "format", "autoCorrect", "disabled", "ngModel", "ngModelChange", "valueChange"], ["kendoButton", "", "kendoTooltip", "", "title", "Default factor", "iconClass", "k-icon k-i-reset-color", 3, "position", "disabled", "click"], [1, "numerictext-component", 3, "value", "min", "max", "step", "decimals", "format", "autoCorrect", "ngModel", "ngModelChange", "valueChange"]], template: function ControlsSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "kendo-panelbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("stateChange", function ControlsSettingsComponent_Template_kendo_panelbar_stateChange_0_listener($event) { return ctx.onControlsSettingsExpanded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "kendo-panelbar-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ControlsSettingsComponent_ng_template_2_Template, 16, 28, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx.controlsSettingsExpanded);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__.PanelBarComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__.PanelBarItemComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__.PanelBarContentDirective, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__.SwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__.NumericTextBoxComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9scy1zZXR0aW5ncy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 3513:
/*!*******************************************************************************!*\
  !*** ./src/app/settings-panel/general-settings/general-settings.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralSettingsComponent": () => (/* binding */ GeneralSettingsComponent)
/* harmony export */ });
/* harmony import */ var _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/general-settings/general-settings.actions */ 9014);
/* harmony import */ var app_redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/redux/camera-settings/camera-settings.actions */ 9352);
/* harmony import */ var app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/camera-settings.constants */ 7681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/engine.service */ 701);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);
/* harmony import */ var _grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-settings/grid-settings.component */ 7464);
/* harmony import */ var _controls_settings_controls_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls-settings/controls-settings.component */ 4909);
/* harmony import */ var _renderer_settings_renderer_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderer-settings/renderer-settings.component */ 5865);












const _c0 = function () { return { opacity: false }; };
class GeneralSettingsComponent {
    constructor(store, engServ) {
        this.store = store;
        this.engServ = engServ;
        this.subscriptions = [];
        this.cameraSettings = Object.assign({}, app_constants_camera_settings_constants__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.tooltipPosition = 'right';
    }
    ngOnInit() {
        this.subscriptions.push(this.store
            .select(state => state.settingsPanel.formPosition)
            .subscribe(position => this.tooltipPosition = position), this.store
            .select(state => state.generalSettings.backgroundColor)
            .subscribe(backgroundColor => this.backgroundColor = backgroundColor), this.store
            .select(state => state.cameraSettings.cameraPosition)
            .subscribe(cameraPosition => this.cameraSettings.cameraPosition = cameraPosition), this.store
            .select(state => state.cameraSettings.controlsTarget)
            .subscribe(controlsTarget => this.cameraSettings.controlsTarget = controlsTarget));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }
    onBackgroundColorChange(color) {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetBackgroundColor(color));
    }
    onBackgroundColorReset() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].ResetBackgroundColor());
    }
    onResetAllSettings() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].ResetAllSettings());
        this.store.dispatch(new app_redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ResetCameraPosition());
        this.store.dispatch(new app_redux_camera_settings_camera_settings_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ResetControlsTarget());
        this.engServ.setInitialCameraPosition(this.cameraSettings);
    }
}
GeneralSettingsComponent.ɵfac = function GeneralSettingsComponent_Factory(t) { return new (t || GeneralSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_services_engine_service__WEBPACK_IMPORTED_MODULE_3__.EngineService)); };
GeneralSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GeneralSettingsComponent, selectors: [["general-settings"]], decls: 15, vars: 6, consts: [[1, "option-title"], [1, "option-line"], [3, "value", "format", "gradientSettings", "valueChange"], ["kendoButton", "", "kendoTooltip", "", "title", "Default color", "iconClass", "k-icon k-i-reset-color", 3, "position", "click"], ["kendoButton", "", "kendoTooltip", "", "title", "Reset tab settings", "iconClass", "k-icon k-i-reload", 3, "position", "click"]], template: function GeneralSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "General Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Background color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "kendo-colorpicker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function GeneralSettingsComponent_Template_kendo_colorpicker_valueChange_6_listener($event) { return ctx.onBackgroundColorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GeneralSettingsComponent_Template_button_click_7_listener() { return ctx.onBackgroundColorReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "grid-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "controls-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "renderer-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Reset tab settings:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GeneralSettingsComponent_Template_button_click_14_listener() { return ctx.onResetAllSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.backgroundColor)("format", "hex")("gradientSettings", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("position", ctx.getTooltipPosition());
    } }, directives: [_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.ColorPickerComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipDirective, _grid_settings_grid_settings_component__WEBPACK_IMPORTED_MODULE_4__.GridSettingsComponent, _controls_settings_controls_settings_component__WEBPACK_IMPORTED_MODULE_5__.ControlsSettingsComponent, _renderer_settings_renderer_settings_component__WEBPACK_IMPORTED_MODULE_6__.RendererSettingsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXNldHRpbmdzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 7464:
/*!******************************************************************************************!*\
  !*** ./src/app/settings-panel/general-settings/grid-settings/grid-settings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridSettingsComponent": () => (/* binding */ GridSettingsComponent)
/* harmony export */ });
/* harmony import */ var _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../redux/general-settings/general-settings.actions */ 9014);
/* harmony import */ var app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/constants/general-settings.constants */ 5674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 2930);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);









function GridSettingsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Show Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "kendo-switch", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GridSettingsComponent_ng_template_2_Template_kendo_switch_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.gridEnable = $event; })("click", function GridSettingsComponent_ng_template_2_Template_kendo_switch_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onChangeSwitch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.gridEnable);
} }
const _c0 = function () { return { opacity: false }; };
function GridSettingsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Grid options(size/division):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "kendo-numerictextbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GridSettingsComponent_ng_template_3_Template_kendo_numerictextbox_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.gridSize.size = $event; })("valueChange", function GridSettingsComponent_ng_template_3_Template_kendo_numerictextbox_valueChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onGridSizeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "kendo-numerictextbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GridSettingsComponent_ng_template_3_Template_kendo_numerictextbox_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.gridSize.division = $event; })("valueChange", function GridSettingsComponent_ng_template_3_Template_kendo_numerictextbox_valueChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onGridSizeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GridSettingsComponent_ng_template_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onGridSizeReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Grid color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "kendo-colorpicker", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function GridSettingsComponent_ng_template_3_Template_kendo_colorpicker_valueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onGridColorChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GridSettingsComponent_ng_template_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onGridColorReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Grid opacity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "kendo-numerictextbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function GridSettingsComponent_ng_template_3_Template_kendo_numerictextbox_valueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onOpacityChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.gridSize == null ? null : ctx_r1.gridSize.size)("min", 1)("step", 5)("disabled", !ctx_r1.gridEnable)("decimals", 0)("format", "n0")("autoCorrect", true)("ngModel", ctx_r1.gridSize.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.gridSize == null ? null : ctx_r1.gridSize.division)("min", 1)("max", 5000)("step", 1)("disabled", !ctx_r1.gridEnable)("decimals", 0)("format", "n0")("autoCorrect", true)("ngModel", ctx_r1.gridSize.division);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.gridEnable)("position", ctx_r1.getTooltipPosition());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.gridColor)("format", "hex")("disabled", !ctx_r1.gridEnable)("gradientSettings", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx_r1.getTooltipPosition())("disabled", !ctx_r1.gridEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.gridOpacity)("min", 0)("max", 1)("step", 0.05)("disabled", !ctx_r1.gridEnable)("autoCorrect", true);
} }
class GridSettingsComponent {
    constructor(store) {
        this.store = store;
        this.tooltipPosition = 'right';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position), this.store.select(state => state.generalSettings.grid.gridColor).subscribe(gridColor => this.gridColor = gridColor), this.store.select(state => state.generalSettings.grid.gridSettingsExpanded).subscribe(expanded => this.gridSettingsExpanded = expanded), this.store.select(state => state.generalSettings.grid.gridEnable).subscribe(enable => this.gridEnable = enable), this.store.select(state => state.generalSettings.grid.gridOpacity).subscribe(opacity => this.gridOpacity = opacity), this.store
            .select(state => state.generalSettings.grid.gridSize)
            .subscribe(size => {
            // avoid mutaion the original constant
            this.gridSize = Object.assign({}, size);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }
    onGridColorChange(color) {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetGridColor(color));
    }
    onGridColorReset() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].ResetGridColor());
    }
    onChangeSwitch(event) {
        event.stopPropagation();
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetGridEnable(this.gridEnable));
    }
    onGridSettingsExpanded(event) {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetGridSettingsExpand(event[0].expanded));
    }
    onOpacityChange(opacity) {
        if (opacity === null)
            this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetGridOpacity(app_constants_general_settings_constants__WEBPACK_IMPORTED_MODULE_1__["default"].grid.gridOpacity));
        else
            this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetGridOpacity(opacity));
    }
    onGridSizeChange() {
        const defaultValue = 5;
        for (let key in this.gridSize) {
            if (this.gridSize[key] === null)
                this.gridSize[key] = defaultValue;
        }
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetGridSize(this.gridSize));
    }
    onGridSizeReset() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].ResetGridSize());
    }
}
GridSettingsComponent.ɵfac = function GridSettingsComponent_Factory(t) { return new (t || GridSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
GridSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GridSettingsComponent, selectors: [["grid-settings"]], decls: 4, vars: 1, consts: [[3, "stateChange"], ["title", "", 3, "expanded"], ["kendoPanelBarItemTitle", ""], ["kendoPanelBarContent", ""], [1, "component-title-wrapper"], [1, "component-title"], [1, "component-switch", 3, "ngModel", "ngModelChange", "click"], [1, "option-line"], [1, "numerictext-component", 3, "value", "min", "step", "disabled", "decimals", "format", "autoCorrect", "ngModel", "ngModelChange", "valueChange"], [1, "numerictext-component", 3, "value", "min", "max", "step", "disabled", "decimals", "format", "autoCorrect", "ngModel", "ngModelChange", "valueChange"], ["kendoButton", "", "kendoTooltip", "", "title", "Default size", "iconClass", "k-icon k-i-reset-color", 3, "disabled", "position", "click"], [3, "value", "format", "disabled", "gradientSettings", "valueChange"], ["kendoButton", "", "kendoTooltip", "", "title", "Default color", "iconClass", "k-icon k-i-reset-color", 3, "position", "disabled", "click"], [1, "numerictext-component", 3, "value", "min", "max", "step", "disabled", "autoCorrect", "valueChange"]], template: function GridSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "kendo-panelbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("stateChange", function GridSettingsComponent_Template_kendo_panelbar_stateChange_0_listener($event) { return ctx.onGridSettingsExpanded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "kendo-panelbar-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GridSettingsComponent_ng_template_2_Template, 4, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, GridSettingsComponent_ng_template_3_Template, 17, 32, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", ctx.gridSettingsExpanded);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarItemComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarItemTitleDirective, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarContentDirective, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.SwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.NumericTextBoxComponent, _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipDirective, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.ColorPickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLXNldHRpbmdzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 5865:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings-panel/general-settings/renderer-settings/renderer-settings.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RendererSettingsComponent": () => (/* binding */ RendererSettingsComponent)
/* harmony export */ });
/* harmony import */ var _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../redux/general-settings/general-settings.actions */ 9014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-layout */ 2930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _resouces_attention_sign_attention_sign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../resouces/attention-sign/attention-sign.component */ 9446);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);









function RendererSettingsComponent_ng_template_2_attention_sign_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "attention-sign", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r1.attentionText);
} }
function RendererSettingsComponent_ng_template_2_attention_sign_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "attention-sign", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r3.attentionText);
} }
function RendererSettingsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Alpha channel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RendererSettingsComponent_ng_template_2_attention_sign_4_Template, 1, 1, "attention-sign", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "kendo-switch", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RendererSettingsComponent_ng_template_2_Template_kendo_switch_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.rendererAlpha = $event; })("click", function RendererSettingsComponent_ng_template_2_Template_kendo_switch_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onAlphaSwitch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Antialias:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RendererSettingsComponent_ng_template_2_attention_sign_11_Template, 1, 1, "attention-sign", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "kendo-switch", 6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RendererSettingsComponent_ng_template_2_Template_kendo_switch_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.rendererAntialias = $event; })("click", function RendererSettingsComponent_ng_template_2_Template_kendo_switch_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onAntialiasSwitch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(_r2 == null ? null : _r2.control == null ? null : _r2.control.control.pristine));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.rendererAlpha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(_r4 == null ? null : _r4.control == null ? null : _r4.control.control.pristine));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.rendererAntialias);
} }
class RendererSettingsComponent {
    constructor(store) {
        this.store = store;
        this.attentionText = 'Reload required';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state.generalSettings.renderer.rendererSettingsExpanded)
            .subscribe(expanded => this.rendererSettingsExpanded = expanded), this.store.select(state => state.generalSettings.renderer.rendererAlpha)
            .subscribe(alpha => this.rendererAlpha = alpha), this.store.select(state => state.generalSettings.renderer.rendererAntialias)
            .subscribe(antialias => this.rendererAntialias = antialias));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    onRendererSettingsExpanded(event) {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetRendererExpand(event[0].expanded));
    }
    onAlphaSwitch() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetRendererAlpha(this.rendererAlpha));
    }
    onAntialiasSwitch() {
        this.store.dispatch(new _redux_general_settings_general_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetRendererAntialias(this.rendererAntialias));
    }
}
RendererSettingsComponent.ɵfac = function RendererSettingsComponent_Factory(t) { return new (t || RendererSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
RendererSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RendererSettingsComponent, selectors: [["renderer-settings"]], decls: 3, vars: 1, consts: [[3, "stateChange"], ["title", "Renderer settings", 3, "expanded"], ["kendoPanelBarContent", ""], [1, "option-line"], [1, "option-line__attention-block"], ["kendoTooltip", "", 3, "title", 4, "ngIf"], [1, "component-switch", 3, "ngModel", "ngModelChange", "click"], ["alphaEl", ""], ["antialiasEl", ""], ["kendoTooltip", "", 3, "title"]], template: function RendererSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "kendo-panelbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("stateChange", function RendererSettingsComponent_Template_kendo_panelbar_stateChange_0_listener($event) { return ctx.onRendererSettingsExpanded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "kendo-panelbar-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RendererSettingsComponent_ng_template_2_Template, 14, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", ctx.rendererSettingsExpanded);
    } }, directives: [_progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarItemComponent, _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__.PanelBarContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_6__.SwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _resouces_attention_sign_attention_sign_component__WEBPACK_IMPORTED_MODULE_1__.AttentionSignComponent, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5kZXJlci1zZXR0aW5ncy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 6514:
/*!***********************************************************************************!*\
  !*** ./src/app/settings-panel/passengers-manager/passengers-manager.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengersManagerComponent": () => (/* binding */ PassengersManagerComponent)
/* harmony export */ });
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ 4533);
/* harmony import */ var app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/redux/elevator-manager-settings/elevator-manager-settings.actions */ 6550);
/* harmony import */ var app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/classes/floor.class */ 7329);
/* harmony import */ var app_shared_classes_passenger_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/classes/passenger.class */ 796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ 9408);
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ 8966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);










function PassengersManagerComponent_div_3_div_1_span_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PassengersManagerComponent_div_3_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PassengersManagerComponent_div_3_div_1_span_6_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const passengerIndex_r8 = restoredCtx.index; const floorNumber_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.onRemovePassenger(floorNumber_r5, passengerIndex_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "kendo-numerictextbox", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function PassengersManagerComponent_div_3_div_1_span_6_Template_kendo_numerictextbox_valueChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const passengerIndex_r8 = restoredCtx.index; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); const floorNumber_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.onChangeDestinationFloor(_r10, $event, floorNumber_r5, passengerIndex_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PassengersManagerComponent_div_3_div_1_span_6_span_4_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r7 = ctx.$implicit;
    const passengerIndex_r8 = ctx.index;
    const isLastPassenger_r9 = ctx.last;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.selectedElevator)("position", ctx_r6.getTooltipPosition());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Index: " + passengerIndex_r8)("position", ctx_r6.getTooltipPosition())("value", passenger_r7.destinationFloor)("max", ctx_r6.selectedElevator.coveredFloors - 1)("step", 1)("spinners", false)("decimals", 0)("format", "n0")("autoCorrect", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLastPassenger_r9);
} }
function PassengersManagerComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PassengersManagerComponent_div_3_div_1_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const floorNumber_r5 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.onClearPassengers(floorNumber_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PassengersManagerComponent_div_3_div_1_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const floorNumber_r5 = restoredCtx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.onAddPassenger(floorNumber_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PassengersManagerComponent_div_3_div_1_span_6_Template, 5, 12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const floor_r4 = ctx.$implicit;
    const floorNumber_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Floor ", floorNumber_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx_r3.getTooltipPosition());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx_r3.getTooltipPosition());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", floor_r4.passengers)("ngForTrackBy", ctx_r3.trackByMethod);
} }
function PassengersManagerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PassengersManagerComponent_div_3_div_1_Template, 7, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.selectedElevator.supportedFloors)("ngForTrackBy", ctx_r0.trackByMethod);
} }
function PassengersManagerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Choose an elevator, first!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PassengersManagerComponent {
    constructor(store, changeDetector) {
        this.store = store;
        this.changeDetector = changeDetector;
        this.tooltipPosition = 'right';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position), this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators), this.store
            .select(state => state.elevatorManagerSettings.selectedElevator)
            .subscribe(elevator => {
            this.selectedElevator = elevator;
            this.changeDetector.markForCheck(); // yes, this needed
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    getTooltipPosition() {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }
    onClearPassengers(floorNumber) {
        const selectedElevator = Object.assign(Object.assign({}, this.selectedElevator), { supportedFloors: [...this.selectedElevator.supportedFloors] });
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];
        selectedElevator.supportedFloors[floorNumber] = new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_1__["default"]([]);
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(selectedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(allElevators));
    }
    onAddPassenger(floorNumber) {
        const selectedElevator = Object.assign(Object.assign({}, this.selectedElevator), { supportedFloors: [...this.selectedElevator.supportedFloors] });
        const { passengers } = selectedElevator.supportedFloors[floorNumber];
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];
        selectedElevator.supportedFloors[floorNumber] = new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_1__["default"]([...passengers, new app_shared_classes_passenger_class__WEBPACK_IMPORTED_MODULE_2__["default"](floorNumber, this.getRandomNumber(floorNumber))]);
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(selectedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(allElevators));
    }
    onRemovePassenger(floorNumber, passengerIndex) {
        const selectedElevator = Object.assign(Object.assign({}, this.selectedElevator), { supportedFloors: [...this.selectedElevator.supportedFloors] });
        const passengers = [...selectedElevator.supportedFloors[floorNumber].passengers];
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];
        passengers.splice(passengerIndex, 1);
        allElevators[idx] = selectedElevator;
        selectedElevator.supportedFloors[floorNumber] = new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_1__["default"](passengers);
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(selectedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(allElevators));
    }
    onChangeDestinationFloor(ntextbox, newDestination, floorNumber, passengerIndex) {
        const selectedElevator = Object.assign(Object.assign({}, this.selectedElevator), { supportedFloors: [...this.selectedElevator.supportedFloors] });
        const passengers = [...selectedElevator.supportedFloors[floorNumber].passengers];
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];
        passengers[passengerIndex] = new app_shared_classes_passenger_class__WEBPACK_IMPORTED_MODULE_2__["default"](floorNumber, newDestination);
        selectedElevator.supportedFloors[floorNumber] = new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_1__["default"](passengers);
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(selectedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(allElevators));
        this.focusNumbericTextbox(ntextbox);
    }
    onClearAllFloors() {
        const selectedElevator = Object.assign(Object.assign({}, this.selectedElevator), { supportedFloors: [...this.selectedElevator.supportedFloors] });
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];
        selectedElevator.supportedFloors = Array.from({ length: selectedElevator.coveredFloors }).fill(new app_shared_classes_floor_class__WEBPACK_IMPORTED_MODULE_1__["default"]());
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetSelectedElevator(selectedElevator));
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(allElevators));
    }
    trackByMethod(index) {
        return index;
    }
    getRandomNumber(notEqualNumber) {
        const number = Math.floor(Math.random() * this.selectedElevator.coveredFloors);
        return number === notEqualNumber ? this.getRandomNumber(notEqualNumber) : number;
    }
    focusNumbericTextbox(ntextbox) {
        const idx = this.ntextboxes.toArray().findIndex(control => control === ntextbox);
        // because of recreation
        setTimeout(() => this.ntextboxes.toArray()[idx].focus());
    }
}
PassengersManagerComponent.ɵfac = function PassengersManagerComponent_Factory(t) { return new (t || PassengersManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PassengersManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PassengersManagerComponent, selectors: [["passengers-manager"]], viewQuery: function PassengersManagerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.NumericTextBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ntextboxes = _t);
    } }, decls: 6, vars: 3, consts: [[1, "option-title"], ["kendoButton", "", "kendoTooltip", "", "title", "Clear all floors", "iconClass", "k-icon k-i-cancel", 3, "position", "click"], ["class", "passengers-manager", 4, "ngIf", "ngIfElse"], ["emptyTemplate", ""], [1, "passengers-manager"], ["class", "floor-container", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "floor-container"], [1, "passengers-container"], ["kendoButton", "", "kendoTooltip", "", "title", "Clear the floor", "iconClass", "k-icon k-i-cancel", 1, "button--small", 3, "position", "click"], ["kendoButton", "", "kendoTooltip", "", "title", "Add a passenger", "iconClass", "k-icon k-i-plus", 1, "button--small", 3, "position", "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["kendoButton", "", "kendoTooltip", "", "title", "Remove the passenger", "iconClass", "k-icon k-i-minus", 1, "button--small--shifted", 3, "disabled", "position", "click"], ["kendoTooltip", "", "rounded", "small", "min", "0", 1, "numerictext-component", 3, "title", "position", "value", "max", "step", "spinners", "decimals", "format", "autoCorrect", "valueChange"], ["ntextbox", ""], [4, "ngIf"]], template: function PassengersManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PassengersManagerComponent_Template_button_click_1_listener() { return ctx.onClearAllFloors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Passengers manager\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PassengersManagerComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PassengersManagerComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx.getTooltipPosition());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedElevator)("ngIfElse", _r1);
    } }, directives: [_progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.NumericTextBoxComponent], styles: [".passengers-manager[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow: auto;\n  border-top: 1px dashed gray;\n}\n.button--small[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n}\n.button--small--shifted[_ngcontent-%COMP%] {\n  transform: scale(0.7) translateX(5px);\n}\n.numerictext-component[_ngcontent-%COMP%] {\n  width: 42px;\n}\n.floor-container[_ngcontent-%COMP%]:hover {\n  background-color: #def;\n}\n.passengers-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 4px 0;\n  border-bottom: 1px dashed gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NlbmdlcnMtbWFuYWdlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBQ0o7QUFHSTtFQUNJLHFCQUFBO0FBRFI7QUFJSTtFQUNJLHFDQUFBO0FBRlI7QUFNQTtFQUNJLFdBQUE7QUFKSjtBQU9BO0VBQ0ksc0JBQUE7QUFMSjtBQVFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFOSiIsImZpbGUiOiJwYXNzZW5nZXJzLW1hbmFnZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc2VuZ2Vycy1tYW5hZ2VyIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIGdyYXk7XG59XG5cbi5idXR0b24ge1xuICAgICYtLXNtYWxsIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIH1cblxuICAgICYtLXNtYWxsLS1zaGlmdGVkIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHRyYW5zbGF0ZVgoNXB4KTtcbiAgICB9XG59XG5cbi5udW1lcmljdGV4dC1jb21wb25lbnQge1xuICAgIHdpZHRoOiA0MnB4O1xufVxuXG4uZmxvb3ItY29udGFpbmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmO1xufVxuXG4ucGFzc2VuZ2Vycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZ3JheTtcbn0iXX0= */"] });


/***/ }),

/***/ 6820:
/*!************************************************************!*\
  !*** ./src/app/settings-panel/settings-panel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPanelComponent": () => (/* binding */ SettingsPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-settings/general-settings.component */ 3513);
/* harmony import */ var _passengers_manager_passengers_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passengers-manager/passengers-manager.component */ 6514);
/* harmony import */ var _elevators_manager_elevators_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elevators-manager/elevators-manager.component */ 8131);
/* harmony import */ var _smart_dumb_manager_smart_dumb_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-dumb-manager/smart-dumb-manager.component */ 4548);






function SettingsPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "general-settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "passengers-manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "elevators-manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsPanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "smart-dumb-manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettingsPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "70% Discount!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "90% Discount!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "One time offer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SettingsPanelComponent {
    constructor() { }
}
SettingsPanelComponent.ɵfac = function SettingsPanelComponent_Factory(t) { return new (t || SettingsPanelComponent)(); };
SettingsPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SettingsPanelComponent, selectors: [["settings-panel"]], inputs: { selectedOption: "selectedOption" }, decls: 5, vars: 5, consts: [[4, "ngIf"], ["id", "Passangers", 4, "ngIf"], ["id", "ElevatorsManager", 4, "ngIf"], ["id", "SmartDumbManager", 4, "ngIf"], ["id", "Favourites", 4, "ngIf"], ["id", "Passangers"], ["id", "ElevatorsManager"], ["id", "SmartDumbManager"], ["id", "Favourites"]], template: function SettingsPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SettingsPanelComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SettingsPanelComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SettingsPanelComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SettingsPanelComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SettingsPanelComponent_div_4_Template, 8, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedOption === "GlobalSettings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedOption === "Passangers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedOption === "ElevatorsManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedOption === "SmartDumbManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedOption === "Favourites");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_0__.GeneralSettingsComponent, _passengers_manager_passengers_manager_component__WEBPACK_IMPORTED_MODULE_1__.PassengersManagerComponent, _elevators_manager_elevators_manager_component__WEBPACK_IMPORTED_MODULE_2__.ElevatorsManagerComponent, _smart_dumb_manager_smart_dumb_manager_component__WEBPACK_IMPORTED_MODULE_3__.SmartDumbManagerComponent], styles: [".option-title {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-bottom: 10px;\n  text-align: center;\n  text-transform: capitalize;\n  border-bottom: 1px solid black;\n}\n.option-line {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 5px 5px 15px;\n}\n.option-line > span {\n  cursor: default;\n}\n.option-line__attention-block {\n  display: flex;\n  align-items: center;\n}\n.option-line__attention-block attention-sign {\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  cursor: pointer;\n}\n.component-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.component-title-wrapper .component-switch {\n  margin: 0 25px;\n}\n.numerictext-component {\n  width: 88px;\n}\n.k-panelbar > .k-item > .k-link,\n.k-panelbar > .k-item > .k-link:not(:focus) {\n  background-color: #f2f2f2;\n  color: #ff6358;\n}\n.k-panelbar > .k-item > .k-link:hover {\n  background-color: #e95348;\n  color: #ffffff;\n}\n.k-panelbar > .k-item > .k-link.k-state-focused {\n  background-color: #e67d76;\n  color: #ffffff;\n}\n.k-listbox li.k-list-item {\n  margin: 0;\n  list-style-type: none;\n  cursor: default;\n}\n.k-listbox li.k-list-item:hover {\n  background-color: #ddd;\n}\n.k-listbox li.k-list-item.k-selected {\n  background-color: #ff6358;\n}\n.k-listbox ul.k-list-ul {\n  margin: 0;\n  padding: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXBhbmVsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFKQTtFQU9RLGVBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFESTtFQUtRLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFEWjtBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSko7QUFBQTtFQU9RLGNBQUE7QUFKUjtBQVFBO0VBQ0ksV0FBQTtBQU5KO0FBU0E7O0VBRUkseUJBQUE7RUFDQSxjQUFBO0FBUEo7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQVJKO0FBV0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFUSjtBQVlBO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVZKO0FBWUk7RUFDSSxzQkFBQTtBQVZSO0FBYUk7RUFDSSx5QkFBQTtBQVhSO0FBZUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQWJKIiwiZmlsZSI6InNldHRpbmdzLXBhbmVsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5vcHRpb24tbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuXG4gICAgPiBzcGFuIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgICZfX2F0dGVudGlvbi1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgYXR0ZW50aW9uLXNpZ24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29tcG9uZW50LXRpdGxlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuY29tcG9uZW50LXN3aXRjaCB7XG4gICAgICAgIG1hcmdpbjogMCAyNXB4O1xuICAgIH1cbn1cblxuLm51bWVyaWN0ZXh0LWNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDg4cHg7XG59XG5cbi5rLXBhbmVsYmFyPi5rLWl0ZW0+LmstbGluayxcbi5rLXBhbmVsYmFyPi5rLWl0ZW0+LmstbGluazpub3QoOmZvY3VzKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBjb2xvcjogI2ZmNjM1ODtcbn1cblxuLmstcGFuZWxiYXI+LmstaXRlbT4uay1saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk1MzQ4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uay1wYW5lbGJhcj4uay1pdGVtPi5rLWxpbmsuay1zdGF0ZS1mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZDc2O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uay1saXN0Ym94IGxpLmstbGlzdC1pdGVtIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIH1cblxuICAgICYuay1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNTg7XG4gICAgfVxufVxuXG4uay1saXN0Ym94IHVsLmstbGlzdC11bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 4548:
/*!***********************************************************************************!*\
  !*** ./src/app/settings-panel/smart-dumb-manager/smart-dumb-manager.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDumbManagerComponent": () => (/* binding */ SmartDumbManagerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/redux/elevator-manager-settings/elevator-manager-settings.actions */ 6550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/object-manager.service */ 3510);
/* harmony import */ var _progress_kendo_angular_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-listbox */ 3042);






class SmartDumbManagerComponent {
    constructor(store, objectManager, changeDetector) {
        this.store = store;
        this.objectManager = objectManager;
        this.changeDetector = changeDetector;
        this.subscriptions = [];
        this.dumbElevators = [];
        this.smartElevators = [];
        this.toolbarSettings = { tools: ['transferTo', 'transferFrom'] };
    }
    ngOnInit() {
        this.subscriptions.push(this.store
            .select(state => state.elevatorManagerSettings.elevators)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(50))
            .subscribe(elevators => this.setSmartDumbElevators(elevators)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    onChangeElevatorType() {
        const allElevators = [...this.allElevators];
        const updatedElevators = allElevators.map(elevator => {
            const { name } = this.objectManager.getObjectById(elevator.id);
            if (this.dumbElevators.includes(name)) {
                return Object.assign(Object.assign({}, elevator), { isSmart: false });
            }
            else {
                return Object.assign(Object.assign({}, elevator), { isSmart: true });
            }
        });
        this.store.dispatch(new app_redux_elevator_manager_settings_elevator_manager_settings_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SetAllElevators(updatedElevators));
    }
    setSmartDumbElevators(elevators) {
        this.allElevators = elevators;
        const smartElevators = elevators.filter(elevator => elevator.isSmart);
        const dumbElevators = elevators.filter(elevator => !elevator.isSmart);
        this.smartElevators = smartElevators.reduce((acc, elevator) => {
            acc.push(this.objectManager.getObjectById(elevator.id).name);
            return acc;
        }, []);
        this.dumbElevators = dumbElevators.reduce((acc, elevator) => {
            acc.push(this.objectManager.getObjectById(elevator.id).name);
            return acc;
        }, []);
        this.changeDetector.detectChanges();
    }
}
SmartDumbManagerComponent.ɵfac = function SmartDumbManagerComponent_Factory(t) { return new (t || SmartDumbManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_services_object_manager_service__WEBPACK_IMPORTED_MODULE_1__.ObjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
SmartDumbManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmartDumbManagerComponent, selectors: [["smart-dumb-manager"]], decls: 11, vars: 5, consts: [[1, "option-title"], [1, "column-names"], [1, "option-line"], ["kendoListBoxDataBinding", "", 1, "kendo-listbox--large", 3, "data", "toolbar", "connectedWith", "actionClick"], [3, "data", "toolbar"], ["asia", ""]], template: function SmartDumbManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Smart Dumb Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Dumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Smart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "kendo-listbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionClick", function SmartDumbManagerComponent_Template_kendo_listbox_actionClick_8_listener() { return ctx.onChangeElevatorType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "kendo-listbox", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.dumbElevators)("toolbar", ctx.toolbarSettings)("connectedWith", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.smartElevators)("toolbar", false);
    } }, directives: [_progress_kendo_angular_listbox__WEBPACK_IMPORTED_MODULE_5__.ListBoxComponent, _progress_kendo_angular_listbox__WEBPACK_IMPORTED_MODULE_5__.DataBindingDirective], styles: [".column-names[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  cursor: default;\n}\nkendo-listbox[_ngcontent-%COMP%] {\n  width: calc(50% - 19px);\n  height: auto;\n}\n.kendo-listbox--large[_ngcontent-%COMP%] {\n  width: calc(50% + 19px);\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0LWR1bWItbWFuYWdlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJzbWFydC1kdW1iLW1hbmFnZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uLW5hbWVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxua2VuZG8tbGlzdGJveCB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTlweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ua2VuZG8tbGlzdGJveC0tbGFyZ2Uge1xuICAgIHdpZHRoOiBjYWxjKDUwJSArIDE5cHgpO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 971:
/*!**************************************************!*\
  !*** ./src/app/shared/classes/elevator.class.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Elevator)
/* harmony export */ });
/* harmony import */ var app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/constants/elevator-manager-settings.constants */ 2490);
/* harmony import */ var _floor_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor.class */ 7329);


class Elevator {
    constructor(config) {
        this.isSmart = false;
        this.isGoingUp = false;
        this.isGoingDown = false;
        this.wallColor = config.wallColor;
        this.wallOpacity = config.wallOpacity;
        this.wallTransparent = config.wallTransparent;
        this.length = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_0__["default"].defaultElevator.length;
        this.width = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_0__["default"].defaultElevator.width;
        this.height = app_constants_elevator_manager_settings_constants__WEBPACK_IMPORTED_MODULE_0__["default"].defaultElevator.height;
        this.capacity = config.capacity;
        this.speed = config.speed;
        this.coveredFloors = config.coveredFloors;
        this.currentFloor = config.currentFloor;
        this.wireframes = config.wireframes;
        this.supportedFloors = config.supportedFloors || Array.from({ length: config.coveredFloors }).fill(new _floor_class__WEBPACK_IMPORTED_MODULE_1__["default"]());
        this.isSmart = config.isSmart;
    }
}


/***/ }),

/***/ 7329:
/*!***********************************************!*\
  !*** ./src/app/shared/classes/floor.class.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Floor)
/* harmony export */ });
class Floor {
    constructor(passengers = []) {
        this.passengers = [];
        this.passengers = passengers;
    }
}


/***/ }),

/***/ 796:
/*!***************************************************!*\
  !*** ./src/app/shared/classes/passenger.class.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Passenger)
/* harmony export */ });
class Passenger {
    constructor(currentFloor, destinationFloor) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destinationFloor;
    }
}


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map