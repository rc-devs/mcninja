import exercisesData from "./exercises.data";
import { Technique } from "./models/techinque.model";
import { User } from "./models/user.model";

export default <User[]> [
  {
    id: 'u1',
    nameFirst: 'Ya ',
    nameLast: 'mum',
    email: 'ya_mum@yafamily.com',
    userMastered: <Technique[]>[],
    userNotMastered: <Technique[]>[],
    userExercises: exercisesData,
  },
  {
    id: 'u2',
    nameFirst: 'Ya ',
    nameLast: 'Dad',
    email: 'ya_dad@yafamily.com',
    userMastered: <Technique[]>[],
    userNotMastered: <Technique[]>[],
    userExercises: exercisesData,
  },
  {
    id: 'u3',
    nameFirst: 'Ya ',
    nameLast: 'Dog',
    email: 'ya_dog@yafamily.com',
    userMastered: <Technique[]>[],
    userNotMastered: <Technique[]>[],
    userExercises: exercisesData,
  },
]
