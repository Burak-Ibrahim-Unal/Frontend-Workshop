import React from "react";
import githubReact from "../images/githubreact1.jpeg"

export default function Hero() {
    return (
        <section className="hero">
            <img src={githubReact} alt="github-react" className="heroImg" />
            <h1 className="heroHeader"> Github - React Test App</h1>
            <p className="heroMainText"><span className="heroParagraphSpace"><span className="heroCapitalL">L</span>orem</span> ipsum, dolor sit amet consectetur adipisicing elit. Eaque facere praesentium magnam quaerat modi excepturi obcaecati necessitatibus in eveniet autem esse eligendi ratione ex temporibus rerum nihil, illum asperiores, ipsa nesciunt et adipisci officia. Atque, accusantium! Doloremque voluptatem libero dolor, fugiat pariatur illum natus ipsum, animi eum sunt quo minus consequuntur eaque ab veniam rem eos explicabo quae laudantium omnis dolores obcaecati. Blanditiis porro adipisci hic quaerat, similique quam, nam dolore quod velit doloremque voluptatibus eligendi eius earum asperiores? Totam, ex est beatae repudiandae voluptatum nihil voluptates, veritatis repellendus dolore quasi magnam quae blanditiis fugiat molestiae eaque vero. Sit, error!</p>
        </section>
    )
}