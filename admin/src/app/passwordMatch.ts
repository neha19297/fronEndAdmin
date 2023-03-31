import { AbstractControl } from "@angular/forms";
export function passwordMatch(password: string, cpassword: string) {
    return function (form: AbstractControl) {
        const passwordValue = form.get(password)?.value
               const confirmPasswordValue = form.get(cpassword)?.value
 if (passwordValue === confirmPasswordValue)
           return null;
                  return { passwordMismatchError: true }

    }
}