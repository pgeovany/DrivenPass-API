## Authentication

#### **POST** - Sign up

In order to sign-up, make a post request to: localhost:5000/sign-up
sending a body in the format:

```
{
  email: string,
  password: string
}
```
<br>

#### **POST** - Sign in

In order to sign-in, make a post request to: localhost:5000/sign-in
sending a body in the format:

```
{
  email: string,
  password: string
}
```

The server will respond with an object in the format:

```
{
  token: string
}
```
<br>

## Website credentials

#### **POST** - Save website credentials

In order to save new credentials, make a post request to: localhost:5000/credentials
sending a body in the format:

```
{
  title: string,
  url: string,
  username: string,
  password: string
}
```

and an **Authorization header** in the Bearer TOKEN format.<br><br>

#### **GET** - List all credentials of a given user

In order to get a list of credentials, make a get request to: localhost:5000/credentials
sending an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:

```
[
  {
    id: number,
    userId: number,
    title: string,
    url: string,
    username: string,
    password: string
  },
]
```
<br>

#### **GET** - List specific credentials

In order to get a specific cretential, make a get request to: localhost:5000/credentials/:id
sending the **credential id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:

```
{
  id: number,
  userId: number,
  title: string,
  url: string,
  username: string,
  password: string
}
```
<br>
