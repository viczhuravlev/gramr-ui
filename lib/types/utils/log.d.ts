declare type Message = string | number | Record<string, unknown>;
export declare function info(message: Message): void;
export declare function warn(message: Message): void;
export declare function error(title: string, message: Message): void;
export {};
