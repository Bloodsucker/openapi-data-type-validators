import { integerSchemaObjectValidator } from './integerSchemaObjectValidator';
import { OpenAPIV3 } from 'openapi-types';

describe('Validates values as integer type SchemaObject', () => {
	it('Simple validation with string as input', () => {
		const schemaObject: OpenAPIV3.SchemaObject = {
			type: 'integer',
		};

		expect(integerSchemaObjectValidator(12345, schemaObject)).toBe(true);
		expect(integerSchemaObjectValidator(('noIntegerValue' as unknown) as number, schemaObject)).toBe(false);
	});

	it('Validates minimum property', () => {
		const schemaObject: OpenAPIV3.SchemaObject = {
			type: 'integer',
			minimum: 5,
		};

		expect(integerSchemaObjectValidator(10, schemaObject)).toBe(true);
		expect(integerSchemaObjectValidator(5, schemaObject)).toBe(true);
		expect(integerSchemaObjectValidator(1, schemaObject)).toBe(false);
	});

	it('Validates maximum property', () => {
		const schemaObject: OpenAPIV3.SchemaObject = {
			type: 'integer',
			maximum: 10,
		};

		expect(integerSchemaObjectValidator(5, schemaObject)).toBe(true);
		expect(integerSchemaObjectValidator(10, schemaObject)).toBe(true);
		expect(integerSchemaObjectValidator(15, schemaObject)).toBe(false);
	});

	it('Validates exclusiveMinimum property', () => {
		const schemaObjectExclusiveMinimumAsTrue: OpenAPIV3.SchemaObject = {
			type: 'integer',
			minimum: 10,
			exclusiveMinimum: true,
		};
		const schemaObjectExclusiveMinimumAsFalse: OpenAPIV3.SchemaObject = {
			type: 'integer',
			minimum: 10,
			exclusiveMinimum: false,
		};

		expect(integerSchemaObjectValidator(10, schemaObjectExclusiveMinimumAsTrue)).toBe(false);
		expect(integerSchemaObjectValidator(10, schemaObjectExclusiveMinimumAsFalse)).toBe(true);
	});

	it('Validates exclusiveMaximum property', () => {
		const schemaObjectExclusiveMaximumAsTrue: OpenAPIV3.SchemaObject = {
			type: 'integer',
			maximum: 10,
			exclusiveMaximum: true,
		};
		const schemaObjectExclusiveMaximumAsFalse: OpenAPIV3.SchemaObject = {
			type: 'integer',
			maximum: 10,
			exclusiveMaximum: false,
		};

		expect(integerSchemaObjectValidator(10, schemaObjectExclusiveMaximumAsTrue)).toBe(false);
		expect(integerSchemaObjectValidator(10, schemaObjectExclusiveMaximumAsFalse)).toBe(true);
	});
});
