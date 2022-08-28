import { IUser } from '.';
import { apiService } from '../../services';

export const loginUser = (user:IUser): Promise<any> => apiService.post('auth/login',user)