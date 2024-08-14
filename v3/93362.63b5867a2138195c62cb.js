"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[93362],{93362:n=>{n.exports="```ts\nimport {tuiSvgOptionsProvider, tuiSvgSrcInterceptors} from '@taiga-ui/core';\n\n@NgModule({\n  // ..\n  providers: [\n    tuiSvgOptionsProvider({\n      /**\n       * @description:\n       * Resolve path to your icon by factory\n       * @name -> <tui-svg src=\"{name}\" />\n       * @baseHref(optional) -> <base href=\"{baseHref}\" />\n       */\n      path: (name: string, baseHref: string) => `${baseHref}assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`,\n\n      /**\n       * The function that processes the source of the icon.\n       */\n      srcProcessor: (src: string) => (src.startsWith('https://') ? src : `assets/icons/${src}.svg#${src}`),\n\n      /**\n       * The function that processes the content of the icon.\n       */\n      contentProcessor: (content: string) => content.replace(/fill=\".*?\"/g, 'fill=\"currentColor\"'),\n\n      /**\n       * The function that processes name to show deprecated icons in pack.\n       */\n      deprecated: (name: string) => {\n        if (name === 'my-super-icon') {\n          console.warn(`Icon \"${name}\" is deprecated`);\n        }\n\n        return name;\n      },\n    }),\n\n    /**\n     * @documentation:\n     * tuiSvgSrcInterceptors is a multi-provider, so you can add your own interceptors,\n     * if you don't want to use the global srcProcessor handler of tuiSvgOptionsProvider.\n     */\n    tuiSvgSrcInterceptors(src => src.replace(/#.*$/, '')),\n    tuiSvgSrcInterceptors(src =>\n      String(src).startsWith('icons8::') ? `assets/icons/${String(src).replace('icons8::', '')}.svg` : src,\n    ),\n  ],\n})\nexport class AppModule {}\n```\n"}}]);