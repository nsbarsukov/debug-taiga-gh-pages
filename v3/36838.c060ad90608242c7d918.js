"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[36838],{36838:n=>{n.exports='<div\n    tuiCarouselButtons\n    class="wrapper"\n>\n    <button\n        icon="tuiIconChevronLeftLarge"\n        title="Previous"\n        tuiIconButton\n        type="button"\n        (click)="carousel.prev()"\n    ></button>\n    <tui-carousel\n        #carousel\n        class="carousel"\n    >\n        <tui-island *tuiItem>\n            <h2 class="tui-island__title">Monty Python and the Holy Grail</h2>\n            <p>\n                King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy\n                Grail, encountering many, very silly obstacles.\n            </p>\n            <div>\n                <button\n                    appearance="primary"\n                    tuiButton\n                    type="button"\n                >\n                    Buy $\n                    <tui-money [value]="12.99"></tui-money>\n                </button>\n                <button\n                    tuiButton\n                    type="button"\n                    class="tui-space_left-2"\n                >\n                    Rent $\n                    <tui-money [value]="4.99"></tui-money>\n                </button>\n            </div>\n        </tui-island>\n        <tui-island *tuiItem>\n            <tui-loader></tui-loader>\n        </tui-island>\n        <tui-island\n            *tuiItem\n            class="tui-island_text-align_center"\n        >\n            <h2 class="tui-island__title">Failed to load</h2>\n            <p>\n                <tui-marker-icon\n                    mode="error"\n                    src="tuiIconClose"\n                ></tui-marker-icon>\n            </p>\n        </tui-island>\n    </tui-carousel>\n    <button\n        icon="tuiIconChevronRightLarge"\n        title="Next"\n        tuiIconButton\n        type="button"\n        (click)="carousel.next()"\n    ></button>\n</div>\n'}}]);