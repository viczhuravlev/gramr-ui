/* eslint-disable no-console */

type Message = string | number | Record<string, unknown>;

export function info(message: Message): void {
  console.info('[gramr ui / info] ', message);
}

export function warn(message: Message): void {
  console.warn('[gramr ui / warn] ', message);
}

export function error(title: string, message: Message): void {
  console.error('[gramr ui / error] ', title, message);
}
