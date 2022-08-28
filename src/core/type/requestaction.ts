import { Request, Response } from 'express';

type RequestActionType = (res : Response, req? : Request) => void;

export { RequestActionType };