"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[49367],{49367:t=>{t.exports='<tui-combo-box\n    class="b-form"\n    [stringify]="\'name\' | tuiStringify"\n    [(ngModel)]="value"\n>\n    Pick your guy\n    <tui-data-list-wrapper\n        *tuiDataList\n        [itemContent]="\'name\' | tuiStringify | tuiStringifyContent"\n        [items]="items | tuiFilterByInputWith: (\'name\' | tuiStringify)"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n'}}]);