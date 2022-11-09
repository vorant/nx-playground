import {
  chain,
  externalSchematic,
} from '@angular-devkit/schematics';

export interface Schema {
  name: string;
  directory: string;
}

export default function (schema: Schema) {
  const directory = schema.directory ?? '';

  return chain([
    externalSchematic('@nrwl/angular', 'library', {
      name: `feature-${schema.name}`,
      directory,
      tags: 'type:feature',
      linter: 'eslint',
      unitTestRunner: 'jest',
      strict: false,
      simpleModuleName: false,
      prefix: 'app',
      skipPackageJson: true
    }),
  ]);
}
