(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58517],{58517:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiTablePagination,\n    tuiTablePaginationOptionsProvider,\n} from '@taiga-ui/addon-table';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiTablePagination],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiTablePaginationOptionsProvider({\n            showPages: false,\n        }),\n    ],\n})\nexport default class Example {\n    protected total = 350;\n    protected sizeOptions = [10, 50, 100, this.total];\n}\n"}}]);