(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9057],{9057:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-sidebar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSidebarExample1 {\n    open = false;\n\n    readonly webApis = ['Common', 'Audio', 'Canvas', 'Geolocation', 'MIDI', 'Workers'];\n\n    readonly links = ['Taiga-UI', 'ng-event-plugins', 'ng-polymorpheus', 'ng-dompurify'];\n\n    toggle(open: boolean): void {\n        this.open = open;\n    }\n}\n"}}]);