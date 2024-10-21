import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

// npm i axios, rxjs and @nestjs/axios for this page to work!!

// the Injectable decorator says this is a provider that can be injected into other classes as needed
@Injectable()
export class AppService {

  // injecting Nest's HttpService here for our use connecting to an external API
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // this method reaches out to another API and returns its results
  async getFromExternalApi(): Promise<any> {
    const { data } = await firstValueFrom(
      // first parameter is URL, second is options if you need them
      this.httpService.get<any>('https://www.thecocktaildb.com/api/json/v1/1/random.php').pipe(
        catchError((error: AxiosError) => {
          console.log(error.message);
          throw new HttpException('Request from backend to external API has an incorrect URL!', HttpStatus.BAD_REQUEST);
        })
      )
    )

    return data;
  }

}
