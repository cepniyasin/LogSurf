export interface SpringLog {
  timestamp: string;
  level: string;
  pid: string;
  thread?: string;
  logger?: string;
  message: string;
}

export function parseSpringLogs(logText: string): SpringLog[] {
  const lines = logText.split('\n');
  const logEntryRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}/;

  const logs: SpringLog[] = [];
  let currentLog: SpringLog | null = null;

  for (const line of lines) {
    if (logEntryRegex.test(line)) {
      if (currentLog) {
        logs.push(currentLog);
      }

      const parts = line.split(/\s+/);
      currentLog = {
        timestamp: parts[0],
        level: parts[1],
        pid: parts[2],
        thread: line.match(/\[.*?\]/)?.[0].replace(/\[|\]/g, ''),
        logger: line.split('---').pop()?.split(':')[0]?.trim(),
        message: line.split(':').slice(1).join(':').trim(),
      };
    } else if (currentLog && line.trim()) {
      currentLog.message += line;
    }
  }

  if (currentLog) {
    logs.push(currentLog);
  }

  return logs;
}
