import { Controller } from ".";
import { GetOfferUseCase } from "../../domain/useCases";
import { HttpResponse } from "./Controller";

export class GetOfferController implements Controller {
  constructor(private readonly getOfferUseCase: GetOfferUseCase) {}

  async handle({ id }: GetOfferController.Request): Promise<HttpResponse> {
    try {
      const offer = await this.getOfferUseCase.execute({ id });

      return {
        statusCode: 200,
        body: offer.toJSON()
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: error
      }
    }
  }
}

export namespace GetOfferController {
  export type Request = {
    id: number;
  }
}