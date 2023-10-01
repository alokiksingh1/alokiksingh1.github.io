// import { client } from "https://cdn.jsdelivr.net/npm/@gradio/client@0.3.0/dist/index.min.js";

// /*
//   API used:
//   https://huggingface.co/spaces/TencentARC/T2I-Adapter-SDXL
//   https://huggingface.co/spaces/fffiloni/Image-to-Story
// */

// function getSavedData() {
//   var data = {};
//   if (localStorage.getItem('prompts')) {
//     data["prompts"] = JSON.parse(localStorage.prompts);
//   }
//   if (localStorage.getItem('drawing')) {
//     data["drawing"] = "data:image/png;base64," + localStorage.drawing;
//   }
//   return data;
// }

// function constructPrompt(prompts) {
//   return "A " + prompts[1] + " " + prompts[0] + " " + prompts[2] + " in the " + prompts[3];
// }

// async function getImage(data) {
//   const response_0 = await fetch(data["drawing"]);
//   const imageBlob = await response_0.blob();

//   const app = await client("https://tencentarc-t2i-adapter-sdxl.hf.space/");
//   const result = await app.predict("/run", [
//           imageBlob, 	// blob in 'Input image' Image component		
//           constructPrompt(data["prompts"]), // string  in 'Prompt' Textbox component		
//           "extra digit, fewer digits, cropped, worst quality, low quality, glitch, deformed, mutated, ugly, disfigured", // string  in 'Negative prompt' Textbox component		
//           "sketch", // string (Option from: ['canny', 'sketch', 'lineart', 'depth-midas', 'depth-zoe', 'openpose']) in 'Adapter name' Dropdown component		
//           "Fantasy art", // string (Option from: ['(No style)', 'Cinematic', '3D Model', 'Anime', 'Digital Art', 'Photographic', 'Pixel art', 'Fantasy art', 'Neonpunk', 'Manga']) in 'Style' Dropdown component		
//           30, // number (numeric value between 1 and 50) in 'Number of steps' Slider component		
//           8, // number (numeric value between 0.1 and 30.0) in 'Guidance scale' Slider component		
//           0.75, // number (numeric value between 0.5 and 1) in 'Adapter conditioning scale' Slider component		
//           1, // number (numeric value between 0.5 and 1.0) in 'Adapter conditioning factor' Slider component		
//           42, // number (numeric value between 0 and 2147483647) in 'Seed' Slider component		
//           true, // boolean  in 'Apply preprocess' Checkbox component
//     ]);

//     return result.data; 
// }

// async function getStory(imgUrl) {
//     const response_0 = await fetch(imgUrl);
//     const imageBlob = await response_0.blob();

//     const app = await client("https://fffiloni-image-to-story.hf.space/");
//     const result = await app.predict(1, [
//           imageBlob, 	// blob in 'Image input' Image component		
//           "Children", // string  in 'Target Audience' Radio component
//     ]);
    
//   return result.data
// }

// function callAI(data) {
//   getImage(data).then(response => {
//     let imgUrl = response[0][1][0].data;
//     var image = document.getElementById('imageAI');
//     image.src = imgUrl;

//     var storyPlaceHolder = "Once upon a time in a magical forest, there lived a joyful dog named Max. Every day, Max would explore the lush woods and find the most delicious treats hidden among the leaves and branches. With a wagging tail and a heart full of happiness, he savored his meals, knowing that the forest was not just his home but also his favorite restaurant."
//     var text = document.getElementById('storyAI');
//     text.innerHTML = storyPlaceHolder;
//     document.getElementById("result").style.display = "flex";
//     document.getElementById("loading").style.display = "none";
    
// //     getStory(imgUrl).then(response => {
// //       var text = document.getElementById('storyAI');
// //       text.innerHTML = response[0];
      
// //       document.getElementById("result").style.display = "flex";
// //       document.getElementById("loading").style.display = "none";
// //     }).catch(e => {
// //       console.log(e);
// //     })
//   }).catch(e => {
//     console.log(e);
//   });
// }

// window.onload = function() {
//   document.getElementById("result").style.display = "none";
//   document.getElementById("loading").style.display = "block";
//   callAI(getSavedData());        
// };