"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[41133],{41133:n=>{n.exports='```html\n<tui-root>\n  Your app\n  <nav\n    tuiTabBar\n    ngProjectAs="tuiOverContent"\n  >\n    <a\n      *ngFor="let item of items"\n      tuiTabBarItem\n      routerLinkActive\n      [routerLink]="item.path"\n      [icon]="item.icon"\n    >\n      {{ item.text}}\n    </a>\n  </nav>\n</tui-root>\n```\n'}}]);