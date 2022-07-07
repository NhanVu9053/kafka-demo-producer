import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'kafka-demo',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'kafka1',
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'kafkademo-group',
        },
      },
    },
  ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
