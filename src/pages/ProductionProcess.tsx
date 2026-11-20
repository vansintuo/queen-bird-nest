import { useState } from "react"
import { useNavigate } from "react-router"
import { ArrowRight, C } from "../shared"
import cleanBirdnest from "../images/grand/clean_birdnest.jpg"
import houseBird from "../images/process/house_bird.jpg"
import qualitySelect from "../images/process/quality_select.jpg"
import carefulSelect from "../images/process/careful_select.jpg"
import finalProcess from "../images/process/final_process.jpg"
import readyToEatPackage from "../images/process/ready_to_eat_pagkage.jpg"

const STEPS = [
  {
    num: "01",
    label: "Ethical Sourcing",
    title: "From Queen's finest habitats",
    desc: "We partner with responsible swiftlet farmers who maintain natural, humane bird house environments. Our nests are sourced from certified farms in Southeast Asia where swiftlets nest freely, and no birds are harmed in the process.",
    note: "Carefully selected natural bird's nests — sustainably and ethically sourced.",
    img: houseBird,
    alt: "Bird house in a natural field environment",
  },
  {
    num: "02",
    label: "Careful Selection",
    title: "Only the finest pass our eyes",
    desc: "Each nest is individually inspected by our skilled team. We assess strand length, colour, shape, and overall integrity. Only nests that meet our premium grade standards are accepted into our processing line.",
    note: "Visual inspection ensures authenticity and natural premium quality.",
    img: qualitySelect,
    alt: "Close-up of a premium raw bird's nest",
  },
  {
    num: "03",
    label: "Quality Processing",
    title: "Controlled and hygienic",
    desc: "After cleaning, nests are processed under strict hygiene protocols in our controlled environment. Temperature, humidity, and handling are carefully monitored to maintain purity and preserve natural nutrients throughout.",
    note: "Prepared under rigorous hygiene and processing standards.",
    img: carefulSelect,
    alt: "Clean food processing facility",
  },
  {
    num: "04",
    label: "Preparation",
    title: "Every piece, verified",
    desc: "Before packaging, each nest undergoes a final quality review. Our team checks for consistency, cleanliness, and grade classification. Only products that pass every checkpoint are approved for the next stage.",
    note: "No nest leaves our facility without passing a thorough final review.",
    img: finalProcess,
    alt: "Premium product inspection",
  },
  {
    num: "05",
    label: "Premium Packaging",
    title: "Worthy of what's inside",
    desc: "Each product is carefully packed in our premium packaging, designed to maintain freshness and present the product beautifully. Premium packaging is portioned at 80ml per cup, while our standard products are portioned at 150ml per cup.",
    note: "Premium: 80ml per cup. Standard: 150ml per cup.",
    img: readyToEatPackage,
    alt: "Elegant premium product packaging",
  },
]

