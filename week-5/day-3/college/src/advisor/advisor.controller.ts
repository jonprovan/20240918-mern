import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { Advisor } from './advisor';
import { DeleteResult } from 'typeorm';

// this annotation sets up this class as a REST controller
// and gives it the proper suffix
// all requests to baseURL/advisor/* will route here
@Controller('advisor')
export class AdvisorController {

    constructor(private service: AdvisorService) {}

    // get all
    @Get()
    @HttpCode(200) // default code if successful; errors thrown within will override
    getAllAdvisors(): Promise<Advisor[]> {
        return this.service.getAllAdvisors();
    }

    // get by ID
    @Get(':id')
    @HttpCode(200)
    // using @Param() to get path variables
    // by itself, it return an object with all params as key-value pairs
    // if you specify a param in the parentheses, it returns just that value
    getAdvisorById(@Param('id') idToFind: number): Promise<Advisor> {
        return this.service.getAdvisorById(idToFind);
    }

    // create one
    @Post()
    @HttpCode(201)
    // taking in our body as an Advisor object
    createAdvisor(@Body() newAdvisor: Advisor) {
        return this.service.createAdvisor(newAdvisor);
    }

    // delete one
    @Delete(':id')
    @HttpCode(204)
    deleteAdvisor(@Param('id') id: number): Promise<DeleteResult> {
        return this.service.deleteAdvisor(id);
    }


}
