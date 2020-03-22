import { OpenAPIV3 } from 'openapi-types';

function isNormalInteger(value: number): boolean {
	const n = Math.floor(Number(value));
	return n !== Infinity && String(n) === String(value) && n >= 0;
}

export const integerSchemaObjectValidator = function(value: number, schemaObject: OpenAPIV3.SchemaObject): boolean {
	if (!isNormalInteger(value)) return false;

	if (schemaObject.minimum != undefined) {
		if (schemaObject.exclusiveMinimum && value <= schemaObject.minimum) return false;
		else if (value < schemaObject.minimum) return false;
	}

	if (schemaObject.maximum != undefined) {
		if (schemaObject.exclusiveMaximum && value >= schemaObject.maximum) return false;
		else if (value > schemaObject.maximum) return false;
	}

	return isNormalInteger(value);
};
