/**
 * Format: [code, message, validation_message]
 * Example:
 *   ERR_SOMETHING = [
 *     'ERR_SOMETHING',
 *     'Error message',
 *     'ERR_SOMETHING:Error message'
 *   ]
 */

export const ERROR_CONSTANT = {
  // ========== HTTP RESPONSE ERRORS ==========
  ERR_BAD_REQUEST: [
    'ERR_BAD_REQUEST',
    'Invalid request or parameters',
    'ERR_BAD_REQUEST:Invalid request or parameters',
  ],
  ERR_UNAUTHORIZED: [
    'ERR_UNAUTHORIZED',
    'Unauthorized access',
    'ERR_UNAUTHORIZED:Unauthorized access',
  ],
  ERR_FORBIDDEN: [
    'ERR_FORBIDDEN',
    'You do not have permission to perform this action',
    'ERR_FORBIDDEN:You do not have permission to perform this action',
  ],
  ERR_NOT_FOUND: [
    'ERR_NOT_FOUND',
    'The requested resource was not found',
    'ERR_NOT_FOUND:The requested resource was not found',
  ],
  ERR_METHOD_NOT_ALLOWED: [
    'ERR_METHOD_NOT_ALLOWED',
    'HTTP method not allowed',
    'ERR_METHOD_NOT_ALLOWED:HTTP method not allowed',
  ],
  ERR_CONFLICT: [
    'ERR_CONFLICT',
    'Conflict occurred with the current resource state',
    'ERR_CONFLICT:Conflict occurred with the current resource state',
  ],
  ERR_UNSUPPORTED_MEDIA_TYPE: [
    'ERR_UNSUPPORTED_MEDIA_TYPE',
    'Unsupported media type',
    'ERR_UNSUPPORTED_MEDIA_TYPE:Unsupported media type',
  ],
  ERR_UNPROCESSABLE_ENTITY: [
    'ERR_UNPROCESSABLE_ENTITY',
    'The request was well-formed but contains semantic errors',
    'ERR_UNPROCESSABLE_ENTITY:The request was well-formed but contains semantic errors',
  ],
  ERR_INTERNAL_SERVER: [
    'ERR_INTERNAL_SERVER',
    'Internal server error',
    'ERR_INTERNAL_SERVER:Internal server error',
  ],
  ERR_BAD_GATEWAY: [
    'ERR_BAD_GATEWAY',
    'Invalid response from upstream server',
    'ERR_BAD_GATEWAY:Invalid response from upstream server',
  ],
  ERR_SERVICE_UNAVAILABLE: [
    'ERR_SERVICE_UNAVAILABLE',
    'Service temporarily unavailable',
    'ERR_SERVICE_UNAVAILABLE:Service temporarily unavailable',
  ],
  ERR_GATEWAY_TIMEOUT: [
    'ERR_GATEWAY_TIMEOUT',
    'Upstream server timeout',
    'ERR_GATEWAY_TIMEOUT:Upstream server timeout',
  ],

  // ========== AUTHENTICATION & AUTHORIZATION ==========
  ERR_INVALID_TOKEN: [
    'ERR_INVALID_TOKEN',
    'Invalid or expired token',
    'ERR_INVALID_TOKEN:Invalid or expired token',
  ],
  ERR_EXPIRED_TOKEN: [
    'ERR_EXPIRED_TOKEN',
    'Token has expired',
    'ERR_EXPIRED_TOKEN:Token has expired',
  ],
  ERR_ACCESS_DENIED: [
    'ERR_ACCESS_DENIED',
    'Access denied',
    'ERR_ACCESS_DENIED:Access denied',
  ],
  ERR_ACCOUNT_LOCKED: [
    'ERR_ACCOUNT_LOCKED',
    'Your account has been locked',
    'ERR_ACCOUNT_LOCKED:Your account has been locked',
  ],
  ERR_LOGIN_FAILED: [
    'ERR_LOGIN_FAILED',
    'Invalid username or password',
    'ERR_LOGIN_FAILED:Invalid username or password',
  ],
  ERR_DUPLICATE_EMAIL: [
    'ERR_DUPLICATE_EMAIL',
    'Email is already registered',
    'ERR_DUPLICATE_EMAIL:Email is already registered',
  ],
  ERR_DUPLICATE_USERNAME: [
    'ERR_DUPLICATE_USERNAME',
    'Username is already taken',
    'ERR_DUPLICATE_USERNAME:Username is already taken',
  ],
  ERR_PASSWORD_WEAK: [
    'ERR_PASSWORD_WEAK',
    'Password is too weak',
    'ERR_PASSWORD_WEAK:Password is too weak',
  ],
  ERR_PASSWORD_NOT_MATCH: [
    'ERR_PASSWORD_NOT_MATCH',
    'Passwords do not match',
    'ERR_PASSWORD_NOT_MATCH:Passwords do not match',
  ],

  // ========== VALIDATION ERRORS ==========
  ERR_VALIDATION_EMAIL: [
    'ERR_VALIDATION_EMAIL',
    'Email must be an email',
    'ERR_VALIDATION_EMAIL:Email must be an email',
  ],
  ERR_VALIDATION_PASSWORD: [
    'ERR_VALIDATION_PASSWORD',
    'Password must be at least 8 characters',
    'ERR_VALIDATION_PASSWORD:Password must be at least 8 characters',
  ],
  ERR_VALIDATION_USERNAME: [
    'ERR_VALIDATION_USERNAME',
    'username must not be empty',
    'ERR_VALIDATION_USERNAME:username must not be empty',
  ],
  ERR_VALIDATION_REQUIRED: [
    'ERR_VALIDATION_REQUIRED',
    'Field is required',
    'ERR_VALIDATION_REQUIRED:Field is required',
  ],
  ERR_VALIDATION_STRING: [
    'ERR_VALIDATION_STRING',
    'Field must be a string',
    'ERR_VALIDATION_STRING:Field must be a string',
  ],
  ERR_VALIDATION_NUMBER: [
    'ERR_VALIDATION_NUMBER',
    'Field must be a number',
    'ERR_VALIDATION_NUMBER:Field must be a number',
  ],
  ERR_VALIDATION_BOOLEAN: [
    'ERR_VALIDATION_BOOLEAN',
    'Field must be a boolean',
    'ERR_VALIDATION_BOOLEAN:Field must be a boolean',
  ],
  ERR_VALIDATION_DATE: [
    'ERR_VALIDATION_DATE',
    'Field must be a valid date',
    'ERR_VALIDATION_DATE:Field must be a valid date',
  ],
  ERR_VALIDATION_MIN_LENGTH: [
    'ERR_VALIDATION_MIN_LENGTH',
    'Field is too short',
    'ERR_VALIDATION_MIN_LENGTH:Field is too short',
  ],
  ERR_VALIDATION_MAX_LENGTH: [
    'ERR_VALIDATION_MAX_LENGTH',
    'Field is too long',
    'ERR_VALIDATION_MAX_LENGTH:Field is too long',
  ],
  ERR_VALIDATION_ENUM: [
    'ERR_VALIDATION_ENUM',
    'Invalid enum value',
    'ERR_VALIDATION_ENUM:Invalid enum value',
  ],
  ERR_VALIDATION_PATTERN: [
    'ERR_VALIDATION_PATTERN',
    'Field does not match required pattern',
    'ERR_VALIDATION_PATTERN:Field does not match required pattern',
  ],

  // ========== DATABASE & SYSTEM ERRORS ==========
  ERR_DB_CONNECTION: [
    'ERR_DB_CONNECTION',
    'Database connection failed',
    'ERR_DB_CONNECTION:Database connection failed',
  ],
  ERR_DB_DUPLICATE_KEY: [
    'ERR_DB_DUPLICATE_KEY',
    'Duplicate key error in database',
    'ERR_DB_DUPLICATE_KEY:Duplicate key error in database',
  ],
  ERR_DB_QUERY_FAILED: [
    'ERR_DB_QUERY_FAILED',
    'Database query failed',
    'ERR_DB_QUERY_FAILED:Database query failed',
  ],
  ERR_SERVICE_TIMEOUT: [
    'ERR_SERVICE_TIMEOUT',
    'External service did not respond in time',
    'ERR_SERVICE_TIMEOUT:External service did not respond in time',
  ],
  ERR_UNKNOWN: [
    'ERR_UNKNOWN',
    'An unknown error occurred',
    'ERR_UNKNOWN:An unknown error occurred',
  ],
} as const;

// Types
export type ErrorConstantKey = keyof typeof ERROR_CONSTANT;
export type ErrorConstantValue = (typeof ERROR_CONSTANT)[ErrorConstantKey];
