"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[16096],{16096:n=>{n.exports="import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk';\nimport {TUI_SANITIZER, TuiSvgService} from '@taiga-ui/core';\nimport {tuiIconClockLarge, tuiIconMaestro, tuiIconMastercard} from '@taiga-ui/icons';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\nimport {timer} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nimport {INLINE_SVG} from './inline-svg';\n\n@Component({\n    selector: 'tui-icons-bundled-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_SANITIZER,\n            useClass: NgDompurifySanitizer,\n        },\n    ],\n})\nexport class TuiIconsBundledExample1 {\n    readonly timeout$ = timer(0).pipe(map(ALWAYS_TRUE_HANDLER));\n\n    readonly imageUrl = assets`/images/ts.svg#ts`;\n\n    readonly svg = INLINE_SVG;\n\n    readonly tuiIconClockLarge =\n        this.sanitizer.bypassSecurityTrustHtml(tuiIconClockLarge);\n\n    constructor(\n        @Inject(TuiSvgService) svgService: TuiSvgService,\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n    ) {\n        svgService.define({\n            customTuiIconMaestro: tuiIconMaestro,\n            customTuiIconMastercard: tuiIconMastercard,\n        });\n    }\n}\n"}}]);