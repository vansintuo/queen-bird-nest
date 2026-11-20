import { C } from "./shared"
import houseBird from "./images/process/house_bird.jpg"
import qualitySelect from "./images/process/quality_select.jpg"
import carefulSelect from "./images/process/careful_select.jpg"
import finalProcess from "./images/process/final_process.jpg"
import readyToEatPackage from "./images/process/ready_to_eat_pagkage.jpg"
import storyImagePrimV2 from "./images/grand/premier_projpg.jpg"
import storyImageClean2 from "./images/grand/clean_birdnest.jpg"
import CheckProcess from "./images/process/checking_process.jpg"
import selectedNest from "./images/process/selected_nest.jpg"
import sgoutNest from "./images/process/sgout_nest.jpg"
import qoulityGuaden from "./images/process/qoulity_guaden.jpg";
import shappingModern from "./images/process/shapping_modern.jpg";
import finalProcessDry from "./images/process/final_process_dry.jpg";
import checkingNest from "./images/process/checking_nest.jpg";

export type ProcessStep = {
  num: string
  label: string
  subtitle: string
  desc: string
  detail: string
  img: string
  alt: string
  bg: string
}




export const farmToCupSteps: ProcessStep[] = [
  {
    num: "01",
    label: "Bird Nest Farming",
    subtitle: "Raising swiftlets in a natural environment",
    desc: "Swiftlets naturally build their nests in carefully maintained bird houses. We work with responsible farmers who provide suitable environments for swiftlets to nest safely and naturally.",
    detail: "Naturally formed bird's nests, responsibly and carefully sourced.",
    img: houseBird,
    alt: "Swiftlet bird house in a natural environment",
    bg: C.ivory,
  },
  {
    num: "02",
    label: "Nest Harvesting",
    subtitle: "Carefully collecting mature bird's nests",
    desc: "Mature bird's nests are carefully collected by experienced farmers using responsible harvesting practices. Each nest is handled with care to preserve its natural shape and structure.",
    detail: "Carefully harvested nests with attention to natural quality.",
    img: qoulityGuaden,
    alt: "Freshly harvested natural bird's nests",
    bg: C.cream,
  },
  {
    num: "03",
    label: "Initial Inspection",
    subtitle: "Checking quality, size, and condition",
    desc: "Every harvested nest undergoes an initial inspection. Our team examines its natural appearance, colour, structure, and overall condition before selecting suitable nests for further processing.",
    detail: "Careful inspection to select nests that meet our quality standards.",
    img: checkingNest,
    alt: "Bird's nests undergoing initial quality inspection",
    bg: C.cream,
  },
  {
    num: "04",
    label: "Cleaning & Feather Removal",
    subtitle: "Removing impurities with precision",
    desc: "Skilled workers carefully remove feathers, dust, and other unwanted impurities using specialized tools. Each nest is cleaned individually while preserving its delicate natural strands.",
    detail: "Meticulous cleaning to maintain purity and natural structure.",
    img: "https://images.openai.com/static-rsc-4/zZ-xjwv6-mcgq6R83zQP0BlzSPsQ91aAlcwPm5F9Z2vAFZ4DaEfkGzm76VAhr1mQuACDX8VU8cg_ReWQvSJz0_uFoijKSMBJcJ0_znuH1t-1sx4OwAcPS_9gFDzmeTckX2NNSoI-R_BE-lLw-bSrSE2pSn92HGTGjcirQoLsTilvHNDBe5f-Qlj3JcTSyHuK?purpose=fullsize",
    alt: "Workers carefully cleaning bird's nests",
    bg: C.ivory,
  },
  {
    num: "05",
    label: "Soaking & Preparation",
    subtitle: "Preparing nests for cooking",
    desc: "After cleaning, the bird's nests are soaked under controlled conditions to soften their natural strands. They are then carefully prepared according to the requirements of the final product.",
    detail: "Carefully prepared nests for a delicate texture.",
    img: "https://images.openai.com/static-rsc-4/5x0t1H5N9snDp7uBFJR60117NRO6hlVMt-SFaiE01Gyr8dWxxEhXQCXzqd4imk06fm6yIO7kZuNTw1Cgkj6b7e2ecxme9RaJVKwsteyodLyvxv39ErYP7atafnI0Fk4eSyJc9Cvwi7qUzSUZ_XMCPz6WlT85vYCzs0yxojxrgyugr0WmTNfIvAXt02K34_m2?purpose=fullsize",
    alt: "Cleaned bird's nests prepared for cooking",
    bg: C.cream,
  },
  {
    num: "06",
    label: "Cooking & Sterilization",
    subtitle: "Carefully prepared under controlled conditions",
    desc: "Prepared bird's nests undergo controlled cooking and appropriate heat treatment. Hygienic processing procedures are followed to achieve the desired texture and meet food safety requirements.",
    detail: "Controlled cooking and hygienic processing for product quality.",
    img: finalProcess,
    alt: "Bird's nest cooking and processing",
    bg: C.cream,
  },
  {
    num: "07",
    label: "Packaging",
    subtitle: "Protecting freshness and quality",
    desc: "The finished bird's nest products are carefully filled and sealed in hygienic, food-grade containers. Each package is prepared with attention to cleanliness, presentation, and product quality.",
    detail: "Hygienically packaged products prepared with care.",
    img: storyImagePrimV2,
    alt: "Premium bird's nest product packaging",
    bg: C.ivory,
  },
]





