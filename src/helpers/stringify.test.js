import stringify from "./stringify";
const queryUser = { emailAddress: "elvis.plaza@hotmail.com", password: "Hahaha1" };

describe("turn to query", () => {
  it("gives you back a stringified version of your object for queries", () => {
    const results = queryStringFunction(queryUser);
    expect(results).toEqual("emailAddress=elvis.plaza@hotmail.com&password=Hahaha1");
  });
});
