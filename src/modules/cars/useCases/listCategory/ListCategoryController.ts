import { Request,Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase){}
  
  handle(request:Request, response: Response): Response {
    const allCategories = this.listCategoryUseCase.execute();

    return response.json(allCategories);
  }
}