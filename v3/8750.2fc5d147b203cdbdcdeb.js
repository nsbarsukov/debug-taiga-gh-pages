"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[8750],{8750:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeyboardService} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: 'tui-keyboard-example',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiKeyboardExample {\n    value = '';\n\n    constructor(@Inject(TuiKeyboardService) readonly keyboard: TuiKeyboardService) {}\n}\n"}}]);