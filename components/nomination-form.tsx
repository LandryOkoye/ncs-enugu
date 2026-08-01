"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, Upload, X, Trophy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"

const FLAGSHIP_CATEGORIES = [
  "Tech Leader of the Year",
  "Innovation & Impact Award",
  "Emerging Tech Talent Award",
  "Startup Excellence Award",
  "Women in Technology Impact Award",
  "Digital Transformation Excellence Award",
  "Public Sector Tech Impact Award",
  "Ecosystem Impact Award",
  "Lifetime Achievement Award",
]

const SPECIAL_CATEGORIES = [
  "Technology Hub Recognition",
  "Artificial Intelligence Innovation Recognition",
  "Cybersecurity Innovation Recognition",
  "Blockchain Innovation Recognition",
  "FinTech Innovation Recognition",
  "EdTech Innovation Recognition",
  "Robotics & Emerging Technology Recognition",
  "Research Excellence Recognition",
  "Ecosystem Builder Recognition",
  "Unsung Hero Recognition",
]

const ALL_CATEGORIES = [...FLAGSHIP_CATEGORIES, ...SPECIAL_CATEGORIES]

const RELATIONSHIP_OPTIONS = ["Self", "Colleague", "Employer", "Mentor", "Peer", "Friend", "Other"]

const STATE_OPTIONS = ["Enugu", "Abia", "Anambra", "Ebonyi", "Imo", "Rivers", "Other"]

const HOW_HEARD_OPTIONS = [
  "NCS",
  "Social Media",
  "Technology Community",
  "Friend/Colleague",
  "University",
  "Company/Organization",
  "Website",
  "Other",
]

const YEARS_ACTIVE_OPTIONS = [
  "Less than 1 year",
  "1 – 2 years",
  "3 – 5 years",
  "6 – 10 years",
  "More than 10 years",
]

const STEP_LABELS = [
  "Nominator",
  "Nominee",
  "Category",
  "Details",
  "Documents",
  "Declaration",
]

const inputCls =
  "h-10 bg-white/5 border-white/10 text-[#efe5d2] placeholder:text-white/25 focus-visible:border-[#c59d5f] focus-visible:ring-[#c59d5f]/20 rounded-lg"

const textareaCls =
  "w-full min-h-[120px] resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-[#efe5d2] placeholder:text-white/25 outline-none transition-colors focus:border-[#c59d5f] font-light"

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-1 mb-1">
      <span className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

function SelectField({ children, className, ...props }: React.ComponentProps<"select">) {
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

function RadioItem({
  label,
  checked,
  onSelect,
}: {
  label: string
  checked: boolean
  onSelect: () => void
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        onClick={onSelect}
        className={cn(
          "w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center shrink-0",
          checked
            ? "border-[#c59d5f]"
            : "border-white/20 bg-white/5 group-hover:border-[#c59d5f]/50"
        )}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-[#c59d5f] block" />}
      </button>
      <span className="text-sm text-white/70 font-light">{label}</span>
    </label>
  )
}

function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <button
        type="button"
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
      <span className="text-sm text-white/70 leading-relaxed font-light">{label}</span>
    </label>
  )
}

