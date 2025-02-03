import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./collage/ITERATIONS.png",
  "./collage/ITERATIONS2.png",
  "./collage/ITERATIONS3.png",
  "./collage/ITERATIONS4.png",
  "./collage/ITERATIONS5.png",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
          <a href="./collage/collage 2.png" target="_blank"><img src="./collage/collage 2.png" id="collage1" alt="Collage Image 1" /></a>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<a href="${cube}" target="_blank"><img src="${cube}" alt="cube${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description">"Tradition in Transition" represents rejecting modern ideals in support of diversity and culture. The left side has conformed to the globalization of modernization, resulting in a dreary atmosphere that pollutes the environment; however, it is transitioning into more traditional values that support flora and fauna. Artistic expression is scattered across the right side, preserving the community's cultural identity and heritage and showcasing diversity through people, architecture, and art. The final piece expresses how technological advancements and modern cities aren't always Ideal, and traditional cities can be more humancentric.


In the pursuit of modernization, cities often lose regionally unique characteristics linked to the communities culture, resulting in an erasure of identity. Traditional values in a majority of cultures emphasize respect for nature, and they have vibrant architecture that reflects the people and expresses themselves through different art forms. Modern values have resulted in concrete jungles that lack spirit, glorify skyscrapers and negatively impact the environment. My home country has become a victim of the globalization of modernization, resulting in the slow erasure of my identity back home. This situation has inspired me to pursue it as a topic for the exquisite corpse, exploring how we can transform modern architecture, values, and transportation into a traditional state that fosters community and character. I divided the piece into two sides: one that represents the ideal form for modern cities and one that rejects globalization and instead celebrates diversity and self-expression. When finding images, I had to think critically about what defines culture, and clothes, architecture, and art visually convey it. On the left side, the city is dull in colour, lacks unique characteristics, and creates excessive amounts of pollution, being in disharmony with sustainable measures and nature. These negative aspects transform from a blimp turning into birds, the highway turning into a sidewalk and smoke becoming paint. These changes showcase a better alternative to our dull cities, showcasing what would happen if we were to reject modernization and accept diversity and tradition. Ultimately, most people often mistake tradition for "backward thinking." However, through exploring various images for this project, I understand that culture is an integral part of society, brings a sense of identity and belonging, and should be represented outwardly in cities rather than hidden.



      </div>

    
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
    
      
      ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */ ""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
 createThreeScene("#model2", "/3DModels/project2/Buba.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
