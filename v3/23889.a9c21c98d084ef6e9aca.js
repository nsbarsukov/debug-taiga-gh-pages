"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[23889],{23889:n=>{n.exports='<p class="b-form">\n    <tui-input-date-range\n        [maxLength]="maxLength"\n        [(ngModel)]="range"\n    >\n        Range\n    </tui-input-date-range>\n</p>\n<tui-axes\n    *ngIf="computeLabels$(range) | async as labels"\n    class="axes"\n    [axisXLabels]="labels"\n    [horizontalLines]="4"\n    [verticalLines]="labels.length"\n>\n    <tui-line-days-chart\n        class="chart"\n        [height]="200"\n        [value]="value"\n        [xStringify]="xStringify$ | async"\n        [yStringify]="yStringify"\n    ></tui-line-days-chart>\n</tui-axes>\n'}}]);