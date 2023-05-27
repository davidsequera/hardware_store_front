// interface Query {
//     getAllTools: Tool[];
//     countTools: number;
//     getTools(input: ToolPageInput): Tool[];
//     getToolsByName(input: ToolPageInput, search: string): Tool[];
//     getToolById(id: string): Tool;
//     getBrands: Brand[];
//     getBrandById(id: string): Brand;
//     getCities: City[];
//     getCityById(id: string): City;
// }
  
// interface Mutation {
//     createTool(input: CreateToolInput): Tool;
//     updateTool(input: UpdateToolInput): Tool;
//     deleteTool(id: string): Tool;
//     createBrand(input: CreateBrandInput): Brand;
//     updateBrand(input: UpdateBrandInput): Brand;
//     deleteBrand(id: string): Brand;
//     createCity(input: CreateCityInput): City;
//     updateCity(input: UpdateCityInput): City;
//     deleteCity(id: string): City;
// }


interface Tool {
    id: string;
    name: string;
    description: string;
    price: number;
    amount?: number;
    brand: Brand;
    cities: City[];
}

interface City {
    id: string;
    name: string;
}

interface Brand {
    id: string;
    name: string;
    tools: Tool[];
    foundation_year?: number;
}

interface ToolPageInput {
    page: number;
    size: number;
}

interface CreateToolInput {
    name: string;
    description: string;
    price: number;
    amount?: number;
    brandId: string;
    cities: string[];
}

interface UpdateToolInput {
    id: string;
    name?: string;
    description?: string;
    price?: number;
    amount?: number;
    brandId?: string;
    cities?: string[];
}

interface CreateBrandInput {
    name: string;
    tools?: string[];
}

interface UpdateBrandInput {
    id: string;
    name?: string;
    tools?: string[];
}

interface CreateCityInput {
    name: string;
}

interface UpdateCityInput {
    id: string;
    name?: string;
}

interface ToolPage {
    length: number;
    pages: number;
    tools: Tool[];
    total: number;
}


interface FilterInput{
    field: string
    values: string[]
}

export {Tool, City, Brand, ToolPageInput, CreateToolInput, UpdateToolInput, CreateBrandInput, UpdateBrandInput, CreateCityInput, UpdateCityInput, ToolPage, FilterInput}
    