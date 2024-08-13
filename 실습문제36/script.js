const minji = { id: 21, name: "민지" };
const hani = { id: 12, name: "하니" };
const heyin = { id: 24, name: "혜인" };

const users = [minji, hani, heyin];

const posts = [
  { userId: 21, id: 1, content: "안녕하세요. 민지입니다." },
  { userId: 12, id: 2, content: "안녕하세요. 하니입니다.1" },
  { userId: 12, id: 3, content: "안녕하세요. 하니입니다.2" },
  { userId: 24, id: 4, content: "안녕하세요. 혜인입니다." },
];

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("사용자를 찾을 수 없습니다.");
      }
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _posts = posts.filter((post) => post.userId === userId);
      if (_posts.length > 0) {
        resolve(_posts);
      } else {
        reject("포스트를 찾을 수 없습니다.");
      }
    }, 1000);
  });
}

getUser(21)
  .then((user) => {
    console.log(user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
