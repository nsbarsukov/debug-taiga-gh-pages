(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51407],{51407:t=>{t.exports='<tui-select\n    [valueContent]="content"\n    [(ngModel)]="value"\n>\n    Bank and account\n    <ng-template tuiDataList>\n        <tui-data-list>\n            <tui-opt-group>\n                <button\n                    tuiOption\n                    [value]="all"\n                >\n                    All\n                </button>\n            </tui-opt-group>\n            <tui-opt-group label="Best bank">\n                <tui-opt-group tuiMultiSelectGroup>\n                    <button\n                        *ngFor="let item of bank"\n                        tuiOption\n                        [value]="item"\n                    >\n                        <span tuiTitle>\n                            {{ item.name }}\n                            <span tuiSubtitle>{{ item.account }}</span>\n                        </span>\n                    </button>\n                </tui-opt-group>\n            </tui-opt-group>\n            <tui-opt-group label="Other banks">\n                <tui-opt-group tuiMultiSelectGroup>\n                    <button\n                        *ngFor="let item of others"\n                        tuiOption\n                        [value]="item"\n                    >\n                        <span tuiTitle>\n                            {{ item.name }}\n                            <span tuiSubtitle>{{ item.account }}</span>\n                        </span>\n                    </button>\n                </tui-opt-group>\n            </tui-opt-group>\n            <tui-opt-group tuiMultiSelectGroup>\n                <button\n                    tuiOption\n                    [value]="cash"\n                >\n                    Cash\n                </button>\n            </tui-opt-group>\n        </tui-data-list>\n    </ng-template>\n</tui-select>\n'}}]);