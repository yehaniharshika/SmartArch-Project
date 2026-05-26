import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    // Mock — replace with API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome back!");
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-arch-cream flex">

      {/* ── Left panel — branding ───────────────────────────────────── */}
      <div className="hidden lg:flex lg:w-[45%] bg-stone-900 flex-col justify-between
                      p-12 relative overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px]
                        bg-gradient-to-t from-bronze-DEFAULT/10 to-transparent" />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-9 h-9 bg-bronze-DEFAULT rounded-sm flex items-center justify-center">
            <span className="font-display text-white text-base font-light">S</span>
          </div>
          <span className="font-display text-xl text-arch-cream">SmartArch</span>
        </div>

        {/* Tagline */}
        <div className="relative space-y-4">
          <h2 
            className="font-display text-display-lg text-arch-cream leading-[1.0]"
            style={{ fontFamily: "'Saira', sans-serif" }}
          >
            Analyse.<br />Share.<br />
            <em className="text-bronze-light not-italic">Impress.</em>
          </h2>
          <p 
            className="text-stone-400 leading-relaxed max-w-xs text-[17px]"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            The intelligent floor plan analysis tool built for modern architects.
          </p>
        </div>

        {/* Version */}
        <p className="relative font-mono text-xs text-stone-600">v1.0 · SmartArch</p>
      </div>

      {/* ── Right panel — form ─────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm space-y-8 page-enter">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-2">
            <div className="w-7 h-7 bg-stone-900 rounded-sm flex items-center justify-center">
              <span className="font-display text-arch-cream text-xs font-light">S</span>
            </div>
            <span className="font-display text-lg text-stone-900">SmartArch</span>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <h1 
              className="font-display text-display-md text-stone-900"
              style={{ fontFamily: "'Saira', sans-serif" }}
            >
              Welcome back
            </h1>
            <p 
              className="text-sm text-stone-500"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Sign in to your architect account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="label-mono">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@studio.com"
                className="input-field text-lg"
                autoComplete="email"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="label-mono">Password</label>
                <a href="#" className="font-mono text-xs text-bronze-DEFAULT hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-field text-lg pr-10"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400
                             hover:text-stone-700 transition-colors"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 mt-2 text-base"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign in
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="divider-line" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                             bg-arch-cream px-3 font-mono text-xs text-stone-400">
              or
            </span>
          </div>

          {/* Register link */}
          <p 
            className="text-sm text-stone-500 text-center"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Don't have an account?{" "}
            <Link to="/register" className="text-bronze-DEFAULT hover:underline font-medium">
              Create one <ArrowRight size={12} className="inline" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}