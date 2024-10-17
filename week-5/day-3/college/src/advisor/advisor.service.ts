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
        return await this.repo.find({
            relations: {
                students: {
                    courses: true
                }
            }
        });
    }

    // get by ID
    async getAdvisorById(idToFind: number): Promise<Advisor> {
        return await this.repo.findOneOrFail({
            where: {
                id: idToFind
            },
            relations: {
                students: {
                    courses: true
                }
            }
        }).catch(() => {
            throw new HttpException(`Advisor with ID ${idToFind} does not exist!`, HttpStatus.NOT_FOUND)
        })
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

        // if you wanted to get the relations back on a save call, you'd have to do something like this
        // because save doesn't allow us to indicate we'd like to see the relations

        // let newId: number;
        // await this.repo.save(newAdvisor).then(data => {
        //     newId = data.id
        // })

        // return await this.getAdvisorById(newId);
    }

    // update one
    async updateAdvisor(routeId: number, advisorToUpdate: Advisor) {
        // checking if the route ID and the one in the body match
        if (routeId != advisorToUpdate.id) {
            throw new HttpException(`Route ID and Body ID do not match!`, HttpStatus.BAD_REQUEST);
        }

        // checking that the Advisor we want to update exists in the database already
        // if it doesn't we'd create a new one, which we don't want
        await this.repo.exists({
            where: {
                id: advisorToUpdate.id
            }
        }).then(exists => {
            if (!exists)
                throw new HttpException(`Advisor with ID ${advisorToUpdate.id} does not exist!`, HttpStatus.NOT_FOUND);
        })

        // TO-DO: adjust for relations when we have them *******************************************
        return await this.repo.save(advisorToUpdate);
    }

    // delete one
    async deleteAdvisor(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }

}
