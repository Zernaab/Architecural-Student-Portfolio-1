import "./style.css";
import data from "./data/data";
import {
    createThreeScene
} from "./threeScene";

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
    "./Goggles/goggles.png",
    "./Goggles/goggles2.png",
    "./Goggles/goggles3.png",
    "./Goggles/goggles4.png",
    "./Goggles/goggles5.png",
    "./Goggles/goggles6.png",
];

const rocks = [
  "./Pavilion/Pavilion.png",
  "./Pavilion/Pavilion2.png",
  "./Pavilion/Pavilion4.png",
  "./Pavilion/Pavilion3.png",
  "./Pavilion/Pavilion5.png",
  "./Pavilion/Pavilion6.png",
  "./Pavilion/Pavilion7.png",
  "./Pavilion/Pavilion8.png",
  "./Pavilion/Pavilion9.png",
  "./Pavilion/Pavilion10.png",
  "./Pavilion/pavilionaxo.png",
  "./Pavilion/pavilionjoinery.png",
  "./Pavilion/pavilionpieces.png",
];

const dogs = [
  "./Game/Game.png",
  "./Game/Game2.png",
  "./Game/Game3.png",
  "./Game/Game5.png",
  "./Game/Game6.png",
  "./Game/Screenshot9.png",
  "./Game/Screenshot8.png",
  "./Game/Screenshot7.png",
  "./Game/Screenshot6.png",
  "./Game/Screenshot5.png",
  "./Game/Screenshot4.png",
  "./Game/Screenshot3.png",
  "./Game/Screenshot2.png",
  "./Game/Screenshot1.png",
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
      Geo & Interoperability
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
          ${trees
            .map(
              (trees, index) => `<a href="${trees}" target="_blank"><img src="${trees}" alt="tree${index + 1}" /></a>`
            )
            .join("")}
          </div>
          <h4 id="description">This assignment had various learning curves and taught me valuable lessons along the way, refining my modelling skills and limit-testing my PC capabilities. Fortunately, my primary system can handle large files just fine; however, when transferring these files onto my laptop, a device with more average specs, the system began to slow down significantly and eventually crashed. This rigorous process of messing with import settings and command prompts taught me optimal methods to retain the original blender files' integrity or how different settings manipulate/enhance the original geometry. OBJ was the best import format for this assignment, as it retained the original typology, had the same scale, and kept a relatively small file size suitable for simple objects. 

The chart highlighted the differences between mesh, Nurbs, and Subd modelling. While Nurbs is a highly accurate form of modelling, they complexify objects too much, while meshes are more simplified and easier to work with. They also smoothen creases, creating different visual effects between smooth and shiny. SubD is a handy tool for creating smooth objects with an organic sculpture-like feel. I learned the power of subD in this project; as before in BlenderBlender, I would remesh and use the sculpt tool to create smooth shapes; however, combining mesh modelling with subD makes an easier, more organized workflow.  

Overall, this assignment has taught me the ups and downs of different modelling techniques, giving me lessons on optimizing my objects better. This was my first time with 3D printing, and I ran into trouble with my model not being a closed mesh. Thankfully, because I had used mesh modelling, I could quickly fix the problem, whereas if I had only used sculpt mode in Blender, it would have taken significantly longer to resolve the issue. 

I intend to keep using meshes in the future, as they allow me to create a clean, simple typology that still looks complex with the help of SubD modifiers. I can also vary my file imports depending on what my object requires. This experience has provided me with helpful lessons that will enhance my skills for future projects. 
</h4>
      </div>
    
      
      <div id="project-row">
      Past Sight
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
          ${houses
            .map(
              (houses, index) => `<a href="${houses}" target="_blank"><img src="${houses}" alt="house${index + 1}" /></a>`
            )
            .join("")}
          </div>
          <h4 id="description">This Assignment we had focused on creating an object based on our exquisite corpse, one that would fit into the story being told. Eyes are the portals to a person's inner world, and outer world of perception and reality. 
          
          These goggles allow you to see a space up to 100 years ago, with each lens showing a different time period. It provides the user an immersive experience through sight and sound. 
         
          Through this device, modernism can preserve tradition and history through technology, integrating the past into our future. To fabricate the model I had used blender, with various mesh modeling tools to create the design, and then imported it to rhino to create a paper craft, as well as 3d print.
          </h4>
          </div>
      </div>

      </div>
    
      
      <div id="project-row">
      Bridge Between Worlds
        <div class="three-model">
          <div id="model4"></div>
        </div>
        <div id="images-description">
          <div class="image-row">
          ${rocks
            .map(
              (rocks, index) => `<a href="${rocks}" target="_blank"><img src="${rocks}" alt="rock${index + 1}" class="images" /></a>`
            )
            .join("")}
          </div>
          <h4 id="description">This assignment was a group project, and required us to create a large gathering space based on one of a group members' pavilion.
          
          A bridge between worlds symbolizes that, despite the many paths one may take in life, humans are always interconnected, with their lives occurring simultaneously. 
          
          These brief interactions are celebrated at the point where they converge, creating a blend of intertwined journeys. 
          
          To fabricate this pavilion, we had used grasshoppers to create a large base pillar located in the center, and a blender was used for the more organic modeling such as the arch ways. 
          
          Tessellation and parametric design is used throughout this design, and the files were optimized in rhino to prepare laser cutting files for physical model making.
          
          Materials such as bass wood, organza, copper wire and bristol paper were used to create the physical model. 
          
          Overall this project taught me important model making skills, and how to use tools like laser cutters to be more efficient. 
          </h4>
          </div>

      </div>
    
      
      <div id="project-row">
      Calm Shores
        <div class="three-model">
          <div id="model5"></div>
        </div>
        <div id="images-description">
          <div class="image-row">
          ${dogs
            .map(
              (dogs, index) => `<a href="${dogs}" target="_blank"><img src="${dogs}" alt="dogs${index + 1}" class="images" /></a>`
            )
            .join("")}
          </div>
          <h4 id="description">This final assignment was focused on conceptualizing our exquisite corpse, and creating a virtual 3d environment based on its core concepts and values. 
          
          This space was to be designed to showcase all of our previous projects. 
          
          The Islands are designed to represent an aspect of the collage, showcasing how modern technology has broken down, and we must now conform to nature, in harmony with art and culture. Overall this assignment taught me valuable skills in the program Unity, and sparked an interest in video game design.
          </h4>
          </div>
    </section>

    

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>Game: <a href="${data.contact.spatial}">${
  data.contact.Game
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
createThreeScene("#model3", "/3DModels/project3/Goggles.obj");
createThreeScene("#model4", "/3DModels/project3/pavilion.obj");
createThreeScene("#model5", "/3DModels/project3/Game.obj");