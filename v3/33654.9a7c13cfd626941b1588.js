(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[33654],{33654:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAssert} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMiscellaneousExample1 {\n    get assertResult(): string {\n        const dayOfWeek = new Date().getDay();\n        const isFriday = dayOfWeek === 5;\n\n        ngDevMode && tuiAssert.assert(isFriday, 'Today is not a friday');\n\n        return isFriday\n            ? 'Nothing in console'\n            : 'There is a console assert: <br> \"Today is not a friday\"';\n    }\n}\n"}}]);