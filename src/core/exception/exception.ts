import { ExceptionType } from '../type/exception';

export class Exception implements ExceptionType {
	name    : string;
	code    : number;
	message : string;
	stack   : string;

	constructor(message : string, code : number = 402)
	{
		this.name    = 'Base Exception';
		this.code    = code;
		this.message = message;

		if (Error.captureStackTrace)
			Error.captureStackTrace(this, Exception);
		else
			this.stack = (new Error()).stack;
	}
}