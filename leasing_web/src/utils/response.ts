import type { Response } from "express";

export interface ApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data?: T;
  error?: unknown;
}

export function sendSuccess<T>(
  res: Response,
  {
    data,
    message = "Success",
    statusCode = 200,
  }: {
    data?: T;
    message?: string;
    statusCode?: number;
  }
) {
  return res.status(statusCode).json({
    success: true,
    code: statusCode,
    message,
    data,
  });
}

export function sendError(
  res: Response,
  error: unknown,
  defaultMessage = "Internal server error",
  statusCode = 500
) {
  console.error("[API Error]:", error);

  const message = error instanceof Error ? error.message : defaultMessage;

  return res.status(statusCode).json({
    success: false,
    code: statusCode,
    message,
    error: process.env.NODE_ENV === "development" ? error : undefined,
  });
}
