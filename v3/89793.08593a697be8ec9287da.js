(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89793],{89793:n=>{n.exports='<div\n    *ngFor="let platform of platforms; let first = first"\n    class="wrapper"\n    [class.wrapper_web]="platform === \'web\'"\n    [tuiPlatform]="platform"\n>\n    <input\n        ngModel="checked"\n        tuiRadio\n        type="radio"\n        value="checked"\n        [size]="getSize(first)"\n    />\n\n    <input\n        ngModel="checked"\n        tuiRadio\n        type="radio"\n        value="checked"\n        [disabled]="true"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiRadio\n        type="radio"\n        [size]="getSize(first)"\n    />\n\n    <input\n        ngModel="checked"\n        tuiRadio\n        type="radio"\n        [disabled]="true"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiRadio\n        type="radio"\n        [formControl]="invalidTrue"\n        [size]="getSize(first)"\n        [value]="true"\n    />\n\n    <input\n        tuiRadio\n        type="radio"\n        [formControl]="invalidFalse"\n        [size]="getSize(first)"\n        [value]="true"\n    />\n</div>\n'}}]);