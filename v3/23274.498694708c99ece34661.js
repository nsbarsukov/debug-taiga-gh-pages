"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[23274],{23274:n=>{n.exports="import {Injectable} from '@angular/core';\nimport {AbstractTuiValueTransformer, TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\nclass ExampleDateRangeTransformer extends AbstractTuiValueTransformer<\n    TuiDayRange | null,\n    [Date, Date] | null\n> {\n    constructor(\n        private readonly dateTransformer: AbstractTuiValueTransformer<\n            TuiDay | null,\n            Date | null\n        >,\n    ) {\n        super();\n    }\n\n    fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {\n        const [transformedFrom, transformedTo] = controlValue || [null, null];\n        const from =\n            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);\n        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);\n\n        return from && to && new TuiDayRange(from, to);\n    }\n\n    toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {\n        const from =\n            componentValue && this.dateTransformer.toControlValue(componentValue.from);\n        const to =\n            componentValue && this.dateTransformer.toControlValue(componentValue.to);\n\n        return from && to && [from, to];\n    }\n}\n\n@Injectable()\nexport class ExampleDateTransformer extends AbstractTuiValueTransformer<\n    TuiDay | null,\n    Date | null\n> {\n    fromControlValue(controlValue: Date | null): TuiDay | null {\n        return controlValue && TuiDay.fromLocalNativeDate(controlValue);\n    }\n\n    toControlValue(componentValue: TuiDay | null): Date | null {\n        return componentValue?.toLocalNativeDate() || null;\n    }\n}\n\nexport function getExampleDateRangeTransformer(\n    dateTransformer: ExampleDateTransformer | null,\n): AbstractTuiValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {\n    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);\n}\n"}}]);