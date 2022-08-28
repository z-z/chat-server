import { RequestActionType } from '../core/type/requestaction';
import { Response } from 'express';

export const index : RequestActionType = (res : Response) => {
	res.send('hello from index');
}