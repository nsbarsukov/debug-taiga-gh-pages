(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8332],{8332:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiContext} from '@taiga-ui/cdk';\nimport {TuiDataList} from '@taiga-ui/core';\nimport {TuiDataListWrapper, tuiItemsHandlersProvider} from '@taiga-ui/kit';\nimport {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\ninterface Employee {\n    readonly dept: {\n        readonly id: number;\n        readonly title: string;\n    };\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example8\",\n    imports: [\n        TuiMultiSelectModule,\n        TuiTextfieldControllerModule,\n        ReactiveFormsModule,\n        TuiDataListWrapper,\n        TuiDataList,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiItemsHandlersProvider({\n            identityMatcher: (item1: Employee, item2: Employee) => item1.id === item2.id,\n            stringify: (item: Employee | TuiContext<Employee>) =>\n                'name' in item\n                    ? `${item.name} (${item.dept.title})`\n                    : `${item.$implicit.name} (${item.$implicit.dept.title})`,\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly testValue = new FormControl<Employee[]>([]);\n\n    protected readonly items: readonly Employee[] = [\n        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},\n        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},\n        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},\n        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},\n        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},\n        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},\n    ];\n}\n"}}]);