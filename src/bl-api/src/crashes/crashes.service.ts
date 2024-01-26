import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UuidFactory } from '@nestjs/core/inspector/uuid-factory';

@Injectable()
export class CrashesService {
    private prisma = new PrismaClient();

    async findAll(): Promise<any[]> {
        return this.prisma.crash.findMany();
    }

    async create(crash: any): Promise<any> {
        console.log("Crash Service");
        console.log(crash);
        if (!crash.collisionId) {
            //Procurar o ultimo id
            const crashes = await this.findAll();
            const lastId = crashes[crashes.length - 1].collisionId;
            if(lastId == undefined) {
                crash.collisionId = 1;
            } else {
                crash.collisionId = lastId + 1;
            }
        }
        console.log("Crash Service");
        console.log(crash);
        return this.prisma.crash.create({
            data: crash
        });
    }

    async delete(id: number): Promise<any> {
        return this.prisma.crash.delete({
            where: { collisionId: id }
        });
    }

    async update(id: number, crash: any): Promise<any> {
        return this.prisma.crash.update({
            where: { collisionId: id },
            data: crash
        });
    }
}

