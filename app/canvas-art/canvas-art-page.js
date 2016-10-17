"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by heathstein on 9/18/16.
 */
/**
 * Created by 212544474 on 2/23/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */
var core_1 = require("@angular/core");
var canvas_art_1 = require("./canvas-art");
var CanvasArtPage = (function () {
    function CanvasArtPage() {
    }
    CanvasArtPage = __decorate([
        core_1.Component({
            selector: 'canvas-art-page',
            directives: [canvas_art_1.CanvasArt],
            template: "\n   \n        <div class=\"panel panel-primary\" style=\"margin:10px 0px 0px 0px\">\n        <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Particle Swarm</h3>\n        </div>\n        <div class=\"panel-body\">\n          <canvas-art></canvas-art>\n        </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasArtPage);
    return CanvasArtPage;
}());
exports.CanvasArtPage = CanvasArtPage;
//# sourceMappingURL=canvas-art-page.js.map