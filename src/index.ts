import { OpenAPIV3 } from 'openapi-types';

export {stringSchemaObjectValidator} from './validators/stringSchemaObjectValidator';
export {booleanSchemaObjectValidator} from './validators/booleanSchemaObjectValidator';
export {nullSchemaObjectValidator} from './validators/nullSchemaObjectValidator';
export {objectSchemaObjectValidator} from './validators/objectSchemaObjectValidator';
export {integerSchemaObjectValidator} from './validators/integerSchemaObjectValidator';
export {numberSchemaObjectValidator} from './validators/numberSchemaObjectValidator';
export {arraySchemaObjectValidator} from './validators/arraySchemaObjectValidator';

export interface ParameterValidator {
    (value: any, parameterObject: OpenAPIV3.SchemaObject, refs?: OpenAPIV3.SchemaObject[]): boolean;
}