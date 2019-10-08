# StormX Engineering Code Assignment

## Overview

### Image Rank

Here at StormX we provide a myraid of tasks that a user may perform to earn
Bolts, our in-app currency. Once a value threshold is crossed the Bolts may be converted
to Storm Token, our ERC-20 token. One of the tasks we would like a user to perform
is the 'ranking', or up/down voting, of images. This image data is then returned to our business
partners and used in their machine learning training model development.

#### User Story
> As a StormPlayer (user) I want to perform an Image Rank task so I can earn more Bolts!

#### Requirements

Provide a UI/UX and API for ranking images using the data in the Resource section. The user will be presented with a list of albums to choose from. Upon selecting an album the user may rank photos within that album. When the user is done they should submit those rankings to the API you create. There should be some means to signal to a user that they've ranked an image before and a user should not be able to rank their own images.

##### Submission

Please create a feature branch for your work and when complete open a pull request, tagging gitlab user `calvinh8`, `alexhidalgo1`, and `felipeaugusto1` as the reviewers. 

##### Timeline

While we expect that an MVP could be coded up in three hours feel free to spend up-to six hours on the assignment. If you do go over the six hour mark, please note as much in your pull request. We do not watch the clock, but we expect honesty and transparency in our team and hold each other to those standards.

#### Acceptance Criteria

##### Front-End
###### Frontend components must be implemented in React
###### The language used to implement the assignment must be Javascript
###### The assignment must provide a mechanism for:

1. Viewing a list of available photo albums
2. Viewing a single photo, including all meta data
3. Ranking (+1 or -1) a single photo
4. Submit all currently ranked photos to the API you create
5. Visual indication that the ranking submission was successful
6. Include all required steps to build and run the assignment

###### Bonus (in no particular order):

1. Persist ranking on the client
2. Visual indication of rank, when it exists, for each photo
3. Include a deployment script
4. Include unit tests/test coverage report
5. Reach out to calvin@stormx.io for clarification
6. Include a CI integration
7. Use React Hooks
8. Use React Context API

##### Back-End
###### Backend must be implemented in Node and Express
###### Use the json data provided in the resource section as your seed data
###### The assignment must provide a mechanism for:

1. Serving a list of available photo albums
2. Saving a photo with updated ranking
3. Success payload when photo is ranked correctly
4. Write an appropriate number of tests for each route you create (you may use any testing library)
5. Ranking data on photos json was left out intentionally. Please add it in to the seed data with an appropriate schema.

###### Bonus (in no particular order):

1. Include a test coverage report
2. Include a CI/CD integration
3. Include polished logging
4. Add schema validation when consuming data from the client

## Resources

##### Albums: 

URL example: `GET localhost:8000/albums`

Response payload seed data: 

```
[{
  "id": 1,
  "title": "run run run"
},
{
  "id": 2,
  "title": "blink 182"
},
{
  "id": 3,
  "title": "britney spears"
},
{
  "id": 4,
  "title": "sleepless in seattle soundtrack"
},
{
  "id": 5,
  "title": "too cool for school"
}]
```

##### Photos: 

URL example: `GET localhost:8000/photos`

Response payload seed data: 



```
[{
  "albumId": 1,
  "photos": [
    {
      "id": "p1",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p2",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p3",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p4",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p5",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p6",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    }
  ]
},
{
  "albumId": 2,
  "photos": [
    {
      "id": "p7",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p8",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p9",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p10",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    }
  ]
},
{
  "albumId": 3,
  "photos": [
    {
      "id": "p11",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p12",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p13",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p14",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p15",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p16",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p17",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p18",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p19",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p21",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    }
  ]
},
{
  "albumId": 4,
  "photos": [
    {
      "id": "p22",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p23",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    }
  ]
},
{
  "albumId": 5,
  "photos": [
    {
      "id": "p24",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "id": "p25",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    }
  ]
}]
```
