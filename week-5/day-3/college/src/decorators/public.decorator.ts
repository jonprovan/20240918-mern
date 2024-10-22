import { SetMetadata } from '@nestjs/common';

// the name of this variable will be the name of our new decorator
// set whatever metadata you wish in the code of the lambda
export const Public = () => SetMetadata('public', true);
