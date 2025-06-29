/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ExchangeService } from "../exchange.service";
import { ExchangeCreateInput } from "./ExchangeCreateInput";
import { Exchange } from "./Exchange";
import { ExchangeFindManyArgs } from "./ExchangeFindManyArgs";
import { ExchangeWhereUniqueInput } from "./ExchangeWhereUniqueInput";
import { ExchangeUpdateInput } from "./ExchangeUpdateInput";

export class ExchangeControllerBase {
  constructor(protected readonly service: ExchangeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Exchange })
  async createExchange(
    @common.Body() data: ExchangeCreateInput
  ): Promise<Exchange> {
    return await this.service.createExchange({
      data: data,
      select: {
        createdAt: true,
        fromUser: true,
        id: true,
        plantOffered: true,
        plantRequested: true,
        status: true,
        toUser: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Exchange] })
  @ApiNestedQuery(ExchangeFindManyArgs)
  async exchanges(@common.Req() request: Request): Promise<Exchange[]> {
    const args = plainToClass(ExchangeFindManyArgs, request.query);
    return this.service.exchanges({
      ...args,
      select: {
        createdAt: true,
        fromUser: true,
        id: true,
        plantOffered: true,
        plantRequested: true,
        status: true,
        toUser: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Exchange })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async exchange(
    @common.Param() params: ExchangeWhereUniqueInput
  ): Promise<Exchange | null> {
    const result = await this.service.exchange({
      where: params,
      select: {
        createdAt: true,
        fromUser: true,
        id: true,
        plantOffered: true,
        plantRequested: true,
        status: true,
        toUser: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Exchange })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateExchange(
    @common.Param() params: ExchangeWhereUniqueInput,
    @common.Body() data: ExchangeUpdateInput
  ): Promise<Exchange | null> {
    try {
      return await this.service.updateExchange({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fromUser: true,
          id: true,
          plantOffered: true,
          plantRequested: true,
          status: true,
          toUser: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Exchange })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteExchange(
    @common.Param() params: ExchangeWhereUniqueInput
  ): Promise<Exchange | null> {
    try {
      return await this.service.deleteExchange({
        where: params,
        select: {
          createdAt: true,
          fromUser: true,
          id: true,
          plantOffered: true,
          plantRequested: true,
          status: true,
          toUser: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
