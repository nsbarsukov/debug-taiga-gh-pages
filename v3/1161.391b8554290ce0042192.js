(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[1161],{1161:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-inline-example-2',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputInlineExample2 {\n    heading = 'Page heading';\n    editing = false;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alerts: TuiAlertService,\n    ) {}\n\n    toggle(): void {\n        this.editing = !this.editing;\n    }\n\n    onFocusedChange(focused: boolean): void {\n        if (!focused) {\n            this.editing = false;\n            this.saveHeading(this.heading);\n        }\n    }\n\n    private saveHeading(newHeading: string): void {\n        this.alerts.open(newHeading, {label: 'New heading'}).subscribe();\n    }\n}\n"}}]);