export default function ProductionProcess() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)

  const goToStep = (i: number) => {
    setActive(i)
    document
      .getElementById(`process-step-${i}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="pp-page">
      <section className="pp-hero">
        <img src={cleanBirdnest} alt="Cleaned premium bird's nest" />
        <div className="pp-hero-overlay" />
        <div className="pp-container pp-hero-content">
          <p className="pp-breadcrumb">
            <button type="button" onClick={() => navigate("/")}>
              Home
            </button>
            <span>/</span>
            Production Process
          </p>
          <h1>Production Process</h1>
          <p className="pp-hero-subtitle">
            Carefully selected, hygienically processed, and packed with care —
            from our habitats to your table.
          </p>
        </div>
      </section>

      <section className="pp-steps-intro">
        <div className="pp-container">
          <p className="pp-label">OUR PRODUCTION PROCESS</p>
          <h2>Every batch goes through five carefully managed steps.</h2>
          <p className="pp-intro-copy">
            Our nests are handled with precision at every stage, cleaned by
            hand, and checked for quality before they are packed for export.
          </p>
          <div className="pp-step-nav">
            {STEPS.map((step, i) => (
              <button
                key={step.num}
                type="button"
                className={active === i ? "active" : ""}
                onClick={() => goToStep(i)}
              >
                <span>{step.num}</span>
                {step.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-details">
        <div className="pp-container">
          {STEPS.map((step, i) => (
            <article
              key={step.num}
              id={`process-step-${i}`}
              className={`pp-step${i % 2 === 1 ? " reverse" : ""}`}
            >
              <div className="pp-step-image">
                <img src={step.img} alt={step.alt} />
                <span>{step.num}</span>
              </div>
              <div className="pp-step-copy">
                <p className="pp-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="pp-note">
                  <span>◆</span>
                  {step.note}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pp-cta">
        <div className="pp-container pp-cta-inner">
          <div>
            <p className="pp-label">QUEEN BIRD NEST</p>
            <h2>Discover the Pure Essence of Nature with Our Premium Bird Nests</h2>
            <p>Experience unmatched quality, safety, and care with every order.</p>
          </div>
          <button type="button" onClick={() => navigate("/#products")}>
            SHOP NOW <ArrowRight />
          </button>
        </div>
      </section>

      <style>{`
        .pp-page { background: #FFFFFF; color: #000000; font-family: 'Inter', sans-serif; }
        .pp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .pp-label { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #000000; margin-bottom: 18px; }
        .pp-hero { position: relative; height: 460px; display: flex; align-items: center; overflow: hidden; }
        .pp-hero > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .pp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(20,12,6,0.88) 0%, rgba(20,12,6,0.6) 55%, rgba(20,12,6,0.3) 100%); }
        .pp-hero-content { position: relative; padding-top: 120px; }
        .pp-breadcrumb { display: flex; align-items: center; gap: 10px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
        .pp-breadcrumb button { background: none; border: 0; padding: 0; color: rgba(255,255,255,0.7); cursor: pointer; font: inherit; }
        .pp-hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(46px, 6vw, 76px); font-weight: 600; line-height: 1; color: #fff; margin-bottom: 20px; }
        .pp-hero-subtitle { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.85); max-width: 560px; }
        .pp-steps-intro { padding: 96px 0 64px; text-align: center; }
        .pp-steps-intro h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4vw, 52px); font-weight: 600; line-height: 1.15; max-width: 760px; margin: 0 auto 20px; color: #000000; }
        .pp-intro-copy { font-size: 15px; line-height: 1.8; color: #000000; max-width: 620px; margin: 0 auto 48px; }
        .pp-step-nav { display: flex; justify-content: center; flex-wrap: wrap; gap: 0; border-top: 1px solid ${C.creamDark}; border-bottom: 1px solid ${C.creamDark}; }
        .pp-step-nav button { display: flex; align-items: center; gap: 10px; padding: 18px 22px; background: none; border: 0; border-right: 1px solid ${C.creamDark}; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #000000; transition: color 0.3s, background 0.3s; }
        .pp-step-nav button:last-child { border-right: 0; }
        .pp-step-nav button span { color: #000000; }
        .pp-step-nav button:hover, .pp-step-nav button.active { color: #000000; background: #fff; }
        .pp-details { padding: 20px 0 110px; }
        .pp-step { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 72px; padding: 56px 0; border-bottom: 1px solid ${C.creamDark}; scroll-margin-top: 100px; }
        .pp-step.reverse .pp-step-image { order: 2; }
        .pp-step-image { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: ${C.cream}; }
        .pp-step-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .pp-step:hover .pp-step-image img { transform: scale(1.04); }
        .pp-step-image span { position: absolute; left: 0; bottom: 0; background: ${C.gold}; color: #fff; font-family: 'Cormorant Garamond', serif; font-size: 44px; padding: 4px 18px; }
        .pp-step-copy h3 { font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 3.5vw, 44px); font-weight: 600; line-height: 1.1; color: #000000; margin-bottom: 20px; }
        .pp-step-copy > p { font-size: 15px; line-height: 1.85; color: #000000; max-width: 520px; }
        .pp-note { display: flex; gap: 12px; align-items: flex-start; margin-top: 26px; padding-top: 20px; border-top: 1px solid ${C.creamDark}; font-size: 13px; font-weight: 600; color: #000000; }
        .pp-note span { color: #000000; }
        .pp-cta { background: ${C.brown}; padding: 80px 0; }
        .pp-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .pp-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 4vw, 48px); font-weight: 600; line-height: 1.15; color: #fff; max-width: 720px; margin-bottom: 16px; }
        .pp-cta p:last-child { color: rgba(255,255,255,0.7); font-size: 14px; }
        .pp-cta button { display: flex; align-items: center; gap: 12px; background: ${C.gold}; color: #fff; border: 0; cursor: pointer; padding: 16px 28px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 2px; white-space: nowrap; transition: background 0.3s; }
        .pp-cta button:hover { background: #967233; }
        @media (max-width: 900px) {
          .pp-step { grid-template-columns: 1fr; gap: 28px; }
          .pp-step.reverse .pp-step-image { order: 0; }
          .pp-cta-inner { flex-direction: column; align-items: flex-start; }
          .pp-step-nav button { padding: 14px; font-size: 10px; }
        }
        @media (max-width: 600px) {
          .pp-hero { height: 400px; }
          .pp-steps-intro { padding: 64px 0 40px; }
          .pp-step-nav { flex-direction: column; }
          .pp-step-nav button { border-right: 0; border-bottom: 1px solid ${C.creamDark}; }
          .pp-step-nav button:last-child { border-bottom: 0; }
        }
      `}</style>
    </div>
  )
}
