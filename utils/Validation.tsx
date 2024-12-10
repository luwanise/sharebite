export class Validation {
    static validateEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return emailRegex.test(email);
    }

    static validateName(name: string) {
        return name.length > 0;
    }
    
    static validatePassword(password: string) {
        const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };
    
    static validatePasswordMatch(password: string, confirmPassword: string) {
        return password === confirmPassword;
    }
}