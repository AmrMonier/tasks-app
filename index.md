# Project: Task Manager App

[github repo](https://github.com/AmrMonier/tasks-manager-app)

an API which provides the functionality of a TODO APP which is built using Node.js

all the requests are not public and require you to have a Json Web Token to be able to access the the app. the Json Web Token can be obtained form the only two public end point the **Register** User which allow us to get a new account and the **Login** end point which authenticate users

## End-point: Register User

Registering a new User Account

### Method: POST

> ```
> {{url}}/users
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "name": "Amr Monier",
  "password": "a12345678",
  "email": "a.monier@gmail.com",
  "age": 23
}
```

### Response: 201

```json
{
  "user": {
    "name": "Amira Monier",
    "email": "amira@task-manager.com",
    "password": "$2b$10$.DCmellzlwAzDGuXebGioOacxuJX0YhIWocx1f4VbcSr79FRryJUC",
    "age": 23,
    "_id": "61af14f335f31f20367b8f6f",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW1pcmEgTW9uaWVyIiwiZW1haWwiOiJhbWlyYUB0YXNrLW1hbmFnZXIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkLkRDbWVsbHpsd0F6REd1WGViR2lvT2FjeHVKWDBZaElXb2N4MWY0VmJjU3I3OUZScnlKVUMiLCJhZ2UiOjIzLCJfaWQiOiI2MWFmMTRmMzM1ZjMxZjIwMzY3YjhmNmYiLCJfX3YiOjAsImlhdCI6MTYzODg2NDExNX0.9CJ1AxJ1keic5_3oZ7inhTcl5dn_iYI9oQmVaoJWgEA"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get User Profile

Get the Authenticated user information

### Method: GET

> ```
> {{url}}/users/me
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value |
| ------------ | ----- |
|              |       |

### 🔑 Authentication bearer

| Param | value     | Type   |
| ----- | --------- | ------ |
| token | {{token}} | string |

### Response: 200

```json
{
  "user": {
    "_id": "61b39cec922b5ee7253a9b9f",
    "name": "Amr Monier",
    "email": "a.monier@gmail.com",
    "age": 23
  },
  "tasks": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User Login

Authenticate a user

### Method: POST

> ```
> {{url}}/auth/login
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "password": "a12345678",
  "email": "a.monier@gmail.com"
}
```

### Response: 200

```json
{
  "user": {
    "_id": "61b39cec922b5ee7253a9b9f",
    "name": "Amr Monier",
    "email": "a.monier@gmail.com",
    "age": 23
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIzOWNlYzkyMmI1ZWU3MjUzYTliOWYiLCJuYW1lIjoiQW1yIE1vbmllciIsImVtYWlsIjoiYS5tb25pZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkLlYxcHJiYnRaZm81VzhBanZsMTF3ZU83SFNMV0p0Z2ZPazluYjljd1kueHUwUUMzcHJsU2kiLCJhZ2UiOjIzLCJfX3YiOjAsImlhdCI6MTYzOTE2MTIyOH0.15R2AFSGRIWhSUcxXHKGpIau16J-VecM5o000TDLeJQ"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update User

Update an existing User by providing an object with any field we want to update

### Method: PUT

> ```
> {{url}}/users/me
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "name": "Amira axel",
  "password": "a123456"
}
```

### Response: 202

```json
{
  "user": {
    "_id": "61b39cec922b5ee7253a9b9f",
    "name": "Amira axel",
    "email": "a.monier@gmail.com",
    "age": 23
  }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete User

this End Point allow a user to delete his own account, so use it **wisely**

### Method: DELETE

> ```
> {{url}}/users/me
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get user avatar

get the avatar of the current authenticated user

### Method: GET

> ```
> {{url}}/users/me/avatar
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: upload user avatar

upload an avatar for the currently authenticated user it must be an image of type

- png
- jpg
- jpeg

and with 5MB as the maximum file size

### Method: POST

> ```
> {{url}}/users/me/avatar
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value |
| ------------ | ----- |
|              |       |

### Body formdata

| Param  | value | Type |
| ------ | ----- | ---- |
| avatar |       | file |

### Response: 200

```json
{
  "user": {
    "_id": "61b39cec922b5ee7253a9b9f",
    "name": "Amira axel",
    "email": "a.monier@gmail.com",
    "age": 23
  }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Fetch All Tasks

Fetching all the **Tasks** related to the currently authenticated user with ability to filter them using the query parameters in the URL by adding the field name and the value desired for example

```
?completed=true

```

this would return all the tasks with their completed field equal to true

also we can sort the tasks based on any field we want using the sort query parameter using the following format

```
?sortBy=fieldName:ASCOrDESC

```

for example if we want to find all the uncompleted tasks and sort them to get the recently updated one first we use the following

```
?completed=false&sortBy=sortBy:updatedAt:desc

```

### Method: GET

> ```
> {{url}}/tasks?completed=true&sortBy=createdAt:desc
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value |
| ------------ | ----- |
|              |       |

### Query Params

| Param     | value          |
| --------- | -------------- |
| completed | true           |
| sortBy    | createdAt:desc |

### Response: 200

```json
{
  "tasks": [
    {
      "_id": "61b39e57922b5ee7253a9ba8",
      "description": "Shoping for Friday party",
      "completed": false,
      "owner": "61b39cec922b5ee7253a9b9f",
      "createdAt": "2021-12-10T18:37:11.857Z",
      "updatedAt": "2021-12-10T18:37:11.857Z",
      "__v": 0
    },
    {
      "_id": "61b39e64922b5ee7253a9bab",
      "description": "Go to Gym",
      "completed": false,
      "owner": "61b39cec922b5ee7253a9b9f",
      "createdAt": "2021-12-10T18:37:24.316Z",
      "updatedAt": "2021-12-10T18:37:24.316Z",
      "__v": 0
    },
    {
      "_id": "61b39e77922b5ee7253a9bae",
      "description": "Finish the Node.js course",
      "completed": true,
      "owner": "61b39cec922b5ee7253a9b9f",
      "createdAt": "2021-12-10T18:37:43.590Z",
      "updatedAt": "2021-12-10T18:37:43.590Z",
      "__v": 0
    },
    {
      "_id": "61b39e8b922b5ee7253a9bb1",
      "description": "Find the love of my life",
      "completed": false,
      "owner": "61b39cec922b5ee7253a9b9f",
      "createdAt": "2021-12-10T18:38:03.414Z",
      "updatedAt": "2021-12-10T18:38:03.414Z",
      "__v": 0
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Task

Adding a new task to the current authenticated user tasks

### Method: POST

> ```
> {{url}}/tasks
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "description": "Find the love of my life",
  "completed": false
}
```

### Response: 201

```json
{
  "task": {
    "description": "Find the love of my life",
    "completed": false,
    "owner": "61b39cec922b5ee7253a9b9f",
    "_id": "61b39e8b922b5ee7253a9bb1",
    "createdAt": "2021-12-10T18:38:03.414Z",
    "updatedAt": "2021-12-10T18:38:03.414Z",
    "__v": 0
  }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Read Task

Read an existing task

### Method: GET

> ```
> {{url}}/tasks/:id
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Response: 200

```json
{
  "task": {
    "_id": "61b39e8b922b5ee7253a9bb1",
    "description": "Find the love of my life",
    "completed": false,
    "owner": "61b39cec922b5ee7253a9b9f",
    "createdAt": "2021-12-10T18:38:03.414Z",
    "updatedAt": "2021-12-10T18:38:03.414Z",
    "__v": 0
  }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Task

Update an existing task

### Method: PUT

> ```
> {{url}}/tasks/:id
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "description": "Shoping for the party",
  "completed": true
}
```

### Response: 202

```json
{
  "task": {
    "_id": "61b39e8b922b5ee7253a9bb1",
    "description": "Shoping for the party",
    "completed": true,
    "owner": "61b39cec922b5ee7253a9b9f",
    "createdAt": "2021-12-10T18:38:03.414Z",
    "updatedAt": "2021-12-10T18:49:14.699Z",
    "__v": 0
  }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Task

Deleting an existing task the response status is 204 if the task is deleted successfully other wise it would return 404 if the task we are trying to delete is not found or 500 if some internal server error occurred

### Method: DELETE

> ```
> {{url}}/tasks/:id
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Response: 204

```json
null
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
