import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Introduction to LiDAR SLAM: LOAM and LeGO-LOAM Paper and Code Explanation with ROS 2 Implementation",
    paragraph:
      "LiDAR SLAM is a crucial component in robotics perception, widely used in both industry and academia for its efficiency and robustness in localization and mapping.",
    image: "/blog1.jpg",
    author: {
      name: "soumyadip",
      image: "/author1.jpg",
      designation: "Senior Computer Vision Engineer",
    },
    tags: ["creative"],
    publishDate: "August 20, 2024",
  },
  {
    id: 2,
    title: "Training Contrastive Language Image Pretraining (CLIP) Model from Scratch: An Image Retrieval App",
    paragraph:
      "This article discusses how to train a CLIP like model from scratch. It presents gradio app for Fashion E-commerce Image Retrieval using Text search in PyTorch. ",
    image: "/blog2.jpg",
    author: {
      name: "Jaykumaran R",
      image: "/author2.jpg",
      designation: "Junior Computer Vision Engineer",
    },
    tags: ["innovative"],
    publishDate: "August 27, 2024",
  },
  {
    id: 3,
    title: "Text Summarization using T5: Fine-Tuning and Building Gradio App",
    paragraph:
      "The need for efficient text summarization has never been more pressing. Whether you’re a student grappling with lengthy papers or professional navigating news articles, the ability to extract key insights.",
    image: "/blog3.jpg",
    author: {
      name: "Lethium Deo",
      image: "/author3.jpg",
      designation: "Lead Computer Vision Engineer",
    },
    tags: ["research"],
    publishDate: "August 6, 2024 ",
  },
];
export default blogData;