export const farmToDryingSteps: ProcessStep[] = [
  {
    num: "01",
    label: "Bird Nest Farming",
    subtitle: "A natural home for swiftlets",
    desc: "Swiftlets build their nests in carefully maintained bird houses. Responsible farming practices help provide a suitable environment for natural nest formation and sustainable harvesting.",
    detail: "Naturally formed bird's nests from carefully maintained farms.",
    img: houseBird,
    alt: "Swiftlet bird house in a natural environment",
    bg: C.ivory,
  },
  {
    num: "02",
    label: "Nest Harvesting",
    subtitle: "Collecting mature natural nests",
    desc: "Mature bird's nests are carefully collected from swiftlet houses by experienced farmers. Each nest is handled gently to preserve its original structure and natural strands before transportation.",
    detail: "Carefully collected nests handled with attention and precision.",
    img : sgoutNest,
    alt: "Freshly harvested raw bird's nests",
    bg: C.cream,
  },
  {
    num: "03",
    label: "Initial Inspection",
    subtitle: "Examining every nest individually",
    desc: "Collected nests are inspected for their natural shape, colour, size, and condition. This first quality assessment helps identify suitable nests for cleaning and further processing.",
    detail: "Every nest is checked before entering the cleaning process.",
    img: "https://images.openai.com/static-rsc-4/cy8vwgyndRqVEUA-KVuVmQaOjDUH3xXS6G0GzZZ5etLZpOxCALbdZ_91N76UtcS6-qk4--ghu8ugcglDMQBwxW1pQi2YTD7do6Uubkb5jOPEa9_xZMtkGwl3ncZYEPp9FzxBDQMozj0NZaCp_FNvskGoTR9R7QFXNrH4ZjEHZ3wFwGs9rB7mW7xKbpXtN8wf?purpose=fullsize",
    alt: "Raw bird's nests undergoing quality inspection",
    bg: C.cream,
  },
  {
    num: "04",
    label: "Quality Grading",
    subtitle: "Selecting according to natural characteristics",
    desc: "The inspected nests are sorted according to their shape, strand structure, size, and overall appearance. Each category is organized to maintain consistent quality throughout production.",
    detail: "Carefully graded nests for consistent product standards.",
    img: qoulityGuaden,
    alt: "Bird's nests selected and sorted by quality",
    bg: C.ivory,
  },
  {
    num: "05",
    label: "Cleaning & Feather Removal",
    subtitle: "Removing feathers and impurities",
    desc: "Each selected nest is carefully cleaned to remove feathers, dust, and unwanted materials. Skilled workers use precise techniques to preserve the natural strands and delicate structure of the nest.",
    detail: "Thorough cleaning while preserving natural nest quality.",
    img: "https://images.openai.com/static-rsc-4/b3ItNFQcNsqj3EYbbU2hVerL0ZVkhx-mM7M-psvmtcjK-IG-ROipM3eQXjzdptgOWoF8Jkln3tARo7WDKUTsKwhnPoXTJiy6gsJjcowQyZEfvOBBXXepR6wT0jESRQfyryD94iE4poivfZZCqtIJRcXNEM9HqvLpIYlApwAsyjg8O0RmNHRqcRUycuLVrJ6R?purpose=fullsize",
    alt: "Bird's nests undergoing careful cleaning",
    bg: C.cream,
  },
  {
    num: "06",
    label: "Shaping & Molding",
    subtitle: "Restoring the natural nest appearance",
    desc: "After cleaning and preparation, the nests are carefully arranged and shaped into their desired forms. Attention is given to maintaining a natural appearance and consistent product presentation.",
    detail: "Carefully shaped nests with a natural appearance.",
    img: shappingModern,
    alt: "Cleaned bird's nests being shaped",
    bg: C.cream,
  },
  {
    num: "07",
    label: "Controlled Drying",
    subtitle: "Preserving natural quality and structure",
    desc: "The prepared nests are placed in a controlled drying environment. Temperature and humidity are monitored to reduce moisture to the required level while maintaining the natural appearance and structure.",
    detail: "Controlled drying to achieve the required moisture level.",
    img: "https://images.openai.com/static-rsc-4/SyWKsxpEAFRFxqu3tumPgenFN0NPfGeAdcYUC0GOQVvIFSJIjf0_pzsuV9Q6VnZB3_lPrpt5jEezFJdJqn76ityBLh96DQOwH6xPF5nZOMY-fsujobQO0zFL9B7IlGKUNXN2-WW-oL6G3ZJ56M9hOjRHiCNtf8Kj4xRz7LqwH2WGtpbtAZqnuvEzFnN9zL8T?purpose=fullsize",
    alt: "Bird's nests undergoing the drying process",
    bg: C.ivory,
  },
  {
    num: "08",
    label: "Final Inspection & Packaging",
    subtitle: "Quality assured from start to finish",
    desc: "After drying, each nest undergoes a final inspection to check its appearance, texture, and moisture level. Approved products are carefully packaged and stored in a clean, dry environment to protect their quality.",
    detail: "Final quality inspection and hygienic packaging.",
    img: finalProcessDry,
    alt: "Finished dried bird's nests ready for packaging",
    bg: C.cream,
  },
]


