(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[80036],{80036:e=>{e.exports='<form\n    tuiTextfieldSize="m"\n    class="b-form"\n    [tuiTextfieldCleaner]="true"\n    [tuiTextfieldLabelOutside]="true"\n>\n    <label tuiLabel="Modified cleaner icon">\n        <tui-primitive-textfield\n            [(value)]="value"\n            (focusedChange)="onFocused($event)"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type="email"\n            />\n        </tui-primitive-textfield>\n    </label>\n\n    <label\n        tuiLabel="Override modified cleaner icon"\n        class="tui-space_top-4"\n    >\n        <tui-primitive-textfield\n            iconCleaner="tuiIconEdit2"\n            tuiHintContent="Hint is shown for disabled control"\n            [disabled]="true"\n            [(value)]="value"\n            (focusedChange)="onFocused($event)"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type="email"\n            />\n        </tui-primitive-textfield>\n    </label>\n</form>\n'}}]);