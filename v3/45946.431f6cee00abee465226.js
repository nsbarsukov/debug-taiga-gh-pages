"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[45946],{45946:e=>{e.exports='<tui-tree\n    *ngFor="let item of data.children"\n    [childrenHandler]="handler"\n    [content]="content"\n    [tuiTreeController]="true"\n    [value]="item"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    <tui-checkbox-labeled\n        class="tui-space_vertical-2 tui-space_left-1"\n        [ngModel]="item | tuiMapper: getValue : map"\n        (ngModelChange)="onChecked(item, $event)"\n    >\n        {{ item.text }}\n    </tui-checkbox-labeled>\n</ng-template>\n'}}]);