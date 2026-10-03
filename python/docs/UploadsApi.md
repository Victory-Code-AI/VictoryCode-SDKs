# victorycode_sdk.UploadsApi

All URIs are relative to *https://sandbox.api.tactixai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_multipart_upload**](UploadsApi.md#complete_multipart_upload) | **POST** /api/v1/client/complete-upload | Complete a multipart upload to S3
[**get_presigned_url**](UploadsApi.md#get_presigned_url) | **GET** /api/v1/client/upload-presigned-url | Get a presigned URL for a specific part of a multipart upload
[**initiate_upload**](UploadsApi.md#initiate_upload) | **POST** /api/v1/client/initiate-upload | Initiate a multipart upload to S3 for a large file


# **complete_multipart_upload**
> CompleteMultipartUploadResponseDto complete_multipart_upload(complete_multipart_upload_dto)

Complete a multipart upload to S3

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.complete_multipart_upload_dto import CompleteMultipartUploadDto
from victorycode_sdk.models.complete_multipart_upload_response_dto import CompleteMultipartUploadResponseDto
from victorycode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.api.tactixai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = victorycode_sdk.Configuration(
    host = "https://sandbox.api.tactixai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.UploadsApi(api_client)
    complete_multipart_upload_dto = victorycode_sdk.CompleteMultipartUploadDto() # CompleteMultipartUploadDto | 

    try:
        # Complete a multipart upload to S3
        api_response = api_instance.complete_multipart_upload(complete_multipart_upload_dto)
        print("The response of UploadsApi->complete_multipart_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->complete_multipart_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **complete_multipart_upload_dto** | [**CompleteMultipartUploadDto**](CompleteMultipartUploadDto.md)|  | 

### Return type

[**CompleteMultipartUploadResponseDto**](CompleteMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Presigned URL for part generated successfully. |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_presigned_url**
> GetPartsPresignUrlResponseDto get_presigned_url(upload_id, part_number)

Get a presigned URL for a specific part of a multipart upload

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.get_parts_presign_url_response_dto import GetPartsPresignUrlResponseDto
from victorycode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.api.tactixai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = victorycode_sdk.Configuration(
    host = "https://sandbox.api.tactixai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.UploadsApi(api_client)
    upload_id = 'upload_id_example' # str | 
    part_number = 3.4 # float | 

    try:
        # Get a presigned URL for a specific part of a multipart upload
        api_response = api_instance.get_presigned_url(upload_id, part_number)
        print("The response of UploadsApi->get_presigned_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->get_presigned_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **str**|  | 
 **part_number** | **float**|  | 

### Return type

[**GetPartsPresignUrlResponseDto**](GetPartsPresignUrlResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Presigned URL for part generated successfully. |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiate_upload**
> InitiateMultipartUploadResponseDto initiate_upload(initiate_multipart_upload_dto)

Initiate a multipart upload to S3 for a large file

### Example

* Bearer (JWT) Authentication (Client-App-Token):
* Api Key Authentication (Client-App-Id):

```python
import victorycode_sdk
from victorycode_sdk.models.initiate_multipart_upload_dto import InitiateMultipartUploadDto
from victorycode_sdk.models.initiate_multipart_upload_response_dto import InitiateMultipartUploadResponseDto
from victorycode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.api.tactixai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = victorycode_sdk.Configuration(
    host = "https://sandbox.api.tactixai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Client-App-Token
configuration = victorycode_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: Client-App-Id
configuration.api_key['Client-App-Id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Client-App-Id'] = 'Bearer'

# Enter a context with an instance of the API client
with victorycode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = victorycode_sdk.UploadsApi(api_client)
    initiate_multipart_upload_dto = victorycode_sdk.InitiateMultipartUploadDto() # InitiateMultipartUploadDto | 

    try:
        # Initiate a multipart upload to S3 for a large file
        api_response = api_instance.initiate_upload(initiate_multipart_upload_dto)
        print("The response of UploadsApi->initiate_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->initiate_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initiate_multipart_upload_dto** | [**InitiateMultipartUploadDto**](InitiateMultipartUploadDto.md)|  | 

### Return type

[**InitiateMultipartUploadResponseDto**](InitiateMultipartUploadResponseDto.md)

### Authorization

[Client-App-Token](../README.md#Client-App-Token), [Client-App-Id](../README.md#Client-App-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Multipart upload initiated successfully, returns uploadId. |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

