export default function SectionWave({ variant = "dark" }) {
  return (
    <div className={`section-wave section-wave-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0 48 C180 70 300 82 480 62 C660 42 760 46 900 58 C1080 74 1230 66 1440 40 V120 H0 Z" />
      </svg>
    </div>
  );
}
