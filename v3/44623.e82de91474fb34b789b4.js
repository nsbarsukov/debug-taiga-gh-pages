"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44623],{44623:t=>{t.exports="```ts\nimport {tuiNotificationOptionsProvider} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    tuiNotificationOptionsProvider({\n      label: ({status}: any) => status[0].toUpperCase() + status.slice(1),\n      status: 'error',\n      autoClose: 7000,\n    }),\n  ],\n  //  ...\n})\nexport class MyModule {}\n```\n"}}]);