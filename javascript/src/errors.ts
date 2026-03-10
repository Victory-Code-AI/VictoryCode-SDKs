export class VictoryCodeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VictoryCodeError";
  }
}

export class VictoryCodeConfigError extends VictoryCodeError {
  constructor(message: string) {
    super(message);
    this.name = "VictoryCodeConfigError";
  }
}

export class VictoryCodeApiError extends VictoryCodeError {
  readonly status: number;
  readonly payload: unknown;

  constructor(status: number, message: string, payload: unknown) {
    super(`HTTP ${status}: ${message}`);
    this.name = "VictoryCodeApiError";
    this.status = status;
    this.payload = payload;
  }
}
