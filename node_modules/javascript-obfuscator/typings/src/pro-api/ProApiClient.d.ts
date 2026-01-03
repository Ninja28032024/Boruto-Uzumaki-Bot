import { TInputOptions } from '../types/options/TInputOptions';
import { IProApiConfig, IProObfuscationResult, TProApiProgressCallback } from '../interfaces/pro-api/IProApiClient';
export declare class ProApiClient {
    private readonly config;
    constructor(config: IProApiConfig);
    obfuscate(sourceCode: string, options?: TInputOptions, onProgress?: TProApiProgressCallback): Promise<IProObfuscationResult>;
    private handleStreamingResponse;
    private reassembleChunkedResponse;
}
