(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[71416],{71416:n=>{n.exports="import {ChangeDetectorRef, Component, Inject, NgZone, OnInit, Self} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E, TuiDestroyService, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';\nimport {Observable, timer} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-input-inline-example-3',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    encapsulation,\n    changeDetection,\n    providers: [TuiDestroyService],\n})\nexport class TuiInputInlineExample3 implements OnInit {\n    count = '0';\n\n    constructor(\n        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,\n        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,\n        @Inject(NgZone) private readonly zone: NgZone,\n        @Inject(TUI_IS_E2E) readonly isE2E: boolean,\n    ) {}\n\n    ngOnInit(): void {\n        if (this.isE2E) {\n            return;\n        }\n\n        timer(0, 3000)\n            .pipe(\n                tuiZoneOptimized(this.zone),\n                tuiWatch(this.cd),\n                takeUntil(this.destroy$),\n            )\n            .subscribe(value => {\n                this.count = String(value);\n            });\n    }\n}\n"}}]);