(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9295],{9295:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-error-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiErrorExample1 {\n    enabled = false;\n\n    error = new TuiValidationError('An error');\n\n    get computedError(): TuiValidationError | null {\n        return this.enabled ? this.error : null;\n    }\n}\n"}}]);