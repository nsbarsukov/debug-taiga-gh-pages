(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49713],{49713:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHint, tuiNumberFormatProvider} from '@taiga-ui/core';\nimport {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiInputNumberModule, TuiHint, TuiTextfieldControllerModule, FormsModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiNumberFormatProvider({decimalSeparator: '.', thousandSeparator: ','})],\n})\nexport default class Example {\n    protected value = 1234.56;\n}\n"}}]);