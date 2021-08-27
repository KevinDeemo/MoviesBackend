(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenkexun/Desktop/usc/csci 571/hw8/hw8-final/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "6F0G":
/*!*****************************************!*\
  !*** ./src/app/localstorage.service.ts ***!
  \*****************************************/
/*! exports provided: LocalstorageService, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalstorageService {
    constructor() { }
    addLocalStorage(id, type, name, url, key) {
        let list = JSON.parse(localStorage.getItem(key));
        if (list == null) {
            list = new Array();
            list.push(new Card(id, type, name, url));
            localStorage.setItem(key, JSON.stringify(list));
        }
        else {
            let temp = new Array();
            for (let i = 0; i < list.length; i++) {
                if (list[i].id != id) {
                    temp.push(list[i]);
                }
            }
            temp.push(new Card(id, type, name, url));
            localStorage.setItem(key, JSON.stringify(temp));
        }
    }
    removeLocalStorage(id) {
        let list = JSON.parse(localStorage.getItem("watchlist"));
        let temp = new Array();
        for (let i = 0; i < list.length; i++) {
            if (list[i].id != id) {
                temp.push(list[i]);
            }
        }
        localStorage.setItem('watchlist', JSON.stringify(temp));
    }
    isContain(id) {
        let list = JSON.parse(localStorage.getItem("watchlist"));
        if (list == null) {
            return false;
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return true;
            }
        }
        return false;
    }
    isContinueNull() {
        if (JSON.parse(localStorage.getItem("continue")) == null) {
            return true;
        }
        return false;
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });
class Card {
    constructor(id, type, name, url) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.url = url;
    }
}


/***/ }),

