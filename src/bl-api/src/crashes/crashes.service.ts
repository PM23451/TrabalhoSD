import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CrashesService {
    private prisma = new PrismaClient();

    async findAll(): Promise<any[]> {
        return this.prisma.crash.findMany();
    }

    async insertCrash(crash: any): Promise<any> {
        return this.prisma.crash.create({
            data: crash,
        });
    }

    async deleteCrash(crashId: number): Promise<any> {
        return this.prisma.crash.delete({
            where: {
                id: crashId,
            },
        });
    }

    async updateCrash(crashId: number, crash: any): Promise<any> {
        return this.prisma.crash.update({
            where: {
                id: crashId,
            },
            data: crash,
        });
    }
}

