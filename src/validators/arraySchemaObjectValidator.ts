import { OpenAPIV3 } from 'openapi-types';

export const arraySchemaObjectValidator = function(
	value: [],
	schemaObject: OpenAPIV3.SchemaObject,
	refs?: OpenAPIV3.SchemaObject[],
): boolean {
	return true; // TODO
};
