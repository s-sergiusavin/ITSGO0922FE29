const comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 2,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    postId: 5,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    postId: 3,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
];

//push - adds an element at the end of the array

let addComment = comments.push({
  postId: 8,
  id: 6,
  name: "my new comment",
  email: "monica.olteanu18@yahoo.com",
  body: "This is my new comment",
});
console.log("push added the last element from", comments);

//pop - removes the last element of the array
let removeLastComment = comments.pop();
console.log("pop removed", removeLastComment);

//splice - for deleting an element
let removeSecondElement = comments.splice(1, 1);
console.log("splice removed", removeSecondElement);

//shift - removes the first element
const removeFirstElement = comments.shift();
console.log("shift removed for me:", removeFirstElement);

//unshift - adds an element at the begging of the array
const addFirstElement = comments.unshift({
  postId: 8,
  id: 6,
  name: "my new comment",
  email: "monica.olteanu18@yahoo.com",
  body: "This is my new comment",
});
console.log("comments lenght after shift method is", addFirstElement);
console.log("comments after unshift is", comments);
