/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Hotel as PrismaHotel,
  Room as PrismaRoom,
} from "@prisma/client";

export class HotelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HotelCountArgs, "select">): Promise<number> {
    return this.prisma.hotel.count(args);
  }

  async hotels(args: Prisma.HotelFindManyArgs): Promise<PrismaHotel[]> {
    return this.prisma.hotel.findMany(args);
  }
  async hotel(args: Prisma.HotelFindUniqueArgs): Promise<PrismaHotel | null> {
    return this.prisma.hotel.findUnique(args);
  }
  async createHotel(args: Prisma.HotelCreateArgs): Promise<PrismaHotel> {
    return this.prisma.hotel.create(args);
  }
  async updateHotel(args: Prisma.HotelUpdateArgs): Promise<PrismaHotel> {
    return this.prisma.hotel.update(args);
  }
  async deleteHotel(args: Prisma.HotelDeleteArgs): Promise<PrismaHotel> {
    return this.prisma.hotel.delete(args);
  }

  async findRooms(
    parentId: string,
    args: Prisma.RoomFindManyArgs
  ): Promise<PrismaRoom[]> {
    return this.prisma.hotel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rooms(args);
  }
}
