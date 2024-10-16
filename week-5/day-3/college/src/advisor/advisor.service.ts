import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advisor } from './advisor';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class AdvisorService {

    // we can create and inject a repository for our advisors right in the constructor
    constructor(@InjectRepository(Advisor) private repo: Repository<Advisor>) {}

    // get all
    async getAllAdvisors(): Promise<Advisor[]> {
        // we can now just call straight to our repo, using its pre-defined methods
        return await this.repo.find();
    }

    // get by ID
    async getAdvisorById(idToFind: number): Promise<Advisor> {
        return await this.repo.findOne({
            // this allows us to put conditions on the search
            where: {
                id: idToFind
            }
        });
    }

    // create one
    async createAdvisor(newAdvisor: Advisor): Promise<Advisor> {
        await this.repo.exists({
            where: {
                id: newAdvisor.id
            }
        }).then(exists => {
            if (exists)
                throw new HttpException(`Advisor with ID ${newAdvisor.id} already exists!`, HttpStatus.BAD_REQUEST);
        })

        return await this.repo.save(newAdvisor);
    }

    // delete one
    async deleteAdvisor(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }

}
