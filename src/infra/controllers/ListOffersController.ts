import { Controller } from ".";
import { ListOffersUseCase } from "../../domain/useCases";
import { HttpResponse } from "./Controller";

export class ListOffersController implements Controller {
  constructor(private readonly listOffersUseCase: ListOffersUseCase) {}


  async handle({ page, limit }: ListOffersController.Request): Promise<HttpResponse> {
    try {
      const offers = await this.listOffersUseCase.execute({ page, limit });

      return {
        statusCode: 200,
        body: offers.map(offer => offer.toJSON())
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: error
      }
    }
  }
}

export namespace ListOffersController {
  export type Request = {
    page: number;
    limit: number;
  }
}