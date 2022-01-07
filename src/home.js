import "./home.css";

const headlineGenerator = () => {
  //Headline container
  const headline = document.createElement("div");
  headline.classList.add("headline");

  //Title
  const title = document.createElement("h2");
  title.innerText = "Mihai's";
  title.classList.add("title");

  //Subtitle
  const subTitle = document.createElement("h1");
  subTitle.classList.add("subtitle");
  subTitle.innerText = "all day breakfast.";

  headline.appendChild(title);
  headline.appendChild(subTitle);
  return headline;
};

const containersGenerator = () => {
  //Container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container")

  //description
  const description = document.createElement("div");
  description.classList.add("content-item");

  //description Text
  const descriptionText = document.createElement("p");
  descriptionText.innerText =
    "“World-class cereal-eating is a dance of fine compromises. The giant heaping bowl of sodden cereal, awash in milk, is the mark of the novice. Ideally one wants the bone-dry cereal nuggets and the cryogenic milk to enter the mouth with minimal contact and for the entire reaction between them to take place in the mouth. Randy has worked out a set of mental blueprints for a special cereal-eating spoon that will have a tube running down the handle and a little pump for the milk, so that you can spoon dry cereal up out of a bowl, hit a button with your thumb, and squirt milk into the bowl of the spoon even as you are introducing it into your mouth. The next best thing is to work in small increments, putting only a small amount of Cap’n Crunch in your bowl at a time and eating it all up before it becomes a pit of loathsome slime, which, in the case of Cap’n Crunch, takes about thirty seconds.” ― Neal Stephenson, Cryptonomicon";
  description.appendChild(descriptionText);

  //description
  const image = document.createElement("img");
  image.classList.add("image-item");
  image.src = "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"

  //Hours list
  const hours = document.createElement("div");
  hours.classList.add("list-item");
  
  const hoursText = document.createElement("h2"); 
  hoursText.innerHTML = "Hours"

  const hoursList = ["Monday-Thursday : 8am - 8pm", "Friday : 8am - 6pm","Saturday-Sunday : 8am - 4pm"];
  const listElement = document.createElement("ul");
  listElement.classList.add('nav-list');

  let numberOfListItems = hoursList.length

  for ( let i=0;i< numberOfListItems;i++){
      let listItem = document.createElement('li');
      listItem.innerHTML = hoursList[i];
      listElement.appendChild(listItem)
  }
  hours.appendChild(hoursText);
  hours.appendChild(listElement);

  //appending to container
  contentContainer.appendChild(description);
  contentContainer.appendChild(image);
  contentContainer.appendChild(hours);
  return contentContainer;
};

export {headlineGenerator,containersGenerator};
