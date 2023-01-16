/* eslint-disable */
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];

for (let a = 0; a < pronoun.length; a++) {
  for (let e = 0; e < adj.length; e++) {
    for (let i = 0; i < noun.length; i++) {
      for (let o = 0; o < ext.length; o++) {
        let exit = pronoun[a] + adj[e] + noun[i] + ext[o];
        console.log(exit);
      }
    }
  }
}

for (let a = 0; a < pronoun.length; a++) {
  for (let e = 0; e < adj.length; e++) {
    for (let i = 0; i < noun.length; i++) {
      for (let o = 0; o < ext.length; o++) {
        let div = document.createElement("div");
        div.innerText = `
              ${pronoun[a]}${adj[e]}${noun[i]}${ext[o]}
          `;
        document.body.appendChild(div);
      }
    }
  }
}
