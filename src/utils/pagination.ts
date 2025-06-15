// orderBy: {
//   order: 'asc',
//   ...dto.order,

// import { NotAcceptableException } from '@nestjs/common';

// }, => [{order: 'asc'}, { key1: ''}]
export function transformObjToArr(originObj, defaultObj = { order: 'asc' }) {
  const uniqueKeys = new Set([
    ...Object.keys(originObj),
    ...Object.keys(defaultObj),
  ]);

  const arr = Array.from(uniqueKeys).map((key) => {
    const val = originObj[key] || defaultObj[key];
    // if (val === 'asc' || val === 'desc') {
    return {
      [key]: val,
    };
    // } else {
    //   throw new NotAcceptableException("order must be 'asc' or 'desc'");
    // }
  });
  return arr;
}