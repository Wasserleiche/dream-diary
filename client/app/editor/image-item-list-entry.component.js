System.register(['angular2/core', '../model/list-entry', '../model/diary-entry', './item-list-entry.component', '../../node_modules/ng2-file-upload/ng2-file-upload'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, list_entry_1, diary_entry_1, item_list_entry_component_1, ng2_file_upload_1;
    var ImageItemListEntry;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (list_entry_1_1) {
                list_entry_1 = list_entry_1_1;
            },
            function (diary_entry_1_1) {
                diary_entry_1 = diary_entry_1_1;
            },
            function (item_list_entry_component_1_1) {
                item_list_entry_component_1 = item_list_entry_component_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            }],
        execute: function() {
            ImageItemListEntry = (function (_super) {
                __extends(ImageItemListEntry, _super);
                function ImageItemListEntry() {
                    _super.apply(this, arguments);
                }
                ImageItemListEntry.prototype.ngOnInit = function () {
                    var imageSize = '100';
                    this.baseUrl = 'http://localhost:8080/images/' + this.diaryEntry.id;
                    this.imageUrl = this.baseUrl + '/' + this.listEntry.name + '/?width=' + imageSize + '&height=' + imageSize;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: this.baseUrl });
                    this.uploader.queueLimit = 99;
                    this.listEntry.uploader = this.uploader;
                };
                ImageItemListEntry.prototype.showFullImage = function () {
                    window.open(this.baseUrl + '/' + this.listEntry.name + '/');
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', list_entry_1.ListEntry)
                ], ImageItemListEntry.prototype, "listEntry", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Array)
                ], ImageItemListEntry.prototype, "listContainer", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', diary_entry_1.DiaryEntry)
                ], ImageItemListEntry.prototype, "diaryEntry", void 0);
                ImageItemListEntry = __decorate([
                    core_1.Component({
                        selector: 'image-item-list-entry',
                        templateUrl: 'app/editor/image-item-list-entry.component.html',
                        styleUrls: ['app/editor/image-item-list-entry.component.css'],
                        directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImageItemListEntry);
                return ImageItemListEntry;
            }(item_list_entry_component_1.ItemListEntry));
            exports_1("ImageItemListEntry", ImageItemListEntry);
        }
    }
});
//# sourceMappingURL=image-item-list-entry.component.js.map