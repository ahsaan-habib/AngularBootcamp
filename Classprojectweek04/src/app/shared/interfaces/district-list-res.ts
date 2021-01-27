import {ServiceResult} from './service-result';
import {DistrictInfo} from './district-info';

export interface DistrictListRes {
  serviceResult: ServiceResult;
  data: DistrictInfo[];
}
