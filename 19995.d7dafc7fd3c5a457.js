(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19995],{19995:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport type {TuiDialogContext} from '@taiga-ui/core';\nimport {TuiButton, TuiDialogService} from '@taiga-ui/core';\nimport type {PolymorpheusContent} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiButton, TuiAmountPipe, AsyncPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected money = 1000;\n\n    protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {\n        this.dialogs.open(content).subscribe();\n    }\n\n    protected withdraw(): void {\n        this.money -= 100;\n    }\n}\n"}}]);