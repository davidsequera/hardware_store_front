import { gql } from 'apollo-angular';

/**
 * Consulta GraphQL para obtener todas las herramientas
 */
const GET_ALL_TOOLS = gql`
  query {
    getAllTools {
      id
      name
      description
    }
  }
`;

/**
 * Consulta GraphQL para obtener herramientas paginadas
 */
const GET_TOOLS = gql`
  query toolsPage($toolPageInput: toolPageInput!){
    getTools(input: $toolPageInput){
      id
      name
      description
      brand{
        name
      }
    }
  }
`;

/**
 * Consulta GraphQL para obtener una herramienta por su ID
 */
const GET_TOOL_BY_ID = gql`
  query toolById($toolId: ID!){
    getToolById(id: $toolId){
      id
      name
      description
      brand{
        name
      }
    }
  }
`;

/**
 * Consulta GraphQL para obtener todas las marcas
 */
const GET_BRANDS = gql`
  query {
    getBrands {
      id
      name
    }
  }
`;

/**
 * Consulta GraphQL para obtener todas las ciudades
 */
const GET_CITITES = gql`
  query {
    getCities {
      id
      name
    }
  }
`;

/**
 * Consulta GraphQL para obtener una ciudad por su ID
 */
const GET_CITY_BY_ID = gql`
  query getCityById($cityId: ID!){
    getCityById(id: $cityId){
      id
      name
    }
  }
`;

/**
 * Mutación GraphQL para crear una nueva herramienta
 */
const CREATE_TOOL = gql`
  mutation createTool($toolInput: createToolInput){
    createTool(input: $toolInput){
      id
      name
      brand{
        name
      }
    }
  }
`;

/**
 * Mutación GraphQL para actualizar una herramienta existente
 */
const UPDATE_TOOL = gql`
  mutation updateTool($toolInput: updateToolInput){
    updateTool(input: $toolInput){
      id
      name
      description
    }
  }
`;

/**
 * Mutación GraphQL para eliminar una herramienta existente
 */
const DELETE_TOOL = gql`
  mutation aquery($id: ID!){
    deleteTool(id: $id){
      id
      name
    }
  }
`;

export {
  GET_ALL_TOOLS,
  GET_TOOLS,
  GET_TOOL_BY_ID,
  GET_BRANDS,
  GET_CITITES,
  GET_CITY_BY_ID,
  CREATE_TOOL,
  UPDATE_TOOL,
  DELETE_TOOL
};
