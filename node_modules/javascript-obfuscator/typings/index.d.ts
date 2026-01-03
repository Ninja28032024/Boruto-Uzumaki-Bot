import { TDictionary } from './src/types/TDictionary';
import { TInputOptions } from './src/types/options/TInputOptions';
import { TObfuscationResultsObject } from './src/types/TObfuscationResultsObject';
import { TOptionsPreset } from './src/types/options/TOptionsPreset';
import { IObfuscationResult } from './src/interfaces/source-code/IObfuscationResult';
import { IProApiConfig, IProObfuscationResult, TProApiProgressCallback } from './src/interfaces/pro-api/IProApiClient';
import { ApiError } from './src/JavaScriptObfuscatorFacade';
export type ObfuscatorOptions = TInputOptions;
export interface ObfuscationResult extends IObfuscationResult {
}
export interface ProObfuscationResult extends IProObfuscationResult {
}
export type { IProApiConfig, TProApiProgressCallback };
export { ApiError };
export declare function obfuscate(sourceCode: string, inputOptions?: ObfuscatorOptions): ObfuscationResult;
export declare function obfuscateMultiple<TSourceCodesObject extends TDictionary<string>>(sourceCodesObject: TSourceCodesObject, inputOptions?: TInputOptions): TObfuscationResultsObject<TSourceCodesObject>;
export declare function obfuscatePro(sourceCode: string, inputOptions: ObfuscatorOptions, proApiConfig: IProApiConfig, onProgress?: TProApiProgressCallback): Promise<ProObfuscationResult>;
export declare function getOptionsByPreset(optionsPreset: TOptionsPreset): TInputOptions;
export declare const version: string;
