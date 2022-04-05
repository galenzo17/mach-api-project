// // src/users/usersService.ts
// import { IQuestion } from "../models/Question";

// // A post request should not contain an id.
// export type QuestionCreationParams = Pick<IQuestion, "email" | "name" | "phoneNumbers">;

// export class QuestionService {
//   public get(id: number, commonQ?: string): IQuestion {
//     return {
//       id,
//       commonQ: "jane@doe.com",
//     };
//   }

//   public create(userCreationParams: QuestionCreationParams): IQuestion {
//     return {
//       id: Math.floor(Math.random() * 10000), // Random
//       ...userCreationParams,
//     };
//   }
// }