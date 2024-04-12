const users = require("./MOCK_DATA.json");

// Bài 1: Viết hàm trả về danh sách users:
// + Female, 18 <= Age <= 25.
// + Thêm thuộc tính `stocking: true` đối với 18 <= Age <= 20 và 22 <= Age <= 25
//                   `stocking: false` các users còn lại.
const currentDate = new Date();
const countAge = (user) => {
  return currentDate.getFullYear() - user.birthday.year;
};

console.log("\nBai 1");
const users1 = (users) => {
  const femaleUsers = users.filter((user) => {
    const age = countAge(user);
    if (user.gender === "Female" && age >= 18 && age <= 25) {
      user.stocking = (age <= 20) | (age >= 22) ? true : false;
      return true;
    }
    return false;
  });
  return femaleUsers;
};
console.log("users1:", JSON.stringify(users1(users), null, 2));

// Bài 2: Viết hàm trả về danh sách gồm: tỷ lệ Male, Famale và đưa ra danh sách số lượng user theo từng độ tuổi
// VD: {
//   male: {
//     percents: 20,
//     ussers: {
//       18: 2,
//       20: 10,
//       ....
//     }
//   },
//   female: {
//     percents: 80,
//     ussers: {
//       18: 2,
//       20: 10,
//       ....
//     }
//   }
// }

console.log("\nBai 2");
const bai2 = (users) => {
  let manCount = 0;
  let femaleCount = 0;
  const statistics = {};
  users.forEach((user) => {
    const age = countAge(user);
    if ((user.gender === "Male") | (user.gender === "Female")) {
      if (user.gender === "Male") {
        manCount++;
      } else {
        femaleCount++;
      }
      if (!statistics[user.gender]) {
        statistics[user.gender] = {};
      }
      if (!statistics[user.gender][age]) {
        statistics[user.gender][age] = 1;
      } else {
        statistics[user.gender][age] += 1;
      }
    }
  });
  return statistics;
};
console.log(JSON.stringify(bai2(users), null, 2));

// Bài 3: Tạo hàm truyền vào độ tuổi getUserSameAge(18). Trả về danh sách các user có độ tuổi bằng hoặc gần bằng hơn kém nhau 1-2 tuổi giá trị được truyền vào.

console.log("\nBai 3");
const getUserSameAge = (users, age) => {
  return users.filter((user) => {
    const userAge = countAge(user);
    return Math.abs(userAge - age) <= 2;
  });
};
console.log(JSON.stringify(getUserSameAge(users, 18), null, 2));

// Bài 4: Tạo hàm trả về danh sách đã được sắp xếp theo thứ tự tăng dần, hoặc giảm dần theo năm sinh.
console.log("\nBai 4");
const ascendingOrder = (users) => {
  return users.sort(
    (user1, user2) => user1.birthday.year - user2.birthday.year
  );
};
const descendingOrder = (users) => {
  return users.sort(
    (user1, user2) => user2.birthday.year - user1.birthday.year
  );
};
console.log("ascending:", JSON.stringify(ascendingOrder(users), null, 2));
console.log("descending:", JSON.stringify(descendingOrder(users), null, 2));
