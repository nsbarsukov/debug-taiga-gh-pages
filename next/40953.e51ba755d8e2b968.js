(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40953],{40953:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiNumberFormat, tuiNumberFormatProvider} from '@taiga-ui/core';\nimport {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [\n        TuiInputNumberModule,\n        TuiTextfieldControllerModule,\n        TuiNumberFormat,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [tuiNumberFormatProvider({decimalSeparator: ',', thousandSeparator: '.'})],\n})\nexport default class Example {\n    protected value = 123.56;\n}\n"}}]);