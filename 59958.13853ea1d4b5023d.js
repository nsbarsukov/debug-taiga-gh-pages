(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59958],{59958:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDataList, TuiDropdown, TuiLink} from '@taiga-ui/core';\nimport {TuiChevron, TuiDataListDropdownManager, TuiLineClamp} from '@taiga-ui/kit';\n\nfunction randomString(len: number): string {\n    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n    let randomString = '';\n\n    for (let i = 0; i < len; i++) {\n        const randomPoz = Math.floor(Math.random() * charSet.length);\n\n        // eslint-disable-next-line unicorn/prefer-string-slice\n        randomString += charSet.substring(randomPoz, randomPoz + 1);\n    }\n\n    return randomString;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [\n        TuiChevron,\n        TuiLink,\n        TuiDropdown,\n        TuiDataListDropdownManager,\n        NgForOf,\n        TuiLineClamp,\n        TuiDataList,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n    protected texts = [\n        randomString(100),\n        // eslint-disable-next-line @typescript-eslint/quotes\n        \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\n        randomString(500),\n    ];\n}\n"}}]);