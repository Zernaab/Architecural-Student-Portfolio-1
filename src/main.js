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
  "./Bulbasaur/anylsis2.png",
  "./Bulbasaur/anylsis3.png",
  "./Bulbasaur/anylsis4.png",
  "./Bulbasaur/anylsis5.png",
  "./Bulbasaur/anylsis6.png",
  "./Bulbasaur/anylsis7.png",
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
          <h4 id="description">This assignment had various learning curves and taught me valuable lessons along the way, refining my modelling skills and limit-testing my PC capabilities. Fortunately, my primary system can handle large files just fine; however, when transferring these files onto my laptop, a device with more average specs, the system began to slow down significantly and eventually crashed. This rigorous process of messing with import settings and command prompts taught me optimal methods to retain the original blender files' integrity or how different settings manipulate/enhance the original geometry. OBJ was the best import format for this assignment, as it retained the original typology, had the same scale, and kept a relatively small file size suitable for simple objects. 

The chart highlighted the differences between mesh, Nurbs, and Subd modelling. While Nurbs is a highly accurate form of modelling, they complexify objects too much, while meshes are more simplified and easier to work with. They also smoothen creases, creating different visual effects between smooth and shiny. SubD is a handy tool for creating smooth objects with an organic sculpture-like feel. I learned the power of subD in this project; as before in BlenderBlender, I would remesh and use the sculpt tool to create smooth shapes; however, combining mesh modelling with subD makes an easier, more organized workflow.  

Overall, this assignment has taught me the ups and downs of different modelling techniques, giving me lessons on optimizing my objects better. This was my first time with 3D printing, and I ran into trouble with my model not being a closed mesh. Thankfully, because I had used mesh modelling, I could quickly fix the problem, whereas if I had only used sculpt mode in Blender, it would have taken significantly longer to resolve the issue. 

I intend to keep using meshes in the future, as they allow me to create a clean, simple typology that still looks complex with the help of SubD modifiers. I can also vary my file imports depending on what my object requires. This experience has provided me with helpful lessons that will enhance my skills for future projects. 
</h4>
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
