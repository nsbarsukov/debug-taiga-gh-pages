(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93728],{93728:e=>{e.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSurface} from '@taiga-ui/core';\nimport {TuiRange} from '@taiga-ui/kit';\nimport {TuiCardLarge} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        TuiCardLarge,\n        TuiSurface,\n        TuiRange,\n        FormsModule,\n        JsonPipe,\n        ReactiveFormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected smallRangeValue = [0, 40];\n\n    protected readonly bigRangeControl = new FormControl([40, 60]);\n}\n"}}]);