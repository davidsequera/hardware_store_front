import {gql} from 'apollo-angular'

const GET_ALL_TOOLS = gql`
  query {
    getAllTools {
        id
        name
        description
        brand{
          id
        }
    }
    getBrands{
        id
        name
    }

  }
`




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
`

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
`


const GET_TOOL_BY_NAME = gql`
  query getToolsByName($toolPageInput: toolPageInput, $search: String){
    getToolsByName(input: $toolPageInput, search: $search){
        id
        name
        description
        brand{
            id
            name
        }
    }
  }
`

const GET_TOOL_BY_FILTER = gql`
  query getToolsByFilter($toolPageInput: toolPageInput!, $filters: [filterInput!]){
      getToolsByFilter(input: $toolPageInput, filters: $filters){
          total
          length
          pages
          page
          tools{
              id
              name
              brand{
                  id
                  name
              }
          }
      }
      getBrands{
          id
          name
      }
  }
`


const GET_BRANDS = gql`
  query {
    getBrands {
        id
        name
    }
  }
`


const GET_CITITES = gql`
  query {
    getCities {
        id
        name
    }
  }
`

const GET_CITY_BY_ID = gql`
  query getCityById($cityId: ID!){
      getCityById(id: $cityId){
          id
          name
      }
  }
`

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
`

const UPDATE_TOOL = gql`
  mutation updateTool($toolInput: updateToolInput){
      updateTool(input: $toolInput){
          id
          name
          description
      }
  }
`

const DELETE_TOOL = gql`
  mutation aquery($id: ID!){
      deleteTool(id: $id){
          id
          name
      }
  }
  `

export { GET_ALL_TOOLS, GET_TOOLS,GET_TOOL_BY_NAME, GET_TOOL_BY_ID, GET_BRANDS, GET_CITITES, GET_CITY_BY_ID, CREATE_TOOL, UPDATE_TOOL, DELETE_TOOL, GET_TOOL_BY_FILTER}
