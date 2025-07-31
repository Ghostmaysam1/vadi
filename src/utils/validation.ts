import type { ValidationError } from '../types'

export function passwordValidation(password: string): (true | ValidationError) {
    let validation = {
        length: false,
        bigChar: false,
        smallChar: false,
    }

    if (password.length >= 8)
        validation.length = true
    else {
        return {
            message: 'رمز عبور حداقل باید 8 کاراکتر باشد'
        }
    }

    for (let i = 0; i <= password.length; i++) {
        let code = password.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            validation.bigChar = true;
        }
        if (code >= 97 && code <= 122) {
            validation.smallChar = true;
        }
    }

    if(!validation.bigChar) {
        return {
            message: 'رمز عبور باید حداقل شامل یک حرف بزرگ باشد'
        }
    }
    if(!validation.smallChar) {
        return {
            message: 'رمز عبور باید حداقل شامل یک حرف کوچک باشد'
        }
    }
        

    let obj: any = {}
    for(let i=1;i<password.length;i++) {
        let code = password.charCodeAt(i);
        obj[i+'-'+password[i]] = code
    }
    console.log(obj)
    return true;
}