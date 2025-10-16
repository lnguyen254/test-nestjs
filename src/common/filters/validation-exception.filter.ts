import { BadRequestException, ValidationError } from '@nestjs/common';

/* Catch the validation exception
 * Get the constraints in ValidationError[], separate each of error and return to our format */
export const validationExceptionFilter = (errors: ValidationError[]) => {
  const constraints =
    errors.map((e) => (e.constraints ? Object.values(e.constraints) : [])) ||
    [];

  // Separate code and message
  const errorData: { codes: string[]; messages: string[] } = {
    codes: [],
    messages: [],
  };

  constraints.forEach((c) => {
    c.forEach((e: string) => {
      errorData.codes.push(e.split(':')[0]);
      errorData.messages.push(e.split(':')[1]);
    });
  });

  return new BadRequestException({
    message: errorData.messages,
    code: errorData.codes,
  });
};
