"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[5287],{5287:n=>{n.exports="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {tuiDropdownAnimation, TuiDurationOptions} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-dropdown-example',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    animations: [tuiDropdownAnimation],\n})\nexport class TuiDropdownExample {\n    @Input()\n    speed = 0;\n\n    isOpen = false;\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: '', params: {duration}};\n    }\n}\n"}}]);