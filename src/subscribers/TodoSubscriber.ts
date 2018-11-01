import { EventSubscriber, EntitySubscriberInterface } from 'typeorm';

@EventSubscriber()
export class TodoSubscriber implements EntitySubscriberInterface<any> {

}
