"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[54914],{54914:n=>{n.exports="import {Inject, Injectable} from '@angular/core';\nimport {TUI_IS_E2E} from '@taiga-ui/cdk';\nimport {Observable, timer} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nimport {MOCK_CARDS} from './mock-cards';\nimport {AccountCard, FetchedCards} from './models';\n\n@Injectable({\n    providedIn: 'root',\n})\nexport class PayService {\n    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}\n\n    preparePayment(amount: number): Observable<number> {\n        return timer(this.getRandomDelay()).pipe(map(() => amount));\n    }\n\n    getPrimaryCard(): Observable<FetchedCards> {\n        return timer(this.getRandomDelay()).pipe(\n            map(() => MOCK_CARDS),\n            map((cards: AccountCard[]) => ({primary: cards[0], cards})),\n        );\n    }\n\n    pay(): Observable<void> {\n        return timer(this.getRandomDelay()).pipe(map(() => undefined));\n    }\n\n    private getRandomDelay(): number {\n        return this.isE2E ? 0 : 3000 * Math.random();\n    }\n}\n"}}]);