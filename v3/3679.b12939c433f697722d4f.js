"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[3679],{3679:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCreateTimePeriods} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-time-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputTimeExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    items1 = tuiCreateTimePeriods();\n    items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);\n}\n"}}]);