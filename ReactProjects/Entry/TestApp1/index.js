// ReactDOM.render(<p>Paragraph from js file</p>,document.getElementById("root")); // document.querySelector("#root")
// ReactDOM.render(<ul><li>li 1</li><li>li 2</li></ul>,document.getElementById("root"));
// ReactDOM.render(<h1 className="Test">Paragraph from js file</h1>,document.getElementById("root")); // document.querySelector("#root")

// function MainContent() {
//   return (
//     <h1>main content is here</h1>
//   );
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent="main content h1 tag";
// h1.className="header";
// document.getElementById("root").append(h1);
// console.log(h1);

// const newh1 = <h1 className="header">JXS File</h1>;
// console.log(newh1);

const navbar = (
  <nav>
    <h1>React Web Site</h1>
    <p>Test paragraph within 1 nav parent element</p>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

console.log(navbar);

ReactDOM.render(navbar, document.getElementById("root")); // document.querySelector("#root")
