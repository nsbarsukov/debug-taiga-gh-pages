(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84147],{84147:n=>{n.exports="@import '@taiga-ui/core/styles/taiga-ui-local';\n\n.tiles {\n    gap: 1rem;\n    grid-auto-rows: minmax(100px, auto);\n}\n\n.tile:before {\n    content: 'Drop here';\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    color: var(--tui-border-normal);\n    border-radius: var(--tui-radius-l);\n    border: 2px dashed var(--tui-border-normal);\n}\n\n.content {\n    .transition(box-shadow);\n    height: 100%;\n    padding: 1rem;\n    background: var(--tui-background-base);\n    box-sizing: border-box;\n    border-radius: var(--tui-radius-l);\n    border: 1px solid var(--tui-border-normal);\n    overflow: hidden;\n\n    tui-tile._dragged & {\n        box-shadow: var(--tui-shadow-small-hover);\n    }\n}\n\n.rick {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.title {\n    margin: 0 0 1rem;\n}\n\n.handle {\n    .transition(opacity);\n    position: absolute;\n    right: 0.75rem;\n    top: 1rem;\n    background: var(--tui-background-base);\n    opacity: 0;\n    cursor: move;\n\n    tui-tiles:not(._dragged) tui-tile:hover &,\n    tui-tile._dragged & {\n        opacity: 0.7;\n    }\n}\n"}}]);