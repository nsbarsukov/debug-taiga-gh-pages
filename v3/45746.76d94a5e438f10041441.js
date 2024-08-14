"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[45746],{45746:e=>{e.exports="import {Component, ElementRef, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAsViewport, TuiRectAccessor} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-viewport-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiAsViewport(TuiViewportExample1)],\n})\nexport class TuiViewportExample1 extends TuiRectAccessor {\n    readonly type = 'viewport';\n\n    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {\n        super();\n    }\n\n    getClientRect(): ClientRect {\n        return this.el.nativeElement.getBoundingClientRect();\n    }\n}\n"}}]);