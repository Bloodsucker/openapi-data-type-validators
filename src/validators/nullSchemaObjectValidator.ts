import { OpenAPIV3 } from "openapi-types";

export const nullSchemaObjectValidator = function (value: null, schemaObject: OpenAPIV3.SchemaObject): boolean {
    return true; // TODO
};