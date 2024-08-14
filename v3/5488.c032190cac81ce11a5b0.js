"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[5488],{5488:t=>{t.exports="import {AfterViewInit, Component, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';\nimport {tuiClamp} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {distinctUntilChanged, map, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-elastic-sticky-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiElasticStickyExample1 implements AfterViewInit {\n    @ViewChild(TuiElasticStickyDirective)\n    readonly elasticSticky?: TuiElasticStickyDirective;\n\n    scale$?: Observable<number>;\n\n    ngAfterViewInit(): void {\n        if (!this.elasticSticky) {\n            return;\n        }\n\n        // If we use it like that instead of (tuiElasticSticky)=\"onElasticSticky($event)\"\n        // we will not trigger unnecessary change detection when scale is less than 0.5\n        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(\n            map(scale => tuiClamp(scale, 0.5, 1)),\n            startWith(1),\n            distinctUntilChanged(),\n        );\n    }\n}\n"}}]);