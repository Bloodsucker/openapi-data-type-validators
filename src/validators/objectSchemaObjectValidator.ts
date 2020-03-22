import { OpenAPIV3 } from 'openapi-types';

export const objectSchemaObjectValidator = function(
	value: Record<string, any>,
	schemaObject: OpenAPIV3.SchemaObject,
): boolean {
	return true; // TODO
};
