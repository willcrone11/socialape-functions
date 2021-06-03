let db = {
  users: [
    {
      userId: 'dh23ggj5h32g543j5gf43',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-05-15T10:59:52.7982',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user',
      website: 'https://user.com',
      location: 'Cleveland, OH'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2021-05-15T11:46:01.0182',
      likeCount: 5,
      commentCount: 2
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'kdjsfgksuufhgkdsufky',
      body: 'Nice scream bro!',
      createdAt: '2021-03-15T10:59:52.7982'
    }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: '3OaenQSGRN9slFEufveU',
      type: 'like | comment',
      createdAt: '2021-05-26T17:27:24.206Z'
    }
  ]
};

const userDetails = {
  //Redux data
  credentials: {
    userId: 'dh23ggj5h32g543j5gf43',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-05-15T10:59:52.7982',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user',
    website: 'https://user.com',
    location: 'Cleveland, OH'
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'hh705oWfWucVz6bHH2pa'
    },
    {
      userHandle: 'user',
      screamId: '3IonFoQexRcofs5OhBXQ'
    }
  ]
}