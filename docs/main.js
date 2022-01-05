(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+tmT":
/*!***************************************************************!*\
  !*** ./src/app/components/TourOfLife/TourOfLife.component.ts ***!
  \***************************************************************/
/*! exports provided: TourOfLifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourOfLifeComponent", function() { return TourOfLifeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Life2DContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Life2DContainer */ "QdnO");
/* harmony import */ var _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/lesson_lexicon.json */ "VhEx");
var _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/lesson_lexicon.json */ "VhEx", 1);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.predictionMode(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.revert(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " skip_previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.play(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_mat_icon_12_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_mat_icon_13_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.advance(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " skip_next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.reset(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " replay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const l_r6 = ctx_r23.$implicit;
    const idx_r7 = ctx_r23.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", l_r6.reference, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r7 == 0 && !ctx_r8.running_a || idx_r7 == 1 && !ctx_r8.running_b);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r7 == 0 && ctx_r8.running_a || idx_r7 == 1 && ctx_r8.running_b);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/life2d/", i_r2 + ";" + idx_r7, "");
} }
function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const l_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Placeable cells: ", l_r6.placeable, "");
} }
function TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_div_3_Template, 23, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_ng_container_5_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z8", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r2 + 1 + "lesson" + idx_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(l_r6.cell_layout.length == 0 && l_r6.lesson));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !l_r6.lesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r6.description, " ");
} }
function TourOfLifeComponent_mat_tab_41_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chapter hint:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.hint);
} }
function TourOfLifeComponent_mat_tab_41_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TourOfLifeComponent_mat_tab_41_ng_template_1_mat_card_3_Template, 9, 7, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TourOfLifeComponent_mat_tab_41_ng_template_1_div_4_Template, 5, 1, "div", 20);
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.chapter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r1.lessons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r1.hint);
} }
function TourOfLifeComponent_mat_tab_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TourOfLifeComponent_mat_tab_41_ng_template_1_Template, 5, 3, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", tab_r1.header);
} }
class TourOfLifeComponent {
    constructor() {
        this.running_a = false;
        this.running_b = false;
        this.lessons = _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__;
        this.selected = 0;
    }
    ngOnInit() {
        // const that = this;
        //
        // document.addEventListener("DOMContentLoaded", function() {
        //   console.log("all loaded");
        //   that.onTabClick(0);
        // },false);
        this.lessonSetup();
    }
    lessonSetup() {
        const parent = document.getElementById("tab_group");
        // console.log(parent.innerHTML);
        // parent.innerHTML +=
        //   '<mat-tab label="GoL: Basics 01">' +
        //   'test' +
        //   '</mat-tab>';
        // console.log(parent.innerHTML);
    }
    onTabClick(idx) {
        if (idx == 0)
            return;
        this.selected = idx - 1;
        // if(this.active_a != null){
        //   this.active_a.closeContext();
        //   this.active_a = null;
        // }
        // if(this.active_b != null){
        //   this.active_b.closeContext();
        //   this.active_b = null;
        // }
        document.getElementById(idx + "lesson0").innerHTML = null;
        document.getElementById(idx + "lesson1").innerHTML = null;
        this.active_a = new Life2DLesson(idx + "lesson0");
        this.active_b = new Life2DLesson(idx + "lesson1");
        this.active_a.setDefaultZoom(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].min_zoom, _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].max_zoom, _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].def_zoom);
        this.active_b.setDefaultZoom(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].min_zoom, _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].max_zoom, _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].def_zoom);
        this.active_a.setSpeed(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].speed);
        this.active_b.setSpeed(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].speed);
        if (!_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].lesson)
            this.active_a.maxCells(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].placeable + _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].cell_layout.length - 1);
        if (!_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].lesson)
            this.active_b.maxCells(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].placeable + _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].cell_layout.length - 1);
        this.reset(0);
        this.reset(1);
        if (_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].cell_layout.length == 0 && _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].lesson) {
            let el = document.getElementById(idx + "lesson0");
            el.parentNode.removeChild(el);
        }
        if (_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].cell_layout.length == 0 && _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].lesson) {
            let el = document.getElementById(idx + "lesson1");
            el.parentNode.removeChild(el);
        }
    }
    predictionMode(idx) {
        idx == 0 ? this.active_a.predictionMode() : this.active_b.predictionMode();
    }
    revert(idx) {
        idx == 0 ? this.active_a.revert() : this.active_b.revert();
    }
    play(idx) {
        console.log(idx);
        if (idx == 0) {
            this.active_a.play();
            this.running_a = !this.running_a;
        }
        else {
            this.active_b.play();
            this.running_b = !this.running_b;
        }
    }
    advance(idx) {
        idx == 0 ? this.active_a.advance() : this.active_b.advance();
    }
    reset(idx) {
        if (idx == 0) {
            if (this.active_a.prediction_mode)
                this.active_a.predictionMode();
            this.active_a.resetCells(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].cell_layout);
            if (_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].repeated.length != 0)
                this.active_a.setRepeating(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[0].repeated);
            this.active_a.devMode();
            this.active_a.devMode();
            if (this.running_a)
                this.play(idx);
        }
        else {
            if (this.active_b.prediction_mode)
                this.active_b.predictionMode();
            this.active_b.resetCells(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].cell_layout);
            if (_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].repeated.length != 0)
                this.active_b.setRepeating(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[this.selected].lessons[1].repeated);
            this.active_b.devMode();
            this.active_b.devMode();
            if (this.running_b)
                this.play(idx);
        }
    }
}
TourOfLifeComponent.ɵfac = function TourOfLifeComponent_Factory(t) { return new (t || TourOfLifeComponent)(); };
TourOfLifeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TourOfLifeComponent, selectors: [["tour-of-life"]], decls: 92, vars: 1, consts: [[1, "lesson_page"], ["id", "tab_group", 3, "selectedTabChange"], ["label", "Intro: GoL"], ["id", "overpopulation"], ["id", "underpopulation"], ["id", "birth"], ["id", "survival"], [3, "label", 4, "ngFor", "ngForOf"], ["label", "Touring Machine"], ["href", "https://www.nicolasloizeau.com/gol-computer"], ["src", "../../../assets/computer_in_life.jpg", "alt", "Programmable computer in the Game of Life by Nicolas Loizeau", 2, "width", "50%", "height", "30em", "margin-left", "25%"], ["label", "Recursion"], ["label", "Life inside Life"], ["controls", "", "width", "100%", 2, "margin-top", "1em", "margin-bottom", "1em"], ["src", "../../../assets/life_in_life.mp4", "type", "video/mp4"], ["href", "http://golly.sourceforge.net/"], [3, "label"], ["matTabContent", ""], [1, "lessons"], ["class", "lesson_container", 3, "mat-elevation-z8", 4, "ngFor", "ngForOf"], ["id", "chapter_tip", 4, "ngIf"], [1, "lesson_container"], [1, "renderer", 3, "id"], ["class", "controls_container", 4, "ngIf"], [1, "explanation"], [4, "ngIf"], [1, "controls_container"], [1, "controls"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Wiki reference", "matTooltipPosition", "above", 3, "href"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Toggle prediction mode", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Go back by one epoch", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Play/Pause the Game", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Advance the game by one epoch", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Reset the board", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit in Life2D", "matTooltipPosition", "above", 3, "routerLink"], [2, "margin-top", "-1em"], ["id", "chapter_tip"], [2, "font-weight", "bold", "margin-right", "1em"]], template: function TourOfLifeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function TourOfLifeComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) { return ctx.onTabClick($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduction: Game of Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome to the tutorial part of the Game of Life experience, the so-called Tour of Life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Here, you will learn from the ground up, the core principles of the Game of Life, as first imagined by the late English mathematician John Horton Conway in 1970. You will slowly work your way through a set of lessons and exercises, designed to teach you everything, from the very basic rules of Life, to some of the most complex patterns found within it. By the end of the tutorial, you will hopefully feel confident in predicting the developments of small cell clusters inside the Game of Life, be able to create some of the important patterns on your own, and you will even dip your toes into the world of computer logic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The Game of Life is often described as a zero player game, because the only input from the user happens at the very start, where they choose an initial cell configuration. After that, the simulation is run and the \"player\" can all but watch. To get a little bit more technical, Life is a so-called cellular automaton. This is basically a grid of cells, each having a state. Cells inside this grid can only exist in a certain number of states, which they switch between. The number/type of states a cell can \"inhabit\" depends on the automaton. The cells in the Game of Life basically have only two states. Dead or alive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Each cell has a specific neighborhood, based on which it transitions between states. This is the basic principle behind the evolution of a cellular automaton.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The tour of Life was designed as a highly interactive experience. This means, that in order for you to get the most out of it, you should be as curious as possible, and interact with the lesson presented to you as much as you can. Some lessons come in the form of an exercise, where you will even be asked to complete a pattern yourself, to really test your skills. However even for non-exercise type lessons, you can still interact with the simulation in numerous ways, which should help you understand the concepts even better.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Each chapter is split into 2 lessons. Exercises are marked as such in the header, and you will know that a given lesson is an exercise, by the indicator of how many cells you are allowed to place on the grid. Each lesson contains such a simulation grid, where the discussed pattern (or combination of patterns) will be shown, and a description of it. Be sure to check out the description before messing with the simulation for the optimal learning experience. Under the simulation grid, there is a set of controls that let you influence the simulation. Hover over them with the mouse for a brief explanation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In addition to the basic simulation controls for pause/play, skip forward/backward, or the button for restoring the simulation to it's initial state, you have the icon in the shape of the letter \"i\", which will lead you to an external resource that contains more information on the currently discussed topic. The eye icon is the prediction mode you can also find in the 2D Sandbox. It will give you a preview of what will happen to each cell in the next epoch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The color coding is as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This cell will die due to overpopulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "This cell will die due to underpopulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This cell will be born due to reproduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "This cell survives, unaffected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "The last unexplained icon, the pencil, copies the pattern from the lesson into the sandbox, for you to use all it's tools to properly examine it. You should really explore and get used to all of these options, as they will greatly improve your experience with the lessons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "For the initial exercises, the zoom on the camera is locked, to force you to focus on the pattern being introduced to you. This will change as you go on. The zoom settings and restrictions have been carefully chosen to not make the simulator unwieldy inside the lesson environment, and also to direct your attention to the important parts. If you haven't found it out for yourself already, you can use the middle mouse button to pan the camera around, and the mouse wheel allows you to zoom in or out, if the lesson permits it. By left-clicking with (and/or dragging) the mouse on any empty space, you can create a cell in it's place. Using the right-click lets you delete a cell. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "With this in mind, you should now be fully equipped to tackle your first lesson. Use the lesson navigation at the top of the screen to select it. And don't worry, if you ever get stuck, there are some hints placed around the Tour of Life that should help you out.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Have fun!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TourOfLifeComponent_mat_tab_41_Template, 2, 1, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Touring Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "The term \"Turing Machine\" or something being \"Turing complete\" has been mentioned a couple times already throughout the past lessons. Before we move on to the final couple chapters of this tour, it should probably be cleared up.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Named after the British mathematician, and father of the modern computer, Alan Turing, it is an abstract model of a machine, that can simulate any given algorithm, despite it's apparent simplicity. In this way, it's description is not too dissimilar from the one you were given to the Game of Life. A Turing machine is generally thought of as having an infinitely long input tape, that binary values can be either read from, or printed to. Using simple instructions and binary \"calculations\", it is thus possible, given enough time, to simulate an algorithm of arbitrary complexity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "When a system is deemed Turing complete, it simply means, that it's capable of simulating a Turing machine. It's therefore possible for a Turing complete system to simulate all tasks accomplishable by general modern computers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "You've already heard, and seen proof, that the Game of Life is Turing complete. Or at least, that components can be simulated within Life, that make it so. This might lead you to the question: \"Can I actually build a real computer inside Life?\" Naturally, by nature of it's Turing completeness, this can, and has been done. A fully fledged, 8-Bit programmable computer, complete with the Arithmetic and Logic Unit (ALU, part of a CPU that carries out arithmetic and logic operations), Memory and even a display. It was made by Nicolas Loizeau, and you can properly examine it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ". If you have been properly following the last few exercises, you might recognize his website, as it heavily influenced the form of the logic gates you have been presented with. Big thanks to Nicolas!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "If we take it one step further, we could also say, that the Game of Life is not only a Turing machine, but a universal Turing machine. Where a standard Turing machine is capable of simulating any arbitrary algorithm, you would have to create a specific machine for each algorithm you are trying to simulate. The universal Turing machine however takes the standard input tape you know from it's less advanced sibling, along with a description of a machine that would solve a certain problem. With this, the universal Turing machine can simulate the input machine and using the content of the tape, simulate it, and with it the algorithm itself. A universal Turing machine can simulate any other machine, and so can the Game of Life.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Recursion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "The fact that you can build a computer inside the Game of Life might not seem very interesting to you at the moment. After all, there are countless Turing complete systems, and thousands of examples all over the internet, of people, building simple computers out of the most bizarre things.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "For example, and you might be surprised to learn this, the trading card game Magic: The gathering is also technically considered Turing complete. Meaning, using a certain subset of the total cards, the rules of the game allow for a Turing machine to be constructed. Funnily enough, this means that you could build a computer out of MTG cards, that would itself be capable of playing MTG.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Another, more common example is the game Minecraft. You have probably seen hundreds of videos online of people building computers inside the game. Granted, it is a fair bit easier to construct something resembling a computer inside the game, since it already includes a lot of the necessary building blocks out of the box, without a need for abstraction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "These are examples of what's called unintentional Turing completeness. The creator of Magic: The gathering (although he was a mathematician), or the developer of Minecraft did not set out to create a Turing complete system within their games. It just sort of happened. The same goes for John Conway and the Game of Life who did not initially set out to create a Turing machine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "If you think about it, what you are doing right now is using the computer to simulate Life. The sandbox, or even the lessons are not recordings, but the actual Game of Life being computed in real time. And as you have just found out, you can simulate a computer inside the Game of Life. Where does that lead you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Yes. Probably the most interesting feature of the Game of Life, stemming from the fact that it is Turing complete, is that you can build a Turing machine, that can run Life itself. You can therefore simulate the Game of Life, inside the actual Game of Life. This might be a bit difficult to imagine. Why don't you move on to the last chapter of this tutorial, and see for yourself, what this actually means and looks like.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "The Game of Life simulated within the Game of Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "video", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "source", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Sorry, your browser doesn't support embedded videos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "This screen capture depicts the oscillator pattern known as Blinker being simulated within Life itself. This simulation would be too costly to do in real time inside a web application, therefore only a video has been provided as a sort of \"proof of concept\". The actual simulation was done in a program called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Golly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ", using a python script shipped with it, called metafier.py");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lessons);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%]{\r\n  margin-top: 1em;\r\n}\r\n\r\n.lesson_page[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 5%;\r\n  width: 90%;\r\n  height: 90%;\r\n}\r\n\r\n.lesson_page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  font-size: xx-large;\r\n}\r\n\r\n.lessons[_ngcontent-%COMP%]{\r\n  height: 70vh;\r\n  display: flex;\r\n  flex-flow: row;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.lesson_container[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n  width: 45%;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.renderer[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  width: 75%;\r\n  height: 50%;\r\n  background-color: black;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  border-radius: 0 0 20px 20px;\r\n}\r\n\r\n.explanation[_ngcontent-%COMP%]{\r\n  margin-top: 1em;\r\n  width: 80%;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  \r\n}\r\n\r\n.next_prev[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#chapter_tip[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  height: 1em;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-flow:row;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#survival[_ngcontent-%COMP%]{\r\n  width: 20em;\r\n  background-color: #FFC107;\r\n}\r\n\r\n#underpopulation[_ngcontent-%COMP%]{\r\n  background-color: #D81B60;\r\n  color: white;\r\n  width: 20em;\r\n}\r\n\r\n#overpopulation[_ngcontent-%COMP%]{\r\n  background-color: #1E88E5;\r\n  color: white;\r\n  width: 20em;\r\n}\r\n\r\n#birth[_ngcontent-%COMP%]{\r\n  background-color: #004D40;\r\n  color: white;\r\n  width: 20em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ub3VyT2ZMaWZlL1RvdXJPZkxpZmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1RvdXJPZkxpZmUvVG91ck9mTGlmZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4ubGVzc29uX3BhZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNSU7XHJcbiAgbGVmdDogNSU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLmxlc3Nvbl9wYWdlIGgxe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5sZXNzb25ze1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIG1hcmdpbjogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubGVzc29uX2NvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogNDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZW5kZXJlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb250cm9scyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5leHBsYW5hdGlvbntcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG59XHJcblxyXG4ubmV4dF9wcmV2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjaGFwdGVyX3RpcHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OnJvdztcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3N1cnZpdmFse1xyXG4gIHdpZHRoOiAyMGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XHJcbn1cclxuXHJcbiN1bmRlcnBvcHVsYXRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDIwZW07XHJcbn1cclxuXHJcbiNvdmVycG9wdWxhdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU4OEU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjBlbTtcclxufVxyXG5cclxuI2JpcnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRENDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAyMGVtO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourOfLifeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tour-of-life',
                templateUrl: './TourOfLife.component.html',
                styleUrls: ['./TourOfLife.component.css']
            }]
    }], null, null); })();
class Life2DLesson extends _Life2DContainer__WEBPACK_IMPORTED_MODULE_1__["Life2DContainer"] {
    setDefaultZoom(min_zoom, max_zoom, def_zoom) {
        this.renderer.setZoom(min_zoom, max_zoom, def_zoom);
    }
    resetCells(cells) {
        this.clear();
        for (let c of cells)
            this.generate_cell(c[0], c[1], true);
    }
    // method to close webgl context
    // closeContext(){
    //   this.renderer.closeContext();
    // }
    maxCells(count) {
        this.grid.maxCells(count);
    }
}


/***/ }),

/***/ "/o5u":
/*!*******************************************************!*\
  !*** ./src/app/components/Life2D/Life2D.component.ts ***!
  \*******************************************************/
/*! exports provided: Life2DComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Life2DComponent", function() { return Life2DComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Life2DContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Life2DContainer */ "QdnO");
/* harmony import */ var _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/lesson_lexicon.json */ "VhEx");
var _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/lesson_lexicon.json */ "VhEx", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");















