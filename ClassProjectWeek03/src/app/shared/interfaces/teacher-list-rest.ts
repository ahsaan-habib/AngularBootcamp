import {ServiceResult} from './service-result';
import {PeopleInfo} from './people-info';

export interface TeacherListRest {
  serviceResult: ServiceResult;
  data: PeopleInfo[];
}
