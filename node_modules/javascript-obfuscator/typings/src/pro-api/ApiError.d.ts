export declare class ApiError extends Error {
    readonly statusCode: number;
    readonly response?: string;
    constructor(message: string, statusCode: number, response?: string);
}