function Life2DComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This cell will die due to overpopulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This cell will die due to underpopulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This cell will be born due to reproduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This cell survives, unaffected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This is the Game of Life 2D sandbox. Here, you can experiment,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " either with what you have learned from the Tour of Life, or just play around with your own patterns and configurations.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " You will find a more detailed explanation regarding the functionality of the simulation in the Tour section of this website.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " One important thing worth explaining here, however, is the option to actively change the algorithm mid-simulation. In the options menu,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " you can tweak how many cells are necessary, for a cell to die, or for another to be born.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The very last option in the menu allows you to upload an image (jpg/png), the lightest values of which get translated into a starting pattern of cells. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Left mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " -> Place a new cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Right mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " -> Delete an existing cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Middle mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " -> Scroll to zoom, hold to pan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Life2DComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Life2DComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Life2DComponent {
    constructor(params) {
        this.params = params;
    }
    ngOnInit() {
        this.life2DContainer = new _Life2DContainer__WEBPACK_IMPORTED_MODULE_1__["Life2DContainer"]("render_window");
        const url = this.params.snapshot.paramMap.get('config');
        if (url && url.match("\d*;\d*")) {
            let chapter = url.split(";")[0];
            let lesson = url.split(";")[1];
            if (_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[parseInt(chapter)] && _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[parseInt(chapter)].lessons[parseInt(lesson)]) {
                let cells = _assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[parseInt(chapter)].lessons[parseInt(lesson)].cell_layout;
                for (let c of cells)
                    this.life2DContainer.generate_cell(c[0], c[1], true);
                if (_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[parseInt(chapter)].lessons[parseInt(lesson)].repeated.length != 0) {
                    this.life2DContainer.setRepeating(_assets_lesson_lexicon_json__WEBPACK_IMPORTED_MODULE_2__[parseInt(chapter)].lessons[parseInt(lesson)].repeated);
                }
            }
        }
        const that = this;
        window.addEventListener("click", function (e) {
            if (that.life2DContainer.getLegend())
                that.life2DContainer.toggleLegend();
        }, false);
    }
    inputImage() {
        document.getElementById('file_picker').click();
    }
    loadImage(e) {
        this.life2DContainer.clear();
        let img = new Image();
        let canvas = document.createElement('canvas');
        let context = canvas.getContext("2d");
        document.getElementById("test").appendChild(canvas);
        console.log(e.currentTarget.files);
        let file = e.currentTarget.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        let that = this;
        reader.onload = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                img.src = evt.target.result;
                if (img.width < 320 || img.height < 240) {
                    img.width = 320;
                    img.height = 240;
                }
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0, img.width, img.height);
                    let imgData = context.getImageData(0, 0, img.width, img.height);
                    for (let i = 0; i < imgData.data.length; i += 4) {
                        let avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                        // console.log(avg);
                        if (avg >= 200) {
                            let x = (i / 4) % img.width;
                            let y = Math.floor((i / 4) / img.width);
                            // console.log([x,y]);
                            // x/=10;
                            // y/=10;
                            x -= img.width / 2;
                            y -= img.height / 2;
                            let pos_x = x < 0 ? Math.trunc(x) - 1 : Math.trunc(x) + 1;
                            let pos_y = y < 0 ? Math.trunc(y) - 1 : Math.trunc(y) + 1;
                            if (pos_x < 0)
                                pos_x += 1;
                            if (pos_y < 0)
                                pos_y += 1;
                            that.life2DContainer.generate_cell(pos_x, -pos_y, false, false);
                        }
                    }
                    that.life2DContainer.scene_reload();
                    // context.putImageData(imgData, 0, 0);
                };
            }
        };
    }
}
Life2DComponent.ɵfac = function Life2DComponent_Factory(t) { return new (t || Life2DComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
Life2DComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Life2DComponent, selectors: [["life-2d"]], decls: 120, vars: 30, consts: [["id", "render_window"], ["id", "legend"], ["mat-raised-button", "", "cdkOverlayOrigin", "", 2, "z-index", "1000", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "controls_container"], ["id", "controls", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Clear the Game board", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Go back by one epoch", "matTooltipPosition", "above", 3, "disabled", "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Play/Pause the Game", "matTooltipPosition", "above", 3, "click"], [4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Advance the game by one epoch", "matTooltipPosition", "above", 3, "disabled", "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Restore the cleared board", "matTooltipPosition", "above", 3, "disabled", "click"], ["id", "options_container"], ["id", "options_button"], ["id", "expand_options"], ["type", "button", "mat-icon-button", "", 1, "selection_button", 2, "width", "1em", 3, "click"], ["id", "options_drawer", "mode", "side", "position", "end", 1, "sidenav_drawer", 3, "click"], ["options", ""], ["id", "sidebar_options", 1, "sidebar"], [1, "option_box"], [1, "option_name"], [1, "options_input"], ["type", "number", "min", "0", "matInput", "", 3, "max", "value", "change"], ["type", "number", "max", "8", "matInput", "", 3, "min", "value", "change"], ["type", "number", "min", "1", "max", "8", "matInput", "", 3, "value", "change"], ["id", "prediction_mode", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["color", "primary", 1, "example-margin", 3, "change"], ["color", "primary", "min", "0.1", "max", "10", "step", "0.1", "thumbLabel", "", 3, "value", "change"], ["type", "number", "min", "1", "matInput", "", "id", "revert_count", 3, "value", "change"], [1, "color_sliders"], ["id", "bg_r", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "bg_g", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "bg_b", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "c_r", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "c_g", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "c_b", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["type", "file", "id", "file_picker", "accept", "image/png, image/jpeg", 2, "display", "none", 3, "change"], ["type", "button", "mat-raised-button", "", 2, "margin-bottom", "2.5em", 3, "click"], ["id", "test"], ["id", "legend_content"], ["id", "overpopulation"], ["id", "underpopulation"], ["id", "birth"], ["id", "survival"]], template: function Life2DComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_2_listener($event) { ctx.life2DContainer.toggleLegend(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Life2DComponent_ng_template_5_Template, 35, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_div_click_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_8_listener() { return ctx.life2DContainer.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_11_listener() { return ctx.life2DContainer.revert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " skip_previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_14_listener() { return ctx.life2DContainer.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Life2DComponent_mat_icon_15_Template, 2, 0, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Life2DComponent_mat_icon_16_Template, 2, 0, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_17_listener() { return ctx.life2DContainer.advance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " skip_next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_20_listener() { return ctx.life2DContainer.restore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " replay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-drawer-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-drawer", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_mat_drawer_click_29_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Living cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cells born");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cells died");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Min # of cells for survival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_input_change_52_listener($event) { return ctx.life2DContainer.setMinSurvival($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Max # of cells for survival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_input_change_58_listener($event) { return ctx.life2DContainer.setMaxSurvival($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "# of cells for birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_input_change_64_listener($event) { return ctx.life2DContainer.setBirth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Prediction mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_checkbox_change_68_listener() { return ctx.life2DContainer.predictionMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Developer mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-checkbox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_checkbox_change_72_listener() { return ctx.life2DContainer.devMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Simulation interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-slider", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_76_listener($event) { return ctx.life2DContainer.change_speed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Limit of returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_input_change_82_listener($event) { return ctx.life2DContainer.setRevert($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Background color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " R ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-slider", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_89_listener() { return ctx.life2DContainer.sceneColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " G ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-slider", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_92_listener() { return ctx.life2DContainer.sceneColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-slider", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_95_listener() { return ctx.life2DContainer.sceneColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Cell color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " R ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-slider", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_102_listener() { return ctx.life2DContainer.cellColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " G ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-slider", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_105_listener() { return ctx.life2DContainer.cellColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-slider", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_slider_change_108_listener() { return ctx.life2DContainer.cellColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Hide grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-checkbox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_mat_checkbox_change_112_listener() { return ctx.life2DContainer.hideGrid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "File input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Life2DComponent_Template_input_change_116_listener($event) { return ctx.loadImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Life2DComponent_Template_button_click_117_listener() { return ctx.inputImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 39);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.life2DContainer.getLegend());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.life2DContainer.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.life2DContainer.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.life2DContainer.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.life2DContainer.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.life2DContainer.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.life2DContainer.getLiveCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.life2DContainer.nr_to_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.life2DContainer.nr_to_die);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.life2DContainer.max_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.min_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.life2DContainer.min_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.max_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.life2DContainer.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.interval * 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.getRevert());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.bg_color.r * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.life2DContainer.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.bg_color.g * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.life2DContainer.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.bg_color.b * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.life2DContainer.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.cell_color.r * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.life2DContainer.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.cell_color.g * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.life2DContainer.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.life2DContainer.cell_color.b * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", ctx.life2DContainer.prediction_mode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["CdkOverlayOrigin"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["CdkConnectedOverlay"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSlider"]], styles: ["#render_window[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0; right: 0; bottom: 0; left: 0;\r\n  \r\n  \r\n  \r\n  \r\n  \r\n}\r\n\r\n.controls_container[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  z-index: 500;\r\n  position:fixed;\r\n  bottom:0;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: center;\r\n}\r\n\r\n#controls[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  background-color: white;\r\n  border-radius: 20px 20px 0 0;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#options_container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  background-color: transparent;\r\n  pointer-events: none;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n#options_button[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n  align-content: flex-end;\r\n}\r\n\r\n#expand_options[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  pointer-events: all;\r\n  width: 1.5em;\r\n  border-radius: 10px 0 0 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n  \r\n  pointer-events: all;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#sidebar_options[_ngcontent-%COMP%]{\r\n  height: 175%;\r\n}\r\n\r\n.options_input[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n}\r\n\r\n.option_box[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.option_name[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n#options_drawer[_ngcontent-%COMP%]{\r\n  pointer-events: all;\r\n  width: 40%;\r\n}\r\n\r\n.color_sliders[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#legend[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 3%;\r\n}\r\n\r\n#legend_content[_ngcontent-%COMP%]{\r\n  \r\n  border-radius: 0 10px 10px 10px;\r\n  margin-top: -0.5em;\r\n  background-color: white;\r\n  padding: 1em;\r\n  \r\n}\r\n\r\n#legend_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n}\r\n\r\n#survival[_ngcontent-%COMP%]{\r\n  background-color: #FFC107;\r\n}\r\n\r\n#underpopulation[_ngcontent-%COMP%]{\r\n  background-color: #D81B60;\r\n  color: white;\r\n}\r\n\r\n#overpopulation[_ngcontent-%COMP%]{\r\n  background-color: #1E88E5;\r\n  color: white;\r\n}\r\n\r\n#birth[_ngcontent-%COMP%]{\r\n  background-color: #004D40;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9MaWZlMkQvTGlmZTJELmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTztFQUNwQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsUUFBUTtFQUNSLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9MaWZlMkQvTGlmZTJELmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVuZGVyX3dpbmRvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwO1xyXG4gIC8qei1pbmRleDogLTE7Ki9cclxuICAvKmRpc3BsYXk6IGZsZXg7Ki9cclxuICAvKm1hcmdpbi10b3A6IC01MGVtOyovXHJcbiAgLyp3aWR0aDogNTAwcHg7Ki9cclxuICAvKmhlaWdodDogMjAwcHg7Ki9cclxufVxyXG5cclxuLmNvbnRyb2xzX2NvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBib3R0b206MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY29udHJvbHN7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNvcHRpb25zX2NvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jb3B0aW9uc19idXR0b257XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4jZXhwYW5kX29wdGlvbnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyovXHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jc2lkZWJhcl9vcHRpb25ze1xyXG4gIGhlaWdodDogMTc1JTtcclxufVxyXG5cclxuLm9wdGlvbnNfaW5wdXR7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLm9wdGlvbl9ib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25fbmFtZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI29wdGlvbnNfZHJhd2Vye1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmNvbG9yX3NsaWRlcnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsZWdlbmR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMSU7XHJcbiAgbGVmdDogMyU7XHJcbn1cclxuXHJcbiNsZWdlbmRfY29udGVudHtcclxuICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXHJcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIC8qY29sb3I6IHdoaXRlOyovXHJcbn1cclxuXHJcbiNsZWdlbmRfY29udGVudCBwe1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuI3N1cnZpdmFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XHJcbn1cclxuXHJcbiN1bmRlcnBvcHVsYXRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNvdmVycG9wdWxhdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU4OEU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JpcnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRENDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Life2DComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'life-2d',
                templateUrl: './Life2D.component.html',
                styleUrls: ['./Life2D.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SzaboP\Documents\TU Wien\Bachelorarbeit\tour-of-life\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BVyS":
/*!*******************************!*\
  !*** ./src/app/Renderer2D.ts ***!
  \*******************************/
/*! exports provided: Renderer2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer2D", function() { return Renderer2D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

class Renderer2D {
    constructor(width, height) {
        this.wheel_down = false;
        this.dev_mode = false;
        this.def_zoom = 2;
        this.min_zoom = 2;
        this.max_zoom = 15;
        this.current_zoom = this.def_zoom;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, width / height, 0.1, 1000);
        this.camera.position.z = this.def_zoom;
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-200, -55000, -50));
        const that = this;
        this.renderer.domElement.addEventListener('wheel', (event) => {
            if ((that.camera.position.z < that.max_zoom && event.deltaY > 0) || (that.camera.position.z > that.min_zoom && event.deltaY < 0) || that.dev_mode)
                that.camera.position.z += Math.sign(event.deltaY) * 0.5;
        }, false);
        this.renderer.domElement.addEventListener('mousedown', function (e) {
            if (e.button == 1)
                that.wheel_down = true;
        }, false);
        this.renderer.domElement.addEventListener('mousemove', function (e) {
            if (that.wheel_down) {
                if (!that.dev_mode)
                    that.camera.position.set(Math.min(Math.max(that.camera.position.x - e.movementX / that.getScale(), -10), 10), Math.min(Math.max(that.camera.position.y + e.movementY / that.getScale(), -10), 10), that.camera.position.z);
                else
                    that.camera.position.set(that.camera.position.x - e.movementX / that.getScale(), that.camera.position.y + e.movementY / that.getScale(), that.camera.position.z);
            }
        }, false);
        this.renderer.domElement.addEventListener('mouseup', function (e) {
            if (e.button == 1)
                that.wheel_down = false;
        }, false);
        this.setSize(width, height);
    }
    devMode() {
        this.dev_mode = !this.dev_mode;
        if (!this.dev_mode)
            this.camera.position.set(0, 0, this.def_zoom);
    }
    getRenderer() {
        return this.renderer.domElement;
    }
    // public shouldHideGrid(): boolean{
    //   return this.camera.position.z>this.def_zoom+1;
    // }
    getCamera() {
        return this.camera;
    }
    setZoom(min_zoom, max_zoom, def_zoom) {
        this.camera.position.z = min_zoom;
        this.min_zoom = min_zoom;
        this.max_zoom = max_zoom;
        this.def_zoom = def_zoom;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.renderer.setSize(this.width, this.height, false);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
    getScale() {
        const fov = this.camera.fov * Math.PI / 180;
        const scale_height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const scale = this.height / scale_height;
        return scale;
    }
    render(scene) {
        this.scene = scene;
        this.renderer.render(this.scene, this.camera);
    }
    //unused method to close webgl context
    closeContext() {
        this.renderer.forceContextLoss();
        this.renderer.context = null;
        this.renderer.domElement = null;
        this.renderer = null;
    }
}


/***/ }),

/***/ "D/Q5":
/*!***************************!*\
  !*** ./src/app/Cell2D.ts ***!
  \***************************/
/*! exports provided: Cell2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell2D", function() { return Cell2D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

class Cell2D {
    constructor(x, y, color) {
        this.size = 1 / 10;
        this.x = x;
        this.y = y;
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](this.size, this.size);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: color });
        this.cell = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        this.cell.position.x = x / 10 - Math.sign(x) * this.size / 2;
        this.cell.position.y = y / 10 - Math.sign(y) * this.size / 2;
    }
    getCell() {
        return this.cell;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setColor(color) {
        this.cell.material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: color });
    }
}


/***/ }),

/***/ "Dcr7":
/*!*******************************!*\
  !*** ./src/app/Renderer3D.ts ***!
  \*******************************/
/*! exports provided: Renderer3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer3D", function() { return Renderer3D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

class Renderer3D {
    constructor(width, height) {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, width / height, 0.1, 1000);
        this.camera.position.z = 1;
        this.setSize(width, height);
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.renderer.setSize(this.width, this.height, false);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
    getRenderer() {
        return this.renderer.domElement;
    }
    getCamera() {
        return this.camera;
    }
    getScale() {
        const fov = this.camera.fov * Math.PI / 180;
        const scale_height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const scale = this.height / scale_height;
        return scale;
    }
    render(scene) {
        this.scene = scene;
        this.renderer.render(this.scene, this.camera);
    }
    //unused method to close webgl context
    closeContext() {
        this.renderer.forceContextLoss();
        this.renderer.context = null;
        this.renderer.domElement = null;
        this.renderer = null;
    }
}


/***/ }),

/***/ "KLPn":
/*!***************************!*\
  !*** ./src/app/Cell3D.ts ***!
  \***************************/
/*! exports provided: Cell3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell3D", function() { return Cell3D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

class Cell3D {
    constructor(x, y, z, color) {
        this.size = 0.1;
        this.x = x;
        this.y = y;
        this.z = z;
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](this.size, this.size, this.size);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: color });
        this.cell = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        this.cell.position.x = x / 10 - Math.sign(x) * this.size / 2;
        this.cell.position.y = y / 10 - Math.sign(y) * this.size / 2;
        this.cell.position.z = z / 10 - Math.sign(z) * this.size / 2;
        const geo = new three__WEBPACK_IMPORTED_MODULE_0__["EdgesGeometry"](this.cell.geometry);
        const mat = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: 0x000000, linewidth: 1 });
        let wireframe = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](geo, mat);
        wireframe.renderOrder = 1;
        this.cell.add(wireframe);
    }
    getCell() {
        return this.cell;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getZ() {
        return this.z;
    }
    setColor(color, transparent = false) {
        let m = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: color });
        m.opacity = 0.5;
        m.transparent = transparent;
        this.cell.material = m;
    }
}


/***/ }),

/***/ "MBfI":
/*!***************************!*\
  !*** ./src/app/Grid2D.ts ***!
  \***************************/
/*! exports provided: Grid2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid2D", function() { return Grid2D; });
/* harmony import */ var _Cell2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell2D */ "D/Q5");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");


