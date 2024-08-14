"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[48536],{48536:n=>{n.exports='<tui-combo-box\n    tuiDropdownMobile\n    [tuiTextfieldCleaner]="true"\n    [(ngModel)]="country"\n>\n    Country\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="countries | tuiFilterByInput"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n\n<tui-select\n    class="tui-space_vertical-4"\n    [tuiDropdownMobile]="\'Select user\'"\n    [tuiTextfieldLabelOutside]="true"\n    [valueContent]="template"\n    [(ngModel)]="user"\n>\n    Select user\n    <tui-data-list-wrapper\n        *tuiDataList\n        [itemContent]="template"\n        [items]="users"\n    ></tui-data-list-wrapper>\n</tui-select>\n\n<tui-multi-select\n    tuiDropdownMobile\n    class="tui-space_vertical-4"\n    [stringify]="stringify"\n    [tuiDropdownOpen]="!!(open$ | async)"\n    [tuiTextfieldCleaner]="true"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="selected"\n    (tuiDropdownOpenChange)="open$.next($event)"\n>\n    Pick more users\n    <ng-container *tuiDataList>\n        <tui-data-list-wrapper\n            tuiMultiSelectGroup\n            [itemContent]="template"\n            [items]="users | tuiFilterByInputWith: stringify"\n        ></tui-data-list-wrapper>\n        <button\n            appearance="accent"\n            size="m"\n            tuiButton\n            tuiDropdownButton\n            (click)="open$.next(false)"\n        >\n            Done\n        </button>\n    </ng-container>\n</tui-multi-select>\n\n<tui-input-number\n    tuiTextfieldPrefix="$"\n    [(ngModel)]="sum"\n>\n    Sum\n    <input tuiTextfield />\n</tui-input-number>\n\n<ng-template\n    #template\n    let-user\n>\n    <span tuiCell>\n        <tui-avatar [src]="user.url"></tui-avatar>\n        <span tuiTitle>\n            {{ user.name }}\n            <span tuiSubtitle>\n                {{ user.balance | tuiAmount: \'$\' : \'left\' | async }}\n            </span>\n        </span>\n    </span>\n</ng-template>\n'}}]);