import { useState } from "react";
import { useLocation } from "wouter";
import { BookOpen, GraduationCap, Shield, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ROLES = [
  { id: "student", label: "Student", icon: GraduationCap, color: "bg-emerald-50", iconColor: "text-emerald-600", border: "border-emerald-200", ring: "ring-emerald-500" },
  { id: "teacher", label: "Teacher", icon: BookOpen, color: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-200", ring: "ring-amber-500" },
  { id: "admin", label: "Admin", icon: Shield, color: "bg-violet-50", iconColor: "text-violet-600", border: "border-violet-200", ring: "ring-violet-500" },
  { id: "reader", label: "Reader", icon: User, color: "bg-sky-50", iconColor: "text-sky-600", border: "border-sky-200", ring: "ring-sky-500" },
];

function AuthPage() {
  const [mode, setMode] = useState("signin");
  const [selectedRole, setSelectedRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [_, setLocation] = useLocation();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const url = mode === "signin" ? "/api/login" : "/api/register";
    const body = mode === "signin"
      ? { username: form.username, password: form.password }
      : { ...form, role: selectedRole };

    try {
      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   credentials: "include",
      //   body: JSON.stringify(body),
      // });

      // const data = await res.json();
      // if (!res.ok) {
      //   setError(data.error || "Something went wrong.");
      //   setLoading(false);
      //   return;
      // }
      if (selectedRole === "student") {
        setLocation("/student-onboarding");
      } else {
        setLocation("/bio");
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-foreground">
            {mode === "signin" ? "Sign In to PlotOri" : "Join PlotOri"}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {mode === "signin" ? "Welcome back." : "Create your account."}
          </p>
        </div>

        <div className="flex bg-muted rounded-lg p-1 mb-6">
          <button
            onClick={() => { setMode("signin"); setError(""); }}
            className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${mode === "signin" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"}`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setMode("signup"); setError(""); }}
            className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${mode === "signup" ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Username</label>
            <Input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="bg-stone-50"
            />
          </div>

          {mode === "signup" && (
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="bg-stone-50"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                minLength={6}
                className="bg-stone-50 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mode === "signup" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                  <Input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                  <Input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last"
                    className="bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Select your role</label>
                <div className="grid grid-cols-2 gap-2">
                  {ROLES.map((role) => {
                    const isSelected = selectedRole === role.id;
                    return (
                      <Card
                        key={role.id}
                        onClick={() => setSelectedRole(role.id)}
                        className={`cursor-pointer border-2 transition-all ${isSelected ? `${role.border} ring-2 ${role.ring} shadow-sm` : "border-transparent hover:border-border"
                          }`}
                      >
                        <CardContent className="p-3 flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg ${role.color} flex items-center justify-center shrink-0`}>
                            <role.icon className={`w-4 h-4 ${role.iconColor}`} />
                          </div>
                          <span className="text-sm font-medium text-foreground">{role.label}</span>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-6"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : mode === "signin" ? (
              <>Sign In <ArrowRight className="w-4 h-4 ml-2" /></>
            ) : (
              <>Create Account <ArrowRight className="w-4 h-4 ml-2" /></>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;