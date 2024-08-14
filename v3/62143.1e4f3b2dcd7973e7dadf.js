(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[62143],{62143:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService, TuiSizeL, TuiSizeS} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-data-list-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDataListExample2 {\n    dropdownOpen = false;\n    size: TuiSizeL | TuiSizeS = 's';\n\n    readonly burgers = ['Classic', 'Cheeseburger', 'Royal Cheeseburger'];\n    readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];\n\n    constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}\n\n    selectOption(item: string): void {\n        this.dropdownOpen = false;\n        this.dialogs.open(`You selected ${item}`).subscribe();\n    }\n}\n"}}]);