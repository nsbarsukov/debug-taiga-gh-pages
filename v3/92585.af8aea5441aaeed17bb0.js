(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[92585],{92585:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-range-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputRangeExample4 {\n    readonly control = new FormControl([20, 40]);\n\n    // See https://angular.io/api/common/I18nPluralPipe\n    readonly pluralize = {\n        other: '%',\n    };\n}\n"}}]);