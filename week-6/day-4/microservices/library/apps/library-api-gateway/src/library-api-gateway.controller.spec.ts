import { Test, TestingModule } from '@nestjs/testing';
import { LibraryApiGatewayController } from './library-api-gateway.controller';
import { LibraryApiGatewayService } from './library-api-gateway.service';

describe('LibraryApiGatewayController', () => {
  let libraryApiGatewayController: LibraryApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LibraryApiGatewayController],
      providers: [LibraryApiGatewayService],
    }).compile();

    libraryApiGatewayController = app.get<LibraryApiGatewayController>(LibraryApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(libraryApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
