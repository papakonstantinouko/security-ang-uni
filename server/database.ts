import values from 'lodash/values';
import { LESSONS } from './database-data';

class InMemoryDatabase {
  readAllLessons() {
    return values(LESSONS);
  }
}

export const db = new InMemoryDatabase();
