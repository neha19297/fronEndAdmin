import { AbstractControl } from "@angular/forms";
export function accountMatch(account: any, cAccount: any) {
 return function (form: AbstractControl) {
        const accountValue = form.get(account)?.value

        const confirmAccountValue = form.get(cAccount)?.value
        if (accountValue === confirmAccountValue)
            return null;
        return { accountMismatchError: true }
    }
}

// import { AbstractControl, FormGroup } from "@angular/forms";
// export function accountMatch(account: string, cAccount: string) {
//     return (formGroup: FormGroup) => {
//       let control = formGroup.controls[controlName];
//       let matchingControl = formGroup.controls[matchingControlName]
//       if (
//         matchingControl.errors &&
//         !matchingControl.errors.confirmAccountValidator
//       ) {
//         return;
//       }
//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ confirmAccountValidator: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//     };
//   }
