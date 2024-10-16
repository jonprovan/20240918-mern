import { Module } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { AdvisorController } from './advisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advisor } from './advisor';

@Module({
  // manually add TypeORM imports/exports
  // these next two lines will not be automatically added
  imports: [ TypeOrmModule.forFeature([Advisor]) ],
  exports: [ TypeOrmModule ],
  providers: [AdvisorService],
  controllers: [AdvisorController]
})
export class AdvisorModule {}
