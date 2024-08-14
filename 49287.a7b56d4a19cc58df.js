(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49287],{49287:e=>{e.exports="import {AsyncPipe, isPlatformServer, NgIf} from '@angular/common';\nimport {Component, inject, PLATFORM_ID} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E} from '@taiga-ui/cdk';\nimport {TuiProgress} from '@taiga-ui/kit';\nimport {map, of, startWith, takeWhile, timer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [NgIf, AsyncPipe, TuiProgress],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly max = 100;\n    protected readonly value$ =\n        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))\n            ? of(30)\n            : timer(300, 300).pipe(\n                  map((i) => i + 30),\n                  startWith(30),\n                  takeWhile((value) => value <= this.max),\n              );\n}\n"}}]);