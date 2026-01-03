import { TIdentifierNamesCache } from '../types/TIdentifierNamesCache';
import { IProObfuscationResult } from '../interfaces/pro-api/IProApiClient';
export declare class ProApiObfuscationResult implements IProObfuscationResult {
    private readonly obfuscatedCode;
    private readonly sourceMapValue;
    constructor(code: string, sourceMap?: string);
    getObfuscatedCode(): string;
    getSourceMap(): string;
    getIdentifierNamesCache(): TIdentifierNamesCache;
    toString(): string;
}
