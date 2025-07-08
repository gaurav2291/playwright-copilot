export function waitForElement(selector: string, timeout: number = 5000): Promise<void> {
    return new Promise((resolve, reject) => {
        const interval = setInterval(async () => {
            const element = await document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                resolve();
            }
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        }, timeout);
    });
}

export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}