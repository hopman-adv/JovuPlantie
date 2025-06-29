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
import { ChatMessageService } from "../chatMessage.service";
import { ChatMessageCreateInput } from "./ChatMessageCreateInput";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageFindManyArgs } from "./ChatMessageFindManyArgs";
import { ChatMessageWhereUniqueInput } from "./ChatMessageWhereUniqueInput";
import { ChatMessageUpdateInput } from "./ChatMessageUpdateInput";

export class ChatMessageControllerBase {
  constructor(protected readonly service: ChatMessageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChatMessage })
  async createChatMessage(
    @common.Body() data: ChatMessageCreateInput
  ): Promise<ChatMessage> {
    return await this.service.createChatMessage({
      data: {
        ...data,

        plant: data.plant
          ? {
              connect: data.plant,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        plant: {
          select: {
            id: true,
          },
        },

        receiver: true,
        sender: true,
        sentAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ChatMessage] })
  @ApiNestedQuery(ChatMessageFindManyArgs)
  async chatMessages(@common.Req() request: Request): Promise<ChatMessage[]> {
    const args = plainToClass(ChatMessageFindManyArgs, request.query);
    return this.service.chatMessages({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        plant: {
          select: {
            id: true,
          },
        },

        receiver: true,
        sender: true,
        sentAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChatMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chatMessage(
    @common.Param() params: ChatMessageWhereUniqueInput
  ): Promise<ChatMessage | null> {
    const result = await this.service.chatMessage({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        plant: {
          select: {
            id: true,
          },
        },

        receiver: true,
        sender: true,
        sentAt: true,
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
  @swagger.ApiOkResponse({ type: ChatMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChatMessage(
    @common.Param() params: ChatMessageWhereUniqueInput,
    @common.Body() data: ChatMessageUpdateInput
  ): Promise<ChatMessage | null> {
    try {
      return await this.service.updateChatMessage({
        where: params,
        data: {
          ...data,

          plant: data.plant
            ? {
                connect: data.plant,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          plant: {
            select: {
              id: true,
            },
          },

          receiver: true,
          sender: true,
          sentAt: true,
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
  @swagger.ApiOkResponse({ type: ChatMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChatMessage(
    @common.Param() params: ChatMessageWhereUniqueInput
  ): Promise<ChatMessage | null> {
    try {
      return await this.service.deleteChatMessage({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          plant: {
            select: {
              id: true,
            },
          },

          receiver: true,
          sender: true,
          sentAt: true,
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
