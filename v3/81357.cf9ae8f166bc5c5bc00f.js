"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[81357],{81357:e=>{e.exports='<tui-textarea\n    #textarea\n    spellcheck="false"\n    tuiDropdownSelectionPosition="word"\n    [pseudoFocus]="(driver | async) || null"\n    [tuiDropdown]="dropdown"\n    [tuiDropdownSelection]="predicate"\n    [(ngModel)]="value"\n    (keydown.arrowDown)="onArrow($event, \'first\')"\n    (keydown.arrowUp)="onArrow($event, \'last\')"\n>\n    Type a message\n</tui-textarea>\n<ng-template #dropdown>\n    <tui-data-list\n        *ngIf="textarea.nativeFocusableElement"\n        class="menu"\n        (keydown.escape)="textarea.nativeFocusableElement.focus()"\n    >\n        <button\n            *ngFor="let item of filterItems(textarea.nativeFocusableElement)"\n            tuiOption\n            (click)="onClick(item.login, textarea.nativeFocusableElement)"\n        >\n            {{ item.name }}\n            <tui-avatar\n                size="s"\n                [avatarUrl]="item.avatar"\n                [rounded]="true"\n                [text]="item.name"\n            ></tui-avatar>\n        </button>\n    </tui-data-list>\n</ng-template>\n'}}]);