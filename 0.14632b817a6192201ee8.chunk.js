webpackJsonp([0,8],{"4yVv":function(t,e,o){"use strict";var r=o("3j3K");o.d(e,"a",function(){return c});var n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.book={Id:908,Name:"THE FELLOWSHIP OF THE RING",Price:9,Author:" J. R. R. Tolkien",PictureURL:"http://www.tolkien.co.uk/file/IfbTdA8/e48239f6-ba35-4e69-858e-efd680f449b0.jpg",Rating:5}}return t.prototype.ngOnInit=function(){},t}();c=n([o.i(r.Component)({selector:"app-book",template:o("ZefL"),styles:[o("fdDo")]}),i("design:paramtypes",[])],c)},"6Lqj":function(t,e){t.exports='<div class="container">\r\n    <div class="row">\r\n        <div class="col-sm-6 col-md-4 col-lg-3 mt-4" *ngFor="let book of books">\r\n            <div class="card">\r\n                <img class="card-img-top" src="{{book?.PictureURL}}">\r\n                <div class="card-block">\r\n                    <h6 class="card-title">{{book.Name}}</h6>\r\n                    <div class="details-btn">\r\n                        <a (click)="goToBook(book)" class="btn btn-block btn-primary">\r\n                            Details\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},ZefL:function(t,e){t.exports='<div class="container">\r\n    <div class="row">\r\n        <div class="col-lg-6 mt-4">\r\n            <div class="card">\r\n                <img class="card-img-top" src="{{book?.PictureURL}}">\r\n                <div class="card-block">\r\n                    <h6 class="card-title">{{book.Name}}</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},bGqU:function(t,e,o){e=t.exports=o("FZ+f")(),e.push([t.i,"img{height:300px}.details-btn{color:#fff;cursor:pointer}",""]),t.exports=t.exports.toString()},di6R:function(t,e,o){"use strict";var r=o("3j3K"),n=o("5oXY");o.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e){this.router=t,this.route=e,this.books=[]}return t.prototype.ngOnInit=function(){this.books.push({Id:908,Name:"THE FELLOWSHIP OF THE RING",Price:9,Author:" J. R. R. Tolkien",PictureURL:"http://www.tolkien.co.uk/file/IfbTdA8/e48239f6-ba35-4e69-858e-efd680f449b0.jpg",Rating:5},{Id:910,Name:"THE RETURN OF THE KING",Price:13,Author:" J. R. R. Tolkien",PictureURL:"http://www.tolkien.co.uk/file/IfbTdA8/fc3a59a7-1abc-4be2-96ce-83266a98a2e8.jpg",Rating:4},{Id:912,Name:"Harry Potter and the Philosopher's Stone",Price:10,Author:"J. K. Rowling",PictureURL:"http://t0.gstatic.com/images?q=tbn:ANd9GcSXGpfJzjAobQVs1AmpnWQf4amf8RzgLbc7twV6nOLncOwASjUM",Rating:4},{Id:913,Name:"Harry Potter and the Chamber of Secrets",Price:13,Author:"J. K. Rowling",PictureURL:"http://t0.gstatic.com/images?q=tbn:ANd9GcS4oHYYPXATs31IpUW4VWiX0KTuxLgDr-hLQ0Ov4_WPfPTvk8Zt",Rating:5})},t.prototype.goToBook=function(t){this.router.navigate(["book",t.Id,t.Name],{relativeTo:this.route})},t}();a=i([o.i(r.Component)({selector:"app-books",template:o("6Lqj"),styles:[o("bGqU")]}),c("design:paramtypes",["function"==typeof(s=void 0!==n.Router&&n.Router)&&s||Object,"function"==typeof(f=void 0!==n.ActivatedRoute&&n.ActivatedRoute)&&f||Object])],a);var s,f},fdDo:function(t,e,o){e=t.exports=o("FZ+f")(),e.push([t.i,"",""]),t.exports=t.exports.toString()},ry84:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("3j3K"),n=o("2Je8"),i=o("5oXY"),c=o("4yVv"),a=o("di6R");o.d(e,"BooksModule",function(){return l});var s=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},f=[{path:"",component:a.a},{path:"book/:id/:breadcrumb",component:c.a}],l=function(){function t(){}return t}();l=s([o.i(r.NgModule)({imports:[n.CommonModule,i.RouterModule.forChild(f)],declarations:[a.a,c.a]})],l)}});