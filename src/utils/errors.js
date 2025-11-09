export class AppError extends Error {
  constructor(message, type = "GENERAL") {
    super(message);
  }
}
export class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(message,"VALIDATION");
  }
  /* type: 'VALIDATION' */
}
export class NotFoundError extends AppError {
  constructor(message = "Not found") {
    super(message,"NOT_FOUND");
  } /* type: 'NOT_FOUND' */
}
export class NetworkError extends AppError {
  constructor(message = "network error") {
    super(message,"NETWORK");
  } /* type: 'NETWORK' */
}
