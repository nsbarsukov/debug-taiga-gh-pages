(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[79820],{79820:n=>{n.exports="import {Component, OnInit} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPlatform} from '@taiga-ui/cdk';\nimport {TuiSizeS} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-checkbox-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiCheckboxExample1 implements OnInit {\n    readonly platforms: readonly TuiPlatform[] = ['web', 'web', 'android', 'ios'];\n    readonly invalidTrue = new FormControl(true, () => ({invalid: true}));\n    readonly invalidFalse = new FormControl(false, () => ({invalid: true}));\n\n    ngOnInit(): void {\n        this.invalidTrue.markAsTouched();\n        this.invalidFalse.markAsTouched();\n    }\n\n    getSize(first: boolean): TuiSizeS {\n        return first ? 'm' : 's';\n    }\n}\n"}}]);