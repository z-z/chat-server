import { RequestActionType } from '../core/type/requestaction';
import { Response } from 'express';

export const notfound : RequestActionType = (res : Response) => res.status(404).send('Page not found!');