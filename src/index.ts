import * as express from 'express';
import { Express } from 'express';

import { RequestActionType } from './core/type/requestaction';
import { notfound } from './controller/error';

const app: Express = express();

app.use('/(:controller([A-Z0-9\-_]+)(/:action([A-Z0-9\-_]+)/?)?)?', async (request, response) => {

	const controllerName = request?.params?.controller ?? 'index';
	const actionName     = request?.params?.action ?? 'index';

	try
	{
		const controller = await import(`./controller/${controllerName}`);

		if(!controller[actionName])
			return notfound(response, request);

		const action : RequestActionType = controller[actionName];

		try
		{
			action(response, request);
		}
		catch(err)
		{
			response.status(err.code).send(err);
		}
	}
	catch(err)
	{
		notfound(response, request);
	}

});

const PORT = process.env.PORT || 9000

app.listen(9000, () => console.log(`App listening to ${PORT}. Press Ctrl+C to quit.`));