/**
 * Centralized logging utility with proper error handling
 */

interface LogContext {
  userId?: string
  requestId?: string
  endpoint?: string
  [key: string]: any
}

interface LogLevel {
  INFO: 'info'
  WARN: 'warn'
  ERROR: 'error'
  DEBUG: 'debug'
}

const LOG_LEVELS: LogLevel = {
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
  DEBUG: 'debug'
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isTest = process.env.NODE_ENV === 'test'

  private formatMessage(level: string, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString()
    const baseLog = {
      timestamp,
      level,
      message,
      ...context
    }
    
    return JSON.stringify(baseLog)
  }

  private shouldLog(level: string): boolean {
    // Don't log in test environment unless explicitly enabled
    if (this.isTest && !process.env.ENABLE_TEST_LOGGING) {
      return false
    }
    
    // In development, log everything
    if (this.isDevelopment) {
      return true
    }
    
    // In production, skip debug logs
    return level !== LOG_LEVELS.DEBUG
  }

  info(message: string, context?: LogContext): void {
    if (this.shouldLog(LOG_LEVELS.INFO)) {
      if (this.isDevelopment) {
        console.log(`[INFO] ${message}`, context || '')
      } else {
        console.log(this.formatMessage(LOG_LEVELS.INFO, message, context))
      }
    }
  }

  warn(message: string, context?: LogContext): void {
    if (this.shouldLog(LOG_LEVELS.WARN)) {
      if (this.isDevelopment) {
        console.warn(`[WARN] ${message}`, context || '')
      } else {
        console.warn(this.formatMessage(LOG_LEVELS.WARN, message, context))
      }
    }
  }

  error(message: string, error?: Error | any, context?: LogContext): void {
    if (this.shouldLog(LOG_LEVELS.ERROR)) {
      const errorContext = {
        ...context,
        error: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : error
      }

      if (this.isDevelopment) {
        console.error(`[ERROR] ${message}`, errorContext)
      } else {
        console.error(this.formatMessage(LOG_LEVELS.ERROR, message, errorContext))
      }
    }
  }

  debug(message: string, context?: LogContext): void {
    if (this.shouldLog(LOG_LEVELS.DEBUG)) {
      if (this.isDevelopment) {
        console.debug(`[DEBUG] ${message}`, context || '')
      } else {
        console.debug(this.formatMessage(LOG_LEVELS.DEBUG, message, context))
      }
    }
  }

  // Helper method for API routes
  apiError(
    endpoint: string,
    error: Error | any,
    requestId?: string,
    userId?: string
  ): void {
    this.error('API Error', error, {
      endpoint,
      requestId,
      userId
    })
  }

  // Helper method for database errors
  dbError(
    operation: string,
    error: Error | any,
    table?: string,
    userId?: string
  ): void {
    this.error('Database Error', error, {
      operation,
      table,
      userId
    })
  }
}

export const logger = new Logger()