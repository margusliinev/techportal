import { CustomAPIError } from './CustomApiError';

class UnAuthenticatedError extends CustomAPIError {
    statusCode: number;
    constructor(message: any) {
        super(message);
        this.statusCode = 401;
    }
}

export { UnAuthenticatedError };
