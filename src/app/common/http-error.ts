export class AppError {
  constructor(public originalError?: any) { }
}

/**
 * 400 Bad Request
 */
export class BadRequest extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}

/**
 * 401 Unauthorized
 */
export class UnauthorizedError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}

/**
 * 404 Not Found
 */
export class NotFoundError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}

/**
 * 500 Internal Server
 */
export class InternalServerError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}

/**
 * 501 Not Implemented Error
 */
export class NotImplementedError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}

/**
 * 550 Permission Denied
 */
export class PermissionDeniedError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}
