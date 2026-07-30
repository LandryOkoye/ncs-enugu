"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT – Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
]

const ATTENDEE_CATEGORIES = [
  "Student",
  "Founder/Entrepreneur",
  "Technology Professional",
  "Government",
  "Academia/Research",
  "Investor",
  "Corporate Executive",
  "Media",
  "Sponsor/Partner",
  "Other",
]

const inputCls =
  "h-10 bg-white/5 border-white/10 text-[#efe5d2] placeholder:text-white/25 focus-visible:border-[#c59d5f] focus-visible:ring-[#c59d5f]/20 rounded-lg"

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-2">
      <span className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase">{children}</span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

function SelectField({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(
          "h-10 w-full appearance-none rounded-lg border border-white/10 bg-[#111] px-3 py-1 text-sm text-[#efe5d2] outline-none transition-colors cursor-pointer focus:border-[#c59d5f]",
          "[&>option]:bg-[#111] [&>option]:text-[#efe5d2]",
          className
        )}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
    </div>
  )
}

function ConsentCheckbox({
  id,
  checked,
  onChange,
  label,
}: {
  id: string
  checked: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer group"
    >
      <button
        type="button"
        id={id}
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "mt-0.5 w-5 h-5 shrink-0 rounded border transition-all duration-200 flex items-center justify-center",
          checked
            ? "bg-[#c59d5f] border-[#c59d5f]"
            : "bg-white/5 border-white/20 group-hover:border-[#c59d5f]/50"
        )}
      >
        {checked && <Check className="w-3 h-3 text-[#070707]" strokeWidth={3} />}
      </button>
      <span className="text-sm text-white/60 leading-relaxed font-light">{label}</span>
    </label>
  )
}

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [attendeeCategory, setAttendeeCategory] = useState("")
  const [consent1, setConsent1] = useState(false)
  const [consent2, setConsent2] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const fd = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fd.get("fullName"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          gender: fd.get("gender"),
          ageRange: fd.get("ageRange"),
          state: fd.get("state"),
          organisation: fd.get("organisation"),
          jobTitle: fd.get("jobTitle"),
          industry: fd.get("industry"),
          experience: fd.get("experience"),
          attendeeCategory,
          linkedin: fd.get("linkedin"),
          website: fd.get("website"),
          source: fd.get("source"),
        }),
      })

      if (!res.ok) throw new Error("server error")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or contact enugustatechapter@ncs.org.ng.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <FieldGroup>
          <div className="flex flex-col gap-1.5 mb-1">
            <h1 className="text-2xl md:text-3xl font-light text-[#efe5d2] leading-tight">
              Register for{" "}
              <span className="text-[#c59d5f]">EIIA 2026</span>
            </h1>
            <p className="text-sm text-white/40 font-light">
              Fields marked <span className="text-[#c59d5f]">*</span> are required
            </p>
          </div>

          {/* ── Personal Information ── */}
          <SectionHeader>Personal Information</SectionHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Full Name <span className="text-[#c59d5f]">*</span>
              </FieldLabel>
              <Input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                className={inputCls}
              />
            </Field>
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Email Address <span className="text-[#c59d5f]">*</span>
              </FieldLabel>
              <Input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className={inputCls}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Phone Number <span className="text-[#c59d5f]">*</span>
              </FieldLabel>
              <Input
                type="tel"
                name="phone"
                required
                placeholder="+234 800 000 0000"
                className={inputCls}
              />
            </Field>
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Gender
              </FieldLabel>
              <SelectField name="gender">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not">Prefer not to say</option>
              </SelectField>
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Age Range
              </FieldLabel>
              <SelectField name="ageRange">
                <option value="">Select age range</option>
                <option value="18-24">18 – 24</option>
                <option value="25-34">25 – 34</option>
                <option value="35-44">35 – 44</option>
                <option value="45-54">45 – 54</option>
                <option value="55+">55+</option>
              </SelectField>
            </Field>
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                State of Residence
              </FieldLabel>
              <SelectField name="state">
                <option value="">Select state</option>
                {NIGERIAN_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </SelectField>
            </Field>
          </div>

          {/* ── Professional Information ── */}
          <SectionHeader>Professional Information</SectionHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Organisation / Company / Institution
              </FieldLabel>
              <Input
                type="text"
                name="organisation"
                placeholder="E.g. Genesys Tech Hub"
                className={inputCls}
              />
            </Field>
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Job Title / Position
              </FieldLabel>
              <Input
                type="text"
                name="jobTitle"
                placeholder="E.g. Software Engineer"
                className={inputCls}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Industry / Sector
              </FieldLabel>
              <SelectField name="industry">
                <option value="">Select industry</option>
                <option value="web3">Web3</option>
                <option value="technology">Technology</option>
                <option value="fintech">Finance & Fintech</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="agriculture">Agriculture & Agritech</option>
                <option value="government">Government & Public Service</option>
                <option value="media">Media & Entertainment</option>
                <option value="consulting">Consulting</option>
                <option value="ngo">NGO / Non-profit</option>
                <option value="other">Other</option>
              </SelectField>
            </Field>
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Years of Professional Experience
              </FieldLabel>
              <SelectField name="experience">
                <option value="">Select range</option>
                <option value="0-2">0 – 2 years</option>
                <option value="3-5">3 – 5 years</option>
                <option value="6-10">6 – 10 years</option>
                <option value="11-15">11 – 15 years</option>
                <option value="15+">15+ years</option>
              </SelectField>
            </Field>
          </div>

          <Field>
            <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-2">
              Attendee Category{" "}
              <span className="text-white/30 normal-case font-normal tracking-normal">
                (Select one)
              </span>
            </FieldLabel>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ATTENDEE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() =>
                    setAttendeeCategory(cat === attendeeCategory ? "" : cat)
                  }
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-sm border transition-all duration-200 text-left leading-tight",
                    attendeeCategory === cat
                      ? "bg-[#c59d5f] border-[#c59d5f] text-[#070707] font-medium"
                      : "bg-white/5 border-white/10 text-[#efe5d2]/60 hover:border-[#c59d5f]/40 hover:text-[#efe5d2]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input type="hidden" name="attendeeCategory" value={attendeeCategory} />
          </Field>

          {/* ── Additional Information ── */}
          <SectionHeader>Additional Information</SectionHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                LinkedIn Profile{" "}
                <span className="text-white/30 normal-case font-normal tracking-normal">
                  (Optional)
                </span>
              </FieldLabel>
              <Input
                type="url"
                name="linkedin"
                placeholder="linkedin.com/in/yourname"
                className={inputCls}
              />
            </Field>
            <Field>
              <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                Company / Personal Website{" "}
                <span className="text-white/30 normal-case font-normal tracking-normal">
                  (Optional)
                </span>
              </FieldLabel>
              <Input
                type="url"
                name="website"
                placeholder="yourwebsite.com"
                className={inputCls}
              />
            </Field>
          </div>

          <Field>
            <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
              How did you hear about the event?
            </FieldLabel>
            <SelectField name="source">
              <option value="">Select an option</option>
              <option value="ncs-enugu">NCS Enugu</option>
              <option value="social-media">Social Media</option>
              <option value="friend-colleague">Friend / Colleague</option>
              <option value="email">Email</option>
              <option value="partner-organisation">Partner Organisation</option>
              <option value="other">Other</option>
            </SelectField>
          </Field>

          {/* ── Consent ── */}
          <SectionHeader>Consent</SectionHeader>

          <div className="flex flex-col gap-4">
            <ConsentCheckbox
              id="consent1"
              checked={consent1}
              onChange={setConsent1}
              label="I confirm that the information provided is accurate."
            />
            <ConsentCheckbox
              id="consent2"
              checked={consent2}
              onChange={setConsent2}
              label="I understand that completing this registration does not automatically guarantee attendance, and that official event passes will only be issued to selected attendees."
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm font-light leading-relaxed bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <Field className="mt-2">
            <Button
              type="submit"
              disabled={!consent1 || !consent2 || loading}
              className="w-full h-12 bg-[#c59d5f] hover:bg-[#b38b4d] text-[#070707] font-semibold text-base rounded-xl border-0 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting…" : "Register"}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      {/* ── Success Modal ── */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0e0e0e] border border-[#c59d5f]/25 rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl text-center"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-white/50" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-[#c59d5f]" />
              </div>

              <h2 className="text-2xl md:text-3xl font-light text-[#efe5d2] mb-1">
                Registration Successful! 🎉
              </h2>
              <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                NCS Enugu EIIA 2026
              </p>

              <div className="text-left space-y-3 text-sm text-white/55 font-light leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Thank you for registering for the NCS Enugu Innovation &
                  Impact Awards (EIIA) 2026. Your registration has been
                  received successfully.
                </p>
                <p>
                  Please note that submitting a registration does not
                  automatically guarantee access to the event. Due to limited
                  slots, attendance is strictly by invitation.
                </p>
                <p>
                  If you&apos;re selected to attend, you&apos;ll receive your Official{" "}
                  <span className="text-[#c59d5f]">
                    Event Pass/Invitation
                  </span>{" "}
                  via email before the event.
                </p>
                <p>
                  We appreciate your interest and look forward to welcoming you
                  to{" "}
                  <strong className="text-[#efe5d2]/80">EIIA 2026</strong>.
                </p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 w-full h-11 bg-[#c59d5f] hover:bg-[#b38b4d] text-[#070707] font-semibold text-sm rounded-xl transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
