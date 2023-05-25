interface User {
    id?: string;
    name?: string;
    last_name?: string;
    username?: string;
    birthday?: string;
    city_birth?: string;
    credentials?: string[];
}
  
  
interface CreateUserInput {
    name: string;
    last_name: string;
    username: string;
    birthday: string;
    city_birth: string;
}
  
interface UpdateUserInput {
    id: string;
    name?: string;
    username?: string;
    last_name?: string;
    birthday?: string;
    city_birth?: string;
}
  

export {User, CreateUserInput, UpdateUserInput}