"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[76989],{76989:n=>{n.exports='<tui-input-range\n    [formControl]="control"\n    [leftValueContent]="valueContent"\n    [max]="10"\n    [min]="0"\n    [pluralize]="pluralize"\n    [rightValueContent]="valueContent"\n>\n    Desired departure day\n</tui-input-range>\n\n<ng-template\n    #valueContent\n    let-value\n>\n    <ng-container [ngSwitch]="value">\n        <span *ngSwitchCase="0">Today</span>\n        <span *ngSwitchCase="1">Tomorrow</span>\n        <span *ngSwitchCase="7">In a week</span>\n        <span *ngSwitchDefault>{{ value }}&nbsp;{{ value | i18nPlural: pluralize }}</span>\n    </ng-container>\n</ng-template>\n'}}]);