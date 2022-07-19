import * as SwaggerPetstore from "../stub"
import {mockPetApi} from "./mockApi/mockPetApi"

const DEMO_MODE = true

let petApi

if (DEMO_MODE) {
	petApi = mockPetApi
} else {
	petApi = new SwaggerPetstore.PetApi()
}

export default petApi

// const defaultClient = SwaggerPetstore.ApiClient.instance

// defaultClient.basePath = http://example.com

// Configure API key authorization: Bearer
// let Bearer = defaultClient.authentications["Bearer"]
// Bearer.apiKey = token
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// Bearer.apiKeyPrefix = "Bearer"
