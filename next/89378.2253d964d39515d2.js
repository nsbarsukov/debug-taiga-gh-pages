(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89378],{89378:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHint, TuiIcon} from '@taiga-ui/core';\nimport {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example7\",\n    imports: [\n        TuiInputModule,\n        TuiHint,\n        ReactiveFormsModule,\n        TuiIcon,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl('', [\n        Validators.required,\n        Validators.minLength(5),\n    ]);\n}\n"}}]);