(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70157],{70157:n=>{n.exports="import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';\n\nexport function inputCardGroupedCVCValidator(): ValidatorFn {\n    return (control: AbstractControl): ValidationErrors | null => {\n        const {value} = control;\n\n        if (!value?.cvc) {\n            return null;\n        }\n\n        return value.cvc.length < 3 ? {invalidCvc: true} : null;\n    };\n}\n"}}]);