// IsValidValueInArr(['asc', 'desc'])

import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsValidValueInArr(
  validValues: string[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsValidValueInArr',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [validValues],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          for (const key in value) {
            if (!relatedPropertyName.includes(value[key])) {
              return false;
            }
          }
          return true; // you can return a Promise<boolean> here as well, if you want to make async validation
        },
        defaultMessage(args: ValidationArguments) {
          return `动态属性${args.property}，必须在传入的数组${args.constraints}`;
        },
      },
    });
  };
}
