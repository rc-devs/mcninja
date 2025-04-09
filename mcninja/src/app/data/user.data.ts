import exercisesData from "./exercises.data";
import { Exercise } from "./models/exercise.model";
import { Technique } from "./models/techinque.model";
import { User } from "./models/user.model";

export default <User[]> [
  {
    id: 'u1',
    nameFirst: 'Ya ',
    nameLast: 'mum',
    password: '123',
    email: 'ya_mum@yafamily.com',
    userMastered: <Technique[]>[],
    userNotMastered: <Technique[]>[],
    userExercises: exercisesData,
  },
  {
    id: 'u2',
    nameFirst: 'Ya ',
    nameLast: 'Dad',
    password: '456',
    email: 'ya_dad@yafamily.com',
    userMastered: <Technique[]>[],
    userNotMastered: <Technique[]>[],
    userExercises: exercisesData,
  },
  {
    id: 'u3',
    nameFirst: 'Ya ',
    nameLast: 'Dog',
    password: '789',
    email: 'ya_dog@yafamily.com',
    userMastered: <Technique[]>[],
    userNotMastered: <Technique[]>[],
    userExercises: exercisesData,
  },
]
