"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26706],{26706:t=>{t.exports='<tui-multi-select\n    #component\n    class="b-form"\n    [editable]="false"\n    [expandable]="false"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n>\n    <tui-data-list *tuiDataList>\n        <tui-opt-group\n            label="Jedi, may the force be with them blah blah blah"\n            tuiMultiSelectGroup\n        >\n            <button\n                *ngFor="let item of jedi"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group label="Sith">\n            <button\n                *ngFor="let item of sith | tuiHideSelected"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</tui-multi-select>\n\n<tui-multi-select\n    class="b-form tui-space_top-5"\n    [editable]="false"\n    [expandable]="false"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n>\n    <tui-data-list *tuiDataList>\n        <tui-opt-group\n            label="Jedi, may the force be with them blah blah blah"\n            tuiMultiSelectGroup\n        >\n            <button\n                *ngFor="let item of jedi"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group tuiMultiSelectGroup>\n            <button\n                *ngFor="let item of sith"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</tui-multi-select>\n\n<tui-multi-select\n    class="b-form tui-space_top-5"\n    [editable]="false"\n    [expandable]="false"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n>\n    <tui-data-list *tuiDataList>\n        <tui-opt-group\n            label="Jedi, may the force be with them blah blah blah"\n            tuiMultiSelectGroup\n        >\n            <button\n                *ngFor="let item of jedi"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group\n            label="Jedi, may the force be with them blah blah blah (second time)"\n            tuiMultiSelectGroup\n        >\n            <button\n                *ngFor="let item of sith"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</tui-multi-select>\n'}}]);