class Grid2D {
    constructor() {
        this.coords = [];
        this.active = [];
        this.to_die = [];
        this.to_birth = [];
        this.lonely = [];
        this.overcrowded = [];
        this.restore = [];
        this.revert = [];
        this.revert_limit = 20;
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xffc107);
        this.prediction_mode = false;
        this.predicted_count = 0;
        this.min_survival = 2;
        this.max_survival = 3;
        this.birth = 3;
        this.max_cells = 0;
    }
    getMinSurvival() {
        return this.min_survival;
    }
    getMaxSurvival() {
        return this.max_survival;
    }
    getBirth() {
        return this.birth;
    }
    setMinSurvival(n) {
        this.min_survival = n;
    }
    setMaxSurvival(n) {
        this.max_survival = n;
    }
    setBirth(n) {
        this.birth = n;
    }
    add_to_grid(cell, auto = false) {
        if ((this.coords[cell.getX()] && this.coords[cell.getX()][cell.getY()] != null) || (!auto && this.max_cells > 0 && this.active.length > this.max_cells))
            return;
        this.active.push(cell);
        let config = "";
        for (let a of this.active)
            config += "[" + a.getX() + "," + a.getY() + "],";
        // console.log([cell.getX(), cell.getY()]);
        if (this.coords[cell.getX()] == null) {
            this.coords[cell.getX()] = [];
        }
        this.coords[cell.getX()][cell.getY()] = cell;
        this.restore = [];
    }
    remove_from_grid(x, y) {
        // for (let c of this.active) {
        //   if (c.getX() == x && c.getY() == y) {
        //     this.active.splice(this.active.indexOf(c), 1);
        //     this.coords[x][y] = null;
        //   }
        // }
        this.active.splice(this.active.indexOf(this.coords[x][y]), 1);
        this.coords[x][y] = null;
    }
    advance() {
        if (this.predicted_count > 0) {
            this.active.splice(this.active.length - this.predicted_count);
        }
        this.to_die = [];
        this.to_birth = [];
        this.lonely = [];
        this.overcrowded = [];
        if (this.revert.length >= this.revert_limit) {
            this.revert = this.revert.slice(1);
        }
        this.revert.push(this.active.slice());
        for (let a of this.active) {
            this.check_neighbors(a.getX(), a.getY());
        }
        for (let death of this.to_die) {
            this.active.splice(this.active.indexOf(death), 1);
            this.coords[death.getX()][death.getY()] = null;
        }
        for (let live of this.to_birth) {
            this.active.push(live);
            if (!this.coords[live.getX()]) {
                this.coords[live.getX()] = [];
            }
            this.coords[live.getX()][live.getY()] = live;
        }
        if (this.prediction_mode) {
            this.predict();
        }
    }
    get_cells() {
        return this.active;
    }
    clear_grid() {
        this.restore = this.active;
        this.active = [];
        this.coords = [];
        this.to_birth = [];
        this.to_die = [];
        this.revert = [];
        this.lonely = [];
        this.overcrowded = [];
    }
    restore_grid() {
        for (let c of this.restore) {
            this.add_to_grid(c);
        }
    }
    setRevert(limit) {
        this.revert_limit = limit;
    }
    getRevert() {
        return this.revert_limit;
    }
    getToDie() {
        return this.to_die;
    }
    getToBirth() {
        return this.to_birth;
    }
    //reverts the grid to a previous state
    revert_grid() {
        if (this.revert.length > 0) { //checks if any reverse steps exist
            const prev = this.revert.pop();
            //clear everything. computation starts fresh after a revert
            this.active = [];
            this.coords = [];
            this.to_birth = [];
            this.to_die = [];
            this.restore = [];
            //go through last state and add cells to grid
            for (let c of prev) {
                this.add_to_grid(c);
            }
        }
    }
    check_neighbors(x, y) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
                const coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
                if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
                    this.cell_death(this.coords[coord_x][coord_y]);
                }
                else {
                    this.cell_birth(coord_x, coord_y);
                }
            }
        }
    }
    cell_death(cell) {
        let counter = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const coord_x = (cell.getX() < 0 && cell.getX() + i == 0) ? 1 : ((cell.getX() > 0 && cell.getX() + i == 0) ? -1 : cell.getX() + i);
                const coord_y = (cell.getY() < 0 && cell.getY() + j == 0) ? 1 : ((cell.getY() > 0 && cell.getY() + j == 0) ? -1 : cell.getY() + j);
                if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
                    counter++;
                }
            }
        }
        if (!this.to_die.includes(cell)) {
            if (counter < this.min_survival + 1) {
                this.to_die.push(cell);
                this.lonely.push(cell);
            }
            else if (counter > this.max_survival + 1) {
                this.to_die.push(cell);
                this.overcrowded.push(cell);
            }
        }
    }
    cell_birth(x, y) {
        var counter = 0;
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                var coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
                var coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
                if (this.coords[coord_x] && this.coords[coord_x][coord_y] != null) {
                    counter++;
                }
            }
        }
        if (counter == this.birth) {
            for (let cell of this.to_birth) {
                if (cell.getX() == x && cell.getY() == y) {
                    return;
                }
            }
            this.to_birth.push(new _Cell2D__WEBPACK_IMPORTED_MODULE_0__["Cell2D"](x, y, this.cell_color));
        }
    }
    cellColor(color) {
        this.cell_color = color;
        for (let c of this.active) {
            c.setColor(color);
        }
    }
    predictionMode() {
        this.prediction_mode = !this.prediction_mode;
        if (this.prediction_mode) {
            this.predict();
        }
        else {
            for (let d of this.to_die) {
                this.active[this.active.indexOf(d)].setColor(this.cell_color);
            }
            if (this.predicted_count > 0) {
                this.active.splice(this.active.length - this.predicted_count);
            }
            this.predicted_count = 0;
        }
    }
    maxCells(count) {
        this.max_cells = count;
    }
    predict() {
        this.overcrowded = [];
        this.lonely = [];
        this.to_die = [];
        this.to_birth = [];
        for (let a of this.active) {
            this.check_neighbors(a.getX(), a.getY());
        }
        for (let l of this.lonely) {
            this.active[this.active.indexOf(l)].setColor(new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xd81b60)); //pink
        }
        for (let o of this.overcrowded) {
            this.active[this.active.indexOf(o)].setColor(new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x1e88e5)); //blue
        }
        this.predicted_count = this.to_birth.length;
        for (let b of this.to_birth) {
            b.setColor(new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x004d40)); //green
            this.active.push(b);
        }
    }
}


/***/ }),

/***/ "QdnO":
/*!************************************!*\
  !*** ./src/app/Life2DContainer.ts ***!
  \************************************/
/*! exports provided: Life2DContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Life2DContainer", function() { return Life2DContainer; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_controls_TrackballControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/TrackballControls */ "kgy+");
/* harmony import */ var _Renderer2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer2D */ "BVyS");
/* harmony import */ var _Grid2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid2D */ "MBfI");
/* harmony import */ var _Cell2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cell2D */ "D/Q5");






