(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[19696],{19696:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';\nimport {Subject, timer} from 'rxjs';\nimport {map, startWith, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-button-example-4',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiButtonExample4 {\n    readonly trigger$ = new Subject();\n    readonly loading$ = this.trigger$.pipe(\n        switchMap(() =>\n            timer(2000).pipe(map(ALWAYS_FALSE_HANDLER), startWith('Loading')),\n        ),\n    );\n}\n"}}]);