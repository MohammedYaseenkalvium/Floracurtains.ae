import { useState, useEffect, useRef } from "react";

// ─── Design Tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: "#160f0a",
  secondary: "#705b3e",
  secondaryLight: "#fbdeb9",
  bg: "#f9f9f9",
  surface: "#ffffff",
  surfaceContainer: "#eeeeee",
  surfaceLow: "#f3f3f4",
  outline: "#7f756f",
  outlineVariant: "#d0c4bd",
  error: "#ba1a1a",
  amber: "#92400e",
};

// ─── Shared helpers ─────────────────────────────────────────────────────────────
const Label = ({ children, className = "" }) => (
  <span
    className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${className}`}
    style={{ fontFamily: "Manrope, sans-serif" }}
  >
    {children}
  </span>
);

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`rounded-sm border ${className}`}
    style={{
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(20px)",
      borderColor: "rgba(112,91,62,0.12)",
    }}
  >
    {children}
  </div>
);

// ─── OTP Auth Gate ─────────────────────────────────────────────────────────────
function OTPGate({ onSuccess }) {
  const [step, setStep] = useState("email"); // "email" | "otp" | "loading"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [countdown]);

  const handleSendOTP = () => {
    if (!email.includes("@")) { setError("Enter a valid email address."); return; }
    setError("");
    setStep("loading");
    // Simulate sending — generate a fake 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setSentCode(code);
    setTimeout(() => {
      setStep("otp");
      setCountdown(60);
      // Show the code in console for demo purposes
      console.log(`[DEMO] OTP for ${email}: ${code}`);
    }, 1200);
  };

  const handleOtpChange = (index, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[index] = val;
    setOtp(next);
    if (val && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const entered = otp.join("");
    if (entered.length < 6) { setError("Enter the full 6-digit code."); return; }
    if (entered !== sentCode) { setError("Incorrect code. Please try again."); return; }
    setError("");
    setStep("loading");
    setTimeout(() => onSuccess(email), 800);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: C.bg, fontFamily: "Manrope, sans-serif" }}
    >
      {/* Decorative BG */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: C.secondary, filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: C.secondary, filter: "blur(80px)" }}
        />
      </div>

      <GlassCard className="w-full max-w-md p-10 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <img
            src="https://lh3.googleusercontent.com/aida/ADBb0ui9XM0eTT3djWhrIJPf2yUxpKopnkTL3NJNWVhzF9gCNYfjYFqRrvP5pW3OTwsxIFQG0kfMuPqrVJ5QYBe8zBUPANPyRI93Rxq1bpi0jzqAo0IctB66opLtyN8uLVxr0Vf1eIvHkQupkDD5t_vub41S9dZwk_25EaAeh6ub9cgi4zw_5E5fPYaPk-1rvybcw7TspFWGqfZeGDbExORr2TOcwea_3RO7QTanim4ts2bjlGrXi4ZNhbVeWAj0VyA-ZCUIIS3z7ckSuGE"
            alt="Flora"
            className="h-8 w-auto brightness-0"
          />
          <span className="text-xl font-light tracking-[0.2em] uppercase" style={{ color: C.primary }}>
            Flora
          </span>
        </div>

        {step === "loading" ? (
          <div className="flex flex-col items-center py-12 gap-4">
            <div
              className="w-10 h-10 border-2 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: C.secondary, borderTopColor: "transparent" }}
            />
            <Label style={{ color: C.outline }}>Verifying…</Label>
          </div>
        ) : step === "email" ? (
          <>
            <h1
              className="text-3xl font-normal mb-2 leading-snug"
              style={{ fontFamily: "Noto Serif, serif", color: C.primary }}
            >
              Admin Access
            </h1>
            <p className="text-sm mb-8" style={{ color: C.outline }}>
              Enter your registered email to receive a one-time passcode.
            </p>
            <div className="mb-5">
              <label className="block mb-2">
                <Label style={{ color: C.outline }}>Email Address</Label>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendOTP()}
                placeholder="admin@floracurtains.ae"
                className="w-full border-b bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-stone-300"
                style={{
                  borderColor: C.outlineVariant,
                  color: C.primary,
                  fontFamily: "Manrope, sans-serif",
                }}
              />
            </div>
            {error && <p className="text-xs mb-4" style={{ color: C.error }}>{error}</p>}
            <button
              onClick={handleSendOTP}
              className="w-full py-4 text-white text-xs font-semibold tracking-[0.15em] uppercase mt-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: C.primary }}
            >
              Send One-Time Code
            </button>
            {/* Demo hint */}
            <p className="text-center text-xs mt-5" style={{ color: C.outline }}>
              Demo: any valid email works. Check browser console for OTP.
            </p>
          </>
        ) : (
          <>
            <h1
              className="text-3xl font-normal mb-2"
              style={{ fontFamily: "Noto Serif, serif", color: C.primary }}
            >
              Verify Identity
            </h1>
            <p className="text-sm mb-8" style={{ color: C.outline }}>
              We sent a 6-digit code to{" "}
              <span className="font-semibold" style={{ color: C.secondary }}>
                {email}
              </span>
            </p>

            {/* OTP inputs */}
            <div className="flex gap-3 mb-6 justify-center">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="w-11 h-14 text-center text-xl font-semibold border-b-2 bg-transparent outline-none transition-colors"
                  style={{
                    borderColor: digit ? C.secondary : C.outlineVariant,
                    color: C.primary,
                    fontFamily: "Manrope, sans-serif",
                  }}
                />
              ))}
            </div>

            {error && <p className="text-xs mb-4 text-center" style={{ color: C.error }}>{error}</p>}

            <button
              onClick={handleVerify}
              className="w-full py-4 text-white text-xs font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
              style={{ backgroundColor: C.primary }}
            >
              Verify & Enter
            </button>

            <div className="flex items-center justify-between mt-5">
              <button
                onClick={() => setStep("email")}
                className="text-xs underline"
                style={{ color: C.outline }}
              >
                Change email
              </button>
              {countdown > 0 ? (
                <span className="text-xs" style={{ color: C.outline }}>
                  Resend in {countdown}s
                </span>
              ) : (
                <button
                  onClick={handleSendOTP}
                  className="text-xs font-semibold"
                  style={{ color: C.secondary }}
                >
                  Resend code
                </button>
              )}
            </div>

            {/* Demo hint */}
            <p className="text-center text-xs mt-5 bg-amber-50 border border-amber-200 rounded p-2" style={{ color: "#92400e" }}>
              🔑 Demo mode — OTP logged to browser console
            </p>
          </>
        )}
      </GlassCard>
    </div>
  );
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ onSignOut }) {
  const navItems = [
    { icon: "dashboard", label: "Dashboard", active: false },
    { icon: "group", label: "Client Relations", active: false },
    { icon: "architecture", label: "Project Pipeline", active: true },
    { icon: "texture", label: "Material Library", active: false },
    { icon: "insert_chart", label: "Analytics", active: false },
  ];

  return (
    <aside
      className="fixed left-0 top-0 h-full w-64 border-r flex flex-col py-10 z-40 hidden lg:flex"
      style={{ background: "#fafaf9", borderColor: C.outlineVariant }}
    >
      <div className="px-7 mb-10">
        <div className="flex items-center gap-3">
          <img
            src="https://lh3.googleusercontent.com/aida/ADBb0ui9XM0eTT3djWhrIJPf2yUxpKopnkTL3NJNWVhzF9gCNYfjYFqRrvP5pW3OTwsxIFQG0kfMuPqrVJ5QYBe8zBUPANPyRI93Rxq1bpi0jzqAo0IctB66opLtyN8uLVxr0Vf1eIvHkQupkDD5t_vub41S9dZwk_25EaAeh6ub9cgi4zw_5E5fPYaPk-1rvybcw7TspFWGqfZeGDbExORr2TOcwea_3RO7QTanim4ts2bjlGrXi4ZNhbVeWAj0VyA-ZCUIIS3z7ckSuGE"
            alt="Flora"
            className="h-7 w-auto brightness-0"
          />
          <span className="text-lg font-light tracking-[0.2em] uppercase" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
            Flora
          </span>
        </div>
        <Label className="block mt-1" style={{ color: C.outline, fontSize: "9px" }}>
          Management Portal
        </Label>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-all"
            style={{
              fontFamily: "Manrope, sans-serif",
              background: item.active ? "#f5ece7" : "transparent",
              color: item.active ? C.secondary : C.outline,
              borderLeft: item.active ? `3px solid ${C.secondary}` : "3px solid transparent",
            }}
          >
            <span className="material-symbols-outlined text-base">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="px-5 mt-auto space-y-2">
        <button
          className="w-full py-3 text-white text-xs font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
          style={{ backgroundColor: C.secondary, fontFamily: "Manrope, sans-serif" }}
        >
          New Project
        </button>
        <div className="pt-4 border-t" style={{ borderColor: C.outlineVariant }}>
          <button
            onClick={onSignOut}
            className="flex items-center gap-3 w-full px-2 py-2 text-xs uppercase tracking-widest transition-colors hover:opacity-70"
            style={{ color: C.error, fontFamily: "Manrope, sans-serif" }}
          >
            <span className="material-symbols-outlined text-base">logout</span>
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}

// ─── Top Nav ───────────────────────────────────────────────────────────────────
function TopNav({ userEmail }) {
  return (
    <nav
      className="fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 flex items-center justify-between px-8 border-b"
      style={{ background: "rgba(249,249,249,0.85)", backdropFilter: "blur(12px)", borderColor: C.outlineVariant }}
    >
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-base" style={{ color: C.secondary }}>architecture</span>
        <span className="text-xs font-semibold tracking-[0.12em] uppercase" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
          Project Pipeline
        </span>
        <span className="text-stone-300 mx-2">/</span>
        <span className="text-xs font-semibold tracking-[0.12em] uppercase" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
          FC-2024-089
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-xl hover:opacity-70 transition-opacity" style={{ color: C.outline }}>
          notifications
        </button>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: C.secondary, fontFamily: "Manrope, sans-serif" }}
          title={userEmail}
        >
          {userEmail?.[0]?.toUpperCase() || "A"}
        </div>
      </div>
    </nav>
  );
}

// ─── Progress Tracker ──────────────────────────────────────────────────────────
const STEPS = [
  { label: "Measurement", icon: "straighten", done: true },
  { label: "Fabric Sourcing", icon: "texture", done: true },
  { label: "Tailoring", icon: "cut", done: false, active: true },
  { label: "Installation", icon: "handyman", done: false },
  { label: "Delivery", icon: "local_shipping", done: false },
];

function ProgressTracker({ steps, onToggle }) {
  return (
    <GlassCard className="p-7">
      <div className="flex items-center justify-between mb-7">
        <Label style={{ color: C.secondary }}>Project Progress</Label>
        <span className="text-xs" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
          {steps.filter((s) => s.done).length} / {steps.length} completed
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative mb-8">
        <div className="h-[2px] w-full rounded-full" style={{ background: C.outlineVariant }} />
        <div
          className="h-[2px] rounded-full absolute top-0 left-0 transition-all duration-700"
          style={{
            background: C.secondary,
            width: `${(steps.filter((s) => s.done).length / (steps.length - 1)) * 100}%`,
          }}
        />
        {/* Step dots */}
        <div className="absolute top-0 left-0 w-full flex justify-between -translate-y-1/2">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => onToggle(i)}
              title={`Toggle: ${step.label}`}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              style={{ transform: "translateY(-50%)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm"
                style={{
                  background: step.done ? C.secondary : step.active ? C.surface : C.surfaceContainer,
                  borderColor: step.done || step.active ? C.secondary : C.outlineVariant,
                  color: step.done ? "white" : step.active ? C.secondary : C.outline,
                }}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontSize: "16px", animation: step.active && !step.done ? "pulse 1.5s infinite" : "none" }}
                >
                  {step.done ? "check" : step.icon}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Labels row */}
      <div className="flex justify-between mt-2">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center" style={{ width: `${100 / steps.length}%` }}>
            <Label
              className="text-center"
              style={{
                color: step.done ? C.secondary : step.active ? C.secondary : C.outline,
                fontSize: "9px",
                lineHeight: "1.4",
              }}
            >
              {step.label}
            </Label>
            {step.active && !step.done && (
              <span
                className="text-[8px] mt-1 px-1.5 py-0.5 rounded-full"
                style={{
                  background: "#fbdeb9",
                  color: C.secondary,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                IN PROGRESS
              </span>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

// ─── Customer Card ─────────────────────────────────────────────────────────────
function CustomerCard() {
  return (
    <GlassCard className="p-7">
      <div className="flex justify-between items-start mb-5">
        <Label style={{ color: C.secondary }}>Customer Overview</Label>
        <button className="material-symbols-outlined text-base" style={{ color: C.outline }}>
          open_in_new
        </button>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5CZDap_6VNGG84sIDZ-DjcS5PHj6c8CT63siju1XfWSWOhQtuWd3p2D58nKKZiyfQnfr1VKnM8eCDWZ363RMZGu9MxztpHBmALrvUdHRYFHbFb67uQChA3cvea6diBkEdJat2mz_wH_l9x9X7bEMLTAbbFj9eFxsYv3tWeVOhlzdfN2D3fiTUhp0qCu2yuDWeaMDww3AkPnGjoCh437nccs6XArXrDGArSz4mICOJNAgYx8ZUHaUjs6fB-ZeUP6_0OKgl1IYiaFn-"
          alt="Customer"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold" style={{ fontFamily: "Noto Serif, serif", color: C.primary, fontSize: "18px" }}>
            Elena Moretti
          </p>
          <p className="text-xs mt-0.5" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
            Premium Member · 4 Projects
          </p>
        </div>
      </div>
      <div className="space-y-3 pt-5 border-t" style={{ borderColor: "rgba(112,91,62,0.12)" }}>
        {[
          { label: "Email", value: "e.moretti@design.com" },
          { label: "Phone", value: "+971 50 123 4567" },
          { label: "Location", value: "Abu Dhabi, Al Bateen" },
          { label: "Last Enquiry", value: "Jan 12, 2024" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between items-center text-sm">
            <span style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>{row.label}</span>
            <span className="font-medium text-xs" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

// ─── Assigned Artisan ──────────────────────────────────────────────────────────
function ArtisanCard() {
  return (
    <GlassCard className="p-7">
      <Label className="block mb-5" style={{ color: C.secondary }}>
        Assigned Artisan
      </Label>
      <div className="flex items-center gap-4 mb-5">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP9ru96XqBse4j2VEIiEnan_UGpKFlv-jWE5LHQxLpevMRNZ6O8vm-1mOxGXzU71qenwS_RP4AFDnShI-DFsxghLSWF0b8Q6AH9lb8ARpglzXqwE4gZPLJkUykVuiFjKpMCElKJSRomR9q76W48ER_5QfWgoxgqqoG4WTlEwY_lOBA_rxHp7DugtASQF3V7KGFbSt5x5tocaSPSuBpc1gXYjm1qvlCFeHygbAMPL8bjJ9b-3O3h80R5SI_8e1zIexbJZdwTz3-yxNJ"
          alt="Artisan"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
            Julian Thorne
          </p>
          <Label style={{ color: C.outline, fontSize: "9px" }}>Master Tailor</Label>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-2 p-3 rounded-sm"
        style={{ background: C.surfaceLow }}
      >
        {[
          { icon: "chat_bubble_outline", label: "Chat" },
          { icon: "call", label: "Call" },
          { icon: "mail", label: "Email" },
        ].map(({ icon, label }) => (
          <button
            key={icon}
            className="flex flex-col items-center gap-1 py-2 rounded hover:opacity-70 transition-opacity"
            title={label}
          >
            <span className="material-symbols-outlined text-base" style={{ color: C.secondary }}>
              {icon}
            </span>
            <span className="text-[9px] tracking-widest uppercase" style={{ color: C.outline, fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>
              {label}
            </span>
          </button>
        ))}
      </div>
      {/* Location */}
      <div className="mt-5 pt-4 border-t" style={{ borderColor: "rgba(112,91,62,0.12)" }}>
        <Label className="block mb-3" style={{ color: C.outline, fontSize: "9px" }}>
          Current Location
        </Label>
        <div
          className="flex items-center gap-2 p-3 rounded-sm"
          style={{ background: C.surfaceContainer }}
        >
          <span className="material-symbols-outlined text-base" style={{ color: C.secondary }}>
            location_on
          </span>
          <div>
            <p className="text-xs font-semibold" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
              Al Bateen District
            </p>
            <p className="text-[10px]" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
              On-site · Last updated 14 min ago
            </p>
          </div>
          <span
            className="ml-auto w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
        </div>
      </div>
    </GlassCard>
  );
}

// ─── Quotation Calculator ──────────────────────────────────────────────────────
const DEFAULT_ITEMS = [
  {
    id: 1,
    name: "French Pleat Drapes",
    desc: "Double-layered blackout lining",
    measurements: "320cm × 280cm",
    fabric: "Belgian Linen (Oyster)",
    price: 1450,
  },
  {
    id: 2,
    name: "Roman Motorized Blinds",
    desc: "Somfy integration included",
    measurements: "120cm × 180cm (×2)",
    fabric: "Sheer Voile (Champagne)",
    price: 2100,
  },
  {
    id: 3,
    name: "Installation & Hardware",
    desc: "Brass rods & ceiling mounts",
    measurements: "N/A",
    fabric: "Antique Brass",
    price: 850,
  },
];

function QuotationCalculator() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [editingId, setEditingId] = useState(null);
  const [discount, setDiscount] = useState(5);
  const [vatRate] = useState(5); // UAE VAT 5%
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", desc: "", measurements: "", fabric: "", price: "" });

  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const vat = subtotal * (vatRate / 100);
  const discountAmt = subtotal * (discount / 100);
  const total = subtotal + vat - discountAmt;

  const updateItem = (id, field, val) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, [field]: field === "price" ? parseFloat(val) || 0 : val } : it
      )
    );
  };

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const addItem = () => {
    if (!newItem.name) return;
    setItems((prev) => [...prev, { ...newItem, id: Date.now(), price: parseFloat(newItem.price) || 0 }]);
    setNewItem({ name: "", desc: "", measurements: "", fabric: "", price: "" });
    setShowAddForm(false);
  };

  const fmt = (n) =>
    new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", minimumFractionDigits: 2 }).format(n);

  return (
    <GlassCard className="p-7">
      <div className="flex items-center justify-between mb-6">
        <Label style={{ color: C.secondary }}>Quotation Calculator</Label>
        <button
          onClick={() => setShowAddForm((v) => !v)}
          className="text-xs font-semibold border-b transition-all hover:opacity-70"
          style={{ color: C.secondary, borderColor: C.secondary, fontFamily: "Manrope, sans-serif" }}
        >
          {showAddForm ? "— Cancel" : "+ Add Item"}
        </button>
      </div>

      {/* Add form */}
      {showAddForm && (
        <div
          className="mb-6 p-5 rounded-sm border space-y-3"
          style={{ background: C.surfaceLow, borderColor: C.outlineVariant }}
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: "name", placeholder: "Item Name" },
              { key: "fabric", placeholder: "Fabric / Material" },
              { key: "measurements", placeholder: "Measurements" },
              { key: "price", placeholder: "Price (AED)", type: "number" },
            ].map(({ key, placeholder, type }) => (
              <input
                key={key}
                type={type || "text"}
                placeholder={placeholder}
                value={newItem[key]}
                onChange={(e) => setNewItem((n) => ({ ...n, [key]: e.target.value }))}
                className="w-full border-b bg-transparent py-2 text-xs outline-none"
                style={{ borderColor: C.outlineVariant, color: C.primary, fontFamily: "Manrope, sans-serif" }}
              />
            ))}
          </div>
          <input
            type="text"
            placeholder="Description / Notes"
            value={newItem.desc}
            onChange={(e) => setNewItem((n) => ({ ...n, desc: e.target.value }))}
            className="w-full border-b bg-transparent py-2 text-xs outline-none col-span-2"
            style={{ borderColor: C.outlineVariant, color: C.primary, fontFamily: "Manrope, sans-serif" }}
          />
          <button
            onClick={addItem}
            className="px-5 py-2 text-white text-xs font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.secondary, fontFamily: "Manrope, sans-serif" }}
          >
            Add to Quote
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b" style={{ borderColor: C.outlineVariant }}>
              {["Item & Description", "Measurements", "Fabric", "Total", ""].map((h) => (
                <th
                  key={h}
                  className="py-3 pr-4 text-[10px] font-normal tracking-[0.15em] uppercase"
                  style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b group" style={{ borderColor: C.surfaceContainer }}>
                <td className="py-5 pr-4">
                  {editingId === item.id ? (
                    <input
                      className="font-semibold text-sm w-full border-b bg-transparent outline-none"
                      style={{ color: C.primary, borderColor: C.secondary, fontFamily: "Manrope, sans-serif" }}
                      value={item.name}
                      onChange={(e) => updateItem(item.id, "name", e.target.value)}
                    />
                  ) : (
                    <p className="font-semibold text-sm" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
                      {item.name}
                    </p>
                  )}
                  <p className="text-xs italic mt-0.5" style={{ color: C.outline, fontFamily: "Noto Serif, serif" }}>
                    {item.desc}
                  </p>
                </td>
                <td className="py-5 pr-4 text-xs" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
                  {editingId === item.id ? (
                    <input
                      className="text-xs w-full border-b bg-transparent outline-none"
                      style={{ borderColor: C.secondary, color: C.primary, fontFamily: "Manrope, sans-serif" }}
                      value={item.measurements}
                      onChange={(e) => updateItem(item.id, "measurements", e.target.value)}
                    />
                  ) : (
                    item.measurements
                  )}
                </td>
                <td className="py-5 pr-4 text-xs" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
                  {editingId === item.id ? (
                    <input
                      className="text-xs w-full border-b bg-transparent outline-none"
                      style={{ borderColor: C.secondary, color: C.primary, fontFamily: "Manrope, sans-serif" }}
                      value={item.fabric}
                      onChange={(e) => updateItem(item.id, "fabric", e.target.value)}
                    />
                  ) : (
                    item.fabric
                  )}
                </td>
                <td className="py-5 pr-4 text-sm font-medium" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>
                  {editingId === item.id ? (
                    <input
                      type="number"
                      className="text-sm w-24 border-b bg-transparent outline-none"
                      style={{ borderColor: C.secondary, color: C.primary, fontFamily: "Manrope, sans-serif" }}
                      value={item.price}
                      onChange={(e) => updateItem(item.id, "price", e.target.value)}
                    />
                  ) : (
                    fmt(item.price)
                  )}
                </td>
                <td className="py-5">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                      className="material-symbols-outlined text-sm hover:opacity-70"
                      style={{ color: C.secondary, fontSize: "16px" }}
                    >
                      {editingId === item.id ? "check" : "edit"}
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="material-symbols-outlined text-sm hover:opacity-70"
                      style={{ color: C.error, fontSize: "16px" }}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="mt-7 flex flex-col items-end gap-2">
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-sm">
            <span style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>Subtotal</span>
            <span className="font-medium" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>{fmt(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>VAT ({vatRate}%)</span>
            <span className="font-medium" style={{ color: C.primary, fontFamily: "Manrope, sans-serif" }}>{fmt(vat)}</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <div className="flex items-center gap-2">
              <span style={{ color: C.amber, fontFamily: "Manrope, sans-serif" }}>Discount</span>
              <input
                type="number"
                min={0}
                max={50}
                value={discount}
                onChange={(e) => setDiscount(Math.min(50, Math.max(0, parseFloat(e.target.value) || 0)))}
                className="w-10 text-center border-b bg-transparent outline-none text-xs font-semibold"
                style={{ color: C.amber, borderColor: C.amber, fontFamily: "Manrope, sans-serif" }}
              />
              <span className="text-xs" style={{ color: C.amber }}>%</span>
            </div>
            <span className="font-medium" style={{ color: C.amber, fontFamily: "Manrope, sans-serif" }}>- {fmt(discountAmt)}</span>
          </div>
          <div className="h-px" style={{ background: C.outlineVariant }} />
          <div className="flex justify-between items-center">
            <Label style={{ color: C.secondary }}>Total</Label>
            <span className="text-2xl font-normal" style={{ color: C.primary, fontFamily: "Noto Serif, serif" }}>
              {fmt(total)}
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

// ─── Material Preview ──────────────────────────────────────────────────────────
function MaterialPreview() {
  return (
    <GlassCard className="p-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <Label className="block mb-4" style={{ color: C.secondary }}>
            Material Preview
          </Label>
          <h3
            className="text-2xl font-normal leading-snug mb-4"
            style={{ fontFamily: "Noto Serif, serif", color: C.primary }}
          >
            Premium Belgian Linen — 'Oyster' Collection
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: C.outline, fontFamily: "Manrope, sans-serif" }}>
            A heavy-weight weave with natural slubs, providing exceptional drape and a timeless matte
            finish for luxury interiors.
          </p>
          <button
            className="text-xs font-semibold border-b pb-0.5 hover:opacity-70 transition-opacity"
            style={{ color: C.secondary, borderColor: C.secondary, fontFamily: "Manrope, sans-serif" }}
          >
            View Full Library
          </button>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAE0W3aselltCeerTHB4AKhhGb-irGc7oRzA56SLidioBD0h6nvzxYeLdfSaPD3wxvum6GxzBmP6zzNrhLVyXJb69BOFI1zXbDiuf8KS6BqS0SnRSPSVJKSGBAMtCifFTf9WHWR-kXWkHiFv0eTmEHKiHlDS3scZKok0iGxOGuqhlY0GWPaJWBXgkUK1hKOgmqQZ8IlssFxRZvYNRolPip2IoRYgXDVAfAEV0TEs7yAUuYfol5Na4LTMA0IvYKXLGAO3Z7MZFyvUOMd",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCcM_AZaivFoR375HoxoXg3kNIuwzEEmOwhqjwrskKqr761H66W6AJtTgLNrFB9Tv0QKEB1a12l-E2cqAVWDB2STtHfdNgXNgrJJ60sKarDOp9LDQVoDK4htsEoxIP-3GmiX0ux2ZJntFold_ztVaEslOlxQGi1N7SovKqI-Jkb-PPsRqSmUdSOmooWbyYEC1PML1ikjiKnYEtuHSLntYA6NrFHZltWfNx-mWbfT0ZfwHNk2wLToN1c0EWTU0k0CiU_NRsRDSnUUUpg",
          ].map((src, i) => (
            <div key={i} className="aspect-video overflow-hidden border" style={{ borderColor: C.outlineVariant }}>
              <img
                src={src}
                alt="Material"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

// ─── Main Dashboard ────────────────────────────────────────────────────────────
function ProjectDashboard({ userEmail, onSignOut }) {
  const [steps, setSteps] = useState(STEPS);
  const [status, setStatus] = useState("IN PROGRESS");

  const STATUS_OPTIONS = ["ENQUIRY", "CONSULTATION", "IN PROGRESS", "INSTALLATION", "COMPLETED", "ON HOLD"];

  const toggleStep = (index) => {
    setSteps((prev) =>
      prev.map((s, i) => {
        if (i === index) return { ...s, done: !s.done, active: false };
        if (i === index + 1 && !prev[index].done) return { ...s, active: true };
        return { ...s, active: false };
      })
    );
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: C.bg, fontFamily: "Manrope, sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <Sidebar onSignOut={onSignOut} />
      <TopNav userEmail={userEmail} />

      <main className="lg:ml-64 pt-16 px-6 lg:px-12 pb-20">
        {/* Header */}
        <header className="py-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <Label className="block mb-1" style={{ color: C.secondary }}>
              PROJECT ID: FC-2024-089
            </Label>
            <h1
              className="text-4xl md:text-5xl font-normal leading-tight"
              style={{ fontFamily: "Noto Serif, serif", color: C.primary }}
            >
              Riverside Penthouse Drapery
            </h1>
            <p className="text-sm mt-2" style={{ color: C.outline }}>
              Custom silk drapes and motorized sheer blinds for primary suite.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            {/* Status selector */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border text-xs font-semibold tracking-[0.12em] uppercase px-4 py-3 bg-transparent outline-none cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                borderColor: C.secondary,
                color: C.secondary,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-3 border hover:opacity-80 transition-opacity"
              style={{ borderColor: C.outlineVariant, color: C.primary }}
            >
              <span className="material-symbols-outlined text-base">file_download</span>
              PDF Quote
            </button>
            <button
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-3 text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: C.primary }}
            >
              <span className="material-symbols-outlined text-base">send</span>
              Send to Client
            </button>
          </div>
        </header>

        {/* Grid layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left column: customer + artisan */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <CustomerCard />
            <ArtisanCard />
          </div>

          {/* Right column: progress + quote */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <ProgressTracker steps={steps} onToggle={toggleStep} />
            <QuotationCalculator />
          </div>

          {/* Full width: material preview */}
          <div className="col-span-12">
            <MaterialPreview />
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: C.outlineVariant }}
        >
          <Label style={{ color: C.outline, fontSize: "9px" }}>
            © 2024 Flora Curtains Administrative Suite
          </Label>
          <div className="flex gap-6">
            {["Export CSV", "Privacy Protocol"].map((l) => (
              <a
                key={l}
                href="#"
                className="hover:opacity-70 transition-opacity"
                style={{ color: C.outline }}
              >
                <Label style={{ fontSize: "9px" }}>{l}</Label>
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────
export default function AdminProjectDetail() {
  const [authed, setAuthed] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleSuccess = (email) => {
    setUserEmail(email);
    setAuthed(true);
  };

  const handleSignOut = () => {
    setAuthed(false);
    setUserEmail("");
  };

  if (!authed) return <OTPGate onSuccess={handleSuccess} />;
  return <ProjectDashboard userEmail={userEmail} onSignOut={handleSignOut} />;
