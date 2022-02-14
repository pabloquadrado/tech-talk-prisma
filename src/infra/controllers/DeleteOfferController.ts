import { Controller } from ".";
import { DeleteOfferUseCase } from "../../domain/useCases";
import { HttpResponse } from "./Controller";

export class DeleteOfferController implements Controller {
  constructor(private readonly deleteOfferUseCase: DeleteOfferUseCase) {}

  async handle({ id }: DeleteOffersController.Request): Promise<HttpResponse> {
    try {
      await this.deleteOfferUseCase.execute({ id });

      return { statusCode: 204 };
    } catch (error) {
      return {
        statusCode: 400,
        body: error
      }
    }
  }
}

export namespace DeleteOffersController {
  export type Request = {
    id: number;
  }
}