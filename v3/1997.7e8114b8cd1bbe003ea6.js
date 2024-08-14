"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[1997],{1997:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-range-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputRangeExample5 {\n    readonly control = new FormControl([100_000, 500_000]);\n    readonly max = 1_000_000;\n    readonly min = 0;\n    readonly totalSteps = 100;\n    readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];\n    readonly segments = this.ticksLabels.length - 1;\n\n    readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [0, this.min],\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n        [100, this.max],\n    ];\n}\n"}}]);