class Life2DContainer {
    constructor(parent) {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
        this.delta = 0;
        this.interval = 0.3;
        this.running = false;
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();
        this.mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
        this.raycast_plane = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](100, 100), new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0xffff00 }));
        this.mouse_down = false;
        this.repeating = [];
        this.repeating_counter = 1;
        this.nr_to_die = 0;
        this.nr_to_birth = 0;
        this.legend = false;
        this.bg_color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('rgb(0,0,0)');
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('rgb(255,193,7)');
        this.prediction_mode = false;
        this.grid = new _Grid2D__WEBPACK_IMPORTED_MODULE_3__["Grid2D"]();
        this.min_survival = this.grid.getMinSurvival();
        this.max_survival = this.grid.getMaxSurvival();
        this.birth = this.grid.getBirth();
        this.hide_grid = false;
        this.animate = () => {
            requestAnimationFrame(this.animate);
            this.raycaster.setFromCamera(this.mouse, this.renderer.getCamera());
            if (this.running) {
                this.delta += this.clock.getDelta();
                if (this.delta > this.interval) {
                    this.grid.advance();
                    if (this.repeating.length != 0 && this.repeating_counter++ == 30) {
                        for (let r of this.repeating)
                            this.generate_cell(r[0], r[1]);
                        this.repeating_counter = 1;
                    }
                    this.nr_to_die = this.grid.getToDie().length;
                    this.nr_to_birth = this.grid.getToBirth().length;
                    this.scene_reload();
                    this.delta = this.delta % this.interval;
                }
            }
            this.renderer.render(this.scene);
        };
        window.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
        const width = document.getElementById(parent).offsetWidth;
        const height = document.getElementById(parent).offsetHeight;
        this.renderer = new _Renderer2D__WEBPACK_IMPORTED_MODULE_2__["Renderer2D"](width, height);
        document.getElementById(parent).appendChild(this.renderer.getRenderer());
        let that = this;
        window.addEventListener('resize', function () {
            that.renderer.setSize(document.getElementById(parent).offsetWidth, document.getElementById(parent).offsetHeight);
        }, false);
        // this.renderer.getRenderer().addEventListener('wheel', function(){
        //   that.showGrid();
        // }, false);
        this.renderer.getRenderer().addEventListener('mousemove', function (e) {
            const rect = that.renderer.getRenderer().getBoundingClientRect();
            that.mouse.x = ((e.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
            that.mouse.y = -((e.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;
            let set_pred = false;
            if (that.prediction_mode) {
                set_pred = true;
                that.predictionMode();
            }
            if (that.mouse_down) {
                if (e.which == 1) {
                    that.check_addition();
                }
                else if (e.which == 3) {
                    that.check_deletion();
                }
            }
            if (set_pred && !that.prediction_mode)
                that.predictionMode();
        }, false);
        this.renderer.getRenderer().addEventListener('mouseup', function (e) {
            that.mouse_down = false;
        }, false);
        this.raycast_plane.material.colorWrite = false;
        this.renderer.getRenderer().addEventListener('mousedown', function (e) {
            that.mouse_down = true;
            let set_pred = false;
            if (that.prediction_mode) {
                set_pred = true;
                that.predictionMode();
            }
            if (e.button == 0) { //perform left click action -> add
                that.check_addition();
            }
            else if (e.button == 2) { //perform right click action -> delete
                that.check_deletion();
            }
            if (set_pred && !that.prediction_mode)
                that.predictionMode();
        }, false);
        this.helperGrid = new three__WEBPACK_IMPORTED_MODULE_0__["GridHelper"](100, 1000, new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0x888888));
        // this.helperGrid = new THREE.GridHelper(100, 1000);
        this.helperGrid.position.z = 0.001;
        this.helperGrid.rotateOnAxis(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 0, 0), 90 * Math.PI / 180);
        this.scene.add(this.helperGrid);
        this.scene.add(this.raycast_plane);
        this.scene.background = this.bg_color;
        //Not sure why this needs to be here for the manual camera movement to work???????
        this.trackball = new three_examples_jsm_controls_TrackballControls__WEBPACK_IMPORTED_MODULE_1__["TrackballControls"](this.renderer.getCamera(), this.renderer.getRenderer());
        this.animate();
    }
    // private showGrid() {
    //   this.renderer.shouldHideGrid() ? this.helperGrid.visible = false : this.helperGrid.visible = true;
    // }
    check_deletion() {
        if (this.scene.children.length > 2) { //if raycast detects more that 2 objects(grid and plane) that means a cell is in place and can be deleted
            this.scene.children.splice(0, 2);
            const cell_check = this.raycaster.intersectObjects(this.scene.children);
            if (cell_check.length != 0) {
                let x = cell_check[0].point.x < 0 ? Math.trunc(cell_check[0].point.x * 10) - 1 : Math.trunc(cell_check[0].point.x * 10) + 1;
                let y = cell_check[0].point.y < 0 ? Math.trunc(cell_check[0].point.y * 10) - 1 : Math.trunc(cell_check[0].point.y * 10) + 1;
                this.grid.remove_from_grid(x, y);
            }
            this.scene_reload();
        }
    }
    check_addition() {
        if (this.scene.children.length > 2) { //if scene contains more that 2 objects(grid and plane) that means a cell is in place and can be deleted
            this.scene.children.splice(0, 2);
            const cell_check = this.raycaster.intersectObjects(this.scene.children);
            if (cell_check.length != 0) {
                this.scene_reload();
                return;
            }
        }
        const intersects = this.raycaster.intersectObject(this.raycast_plane);
        if (intersects.length != 0) {
            let x = intersects[0].point.x < 0 ? Math.trunc(intersects[0].point.x * 10) - 1 : Math.trunc(intersects[0].point.x * 10) + 1;
            let y = intersects[0].point.y < 0 ? Math.trunc(intersects[0].point.y * 10) - 1 : Math.trunc(intersects[0].point.y * 10) + 1;
            this.generate_cell(x, y);
            this.scene_reload();
        }
    }
    generate_cell(x, y, auto = false, regenerate = true) {
        const cell = new _Cell2D__WEBPACK_IMPORTED_MODULE_4__["Cell2D"](x, y, this.cell_color);
        this.grid.add_to_grid(cell, auto);
        if (regenerate)
            this.scene_reload();
    }
    scene_reload() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        if (!this.hide_grid)
            this.scene.add(this.helperGrid);
        this.scene.add(this.raycast_plane);
        this.scene.background = this.bg_color;
        const cells = this.grid.get_cells();
        for (let c of cells) {
            this.scene.add(c.getCell());
        }
    }
    change_speed(e) {
        this.interval = e.value / 10;
    }
    hideGrid() {
        this.hide_grid = !this.hide_grid;
        this.scene_reload();
    }
    getLiveCount() {
        return this.grid.get_cells().length;
    }
    advance() {
        if (!this.running) {
            this.grid.advance();
            if (this.repeating.length != 0 && this.repeating_counter++ == 30) {
                for (let r of this.repeating)
                    this.generate_cell(r[0], r[1]);
                this.repeating_counter = 1;
            }
            this.scene_reload();
        }
        this.nr_to_die = this.grid.getToDie().length;
        this.nr_to_birth = this.grid.getToBirth().length;
    }
    play() {
        this.running = !this.running;
    }
    clear() {
        this.grid.clear_grid();
        this.scene_reload();
        this.repeating = [];
        this.repeating_counter = 1;
    }
    restore() {
        this.grid.restore_grid();
        this.scene_reload();
    }
    revert() {
        this.grid.revert_grid();
        this.scene_reload();
    }
    setRevert(e) {
        this.grid.setRevert(e.target.value);
    }
    getRevert() {
        return this.grid.getRevert();
    }
    setRepeating(cells) {
        this.repeating = cells;
        this.repeating_counter = 1;
    }
    setMinSurvival(e) {
        if (this.prediction_mode) {
            this.predictionMode();
            document.getElementById('prediction_mode').checked = false;
        }
        this.min_survival = parseInt(e.target.value);
        this.grid.setMinSurvival(this.min_survival);
    }
    setMaxSurvival(e) {
        if (this.prediction_mode) {
            this.predictionMode();
            document.getElementById('prediction_mode').checked = false;
        }
        this.max_survival = parseInt(e.target.value);
        this.grid.setMaxSurvival(this.max_survival);
    }
    setBirth(e) {
        if (this.prediction_mode) {
            this.predictionMode();
            // console.log((document.getElementById('prediction_mode').childNodes[0] as HTMLInputElement));
        }
        this.birth = parseInt(e.target.value);
        this.grid.setBirth(this.birth);
    }
    setSpeed(s) {
        this.interval = s;
    }
    toggleLegend() {
        this.legend = !this.legend;
    }
    getLegend() {
        return this.legend;
    }
    getRunning() {
        return this.running;
    }
    sceneColor() {
        let r = document.getElementById('bg_r').innerText;
        let g = document.getElementById('bg_g').innerText;
        let b = document.getElementById('bg_b').innerText;
        this.bg_color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('rgb(' + r + ',' + g + ',' + b + ')');
        this.scene_reload();
    }
    cellColor() {
        let r = document.getElementById('c_r').innerText;
        let g = document.getElementById('c_g').innerText;
        let b = document.getElementById('c_b').innerText;
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('rgb(' + r + ',' + g + ',' + b + ')');
        this.grid.cellColor(this.cell_color);
        this.scene_reload();
    }
    predictionMode() {
        this.bg_color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0x000000);
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0xffc107);
        this.grid.cellColor(this.cell_color);
        this.prediction_mode = !this.prediction_mode;
        this.grid.predictionMode();
        this.scene_reload();
    }
    devMode() {
        this.renderer.devMode();
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class AppComponent {
    constructor() {
        this.title = 'tour-of-life';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 0, consts: [[1, "container"], ["id", "navigation_container"], ["id", "navigation_drawer", "mode", "over", 1, "sidenav_drawer"], ["drawer", ""], ["id", "sidebar_navigation", 1, "sidebar"], ["type", "button", "mat-button", "", "href", "/life2d"], ["type", "button", "mat-button", "", "routerLink", "/touroflife"], ["type", "button", "mat-button", "", "href", "/life3d"], ["id", "sidenav_button", 2, "position", "absolute", "z-index", "1000"], ["id", "expand_sidenav"], ["type", "button", "mat-icon-button", "", 1, "selection_button", 2, "width", "1em", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2D Game of Life simulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tour of Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3D Game of Life simulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#navigation_container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: absolute;\r\n  height: 100%;\r\n  background-color: transparent;\r\n}\r\n\r\n#sidenav_button[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-around;\r\n  align-items: flex-start;\r\n  align-content: flex-start;\r\n}\r\n\r\n#expand_sidenav[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  width: 1.5em;\r\n  border-radius: 0 10px 10px 0;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#sidebar_navigation[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n}\r\n\r\n.sidenav_drawer[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmlnYXRpb25fY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc2lkZW5hdl9idXR0b257XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuI2V4cGFuZF9zaWRlbmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG59XHJcblxyXG4uc2lkZWJhcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jc2lkZWJhcl9uYXZpZ2F0aW9ue1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXZfZHJhd2VyIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VhEx":
/*!****************************************!*\
  !*** ./src/assets/lesson_lexicon.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"header\":\"GoL:Basics 01\",\"chapter\":\"Game of Life: Basics 00, Rules of Life\",\"hint\":\"Experienced users may add/remove cells as they please, but if this is your first time, it is advised to stick to the instructions\",\"lessons\":[{\"lesson\":true,\"title\":\"Cell birth\",\"reference\":\"https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Rules\",\"description\":\"Just like the actual life starts at birth, so let us first examine the 3rd rule of Life, that being the birth of a cell. As you have found out in the last segment, for a new cell to be born, it needs to have at least 3 living neighbors in its 3x3 grid vicinity. This example shows you, how the next epoch of the algorithm will give birth to the bottom left corner cell. No other cells are born, because they only have a maximum of 2 living neighbors. Don't forget to use the prediction mode feature, to always stay one step ahead of the algorithm.\",\"cell_layout\":[[-1,1],[1,1],[1,-1]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.3,\"placeable\":0},{\"lesson\":true,\"title\":\"Cell survival\",\"reference\":\"https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Rules\",\"description\":\"As you probably already know, for a living cell to survive, there need to be no less than 2 and no more than 3 other living cells in it's neighborhood. Let's take a look at the small square from the previous lesson. Every living cell has exactly 3 other living neighbors, which means, all the cells will survive, and no new ones will be born. Without interception, this shape will stay constant forever. We have found a so-called still life pattern. This one is appropriately called the block.\",\"cell_layout\":[[-1,1],[1,1],[-1,-1],[1,-1]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.3,\"placeable\":0}]},{\"header\":\"GoL:Basics 02\",\"chapter\":\"Game of Life: Basics 02, Rules of Life con.\",\"hint\":\"Zooming is disabled for the early lessons, but you can move the viewport around freely using the middle mouse button\",\"lessons\":[{\"lesson\":true,\"title\":\"Cell death: underpopulation\",\"reference\":\"https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Rules\",\"description\":\"As this one single cell has no other cells around it, it is bound to die in the next epoch. This is the simplest example of a cell dying from underpopulation. As we have established, a cell needs at least 2 living neighbors to survive. This means, that even by adding another cell, anywhere in the grid, the next epoch would look the same. Go ahead. Try adding one single cell anywhere in the grid, and check out the prediction for the next step.\",\"cell_layout\":[[-1,1]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.3,\"placeable\":0},{\"lesson\":true,\"title\":\"Cell death: overpopulation\",\"reference\":\"https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Rules\",\"description\":\"It is a little more tricky to easily display a death from overpopulation. The game screen shows a pair of the familiar block patterns, fused into each other. As the prediction shows, a plus sign will get cut out of it by the next epoch, due to the number of neighbors of the cells forming the plus sign exceeding the maximum of 3. We can also observe 2 cells being born, as the dead corners both have 3 living neighbors. The result consists of 4 individual cells, which will die off in the next step, due to the rules explained in the previous lesson.\",\"cell_layout\":[[-1,1],[1,1],[-1,-1],[1,-1],[2,-1],[2,-2],[1,-2]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.3,\"placeable\":0}]},{\"header\":\"GoL:Basics 03\",\"chapter\":\"Game of Life: Basics 03, Explored patterns\",\"lessons\":[{\"lesson\":true,\"title\":\"Still lifes\",\"reference\":\"https://www.conwaylife.com/wiki/Still_life\",\"description\":\"If you were to toggle the prediction mode, this shape would not produce any changes in the viewport. That's because it is a static shape, that will stay like this forever. We have already seen one shape like this in the previous lessons, the block. Both the block, and this so-called beehive are still lifes. This is their final stage in life and they do not change if not disturbed. See if you can find another still life pattern yourself, right here in the lesson grid.\",\"cell_layout\":[[-1,1],[1,1],[-2,-1],[2,-1],[-1,-2],[1,-2]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.3,\"placeable\":0},{\"lesson\":true,\"title\":\"Oscillators\",\"reference\":\"https://www.conwaylife.com/wiki/Oscillator\",\"description\":\"An oscillator is, to put it simply, a repeating pattern. You start with an initial configuration, the pattern changes accordingly, yet it always returns to it's initial state, and the cycle repeats. Oscillators are further categorized by their periods. A period specifies the number of epochs the pattern needs, to start repeating itself. The shape you see above is a so-called Blinker, and it is a period-2 oscillator. (It repeats every 2 epochs)\",\"cell_layout\":[[1,-1],[-1,-1],[-2,-1]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.3,\"placeable\":0}]},{\"header\":\"GoL:Basics 04\",\"chapter\":\"Game of Life: Basics 04, Explored patterns con.\",\"hint\":\"Zoom functionality is unlocked for this chapter, so you can better follow the developments of the patterns. Resetting the board also resets the View\",\"lessons\":[{\"lesson\":true,\"title\":\"Oscillators con.\",\"reference\":\"https://www.conwaylife.com/wiki/Pulsar\",\"description\":\"This well-known period-3 oscillator is called the pulsar. It gives birth to some interesting patterns, which on first glance don't look very stable. Stability in a cellular automaton like Life means, that the existing patterns will no longer change or grow, and the configuration remains constant unless influenced. An oscillator is paradoxically also considered a stable shape, as it only repeats and does not evolve by itself.\",\"cell_layout\":[[2,2],[2,3],[2,4],[3,1],[4,1],[5,1],[3,-2],[4,-2],[5,-2],[2,-3],[2,-4],[2,-5],[-1,-3],[-1,-4],[-1,-5],[-2,-2],[-3,-2],[-4,-2],[-2,1],[-3,1],[-4,1],[-1,2],[-1,3],[-1,4],[-6,2],[-6,3],[-6,4],[7,2],[7,3],[7,4],[7,-3],[7,-4],[7,-5],[-6,-3],[-6,-4],[-6,-5],[3,-7],[4,-7],[5,-7],[-2,-7],[-3,-7],[-4,-7],[-2,6],[-3,6],[-4,6],[3,6],[4,6],[5,6]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":1,\"max_zoom\":3,\"speed\":0.3,\"placeable\":0},{\"lesson\":true,\"title\":\"Spaceships\",\"reference\":\"https://www.conwaylife.com/wiki/Spaceship\",\"description\":\"Spaceships are interesting patterns that actually get displaced in space with each epoch. They are basically oscillators, that do not stay in one place, but instead also move around. The smallest known spaceship is this one, called the glider. During it's life, the glider travels 1 block diagonally, every 4 epochs. Other spaceships exist, which can travel orthogonally, and the so-called oblique spaceships travel neither orthogonally, nor diagonally. The glider will become very important in future lessons.\",\"cell_layout\":[[-1,-1],[1,-1],[1,1],[1,2],[-2,1]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":1.5,\"speed\":0.3,\"placeable\":0}]},{\"header\":\"GoL:Exercise 01\",\"chapter\":\"Game of Life: Exercise 01, Explored patterns\",\"hint\":\"The zoom being locked during an exercise could be a hint regarding the size of the solution.\",\"lessons\":[{\"lesson\":false,\"title\":\"Complete the oscillator\",\"reference\":\"https://www.conwaylife.com/wiki/Beacon\",\"description\":\"In this first proper exercise, you can place 2 cells anywhere in the grid. With those 2 cells, you should be able to create an oscillator from the initial configuration. Coincidentally, by adding 2 cells, there is a way to create two different oscillators, one of which you should already be familiar with. The pattern I would actually like you to create is called the beacon, and it is a phase-2 oscillator. By now, you should know what that means, and it should be enough of a hint for you to complete this task.\",\"cell_layout\":[[2,-2],[1,-2],[-1,2],[-2,2]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":0.5,\"speed\":0.2,\"placeable\":2},{\"lesson\":false,\"title\":\"Draw a glider\",\"reference\":\"https://www.conwaylife.com/wiki/Glider\",\"description\":\"Since the glider spaceship will be so important throughout this course, I would like to ask you to draw one from memory now. It can either be the same one as in the chapter just before this one, or, if you're feeling confident, you could try to draw one facing in another direction. The default one travels diagonally to the bottom right. Can you draw the other 3? Remember, a glider consists of an L shape and an additional stray cell. \",\"cell_layout\":[],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":1.5,\"speed\":0.2,\"placeable\":5}]},{\"header\":\"GoL:Basics 05\",\"chapter\":\"Game of Life: Basics 05, Oscillators aplenty\",\"hint\":\"There is a lot to be found out about all the different patterns. Be sure to use the info button if you are curious about any of them.\",\"lessons\":[{\"lesson\":true,\"title\":\"Worker bee\",\"reference\":\"https://www.conwaylife.com/wiki/Worker_bee\",\"description\":\"Over 560 different oscillators have been documented as of the writing of this lesson, yet once you have grasped the concept behind one, it isn't really necessary, nor very productive to go over more than a few. The pattern you see above is called the worker bee. It's a period 9 oscillator, as you can check for yourself by running the simulation. It was picked for this list, because around it's edges, it contains 4 instances of a pattern we will discuss in depth later, and also because it is visually interesting.\",\"cell_layout\":[[1,1],[-1,1],[2,1],[-2,1],[-2,-1],[-1,-1],[1,-1],[2,-1],[2,-2],[1,-2],[-1,-2],[-2,-2],[5,-3],[5,-4],[6,-3],[7,-4],[7,-5],[7,-6],[8,-6],[5,2],[5,3],[6,2],[7,3],[7,4],[7,5],[8,5],[-5,2],[-6,2],[-5,3],[-7,3],[-7,4],[-7,5],[-8,5],[-5,-3],[-5,-4],[-6,-3],[-7,-4],[-7,-5],[-7,-6],[-8,-6]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":1,\"max_zoom\":3,\"speed\":0.2,\"placeable\":0},{\"lesson\":true,\"title\":\"Figure eight\",\"reference\":\"https://www.conwaylife.com/wiki/Figure_eight\",\"description\":\"The figure eight is a period 8 oscillator, and with only 12 cells in it's initial configuration is the smallest known oscillator of it's kind. It got it's name from the number it initially resembles, but it's also called the big beacon. You will probably know it's smaller sibling from the first exercise, where you were asked to complete it. So far, you have only experienced fairly short-period oscillators. That is to make the concept more understandable and easier to follow. In reality, there's oscillators documented for over 1000 periods, and for all periods of 43 and above, an oscillator can be constructed.\",\"cell_layout\":[[1,-1],[1,-2],[1,-3],[2,-3],[2,-2],[2,-1],[3,-1],[3,-2],[3,-3],[-1,1],[-2,1],[-3,1],[-3,2],[-2,2],[-1,2],[-1,3],[-2,3],[-3,3]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":1,\"max_zoom\":3,\"speed\":0.2,\"placeable\":0}]},{\"header\":\"GoL:Advanced 01\",\"chapter\":\"Game of Life: Advanced 01, Complex patterns\",\"lessons\":[{\"lesson\":true,\"title\":\"Stable pattern\",\"reference\":\"https://www.conwaylife.com/wiki/Still_life\",\"description\":\"Technically, a stable pattern is another word for a still life. A cluster of cells, that does not change from one epoch to another. Yet more generally, stable pattern is also the name for a configuration of cells, that will not further evolve on their own. These can be the aforementioned still lifes, but also oscillators. As long as a state is reached, that can be completely predicted, and that does not evolve, but at most oscillates, it's called a stable pattern. Run the simulation, and watch the plus sign evolve into a set of oscillators, which are for all intents and purposes considered stable.\",\"cell_layout\":[[1,1],[1,-1],[1,-2],[-1,-1],[2,-1]],\"repeated\":[],\"min_zoom\":0.75,\"def_zoom\":0.75,\"max_zoom\":2,\"speed\":0.2,\"placeable\":0},{\"lesson\":true,\"title\":\"Spark\",\"reference\":\"https://www.conwaylife.com/wiki/Spark\",\"description\":\"To put it quite simply, a spark is a pattern that dies. They can be as small as 1 cell and die in the very next epoch, but they can also live for hundreds of periods. As long as the pattern eventually ceases to exist, it can be considered a spark. The spark you see above is called the table, for obvious reasons, and it burns out after 15 periods. Typically, spark is a name for any pattern that gets automatically produced by a spaceship or an oscillator. You will experience patterns that produce other patterns later in this section of the tour.\",\"cell_layout\":[[1,1],[-1,1],[-2,1],[2,1],[2,-1],[-2,-1]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":0.5,\"max_zoom\":2,\"speed\":0.1,\"placeable\":0}]},{\"header\":\"GoL:Advanced 02\",\"chapter\":\"Game of Life: Advanced 02, Eaters\",\"lessons\":[{\"lesson\":true,\"title\":\"Eater 1\",\"reference\":\"https://www.conwaylife.com/wiki/Eater_1\",\"description\":\"Before we cover pattern-producing patterns, there is one more kind of shape that will become very important in the later lessons. It is called the eater, and it's sole purpose is to consistently destroy other patterns. This one in particular is called eater 1, and it can destroy a glider coming at it diagonally from the top left (Depending on the direction you built it). It does this, without getting destroyed itself, which means, you can periodically send gliders it's way, and they will get eaten, instead of propagating into infinity. \",\"cell_layout\":[[-2,2],[-9,7],[-8,6],[-7,6],[-7,7],[-7,8],[-2,1],[-1,2],[1,1],[1,-1],[1,-2],[2,-2]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":1,\"max_zoom\":3,\"speed\":0.2,\"placeable\":0},{\"lesson\":true,\"title\":\"Eater 2\",\"reference\":\"https://www.conwaylife.com/wiki/Eater_2\",\"description\":\"The eater 1 is good for getting rid of gliders coming from one specific direction. The eater 2 however, manages to consume gliders coming from 4 different parallel diagonals, ones that would destroy its simpler cousin. This is demonstrated above. Every one of the four gliders moves on a different diagonal, and they all get consumed by the same top right corner of the eater 2. The only downside compared to the first eater, is that it takes longer to recover from each glider it destroys.\",\"cell_layout\":[[2,2],[2,3],[3,3],[3,2],[3,-1],[2,-1],[2,-2],[2,-3],[1,-4],[-1,-3],[-1,-2],[-1,-1],[-2,-1],[-3,-1],[-4,1],[-3,2],[-2,2],[-1,2],[-1,3],[7,6],[8,6],[9,6],[7,7],[8,8],[12,12],[13,12],[14,12],[12,13],[13,14],[17,18],[18,18],[19,18],[17,19],[18,20],[22,24],[23,24],[24,24],[22,25],[23,26]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":1.5,\"max_zoom\":3.5,\"speed\":0.2,\"placeable\":0}]},{\"header\":\"GoL:Advanced 03\",\"chapter\":\"Game of Life: Advanced 03, Wick and Fuse\",\"lessons\":[{\"lesson\":true,\"title\":\"Wick\",\"reference\":\"https://www.conwaylife.com/wiki/Wick\",\"description\":\"Having a slightly confusing name, the wick is a name for any pattern that repeats linearly. Wicks are a parent category to the fuse, which will be discussed next, in that they CAN be made to burn at one end. They also can be comprised of multiple stable patterns, or even oscillators. Wicks can be infinitely long, by being closed in a loop. The wick shown here is simply called ants. It's a period 5 wick, and it's an umbrella term for any set of patterns, moving orthogonally by one cell every epoch.\",\"cell_layout\":[[1,1],[2,1],[2,-1],[1,-1],[-1,2],[-2,2],[-1,-2],[-2,-2],[-4,1],[-4,-1],[-5,-1],[-5,1],[-6,2],[-7,2],[-6,-2],[-7,-2],[-9,1],[-9,-1],[-10,-1],[-10,1],[-11,2],[-12,2],[-11,-2],[-12,-2],[-14,1],[-14,-1],[-15,-1],[-15,1],[-16,2],[-17,2],[-16,-2],[-17,-2],[-19,1],[-19,-1],[-20,-1],[-20,1],[-21,2],[-21,-2],[-22,-2],[-22,2],[4,2],[5,2],[4,-2],[5,-2],[6,1],[6,-1],[7,-1],[7,1],[9,-2],[10,-2],[9,2],[10,2],[11,1],[11,-1],[12,-1],[12,1],[14,-2],[15,-2],[14,2],[15,2],[16,1],[16,-1],[17,-1],[17,1],[19,-2],[20,-2],[19,2],[20,2],[21,1],[21,-1],[22,-1],[22,1]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":2.5,\"max_zoom\":4,\"speed\":0.1,\"placeable\":0},{\"lesson\":true,\"title\":\"Fuse\",\"reference\":\"https://www.conwaylife.com/wiki/Fuse\",\"description\":\"A fuse, like the one you see above, is just a wick, that 'burns' at one end. It generally consists of multiple separate patterns, that interact in documented ways. Using these predictable interactions, you can create a chain reaction that starts at one trigger point, and propagates to the last link in the chain, before it burns out completely, turning into a spark. This one is called the beehive fuse, because the triggering pattern burns through a set of beehives. Wicks or Fuses won't really be too important in future lessons, but they are nonetheless interesting patterns worth examining.\",\"cell_layout\":[[1,1],[2,1],[-1,-1],[1,-2],[2,-2],[3,-1],[4,-9],[4,-10],[5,-8],[6,-9],[6,-10],[5,-11],[13,-12],[14,-12],[12,-13],[13,-14],[14,-14],[15,-13],[-8,2],[-7,3],[-9,3],[-9,4],[-7,4],[-8,5],[-10,12],[-11,13],[-12,13],[-13,12],[-12,11],[-11,11],[-12,16],[-13,16],[-14,16],[-15,17],[-15,18],[-14,18],[-11,17],[-11,18],[-12,18]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":2.5,\"max_zoom\":4,\"speed\":0.05,\"placeable\":0}]},{\"header\":\"GoL:Advanced 04\",\"chapter\":\"Game of Life: Advanced 04, Puffers and debris\",\"hint\":\"For big cell configurations like this, it can be beneficial to use the edit function, so you can examine the pattern in the 2D Life simulator\",\"lessons\":[{\"lesson\":true,\"title\":\"Frothing puffer\",\"reference\":\"https://www.conwaylife.com/wiki/Frothing_puffer\",\"description\":\"By now, you have seen patterns, that can destroy other patterns, without getting deleted themselves. But what about the opposite? Puffers are patterns, that move, just like spaceships, but they also leave behind other patterns as they traverse the simulation plane. These generated patterns are generally referred to as debris. This so-called frothing puffer for example generates 10 blinkers and 2 blocks each period, and it's a period 78 pattern.\",\"cell_layout\":[[-1,3],[-1,4],[-3,3],[-3,4],[2,3],[2,4],[3,5],[-4,5],[-2,6],[-2,7],[1,7],[1,6],[-3,8],[-4,9],[2,8],[3,9],[-5,9],[-6,9],[4,9],[5,9],[5,8],[5,7],[-6,8],[-6,7],[-7,8],[-8,8],[-8,7],[-7,6],[6,8],[7,8],[7,7],[6,6],[-9,6],[-9,5],[-8,4],[8,6],[8,5],[7,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[9,10],[8,10],[9,11],[11,9],[12,8],[12,7],[12,6],[13,8],[11,4],[13,4],[14,4],[15,4],[14,5],[15,5],[15,6],[14,6],[15,3],[16,3],[-11,5],[-11,6],[-11,7],[-11,8],[-11,9],[-11,10],[-9,10],[-10,10],[-10,11],[-12,9],[-14,8],[-13,8],[-13,7],[-13,6],[-12,4],[-14,4],[-15,4],[-16,4],[-16,5],[-16,6],[-15,6],[-15,5],[-16,3],[-17,3],[4,3],[5,3],[4,2],[4,1],[6,1],[7,1],[6,-1],[6,-2],[-6,3],[-5,3],[-5,2],[-5,1],[-8,1],[-7,1],[-7,-1],[-7,-2],[-10,-2],[-9,-2],[-9,-3],[-10,-3],[-10,-4],[-10,-5],[-11,-5],[-11,-6],[-12,-8],[-11,-8],[-8,-4],[-8,-6],[-8,-7],[-7,-7],[-8,-9],[-7,-10],[-6,-8],[-6,-9],[-5,-9],[-5,-10],[-5,-11],[-6,-12],[-4,-12],[-6,-5],[-6,-4],[-4,-4],[-3,-4],[-2,-4],[-2,-5],[-2,-6],[-2,-7],[-2,-8],[1,-8],[1,-7],[1,-6],[1,-5],[1,-4],[2,-4],[3,-4],[-4,-6],[3,-6],[-3,-9],[-3,-10],[-2,-11],[-1,-10],[1,-11],[2,-9],[2,-10],[5,-4],[5,-5],[7,-4],[8,-3],[8,-2],[9,-2],[9,-3],[9,-4],[9,-5],[10,-5],[10,-6],[10,-8],[11,-8],[7,-6],[7,-7],[6,-7],[5,-8],[5,-9],[4,-9],[4,-10],[4,-11],[5,-12],[3,-12],[6,-10],[7,-9]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":2,\"max_zoom\":4,\"speed\":0.1,\"placeable\":0},{\"lesson\":true,\"title\":\"Glider train\",\"reference\":\"https://www.conwaylife.com/wiki/Glider_train\",\"description\":\"The so-called glider train is also an orthogonal puffer, this time with a period of 64. The reason you're looking at another puffer, is because this one, as it travels, spawns not only 2 rows of blocks, but also 2 waves, traveling away from it along the 2 possible diagonals. You see, as was probably expected at this point, it is possible to create patterns, that actually produce gliders. This is a very important feature, especially for future lessons. \",\"cell_layout\":[[1,2],[-1,3],[-1,4],[1,5],[2,5],[2,3],[3,4],[1,-3],[-1,-4],[-1,-5],[1,-6],[2,-6],[3,-5],[2,-4],[10,3],[11,3],[11,2],[10,2],[10,-3],[11,-3],[11,-4],[10,-4],[-6,3],[-7,3],[-7,2],[-6,2],[-6,-4],[-7,-4],[-7,-3],[-6,-3],[-6,8],[-8,7],[-10,8],[-10,10],[-9,11],[-8,11],[-7,11],[-6,11],[-5,11],[-5,10],[-5,9],[-6,-9],[-8,-8],[-10,-9],[-10,-11],[-9,-12],[-8,-12],[-7,-12],[-6,-12],[-5,-12],[-5,-11],[-5,-10],[-4,15],[-3,15],[-3,16],[-2,16],[-2,14],[-4,-16],[-3,-16],[-3,-17],[-2,-17],[-2,-15],[-12,-6],[-13,-6],[-13,-5],[-14,-5],[-14,-7],[-16,-8],[-17,-8],[-17,-9],[-16,-9],[-19,-7],[-20,-7],[-21,-7],[-19,-6],[-20,-6],[-20,-5],[-18,-5],[-17,-4],[-18,-4],[-19,-4],[-20,-4],[-21,-4],[-22,-4],[-22,-5],[-22,-6],[-23,-5],[-21,-3],[-20,-3],[-19,-3],[-18,-3],[-21,2],[-20,2],[-19,2],[-18,2],[-17,3],[-18,3],[-19,3],[-20,3],[-21,3],[-22,3],[-18,4],[-20,4],[-22,4],[-23,4],[-22,5],[-20,5],[-19,5],[-19,6],[-20,6],[-21,6],[-17,7],[-16,7],[-16,8],[-17,8],[-14,6],[-13,5],[-12,5],[-13,4],[-14,4],[-32,3],[-33,4],[-34,4],[-35,3],[-34,2],[-33,2],[-34,-3],[-33,-3],[-35,-4],[-34,-5],[-33,-5],[-32,-4],[16,1],[16,-2],[18,1],[18,-2],[19,2],[19,-3],[17,-4],[18,-4],[18,-5],[17,-5],[18,-6],[18,3],[17,3],[17,4],[18,4],[18,5],[17,6],[18,7],[19,8],[20,7],[17,-7],[18,-8],[19,-9],[20,-8],[19,-11],[18,-11],[16,-12],[16,-14],[17,-15],[18,-15],[19,-15],[20,-15],[21,-15],[22,-15],[22,-14],[22,-13],[21,-12],[20,-6],[21,-5],[22,-4],[23,-4],[22,-6],[23,-7],[24,-6],[25,-5],[25,-4],[25,-3],[25,2],[25,3],[25,4],[24,5],[23,6],[22,5],[21,4],[20,5],[22,3],[23,3],[19,10],[18,10],[16,11],[16,13],[17,14],[18,14],[19,14],[20,14],[21,14],[21,11],[22,12],[22,13],[22,14],[30,2],[31,1],[30,1],[30,3],[31,4],[31,5],[32,4],[32,3],[32,2],[33,3],[31,-2],[30,-2],[30,-3],[30,-4],[31,-5],[31,-6],[32,-5],[32,-4],[32,-3],[33,-4],[31,10],[32,10],[33,10],[30,10],[29,10],[28,10],[27,11],[27,13],[29,14],[30,14],[32,13],[33,12],[33,11],[31,-11],[32,-11],[33,-11],[30,-11],[29,-11],[28,-11],[27,-12],[27,-14],[29,-15],[30,-15],[32,-14],[33,-13],[33,-12]],\"repeated\":[],\"min_zoom\":1.5,\"def_zoom\":4,\"max_zoom\":6,\"speed\":0.05,\"placeable\":0}]},{\"header\":\"GoL: Exercise 02\",\"chapter\":\"Game of Life: Exercise 02, Light the fuse\",\"lessons\":[{\"lesson\":false,\"title\":\"Complete the fuse\",\"reference\":\"https://conwaylife.com/ref/lexicon/lex_f.htm\",\"description\":\"Your task here is to use the 4 cells you have been given, to complete a glider somewhere on the grid. Think about how many cells a glider consists of. That should give you an idea of where to start drawing, using the already existing 'environment'. As to the direction of the glider, that is for you to find out. Though thinking logically, you don't have many options to choose from. You will know that you have found the correct configuration, when at the end of the simulation, all the blocks will be gone.\",\"cell_layout\":[[1,-14],[-1,-14],[-1,-15],[1,-15],[5,-13],[6,-13],[6,-12],[5,-12],[5,-7],[4,-7],[4,-6],[5,-6],[-2,-7],[-2,-6],[-3,-6],[-3,-7],[11,-13],[12,-13],[12,-14],[11,-14],[15,-14],[15,-15],[16,-15],[16,-14],[19,-18],[19,-19],[20,-19],[20,-18],[24,-14],[24,-15],[25,-15],[25,-14],[29,-13],[30,-13],[30,-12],[29,-12],[29,-7],[28,-7],[28,-6],[29,-6],[23,-7],[22,-7],[22,-6],[23,-6],[-5,-19],[-5,-18],[-6,-18],[-6,-19],[-9,-15],[-10,-15],[-10,-14],[-9,-14],[-13,-14],[-13,-13],[-14,-13],[-14,-14],[-19,-13],[-20,-13],[-20,-12],[-19,-12],[-20,-7],[-21,-7],[-21,-6],[-20,-6],[-26,-6],[-27,-6],[-27,-7],[-26,-7],[-8,5],[-9,5],[-9,6],[-8,6],[-14,5],[-15,6],[-14,6],[-15,5],[-8,11],[-7,11],[-7,12],[-8,12],[-2,12],[-1,12],[-1,13],[-2,13],[3,13],[4,13],[4,14],[3,14],[7,17],[8,17],[8,18],[7,18],[12,13],[12,14],[13,14],[13,13],[17,12],[17,11],[18,11],[18,12],[23,12],[24,12],[24,13],[23,13],[27,13],[28,14],[28,13],[27,14],[17,6],[16,6],[16,5],[17,5],[11,6],[10,6],[10,5],[11,5],[-12,13],[-13,13],[-13,14],[-12,14],[-17,18],[-17,17],[-18,17],[-18,18],[-21,14],[-21,13],[-22,13],[-22,14],[-25,13],[-25,12],[-26,12],[-26,13],[-27,-13]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":2.5,\"max_zoom\":4.5,\"speed\":0.05,\"placeable\":4},{\"lesson\":false,\"title\":\"Stop the gliders\",\"reference\":\"https://www.conwaylife.com/wiki/Eater_1\",\"description\":\"A series of gliders is hurling towards the middle of the screen, and it is your job to stop them. Use the cell already provided to you in the center of the grid to complete an eater. Think about the kind of eater you can produce with the amount of cells given to you. You will need to mind the orientation of the eater also, since if it should point the wrong way, it will just get destroyed along with the first glider, and the others would move on unaffected. And we don't want that!\",\"cell_layout\":[[-13,12],[-14,12],[-15,13],[-13,13],[-13,14],[-2,2],[-18,17],[-19,17],[-18,18],[-18,19],[-20,18],[-23,22],[-24,22],[-23,23],[-25,23],[-23,24],[-28,27],[-29,27],[-28,28],[-28,29],[-30,28]],\"repeated\":[],\"min_zoom\":0.5,\"def_zoom\":2,\"max_zoom\":3,\"speed\":0.1,\"placeable\":6}]},{\"header\":\"GoL:Advanced 05\",\"chapter\":\"Game of Life: Advanced 05, Complex patterns con.\",\"lessons\":[{\"lesson\":true,\"title\":\"Agars\",\"reference\":\"https://www.conwaylife.com/wiki/Agar\",\"description\":\"Another interesting pattern, that is however not important for our future endeavors, is the agar. It's main characteristic is that it periodically tiles the whole grid of Life. It does this in both space, and time, meaning it's a stable pattern and does not get destroyed over time. The concept is probably easier to imagine with a visual example, like the one you see above. This agar is called onion rings, since it consists of nested squares which together resemble the layers of an onion. (note: the example grid is NOT tiled infinitely, so it will actually get destroyed once the simulation is run)\",\"cell_layout\":[[1,1],[-1,-1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[2,1],[3,1],[4,1],[5,1],[6,1],[6,2],[6,3],[6,4],[6,5],[3,4],[3,3],[4,3],[4,4],[-1,-2],[-1,-3],[-1,-4],[-1,-5],[-1,-6],[-2,-6],[-3,-6],[-4,-6],[-5,-6],[-6,-6],[-6,-5],[-6,-4],[-6,-3],[-6,-2],[-6,-1],[-5,-1],[-4,-1],[-3,-1],[-2,-1],[-4,-3],[-4,-4],[-3,-4],[-3,-3],[2,-2],[2,-3],[2,-4],[2,-5],[3,-5],[4,-5],[5,-5],[5,-4],[5,-3],[5,-2],[4,-2],[3,-2],[-5,5],[-5,4],[-5,3],[-5,2],[-4,2],[-3,2],[-2,2],[-2,3],[-2,4],[-2,5],[-3,5],[-4,5],[1,-7],[1,-8],[1,-9],[1,-10],[1,-11],[1,-12],[2,-12],[3,-12],[4,-12],[5,-12],[6,-12],[6,-11],[6,-10],[6,-9],[6,-8],[6,-7],[5,-7],[4,-7],[3,-7],[2,-7],[-1,7],[-2,7],[-3,7],[-4,7],[-5,7],[-6,7],[-6,8],[-6,9],[-6,10],[-6,11],[-1,8],[-1,9],[-1,10],[-1,11],[-1,12],[-2,12],[-3,12],[-4,12],[-5,12],[-6,12],[-4,10],[-4,9],[-3,9],[-3,10],[3,-9],[3,-10],[4,-10],[4,-9],[-1,-13],[-2,-13],[-3,-13],[-4,-13],[-5,-13],[-6,-13],[-1,-14],[-1,-15],[-1,-16],[-1,-17],[-1,-18],[-2,-18],[-3,-18],[-4,-18],[-5,-18],[-6,-18],[-6,-17],[-6,-16],[-6,-15],[-6,-14],[-4,-15],[-4,-16],[-3,-16],[-3,-15],[-5,-8],[-5,-9],[-5,-10],[-5,-11],[-4,-11],[-3,-11],[-2,-11],[-2,-10],[-2,-9],[-2,-8],[-3,-8],[-4,-8],[7,-1],[7,-2],[7,-3],[7,-4],[7,-5],[7,-6],[8,-6],[9,-6],[10,-6],[11,-6],[12,-6],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[12,-2],[12,-3],[12,-4],[12,-5],[9,-3],[9,-4],[10,-4],[10,-3],[-7,6],[-7,5],[-7,4],[-7,3],[-7,2],[-7,1],[-8,1],[-9,1],[-10,1],[-11,1],[-12,1],[-12,2],[-12,3],[-12,4],[-12,5],[-12,6],[-11,6],[-10,6],[-9,6],[-8,6],[-10,4],[-10,3],[-9,3],[-9,4],[-7,-7],[-8,-7],[-9,-7],[-10,-7],[-11,-7],[-12,-7],[-12,-8],[-12,-9],[-12,-10],[-12,-11],[-12,-12],[-11,-12],[-10,-12],[-9,-12],[-8,-12],[-7,-12],[-7,-11],[-7,-10],[-7,-9],[-7,-8],[-10,-9],[-10,-10],[-9,-10],[-9,-9],[2,11],[2,10],[2,9],[2,8],[3,8],[4,8],[5,8],[5,9],[5,10],[5,11],[4,11],[3,11],[8,5],[8,4],[8,3],[8,2],[9,2],[10,2],[11,2],[11,3],[11,4],[11,5],[10,5],[9,5],[-11,-2],[-11,-3],[-11,-4],[-11,-5],[-10,-5],[-9,-5],[-8,-5],[-8,-4],[-8,-3],[-8,-2],[-9,-2],[-10,-2],[8,-8],[8,-9],[8,-10],[8,-11],[9,-11],[10,-11],[11,-11],[11,-10],[11,-9],[11,-8],[10,-8],[9,-8],[2,-14],[2,-15],[2,-16],[2,-17],[3,-17],[4,-17],[5,-17],[5,-16],[5,-15],[5,-14],[4,-14],[3,-14],[7,-13],[7,-14],[7,-15],[7,-16],[7,-17],[7,-18],[8,-18],[9,-18],[10,-18],[11,-18],[12,-18],[12,-17],[12,-16],[11,-13],[12,-13],[12,-14],[12,-15],[10,-13],[9,-13],[8,-13],[9,-15],[9,-16],[10,-16],[10,-15],[-11,-14],[-11,-15],[-11,-16],[-11,-17],[-10,-17],[-9,-17],[-8,-17],[-8,-16],[-8,-15],[-8,-14],[-9,-14],[-10,-14],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[8,12],[9,12],[10,12],[11,12],[12,12],[12,11],[12,10],[12,9],[12,8],[12,7],[11,7],[10,7],[9,7],[8,7],[-11,11],[-11,10],[-11,9],[-11,8],[-10,8],[-9,8],[-8,8],[-8,9],[-8,10],[-8,11],[-9,11],[-10,11],[9,10],[9,9],[10,9],[10,10],[-13,-1],[-13,-2],[-13,-3],[-13,-4],[-13,-5],[-13,-6],[-14,-6],[-15,-6],[-16,-6],[-17,-6],[-18,-6],[-18,-5],[-18,-4],[-18,-3],[-18,-2],[-18,-1],[-17,-1],[-16,-1],[-15,-1],[-14,-1],[-13,7],[-14,7],[-15,7],[-16,7],[-17,7],[-18,7],[-18,8],[-18,9],[-18,10],[-18,11],[-18,12],[-17,12],[-16,12],[-15,12],[-14,12],[-13,12],[-13,11],[-13,10],[-13,9],[-13,8],[-13,-13],[-14,-13],[-15,-13],[-16,-13],[-17,-13],[-18,-13],[-18,-14],[-18,-15],[-18,-16],[-18,-17],[-18,-18],[-13,-18],[-13,-17],[-13,-16],[-13,-15],[-13,-14],[-14,-18],[-15,-18],[-16,-18],[-17,-18],[-16,-16],[-15,-16],[-15,-15],[-16,-15],[-16,-3],[-16,-4],[-15,-4],[-15,-3],[-16,10],[-16,9],[-15,9],[-15,10],[-17,5],[-17,4],[-17,3],[-17,2],[-16,2],[-15,2],[-14,2],[-14,3],[-14,4],[-14,5],[-15,5],[-16,5],[-17,-8],[-17,-9],[-17,-10],[-17,-11],[-16,-11],[-15,-11],[-14,-11],[-14,-10],[-14,-9],[-14,-8],[-15,-8],[-16,-8],[13,-12],[13,-11],[13,-10],[13,-9],[13,-8],[13,-7],[14,-7],[15,-7],[16,-7],[17,-7],[18,-7],[18,-12],[17,-12],[16,-12],[15,-12],[14,-12],[18,-8],[18,-9],[18,-10],[18,-11],[15,-9],[15,-10],[16,-10],[16,-9],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[18,2],[18,3],[18,6],[18,5],[18,4],[17,6],[16,6],[15,6],[14,6],[13,6],[13,5],[13,4],[13,3],[13,2],[15,4],[15,3],[16,3],[16,4],[14,-2],[14,-3],[14,-4],[14,-5],[15,-5],[16,-5],[17,-5],[17,-4],[17,-3],[17,-2],[16,-2],[15,-2],[14,11],[14,10],[14,9],[14,8],[15,8],[16,8],[17,8],[17,9],[17,10],[17,11],[16,11],[15,11],[14,-14],[14,-15],[14,-16],[14,-17],[15,-17],[16,-17],[17,-17],[17,-16],[17,-15],[17,-14],[16,-14],[15,-14],[-12,13],[-11,13],[-10,13],[-9,13],[-8,13],[-7,13],[-7,14],[-7,15],[-7,16],[-7,17],[-7,18],[-8,18],[-9,18],[-10,18],[-11,18],[-12,18],[-12,17],[-12,16],[-12,15],[-12,14],[-10,16],[-10,15],[-9,15],[-9,16],[-17,17],[-17,16],[-17,15],[-17,14],[-16,14],[-15,14],[-14,14],[-14,15],[-14,16],[-14,17],[-15,17],[-16,17],[-5,17],[-5,16],[-5,15],[-5,14],[-4,14],[-3,14],[-2,14],[-2,15],[-2,16],[-2,17],[-3,17],[-4,17],[1,13],[1,14],[1,15],[1,16],[1,17],[1,18],[2,18],[3,18],[4,18],[5,18],[6,18],[6,17],[6,16],[6,15],[6,14],[6,13],[5,13],[4,13],[3,13],[2,13],[3,16],[3,15],[4,15],[4,16],[8,17],[8,16],[8,15],[8,14],[9,14],[10,14],[11,14],[11,15],[11,16],[11,17],[10,17],[9,17],[13,13],[14,13],[15,13],[16,13],[17,13],[18,13],[18,14],[18,15],[18,17],[18,16],[18,18],[17,18],[16,18],[15,18],[14,18],[13,18],[13,17],[13,16],[13,15],[13,14],[15,16],[15,15],[16,16],[16,15]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":1,\"max_zoom\":3,\"speed\":0.1,\"placeable\":0},{\"lesson\":true,\"title\":\"Conduits\",\"reference\":\"https://www.conwaylife.com/wiki/Conduit\",\"description\":\"Slightly more complex, a conduit is a pattern consisting of still lifes and/or oscillators, that can influence or move a different moving/active pattern like a glider, and just like the eater, retain it's form. An interesting example of this is the depicted beehive stopper. It's able to turn a glider, coming from one direction, into a beehive, which in turn can intercept another glider coming from the second upper diagonal. If you were to imagine a stream of gliders as a signal, this would be a way to intercept parts of it. This idea will soon be explored further.\",\"cell_layout\":[[-2,-1],[-1,-2],[-1,-3],[-2,-4],[-3,-3],[-3,-2],[-8,-2],[-9,-2],[-9,-1],[-8,-1],[-3,-9],[-4,-9],[-3,-10],[-5,-10],[-5,-11],[-4,-11],[-2,-13],[-1,-13],[-2,-14],[-1,-15],[1,-15],[2,-15],[2,-16],[4,-9],[5,-9],[5,-8],[4,-8],[15,-8],[16,-8],[15,-7],[15,-6],[14,-5],[13,-5],[13,-6],[6,6],[7,6],[6,7],[6,8],[8,7],[-19,18],[-20,18],[-19,19],[-19,20],[-21,19],[11,11],[11,12],[11,13],[12,11],[13,12],[48,48],[48,49],[48,50],[49,48],[50,49],[53,53],[53,54],[53,55],[54,53],[55,54]],\"repeated\":[],\"min_zoom\":1.5,\"def_zoom\":2,\"max_zoom\":4,\"speed\":0.05,\"placeable\":0}]},{\"header\":\"GoL:Advanced 06\",\"chapter\":\"Game of Life: Advanced 06, The gun\",\"lessons\":[{\"lesson\":true,\"title\":\"Methuselahs\",\"reference\":\"https://www.conwaylife.com/wiki/Methuselah\",\"description\":\"The methuselah is a fairly easy to understand pattern. When a cluster of cells is categorized as a methuselah, it simply means, that it takes a large number of epochs to finally stabilize, ergo turn into a stable pattern. This is known as it's lifespan. Methuselahs are a prime example of what makes the Game of Life so interesting, since they demonstrate how a very small pattern can grow unimaginably. This methuselah is called herschel, because it looks like the letter h. It starts out with only 7 cells, and takes 128 epochs to finally stabilize, producing a number of other patterns in the process.\",\"cell_layout\":[[1,1],[1,-1],[1,-2],[-1,1],[-2,1],[-2,2],[-2,-1]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":1,\"max_zoom\":4,\"speed\":0.05,\"placeable\":0},{\"lesson\":true,\"title\":\"Guns\",\"reference\":\"https://www.conwaylife.com/wiki/Gun\",\"description\":\"The gun might just be the most important pattern of this whole section. You have already seen how certain patterns like the puffer can create other patterns as they propagate, even gliders. A gun is a pattern that does not itself move, and periodically creates spaceships. Specifically the so-called Gosper glider gun is a period 30 oscillator which emits gliders. It was the first gun ever discovered, and it proved that patterns in Life can grow infinitely. If you haven't realized already, the glider gun can be used to simulate a continuous signal. This feature opens the 'gate' to the world of computer logic inside Life.\",\"cell_layout\":[[-1,-1],[-1,-2],[-1,-3],[1,-2],[-2,-4],[-2,1],[-3,-2],[-4,2],[-5,2],[-6,1],[-7,-1],[-7,-2],[-7,-3],[-6,-4],[-5,-5],[-4,-5],[4,-1],[4,1],[4,2],[5,2],[5,1],[5,-1],[6,-2],[6,3],[8,3],[8,4],[8,-2],[8,-3],[-16,-1],[-16,-2],[-17,-2],[-17,-1],[18,2],[18,1],[19,1],[19,2]],\"repeated\":[],\"min_zoom\":2,\"def_zoom\":2,\"max_zoom\":4,\"speed\":0.05,\"placeable\":0}]},{\"header\":\"GoL:Advanced 07\",\"chapter\":\"Game of Life: Advanced 07, Key glider interactions\",\"lessons\":[{\"lesson\":true,\"title\":\"Reflector\",\"reference\":\"https://www.conwaylife.com/wiki/Buckaroo\",\"description\":\"We are slowly approaching the end of this section of the 'tutorial', and the final thing you should definitely know before diving into computer logic, is how different patterns of Life interact with each other. More specifically, how patterns interact with the glider. In the following lessons, the simulations may turn out bigger and more cluttered than before, and you might need a way to deflect or redirect gliders to complete certain assignments. That's what reflectors are for, and this one is called Buckaroo. It's a period 30 oscillator, that can deflect incoming gliders by 90 degrees. By adjusting the timing and the horizontal position of the incoming glider, Buckaroo can even reflect it by 180 degrees, back to where it came from. This is a less useful feature of the pattern.\",\"cell_layout\":[[-3,1],[-3,2],[-3,-1],[-2,3],[-2,4],[-2,-2],[-2,-3],[-4,3],[-5,2],[-6,1],[-5,-1],[-4,-2],[-10,1],[-11,1],[-11,-1],[-10,-1],[9,-2],[9,-3],[10,-2],[11,-3],[11,-4],[11,-5],[12,-5],[14,10],[15,10],[15,9],[16,9],[16,11]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":1.5,\"max_zoom\":3,\"speed\":0.1,\"placeable\":0},{\"lesson\":true,\"title\":\"Duplicator\",\"reference\":\"https://www.conwaylife.com/wiki/Fanout\",\"description\":\"Notice how the two travelling gliders in the bottom right corner pass through the pattern(with a slight horizontal shift), and for every glider, a duplicate gets ejected at a 90 degrees angle from the original. This is because the pattern the gliders just passed through is a duplicator, called Fanout. It accepts as input a glider from a specific direction and it pushes out an identical shifted glider, but also creates a copy that gets sent out a different way. In order to be usable, especially in bigger, more complex pattern configurations, duplicators should have a low period. The Fanout is a period-30 oscillator. You could have already guessed the period of this pattern, since upon closer inspection, you can see that it consists of 2 Glider Guns, which as you already know have a period of 30.\",\"cell_layout\":[[1,1],[1,2],[2,2],[2,1],[11,-7],[10,-8],[11,-9],[12,-9],[13,-9],[13,-10],[7,26],[6,26],[-16,10],[-17,9],[-17,11],[-18,11],[-19,11],[-19,12],[-12,-24],[-13,-24],[10,-7],[5,21],[-13,-23],[-11,3],[-17,3],[7,25],[-16,9],[-8,-2],[-1,7],[-16,3],[-12,3],[7,6],[9,6],[5,14],[6,12],[7,14],[-12,-23],[-9,-1],[1,6],[6,5],[10,5],[8,7],[-11,2],[-17,2],[6,3],[10,3],[6,25],[-15,-14],[-14,-14],[-10,-14],[-9,-14],[-8,-1],[1,7],[-13,-10],[-11,-10],[8,6],[4,14],[5,13],[7,13],[8,14],[-14,-2],[5,4],[11,4],[4,21],[3,16],[4,16],[8,16],[9,16],[-9,-3],[-7,-2],[-2,6],[-1,8],[-12,-9],[7,7],[9,7],[4,13],[4,15],[5,15],[6,15],[5,12],[7,12],[7,15],[8,13],[8,15],[-15,-2],[-13,-2],[-16,-1],[-12,-1],[-15,-12],[-14,-10],[-10,-10],[-9,-12],[7,2],[9,2],[-12,-14],[8,2],[8,-12],[8,-13],[7,-13],[7,-14],[9,-14],[15,-20],[16,-20],[15,-21],[14,-21],[16,-22]],\"repeated\":[],\"min_zoom\":1.5,\"def_zoom\":3.5,\"max_zoom\":4,\"speed\":0.05,\"placeable\":0}]},{\"header\":\"GoL:Exercise 03\",\"chapter\":\"Game of Life: Exercise 03, Glider shenanigans\",\"hint\":\"There is one intended solution for most exercises, but with some creative thinking, you can reach the desired outcome with a different approach\",\"lessons\":[{\"lesson\":false,\"title\":\"Jam the signal\",\"reference\":\"https://www.conwaylife.com/wiki/Category:Conduits\",\"description\":\"You might recognize this, seemingly incomplete conduit from a couple chapters back. Knowing what you know about the beehive stopper, your task is to block the first of the two incoming gliders. But this time, it will not be as easy as just scrolling back to the conduit lesson and copying the solution. That's because you only have 5 Cells to place. If you have found the correct solution, only the second Glider will pass through the stopper, and no beehive will be left standing at the end.\",\"cell_layout\":[[-8,-2],[-9,-2],[-9,-1],[-3,-9],[-4,-9],[-3,-10],[-5,-10],[-5,-11],[-4,-11],[-2,-13],[-1,-13],[-2,-14],[-1,-15],[1,-15],[2,-15],[2,-16],[4,-9],[5,-9],[5,-8],[4,-8],[15,-8],[16,-8],[15,-7],[15,-6],[14,-5],[13,-5],[13,-6],[37,36],[42,41],[36,36],[41,41],[35,37],[40,42],[35,36],[36,38],[40,41],[41,43],[-8,-1]],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":5,\"max_zoom\":4,\"speed\":0.1,\"placeable\":5},{\"lesson\":false,\"title\":\"Reflect the signal\",\"reference\":\"https://www.conwaylife.com/wiki/Reflector\",\"description\":\"Use the provided reflector to create a Glider, which gets reflected into the eater positioned above. Carefully study the Buckaroo from the previous chapter, to determine the right starting position. Notice how the Glider gets reflected, and try to predict the path it's gonna take, if you place it at various points on the grid. If you are feeling stuck, consider the period of the Buckaroo oscillator, and the movement speed of the Glider, to more easily predict their next positions. Also don't be worried to try the trial-and-error approach.\",\"cell_layout\":[[-3,1],[-3,2],[-3,-1],[-2,3],[-2,4],[-2,-2],[-2,-3],[-4,3],[-5,2],[-6,1],[-5,-1],[-4,-2],[-10,1],[-11,1],[-11,-1],[-10,-1],[9,-2],[9,-3],[11,-3],[11,-4],[11,-5],[12,-5],[10,-2],[-3,13],[-4,12],[-5,13],[-5,14],[-5,15],[-6,15],[-3,12]],\"repeated\":[],\"min_zoom\":1.5,\"def_zoom\":4,\"max_zoom\":6,\"speed\":0.05,\"placeable\":5}]},{\"header\":\"GoL:Advanced 08\",\"chapter\":\"Game of Life: Advanced 08, Summary\",\"lessons\":[{\"lesson\":false,\"title\":\"Final exam\",\"reference\":\"https://www.conwaylife.com/wiki/Queen_bee_shuttle\",\"description\":\"For this final test of your skill and knowledge, you are tasked to construct a the Gosper Glider Gun. It might seem like an easy task, especially considering this is the last chapter of the Game of Life segment of this tutorial. However, this will prove that you are confident in crafting patterns from scratch on your own, and also that you possess some form of a grasp of the concept of periods. Your hint for this exercise is the fact that a Gosper Glider Gun consists of 2 so-called Queen Bee Shuttles, which are just spaceships moving back and forth between stable patterns, in this case, blocks. You can find out more about the Queen Bee by clicking the info icon. Good luck!\",\"cell_layout\":[],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":2,\"max_zoom\":4,\"speed\":0.1,\"placeable\":36},{\"lesson\":true,\"title\":\"What you should remember\",\"reference\":\"\",\"description\":\"The lessons and exercises you have experienced so far were meant to introduce the very basics rules and concepts of the Game of Life to you, and later also properly solidify them, by slowly introducing more complex patterns and ideas into the mix. A lot of these were interesting, and to varying degrees important to understanding Life itself, but will not be very relevant in the following chapters. Ideally, you could stop at this point, and leave an expert in the Game of Life, but there are so many patterns and ideas around it, still yet to be explored. These have been left out here, mainly because their significance regarding the understanding of Life itself was deemed insufficient. There's thousands of explored and documented patterns and tens of categories and sub-categories under which they fall, so it would be unrealistic, or even counterproductive, to examine them all. What you should remember is the 4 basic rules of Life. You should know that there are still lifes, and oscillators, and that oscillators have certain periods in which they repeat. Oscillators that move are called spaceships, and probably the most important one is called the Glider. Patterns can be produced by other patterns, and a Glider producing pattern you will see the most is called the Gosper Glider Gun. You can use patterns to influence the flow of gliders (and other patterns for that matter). Knowing this, you should be more than ready to dive into the next chapters that will teach you the basics of computer logic.\",\"cell_layout\":[],\"repeated\":[],\"min_zoom\":1.5,\"def_zoom\":4,\"max_zoom\":6,\"speed\":0.05,\"placeable\":0}]},{\"header\":\"Logic: Basics 01\",\"chapter\":\"Computer Logic: Basics 01, Intro to computer logic\",\"lessons\":[{\"lesson\":true,\"title\":\"Computer logic\",\"reference\":\"\",\"description\":\"In this second, rather quick section of the Tour of Life, you will find out the basics of how computers do their computing. Over the next couple chapters, you will be presented with a concept from the field of logic, transformed into the Game of Life. Logical concepts will get a real meaning and representation. The goal of this section is to introduce to you the building blocks of the most basic of computers... a Turing machine. As to what a turing machine actually is, you will find that out in the next section. This will be a mainly hands-off experience, and will not involve many exercises where you have to complete a certain pattern or circuit. Due to the combinations of multiple different patterns, and the size of the overall circuit, it would be difficult to interact with the setup directly, as a very precise placement of cells is required. This would lead to a trial-and-error-centric way of solving these exercises, thus losing it's informative value. You can however always transfer the configuration into the Life2D sandbox and experiment with it there. Have fun learning!\",\"cell_layout\":[],\"repeated\":[],\"min_zoom\":1,\"def_zoom\":2,\"max_zoom\":4,\"speed\":0.1,\"placeable\":0},{\"lesson\":true,\"title\":\"Signal\",\"reference\":\"\",\"description\":\"Once you press play on the simulation, you will soon notice a continuous stream of gliders flow into frame. You should already be familiar with the glider, so from now on, you are not to think of it as a singular pattern, but as a part of something bigger. Peeking behind all the layers of abstraction, computers essentially communicate using a stream of 1s and 0s. This is the so-called bit stream, and it carries all the information. If you imagine the top left part of the grid as input, and the bottom right part as output, you can see that at the start, there's no gliders reaching the output. The gliders get spawned at a period of 30, so every 30 epochs that you do NOT detect a glider at the output, this means a 0. Once the gliders do come in, they represent a 1.\",\"cell_layout\":[[1000,1000]],\"repeated\":[[-40,41],[-40,42],[-40,43],[-41,41],[-42,42]],\"min_zoom\":1,\"def_zoom\":2,\"max_zoom\":3,\"speed\":0.025,\"placeable\":0}]},{\"header\":\"Logic: Basics 02\",\"chapter\":\"Computer Logic: Basics 02, Gates\",\"hint\":\"The 2 Gates shown here can technically be combined to create all other existing gates, and thus calculate any binary problem\",\"lessons\":[{\"lesson\":true,\"title\":\"NOT Gate\",\"reference\":\"https://www.nicolasloizeau.com/gol-computer#h.p_dZFApvvPZ7Pc\",\"description\":\"Parts of a logical circuit that take a signal stream as input, and output it's inverse are called NOT Gates. What this means is, that for every 1 they receive, they will output a 0, and vice versa. In the Game of Life, we can achieve this by generating a stream of Gliders using a Gosper Glider Gun. Imagine the bottom left corner of the screen as the output. Initially, the gliders reach it without any hiccups, but once a second stream starts colliding with the first at a certain point, the gliders get destroyed, and the inverse of the previous output gets generated. Where before we had a 1, is now a 0.\",\"cell_layout\":[[23,34],[23,33],[24,33],[24,34],[24,24],[23,24],[22,24],[25,23],[26,22],[26,21],[21,23],[20,22],[20,21],[21,19],[22,18],[23,18],[24,18],[25,19],[23,20],[23,17],[24,14],[25,14],[26,14],[24,13],[25,13],[26,13],[27,12],[23,12],[23,10],[22,10],[27,10],[28,10],[26,-1],[25,-1],[25,-2],[26,-2]],\"repeated\":[[-76,71],[-76,72],[-77,71],[-77,70],[-78,72]],\"min_zoom\":1,\"def_zoom\":4,\"max_zoom\":6,\"speed\":0.025,\"placeable\":0},{\"lesson\":true,\"title\":\"AND Gate\",\"reference\":\"https://www.nicolasloizeau.com/gol-computer#h.p_dZFApvvPZ7Pc\",\"description\":\"If you know anything about computer logic, you have probably already heard of the AND Gate. It takes two inputs, and only outputs a 1, if BOTH the inputs are also set to 1. In other words, only if two glider streams reach the gate at once, an output gets produced. In this case, imagine the bottom right corner as the output. Initially, there is no input, therefore also no output. Then, one input stream appears, but gets blocked by the Glider Gun. Only when the second input comes in can it block the stream from the Gun, and allow the first input to pass through, thus producing an output.\",\"cell_layout\":[[23,34],[23,33],[24,33],[24,34],[24,24],[23,24],[22,24],[25,23],[26,22],[26,21],[21,23],[20,22],[20,21],[21,19],[22,18],[23,18],[24,18],[25,19],[23,20],[23,17],[24,14],[25,14],[26,14],[24,13],[25,13],[26,13],[27,12],[23,12],[23,10],[22,10],[27,10],[28,10],[26,-1],[25,-1],[25,-2],[26,-2],[-13,-20],[-13,-21],[-14,-20],[-15,-21],[-15,-22],[-16,-23],[-15,-23]],\"repeated\":[[-99,93],[-100,93],[-98,94],[-99,94],[-100,95],[-75,56],[-75,57],[-76,56],[-76,55],[-77,57]],\"min_zoom\":1.5,\"def_zoom\":4,\"max_zoom\":6,\"speed\":0.025,\"placeable\":0}]},{\"header\":\"Logic: Basics 03\",\"chapter\":\"Computer Logic: Basics 03, Gates con. + Memory\",\"lessons\":[{\"lesson\":true,\"title\":\"OR Gate\",\"reference\":\"https://www.nicolasloizeau.com/gol-computer#h.p_dZFApvvPZ7Pc\",\"description\":\"Similarly to the AND Gate, and OR Gate is one of the quintessential components in computer logic. It also takes two inputs, but it actually produces a 1 as it's output, when both or EITHER one of the inputs are set to 1. You can observe that at the start, when no input is detected, no output gets produced. However as soon as the first input comes in, it blocks the disrupting Glider Gun on the right and allows the second Gun on the left to produce an output. Even when both inputs are detected, an output is still produced in the bottom middle section of the grid. \",\"cell_layout\":[[23,34],[23,33],[24,33],[24,34],[24,24],[23,24],[22,24],[25,23],[26,22],[26,21],[21,23],[20,22],[20,21],[21,19],[22,18],[23,18],[24,18],[25,19],[23,20],[23,17],[24,14],[25,14],[26,14],[24,13],[25,13],[26,13],[27,12],[23,12],[23,10],[22,10],[27,10],[28,10],[26,-1],[25,-1],[25,-2],[26,-2],[4,-23],[4,-24],[5,-23],[6,-24],[6,-25],[6,-26],[7,-26],[-35,3],[-35,2],[-34,3],[-34,-8],[-35,-8],[-33,-8],[-32,-9],[-36,-9],[-37,-10],[-37,-11],[-31,-10],[-31,-11],[-34,-12],[-36,-13],[-32,-13],[-35,-14],[-34,-14],[-33,-14],[-34,-15],[-35,-18],[-36,-18],[-37,-18],[-37,-19],[-36,-19],[-35,-19],[-38,-20],[-34,-20],[-38,-22],[-39,-22],[-34,-22],[-33,-22],[-37,-32],[-36,-32],[-36,-33],[-37,-33],[-34,2],[18,10],[10,3],[3,-6],[-6,-13],[17,11],[11,2],[2,-5],[-5,-14],[17,10],[10,2],[2,-6],[-6,-14],[18,9],[9,3],[11,4],[3,-7],[4,-5],[-7,-13],[-5,-12],[19,11]],\"repeated\":[[-99,93],[-100,93],[-98,94],[-99,94],[-100,95],[-75,56],[-75,57],[-76,56],[-76,55],[-77,57]],\"min_zoom\":1,\"def_zoom\":6,\"max_zoom\":8,\"speed\":0.025,\"placeable\":0},{\"lesson\":true,\"title\":\"SR Latch\",\"reference\":\"https://www.nicolasloizeau.com/gol-computer#h.p_dZFApvvPZ7Pc\",\"description\":\"Technically speaking, with the building blocks you have seen so far, it would be possible to create a circuit that is Turing complete. This term may mean nothing to you now, but we shall get to it very soon. For now, all you need to know is that you could use what you have learned so far, to create a 'program', which can do any specific calculation you'd want. To get a little closer to the idea of an actual computer, you would need some kind of memory. That is, at least in this case, a building block that will remember it's last state, even after the input is no longer present. This one is called an SR (Set/Reset) Latch. It passes on the last known state from the top left input (Set), and only stops if it detects a signal from the top right (Reset).\",\"cell_layout\":[[-32,2],[-32,1],[32,-2],[-31,2],[31,-2],[-31,1],[31,-3],[19,-6],[19,1],[-19,-3],[-19,4],[16,-4],[16,-2],[-16,-1],[-16,2],[-11,2],[-11,4],[11,-2],[11,1],[17,-5],[18,-3],[17,-1],[-18,1],[-17,-2],[-17,3],[-12,3],[12,-1],[-8,-17],[-6,-18],[-6,-16],[-13,-18],[-13,-16],[-11,-17],[11,-18],[11,-16],[13,-17],[16,-17],[18,-18],[18,-16],[15,-3],[-15,1],[-2,-17],[-17,-17],[7,-17],[22,-17],[22,-3],[-22,1],[-8,-18],[-8,-16],[-11,-18],[-11,-16],[13,-18],[13,-16],[16,-18],[16,-16],[20,-6],[21,-5],[-21,3],[-20,4],[-21,-2],[-20,-3],[20,1],[21,-1],[-8,5],[-8,6],[-8,-1],[-8,1],[8,-4],[8,-3],[8,2],[8,3],[-5,-17],[-14,-17],[10,-17],[19,-17],[-3,-17],[-16,-17],[8,-17],[21,-17],[16,-3],[-16,1],[-12,2],[-11,3],[-10,1],[-12,4],[-10,5],[10,-3],[11,-1],[12,-2],[10,2],[12,1],[22,-4],[-22,2],[-22,-1],[32,-3],[22,-2],[7,-9],[8,-10],[8,-11],[7,-12],[6,-11],[6,-10],[-45,38],[-45,39],[-46,38],[-47,39],[-46,37],[150,140],[150,141],[151,140],[151,139],[152,141]],\"repeated\":[],\"min_zoom\":1.5,\"def_zoom\":4,\"max_zoom\":6,\"speed\":0.025,\"placeable\":0}]}]");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_Life2D_Life2D_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Life2D/Life2D.component */ "/o5u");
/* harmony import */ var _components_Life3D_Life3D_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Life3D/Life3D.component */ "kLbF");
/* harmony import */ var _components_TourOfLife_TourOfLife_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TourOfLife/TourOfLife.component */ "+tmT");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_Life2D_Life2D_component__WEBPACK_IMPORTED_MODULE_4__["Life2DComponent"],
        _components_Life3D_Life3D_component__WEBPACK_IMPORTED_MODULE_5__["Life3DComponent"],
        _components_TourOfLife_TourOfLife_component__WEBPACK_IMPORTED_MODULE_6__["TourOfLifeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_Life2D_Life2D_component__WEBPACK_IMPORTED_MODULE_4__["Life2DComponent"],
                    _components_Life3D_Life3D_component__WEBPACK_IMPORTED_MODULE_5__["Life3DComponent"],
                    _components_TourOfLife_TourOfLife_component__WEBPACK_IMPORTED_MODULE_6__["TourOfLifeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ffr1":
/*!***************************!*\
  !*** ./src/app/Grid3D.ts ***!
  \***************************/
/*! exports provided: Grid3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid3D", function() { return Grid3D; });
/* harmony import */ var _Cell3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell3D */ "KLPn");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");


class Grid3D {
    constructor() {
        this.coords = [];
        this.active = [];
        this.to_die = [];
        this.to_birth = [];
        this.lonely = [];
        this.overcrowded = [];
        this.restore = [];
        this.revert = [];
        this.revert_limit = 20;
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xffc107);
        this.prediction_mode = false;
        this.predicted_count = 0;
        this.min_survival = 5;
        this.max_survival = 7;
        this.birth = 6;
    }
    add_to_grid(cell, auto = false) {
        if (this.coords[cell.getX()] && this.coords[cell.getX()][cell.getY()] && this.coords[cell.getX()][cell.getY()][cell.getZ()] != null) {
            return;
        }
        this.active.push(cell);
        // let config = "";
        // for(let a of this.active)
        //   config+="["+a.getX()+","+a.getY()+"],";
        // console.log(config);
        if (this.coords[cell.getX()] == null) {
            this.coords[cell.getX()] = [];
        }
        if (this.coords[cell.getX()][cell.getY()] == null) {
            this.coords[cell.getX()][cell.getY()] = [];
        }
        this.coords[cell.getX()][cell.getY()][cell.getZ()] = cell;
        // this.restore = [];
    }
    remove_from_grid(x, y, z) {
        // for (let c of this.active) {
        //   if (c.getX() == x && c.getY() == y) {
        //     this.active.splice(this.active.indexOf(c), 1);
        //     this.coords[x][y] = null;
        //   }
        // }
        if (this.coords[x] && this.coords[x][y] && this.coords[x][y][z]) {
            this.active.splice(this.active.indexOf(this.coords[x][y][z]), 1);
            this.coords[x][y][z] = null;
        }
    }
    advance() {
        if (this.predicted_count > 0) {
            this.active.splice(this.active.length - this.predicted_count);
        }
        this.to_die = [];
        this.to_birth = [];
        this.lonely = [];
        this.overcrowded = [];
        if (this.revert.length >= this.revert_limit) {
            this.revert = this.revert.slice(1);
        }
        this.revert.push(this.active.slice());
        for (let a of this.active) {
            this.check_neighbors(a.getX(), a.getY(), a.getZ());
        }
        for (let death of this.to_die) {
            this.active.splice(this.active.indexOf(death), 1);
            this.coords[death.getX()][death.getY()][death.getZ()] = null;
        }
        for (let live of this.to_birth) {
            this.active.push(live);
            if (!this.coords[live.getX()]) {
                this.coords[live.getX()] = [];
            }
            if (!this.coords[live.getX()][live.getY()]) {
                this.coords[live.getX()][live.getY()] = [];
            }
            this.coords[live.getX()][live.getY()][live.getZ()] = live;
        }
        if (this.prediction_mode) {
            this.predict();
        }
    }
    check_neighbors(x, y, z) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                for (let k = -1; k <= 1; k++) {
                    const coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
                    const coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
                    const coord_z = (z < 0 && z + k == 0) ? 1 : ((z > 0 && z + k == 0) ? -1 : z + k);
                    if (this.coords[coord_x] && this.coords[coord_x][coord_y] && this.coords[coord_x][coord_y][coord_z]) {
                        this.cell_death(this.coords[coord_x][coord_y][coord_z]);
                    }
                    else {
                        this.cell_birth(coord_x, coord_y, coord_z);
                    }
                }
            }
        }
    }
    cell_death(cell) {
        let counter = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                for (let k = -1; k <= 1; k++) {
                    const coord_x = (cell.getX() < 0 && cell.getX() + i == 0) ? 1 : ((cell.getX() > 0 && cell.getX() + i == 0) ? -1 : cell.getX() + i);
                    const coord_y = (cell.getY() < 0 && cell.getY() + j == 0) ? 1 : ((cell.getY() > 0 && cell.getY() + j == 0) ? -1 : cell.getY() + j);
                    const coord_z = (cell.getZ() < 0 && cell.getZ() + k == 0) ? 1 : ((cell.getZ() > 0 && cell.getZ() + k == 0) ? -1 : cell.getZ() + k);
                    if (this.coords[coord_x] && this.coords[coord_x][coord_y] && this.coords[coord_x][coord_y][coord_z]) {
                        counter++;
                    }
                }
            }
        }
        if (!this.to_die.includes(cell)) {
            if (counter < this.min_survival + 1) {
                this.to_die.push(cell);
                this.lonely.push(cell);
            }
            else if (counter > this.max_survival + 1) {
                this.to_die.push(cell);
                this.overcrowded.push(cell);
            }
        }
    }
    cell_birth(x, y, z) {
        var counter = 0;
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                for (var k = -1; k <= 1; k++) {
                    var coord_x = (x < 0 && x + i == 0) ? 1 : ((x > 0 && x + i == 0) ? -1 : x + i);
                    var coord_y = (y < 0 && y + j == 0) ? 1 : ((y > 0 && y + j == 0) ? -1 : y + j);
                    var coord_z = (z < 0 && z + k == 0) ? 1 : ((z > 0 && z + k == 0) ? -1 : z + k);
                    if (this.coords[coord_x] && this.coords[coord_x][coord_y] && this.coords[coord_x][coord_y][coord_z]) {
                        counter++;
                    }
                }
            }
        }
        if (counter == this.birth) {
            for (let cell of this.to_birth) {
                if (cell.getX() == x && cell.getY() == y && cell.getZ() == z) {
                    return;
                }
            }
            this.to_birth.push(new _Cell3D__WEBPACK_IMPORTED_MODULE_0__["Cell3D"](x, y, z, this.cell_color));
        }
    }
    clear_grid() {
        this.restore = this.active;
        this.active = [];
        this.coords = [];
        this.to_birth = [];
        this.to_die = [];
        this.revert = [];
        this.lonely = [];
        this.overcrowded = [];
    }
    restore_grid() {
        for (let c of this.restore) {
            this.add_to_grid(c);
        }
    }
    revert_grid() {
        if (this.revert.length > 0) { //checks if any reverse steps exist
            const prev = this.revert.pop();
            //clear everything. computation starts fresh after a revert
            this.active = [];
            this.coords = [];
            this.to_birth = [];
            this.to_die = [];
            this.restore = [];
            //go through last state and add cells to grid
            for (let c of prev) {
                this.add_to_grid(c);
            }
        }
    }
    setRevert(limit) {
        this.revert_limit = limit;
    }
    getRevert() {
        return this.revert_limit;
    }
    getToDie() {
        return this.to_die;
    }
    getToBirth() {
        return this.to_birth;
    }
    get_cells() {
        return this.active;
    }
    getMinSurvival() {
        return this.min_survival;
    }
    setMinSurvival(n) {
        this.min_survival = n;
    }
    getMaxSurvival() {
        return this.max_survival;
    }
    setMaxSurvival(n) {
        this.max_survival = n;
    }
    getBirth() {
        return this.birth;
    }
    setBirth(n) {
        this.birth = n;
    }
    cellColor(color) {
        this.cell_color = color;
        for (let c of this.active) {
            c.setColor(color);
        }
    }
    predictionMode() {
        this.prediction_mode = !this.prediction_mode;
        if (this.prediction_mode) {
            this.predict();
        }
        else {
            for (let d of this.to_die) {
                this.active[this.active.indexOf(d)].setColor(this.cell_color);
            }
            if (this.predicted_count > 0) {
                this.active.splice(this.active.length - this.predicted_count);
            }
            this.predicted_count = 0;
        }
    }
    predict() {
        this.overcrowded = [];
        this.lonely = [];
        this.to_die = [];
        this.to_birth = [];
        for (let a of this.active) {
            this.check_neighbors(a.getX(), a.getY(), a.getZ());
        }
        for (let l of this.lonely) {
            this.active[this.active.indexOf(l)].setColor(new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xd81b60)); //pink
        }
        for (let o of this.overcrowded) {
            this.active[this.active.indexOf(o)].setColor(new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x1e88e5)); //blue
        }
        this.predicted_count = this.to_birth.length;
        for (let b of this.to_birth) {
            b.setColor(new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x004d40), true); //green
            this.active.push(b);
        }
    }
}


