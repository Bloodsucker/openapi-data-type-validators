import { OpenAPIV3 } from 'openapi-types';

export const stringSchemaObjectValidator = function(value: string, schemaObject: OpenAPIV3.SchemaObject): boolean {
	if ((typeof value as unknown) != 'string') return false;

	if (schemaObject.maxLength != undefined && schemaObject.maxLength < value.length) return false;
	if (schemaObject.minLength != undefined && schemaObject.minLength > value.length) return false;

	return true;
};
