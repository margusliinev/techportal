import { CustomAPIError } from './CustomApiError';

class BadRequestError extends CustomAPIError {
    statusCode: number;
    constructor(message: any) {
        super(message);
        this.statusCode = 400;
    }
}

export { BadRequestError };
