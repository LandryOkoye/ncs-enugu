"use client"

import { useState } from "react"
import Link from "next/link"
import { Trophy, Calendar, MapPin, Clock, Star, BookOpen, ListChecks } from "lucide-react"
import { NominationForm } from "@/components/nomination-form"
import { InfoModal } from "@/components/ui/info-modal"
import { FrameworkContent, CriteriaContent } from "@/components/nominate-info-content"

type InfoPanel = "framework" | "criteria" | null

export default function NominatePage() {
  const [activePanel, setActivePanel] = useState<InfoPanel>(null)

  return (
    <div className="min-h-screen bg-[#070707] lg:grid lg:grid-cols-[1fr_480px]">
      {/* ── Left: Form ── */}
      <div className="flex flex-col px-6 md:px-12 xl:px-20 py-8 pt-28">
        <Link href="/" className="mb-10 inline-flex">
          <img
            src="/logo.png"
            alt="NCS Enugu Awards"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Info buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActivePanel("framework")}
            className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#c59d5f]/40 hover:bg-[#c59d5f]/5 transition-colors cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-3 h-3 text-[#c59d5f]" />
            </span>
            <span className="text-xs text-white/70 font-light">Nomination Framework</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePanel("criteria")}
            className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#c59d5f]/40 hover:bg-[#c59d5f]/5 transition-colors cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center shrink-0">
              <ListChecks className="w-3 h-3 text-[#c59d5f]" />
            </span>
            <span className="text-xs text-white/70 font-light">Categories &amp; Criteria</span>
          </button>
        </div>

        {/* Mobile award summary */}
        <div className="lg:hidden mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
            Award Details
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50 font-light">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c59d5f]" />
              Friday, 25 September 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
              Presidential Hotel, Enugu
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c59d5f]" />
              4:00 PM
            </span>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <NominationForm />
        </div>

        <p className="mt-10 text-xs text-white/20 font-light">
          &copy; {new Date().getFullYear()} NCS Enugu. All rights reserved.
        </p>
      </div>

      {/* ── Right: Sticky Info Panel ── */}
      <div className="hidden lg:flex flex-col sticky top-0 h-screen bg-[#050505] border-l border-white/5 overflow-hidden">
        {/* Background glow */}
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c59d5f]/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#c59d5f]/5 blur-3xl" />

          {/* Trophy icon centered */}
          <div className="absolute inset-0 flex items-center justify-center mt-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 flex items-center justify-center">
                <img src="/NCS 2.png" alt="EIIA Logo"/>
              </div>
              <div className="text-center">
                <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  EIIA 2026
                </p>
                <p className="text-[#efe5d2]/40 text-sm font-light">
                  Recognizing Excellence in
                </p>
                <p className="text-[#efe5d2]/60 text-sm font-semibold">
                  Enugu&apos;s Tech Ecosystem
                </p>
              </div>
            </div>
          </div>

          {/* Top badge */}
          {/* <div className="absolute top-8 left-8 right-8">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase">
              NCS Enugu EIIA 2026
            </span>
          </div> */}
        </div>

        {/* Info block */}
        <div className="p-8 flex flex-col gap-6 mb-25">
          <div>
            <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
              Award Categories
            </p>
            <h2 className="text-2xl font-light text-[#efe5d2] leading-snug mb-5">
              19 Award Categories
            </h2>

            <div className="flex flex-col gap-3">
              {[
                { icon: Trophy, label: "10 Flagship Award Categories" },
                { icon: Star, label: "10 Special Recognition Categories" },
                { icon: Calendar, label: "Award Night: 25 September 2026" },
                { icon: MapPin, label: "Presidential Hotel, Enugu" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#c59d5f]" />
                  </div>
                  <span className="text-sm text-white/60 font-light">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          {/* <div className="p-4 rounded-xl bg-[#c59d5f]/8 border border-[#c59d5f]/15">
            <div className="flex items-start gap-2.5">
              <Trophy className="w-4 h-4 text-[#c59d5f] mt-0.5 shrink-0" />
              <div>
                <p className="text-[#c59d5f] text-xs font-semibold mb-1">Nomination Guidelines</p>
                <p className="text-white/45 text-xs font-light leading-relaxed">
                  Nominations focus on recognizing impact within Enugu State and the Southeast region.
                  The Awards Committee reviews all submissions and will contact you if further
                  information is needed.
                </p>
              </div>
            </div>
          </div> */}

          <p className="text-white/30 text-xs font-light leading-relaxed">
            Join Nigeria&apos;s premier platform celebrating technology innovation, digital excellence,
            and impactful leadership in Enugu&apos;s growing tech ecosystem.
          </p>
        </div>
      </div>

      <InfoModal
        open={activePanel === "framework"}
        onClose={() => setActivePanel(null)}
        title="Nomination Framework"
        icon={BookOpen}
      >
        <FrameworkContent />
      </InfoModal>

      <InfoModal
        open={activePanel === "criteria"}
        onClose={() => setActivePanel(null)}
        title="Categories & Criteria"
        icon={ListChecks}
      >
        <CriteriaContent />
      </InfoModal>
    </div>
  )
}
