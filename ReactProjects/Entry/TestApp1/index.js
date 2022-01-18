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

const page = (
  <div>
    <h1>React Web Site</h1>
    <p>Test paragraph within 1 nav parent element</p>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ol>
  </div>
);

const page2 = (
  <div>
    <img src="./react-logo.png" width="80px" />
    <h1>New tests...</h1>
    <ul>
      <li>fact 1</li>
      <li>fact 2</li>
      <li>fact 3</li>
      <li>fact 4</li>
      <li>fact 5</li>
    </ul>
  </div>
);

function Page3() {
  //for a function,we can use pascal case , for usage <Page3 />, use capital chars

  return (
    <div>
      <img src="./react-logo.png" width="80px" />
      <h1>New tests...</h1>
      <ul>
        <li>fact 1</li>
        <li>fact 2</li>
        <li>fact 3</li>
        <li>fact 4</li>
        <li>fact 5</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="60px" />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <strong>©2022 Copyright </strong>by Burak
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <Header />
      <h1>Test header</h1>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ol>
      <Footer />
      {/* © = alt + 0169 */}
    </div>
  );
}

function Page4() {
  return <MainContent />;
}

// ReactDOM.render(page2, document.getElementById("root")); // document.querySelector("#root")
// ReactDOM.render(page3(), document.getElementById("root")); // document.querySelector("#root")
// ReactDOM.render(<Page3 />, document.getElementById("root")); // document.querySelector("#root")
ReactDOM.render(<Page4 />, document.getElementById("root")); // document.querySelector("#root")
