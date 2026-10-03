# TeamsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](TeamsAPI.md#createteam) | **POST** /api/v1/client/teams | Create a new team
[**deleteTeam**](TeamsAPI.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team
[**getTeams**](TeamsAPI.md#getteams) | **GET** /api/v1/client/teams | Get teams
[**updateTeam**](TeamsAPI.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team


# **createTeam**
```swift
    open class func createTeam(createTeamDto: CreateTeamDto, completion: @escaping (_ data: SingleTeamResponseDto?, _ error: Error?) -> Void)
```

Create a new team

Registers a new team in the system, including its name, short name, sport, mascots, classification.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let createTeamDto = CreateTeamDto(name: "name_example", shortName: "shortName_example", city: "city_example", state: "state_example", mascots: ["mascots_example"], classification: "classification_example") // CreateTeamDto | 

// Create a new team
TeamsAPI.createTeam(createTeamDto: createTeamDto) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeamDto** | [**CreateTeamDto**](CreateTeamDto.md) |  | 

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTeam**
```swift
    open class func deleteTeam(id: String, completion: @escaping (_ data: DeleteResponseDto?, _ error: Error?) -> Void)
```

Delete a team

Permanently deletes a team record from the system.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 

// Delete a team
TeamsAPI.deleteTeam(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**DeleteResponseDto**](DeleteResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTeams**
```swift
    open class func getTeams(limit: Double? = nil, offset: Double? = nil, search: String? = nil, state: String? = nil, completion: @escaping (_ data: ListTeamPaginatedResponseDto?, _ error: Error?) -> Void)
```

Get teams

Retrieves a paginated list of all teams belonging to the client. Supports filters for search, sport, and state.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Double | The number of results to return per page. (optional) (default to 50)
let offset = 987 // Double | The number of results to skip for pagination. (optional) (default to 0)
let search = "search_example" // String |  (optional)
let state = "state_example" // String |  (optional)

// Get teams
TeamsAPI.getTeams(limit: limit, offset: offset, search: search, state: state) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Double** | The number of results to return per page. | [optional] [default to 50]
 **offset** | **Double** | The number of results to skip for pagination. | [optional] [default to 0]
 **search** | **String** |  | [optional] 
 **state** | **String** |  | [optional] 

### Return type

[**ListTeamPaginatedResponseDto**](ListTeamPaginatedResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTeam**
```swift
    open class func updateTeam(id: String, updateTeamDto: UpdateTeamDto, completion: @escaping (_ data: SingleTeamResponseDto?, _ error: Error?) -> Void)
```

Update a team

Updates the details of an existing team identified by its ID. Allows updating the name, short name, coach, logo, and other details.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let updateTeamDto = UpdateTeamDto(name: "name_example", shortName: "shortName_example", city: "city_example", state: "state_example", mascots: ["mascots_example"], classification: "classification_example") // UpdateTeamDto | 

// Update a team
TeamsAPI.updateTeam(id: id, updateTeamDto: updateTeamDto) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 
 **updateTeamDto** | [**UpdateTeamDto**](UpdateTeamDto.md) |  | 

### Return type

[**SingleTeamResponseDto**](SingleTeamResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

