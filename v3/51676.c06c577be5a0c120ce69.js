"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51676],{51676:t=>{t.exports='<tui-input [(ngModel)]="text">Type a text to start computing</tui-input>\n<div class="tui-space_top-2">Called times: {{ counter.count }}</div>\n<div\n    *ngIf="show"\n    class="tui-space_top-2"\n>\n    Result: {{ calculate(counter, text) | json }}\n</div>\n<button\n    tuiButton\n    type="button"\n    class="tui-space_top-2"\n    (click)="show = !show"\n>\n    Show/hide\n</button>\n'}}]);