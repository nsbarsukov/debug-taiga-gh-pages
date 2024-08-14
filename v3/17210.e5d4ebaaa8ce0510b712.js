"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[17210],{17210:t=>{t.exports='<form\n    class="form"\n    [formGroup]="testForm"\n>\n    <tui-select\n        formControlName="testValue"\n        [valueContent]="cardContent"\n    >\n        Choose a card\n        <tui-data-list-wrapper\n            *tuiDataList\n            [itemContent]="cardContent"\n            [items]="cards"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        formControlName="testValue"\n        class="tui-space_vertical-5"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="cardContent"\n    >\n        Choose a card\n        <tui-data-list-wrapper\n            *tuiDataList\n            [itemContent]="cardContent"\n            [items]="cards"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        formControlName="accounts"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="accountContent"\n    >\n        Choose an account\n        <tui-data-list-wrapper\n            *tuiDataList\n            [itemContent]="accountContent"\n            [items]="accounts"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <ng-template\n        #cardContent\n        let-item\n    >\n        <div class="card-item">\n            <tui-thumbnail-card\n                paymentSystem="mastercard"\n                size="s"\n                class="card"\n                [cardNumber]="item.cardNumber.slice(1)"\n            ></tui-thumbnail-card>\n            <span class="card-name">{{ item.cardName }}</span>\n            <span class="card-number">{{ item.cardNumber }}</span>\n        </div>\n    </ng-template>\n    <ng-template\n        #accountContent\n        let-account\n    >\n        <div class="account">\n            {{ account.name }}\n            <tui-money [value]="account.amount"></tui-money>\n        </div>\n    </ng-template>\n</form>\n'}}]);