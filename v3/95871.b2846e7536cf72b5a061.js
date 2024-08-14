"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[95871],{95871:n=>{n.exports='<div class="tui-container">\n    <div class="stepper">\n        <tui-stepper [activeItemIndex]="0">\n            <button tuiStep>First step</button>\n            <button\n                tuiStep\n                [disabled]="true"\n            >\n                Second step\n            </button>\n            <button\n                tuiStep\n                [disabled]="true"\n            >\n                Third step\n            </button>\n            <button\n                tuiStep\n                [disabled]="true"\n            >\n                Fourth step\n            </button>\n        </tui-stepper>\n    </div>\n    <form [formGroup]="testForm">\n        <div class="tui-row tui-row_sme">\n            <div class="tui-col_8">\n                <h3 class="tui-form__header tui-form__header_margin-top_none">A header</h3>\n                <div class="tui-form__row">\n                    <tui-input\n                        formControlName="nameValue"\n                        tuiHintContent="A tooltip"\n                    >\n                        Textfield\n                        <input\n                            placeholder="Field placeholder"\n                            tuiTextfield\n                        />\n                        <span class="tui-required"></span>\n                    </tui-input>\n                    <tui-error\n                        formControlName="nameValue"\n                        [error]="[] | tuiFieldError | async"\n                    ></tui-error>\n                </div>\n                <div class="tui-form__row">\n                    <tui-input-date formControlName="periodValue">\n                        Input date\n                        <input\n                            placeholder="Placeholder"\n                            tuiTextfield\n                        />\n                        <span class="tui-required"></span>\n                    </tui-input-date>\n                    <tui-error\n                        formControlName="periodValue"\n                        [error]="[] | tuiFieldError | async"\n                    ></tui-error>\n                </div>\n                <div class="tui-form__row tui-form__row_multi-fields">\n                    <div class="tui-form__multi-field">\n                        <tui-input-password formControlName="passwordValue">Input password</tui-input-password>\n                        <tui-error\n                            formControlName="passwordValue"\n                            [error]="[] | tuiFieldError | async"\n                        ></tui-error>\n                    </div>\n                    <div class="tui-form__multi-field">\n                        <tui-input-number\n                            formControlName="moneyValue"\n                            [tuiTextfieldPostfix]="\'RUB\' | tuiCurrency"\n                        >\n                            Input money\n                        </tui-input-number>\n                        <tui-error\n                            formControlName="moneyValue"\n                            [error]="[] | tuiFieldError | async"\n                        ></tui-error>\n                    </div>\n                </div>\n                <div class="tui-form__row">\n                    <tui-input-slider\n                        formControlName="quantityValue"\n                        tuiTextfieldPostfix="\u20bd"\n                        [max]="3000000"\n                        [min]="50000"\n                        [segments]="1"\n                    >\n                        Some slider\n                    </tui-input-slider>\n                    <div class="ticks-labels">\n                        <span>from 50 000 \u20bd</span>\n                        <span>to 3 000 000 \u20bd</span>\n                    </div>\n                    <div class="tui-form__field-note">Some additional text</div>\n                    <tui-error\n                        formControlName="quantityValue"\n                        [error]="[] | tuiFieldError | async"\n                    ></tui-error>\n                </div>\n                <div class="tui-form__row tui-form__row_multi-fields">\n                    <div class="tui-form__multi-field">\n                        <tui-select\n                            formControlName="personValue"\n                            [valueContent]="personValueContent"\n                        >\n                            Choose a person\n                            <tui-data-list-wrapper\n                                *tuiDataList\n                                [items]="persons"\n                            ></tui-data-list-wrapper>\n                        </tui-select>\n                        <ng-template\n                            #personValueContent\n                            let-data\n                        >\n                            <div class="uppercase-name">{{ data.firstName }} {{ data.lastName }}</div>\n                        </ng-template>\n                        <tui-error\n                            formControlName="personValue"\n                            [error]="[] | tuiFieldError | async"\n                        ></tui-error>\n                    </div>\n                    <div class="tui-form__multi-field">\n                        <tui-input-phone formControlName="phoneValue">Input phone</tui-input-phone>\n                        <tui-error\n                            formControlName="phoneValue"\n                            [error]="[] | tuiFieldError | async"\n                        ></tui-error>\n                    </div>\n                </div>\n                <h3 class="tui-form__header">Header</h3>\n                <div\n                    tuiGroup\n                    class="tui-form__row"\n                    [adaptive]="true"\n                    [collapsed]="true"\n                >\n                    <tui-radio-block\n                        contentAlign="right"\n                        formControlName="radioValue"\n                        item="with-commission"\n                        size="l"\n                    >\n                        One option\n                    </tui-radio-block>\n                    <tui-radio-block\n                        contentAlign="right"\n                        formControlName="radioValue"\n                        item="without-commission"\n                        size="l"\n                    >\n                        An alternative one\n                    </tui-radio-block>\n                </div>\n                <div class="tui-form__row tui-form__row_half-width">\n                    <tui-input-time formControlName="timeValue">Input time</tui-input-time>\n                </div>\n                <div class="tui-form__row tui-form__row_checkboxes">\n                    <tui-checkbox-labeled\n                        formControlName="osnoValue"\n                        size="l"\n                        class="tui-form__checkbox"\n                    >\n                        First option\n                    </tui-checkbox-labeled>\n                    <tui-checkbox-labeled\n                        formControlName="usnValue"\n                        size="l"\n                        class="tui-form__checkbox"\n                    >\n                        Other option\n                    </tui-checkbox-labeled>\n                    <tui-checkbox-labeled\n                        formControlName="eshnValue"\n                        size="l"\n                        class="tui-form__checkbox"\n                    >\n                        Cool option\n                    </tui-checkbox-labeled>\n                    <tui-checkbox-labeled\n                        formControlName="envdValue"\n                        size="l"\n                        class="tui-form__checkbox"\n                    >\n                        Your personal option\n                    </tui-checkbox-labeled>\n                    <tui-checkbox-labeled\n                        formControlName="usn2Value"\n                        size="l"\n                        class="tui-form__checkbox"\n                    >\n                        Doubtful option\n                    </tui-checkbox-labeled>\n                    <tui-checkbox-labeled\n                        formControlName="patentValue"\n                        size="l"\n                        class="tui-form__checkbox"\n                    >\n                        One more value\n                    </tui-checkbox-labeled>\n                </div>\n                <h3 class="tui-form__header tui-form__header_margin-bottom_small">Header</h3>\n                <div class="tui-form__row">\n                    <label tuiLabel="From">\n                        <tui-select\n                            formControlName="accountWherefrom"\n                            class="accounts-select"\n                            [tuiTextfieldLabelOutside]="true"\n                            [valueContent]="accountContent"\n                        >\n                            Choose an account\n                            <tui-data-list-wrapper\n                                *tuiDataList\n                                [itemContent]="accountContent"\n                                [items]="accounts"\n                            ></tui-data-list-wrapper>\n                        </tui-select>\n                    </label>\n                </div>\n                <div class="tui-form__row">\n                    <label tuiLabel="To">\n                        <tui-select\n                            formControlName="accountWhere"\n                            class="accounts-select"\n                            [tuiTextfieldLabelOutside]="true"\n                            [valueContent]="accountContent"\n                        >\n                            Choose an account\n                            <tui-data-list-wrapper\n                                *tuiDataList\n                                [itemContent]="accountContent"\n                                [items]="accounts"\n                            ></tui-data-list-wrapper>\n                        </tui-select>\n                    </label>\n                </div>\n                <h3 class="tui-form__header">Header</h3>\n                <div class="tui-form__row">\n                    <tui-input\n                        formControlName="textValue"\n                        tuiHintContent="A tooltip"\n                    >\n                        Textfield\n                        <input\n                            placeholder="Placeholder"\n                            tuiTextfield\n                        />\n                    </tui-input>\n                    <div class="tui-form__field-checkbox">\n                        <tui-checkbox-labeled\n                            formControlName="checkboxValue"\n                            size="l"\n                        >\n                            Try this\n                        </tui-checkbox-labeled>\n                    </div>\n                </div>\n                <div class="tui-form__buttons">\n                    <button\n                        size="l"\n                        tuiButton\n                        type="submit"\n                        class="tui-form__button"\n                    >\n                        Submit\n                    </button>\n                    <button\n                        appearance="flat"\n                        size="l"\n                        tuiButton\n                        type="button"\n                        class="tui-form__button"\n                    >\n                        Cancel\n                    </button>\n                </div>\n            </div>\n        </div>\n        <ng-template\n            #accountContent\n            let-account\n        >\n            <span class="account">\n                {{ account.name }}\n                <tui-money [value]="account.amount"></tui-money>\n            </span>\n        </ng-template>\n    </form>\n</div>\n'}}]);