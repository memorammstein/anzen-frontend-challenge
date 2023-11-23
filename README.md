# anzen-frontend-challenge
Author: Guillermo Jimenez

## Reference
Challenge: https://gist.github.com/joseamuniz/c2dced8e82158702f991f71174ebf801

## Implementation options
- Single file static page (selected):
- Template Engine-rendered page:
- Component-based application:


## Result
_[screenshot]_

## Backend endpoints
- `/user/:id/details`:
```json
{
    "id": "018bf960-e86e-7902-910c-af0c4eca5c12",
    "firstName": "Jane",
    "lastName": "Scott",
    "currentPosition": "accountant",
    "contractType": "full-time",
    "startDate": "2020-10-10T00:00:00Z",
    "manager": {
        "id": "018bf96b-ddfb-73df-ad55-075967d448f0",
        "firstName": "John",
        "lastName": "Doe"
    },
    "avatarUrl": "https://cdn.anzen.com/files/018bf96a-ced5-7071-b2a0-90d9a624de7b"
}
```
- `/user/:id/onboarding-steps`: 
```json
{
    "data": [
        {
            "id": "018bf96e-2832-70df-91e8-81b733bfda87",
            "displayText": "Offer letter signatures",
            "status": {
                "status": "complete",
                "description": ""
            },
            "file": {
                "fileUrl": "https://cdn.anzen.com/files/018bf96e-f216-7ff1-a548-fd1ed35bb8ce",
                "fileName": "Offer_letter.csv"

            }
        },
        {
            "id": "018bf977-ea0f-7a9b-8cd8-35544b8af77d",
            "displayText": "Invention agreements executed",
            "status": {
                "status": "incomplete",
                "description": "Missing document"
            },
            "file": null
        },
        ... //other steps
    ]
}
```
- `/file/:id` (extra): 
```
📄
```
While documents could be included as direct cdn/storage urls, creating a `files` endpoint could provide some key benefits:
    - Stability: a stable file id and endpoint can be provided, allowing for the actual file location to be updated without requiring resource url validation.
    - Flexibility: custom parameters could be passed down to the endpoint to, for example, configure delivery options.
    - Security: the same auth configuration/middleware setup used for other endpoints could be used here (instead of a separate setup, if required).
- Auth (extra): The provided mockup does not include a header (or any other) section that displays an active user account (session), but considering the data displayed on the main body, it could be assumed that some sort of authentication/authorization middleware would be required for the other endpoints.