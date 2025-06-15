import { SerializeInterceptor } from './serialize.interceptor';
import { PublicGetCoursesDto } from '@/modules/course/dto/public-get-courses.dto';

describe('SerializeInterceptor', () => {
  it('should be defined', () => {
    expect(new SerializeInterceptor(PublicGetCoursesDto, true)).toBeDefined();
  });
});
