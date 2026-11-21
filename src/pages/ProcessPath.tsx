import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, C } from "../shared";
import cleanBirdnest from "../images/grand/clean_birdnest.jpg";
import {
  farmToCupSteps,
  farmToDryingSteps,
  type ProcessStep,
} from "../processData";

type ProcessPathProps = {
  variant: "cup" | "drying";
  embedded?: boolean;
};

export default function ProcessPath({
  variant,
  embedded = false,
}: ProcessPathProps) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const isCup = variant === "cup";
  const steps: ProcessStep[] = isCup ? farmToCupSteps : farmToDryingSteps;
  const title = isCup ? "Farm to Cup" : "Farm to Drying";
  const subtitle = isCup
    ? "From ethical sourcing to premium packaging — the path behind every cup."
    : "Checking, selecting, and drying — the path that preserves natural purity.";

  const stepId = (i: number) => `path-step-${variant}-${i}`;

  const goToStep = (i: number) => {
    setActive(i);
    document
      .getElementById(stepId(i))
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className={`pp-page${embedded ? " embedded" : ""}`}>
      {!embedded && (
        <section className="pp-hero">
          <img src={cleanBirdnest} alt="Cleaned premium bird's nest" />
          <div className="pp-hero-overlay" />
          <div className="pp-container pp-hero-content">
            <p className="pp-breadcrumb">
              <button type="button" onClick={() => navigate("/")}>
                Home
              </button>
              <span>/</span>
              {title}
            </p>
            <h1 style={{ fontFamily: "tahoma" }}>{title}</h1>
            <p className="pp-hero-subtitle">{subtitle}</p>
          </div>
        </section>
      )}

      {/* <section className="pp-steps-intro">
        <div className="pp-container">
          <p className="pp-label">OUR PROCESS PATH</p>
          <p className="pp-intro-copy">{subtitle}</p>
          <div className="pp-step-nav">
            {steps.map((step, i) => (
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
      </section> */}

      <section className="pp-details">
        <div className="pp-container">
          {steps.map((step, i) => (
            <article
              key={step.num}
              id={stepId(i)}
              className={`pp-step${i % 2 === 1 ? " reverse" : ""}`}
            >
              <div className="pp-step-image">
                <img src={step.img} alt={step.alt} />
                <span>{step.num}</span>
              </div>
              <div className="pp-step-copy">
                <p className="pp-label">{step.label}</p>
                <h3>{step.subtitle}</h3>
                <p>{step.desc}</p>
                <div className="pp-note">
                  <span>◆</span>
                  {step.detail}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {!embedded && (
        <section className="pp-cta">
          <div className="pp-container pp-cta-inner">
            <div>
              <p className="pp-label">QUEEN BIRD NEST</p>
              <h2>
                Discover the Pure Essence of Nature with Our Premium Bird Nests
              </h2>
              <p>
                Experience unmatched quality, safety, and care with every order.
              </p>
            </div>
            <button type="button" onClick={() => navigate("/#products")}>
              SHOP NOW <ArrowRight />
            </button>
          </div>
        </section>
      )}

      <style>{`
        .pp-page { background: ${C.ivory}; color: #000000; font-family: 'Inter', sans-serif; }
        .pp-page.embedded .pp-steps-intro { padding-top: 24px; }
        .pp-page.embedded .pp-steps-intro h2 { font-size: clamp(28px,4vw,40px); }
        .pp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .pp-hero { position: relative; height: 420px; overflow: hidden; }
        .pp-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(20,12,6,0.88) 0%, rgba(20,12,6,0.6) 55%, rgba(20,12,6,0.3) 100%); }
        .pp-hero-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; }
        .pp-breadcrumb { display: flex; align-items: center; gap: 10px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
        .pp-breadcrumb button { background: none; border: 0; padding: 0; color: rgba(255,255,255,0.7); cursor: pointer; font: inherit; }
        .pp-hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(46px, 6vw, 76px); font-weight: 600; line-height: 1; color: #fff; margin-bottom: 20px; }
        .pp-hero-subtitle { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.85); max-width: 560px; }
        .pp-steps-intro { padding: 80px 0 48px; text-align: center; }
        .pp-label { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #000000; margin-bottom: 18px; }
        .pp-steps-intro h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4vw, 52px); font-weight: 600; line-height: 1.15; max-width: 760px; margin: 0 auto 20px; color: #000000; }
        .pp-intro-copy { font-size: 16px; line-height: 1.8; color: #000000; max-width: 620px; margin: 0 auto 48px; }
        .pp-step-nav { display: flex; flex-wrap: wrap; justify-content: center; border-top: 1px solid #EEEEEE; border-bottom: 1px solid #EEEEEE; }
        .pp-step-nav button { display: flex; align-items: center; gap: 10px; padding: 18px 22px; background: none; border: 0; border-right: 1px solid #EEEEEE; cursor: pointer; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #000000; transition: color 0.3s, background 0.3s; }
        .pp-step-nav button span { color: #000000; }
        .pp-step-nav button:hover, .pp-step-nav button.active { color: #000000; background: #fff; }
        .pp-details { padding: 24px 0 80px; }
        .pp-step { display: flex; align-items: center; gap: 60px; padding: 56px 0; }
        .pp-step.reverse { flex-direction: row-reverse; }
        .pp-step-image { position: relative; width: 50%; aspect-ratio: 4 / 3; overflow: hidden; background: #FFFFFF; }
        .pp-step-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .pp-step:hover .pp-step-image img { transform: scale(1.03); }
        .pp-step-image span { position: absolute; left: 0; bottom: 0; background: #B8860B; color: #fff; font-family: Tahoma, sans-serif; font-size: 44px; padding: 4px 18px; }
        .pp-step-copy { width: 50%; }
        .pp-step-copy h3 { font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 3.5vw, 44px); font-weight: 600; line-height: 1.1; color: #000000; margin-bottom: 20px; }
        .pp-step-copy > p { font-size: 16px; line-height: 1.85; color: #000000; max-width: 520px; }
        .pp-note { display: flex; gap: 12px; align-items: flex-start; margin-top: 26px; padding-top: 20px; border-top: 1px solid #EEEEEE; font-size: 13px; font-weight: 600; color: #000000; }
        .pp-note span { color: #000000; }
        .pp-cta { background: #2C1A0E; padding: 80px 0; }
        .pp-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .pp-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(30px, 4vw, 48px); font-weight: 600; line-height: 1.15; color: #fff; max-width: 720px; margin-bottom: 16px; }
        .pp-cta p:last-child { color: rgba(255,255,255,0.7); font-size: 14px; }
        .pp-cta button { display: flex; align-items: center; gap: 12px; background: #B8860B; color: #fff; border: 0; cursor: pointer; padding: 16px 28px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 2px; white-space: nowrap; transition: background 0.3s; }
        .pp-cta button:hover { background: #967233; }
        @media(max-width:800px){
          .pp-hero { height: 320px; }
          .pp-step, .pp-step.reverse { flex-direction: column; gap: 24px; }
          .pp-step-image, .pp-step-copy { width: 100%; }
          .pp-cta-inner { flex-direction: column; align-items: flex-start; }
          .pp-step-nav button { flex: 1 1 45%; }
        }
      `}</style>
    </div>
  );
}
