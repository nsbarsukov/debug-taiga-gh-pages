"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[5710],{5710:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-labeled-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRadioLabeledExample2 {\n    items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];\n\n    testForm = new FormGroup({\n        testValue1: new FormControl(this.items[0]),\n    });\n}\n"}}]);