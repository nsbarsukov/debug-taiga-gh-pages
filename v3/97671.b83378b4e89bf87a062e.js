(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[97671],{97671:n=>{n.exports='<tui-breadcrumbs [style.color]="\'red\'">\n    <tui-hosted-dropdown\n        *tuiItem\n        [content]="content"\n    >\n        <button\n            appearance="secondary"\n            icon="tuiIconMoreHorizontal"\n            size="xs"\n            title="More"\n            tuiIconButton\n        ></button>\n        <ng-template #content>\n            <tui-data-list>\n                <a\n                    *tuiRepeatTimes="let index of items.length - max"\n                    tuiOption\n                    [href]="items[index].link"\n                >\n                    {{ items[index].caption }}\n                </a>\n            </tui-data-list>\n        </ng-template>\n    </tui-hosted-dropdown>\n    <ng-container *tuiRepeatTimes="let index of max">\n        <a\n            *tuiItem\n            tuiLink\n            [href]="items[index + items.length - max].link"\n        >\n            {{ items[index + items.length - max].caption }}\n        </a>\n    </ng-container>\n</tui-breadcrumbs>\n<p>\n    <tui-input-number\n        class="b-form"\n        [max]="4"\n        [min]="2"\n        [step]="1"\n        [(ngModel)]="max"\n    >\n        Max tabs\n    </tui-input-number>\n</p>\n'}}]);