import { FieldMetadataSettings } from 'src/engine/metadata-modules/field-metadata/interfaces/field-metadata-settings.interface';

import { FieldMetadataType } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';

export const mapUdtNameToFieldType = (udtName: string): FieldMetadataType => {
  switch (udtName) {
    case 'uuid':
      return FieldMetadataType.UUID;
    case 'varchar':
    case 'text':
    case 'bigint':
    case 'int8':
      return FieldMetadataType.TEXT;
    case 'bool':
      return FieldMetadataType.BOOLEAN;
    case 'timestamp':
    case 'timestamptz':
      return FieldMetadataType.DATE_TIME;
    case 'integer':
    case 'int2':
    case 'int4':
      return FieldMetadataType.NUMBER;
    default:
      return FieldMetadataType.TEXT;
  }
};

export const mapUdtNameToFieldSettings = (
  udtName: string,
): FieldMetadataSettings<FieldMetadataType> | undefined => {
  switch (udtName) {
    case 'integer':
    case 'int2':
    case 'int4':
      return {
        precision: 0,
      } satisfies FieldMetadataSettings<FieldMetadataType.NUMBER>;
    default:
      return undefined;
  }
};