function ConsentCheck({
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
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
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

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
}

export function NominationForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [stepError, setStepError] = useState("")

  // Step 1 – Nominator
  const [nominatingType, setNominatingType] = useState("")
  const [nominatorName, setNominatorName] = useState("")
  const [nominatorPhone, setNominatorPhone] = useState("")
  const [relationship, setRelationship] = useState("")
  const [relationshipOther, setRelationshipOther] = useState("")

  // Step 2 – Nominee
  const [nomineeName, setNomineeName] = useState("")
  const [nomineeOrg, setNomineeOrg] = useState("")
  const [nomineeRole, setNomineeRole] = useState("")
  const [nomineeState, setNomineeState] = useState("")
  const [nomineeStateOther, setNomineeStateOther] = useState("")
  const [nomineeEmail, setNomineeEmail] = useState("")
  const [nomineePhone, setNomineePhone] = useState("")
  const [yearsActive, setYearsActive] = useState("")

  // Step 3 – Award Category
  const [flagshipCats, setFlagshipCats] = useState<Set<string>>(new Set())
  const [specialCats, setSpecialCats] = useState<Set<string>>(new Set())
  const [strongestCat, setStrongestCat] = useState("")

  // Step 4 – Details
  const [impact, setImpact] = useState("")
  const [links, setLinks] = useState("")

  // Step 5 – Documents
  const [supportingDocs, setSupportingDocs] = useState<File[]>([])
  const [nomineePic, setNomineePic] = useState<File | null>(null)

  // Step 6 – Declaration
  const [confirmAccuracy, setConfirmAccuracy] = useState(false)
  const [confirmConsent, setConfirmConsent] = useState(false)
  const [extraNotes, setExtraNotes] = useState("")
  const [howHeard, setHowHeard] = useState("")
  const [howHeardOther, setHowHeardOther] = useState("")

  const allSelected = [...flagshipCats, ...specialCats]

  function toggleFlagship(cat: string) {
    setFlagshipCats(prev => {
      const next = new Set(prev)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return next
    })
    if (strongestCat === cat) setStrongestCat("")
  }

  function toggleSpecial(cat: string) {
    setSpecialCats(prev => {
      const next = new Set(prev)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return next
    })
    if (strongestCat === cat) setStrongestCat("")
  }

  function validate(): string {
    switch (step) {
      case 1:
        if (!nominatingType) return "Please indicate if you are nominating yourself or someone else."
        if (!nominatorName.trim()) return "Your full name is required."
        if (!nominatorPhone.trim()) return "Your phone number is required."
        if (!relationship) return "Please select your relationship to the nominee."
        if (relationship === "Other" && !relationshipOther.trim()) return "Please specify your relationship."
        break
      case 2:
        if (!nomineeName.trim()) return "Nominee's full name is required."
        if (!nomineeRole.trim()) return "Nominee's position/role is required."
        if (!yearsActive) return "Please select how long the nominee has been active."
        break
      case 3:
        if (allSelected.length === 0) return "Please select at least one award category."
        if (allSelected.length > 1 && !strongestCat) return "Please select the nominee's strongest category."
        break
      case 4:
        if (!impact.trim()) return "Please describe the nominee's impact."
        break
      case 6:
        if (!confirmAccuracy) return "Please confirm the information is accurate."
        if (!howHeard) return "Please tell us how you heard about the Awards."
        if (howHeard === "Other" && !howHeardOther.trim()) return "Please specify how you heard about the Awards."
        break
    }
    return ""
  }

  function goNext() {
    const err = validate()
    if (err) { setStepError(err); return }
    setStepError("")
    setDirection(1)
    setStep(s => s + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function goBack() {
    setStepError("")
    setDirection(-1)
    setStep(s => s - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function handleSubmit() {
    const err = validate()
    if (err) { setStepError(err); return }
    setStepError("")
    setLoading(true)
    setError("")

    try {
      const fd = new FormData()
      fd.append("nominatingType", nominatingType)
      fd.append("nominatorName", nominatorName)
      fd.append("nominatorPhone", nominatorPhone)
      fd.append("relationship", relationship === "Other" ? `Other: ${relationshipOther}` : relationship)
      fd.append("nomineeName", nomineeName)
      fd.append("nomineeOrg", nomineeOrg)
      fd.append("nomineeRole", nomineeRole)
      fd.append("nomineeState", nomineeState === "Other" ? `Other: ${nomineeStateOther}` : nomineeState)
      fd.append("nomineeEmail", nomineeEmail)
      fd.append("nomineePhone", nomineePhone)
      fd.append("yearsActive", yearsActive)
      fd.append("flagshipCategories", [...flagshipCats].join(", "))
      fd.append("specialCategories", [...specialCats].join(", "))
      fd.append("strongestCategory", allSelected.length === 1 ? allSelected[0] : strongestCat)
      fd.append("impact", impact)
      fd.append("links", links)
      fd.append("confirmAccuracy", confirmAccuracy ? "true" : "false")
      fd.append("confirmConsent", confirmConsent ? "true" : "false")
      fd.append("extraNotes", extraNotes)
      fd.append("howHeard", howHeard === "Other" ? `Other: ${howHeardOther}` : howHeard)
      supportingDocs.forEach(f => fd.append("supportingDocs", f))
      if (nomineePic) fd.append("nomineePic", nomineePic)

      const res = await fetch("/api/nominate", {
        method: "POST",
        body: fd,
      })
      if (!res.ok) throw new Error("server error")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or contact enugustatechapter@ncs.org.ng.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-6 py-20 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-[#c59d5f]" />
        </div>
        <div>
          <h2 className="text-2xl font-light text-[#efe5d2] mb-2">Nomination Submitted!</h2>
          <p className="text-sm text-white/50 font-light max-w-sm">
            Thank you for your nomination. The Awards Committee will review your submission and follow up
            as needed.
          </p>
        </div>
        <a
          href="/"
          className="mt-2 inline-block px-6 py-2.5 rounded-full bg-[#c59d5f] text-[#070707] text-sm font-semibold tracking-wide hover:bg-[#d4ad6f] transition-colors"
        >
          Back to Home
        </a>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1.5 mb-1">
        <h1 className="text-2xl md:text-3xl font-light text-[#efe5d2] leading-tight">
          Nominate for{" "}
          <span className="text-[#c59d5f]">EIIA 2026</span>
        </h1>
        <p className="text-sm text-white/40 font-light">
          Fields marked <span className="text-[#c59d5f]">*</span> are required
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-1.5">
        {STEP_LABELS.map((label, i) => {
          const n = i + 1
          const done = n < step
          const active = n === step
          return (
            <div key={label} className="flex items-center gap-1.5 flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all shrink-0",
                    done
                      ? "bg-[#c59d5f] text-[#070707]"
                      : active
                      ? "bg-[#c59d5f]/20 border border-[#c59d5f] text-[#c59d5f]"
                      : "bg-white/5 border border-white/10 text-white/30"
                  )}
                >
                  {done ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : n}
                </div>
                <span
                  className={cn(
                    "text-[9px] font-semibold tracking-wide uppercase hidden sm:block",
                    active ? "text-[#c59d5f]" : done ? "text-white/40" : "text-white/20"
                  )}
                >
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-px transition-all mb-3",
                    done ? "bg-[#c59d5f]/60" : "bg-white/10"
                  )}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Step Content */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="flex flex-col gap-5"
          >
            {step === 1 && (
              <FieldGroup>
                <SectionHeader>Nominator Information</SectionHeader>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-2">
                    Are you nominating yourself or someone else? <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <div className="flex flex-col gap-2">
                    <RadioItem
                      label="Self"
                      checked={nominatingType === "Self"}
                      onSelect={() => setNominatingType("Self")}
                    />
                    <RadioItem
                      label="Someone else"
                      checked={nominatingType === "Someone else"}
                      onSelect={() => setNominatingType("Someone else")}
                    />
                  </div>
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Your Full Name <span className="text-[#c59d5f]">*</span>
                    </FieldLabel>
                    <Input
                      type="text"
                      value={nominatorName}
                      onChange={e => setNominatorName(e.target.value)}
                      placeholder="John Doe"
                      className={inputCls}
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Your Phone Number <span className="text-[#c59d5f]">*</span>
                    </FieldLabel>
                    <Input
                      type="tel"
                      value={nominatorPhone}
                      onChange={e => setNominatorPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-2">
                    Your relationship to the nominee <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {RELATIONSHIP_OPTIONS.map(opt => (
                      <RadioItem
                        key={opt}
                        label={opt}
                        checked={relationship === opt}
                        onSelect={() => setRelationship(opt)}
                      />
                    ))}
                  </div>
                  {relationship === "Other" && (
                    <Input
                      type="text"
                      value={relationshipOther}
                      onChange={e => setRelationshipOther(e.target.value)}
                      placeholder="Please specify"
                      className={cn(inputCls, "mt-3")}
                    />
                  )}
                </Field>
              </FieldGroup>
            )}

            {step === 2 && (
              <FieldGroup>
                <SectionHeader>Nominee Information</SectionHeader>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Nominee&apos;s Full Name <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <Input
                    type="text"
                    value={nomineeName}
                    onChange={e => setNomineeName(e.target.value)}
                    placeholder="Jane Smith"
                    className={inputCls}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Organization / Institution / Startup
                    </FieldLabel>
                    <Input
                      type="text"
                      value={nomineeOrg}
                      onChange={e => setNomineeOrg(e.target.value)}
                      placeholder="TechCorp Ltd."
                      className={inputCls}
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Position / Role <span className="text-[#c59d5f]">*</span>
                    </FieldLabel>
                    <Input
                      type="text"
                      value={nomineeRole}
                      onChange={e => setNomineeRole(e.target.value)}
                      placeholder="CTO / Founder"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-2">
                    Which state is the nominee primarily based in?
                  </FieldLabel>
                  <p className="text-[11px] text-white/35 font-light mb-3 leading-relaxed">
                    These Awards focus on recognizing impact within Enugu State and the Southeast region.
                    If the nominee is based elsewhere but has made significant contributions, select
                    &ldquo;Other&rdquo; and specify the state.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {STATE_OPTIONS.map(opt => (
                      <RadioItem
                        key={opt}
                        label={opt}
                        checked={nomineeState === opt}
                        onSelect={() => setNomineeState(opt)}
                      />
                    ))}
                  </div>
                  {nomineeState === "Other" && (
                    <Input
                      type="text"
                      value={nomineeStateOther}
                      onChange={e => setNomineeStateOther(e.target.value)}
                      placeholder="Enter state"
                      className={cn(inputCls, "mt-3")}
                    />
                  )}
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Nominee&apos;s Email Address
                    </FieldLabel>
                    <Input
                      type="email"
                      value={nomineeEmail}
                      onChange={e => setNomineeEmail(e.target.value)}
                      placeholder="nominee@example.com"
                      className={inputCls}
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Nominee&apos;s Phone Number
                    </FieldLabel>
                    <Input
                      type="tel"
                      value={nomineePhone}
                      onChange={e => setNomineePhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    How long has the nominee been active within Enugu&apos;s technology ecosystem?{" "}
                    <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <SelectField
                    value={yearsActive}
                    onChange={e => setYearsActive(e.target.value)}
                  >
                    <option value="">Choose...</option>
                    {YEARS_ACTIVE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </SelectField>
                </Field>
              </FieldGroup>
            )}

            {step === 3 && (
              <FieldGroup>
                <SectionHeader>Award Category</SectionHeader>
                <p className="text-sm text-white/40 font-light -mt-2">
                  Which award category(ies) best fit this nominee? Select all that apply.
                </p>

                <div>
                  <p className="text-[11px] font-bold text-[#efe5d2]/50 tracking-widest uppercase mb-3">
                    🏆 Flagship Award Categories
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {FLAGSHIP_CATEGORIES.map(cat => (
                      <CheckboxItem
                        key={cat}
                        label={cat}
                        checked={flagshipCats.has(cat)}
                        onChange={() => toggleFlagship(cat)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#efe5d2]/50 tracking-widest uppercase mb-3">
                    ⭐ Special Recognition Categories
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {SPECIAL_CATEGORIES.map(cat => (
                      <CheckboxItem
                        key={cat}
                        label={cat}
                        checked={specialCats.has(cat)}
                        onChange={() => toggleSpecial(cat)}
                      />
                    ))}
                  </div>
                </div>

                {allSelected.length > 1 && (
                  <Field>
                    <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Which ONE do you consider the nominee&apos;s strongest category?{" "}
                      <span className="text-[#c59d5f]">*</span>
                    </FieldLabel>
                    <SelectField
                      value={strongestCat}
                      onChange={e => setStrongestCat(e.target.value)}
                    >
                      <option value="">Choose...</option>
                      {allSelected.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </SelectField>
                  </Field>
                )}
              </FieldGroup>
            )}

            {step === 4 && (
              <FieldGroup>
                <SectionHeader>Nomination Details</SectionHeader>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Describe the nominee&apos;s impact on the technology ecosystem{" "}
                    <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <p className="text-[11px] text-white/30 font-light mb-2">
                    Include measurable outcomes, innovations, leadership contributions, products, services,
                    or community impact where applicable.
                  </p>
                  <textarea
                    value={impact}
                    onChange={e => setImpact(e.target.value)}
                    placeholder="Describe the nominee's impact..."
                    className={textareaCls}
                    rows={6}
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Provide links supporting this nomination
                  </FieldLabel>
                  <p className="text-[11px] text-white/30 font-light mb-2">
                    e.g. Website, LinkedIn, GitHub, Product Portfolio, News Articles
                  </p>
                  <textarea
                    value={links}
                    onChange={e => setLinks(e.target.value)}
                    placeholder="https://..."
                    className={textareaCls}
                    rows={4}
                  />
                </Field>
              </FieldGroup>
            )}

            {step === 5 && (
              <FieldGroup>
                <SectionHeader>Supporting Documents</SectionHeader>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Upload supporting documents
                  </FieldLabel>
                  <p className="text-[11px] text-white/30 font-light mb-3">
                    e.g. Award certificates, Photos, News articles, Project documents, Presentations.
                    Up to 5 files. Max 100 MB per file.
                  </p>
                  <label className="flex flex-col items-center justify-center gap-3 border border-dashed border-white/15 rounded-xl p-8 cursor-pointer hover:border-[#c59d5f]/40 transition-colors group">
                    <Upload className="w-8 h-8 text-white/20 group-hover:text-[#c59d5f]/50 transition-colors" />
                    <div className="text-center">
                      <p className="text-sm text-white/50 font-light">Click to upload or drag & drop</p>
                      <p className="text-xs text-white/25 mt-0.5">Max 5 files · 100 MB each</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.ppt,.pptx"
                      className="hidden"
                      onChange={e => {
                        const files = Array.from(e.target.files ?? []).slice(0, 5)
                        setSupportingDocs(files)
                      }}
                    />
                  </label>
                  {supportingDocs.length > 0 && (
                    <div className="flex flex-col gap-2 mt-3">
                      {supportingDocs.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                        >
                          <span className="text-xs text-white/60 font-light flex-1 truncate">{f.name}</span>
                          <button
                            type="button"
                            onClick={() => setSupportingDocs(prev => prev.filter((_, j) => j !== i))}
                            className="text-white/30 hover:text-[#c59d5f] transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </Field>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Upload a recent photograph of the nominee or organization logo
                  </FieldLabel>
                  <p className="text-[11px] text-white/30 font-light mb-3">
                    1 supported file. Image only. Max 10 MB.
                  </p>
                  <label className="flex flex-col items-center justify-center gap-3 border border-dashed border-white/15 rounded-xl p-8 cursor-pointer hover:border-[#c59d5f]/40 transition-colors group">
                    <Upload className="w-8 h-8 text-white/20 group-hover:text-[#c59d5f]/50 transition-colors" />
                    <div className="text-center">
                      <p className="text-sm text-white/50 font-light">Click to upload image</p>
                      <p className="text-xs text-white/25 mt-0.5">JPG, PNG · Max 10 MB</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => setNomineePic(e.target.files?.[0] ?? null)}
                    />
                  </label>
                  {nomineePic && (
                    <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-xs text-white/60 font-light flex-1 truncate">{nomineePic.name}</span>
                      <button
                        type="button"
                        onClick={() => setNomineePic(null)}
                        className="text-white/30 hover:text-[#c59d5f] transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </Field>
              </FieldGroup>
            )}

            {step === 6 && (
              <FieldGroup>
                <SectionHeader>Declaration</SectionHeader>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-3">
                    Consent <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <div className="flex flex-col gap-4">
                    <ConsentCheck
                      id="confirmAccuracy"
                      checked={confirmAccuracy}
                      onChange={setConfirmAccuracy}
                      label="I confirm that the information provided is accurate to the best of my knowledge."
                    />
                    <ConsentCheck
                      id="confirmConsent"
                      checked={confirmConsent}
                      onChange={setConfirmConsent}
                      label="I confirm that the nominee is aware of and consents to this nomination."
                    />
                  </div>
                </Field>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-1">
                    Anything else the Awards Committee should know?
                  </FieldLabel>
                  <textarea
                    value={extraNotes}
                    onChange={e => setExtraNotes(e.target.value)}
                    placeholder="Any additional information..."
                    className={textareaCls}
                    rows={3}
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-[#efe5d2]/60 text-[10px] font-semibold tracking-widest uppercase mb-2">
                    How did you hear about the Awards? <span className="text-[#c59d5f]">*</span>
                  </FieldLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {HOW_HEARD_OPTIONS.map(opt => (
                      <RadioItem
                        key={opt}
                        label={opt}
                        checked={howHeard === opt}
                        onSelect={() => setHowHeard(opt)}
                      />
                    ))}
                  </div>
                  {howHeard === "Other" && (
                    <Input
                      type="text"
                      value={howHeardOther}
                      onChange={e => setHowHeardOther(e.target.value)}
                      placeholder="Please specify"
                      className={cn(inputCls, "mt-3")}
                    />
                  )}
                </Field>
              </FieldGroup>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Step error */}
      {stepError && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400 font-light"
        >
          {stepError}
        </motion.p>
      )}

      {/* Global submit error */}
      {error && (
        <p className="text-xs text-red-400 font-light">{error}</p>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        {step > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className="px-5 py-2 rounded-full border border-white/15 text-sm text-white/50 font-semibold tracking-wide hover:border-white/30 hover:text-white/70 transition-all"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 6 ? (
          <button
            type="button"
            onClick={goNext}
            className="px-6 py-2 rounded-full bg-[#c59d5f] text-[#070707] text-sm font-semibold tracking-wide hover:bg-[#d4ad6f] transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 rounded-full bg-[#c59d5f] text-[#070707] text-sm font-semibold tracking-wide hover:bg-[#d4ad6f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Nomination"}
          </button>
        )}
      </div>
    </div>
  )
}
