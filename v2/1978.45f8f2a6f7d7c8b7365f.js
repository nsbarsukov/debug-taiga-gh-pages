(window.webpackJsonp=window.webpackJsonp||[]).push([[1978],{dwVM:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject, Renderer2} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk/tokens';\n\n@Component({\n    selector: 'tui-token-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample1 {\n    style = this.renderer.createElement('style');\n\n    constructor(@Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2) {}\n}\n"}}]);