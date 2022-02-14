import { Controller } from '../../infra/controllers';
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle({
      ...(request.body || {}),
      ...(request.params || {}),
    })

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    }

    return response.status(httpResponse.statusCode).json({
      error: httpResponse.body.message
    })
  }
}