(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33950],{33950:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPagination} from '@taiga-ui/kit';\nimport {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        TuiInputSliderModule,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        TuiPagination,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Page {\n    protected length = 64;\n\n    protected index = 10;\n\n    protected goToPage(index: number): void {\n        this.index = index;\n        console.info('New page:', index);\n    }\n}\n"}}]);