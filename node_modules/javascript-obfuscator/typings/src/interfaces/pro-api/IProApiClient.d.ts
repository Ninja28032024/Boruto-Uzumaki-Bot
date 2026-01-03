import { TIdentifierNamesCache } from '../../types/TIdentifierNamesCache';
export interface IProObfuscationResult {
    getIdentifierNamesCache(): TIdentifierNamesCache;
    getObfuscatedCode(): string;
    getSourceMap(): string;
    toString(): string;
}
export interface IProApiConfig {
    apiToken: string;
    timeout?: number;
    version?: string;
}
export type TProApiProgressCallback = (message: string) => void;
export interface IProApiStreamMessage {
    type: 'progress' | 'result' | 'chunk' | 'chunk_end' | 'error';
    message?: string;
    code?: string;
    sourceMap?: string;
    field?: 'code' | 'sourceMap';
    data?: string;
    index?: number;
    total?: number;
}
