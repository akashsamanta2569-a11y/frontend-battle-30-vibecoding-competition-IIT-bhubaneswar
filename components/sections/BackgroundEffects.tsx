export function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-[-10%] h-64 w-64 rounded-full bg-forsythia/20 blur-3xl" />
      <div className="absolute right-[-4%] top-[15%] h-72 w-72 rounded-full bg-saffron/20 blur-3xl" />
      <div className="absolute bottom-0 left-[20%] h-56 w-56 rounded-full bg-expedition/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7),_transparent_60%)]" />
    </div>
  );
}
