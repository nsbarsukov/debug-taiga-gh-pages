"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[71495],{71495:n=>{n.exports="@import '@taiga-ui/core/styles/taiga-ui-local';\n\n.tiles {\n    width: 10rem;\n    gap: 1rem;\n    grid-auto-rows: minmax(var(--tui-height-m), auto);\n}\n\n@media @tui-mobile {\n    .tile_tall {\n        --tui-height: 2;\n    }\n}\n\n.content {\n    .transition(box-shadow);\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n    background: var(--tui-base-01);\n    border-radius: var(--tui-radius-l);\n    border: 1px solid var(--tui-base-03);\n    cursor: ns-resize;\n\n    tui-tile._dragged & {\n        box-shadow: var(--tui-shadow-hover);\n    }\n}\n"}}]);