"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[90947],{90947:n=>{n.exports='<tui-carousel\n    [duration]="4000"\n    [(index)]="index"\n>\n    <ng-container *ngFor="let item of items">\n        <tui-island *tuiItem>\n            <h2 class="tui-island__title">{{ item }}</h2>\n            \x3c!-- TODO: update documentation here --\x3e\n            <a\n                href="https://en.wikipedia.org/wiki/{{ item }}"\n                tuiButton\n            >\n                Wiki\n            </a>\n        </tui-island>\n    </ng-container>\n</tui-carousel>\n<tui-pagination\n    size="s"\n    class="pagination"\n    [length]="items.length"\n    [(index)]="index"\n></tui-pagination>\n'}}]);