import { CustomAPIError } from './CustomApiError';

class NotFoundError extends CustomAPIError {
    statusCode: number;
    constructor(message: any) {
        super(message);
        this.statusCode = 404;
    }
}

export { NotFoundError };
