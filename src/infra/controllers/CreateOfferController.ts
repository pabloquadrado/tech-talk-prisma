import { Controller } from ".";
import { CreateOfferUseCase } from "../../domain/useCases";
import { HttpResponse } from "./Controller";

export class CreateOfferController implements Controller {
  constructor(private readonly createOfferUseCase: CreateOfferUseCase) {}

  async handle(request: CreateOffersController.Request): Promise<HttpResponse> {
    try {
      const offer = await this.createOfferUseCase.execute(request);

      return {
        statusCode: 201,
        body: offer.toJSON()
      };
    } catch (error) {
      console.log(error)
      return {
        statusCode: 400,
        body: error
      }
    }
  }
}

export namespace CreateOffersController {
  export type Request = {
    pharmacyId: number;
    ean: string;
    sku: string;
    price: number;
    priceOriginal: number;
    stock: number;
  }
}