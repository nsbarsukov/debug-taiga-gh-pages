(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21409],{21409:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileCalendar} from '@taiga-ui/addon-mobile';\nimport {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';\nimport {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiMobileCalendar],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_FIRST_DAY_OF_WEEK,\n            useValue: TuiDayOfWeek.Sunday,\n        },\n    ],\n})\nexport default class Example {\n    protected min = TuiDay.currentLocal();\n}\n"}}]);