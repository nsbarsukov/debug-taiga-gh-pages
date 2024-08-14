"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[58458],{58458:n=>{n.exports='<div\n    tuiMode="onDark"\n    class="wrapper"\n>\n    <h1 class="tui-text_h3 title">Monty Python</h1>\n    <tui-tabs-with-more\n        class="tabs"\n        [activeItemIndex]="activeItemIndex"\n        [moreContent]="more"\n    >\n        <ng-container *ngFor="let tab of tabs">\n            <ng-container *ngIf="isString(tab); else submenu">\n                <button\n                    *tuiItem\n                    tuiTab\n                    (click)="onClick(tab)"\n                >\n                    {{ tab }}\n                </button>\n            </ng-container>\n            <ng-template #submenu>\n                <tui-hosted-dropdown\n                    *tuiItem\n                    #hosted\n                    [content]="dropdown"\n                >\n                    <button\n                        tuiTab\n                        (tui-tab-activate)="stop($event)"\n                    >\n                        Collaborators\n                        <tui-svg\n                            src="tuiIconChevronDown"\n                            class="icon"\n                            [class.icon_rotated]="hosted.open"\n                        ></tui-svg>\n                    </button>\n                </tui-hosted-dropdown>\n            </ng-template>\n        </ng-container>\n    </tui-tabs-with-more>\n</div>\n<section class="content">Currently active: {{ activeElement }}</section>\n<ng-template\n    #dropdown\n    let-activeZone\n    let-close="close"\n>\n    <tui-data-list [tuiActiveZoneParent]="activeZone">\n        <button\n            *ngFor="let collaborator of collaborators"\n            tuiOption\n            (click)="onClick(collaborator); close()"\n        >\n            {{ collaborator }}\n        </button>\n    </tui-data-list>\n</ng-template>\n<ng-template #more>\n    <tui-svg src="tuiIconMoreHorizontalLarge"></tui-svg>\n</ng-template>\n'}}]);