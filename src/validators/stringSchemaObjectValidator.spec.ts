import { OpenAPIV3 } from 'openapi-types';
import { stringSchemaObjectValidator } from './stringSchemaObjectValidator';

describe('Validates values as string type SchemaObject', () => {
	it('Simple validation', () => {
		const schemaObject: OpenAPIV3.SchemaObject = {
			type: 'string',
		};

		expect(stringSchemaObjectValidator('myValue', schemaObject)).toBe(true);
	});

	it('Validates minLength property', () => {
		const schemaObject: OpenAPIV3.SchemaObject = {
			type: 'string',
			minLength: 10,
		};

		expect(stringSchemaObjectValidator('veryLongString', schemaObject)).toBe(true);
		expect(stringSchemaObjectValidator('short', schemaObject)).toBe(false);
		expect(stringSchemaObjectValidator('1234567890', schemaObject)).toBe(true);
	});

	it('Validates maxLength property', () => {
		const schemaObject: OpenAPIV3.SchemaObject = {
			type: 'string',
			maxLength: 10,
		};

		expect(stringSchemaObjectValidator('veryLongString', schemaObject)).toBe(false);
		expect(stringSchemaObjectValidator('short', schemaObject)).toBe(true);
		expect(stringSchemaObjectValidator('1234567890', schemaObject)).toBe(true);
	});
});