/***/ }),

/***/ "kLbF":
/*!*******************************************************!*\
  !*** ./src/app/components/Life3D/Life3D.component.ts ***!
  \*******************************************************/
/*! exports provided: Life3DComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Life3DComponent", function() { return Life3DComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _Renderer3D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Renderer3D */ "Dcr7");
/* harmony import */ var _Cell3D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Cell3D */ "KLPn");
/* harmony import */ var three_examples_jsm_controls_TrackballControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/TrackballControls */ "kgy+");
/* harmony import */ var _Grid3D__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Grid3D */ "ffr1");
/* harmony import */ var three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader */ "5kJi");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");




















function Life3DComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This cell will die due to overpopulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "This cell will die due to underpopulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This cell will be born due to reproduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "This cell survives, unaffected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "In this experimental section, Conway's Game of Life has been extended by one dimension.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Here, you can examine how the automaton would behave inside a 3D environment. In the options panel,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " you will find almost all the options familiar to you from the 2D sandbox.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Additionally, you can upload 3D mesh data, that will be automatically converted into a starting configuration for the 3D Game of Life. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Try not to use meshes that are too big, as in such cases, the upload takes a while. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "The 3D cursor indicates where you will place/remove a cell.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Left mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " -> Place a new cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Right mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " -> Delete an existing cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " -> Edit mode toggle, allows you to change the distance of the cursor from the camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Middle mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " -> Scroll to zoom, hold to rotate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Shift + Middle mouse button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " -> Pan the camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function Life3DComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function Life3DComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class Life3DComponent {
    constructor() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.clock = new three__WEBPACK_IMPORTED_MODULE_2__["Clock"]();
        this.delta = 0;
        this.interval = 0.3;
        this.running = false;
        this.mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        this.painting = false;
        this.deleting = false;
        this.grid = new _Grid3D__WEBPACK_IMPORTED_MODULE_6__["Grid3D"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"]();
        this.raycast_plane = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](100, 100), new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0xffff00 }));
        this.min_survival = this.grid.getMinSurvival();
        this.max_survival = this.grid.getMaxSurvival();
        this.birth = this.grid.getBirth();
        this.nr_to_die = 0;
        this.nr_to_birth = 0;
        this.prediction_mode = false;
        this.bg_color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"]('rgb(0,0,0)');
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"]('rgb(255,193,7)');
        this.legend = false;
        this.edit_mode = false;
        this.animate = () => {
            requestAnimationFrame(this.animate);
            this.raycaster.setFromCamera(this.mouse, this.renderer.getCamera());
            this.trackball.update();
            if (this.running) {
                this.delta += this.clock.getDelta();
                if (this.delta > this.interval) {
                    this.grid.advance();
                    this.nr_to_die = this.grid.getToDie().length;
                    this.nr_to_birth = this.grid.getToBirth().length;
                    this.scene_reload();
                    this.delta = this.delta % this.interval;
                }
            }
            this.renderer.render(this.scene);
        };
    }
    ngOnInit() {
        console.log('test');
        let parent = 'render_window';
        const width = document.getElementById(parent).offsetWidth;
        const height = document.getElementById(parent).offsetHeight;
        this.renderer = new _Renderer3D__WEBPACK_IMPORTED_MODULE_3__["Renderer3D"](width, height);
        document.getElementById(parent).appendChild(this.renderer.getRenderer());
        let that = this;
        window.addEventListener('resize', function () {
            that.renderer.setSize(document.getElementById(parent).offsetWidth, document.getElementById(parent).offsetHeight);
        }, false);
        window.addEventListener('click', function () {
            if (that.getLegend()) {
                that.toggleLegend();
            }
        }, false);
        this.renderer.getRenderer().addEventListener('mouseup', function (e) {
            if (e.button == 0) {
                that.painting = false;
            }
            else if (e.button == 2) {
                that.deleting = false;
            }
        }, false);
        this.raycast_plane.material.colorWrite = false;
        this.raycast_plane.material.transparent = true;
        this.renderer.getRenderer().addEventListener('mousedown', function (e) {
            let set_pred = false;
            if (that.prediction_mode) {
                set_pred = true;
                that.predictionMode();
            }
            if (e.button == 0) { //perform left click action -> add
                that.painting = true;
                that.deleting = false;
                that.check_addition();
            }
            else if (e.button == 2) { //perform right click action -> delete
                that.deleting = true;
                that.painting = false;
                that.check_deletion();
            }
            if (set_pred && !that.prediction_mode) {
                that.predictionMode();
            }
        }, false);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__["IcosahedronGeometry"](0.025, 1);
        const material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0xff0000 });
        this.pointer = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
        this.scene.add(this.pointer);
        const indicator_g = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.1, 0.1, 0.1);
        const indicator_m = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0xff0000 });
        indicator_m.transparent = true;
        indicator_m.opacity = 0.5;
        this.indicator = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](indicator_g, indicator_m);
        const geo = new three__WEBPACK_IMPORTED_MODULE_2__["EdgesGeometry"](this.indicator.geometry);
        const mat = new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x000000, linewidth: 1 });
        let wireframe = new three__WEBPACK_IMPORTED_MODULE_2__["LineSegments"](geo, mat);
        wireframe.renderOrder = 1;
        this.indicator.add(wireframe);
        this.renderer.getRenderer().addEventListener('mousemove', function (e) {
            const rect = that.renderer.getRenderer().getBoundingClientRect();
            that.mouse.x = ((e.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
            that.mouse.y = -((e.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;
            that.raycast_plane.quaternion.copy(that.renderer.getCamera().quaternion);
            that.cursorUpdate();
            let set_pred = false;
            if (that.painting || that.deleting) {
                if (that.prediction_mode) {
                    set_pred = true;
                    that.predictionMode();
                }
                if (that.painting) {
                    that.check_addition();
                }
                else if (that.deleting) {
                    that.check_deletion();
                }
            }
            if (set_pred && !that.prediction_mode) {
                that.predictionMode();
            }
        }, false);
        window.addEventListener('keydown', function (e) {
            if (e.key == 'e') {
                that.edit_mode = !that.edit_mode;
                that.trackball.noZoom = that.edit_mode;
            }
        }, false);
        window.addEventListener('wheel', function (e) {
            if (that.edit_mode) {
                var lookAtVector = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
                lookAtVector.x = that.pointer.position.x - that.renderer.getCamera().position.x;
                lookAtVector.y = that.pointer.position.y - that.renderer.getCamera().position.y;
                lookAtVector.z = that.pointer.position.z - that.renderer.getCamera().position.z;
                lookAtVector = lookAtVector.normalize();
                lookAtVector = lookAtVector.multiplyScalar(-1 * (Math.sign(e.deltaY) * 0.05));
                that.raycast_plane.position.x += lookAtVector.x;
                that.raycast_plane.position.y += lookAtVector.y;
                that.raycast_plane.position.z += lookAtVector.z;
            }
            that.cursorUpdate();
            if (that.painting) {
                that.check_addition();
            }
            else if (that.deleting) {
                that.check_deletion();
            }
        }, false);
        // this.helperGrid = new THREE.GridHelper(100, 1000, new THREE.Color(0x888888));
        // this.helperGrid.position.z = 0.001;
        // this.helperGrid.rotateOnAxis(new Vector3(1, 0, 0), 90 * Math.PI / 180);
        this.trackball = new three_examples_jsm_controls_TrackballControls__WEBPACK_IMPORTED_MODULE_5__["TrackballControls"](this.renderer.getCamera(), this.renderer.getRenderer());
        this.trackball.mouseButtons = { LEFT: three__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].MIDDLE, RIGHT: null, MIDDLE: null };
        this.trackball.keys = [null, null, 'ShiftLeft'];
        this.trackball.rotateSpeed = 2;
        this.scene_reload();
        this.animate();
        // this.renderer.getRenderer().addEventListener('wheel', function(){
        //   that.showGrid();
        // }, false);
    }
    cursorUpdate() {
        const intersects = this.raycaster.intersectObject(this.raycast_plane);
        if (intersects.length != 0) {
            this.pointer.position.x = intersects[0].point.x;
            this.pointer.position.y = intersects[0].point.y;
            this.pointer.position.z = intersects[0].point.z;
        }
        let preview_pos = this.generateCellPosition();
        this.indicator.position.x = preview_pos.x / 10 - Math.sign(preview_pos.x) * (this.indicator.geometry.parameters.width / 2);
        this.indicator.position.y = preview_pos.y / 10 - Math.sign(preview_pos.y) * (this.indicator.geometry.parameters.height / 2);
        this.indicator.position.z = preview_pos.z / 10 - Math.sign(preview_pos.z) * (this.indicator.geometry.parameters.depth / 2);
    }
    check_addition() {
        const new_pos = this.generateCellPosition();
        this.generate_cell(new_pos.x, new_pos.y, new_pos.z);
        this.scene_reload();
    }
    check_deletion() {
        const new_pos = this.generateCellPosition();
        this.grid.remove_from_grid(new_pos.x, new_pos.y, new_pos.z);
        this.scene_reload();
    }
    generate_cell(x, y, z, auto = false, regenerate = true) {
        const cell = new _Cell3D__WEBPACK_IMPORTED_MODULE_4__["Cell3D"](x, y, z, this.cell_color);
        this.grid.add_to_grid(cell, auto);
        if (regenerate) {
            this.scene_reload();
        }
    }
    generateCellPosition() {
        let x = this.pointer.position.x < 0 ? Math.trunc(this.pointer.position.x * 10) - 1 : Math.trunc(this.pointer.position.x * 10) + 1;
        let y = this.pointer.position.y < 0 ? Math.trunc(this.pointer.position.y * 10) - 1 : Math.trunc(this.pointer.position.y * 10) + 1;
        let z = this.pointer.position.z < 0 ? Math.trunc(this.pointer.position.z * 10) - 1 : Math.trunc(this.pointer.position.z * 10) + 1;
        return new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, y, z);
    }
    scene_reload() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene.add(this.raycast_plane);
        this.scene.add(this.pointer);
        this.scene.add(this.indicator);
        this.scene.background = this.bg_color;
        const cells = this.grid.get_cells();
        for (let c of cells) {
            this.scene.add(c.getCell());
        }
    }
    clear() {
        this.grid.clear_grid();
        this.scene_reload();
    }
    revert() {
        this.grid.revert_grid();
        this.scene_reload();
    }
    play() {
        this.running = !this.running;
    }
    advance() {
        if (!this.running) {
            this.grid.advance();
            this.scene_reload();
        }
        this.nr_to_die = this.grid.getToDie().length;
        this.nr_to_birth = this.grid.getToBirth().length;
    }
    restore() {
        this.grid.restore_grid();
        this.scene_reload();
    }
    setMinSurvival(e) {
        if (this.prediction_mode) {
            this.predictionMode();
            document.getElementById('prediction_mode').checked = false;
        }
        this.min_survival = parseInt(e.target.value);
        this.grid.setMinSurvival(this.min_survival);
    }
    setMaxSurvival(e) {
        if (this.prediction_mode) {
            this.predictionMode();
            document.getElementById('prediction_mode').checked = false;
        }
        this.max_survival = parseInt(e.target.value);
        this.grid.setMaxSurvival(this.max_survival);
    }
    setBirth(e) {
        if (this.prediction_mode) {
            this.predictionMode();
            document.getElementById('prediction_mode').checked = false;
        }
        this.birth = parseInt(e.target.value);
        this.grid.setBirth(this.birth);
    }
    setRevert(e) {
        this.grid.setRevert(e.target.value);
    }
    getRevert() {
        return this.grid.getRevert();
    }
    change_speed(e) {
        this.interval = e.value / 10;
    }
    getLiveCount() {
        return this.grid.get_cells().length;
    }
    sceneColor() {
        let r = document.getElementById('bg_r').innerText;
        let g = document.getElementById('bg_g').innerText;
        let b = document.getElementById('bg_b').innerText;
        this.bg_color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"]('rgb(' + r + ',' + g + ',' + b + ')');
        this.scene_reload();
    }
    cellColor() {
        let r = document.getElementById('c_r').innerText;
        let g = document.getElementById('c_g').innerText;
        let b = document.getElementById('c_b').innerText;
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"]('rgb(' + r + ',' + g + ',' + b + ')');
        this.grid.cellColor(this.cell_color);
        this.scene_reload();
    }
    predictionMode() {
        this.bg_color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x000000);
        this.cell_color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffc107);
        this.grid.cellColor(this.cell_color);
        this.prediction_mode = !this.prediction_mode;
        this.grid.predictionMode();
        this.scene_reload();
    }
    toggleLegend() {
        this.legend = !this.legend;
    }
    getLegend() {
        return this.legend;
    }
    inputMesh() {
        document.getElementById('file_picker').click();
    }
    loadMesh(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let file = URL.createObjectURL(e.currentTarget.files[0]);
            const loader = new three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_7__["OBJLoader"]();
            const that = this;
            loader.load(file, function (object) {
                that.clear();
                const box = new three__WEBPACK_IMPORTED_MODULE_2__["Box3"]();
                for (let i = 0; i < object.children.length; i++) {
                    const mesh = object.children[i];
                    mesh.geometry.computeBoundingBox();
                    box.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
                    let size = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]();
                    box.getSize(size);
                    let move_by = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-size.x / 2, -size.y / 2, -size.z / 2);
                    move_by = move_by.subVectors(move_by, box.min);
                    mesh.position.x += move_by.x;
                    mesh.position.y += move_by.y;
                    mesh.position.z += move_by.z;
                    mesh.updateMatrixWorld();
                    const step = 0.1;
                    let intersects = [];
                    for (let x = -size.x / 2; x <= size.x / 2; x += step) {
                        for (let z = -size.z / 2; z <= size.z / 2; z += step) {
                            let caster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, size.y, z), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -1, 0));
                            intersects = [...intersects, ...caster.intersectObject(mesh)];
                            caster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, -size.y, z), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0));
                            intersects = [...intersects, ...caster.intersectObject(mesh)];
                        }
                    }
                    console.log(intersects[0]);
                    for (let x = -size.x / 2; x <= size.x / 2; x += step) {
                        for (let y = -size.y / 2; y <= size.y / 2; y += step) {
                            let caster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, y, size.z), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -1));
                            intersects = [...intersects, ...caster.intersectObject(mesh)];
                            caster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, y, -size.z), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 1));
                            intersects = [...intersects, ...caster.intersectObject(mesh)];
                        }
                    }
                    for (let z = -size.z / 2; z <= size.z / 2; z += step) {
                        for (let y = -size.y / 2; y <= size.y / 2; y += step) {
                            let caster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](size.x, y, z), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-1, 0, 0));
                            intersects = [...intersects, ...caster.intersectObject(mesh)];
                            caster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-size.x, y, z), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](1, 0, 0));
                            intersects = [...intersects, ...caster.intersectObject(mesh)];
                        }
                    }
                    if (intersects.length > 0) {
                        for (let i of intersects) {
                            let p = i.point;
                            let pos_x = p.x < 0 ? Math.trunc(p.x * 10) - 1 : Math.trunc(p.x * 10) + 1;
                            let pos_y = p.y < 0 ? Math.trunc(p.y * 10) - 1 : Math.trunc(p.y * 10) + 1;
                            let pos_z = p.z < 0 ? Math.trunc(p.z * 10) - 1 : Math.trunc(p.z * 10) + 1;
                            that.generate_cell(pos_x, pos_y, pos_z, false, false);
                        }
                    }
                    that.scene_reload();
                    // that.scene.add(mesh);
                }
            }, function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, function (error) {
                console.log('An error happened');
            });
        });
    }
}
Life3DComponent.ɵfac = function Life3DComponent_Factory(t) { return new (t || Life3DComponent)(); };
Life3DComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Life3DComponent, selectors: [["life-3d"]], decls: 111, vars: 30, consts: [["id", "render_window", 2, "cursor", "none"], ["id", "legend"], ["mat-raised-button", "", "cdkOverlayOrigin", "", 2, "z-index", "1000", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "controls_container"], ["id", "controls", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Clear the Game board", "matTooltipPosition", "above", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Go back by one epoch", "matTooltipPosition", "above", 3, "disabled", "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Play/Pause the Game", "matTooltipPosition", "above", 3, "click"], [4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Advance the game by one epoch", "matTooltipPosition", "above", 3, "disabled", "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Restore the cleared board", "matTooltipPosition", "above", 3, "disabled", "click"], ["id", "options_container"], ["id", "options_button"], ["id", "expand_options"], ["type", "button", "mat-icon-button", "", 1, "selection_button", 2, "width", "1em", 3, "click"], ["id", "options_drawer", "mode", "side", "position", "end", 1, "sidenav_drawer", 3, "click"], ["options", ""], ["id", "sidebar_options", 1, "sidebar"], [1, "option_box"], [1, "option_name"], [1, "options_input"], ["type", "number", "min", "0", "matInput", "", 3, "max", "value", "change"], ["type", "number", "max", "26", "matInput", "", 3, "min", "value", "change"], ["type", "number", "min", "1", "max", "26", "matInput", "", 3, "value", "change"], ["id", "prediction_mode", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["color", "primary", "min", "0.1", "max", "10", "step", "0.1", "thumbLabel", "", 3, "value", "change"], ["type", "number", "min", "1", "matInput", "", "id", "revert_count", 3, "value", "change"], [1, "color_sliders"], ["id", "bg_r", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "bg_g", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "bg_b", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "c_r", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "c_g", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["id", "c_b", "color", "primary", "min", "0", "max", "255", "step", "1", "thumbLabel", "", "vertical", "", 3, "value", "disabled", "change"], ["type", "file", "id", "file_picker", 2, "display", "none", 3, "change"], ["type", "button", "mat-raised-button", "", 2, "margin-bottom", "2.5em", 3, "click"], ["id", "legend_content"], ["id", "overpopulation"], ["id", "underpopulation"], ["id", "birth"], ["id", "survival"]], template: function Life3DComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_2_listener($event) { ctx.toggleLegend(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Life3DComponent_ng_template_5_Template, 43, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_div_click_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_8_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_11_listener() { return ctx.revert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " skip_previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_14_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, Life3DComponent_mat_icon_15_Template, 2, 0, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, Life3DComponent_mat_icon_16_Template, 2, 0, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_17_listener() { return ctx.advance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " skip_next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_20_listener() { return ctx.restore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " replay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-drawer-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-drawer", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_mat_drawer_click_29_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Living cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Cells born");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Cells died");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Min # of cells for survival");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_input_change_52_listener($event) { return ctx.setMinSurvival($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Max # of cells for survival");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_input_change_58_listener($event) { return ctx.setMaxSurvival($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "# of cells for birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_input_change_64_listener($event) { return ctx.setBirth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Prediction mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_checkbox_change_68_listener() { return ctx.predictionMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Simulation interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-slider", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_72_listener($event) { return ctx.change_speed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Limit of returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_input_change_78_listener($event) { return ctx.setRevert($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Background color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " R ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-slider", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_85_listener() { return ctx.sceneColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " G ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-slider", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_88_listener() { return ctx.sceneColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-slider", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_91_listener() { return ctx.sceneColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Cell color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " R ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-slider", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_98_listener() { return ctx.cellColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " G ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-slider", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_101_listener() { return ctx.cellColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-slider", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_mat_slider_change_104_listener() { return ctx.cellColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "File input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Life3DComponent_Template_input_change_108_listener($event) { return ctx.loadMesh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Life3DComponent_Template_button_click_109_listener() { return ctx.inputMesh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.getLegend());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getLiveCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nr_to_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nr_to_die);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.max_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.min_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("min", ctx.min_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.max_survival);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.interval * 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.getRevert());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.bg_color.r * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.bg_color.g * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.bg_color.b * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.cell_color.r * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.cell_color.g * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.prediction_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.cell_color.b * 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.prediction_mode);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSlider"]], styles: ["#render_window[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0; right: 0; bottom: 0; left: 0;\r\n  \r\n  \r\n  \r\n  \r\n  \r\n}\r\n\r\n.controls_container[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  z-index: 500;\r\n  position:fixed;\r\n  bottom:0;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: center;\r\n}\r\n\r\n#controls[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  background-color: white;\r\n  border-radius: 20px 20px 0 0;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#options_container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  background-color: transparent;\r\n  pointer-events: none;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n#options_button[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n  align-content: flex-end;\r\n}\r\n\r\n#expand_options[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  pointer-events: all;\r\n  width: 1.5em;\r\n  border-radius: 10px 0 0 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n  \r\n  pointer-events: all;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#sidebar_options[_ngcontent-%COMP%]{\r\n  height: 175%;\r\n}\r\n\r\n.options_input[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n}\r\n\r\n.option_box[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.option_name[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n#options_drawer[_ngcontent-%COMP%]{\r\n  pointer-events: all;\r\n  width: 40%;\r\n}\r\n\r\n.color_sliders[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n#legend[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 3%;\r\n}\r\n\r\n#legend_content[_ngcontent-%COMP%]{\r\n  \r\n  border-radius: 0 10px 10px 10px;\r\n  margin-top: -0.5em;\r\n  background-color: white;\r\n  padding: 1em;\r\n  \r\n}\r\n\r\n#legend_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n}\r\n\r\n#survival[_ngcontent-%COMP%]{\r\n  background-color: #FFC107;\r\n}\r\n\r\n#underpopulation[_ngcontent-%COMP%]{\r\n  background-color: #D81B60;\r\n  color: white;\r\n}\r\n\r\n#overpopulation[_ngcontent-%COMP%]{\r\n  background-color: #1E88E5;\r\n  color: white;\r\n}\r\n\r\n#birth[_ngcontent-%COMP%]{\r\n  background-color: #004D40;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9MaWZlM0QvTGlmZTNELmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTztFQUNwQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsUUFBUTtFQUNSLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9MaWZlM0QvTGlmZTNELmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVuZGVyX3dpbmRvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwO1xyXG4gIC8qei1pbmRleDogLTE7Ki9cclxuICAvKmRpc3BsYXk6IGZsZXg7Ki9cclxuICAvKm1hcmdpbi10b3A6IC01MGVtOyovXHJcbiAgLyp3aWR0aDogNTAwcHg7Ki9cclxuICAvKmhlaWdodDogMjAwcHg7Ki9cclxufVxyXG5cclxuLmNvbnRyb2xzX2NvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBib3R0b206MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY29udHJvbHN7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNvcHRpb25zX2NvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jb3B0aW9uc19idXR0b257XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4jZXhwYW5kX29wdGlvbnN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyovXHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jc2lkZWJhcl9vcHRpb25ze1xyXG4gIGhlaWdodDogMTc1JTtcclxufVxyXG5cclxuLm9wdGlvbnNfaW5wdXR7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLm9wdGlvbl9ib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25fbmFtZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI29wdGlvbnNfZHJhd2Vye1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmNvbG9yX3NsaWRlcnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsZWdlbmR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMSU7XHJcbiAgbGVmdDogMyU7XHJcbn1cclxuXHJcbiNsZWdlbmRfY29udGVudHtcclxuICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXHJcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIC8qY29sb3I6IHdoaXRlOyovXHJcbn1cclxuXHJcbiNsZWdlbmRfY29udGVudCBwe1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuI3N1cnZpdmFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XHJcbn1cclxuXHJcbiN1bmRlcnBvcHVsYXRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNvdmVycG9wdWxhdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU4OEU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JpcnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRENDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Life3DComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'life-3d',
                templateUrl: './Life3D.component.html',
                styleUrls: ['./Life3D.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_Life2D_Life2D_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Life2D/Life2D.component */ "/o5u");
/* harmony import */ var _components_Life3D_Life3D_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Life3D/Life3D.component */ "kLbF");
/* harmony import */ var _components_TourOfLife_TourOfLife_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TourOfLife/TourOfLife.component */ "+tmT");







const routes = [
    { path: '', redirectTo: '/life2d', pathMatch: 'full' },
    { path: 'life2d', component: _components_Life2D_Life2D_component__WEBPACK_IMPORTED_MODULE_2__["Life2DComponent"] },
    { path: 'life2d/:config', component: _components_Life2D_Life2D_component__WEBPACK_IMPORTED_MODULE_2__["Life2DComponent"] },
    { path: 'life3d', component: _components_Life3D_Life3D_component__WEBPACK_IMPORTED_MODULE_3__["Life3DComponent"] },
    { path: 'touroflife', component: _components_TourOfLife_TourOfLife_component__WEBPACK_IMPORTED_MODULE_4__["TourOfLifeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map