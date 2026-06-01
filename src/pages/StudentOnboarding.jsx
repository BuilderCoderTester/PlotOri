import { useState } from "react";
import { useLocation } from "wouter";
import {
  School,
  GraduationCap,
  Building2,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const LEVELS = [
  {
    id: "school",
    label: "School",
    icon: School,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-500",
  },
  {
    id: "college",
    label: "College",
    icon: GraduationCap,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-200",
    ring: "ring-amber-500",
  },
  {
    id: "university",
    label: "University",
    icon: Building2,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "border-violet-200",
    ring: "ring-violet-500",
  },
];

function StudentOnboarding() {
  const [_, setLocation] = useLocation();

  const [level, setLevel] = useState("school");

  const [form, setForm] = useState({
    institutionName: "",
    classYear: "",
    board: "",
    course: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContinue = () => {
    console.log({
      level,
      ...form,
    });

    setLocation("/bio");
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>

          <h1 className="text-2xl font-serif font-bold text-foreground">
            Student Information
          </h1>

          <p className="text-sm text-muted-foreground mt-2">
            Help us personalize your learning experience.
          </p>
        </div>

        {/* Level Selection */}
        <div className="mb-8">
          <label className="text-sm font-medium text-foreground mb-3 block">
            Select your institution type
          </label>

          <div className="grid md:grid-cols-3 gap-3">
            {LEVELS.map((item) => {
              const isSelected = level === item.id;

              return (
                <Card
                  key={item.id}
                  onClick={() => setLevel(item.id)}
                  className={`cursor-pointer border-2 transition-all ${
                    isSelected
                      ? `${item.border} ring-2 ${item.ring} shadow-sm`
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${item.iconColor}`}
                      />
                    </div>

                    <span className="font-medium">{item.label}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* SCHOOL */}
        {level === "school" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">
                School Name
              </label>

              <Input
                name="institutionName"
                value={form.institutionName}
                onChange={handleChange}
                placeholder="Enter your school name"
                className="bg-stone-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Class
              </label>

              <select
                name="classYear"
                value={form.classYear}
                onChange={handleChange}
                className="w-full h-10 rounded-md border bg-stone-50 px-3"
              >
                <option value="">Select Class</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Board
              </label>

              <select
                name="board"
                value={form.board}
                onChange={handleChange}
                className="w-full h-10 rounded-md border bg-stone-50 px-3"
              >
                <option value="">Select Board</option>
                <option>CBSE</option>
                <option>ICSE</option>
                <option>State Board</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        )}

        {/* COLLEGE */}
        {level === "college" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">
                College Name
              </label>

              <Input
                name="institutionName"
                value={form.institutionName}
                onChange={handleChange}
                placeholder="Enter college name"
                className="bg-stone-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Course
              </label>

              <Input
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="BCA, BTech, BSc..."
                className="bg-stone-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Year / Semester
              </label>

              <Input
                name="classYear"
                value={form.classYear}
                onChange={handleChange}
                placeholder="1st Year, Semester 2..."
                className="bg-stone-50"
              />
            </div>
          </div>
        )}

        {/* UNIVERSITY */}
        {level === "university" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">
                University Name
              </label>

              <Input
                name="institutionName"
                value={form.institutionName}
                onChange={handleChange}
                placeholder="Enter university name"
                className="bg-stone-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Department
              </label>

              <Input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Computer Science"
                className="bg-stone-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Degree / Program
              </label>

              <Input
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="MCA, MSc, MTech..."
                className="bg-stone-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Current Year
              </label>

              <Input
                name="classYear"
                value={form.classYear}
                onChange={handleChange}
                placeholder="1st Year, 2nd Year..."
                className="bg-stone-50"
              />
            </div>
          </div>
        )}

        <Button
          onClick={handleContinue}
          className="w-full mt-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-6"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default StudentOnboarding;