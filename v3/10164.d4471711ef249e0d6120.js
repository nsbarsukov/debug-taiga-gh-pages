"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[10164],{10164:t=>{t.exports='<div\n    tuiCardMedium\n    tuiSurface="elevated"\n>\n    <tui-avatar-stack direction="left">\n        <tui-avatar\n            *ngFor="let url of urls"\n            size="s"\n            [round]="true"\n            [src]="url | tuiFallbackSrc: \'tuiIconUserLarge\' | async"\n            [style.background]="url | tuiAutoColor"\n        ></tui-avatar>\n    </tui-avatar-stack>\n\n    <h2 tuiTitle>\n        Title\n        <span tuiSubtitle>Subtitle</span>\n    </h2>\n</div>\n\n<div\n    tuiCardMedium\n    tuiSurface="elevated"\n>\n    <h2 tuiTitle>\n        Title\n        <span tuiSubtitle>Subtitle</span>\n    </h2>\n\n    <tui-avatar-stack direction="left">\n        <tui-avatar\n            *ngFor="let url of urls"\n            size="s"\n            [round]="true"\n            [src]="url | tuiFallbackSrc: \'tuiIconUserLarge\' | async"\n            [style.background]="url | tuiAutoColor"\n        ></tui-avatar>\n    </tui-avatar-stack>\n</div>\n'}}]);