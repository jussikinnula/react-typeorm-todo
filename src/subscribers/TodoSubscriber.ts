import { EventSubscriber, EntitySubscriberInterface } from '@jussikinnula/typeorm';

@EventSubscriber()
export class TodoSubscriber implements EntitySubscriberInterface<any> {

}
