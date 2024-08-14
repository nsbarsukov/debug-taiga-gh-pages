"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[69667],{69667:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-tabs-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTabsExample6 {\n    activeItemIndex = 0;\n\n    readonly steps = ['Sales', 'Settings', 'News'];\n\n    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}\n\n    onClick(item: string): void {\n        this.alerts.open(item).subscribe();\n    }\n}\n"}}]);