"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12662],{12662:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {switchMap} from 'rxjs/operators';\n\nimport {PromptService} from './prompt/prompt.service';\n\n@Component({\n    selector: 'tui-dialogs-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiDialogsExample1 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alerts: TuiAlertService,\n        @Inject(PromptService) private readonly promptService: PromptService,\n    ) {}\n\n    onClick(\n        choose: PolymorpheusContent,\n        poorly: PolymorpheusContent,\n        wisely: PolymorpheusContent,\n    ): void {\n        this.promptService\n            .open(choose, {\n                heading: 'Taiga UI is the best',\n                buttons: ['Absolutely!', 'No way!'],\n            })\n            .pipe(\n                switchMap(response =>\n                    response\n                        ? this.alerts.open(wisely, {\n                              status: 'success',\n                          })\n                        : this.alerts.open(poorly, {\n                              status: 'error',\n                          }),\n                ),\n            )\n            .subscribe();\n    }\n}\n"}}]);