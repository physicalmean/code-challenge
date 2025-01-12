### Features

- **Create Resource**: Add a new resource to the database.
- **Read Resources**: Retrieve a list of all resources or a specific resource by ID.
- **Update Resource**: Modify an existing resource.
- **Delete Resource**: Remove a resource from the database.
- **Request Validation**: Middleware to validate incoming requests for resource creation and updates.

## Setup

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd src/problem5
```

2. Install dependencies:

```sh
 npm install
```

### Running the Project

1. Start the server:

```sh
 npm start
```

2. The server will be running on `http://localhost:3000`

### API Endpoints

- POST /resources: Create a new resource.
  Request body should include name and description.
- GET /resources: Retrieve a list of all resources.
- GET /resources/:id: Retrieve a specific resource by ID.
- PUT /resources/:id: Update a specific resource by ID. Request body can include name and/or description.
- DELETE /resources/:id: Delete a specific resource by ID.

### Example Requests

#### Create a Resource

```sh
curl -X POST http://localhost:3000/resources -H "Content-Type: application/json" -d '{"name": "Resource1", "description": "This is a resource."}'
```

#### Get All Resources

```sh
curl http://localhost:3000/resources
```

#### Get a Resource by ID

```sh
curl http://localhost:3000/resources/<resource-id>
```

#### Update a Resource

```sh
curl -X PUT http://localhost:3000/resources/<resource-id> -H "Content-Type: application/json" -d '{"name": "Updated Resource"}'
```

#### Delete a Resource

```sh
curl -X DELETE http://localhost:3000/resources/<resource-id>
```
