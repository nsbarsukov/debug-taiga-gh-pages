"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[23996],{23996:n=>{n.exports='<p>\n    Your balance:\n    <tui-money [value]="money"></tui-money>\n</p>\n<button\n    size="m"\n    tuiButton\n    type="button"\n    class="tui-space_right-3"\n    (click)="showWithdrawAlert()"\n>\n    Withdraw\n</button>\n<button\n    size="m"\n    tuiButton\n    type="button"\n    class="tui-space_right-3"\n    (click)="showDepositAlert()"\n>\n    Add\n</button>\n<p>\n    <button\n        size="m"\n        tuiButton\n        type="button"\n        (click)="withdraw()"\n    >\n        Withdraw&nbsp;\n        <tui-money [value]="100"></tui-money>\n    </button>\n</p>\n\n<ng-template\n    #withdrawTemplate="polymorpheus"\n    polymorpheus\n>\n    <p>Notifications can be shown with template</p>\n    <p>\n        Your balance:\n        <tui-money [value]="money"></tui-money>\n    </p>\n    <button\n        appearance="outline"\n        size="m"\n        tuiButton\n        tuiMode="onLight"\n        type="button"\n        (click)="withdraw()"\n    >\n        Withdraw&nbsp;\n        <tui-money [value]="100"></tui-money>\n    </button>\n</ng-template>\n\n<ng-template\n    #depositTemplate="polymorpheus"\n    polymorpheus\n>\n    <p>\n        If there are many templates, you can use\n        <code>ViewChildren</code>\n        instead of\n        <code>ViewChild</code>\n        or set them IDs with "#" (see code of this sample)\n    </p>\n    <p>\n        Your balance:\n        <tui-money [value]="money"></tui-money>\n    </p>\n    <button\n        appearance="outline"\n        size="m"\n        tuiButton\n        tuiMode="onLight"\n        type="button"\n        (click)="deposit()"\n    >\n        Add&nbsp;\n        <tui-money [value]="100"></tui-money>\n    </button>\n</ng-template>\n'}}]);