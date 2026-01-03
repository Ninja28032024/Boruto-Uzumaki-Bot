import 'reflect-metadata';
import { TDictionary } from './types/TDictionary';
import { TInputOptions } from './types/options/TInputOptions';
import { TObfuscationResultsObject } from './types/TObfuscationResultsObject';
import { TOptionsPreset } from './types/options/TOptionsPreset';
import { IObfuscationResult } from './interfaces/source-code/IObfuscationResult';
import { IProApiConfig, IProObfuscationResult, TProApiProgressCallback } from './interfaces/pro-api/IProApiClient';
declare class JavaScriptObfuscatorFacade {
    static version: string;
    static obfuscate(sourceCode: string, inputOptions?: TInputOptions): IObfuscationResult;
    static obfuscateMultiple<TSourceCodesObject extends TDictionary<string>>(sourceCodesObject: TSourceCodesObject, inputOptions?: TInputOptions): TObfuscationResultsObject<TSourceCodesObject>;
    static getOptionsByPreset(optionsPreset: TOptionsPreset): TInputOptions;
    static obfuscatePro(sourceCode: string, inputOptions: TInputOptions, proApiConfig: IProApiConfig, onProgress?: TProApiProgressCallback): Promise<IProObfuscationResult>;
}
export { JavaScriptObfuscatorFacade as JavaScriptObfuscator };
export { ApiError } from './pro-api/ApiError';
export type { IProApiConfig, TProApiProgressCallback } from './interfaces/pro-api/IProApiClient';
