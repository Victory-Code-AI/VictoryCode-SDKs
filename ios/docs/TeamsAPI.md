# TeamsAPI

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](TeamsAPI.md#createteam) | **POST** /api/v1/client/teams | Create a new team
[**deleteTeam**](TeamsAPI.md#deleteteam) | **DELETE** /api/v1/client/teams/{id} | Delete a team
[**listTeams**](TeamsAPI.md#listteams) | **GET** /api/v1/client/teams | Get teams
[**updateTeam**](TeamsAPI.md#updateteam) | **PATCH** /api/v1/client/teams/{id} | Update a team


# **createTeam**
```swift
    open class func createTeam(name: String, sport: String, shortName: String, mascots: String, classification: String, teamLogo: URL? = nil, completion: @escaping (_ data: CreateTeamResponse?, _ error: Error?) -> Void)
```

Create a new team

Creates a new team record in the Tactix system. This endpoint allows clients to define a new team with key details such as name, short name, sport type, classification, mascot(s), and logo. Once created, the team can be referenced in other modules such as Games, Plays, or Game Recaps.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let name = "name_example" // String | 
let sport = "sport_example" // String | (This can only be one of football,rugby,golf,soccer,nfl)
let shortName = "shortName_example" // String | 
let mascots = "mascots_example" // String | Array of Mascot IDs (must not be empty)
let classification = "classification_example" // String | Classification ID
let teamLogo = URL(string: "https://example.com")! // URL |  (optional)

// Create a new team
TeamsAPI.createTeam(name: name, sport: sport, shortName: shortName, mascots: mascots, classification: classification, teamLogo: teamLogo) { (response, error) in
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
 **name** | **String** |  | 
 **sport** | **String** | (This can only be one of football,rugby,golf,soccer,nfl) | 
 **shortName** | **String** |  | 
 **mascots** | **String** | Array of Mascot IDs (must not be empty) | 
 **classification** | **String** | Classification ID | 
 **teamLogo** | **URL** |  | [optional] 

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTeam**
```swift
    open class func deleteTeam(id: String, completion: @escaping (_ data: DeleteTeamResponse?, _ error: Error?) -> Void)
```

Delete a team

Deletes a specific team from the Tactix system using its unique id. This operation permanently removes the team record and its related metadata from the client’s accessible data scope. It should be used with caution, as deleted teams cannot be restored via the API.

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

[**DeleteTeamResponse**](DeleteTeamResponse.md)

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTeams**
```swift
    open class func listTeams(limit: Int? = nil, page: Int? = nil, completion: @escaping (_ data: String?, _ error: Error?) -> Void)
```

Get teams

Retrieves a paginated list of all teams available to the authenticated client. Each team object includes its name, short name, sport type, associated mascots, classification details, logo, and timestamps. This endpoint is typically used for team directories, selection lists, or administrative dashboards that require viewing multiple teams at once.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let limit = 987 // Int |  (optional)
let page = 987 // Int |  (optional)

// Get teams
TeamsAPI.listTeams(limit: limit, page: page) { (response, error) in
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
 **limit** | **Int** |  | [optional] 
 **page** | **Int** |  | [optional] 

### Return type

**String**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTeam**
```swift
    open class func updateTeam(id: String, name: String? = nil, sport: String? = nil, shortName: String? = nil, teamLogo: URL? = nil, mascots: String? = nil, classification: String? = nil, completion: @escaping (_ data: String?, _ error: Error?) -> Void)
```

Update a team

Updates the information of an existing team identified by its unique id. This endpoint allows clients to modify team attributes such as name, short name, sport type, classification, mascots, coach, or logo. Upon successful update, the response returns the updated team object and a confirmation message.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import VictoryCodeSDK

let id = "id_example" // String | 
let name = "name_example" // String |  (optional)
let sport = "sport_example" // String | (This can only be one of football,rugby,golf,soccer,nfl) (optional)
let shortName = "shortName_example" // String |  (optional)
let teamLogo = URL(string: "https://example.com")! // URL |  (optional)
let mascots = "mascots_example" // String | Array of Mascot IDs (must not be empty) (optional)
let classification = "classification_example" // String | Classification ID (optional)

// Update a team
TeamsAPI.updateTeam(id: id, name: name, sport: sport, shortName: shortName, teamLogo: teamLogo, mascots: mascots, classification: classification) { (response, error) in
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
 **name** | **String** |  | [optional] 
 **sport** | **String** | (This can only be one of football,rugby,golf,soccer,nfl) | [optional] 
 **shortName** | **String** |  | [optional] 
 **teamLogo** | **URL** |  | [optional] 
 **mascots** | **String** | Array of Mascot IDs (must not be empty) | [optional] 
 **classification** | **String** | Classification ID | [optional] 

### Return type

**String**

### Authorization

[AppToken](../README.md#AppToken), [AppId](../README.md#AppId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

