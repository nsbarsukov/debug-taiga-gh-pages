(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69599],{69599:n=>{n.exports='<button\n    appearance="flat"\n    iconEnd="@tui.chevron-right"\n    size="m"\n    tuiButton\n    tuiDropdownAlign="right"\n    type="button"\n    [tuiAppearanceState]="open ? \'active\' : null"\n    [tuiDropdown]="dropdown"\n    [tuiDropdownSided]="true"\n    [(tuiDropdownOpen)]="open"\n>\n    Button\n</button>\n<ng-template\n    #dropdown\n    let-close\n>\n    <tui-data-list>\n        <tui-opt-group>\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                (click)="onClick()"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group>\n            <button\n                tuiOption\n                (click)="close()"\n            >\n                Nevermind\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);