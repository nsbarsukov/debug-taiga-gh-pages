"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[82584],{82584:n=>{n.exports='<tui-pie-chart\n    [tuiHintContent]="content"\n    [value]="value"\n></tui-pie-chart>\n\n<ng-template\n    #content\n    let-index\n>\n    <tui-money\n        [singleColor]="true"\n        [value]="value[index]"\n    ></tui-money>\n    <div>{{ labels[index] }}</div>\n</ng-template>\n'}}]);