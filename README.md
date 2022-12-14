## Authentication

#### **POST** - Sign up

In order to sign-up, make a post request to: https://dr1venpass.herokuapp.com/sign-up
sending a body in the format:

```
{
  email: string,
  password: string
}
```

<br>

#### **POST** - Sign in

In order to sign-in, make a post request to: https://dr1venpass.herokuapp.com/sign-in
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

In order to save new credentials, make a post request to: https://dr1venpass.herokuapp.com/credentials
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

In order to get a list of credentials, make a get request to: https://dr1venpass.herokuapp.com/credentials
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

#### **GET** - Get credentials by id

In order to get a specific cretential, make a get request to: https://dr1venpass.herokuapp.com/credentials/:id
sending the **credential id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an object in the format:

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

#### **DELETE** - Delete credentials

In order to delete credentials, make a delete request to: https://dr1venpass.herokuapp.com/credentials/:id
sending the **credential id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>

## Notes

#### **POST** - Save note

In order to save a note, make a post request to: https://dr1venpass.herokuapp.com/notes
sending a body in the format:

```
{
  title: string,
  note: string
}
```

and an **Authorization header** in the Bearer TOKEN format.<br><br>

#### **GET** - Get notes

In order to get the list of notes, make a get request to: https://dr1venpass.herokuapp.com/notes
sending an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:

```
[
  {
    id: number,
    userId: number,
    title: string,
    note: string
  },
]
```

<br>

#### **GET** - Get note by id

In order to get a specific note, make a get request to: https://dr1venpass.herokuapp.com/notes/:id
sending the **note id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an object in the format:

```
{
  id: number,
  userId: number,
  title: string,
  note: string
}
```

<br>

#### **DELETE** - Delete note

In order to delete a note, make a delete request to: https://dr1venpass.herokuapp.com/notes/:id
sending the **note id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>

## Wi-fi

#### **POST** - Save wi-fi

In order to save a wi-fi network, make a post request to: https://dr1venpass.herokuapp.com/wifis
sending a body in the format:

```
{
  title: string,
  name: string,
  password: string
}
```

and an **Authorization header** in the Bearer TOKEN format.<br><br>

#### **GET** - Get wi-fis

In order to get the list of wi-fi networks, make a get request to: https://dr1venpass.herokuapp.com/wifis
sending an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:

```
[
  {
    id: number,
    userId: number,
    title: string,
    name: string,
    password: string
  },
]
```

<br>

#### **GET** - Get wi-fi by id

In order to get a specific wi-fi network, make a get request to: https://dr1venpass.herokuapp.com/wifis/:id
sending the **wi-fi id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an object in the format:

```
{
  id: number,
  userId: number,
  title: string,
  name: string,
  password: string
}
```

<br>

#### **DELETE** - Delete wi-fi

In order to delete a wi-fi network, make a delete request to: https://dr1venpass.herokuapp.com/wifis/:id
sending the **wi-fi id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>

## Cards

#### **POST** - Save card

In order to save a card, make a post request to: https://dr1venpass.herokuapp.com/cards
sending a body in the format:

```
{
  title: string,
  number: string,
  cardholderName: string,
  securityCode: string,
  expirationDate: string ('MM/YY'),
  password: string
  type: string ('credit', 'debit', or 'credit/debit'),
  isVirtual: boolean,
}
```

and an **Authorization header** in the Bearer TOKEN format.<br><br>

#### **GET** - Get cards

In order to get the cards list, make a get request to: https://dr1venpass.herokuapp.com/cards
sending an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an array in the format:

```
[
  {
    id: number,
    userId: number,
    title: string,
    number: string,
    cardholderName: string,
    securityCode: string,
    expirationDate: string,
    password: string
    type: string,
    isVirtual: boolean,
  },
]
```

<br>

#### **GET** - Get card by id

In order to get a specific card, make a get request to: https://dr1venpass.herokuapp.com/cards/:id
sending the **card id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>
The server will respond with an object in the format:

```
{
  id: number,
  userId: number,
  title: string,
  number: string,
  cardholderName: string,
  securityCode: string,
  expirationDate: string,
  password: string
  type: string,
  isVirtual: boolean,
}
```

<br>

#### **DELETE** - Delete card

In order to delete a card, make a delete request to: https://dr1venpass.herokuapp.com/cards/:id
sending the **card id** as a request param and an **Authorization header** in the Bearer TOKEN format.<br><br>
