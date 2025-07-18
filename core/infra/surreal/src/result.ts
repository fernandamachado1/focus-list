export class Result<T, E = Error> {
  private constructor(public readonly value?: T, public readonly error?: E) {}

  static ok<T>(value: T): Result<T> {
    return new Result(value);
  }

  static fail<T = never, E = Error>(error: E): Result<T, E> {
    return new Result(undefined, error);
  }

  isSuccess(): boolean {
    return !!this.value;
  }

  isFailure(): boolean {
    return !!this.error;
  }
}
