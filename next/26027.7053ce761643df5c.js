(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26027],{26027:n=>{n.exports='<button\n    tuiButton\n    type="button"\n    (click)="toggle(true)"\n>\n    Show/Hide\n</button>\n\n<ng-template\n    [tuiSheetDialog]="open"\n    [tuiSheetDialogOptions]="{stops: [\'29rem\'], offset: offset}"\n    (tuiSheetDialogChange)="toggle($event)"\n>\n    <header class="header">\n        <tui-input\n            tuiTextfieldIconLeft="@tui.search"\n            [formControl]="search"\n            (mousedown.prevent)="onFocus()"\n        >\n            Find user\n        </tui-input>\n    </header>\n    <div\n        class="container"\n        [style.height]="height$ | async"\n        (tuiSwipe)="onSwipe($event.direction)"\n    >\n        <button\n            *ngFor="let user of users$ | async"\n            class="item"\n            (click)="toggle(false)"\n        >\n            <tui-avatar\n                size="s"\n                [src]="user | tuiInitials"\n                [style.background]="user | tuiAutoColor"\n            />\n            {{ user }}\n        </button>\n    </div>\n    <footer class="footer">\n        <button\n            tuiButton\n            (click)="toggle(false)"\n        >\n            Invite more users\n        </button>\n        Opens a separate app\n    </footer>\n</ng-template>\n'}}]);