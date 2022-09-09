#### **POST** - Sign up

In order to sign-up, make a post request to: localhost:5000/sign-up
sending a body in the format:

```
{
  email: string,
  password: string
}
```

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