/***/ "76GK":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mobileconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mobileconfig.service */ "E/zD");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function MylistComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const j_r5 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r3.types[i_r2][j_r5], "/", ctx_r3.ids[i_r2][j_r5], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.titles[i_r2][j_r5], " ");
} }
function MylistComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_4_div_2_Template, 7, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgs_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", imgs_r1);
} }
class MylistComponent {
    constructor(mobile_service) {
        this.mobile_service = mobile_service;
        this.images = [];
        this.titles = [];
        this.ids = [];
        this.types = [];
    }
    ngOnInit() {
        let list = JSON.parse(localStorage.getItem('watchlist'));
        if (list == null || list.length == 0) {
            this.main_title = 'No items found in Watchlist.';
            $("h1").css({ "margin-top": "10%", "text-align": "center" });
        }
        else {
            this.main_title = 'My WatchList';
            let count = list.length;
            let image_array = [], title_array = [], id_array = [], type_array = [];
            let index = count - 1, num = 0;
            while (index >= 0) {
                image_array.push(list[index].url);
                title_array.push(list[index].name);
                type_array.push(list[index].type);
                id_array.push(list[index--].id);
                num++;
                if (num % 6 == 0 || index == -1) {
                    this.images.push(image_array);
                    this.titles.push(title_array);
                    this.ids.push(id_array);
                    this.types.push(type_array);
                    image_array = [];
                    title_array = [];
                    id_array = [];
                    type_array = [];
                }
            }
        }
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
        this.mobile_service.footerPosition();
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mobileconfig_service__WEBPACK_IMPORTED_MODULE_1__["MobileconfiService"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 6, vars: 3, consts: [[3, "input"], [1, "mycontainer_3"], [1, "h1_ml"], [4, "ngFor", "ngForOf"], [1, "row", "row_ml"], ["class", "sub_image col-xs-2 col-md-2 col-lg-2 col-sm-12", 4, "ngFor", "ngForOf"], [1, "sub_image", "col-xs-2", "col-md-2", "col-lg-2", "col-sm-12"], [3, "routerLink"], [1, "picsum-img-wrapper"], [1, "image_ml", 3, "src"], [1, "my_carousel_caption"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 10%;\n    margin-bottom: 5%;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n    \n    overflow:hidden;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   .my_carousel_caption[_ngcontent-%COMP%]{\n    \n    position: absolute;\n    bottom: -2vh;\n    z-index: 0;\n}\n\n.my_carousel_caption[_ngcontent-%COMP%] {\n    bottom: -100%;\n    left: 0;\n    right: 0;\n    height: 50%;\n    margin-bottom: 1vh;\n    padding-bottom: 0;\n    background-image: linear-gradient(transparent, black 70%);\n}\n\n.my_carousel_caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    text-align: left;\n    position: absolute;\n    padding-left: 1vw;\n    padding-right: 0.5vw;\n    bottom: 15%;\n    padding-top:1vh;\n    padding-bottom: 1vh;\n    margin-bottom: 0;\n    font-size: 15px;\n    z-index: -1;\n}\n\n\n\n\n\n.sub_image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n\n}\n\nimg[_ngcontent-%COMP%]{\n    \n    width: 100%;\n    height: 100%;\n    padding-top: 3%;\n    \n\n}\n\n.container[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n.mycontainer_3[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 10%;\n    padding-left: 10%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 5%;\n}\n\n.row_ml[_ngcontent-%COMP%] {\n    margin-top: 8%;\n    margin-bottom: 10%;\n}\n\n@media screen and (max-width:960px) {\n    .mycontainer_3[_ngcontent-%COMP%] {\n        margin-top: 20%;\n    }\n\n    .h1_ml[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n        padding-bottom: 0;\n        margin-left: 20px;\n    }\n\n    .my_carousel_caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        padding-left: 8vw;\n        padding-right: 5.5vw;\n    }\n\n    .my_carousel_caption[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: -2vh;\n        z-index: 0;\n    }\n\n    .carousel-indicators[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .image_ml[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .picsum-img-wrapper[_ngcontent-%COMP%] {\n        border : 0;\n        overflow: hidden;\n        max-height: 370px;\n    }\n\n    .sub_image[_ngcontent-%COMP%] {\n        overflow: hidden;\n        text-align: center;\n        margin-left: 10%;\n        margin-right: 10%;\n        margin-top: 15%;\n    }\n\n    .row_ml[_ngcontent-%COMP%] {\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n\n    .col-sm-12[_ngcontent-%COMP%] {\n        padding-left: 0;\n        padding-right: 0;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7Ozs7R0FJRzs7QUFFSDs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoibXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgLyogYm9yZGVyOjVweCBzb2xpZCBibGFjazsgKi9cbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciAubXlfY2Fyb3VzZWxfY2FwdGlvbntcbiAgICAvKiB0b3A6IDYwJTsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMnZoO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5teV9jYXJvdXNlbF9jYXB0aW9uIHtcbiAgICBib3R0b206IC0xMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgYmxhY2sgNzAlKTtcbn1cblxuLm15X2Nhcm91c2VsX2NhcHRpb24gcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xuICAgIGJvdHRvbTogMTUlO1xuICAgIHBhZGRpbmctdG9wOjF2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4vKiAucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICB0b3A6IDY1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDA7XG59ICovXG5cbi8qIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBib3R0b206IC01MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIGJsYWNrIDIwJSk7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBkaXNwbGF5OiBub25lO1xufSAqL1xuXG4uc3ViX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuaW1ne1xuICAgIC8qIG1heC13aWR0aDogMTUwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmU7ICovXG5cbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLm15Y29udGFpbmVyXzMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5yb3dfbWwge1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCkge1xuICAgIC5teWNvbnRhaW5lcl8zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIH1cblxuICAgIC5oMV9tbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAubXlfY2Fyb3VzZWxfY2FwdGlvbiBwe1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDh2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogNS41dnc7XG4gICAgfVxuXG4gICAgLm15X2Nhcm91c2VsX2NhcHRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTJ2aDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmltYWdlX21sIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgICAgIGJvcmRlciA6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgIH1cblxuICAgIC5zdWJfaW1hZ2Uge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgfVxuXG4gICAgLnJvd19tbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmNvbC1zbS0xMiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG5cbn0iXX0= */"] });


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

/***/ "E/zD":
/*!*****************************************!*\
  !*** ./src/app/mobileconfig.service.ts ***!
  \*****************************************/
/*! exports provided: MobileconfiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileconfiService", function() { return MobileconfiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MobileconfiService {
    constructor() { }
    isMobile() {
        var userAgentInfo = navigator.userAgent;
        var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var mobile_flag = false;
        for (var v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                mobile_flag = true;
                break;
            }
        }
        var screen_width = window.screen.width;
        var screen_height = window.screen.height;
        if (screen_width < 500 && screen_height < 800) {
            mobile_flag = true;
        }
        return mobile_flag;
    }
    footerPosition() {
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight, winHeight = window.innerHeight;
        console.log("content:" + contentHeight, "win:" + winHeight);
        if (contentHeight <= winHeight) {
            $("footer").addClass("fixed-bottom");
        }
    }
    setWidth(ratio) {
        let container_width = $('.mycontainer').width();
        console.log(container_width);
        if (container_width != null) {
            return (container_width * ratio);
        }
        return 0;
    }
}
MobileconfiService.ɵfac = function MobileconfiService_Factory(t) { return new (t || MobileconfiService)(); };
MobileconfiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MobileconfiService, factory: MobileconfiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "F11b");
/* harmony import */ var _mobileconfig_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mobileconfig.service */ "E/zD");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function CarouselComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r3 = ctx_r5.index;
    const img_r2 = ctx_r5.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r4.ids[i_r3], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.titles[i_r3]);
} }
function CarouselComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_3_ng_template_0_Template, 5, 3, "ng-template", 4);
} }
const base_url = "https://image.tmdb.org/t/p/original";
class CarouselComponent {
    constructor(service, mobile_service) {
        this.service = service;
        this.mobile_service = mobile_service;
        this.images = new Array(5);
        this.titles = new Array(5);
        this.ids = new Array(5);
        this.showNavigationIndicators = true;
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this.mobile_service.isMobile();
        if (!this.isMobile) {
            let width = $('.mycontainer_1').width();
            if (width != null) {
                let carousel_height = width * 0.33;
                $('ngb-carousel').css("max-height", carousel_height + "px");
                // let carousel_width = width * 0.95;
                // $('.testcar').css("max-width", carousel_width + "px");
            }
        }
        this.showNavigationIndicators = !this.mobile_service.isMobile();
        // console.log(this.showNavigationIndicators);
        this.service.getCurrentPlaying().subscribe((response) => {
            this.response = response;
            for (var i = 0; i < this.response.length; i++) {
                this.images[i] = base_url + this.response[i].poster_path;
                this.titles[i] = this.response[i].title;
                this.ids[i] = this.response[i].id;
                // console.log(this.images[i]);
            }
        });
    }
    ngAfterViewInit() {
        this.carousel.pause();
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mobileconfig_service__WEBPACK_IMPORTED_MODULE_2__["MobileconfiService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 5, consts: [[1, "mycontainer_1"], [1, "carousel", "testcar", "col-xs-12", "col-md-12", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "routerLink"], [1, "picsum-img-wrapper"], ["alt", "", 1, "image", 3, "src"], [1, "carousel-caption"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_3_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".mycontainer_1[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 10%;\n    padding-left: 10%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 5%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    max-height: 400px;\n    text-align: center;\n    overflow: hidden;\n    outline: none;\n    border-color: transparent;\n    box-shadow:none;\n}\n\n.image[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n    transition: transform .2s;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    top : 25%;\n    padding-left: 10%;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n    position: absolute;\n    color: white;\n    top: 120%;\n    \n    background-image: linear-gradient(transparent, black 40%);\n    height: 50%;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    \n}\n\n@media screen and (max-width:960px){\n    .mycontainer_1[_ngcontent-%COMP%] {\n        padding-right: 15px;\n        padding-left: 15px;\n        margin-top: 20%;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%] {\n        top: 65%;\n        padding-left: 10%;\n    }\n\n    .carousel-indicators[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .picsum-img-wrapper[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n        top : 65%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUZBQW1GO0lBQ25GLHlEQUF5RDtJQUN6RCxXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtRQUNSLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7QUFDSiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y29udGFpbmVyXzEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICB0b3AgOiAyNSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMTIwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApICwgYmxhY2ssIGJsYWNrKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIGJsYWNrIDQwJSk7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCl7XG4gICAgLm15Y29udGFpbmVyXzEge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgIHRvcDogNjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgIHRvcCA6IDY1JTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "Ei/3":
/*!******************************************************!*\
  !*** ./src/app/subcarousel/subcarousel.component.ts ***!
  \******************************************************/
/*! exports provided: SubcarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcarouselComponent", function() { return SubcarouselComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http.service */ "F11b");
/* harmony import */ var _mobileconfig_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mobileconfig.service */ "E/zD");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../localstorage.service */ "6F0G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["carousel_w"];
const _c1 = ["carousel_m"];
function SubcarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.main_title);
} }
function SubcarouselComponent_3_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r8.types[i_r6][j_r10], "/", ctx_r8.ids[i_r6][j_r10], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.titles[i_r6][j_r10], " ");
} }
function SubcarouselComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubcarouselComponent_3_ng_template_0_div_1_Template, 7, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgs_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", imgs_r5);
} }
function SubcarouselComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubcarouselComponent_3_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function SubcarouselComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r14 = ctx_r16.index;
    const img_r13 = ctx_r16.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r15.types_m[i_r14], "/", ctx_r15.ids_m[i_r14], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.titles_m[i_r14]);
} }
function SubcarouselComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubcarouselComponent_6_ng_template_0_Template, 5, 4, "ng-template", 7);
} }
const base_url = "https://image.tmdb.org/t/p/w500";
class SubcarouselComponent {
    constructor(service, mobile_service, storage_service) {
        this.service = service;
        this.mobile_service = mobile_service;
        this.storage_service = storage_service;
        this.images = [];
        this.titles = [];
        this.ids = [];
        this.types = [];
        this.isMobile = false;
        this.hasContinue = false;
        this.hasRecommended = true;
        this.hasSimilar = true;
        this.images_m = [];
        this.titles_m = [];
        this.ids_m = [];
        this.types_m = [];
        this.showNavigationIndicators = true;
        this.showNavigationArrows = true;
    }
    ngOnChanges(changes) {
        this.display();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.isMobile) {
            this.carousel_m.pause();
        }
        else {
            this.carousel_w.pause();
        }
    }
    display() {
        if (this.input == 'recommended' || this.input == 'similar') {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".carousel-indicators").css("bottom", "-20%");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".carousel-indicators:gt(0)").css("bottom", "-20%");
        }
        this.isMobile = this.mobile_service.isMobile();
        // console.log(this.isMobile)
        this.showNavigationArrows = true;
        this.showNavigationIndicators = !this.isMobile;
        this.hasContinue = true;
        this.hasRecommended = true;
        this.hasSimilar = true;
        this.main_title = '';
        switch (this.input) {
            case 'popular_movie':
                this.service.getPopular('movie').subscribe((response) => {
                    this.type = 'movie';
                    this.main_title = "Popular Movies";
                    this.getData(response, this.type, this.isMobile);
                });
                break;
            case 'toprate_movie':
                this.service.getTopRated('movie').subscribe((response) => {
                    this.type = 'movie';
                    this.main_title = "Top Rated Movies";
                    this.getData(response, this.type, this.isMobile);
                });
                break;
            case 'trending_movie':
                this.service.getTrending('movie').subscribe((response) => {
                    this.type = 'movie';
                    this.main_title = "Trending Movies";
                    this.getData(response, this.type, this.isMobile);
                });
                break;
            case 'popular_tv':
                this.service.getPopular('tv').subscribe((response) => {
                    this.type = 'tv';
                    this.main_title = "Popular TV Shows";
                    this.getData(response, this.type, this.isMobile);
                });
                break;
            case 'toprate_tv':
                this.service.getTopRated('tv').subscribe((response) => {
                    this.type = 'tv';
                    this.main_title = "Top Rated TV Shows";
                    this.getData(response, this.type, this.isMobile);
                });
                break;
            case 'trending_tv':
                this.service.getTrending('tv').subscribe((response) => {
                    this.type = 'tv';
                    this.main_title = "Trending TV Shows";
                    this.getData(response, this.type, this.isMobile);
                });
                break;
            case 'recommended':
                this.service.getRecommended(this.id, this.type).subscribe((response) => {
                    this.response = response;
                    let count = this.response.count;
                    if (count == 0) {
                        this.hasRecommended = false;
                    }
                    else {
                        this.getData(response, this.type, this.isMobile);
                        this.main_title = this.type == 'movie' ? 'Recommended Movies' : 'Recommended TV shows';
                    }
                });
                break;
            case 'similar':
                this.service.getSimilar(this.id, this.type).subscribe((response) => {
                    this.response = response;
                    let count = this.response.count;
                    if (count == 0) {
                        this.hasSimilar = false;
                    }
                    else {
                        this.getData(response, this.type, this.isMobile);
                        this.main_title = this.type == 'movie' ? 'Similar Movies' : 'Similar TV shows';
                    }
                });
                break;
            case 'continue':
                if (this.storage_service.isContinueNull()) {
                    this.hasContinue = false;
                }
                else {
                    let continues = JSON.parse(localStorage.getItem('continue'));
                    if (continues == null || continues.length == 0) {
                        break;
                    }
                    this.main_title = 'Continue Watching';
                    let count = continues.length;
                    if (this.isMobile) {
                        if (count == 1) {
                            this.showNavigationArrows = false;
                        }
                        this.images_m = [], this.titles_m = [], this.ids_m = [], this.types_m = [];
                        for (let i = count - 1; i >= 0; i--) {
                            this.images_m.push(continues[i].url);
                            this.titles_m.push(continues[i].name);
                            this.types_m.push(continues[i].type);
                            this.ids_m.push(continues[i].id);
                        }
                    }
                    else {
                        let image_array = [], title_array = [], id_array = [], type_array = [];
                        let index = count - 1, num = 0;
                        if (index >= 0 && index <= 5) {
                            this.showNavigationIndicators = false;
                            this.showNavigationArrows = false;
                        }
                        while (index >= 0) {
                            image_array.push(continues[index].url);
                            title_array.push(continues[index].name);
                            type_array.push(continues[index].type);
                            id_array.push(continues[index--].id);
                            num++;
                            if (num % 6 == 0 || index == -1) {
                                this.images.push(image_array);
                                this.titles.push(title_array);
                                this.ids.push(id_array);
                                this.types.push(type_array);
                                image_array = [];
                                title_array = [];
                                id_array = [];
                                type_array = [];
                            }
                        }
                    }
                }
        }
        // console.log(this.main_title);
    }
    getData(response, type, isMobile) {
        this.response = response;
        let count = this.response.count;
        let data = this.response.res_array;
        // console.log(this.carousel_list);
        if (isMobile) {
            this.images_m = [], this.titles_m = [], this.ids_m = [], this.types_m = [];
            for (let i = 0; i < count; i++) {
                this.images_m.push(base_url + data[i].poster_path);
                this.titles_m.push(data[i].title);
                this.types_m.push(type);
                this.ids_m.push(data[i].id);
            }
        }
        else {
            this.images = [], this.titles = [], this.ids = [], this.types = [];
            let image_array = [], title_array = [], id_array = [], type_array = [];
            let index = 0;
            while (index < count) {
                image_array.push(base_url + data[index].poster_path);
                title_array.push(data[index].title);
                type_array.push(type);
                id_array.push(data[index++].id);
                if (index % 6 == 0 || index == count) {
                    this.images.push(image_array);
                    this.titles.push(title_array);
                    this.ids.push(id_array);
                    this.types.push(type_array);
                    image_array = [];
                    title_array = [];
                    id_array = [];
                    type_array = [];
                }
            }
        }
        // console.log(this.titles);
    }
}
SubcarouselComponent.ɵfac = function SubcarouselComponent_Factory(t) { return new (t || SubcarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mobileconfig_service__WEBPACK_IMPORTED_MODULE_3__["MobileconfiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"])); };
SubcarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubcarouselComponent, selectors: [["app-subcarousel"]], viewQuery: function SubcarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel_w = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel_m = _t.first);
    } }, inputs: { input: "input", type: "type", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 15, consts: [["class", "mycontainer_2", 4, "ngIf"], [1, "carousel", 3, "hidden", "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "showNavigationArrows"], ["carousel_w", ""], [4, "ngFor", "ngForOf"], [1, "carousel", "col-xs-12", 3, "hidden", "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "showNavigationArrows"], ["carousel_m", ""], [1, "mycontainer_2"], ["ngbSlide", ""], [1, "row"], ["class", "sub_image col-xs-2 col-md-2 col-lg-2 col-sm-12", 4, "ngFor", "ngForOf"], [1, "sub_image", "col-xs-2", "col-md-2", "col-lg-2", "col-sm-12"], [3, "routerLink"], [1, "picsum-img-wrapper"], [1, "image", 3, "src"], [1, "carousel-caption", "my_carousel_caption"], ["alt", "", 1, "image", 3, "src"]], template: function SubcarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubcarouselComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubcarouselComponent_3_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-carousel", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SubcarouselComponent_6_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.main_title != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.isMobile || !ctx.hasContinue || !ctx.hasRecommended || !ctx.hasSimilar)("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", ctx.showNavigationIndicators)("showNavigationArrows", ctx.showNavigationArrows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isMobile || !ctx.hasContinue || !ctx.hasRecommended || !ctx.hasSimilar)("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", ctx.showNavigationIndicators)("showNavigationArrows", ctx.showNavigationArrows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images_m);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".mycontainer_2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 10%;\n    padding-left: 11%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 5%;\n}\n\nh1[_ngcontent-%COMP%] {\n    color: white;\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n    position: relative;\n    \n    margin-bottom: 5%;\n    outline: none;\n    border-color: transparent;\n    box-shadow:none;\n    \n    \n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n    \n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   .my_carousel_caption[_ngcontent-%COMP%]{\n    \n    position: absolute;\n    bottom: -2vh;\n}\n\n.my_carousel_caption[_ngcontent-%COMP%] {\n    \n\n    bottom: -100%;\n    left: 0;\n    right: 0;\n    height: 50%;\n    margin-bottom: 1vh;\n    padding-bottom: 0;\n    background-image: linear-gradient(transparent, black 70%);\n    \n}\n\n.my_carousel_caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n    position: absolute;\n    padding-left: 1vw;\n    padding-right: 0.5vw;\n    bottom: 15%;\n    padding-top:1vh;\n    padding-bottom: 2vh;\n    margin-bottom: 0;\n    font-size: 13px;\n}\n\n.sub_image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\nimg[_ngcontent-%COMP%]{\n    \n    width: 100%;\n    height: 100%;\n    padding-top: 3%;\n    padding-bottom: 3%;\n    \n\n}\n\n.row[_ngcontent-%COMP%] {\n    padding-left: 11%;\n    padding-right: 10%;\n}\n\n.container[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n@media screen and (max-width:960px){\n    ngb-carousel[_ngcontent-%COMP%] {\n        text-align: center;\n        overflow: hidden;\n    }\n\n    h1[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        text-align: center;\n    }\n\n    .my_carousel_caption[_ngcontent-%COMP%] {\n        top: 60%;\n        padding-left: 5px;\n        width: 50%;\n        margin-left: 25%;\n        padding-top: 15%;\n        font-size: 15px;\n        background-image: linear-gradient(transparent, black 40%);\n        z-index: 0;\n    }\n\n    .carousel-indicators[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .picsum-img-wrapper[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .picsum-img-wrapper[_ngcontent-%COMP%]:hover   .my_carousel_caption[_ngcontent-%COMP%] {\n        top : 60%;\n    }\n\n    img[_ngcontent-%COMP%] {\n        width: 50%;\n        padding-bottom: 3%;\n    }\n\n    .mycontainer_2[_ngcontent-%COMP%] {\n        padding-left: 0;\n        padding-right: 0;\n        margin-top: 15%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTs7Ozs7c0JBS2tCOztJQUVsQixhQUFhO0lBQ2IsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5REFBeUQ7SUFDekQsbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZix5REFBeUQ7UUFDekQsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzdWJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y29udGFpbmVyXzIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDExJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIC8qIG91dGxpbmU6IDAgIWltcG9ydGFudDsgKi9cbiAgICAvKiBib3JkZXI6IDAgIWltcG9ydGFudDsgKi9cbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xufVxuXG4ucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXI6aG92ZXIgLm15X2Nhcm91c2VsX2NhcHRpb257XG4gICAgLyogdG9wOiA2MCU7ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTJ2aDtcbn1cblxuLm15X2Nhcm91c2VsX2NhcHRpb24ge1xuICAgIC8qIGJvdHRvbTogLTUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgYmxhY2sgMTAlKTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZm9udC1zaXplOiAxM3B4OyAqL1xuXG4gICAgYm90dG9tOiAtMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIGJsYWNrIDcwJSk7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAsIGJsYWNrLCBibGFjayk7ICovXG59XG5cbi5teV9jYXJvdXNlbF9jYXB0aW9uIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xuICAgIGJvdHRvbTogMTUlO1xuICAgIHBhZGRpbmctdG9wOjF2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc3ViX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZ3tcbiAgICAvKiBtYXgtd2lkdGg6IDE1MHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xuICAgIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cblxufVxuXG4ucm93IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDExJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTYwcHgpe1xuICAgIG5nYi1jYXJvdXNlbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5teV9jYXJvdXNlbF9jYXB0aW9uIHtcbiAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTUlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgYmxhY2sgNDAlKTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIC5teV9jYXJvdXNlbF9jYXB0aW9uIHtcbiAgICAgICAgdG9wIDogNjAlO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgICB9XG5cbiAgICAubXljb250YWluZXJfMiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "F11b":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "Content-Type": "application/json" })
};
// const base_url = 'https://kevin-csci571-hw8.wl.r.appspot.com/apis';
const base_url = 'https://moviewbackend.azurewebsites.net/apis';
// const base_url = 'http://localhost:2000/apis';
class HttpService {
    constructor(http) {
        this.http = http;
    }
    getSearchResult(query) {
        let urlStr = base_url + '/search/' + query;
        return this.http.get(urlStr);
    }
    getCurrentPlaying() {
        let urlStr = base_url + '/current';
        return this.http.get(urlStr);
    }
    getPopular(type) {
        let urlStr = base_url + '/popular?type=' + type;
        return this.http.get(urlStr);
    }
    getTopRated(type) {
        let urlStr = base_url + '/toprate?type=' + type;
        return this.http.get(urlStr);
    }
    getTrending(type) {
        let urlStr = base_url + '/trending?type=' + type;
        return this.http.get(urlStr);
    }
    getVideoAndInfo(id, type) {
        let urlStr = base_url + '/video_and_info?id=' + id + "&type=" + type;
        return this.http.get(urlStr);
    }
    getCastInfo(id, type) {
        let urlStr = base_url + '/cast?id=' + id + "&type=" + type;
        return this.http.get(urlStr);
    }
    getCastDetail(id) {
        let urlStr = base_url + '/cast_detail?id=' + id;
        return this.http.get(urlStr);
    }
    getReview(id, type) {
        let urlStr = base_url + '/review?id=' + id + "&type=" + type;
        return this.http.get(urlStr);
    }
    getRecommended(id, type) {
        let urlStr = base_url + '/recommended?id=' + id + "&type=" + type;
        return this.http.get(urlStr);
    }
    getSimilar(id, type) {
        let urlStr = base_url + '/similar?id=' + id + "&type=" + type;
        return this.http.get(urlStr);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'USC Films';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _subcarousel_subcarousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subcarousel/subcarousel.component */ "Ei/3");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "rU/F");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video/video.component */ "o9RM");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");














// import { VideoModule } from './video/video.module';



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_15__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _subcarousel_subcarousel_component__WEBPACK_IMPORTED_MODULE_10__["SubcarouselComponent"],
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
        _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_12__["MylistComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
        _video_video_component__WEBPACK_IMPORTED_MODULE_14__["VideoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_15__["YouTubePlayerModule"]] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Powered by TMDB. Developed by Kexun Chen\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\n    position: relative;\n    height: 20px;\n    width:100%;    \n    background-color: black;\n    text-align: center;\n    color: white;\n    margin-top: 10%;\n    padding-bottom: 2%;\n    bottom: 0;\n}\n\n.fixed-bottom[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width:100%;\n}\n\n@media screen and (max-width:960px) {\n    footer[_ngcontent-%COMP%] {\n        padding-bottom: 20px;\n        height: 30px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOjEwMCU7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBib3R0b206IDA7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCkge1xuICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.component */ "tq2C");




class NavbarComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        // this.a1 = this.elementRef.nativeElement.querySelector('#nav1');
        // this.a2 = this.elementRef.nativeElement.querySelector('#nav2');
        this.changeColor(this.input);
    }
    changeColor(input) {
        // console.log(this.a1);
        // console.log(this.a2);
        if (input == '1' || input == '0') {
            $('#nav1').addClass('active');
            $('#nav2').removeClass('active');
        }
        else if (input == '2') {
            $('#nav2').addClass('active');
            $('#nav1').removeClass('active');
        }
        else {
            $('#nav1').removeClass('active');
            $('#nav2').removeClass('active');
        }
        // console.log(this.a1.style.color);
        // console.log(this.a2.style.color);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { input: "input" }, decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], ["routerLink", "/", 1, "navbar-brand", "text-white", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "id", "nav1", 1, "nav-link", 3, "click"], ["id", "nav2", "routerLink", "/mylist", 1, "nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_1_listener() { return ctx.changeColor("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.changeColor("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.changeColor("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: rgb(0, 0, 0);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n    margin-left: 30px;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n    margin-right: 30px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n\n#nav2[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.75);\n}\n\n.form-inline[_ngcontent-%COMP%] {\n    margin-right: 50px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    background-color: rgb(5, 5, 26);\n    border: 0;\n    border-bottom:1px solid white;\n}\n\napp-search[_ngcontent-%COMP%] {\n    margin-right: 10%;\n    \n}\n\n@media screen and (max-width:960px) { \n    .navbar-nav[_ngcontent-%COMP%] {\n        float: right;\n        padding-right: 10%;\n    }\n\n    .nav-link[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7eUJBQ3FCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI25hdjI6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuXG4uZm9ybS1pbmxpbmUge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDUsIDI2KTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XG59XG5cbmFwcC1zZWFyY2gge1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIC8qIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7ICovXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTYwcHgpIHsgXG4gICAgLm5hdmJhci1uYXYge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "o9RM":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");


class VideoComponent {
    // @Input() height : string;
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        this.height = this.width * 0.5;
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { key: "key", width: "width" }, decls: 1, vars: 3, consts: [[3, "videoId", "width", "height"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayer"]], encapsulation: 2 });


/***/ }),

/***/ "rU/F":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../http.service */ "F11b");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../localstorage.service */ "6F0G");
/* harmony import */ var _mobileconfig_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../mobileconfig.service */ "E/zD");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../video/video.component */ "o9RM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _subcarousel_subcarousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../subcarousel/subcarousel.component */ "Ei/3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");














const _c0 = ["selfClosingAlert"];
function DetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function DetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.tagline);
} }
function DetailComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.date);
} }
function DetailComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2605 ", ctx_r3.vote_average, "");
} }
function DetailComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.time);
} }
function DetailComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Genres : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.genres, " ");
} }
function DetailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.spoken_languages, " ");
} }
function DetailComponent_ngb_alert_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("closed", function DetailComponent_ngb_alert_21_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.message = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx_r7.alert_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r7.message, " ");
} }
function DetailComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_div_36_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46); return ctx_r16.open(_r10, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", cast_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", cast_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500", cast_r15.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", cast_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", cast_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cast_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", cast_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", cast_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cast_r15.character);
} }
function DetailComponent_div_41_br_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function DetailComponent_div_41_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 65);
} }
function DetailComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DetailComponent_div_41_br_7_Template, 1, 0, "br", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DetailComponent_div_41_div_8_Template, 1, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r18 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", review_r18.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("A review created by ", review_r18.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](review_r18.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Written by ", review_r18.author, " on ", review_r18.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](review_r18.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", review_r18.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_ng_template_45_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 79);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500", ctx_r23.cast_detail.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_ng_template_45_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Birth: ", ctx_r24.cast_detail.birthday, "");
} }
function DetailComponent_ng_template_45_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r25.cast_detail.place_of_birth, "");
} }
function DetailComponent_ng_template_45_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Gender: ", ctx_r26.cast_detail.gender, "");
} }
function DetailComponent_ng_template_45_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r27.cast_detail.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.cast_detail.homepage);
} }
function DetailComponent_ng_template_45_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Known for: ", ctx_r28.cast_detail.known_for_department, "");
} }
function DetailComponent_ng_template_45_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r29.cast_detail.also_known_as, "");
} }
function DetailComponent_ng_template_45_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.", ctx_r30.cast_detail.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("openDelay", 0)("closeDelay", 0);
} }
function DetailComponent_ng_template_45_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.", ctx_r31.cast_detail.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("openDelay", 0)("closeDelay", 0);
} }
function DetailComponent_ng_template_45_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.", ctx_r32.cast_detail.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("openDelay", 0)("closeDelay", 0);
} }
function DetailComponent_ng_template_45_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.", ctx_r33.cast_detail.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("openDelay", 0)("closeDelay", 0);
} }
function DetailComponent_ng_template_45_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r34.cast_detail.biography);
} }
function DetailComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_ng_template_45_Template_button_click_3_listener() { const d_r22 = ctx.dismiss; return d_r22("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DetailComponent_ng_template_45_img_9_Template, 1, 1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DetailComponent_ng_template_45_div_11_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DetailComponent_ng_template_45_div_12_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DetailComponent_ng_template_45_div_13_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DetailComponent_ng_template_45_div_14_Template, 4, 2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DetailComponent_ng_template_45_div_15_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DetailComponent_ng_template_45_div_16_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DetailComponent_ng_template_45_a_18_Template, 2, 3, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DetailComponent_ng_template_45_a_19_Template, 2, 3, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DetailComponent_ng_template_45_a_20_Template, 2, 3, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DetailComponent_ng_template_45_a_21_Template, 2, 3, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DetailComponent_ng_template_45_div_24_Template, 2, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.cast_detail.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.profile_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.place_of_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.also_known_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.twitter_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.cast_detail.biography);
} }
class DetailComponent {
    constructor(route, service, config, modalService, storageService, mobile_service) {
        this.route = route;
        this.service = service;
        this.modalService = modalService;
        this.storageService = storageService;
        this.mobile_service = mobile_service;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.message = '';
        this.isMobile = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.isMobile = this.mobile_service.isMobile();
            if (this.isMobile) {
                this.video_width = 330;
            }
            else {
                this.video_width = this.mobile_service.setWidth(0.65);
            }
            $('html,body').animate({ scrollTop: 0 }, 500);
            this.type = params['type'];
            this.id = params['id'];
            this.isAdded = this.storageService.isContain(this.id);
            this.transferType();
            // console.log(this.type + "  " + this.id);
            this.service.getVideoAndInfo(this.id, this.type).subscribe(response => {
                this.response = response;
                console.log(this.response);
                this.video = this.response.video;
                this.detail = this.response.detail;
                this.video_src = this.video.key;
                this.title = this.detail.title;
                this.tagline = this.detail.tagline;
                this.genres = this.detail.genres;
                this.spoken_languages = this.detail.spoken_languages;
                this.overview = this.detail.overview;
                this.vote_average = this.detail.vote_average;
                this.date = this.detail.date;
                this.time = this.detail.time;
                this.poster_path = this.detail.poster_path;
                this.storageService.addLocalStorage(this.id, this.type, this.title, this.poster_path, 'continue');
                // console.log(JSON.parse(localStorage.getItem('continue')!));
            });
            this.service.getCastInfo(this.id, this.type).subscribe(response => {
                this.cast_array = new Array();
                this.cast_response = response;
                // console.log(this.cast_response.length);
                for (var i = 0; i < this.cast_response.length; i++) {
                    this.cast_array.push(new Cast(this.cast_response[i].id, this.cast_response[i].name, this.cast_response[i].character, this.cast_response[i].profile_path));
                }
                this.service.getReview(this.id, this.type).subscribe(res => {
                    this.reviews = new Array();
                    this.review_response = res;
                    for (var i = 0; i < this.review_response.length; i++) {
                        let r = this.review_response[i];
                        this.reviews.push(new Review(r.author, r.rating, r.avatar_path, r.content, r.created_at, r.url));
                    }
                    this.length = this.reviews.length;
                    // this.mobile_service.footerPosition();
                });
            });
        });
        this._success.subscribe(message => this.message = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    changeSuccessMessage() {
        if (this.isAdded) {
            this.storageService.removeLocalStorage(this.id);
        }
        else {
            this.storageService.addLocalStorage(this.id, this.type, this.title, this.poster_path, 'watchlist');
        }
        this.isAdded = !this.isAdded;
        this.transferType();
        this._success.next(this.alert_message);
        // console.log(JSON.parse(localStorage.getItem('watchlist')!));
    }
    open(content, e) {
        this.target = e.target;
        this.cast_id = this.target.id;
        // console.log(this.cast_id);
        for (var i = 0; i < this.cast_array.length; i++) {
            if (this.cast_id == this.cast_array[i].id) {
                this.image_selected = this.cast_array[i].profile_path;
            }
        }
        this.service.getCastDetail(this.cast_id).subscribe(res => {
            this.cast_detail_response = res;
            // console.log(this.cast_detail_response);
            this.cast_detail = new CastDetail(this.cast_detail_response.detail.birthday, this.cast_detail_response.detail.place_of_birth, this.cast_detail_response.detail.name, this.cast_detail_response.detail.homepage, this.cast_detail_response.detail.gender, this.cast_detail_response.detail.also_known_as, this.cast_detail_response.detail.known_for_department, this.cast_detail_response.detail.biography, this.cast_detail_response.external.imdb_id, this.cast_detail_response.external.facebook_id, this.cast_detail_response.external.instagram_id, this.cast_detail_response.external.twitter_id, this.cast_detail_response.detail.profile_path);
            // console.log(this.cast_detail);
            this.modalService.open(content, { size: 'lg', centered: true });
            // console.log(this.cast_detail);
        });
    }
    transferType() {
        if (this.isAdded) {
            this.alert_type = 'success';
            this.btn_message = 'Remove from Watchlist';
            this.alert_message = 'Added to watchlist.';
        }
        else {
            this.alert_type = 'danger';
            this.btn_message = 'Add to Watchlist';
            this.alert_message = 'Removed from watchlist.';
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_mobileconfig_service__WEBPACK_IMPORTED_MODULE_7__["MobileconfiService"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], viewQuery: function DetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], decls: 47, vars: 25, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.1.0/css/all.css", "integrity", "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt", "crossorigin", "anonymous"], [3, "input"], [1, "mycontainer"], [1, "myrow"], [1, "video"], [3, "key", "width"], [1, "basic_info", "col-md-4"], ["class", "title", 4, "ngIf"], ["class", "tagline", 4, "ngIf"], [1, "others"], ["class", "date", 4, "ngIf"], [1, "divisor"], ["class", "rate", 4, "ngIf"], ["class", "time", 4, "ngIf"], ["class", "genres", 4, "ngIf"], ["class", "languages", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "alert", 3, "type", "closed", 4, "ngIf"], [1, "rest_row"], [1, "h5title"], [1, "description"], ["target", "_black", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter", 2, "color", "rgba(83, 152, 255, 0.986)", "font-size", "30px"], ["target", "_blank", 1, "fb-share-button", 3, "href"], [1, "fab", "fa-facebook-square", 2, "color", "rgb(0, 19, 189)", "font-size", "30px"], [1, "h2title_1"], [1, "casts"], ["class", "card", "style", "width: 10rem;", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "h2title_2"], [1, "count"], ["class", "review", 4, "ngFor", "ngForOf"], [3, "input", "type", "id"], ["content", ""], [1, "title"], [1, "tagline"], [1, "date"], [1, "rate"], [1, "time"], [1, "genres"], [1, "subtitle"], [1, "subtext"], [1, "languages"], [1, "alert", 3, "type", "closed"], ["selfClosingAlert", ""], [1, "card", 2, "width", "10rem", 3, "id", "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "id", "src"], [1, "card-body", 3, "id"], [1, "card-text", "bold1", 3, "id"], [1, "bold", "card-text", "bold2", 3, "id"], [1, "card-text", "common", 3, "id"], [1, "review"], [1, "r_div", "col-md-3"], ["alt", "", 1, "r_image", 3, "src"], [1, "review_others", "col-md-9"], [1, "r_title"], [4, "ngIf"], ["class", "div_add", 4, "ngIf"], [1, "r_icon"], [1, "r_star"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-star-fill"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], [1, "r_rate"], [1, "r_time"], [1, "r_content"], ["target", "_blank", 1, "r_read", 3, "href"], [1, "div_add"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 2, "outline", "0 !important", "border", "0 !important", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "subtitle_row"], [1, "image_div", "col-md-2.5", "col-xs-12"], ["class", "image_cast", "alt", "", 3, "src", 4, "ngIf"], [1, "cast_info", "col-md-9"], ["class", "sub_cast_info", 4, "ngIf"], [1, "icons"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "biography", 4, "ngIf"], ["alt", "", 1, "image_cast", 3, "src"], [1, "sub_cast_info"], ["target", "_blank", 3, "href"], ["ngbPopover", "Visit IMDB", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-imdb", 2, "color", "rgb(230, 185, 38)", "font-size", "30px", 3, "openDelay", "closeDelay"], ["ngbPopover", "Visit Instragram", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-instagram", 2, "color", "rgb(161, 0, 161)", "font-size", "30px", "margin-left", "2%", 3, "openDelay", "closeDelay"], ["ngbPopover", "Visit FaceBook", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-facebook-square", 2, "color", "rgb(0, 50, 124)", "font-size", "30px", "margin-left", "2%", 3, "openDelay", "closeDelay"], ["ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", 1, "fab", "fa-twitter", 2, "color", "rgba(83, 152, 255, 0.986)", "font-size", "30px", "margin-left", "2%", 3, "openDelay", "closeDelay"], [1, "biography"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DetailComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DetailComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DetailComponent_span_10_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DetailComponent_span_13_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DetailComponent_span_16_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DetailComponent_div_17_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DetailComponent_div_18_Template, 5, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_19_listener() { return ctx.changeSuccessMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DetailComponent_ngb_alert_21_Template, 3, 2, "ngb-alert", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, DetailComponent_div_36_Template, 9, 9, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, DetailComponent_div_41_Template, 23, 9, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "app-subcarousel", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "app-subcarousel", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, DetailComponent_ng_template_45_Template, 25, 13, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("input", "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("key", ctx.video_src)("width", ctx.video_width);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vote_average);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.spoken_languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.btn_message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch ", ctx.title, "%0a&url=https://youtube.com/watch?v=", ctx.video_src, "%0a&hashtags=USC &hashtags=CSCI571 &hashtags=FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D", ctx.video_src, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cast_array);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("input", "recommended")("type", ctx.type)("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("input", "similar")("type", ctx.type)("id", ctx.id);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_9__["VideoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _subcarousel_subcarousel_component__WEBPACK_IMPORTED_MODULE_11__["SubcarouselComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"]], styles: [".mycontainer {\n    color: white;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 7%;\n    padding: 0;\n}\n\n.myrow {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n.basic_info {\n    padding-right: 3%;\n    padding-left: 5%;\n}\n\n.title {\n    font-weight: bold;\n    font-size: 35px;\n}\n\n.tagline {\n    font-size: 19px;\n    font-style: italic;\n    margin-top: 4%;\n    color: rgba(221, 221, 221);\n}\n\n.others {\n    font-size: 19px;\n    margin-top: 10%;\n    color: rgb(221, 221, 221);\n}\n\n.divisor {\n    margin-left: 2%;\n    margin-right: 2%;\n}\n\n.time {\n    margin-right: 1%;\n    \n}\n\n.rate {\n    margin-left: 1%;\n}\n\n.subtitle {\n    /* font-weight: bold; */\n    color: white;\n}\n\n.subtext {\n    color: rgba(196, 196, 196, 0.815);\n}\n\n.genres {\n    margin-top: 8%;\n    font-size: 15px;\n}\n\n.languages {\n    margin-top: 2%;\n    font-size: 15px;\n}\n\n.btn {\n    margin-top: 7%;\n}\n\n.rest_row {\n    margin-top: 2%;\n    max-width: 100%;\n}\n\n.description {\n    font-size: 16px;\n    color:  rgba(196, 196, 196, 0.815);\n    line-height: 1.5;\n    text-align: justify;\n}\n\n.h5title {\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 3%;\n}\n\n.fb-share-button {\n    margin-left: 1%;\n}\n\n.navbar-nav-svg {\n    color: #1b95e0;\n}\n\n.casts {\n    /* width: 100%; */\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    max-width: 100%;\n    margin-top: 2%;\n    overflow: auto;\n}\n\n.casts::-webkit-scrollbar {\n    height: 8px;\n}\n\n.casts::-webkit-scrollbar-thumb {\n    background-color: #b9b9b9;\n    border-radius: 10px;\n}\n\n.casts::-webkit-scrollbar-track-piece {\n    background-color: rgba(212, 211, 211, 0.171);\n    opacity: 0.3;\n}\n\n.casts::-webkit-scrollbar-track {\n    border: solid thin rgb(75, 75, 75);\n    border-radius: 10px;\n}\n\n.casts::-webkit-scrollbar-thumb:hover {\n    background-color: rgb(117, 117, 117);\n}\n\n.h2title_1 {\n    margin-top: 5%;\n}\n\n.h2title_2 {\n    margin-top: 5%;\n}\n\n.card {\n    white-space: nowrap;\n    display: inline-block;\n    margin-right: 1%;\n    border-radius: 1em;\n    border: 0;\n    overflow: hidden;\n    color: black;\n    text-align: center;\n    cursor: pointer;\n    margin-bottom: 1%;\n    vertical-align: top;\n}\n\n.card-text {\n    margin: 0;\n    word-break:break-all;\n    white-space:normal\n}\n\n.bold1{\n    margin: 0;\n    font-weight: bold;\n}\n\n.bold2 {\n    font-weight: bold;\n    margin-top: 2%;\n    margin-bottom: 2%;;\n}\n\n.card-body {\n    padding : 1rem;\n    font-size: 13px;\n}\n\n.modal-body.container {\n    margin-left: 2%;\n    margin-top: 1%;\n    margin-right: 2%;\n}\n\n.subtitle_row {\n    display: flex;\n}\n\n.image_cast {\n    max-width: 100%;\n}\n\n.cast_info {\n    margin-left: 2%;\n}\n\n.sub_cast_info {\n    color: black;\n    margin-top: 1%;\n}\n\n.h2title_1 {\n    margin-top: 2%;\n}\n\n.icons {\n    margin-top: 7%;\n}\n\n.icon {\n    max-width: 5%;\n    max-height: 5%;\n}\n\n.icon_1 {\n    max-width: 5%;\n    max-height: 5%;\n    margin-left: 2%;\n}\n\n.myTooltip .tooltip-inner{\n    background-color: white;\n    color: black;\n    border: black 1px solid;\n}\n\n.myTooltip .arrow::before {\n    border-top-color: darkgray;\n    /* border-bottom-color: white; */\n    /* border-color: red; */\n}\n\n.review {\n    background-color: white;\n    border-radius: 10px;\n    margin-top: 2%;\n}\n\n.r_div {\n    text-align: center;\n    margin-top: 2%;\n}\n\n.r_image {\n    max-width: 35%;\n    border-radius: 50%;\n}\n\n.review_others {\n    color: black;\n}\n\n.r_content {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box; \n    -webkit-box-orient:vertical;\n    -webkit-line-clamp:3;\n    margin-bottom: 3%;\n    margin-top: 3%;\n    font-size: 14px;\n    margin-right: 6%;\n    line-height: 1.5;\n    color: rgb(63, 63, 63)\n}\n\n.r_icon {\n    background-color: black;\n    color: white;\n    border-radius: 30%/50%;\n    margin-left: 2%;\n}\n\n.r_star {\n    padding: .375rem .75rem;\n    padding-top: 0.5rem;\n    padding-right: 0.35rem;\n    padding-bottom: 0.3rem;\n    padding-left: 0.75rem;\n}\n\n.r_rate {\n    font-weight: normal;\n    font-size: 15px;\n    margin-right: 1.5%;\n    vertical-align: 0.225em;\n    \n}\n\n.r_title {\n    margin-top: 3%;\n    font-weight: bold;\n    font-size: 20px;\n}\n\n.r_star > svg {\n    vertical-align: -.025em;\n}\n\n.r_time {\n    color: rgb(172, 172, 172);\n    font-size: 16px;\n    margin-top: 5%;\n}\n\n.r_read {\n    margin-bottom: 3%;\n    padding-bottom: 3%;\n    text-decoration: underline;\n    font-size: 14px;\n    color: #3D25A8;\n}\n\n.r_read:hover {\n    color: #3D25A8;\n}\n\n.video {\n    margin-left: 1%;\n}\n\n.alert {\n    margin-top: 5%;\n    font-size: 15px;\n}\n\n.count {\n    color: gray;\n    margin-left: 2%;\n}\n\n@media screen and (max-width:960px) {\n    .mycontainer {\n        margin-top: 20%;\n    }\n\n    .video {\n        margin-left: 0;\n    }\n\n    .basic_info { \n        padding-left: 0;\n        margin-top: 10%;\n    }\n\n    .myrow {\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n    .fb-share-button { \n        margin-left: 2%;\n    }\n\n    .description {\n        text-align: justify;\n    }\n\n    .h5title {\n        margin-top: 8%;\n    }\n\n    .h2title_1 {\n        margin-top: 15%;\n    }\n\n    .h2title_2 {\n        margin-top: 10%;\n    }\n\n    .casts::-webkit-scrollbar {\n        height: 7px;\n    }\n\n    .review .myrow {\n        margin-left: 10px;\n        margin-right: 10px;\n    }\n\n    .r_div {\n        text-align: inherit;\n        margin-left: 15px;\n        margin-top: 15px;\n        margin-bottom: 15px;\n    }\n\n    .r_title {\n        font-size: 20px;\n    }\n\n    .r_icon {\n        margin-left: 0;\n    }\n\n    .div_add {\n        margin-top: 10px;\n    }\n\n    .r_time {\n        margin-top: 25px;\n    }\n\n    .r_content {\n        margin-top: 25px;\n        margin-bottom: 25px;\n    }\n\n    .r_read {\n\n    }\n\n    .r_rate {\n        margin-right: 4%;\n    }\n\n    .review {\n        margin-top: 5%;\n    }\n\n    .subtitle_row {\n        display: inherit;\n    }\n\n    .cast_info {\n        margin-left: 0;\n    }\n\n    .col-md-9 {\n        padding-left: 0;\n        padding-right: 0;\n    }\n\n    .card {\n        margin-right: 12%;\n        margin-bottom: 5%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBOztJQUVBOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y29udGFpbmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA3JTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubXlyb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uYmFzaWNfaW5mbyB7XG4gICAgcGFkZGluZy1yaWdodDogMyU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi50YWdsaW5lIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIGNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEpO1xufVxuXG4ub3RoZXJzIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG59XG5cbi5kaXZpc29yIHtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnRpbWUge1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgXG59XG5cbi5yYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VidGV4dCB7XG4gICAgY29sb3I6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC44MTUpO1xufVxuXG4uZ2VucmVzIHtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5sYW5ndWFnZXMge1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5yZXN0X3JvdyB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuODE1KTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5oNXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5mYi1zaGFyZS1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLm5hdmJhci1uYXYtc3ZnIHtcbiAgICBjb2xvcjogIzFiOTVlMDtcbn1cblxuLmNhc3RzIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2FzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDhweDtcbn1cblxuLmNhc3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjExLCAyMTEsIDAuMTcxKTtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5jYXN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlcjogc29saWQgdGhpbiByZ2IoNzUsIDc1LCA3NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhc3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xufVxuXG4uaDJ0aXRsZV8xIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmgydGl0bGVfMiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jYXJkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XG4gICAgd2hpdGUtc3BhY2U6bm9ybWFsXG59XG5cbi5ib2xkMXtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib2xkMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nIDogMXJlbTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tb2RhbC1ib2R5LmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5zdWJ0aXRsZV9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWFnZV9jYXN0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jYXN0X2luZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnN1Yl9jYXN0X2luZm8ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuLmgydGl0bGVfMSB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5pY29ucyB7XG4gICAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5pY29uIHtcbiAgICBtYXgtd2lkdGg6IDUlO1xuICAgIG1heC1oZWlnaHQ6IDUlO1xufVxuXG4uaWNvbl8xIHtcbiAgICBtYXgtd2lkdGg6IDUlO1xuICAgIG1heC1oZWlnaHQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLm15VG9vbHRpcCAudG9vbHRpcC1pbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG59XG5cbi5teVRvb2x0aXAgLmFycm93OjpiZWZvcmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtncmF5O1xuICAgIC8qIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlOyAqL1xuICAgIC8qIGJvcmRlci1jb2xvcjogcmVkOyAqL1xufVxuXG4ucmV2aWV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG4ucl9kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnJfaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJldmlld19vdGhlcnMge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnJfY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDozO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDYlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYig2MywgNjMsIDYzKVxufVxuXG4ucl9pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzAlLzUwJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yX3N0YXIge1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC4zNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbn1cblxuLnJfcmF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiAwLjIyNWVtO1xuICAgIFxufVxuXG4ucl90aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucl9zdGFyID4gc3ZnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4wMjVlbTtcbn1cblxuLnJfdGltZSB7XG4gICAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5yX3JlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzRDI1QTg7XG59XG5cbi5yX3JlYWQ6aG92ZXIge1xuICAgIGNvbG9yOiAjM0QyNUE4O1xufVxuXG4udmlkZW8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cbi5hbGVydCB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY291bnQge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCkge1xuICAgIC5teWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG5cbiAgICAudmlkZW8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuYmFzaWNfaW5mbyB7IFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG5cbiAgICAubXlyb3cge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5mYi1zaGFyZS1idXR0b24geyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgLmg1dGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICB9XG5cbiAgICAuaDJ0aXRsZV8xIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIH1cblxuICAgIC5oMnRpdGxlXzIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgLmNhc3RzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGhlaWdodDogN3B4O1xuICAgIH1cblxuICAgIC5yZXZpZXcgLm15cm93IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAucl9kaXYge1xuICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAucl90aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucl9pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmRpdl9hZGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5yX3RpbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cblxuICAgIC5yX2NvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cblxuICAgIC5yX3JlYWQge1xuXG4gICAgfVxuXG4gICAgLnJfcmF0ZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgfVxuXG4gICAgLnJldmlldyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZV9yb3cge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5jYXN0X2luZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuY29sLW1kLTkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxufSJdfQ== */"], encapsulation: 2 });
class Cast {
    constructor(id, name, character, profile_path) {
        this.id = id;
        this.name = name;
        this.character = character;
        this.profile_path = profile_path;
    }
}
class CastDetail {
    constructor(birthday, place_of_birth, name, homepage, gender, also_known_as, known_for_department, biography, imdb_id, facebook_id, instagram_id, twitter_id, profile_path) {
        this.birthday = birthday;
        this.place_of_birth = place_of_birth;
        this.name = name;
        this.homepage = homepage;
        this.gender = gender;
        this.also_known_as = also_known_as;
        this.known_for_department = known_for_department;
        this.biography = biography;
        this.imdb_id = imdb_id;
        this.facebook_id = facebook_id;
        this.instagram_id = instagram_id;
        this.twitter_id = twitter_id;
        this.profile_path = profile_path;
    }
}
class Review {
    constructor(author, rating, avatar_path, content, created_at, url) {
        this.author = author;
        this.rating = rating;
        this.avatar_path = avatar_path;
        this.content = content;
        this.created_at = created_at;
        this.url = url;
    }
}


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "F11b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function SearchComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngb-highlight", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r2.name)("term", t_r3);
} }
class SearchComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.formatter = (x) => '';
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => this.service.getSearchResult(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }))));
    }
    onClick(event) {
        if (typeof this.model != 'undefined' && this.model.id != null) {
            // window.location.href = "/watch/" + this.model.media_type + "/" + this.model.id;
            this.router.navigate(["/watch/" + this.model.media_type + "/" + this.model.id]);
            this.model.id = null;
            $(".navbar-collapse").removeClass('show');
        }
    }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], hostBindings: function SearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, decls: 4, vars: 4, consts: [[1, "", 2, "width", "100%"], ["class", "my_type_head"], ["rt", ""], ["id", "typeahead-template", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], [1, "my_type_result"], [1, "s_image", 3, "src"], [3, "result", "term"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_ng_template_1_Template, 3, 3, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], styles: [".dropdown-menu.show {\n    background-color: rgb(3, 3, 36);\n    border: 1px white solid;\n}\n\n.dropdown-menu.show button {\n    color: white;\n}\n\n.s_image {\n    width: 100px;\n    height: 50px;\n    padding-right: 15px;\n}\n\n#typeahead-template {\n    width: 120%; \n    outline: 0 !important;\n    border: 0 !important;\n    border-radius: 0;\n    border-bottom: 1px white solid !important;\n    box-shadow: none;\n    background-color: black;\n    color: white;\n}\n\n@media screen and (max-width:960px) {\n    #typeahead-template {\n        width: 270px;\n        margin-left: 10%;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMywgMzYpO1xuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xufVxuXG4uZHJvcGRvd24tbWVudS5zaG93IGJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jdHlwZWFoZWFkLXRlbXBsYXRlIHtcbiAgICB3aWR0aDogMTIwJTsgXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlIHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTYwcHgpIHtcbiAgICAjdHlwZWFoZWFkLXRlbXBsYXRlIHtcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cbn1cblxuIl19 */", ".form-control { width: 300px; }"], encapsulation: 2 });


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
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail/detail.component */ "rU/F");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: 'mylist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] },
    { path: 'watch/:type/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_0__["DetailComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mobileconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mobileconfig.service */ "E/zD");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");
/* harmony import */ var _subcarousel_subcarousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subcarousel/subcarousel.component */ "Ei/3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");






class MainComponent {
    constructor(mobile_service) {
        this.mobile_service = mobile_service;
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mobileconfig_service__WEBPACK_IMPORTED_MODULE_1__["MobileconfiService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 10, vars: 8, consts: [[3, "input"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-subcarousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "popular_movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "toprate_movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "trending_movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "popular_tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "toprate_tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", "trending_tv");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _subcarousel_subcarousel_component__WEBPACK_IMPORTED_MODULE_4__["SubcarouselComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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