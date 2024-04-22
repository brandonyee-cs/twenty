import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const DateScalarType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize: (value: Date): number => value.getTime(),
  parseValue: (value: number): Date => new Date(value),
  parseLiteral: (ast): Date | null => {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }

    return null;
  },
});
