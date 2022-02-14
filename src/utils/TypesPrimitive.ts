export type Primitives = string | boolean | number | Date | unknown;
export type ObjectPrimitives = { [key: string]: Primitives | Array<unknown> };
