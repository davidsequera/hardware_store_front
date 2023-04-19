import {gql} from 'apollo-angular';

/**
 * Consulta para obtener todos los usuarios del sistema.
 * Devuelve el ID y el nombre de cada usuario.
 */
const GET_ALL_USERS = gql`
  query {
    getAllUsers{
      id
      name
    }
  }
`;

/**
 * Mutación para actualizar los datos de un usuario.
 * Toma como entrada un objeto de tipo `updateUserInput` que contiene los nuevos datos del usuario.
 * Devuelve el ID, el nombre y el apellido del usuario actualizado.
 */
const UPDATE_USER = gql`
  mutation updateUser($userInput: updateUserInput){
    updateUser(input: $userInput){
      id
      name
      last_name
    }
  }
`;

/**
 * Consulta para obtener los datos de un usuario por su ID.
 * Toma como entrada el ID del usuario que se quiere obtener.
 * Devuelve el ID, el nombre, el apellido, la fecha de nacimiento y la ciudad de nacimiento del usuario.
 */
const GET_USER_BY_ID = gql`
  query aquery($userId: ID!){
    getById(id: $userId){
      id
      name
      last_name
      birthday
      city_birth
    }
  }
`;

/**
 * Mutación para crear un nuevo usuario.
 * Toma como entrada un objeto de tipo `createUserInput` que contiene los datos del nuevo usuario.
 * Devuelve el ID, el nombre, el apellido, la fecha de nacimiento y la ciudad de nacimiento del usuario creado.
 */
const CREATE_USER = gql`
  mutation createUser($userInput: createUserInput){
    createUser(input: $userInput){
      id
      name
      last_name
      birthday
      city_birth
    }
  }
`;

/**
 * Mutación para eliminar un usuario por su ID.
 * Toma como entrada el ID del usuario que se quiere eliminar.
 * Devuelve el ID, el nombre y el apellido del usuario eliminado.
 */
const DELETE_USER = gql`
  mutation aquery($id: ID!){
    deleteUser(id: $id){
      id
      name
      last_name
    }
  }
`;

export {GET_ALL_USERS, UPDATE_USER, GET_USER_BY_ID, CREATE_USER, DELETE_USER};
